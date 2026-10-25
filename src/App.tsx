import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import {
  Compass,
  RotateCcw,
  Camera,
  RefreshCw,
  Plus,
  Minus,
  Trash2,
  Info,
  Volume2,
  VolumeX,
  Sparkles,
  Move,
  X,
  ExternalLink,
  Maximize2,
  Layers,
  Check,
} from 'lucide-react';
import { ALQAMI_ARTIFACTS, type AlqamiArtifact } from './data/alqamiArtifacts';
import { OrientationTracker } from './components/xr/spatial/orientationTracker';
import { requestMotionPermission } from './components/xr/spatial/motionPermission';
import { spatialSound } from './utils/spatialSound';
import { assetUrl } from './utils/assetUrl';
import { AlqamiLogoSvg } from './components/common/AlqamiLogoSvg';

const EYE_HEIGHT = 1.35; // Eye height in meters above floor

interface PlacedArtifact {
  instanceId: string;
  artifact: AlqamiArtifact;
  group: THREE.Group;
  shadow: THREE.Mesh;
  halo: THREE.Mesh;
}

export function App() {
  // ── Camera Passthrough State ──
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraFacing, setCameraFacing] = useState<'environment' | 'user'>('environment');
  const [cameraError, setCameraError] = useState<string | null>(null);

  // ── Motion Tracking State ──
  const trackerRef = useRef<OrientationTracker>(new OrientationTracker());
  const [motionActive, setMotionActive] = useState(false);
  const [motionPromptNeeded, setMotionPromptNeeded] = useState(false);

  // ── 3D Scene Refs ──
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const reticleRef = useRef<THREE.Group | null>(null);
  const floorPlaneRef = useRef<THREE.Plane>(new THREE.Plane(new THREE.Vector3(0, 1, 0), EYE_HEIGHT));
  const placedMapRef = useRef<Map<string, PlacedArtifact>>(new Map());
  const activeInstanceIdRef = useRef<string | null>(null);

  // ── UI State ──
  const [selectedArtifact, setSelectedArtifact] = useState<AlqamiArtifact>(ALQAMI_ARTIFACTS[0]);
  const [selectedInstanceId, setSelectedInstanceId] = useState<string | null>(null);
  const [placedCount, setPlacedCount] = useState(0);
  const [isLoadingModel, setIsLoadingModel] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Touch gesture state
  const gestureRef = useRef<{
    pointerIds: Set<number>;
    pointers: Map<number, { x: number; y: number }>;
    draggedInstanceId: string | null;
    initialDistance: number;
    initialScale: number;
    initialAngle: number;
    initialRotationY: number;
  }>({
    pointerIds: new Set(),
    pointers: new Map(),
    draggedInstanceId: null,
    initialDistance: 0,
    initialScale: 1,
    initialAngle: 0,
    initialRotationY: 0,
  });

  // Cached model templates
  const modelTemplatesRef = useRef<Map<string, THREE.Group>>(new Map());

  // Check iOS device
  useEffect(() => {
    const isApple = /iPhone|iPad|iPod/.test(navigator.userAgent);
    setIsIOS(isApple);
    if (isApple && typeof (DeviceOrientationEvent as any)?.requestPermission === 'function') {
      setMotionPromptNeeded(true);
    }
  }, []);

  // ── 1. Camera Initialization ──
  const startCamera = useCallback(async (facing: 'environment' | 'user') => {
    try {
      setCameraError(null);
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: facing },
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true');
        videoRef.current.setAttribute('autoplay', 'true');
        videoRef.current.setAttribute('muted', 'true');
        await videoRef.current.play();
        setCameraActive(true);
        setCameraFacing(facing);
      }
    } catch (err: any) {
      console.warn('Camera access error:', err);
      setCameraError(
        err.name === 'NotAllowedError'
          ? 'تم رفض إذن الكاميرا. يرجى تفعيل إذن الكاميرا في المتصفح لاستخدام الواقع المعزز.'
          : 'تعذر الوصول إلى الكاميرا الخلفية. جاري العرض في فضاء الواقع المعزز.'
      );
      setCameraActive(false);
    }
  }, []);

  useEffect(() => {
    startCamera(cameraFacing);
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((t) => t.stop());
      }
    };
  }, [startCamera, cameraFacing]);

  // ── 2. Motion Permission & Tracker ──
  const enableMotion = useCallback(async () => {
    spatialSound.playSnap();
    const granted = await requestMotionPermission();
    if (granted) {
      trackerRef.current.start();
      setMotionActive(true);
      setMotionPromptNeeded(false);
    }
  }, []);

  useEffect(() => {
    trackerRef.current.start();
    const checkTimer = setTimeout(() => {
      if (trackerRef.current.sensorAlive) {
        setMotionActive(true);
        setMotionPromptNeeded(false);
      }
    }, 600);
    return () => {
      clearTimeout(checkTimer);
      trackerRef.current.stop();
    };
  }, []);

  const handleRecenter = useCallback(() => {
    spatialSound.playSnap();
    trackerRef.current.recenter();

    // If an artifact is selected, move it in front of the camera
    const selectedId = activeInstanceIdRef.current;
    if (selectedId && cameraRef.current) {
      const placed = placedMapRef.current.get(selectedId);
      if (placed) {
        const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(cameraRef.current.quaternion);
        fwd.y = 0;
        fwd.normalize().multiplyScalar(1.6);
        placed.group.position.set(fwd.x, -EYE_HEIGHT, fwd.z);
      }
    }
  }, []);

  // ── 3. Three.js Scene Setup ──
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.05, 50);
    camera.position.set(0, 0, 0);
    cameraRef.current = camera;

    // Renderer (optimized for mobile VRAM & battery)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting (Physical AR Room illumination)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff6ea, 2.2);
    dirLight.position.set(1.5, 4, 2);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 10;
    dirLight.shadow.camera.left = -2.5;
    dirLight.shadow.camera.right = 2.5;
    dirLight.shadow.camera.top = 2.5;
    dirLight.shadow.camera.bottom = -2.5;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);

    const softFillLight = new THREE.DirectionalLight(0x8bc9ff, 0.6);
    softFillLight.position.set(-2, 2, -1);
    scene.add(softFillLight);

    // Floor Shadow Receiver Plane
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.38 });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -EYE_HEIGHT;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // AR Reticle (Glowing floor target)
    const reticleGroup = new THREE.Group();
    const ringGeo = new THREE.RingGeometry(0.18, 0.22, 32);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f5d4,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    reticleGroup.add(ringMesh);

    // Center dot
    const dotGeo = new THREE.CircleGeometry(0.035, 16);
    dotGeo.rotateX(-Math.PI / 2);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    reticleGroup.add(new THREE.Mesh(dotGeo, dotMat));
    reticleGroup.position.set(0, -EYE_HEIGHT, -1.8);
    scene.add(reticleGroup);
    reticleRef.current = reticleGroup;

    // Window Resize Handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ── Animation Loop ──
    let animId: number;
    const raycaster = new THREE.Raycaster();
    const reticleTarget = new THREE.Vector3(0, -EYE_HEIGHT, -1.8);

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate);

      // Update camera attitude from device sensors (or mouse fallback)
      if (cameraRef.current) {
        trackerRef.current.getCameraQuaternion(cameraRef.current.quaternion);

        // Raycast from camera center to floor plane to update reticle
        raycaster.set(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1).applyQuaternion(cameraRef.current.quaternion));
        const intersection = new THREE.Vector3();
        const hit = raycaster.ray.intersectPlane(floorPlaneRef.current, intersection);

        if (hit && intersection.z < 0) {
          const dist = Math.hypot(intersection.x, intersection.z);
          if (dist > 0.4 && dist < 7) {
            reticleTarget.copy(intersection);
          }
        } else {
          const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(cameraRef.current.quaternion);
          fwd.y = 0;
          fwd.normalize().multiplyScalar(1.8);
          reticleTarget.set(fwd.x, -EYE_HEIGHT, fwd.z);
        }

        if (reticleRef.current) {
          reticleRef.current.position.lerp(reticleTarget, 0.2);
          reticleRef.current.rotation.y = time * 0.001;
        }
      }

      // Rotate halos of selected objects
      placedMapRef.current.forEach((placed) => {
        if (placed.halo) {
          placed.halo.rotation.y = time * 0.0015;
        }
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // ── 4. Load & Place 3D Artifact ──
  const loadArtifactTemplate = useCallback(async (artifact: AlqamiArtifact): Promise<THREE.Group> => {
    const cached = modelTemplatesRef.current.get(artifact.id);
    if (cached) return cached.clone();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(assetUrl('draco/'));
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const modelUrl = assetUrl(artifact.model.glb.replace(/^\//, ''));

    return new Promise((resolve, reject) => {
      gltfLoader.load(
        modelUrl,
        (gltf) => {
          const scene = gltf.scene;

          // Compute bounding box
          const box = new THREE.Box3().setFromObject(scene);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

          // Scale model so largest dimension is ~0.55m in physical space
          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          const targetDim = 0.55 * (artifact.model.scale || 1.0);
          const baseScale = targetDim / maxDim;

          const rootGroup = new THREE.Group();
          scene.scale.setScalar(baseScale);

          // Center horizontally and seat flat on the floor (Y = 0)
          scene.position.x = -center.x * baseScale;
          scene.position.y = -box.min.y * baseScale;
          scene.position.z = -center.z * baseScale;

          // Shadow and material setup
          scene.traverse((node: any) => {
            if (node.isMesh) {
              node.castShadow = true;
              node.receiveShadow = true;
              if (node.material) {
                node.material.roughness = Math.max(0.2, node.material.roughness ?? 0.5);
              }
            }
          });

          rootGroup.add(scene);
          modelTemplatesRef.current.set(artifact.id, rootGroup);
          resolve(rootGroup.clone());
        },
        undefined,
        (err) => {
          console.error('Failed to load artifact model:', modelUrl, err);
          reject(err);
        }
      );
    });
  }, []);

  const handlePlaceArtifact = useCallback(
    async (artifactToPlace: AlqamiArtifact = selectedArtifact) => {
      if (!sceneRef.current) return;
      setIsLoadingModel(true);

      try {
        const modelGroup = await loadArtifactTemplate(artifactToPlace);
        const scene = sceneRef.current;
        const instanceId = `${artifactToPlace.id}-${Date.now()}`;

        // Position model group at current reticle location
        const spawnPos = reticleRef.current
          ? reticleRef.current.position.clone()
          : new THREE.Vector3(0, -EYE_HEIGHT, -1.8);

        modelGroup.position.copy(spawnPos);

        // Turn artifact towards the camera
        if (cameraRef.current) {
          const dir = new THREE.Vector3().subVectors(cameraRef.current.position, spawnPos);
          modelGroup.rotation.y = Math.atan2(dir.x, dir.z);
        }

        // Contact shadow plane underneath object
        const shadowCanvas = document.createElement('canvas');
        shadowCanvas.width = 128;
        shadowCanvas.height = 128;
        const ctx = shadowCanvas.getContext('2d');
        if (ctx) {
          const grad = ctx.createRadialGradient(64, 64, 8, 64, 64, 60);
          grad.addColorStop(0, 'rgba(0, 0, 0, 0.55)');
          grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.22)');
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 128, 128);
        }
        const shadowTex = new THREE.CanvasTexture(shadowCanvas);
        const shadowMat = new THREE.MeshBasicMaterial({
          map: shadowTex,
          transparent: true,
          depthWrite: false,
        });
        const shadowMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.75), shadowMat);
        shadowMesh.rotation.x = -Math.PI / 2;
        shadowMesh.position.y = 0.002;
        modelGroup.add(shadowMesh);

        // Golden selection halo ring
        const haloGeo = new THREE.RingGeometry(0.32, 0.35, 32);
        haloGeo.rotateX(-Math.PI / 2);
        const haloMat = new THREE.MeshBasicMaterial({
          color: 0xf59e0b,
          transparent: true,
          opacity: 0.85,
          side: THREE.DoubleSide,
        });
        const haloMesh = new THREE.Mesh(haloGeo, haloMat);
        haloMesh.position.y = 0.004;
        modelGroup.add(haloMesh);

        scene.add(modelGroup);

        const record: PlacedArtifact = {
          instanceId,
          artifact: artifactToPlace,
          group: modelGroup,
          shadow: shadowMesh,
          halo: haloMesh,
        };

        // De-select any previous halo
        placedMapRef.current.forEach((item) => {
          if (item.halo) item.halo.visible = false;
        });

        placedMapRef.current.set(instanceId, record);
        activeInstanceIdRef.current = instanceId;
        setSelectedInstanceId(instanceId);
        setPlacedCount(placedMapRef.current.size);

        if (soundEnabled) {
          spatialSound.playAlqamiChime();
        }
      } catch (err) {
        console.error('Error placing model:', err);
      } finally {
        setIsLoadingModel(false);
      }
    },
    [selectedArtifact, loadArtifactTemplate, soundEnabled]
  );

  // ── 5. Manipulation Actions ──
  const handleSelectInstance = (instanceId: string) => {
    activeInstanceIdRef.current = instanceId;
    setSelectedInstanceId(instanceId);
    placedMapRef.current.forEach((item, id) => {
      if (item.halo) {
        item.halo.visible = id === instanceId;
      }
      if (id === instanceId) {
        setSelectedArtifact(item.artifact);
      }
    });
    if (soundEnabled) spatialSound.playSnap();
  };

  const handleScaleChange = (multiplier: number) => {
    const activeId = activeInstanceIdRef.current;
    if (!activeId) return;
    const placed = placedMapRef.current.get(activeId);
    if (!placed) return;

    const currentScale = placed.group.scale.x;
    const nextScale = Math.max(0.25, Math.min(3.5, currentScale * multiplier));
    placed.group.scale.setScalar(nextScale);
    if (soundEnabled) spatialSound.playPinchTap();
  };

  const handleRotateQuarter = () => {
    const activeId = activeInstanceIdRef.current;
    if (!activeId) return;
    const placed = placedMapRef.current.get(activeId);
    if (!placed) return;

    placed.group.rotation.y += Math.PI / 4;
    if (soundEnabled) spatialSound.playPinchTap();
  };

  const handleClearAll = () => {
    if (!sceneRef.current) return;
    placedMapRef.current.forEach((placed) => {
      sceneRef.current?.remove(placed.group);
      placed.group.traverse((obj: any) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m: any) => m.dispose());
          else obj.material.dispose();
        }
      });
    });
    placedMapRef.current.clear();
    activeInstanceIdRef.current = null;
    setSelectedInstanceId(null);
    setPlacedCount(0);
    if (soundEnabled) spatialSound.playSnap();
  };

  // ── 6. Touch Gestures on AR Stage ──
  const handlePointerDown = (e: React.PointerEvent) => {
    const g = gestureRef.current;
    g.pointerIds.add(e.pointerId);
    g.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Raycast to check if tapping an existing artifact
    if (cameraRef.current && sceneRef.current) {
      const ndc = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      const ray = new THREE.Raycaster();
      ray.setFromCamera(ndc, cameraRef.current);

      let tappedId: string | null = null;
      for (const [id, placed] of placedMapRef.current.entries()) {
        const hits = ray.intersectObjects(placed.group.children, true);
        if (hits.length > 0) {
          tappedId = id;
          break;
        }
      }

      if (tappedId) {
        handleSelectInstance(tappedId);
        g.draggedInstanceId = tappedId;
      } else {
        // If 1 finger and tapped floor, drag currently selected artifact if close
        g.draggedInstanceId = activeInstanceIdRef.current;
      }
    }

    // Two finger gesture initialization (Pinch / Twist)
    if (g.pointerIds.size === 2) {
      const pts = Array.from(g.pointers.values());
      const p1 = pts[0];
      const p2 = pts[1];
      g.initialDistance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      g.initialAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

      const activeId = activeInstanceIdRef.current;
      if (activeId) {
        const placed = placedMapRef.current.get(activeId);
        if (placed) {
          g.initialScale = placed.group.scale.x;
          g.initialRotationY = placed.group.rotation.y;
        }
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const g = gestureRef.current;
    if (!g.pointers.has(e.pointerId)) return;
    g.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Handle 2-finger pinch & rotate
    if (g.pointerIds.size >= 2) {
      const activeId = activeInstanceIdRef.current;
      if (!activeId) return;
      const placed = placedMapRef.current.get(activeId);
      if (!placed) return;

      const pts = Array.from(g.pointers.values());
      const p1 = pts[0];
      const p2 = pts[1];
      const currentDistance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      const currentAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

      if (g.initialDistance > 10) {
        const scaleRatio = currentDistance / g.initialDistance;
        const newScale = Math.max(0.2, Math.min(4.0, g.initialScale * scaleRatio));
        placed.group.scale.setScalar(newScale);
      }

      const angleDelta = currentAngle - g.initialAngle;
      placed.group.rotation.y = g.initialRotationY - angleDelta;
      return;
    }

    // Handle 1-finger drag on floor
    if (g.pointerIds.size === 1 && g.draggedInstanceId && cameraRef.current) {
      const placed = placedMapRef.current.get(g.draggedInstanceId);
      if (!placed) return;

      const ndc = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      const ray = new THREE.Raycaster();
      ray.setFromCamera(ndc, cameraRef.current);

      const intersection = new THREE.Vector3();
      const hit = ray.ray.intersectPlane(floorPlaneRef.current, intersection);
      if (hit && intersection.z < 0) {
        const radius = Math.hypot(intersection.x, intersection.z);
        if (radius > 0.4 && radius < 8) {
          placed.group.position.set(intersection.x, -EYE_HEIGHT, intersection.z);
        }
      }
    } else if (g.pointerIds.size === 1 && !motionActive) {
      // Desktop / no-sensor drag to look around
      const prev = g.pointers.get(e.pointerId);
      if (prev) {
        const dx = (e.clientX - prev.x) * 0.005;
        const dy = (e.clientY - prev.y) * 0.005;
        trackerRef.current.addLook(dx, dy);
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const g = gestureRef.current;
    g.pointerIds.delete(e.pointerId);
    g.pointers.delete(e.pointerId);
    if (g.pointerIds.size === 0) {
      g.draggedInstanceId = null;
    }
  };

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden select-none bg-black text-white font-sans">
      {/* 1. Live Real-World AR Camera Video */}
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        className={`fixed inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none -z-10 ${
          cameraActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Fallback ambient spatial backdrop when camera is loading or unavailable */}
      {!cameraActive && (
        <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#1c1815] via-[#2d221b] to-[#120f0d] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center mb-4 text-amber-300 animate-pulse">
            <Camera className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold mb-2">عالم علقمي للواقع المعزز</h2>
          <p className="text-sm text-white/70 max-w-sm mb-6">
            {cameraError || 'جاري تشغيل كاميرا الواقع المعزز لعرض المقتنيات في غرفتك…'}
          </p>
          <button
            onClick={() => startCamera(cameraFacing)}
            className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm shadow-lg shadow-amber-500/30 transition-transform active:scale-95 flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span>تشغيل الكاميرا</span>
          </button>
        </div>
      )}

      {/* 2. Interactive Three.js AR Canvas Layer */}
      <div
        ref={canvasContainerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="absolute inset-0 touch-none cursor-crosshair z-10"
      />

      {/* 3. iOS Gyro Motion Permission Prompt Banner */}
      {motionPromptNeeded && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-40 w-[90vw] max-w-md bg-black/75 backdrop-blur-xl border border-amber-400/40 rounded-2xl p-3.5 shadow-2xl flex items-center justify-between gap-3 text-right" dir="rtl">
          <div className="text-xs text-white/90">
            <p className="font-bold text-amber-300">تفعيل مستشعر الحركة (Gyro)</p>
            <p className="text-white/75 text-[11px]">لتثبيت المقتنيات بدقة في غرفتك أثناء تحريك هاتفك</p>
          </div>
          <button
            onClick={enableMotion}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs whitespace-nowrap active:scale-95 transition-transform shadow-md"
          >
            تفعيل الآن
          </button>
        </div>
      )}

      {/* 4. Top AR Navigation Bar */}
      <header className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-4 pt-4 pb-2 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
        {/* Left: Alqami Heritage Emblem */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center p-1.5 text-amber-400 shadow-md">
            <AlqamiLogoSvg className="w-full h-full" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white drop-shadow">
              علقمي <span className="text-amber-400">·</span> Alqami AR
            </h1>
            <p className="text-[10px] text-white/70 font-medium">عالم المقتنيات الإسلامية</p>
          </div>
        </div>

        {/* Right: Quick Controls */}
        <div className="flex items-center gap-1.5 pointer-events-auto">
          {/* Recenter Compass Heading */}
          <button
            onClick={handleRecenter}
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 active:scale-95 transition"
            title="إعادة التوجيه إلى الأمام · Recenter AR Heading"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
          </button>

          {/* Flip Camera */}
          <button
            onClick={() => {
              spatialSound.playSnap();
              setCameraFacing((f) => (f === 'environment' ? 'user' : 'environment'));
            }}
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 active:scale-95 transition"
            title="تبديل الكاميرا · Flip Camera"
          >
            <RefreshCw className="w-3.5 h-3.5 text-white" />
          </button>

          {/* Sound Mute/Unmute */}
          <button
            onClick={() => {
              spatialSound.enabled = !soundEnabled;
              setSoundEnabled(!soundEnabled);
            }}
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 active:scale-95 transition"
            title={soundEnabled ? 'كتم الصوت' : 'تشغيل الصوت'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5 text-white/50" />}
          </button>

          {/* Artifact Details Modal */}
          <button
            onClick={() => {
              spatialSound.playSnap();
              setInfoModalOpen(true);
            }}
            className="w-8 h-8 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 active:scale-95 transition"
            title="تفاصيل المقتنى · Historical Details"
          >
            <Info className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </header>

      {/* 5. Center Placement & Instruction Reticle Badge */}
      <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] text-white/85 shadow-lg">
          <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" />
          <span>وجّه هاتفك نحو الأرضية أو الطاولة ثم اضغط تثبيت</span>
        </div>
      </div>

      {/* Loading Model Overlay Spinner */}
      {isLoadingModel && (
        <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full border-3 border-amber-400/20 border-t-amber-400 animate-spin mb-3" />
          <p className="text-xs font-semibold text-white drop-shadow">جاري تحميل المجسم ثلاثي الأبعاد…</p>
        </div>
      )}

      {/* 6. Floating Action Toolbar (Above Dock) */}
      <div className="absolute bottom-[108px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 pointer-events-auto max-w-[95vw]">
        {/* Primary Action: Place Model */}
        <button
          onClick={() => handlePlaceArtifact(selectedArtifact)}
          disabled={isLoadingModel}
          className="h-10 px-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs shadow-xl shadow-amber-500/25 flex items-center gap-2 active:scale-95 transition transform"
        >
          <Plus className="w-4 h-4" />
          <span>تثبيت في الغرفة · Place</span>
        </button>

        {/* Selected Object Controls (When at least 1 object placed) */}
        {placedCount > 0 && (
          <div className="flex items-center gap-1 p-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow-xl">
            {/* Scale Down */}
            <button
              onClick={() => handleScaleChange(0.85)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 active:scale-90 transition"
              title="تصغير الحجم · Scale Down"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>

            {/* Scale Up */}
            <button
              onClick={() => handleScaleChange(1.15)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 active:scale-90 transition"
              title="تكبير الحجم · Scale Up"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>

            {/* Rotate 45 deg */}
            <button
              onClick={handleRotateQuarter}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 active:scale-90 transition"
              title="تدوير المجسم · Rotate 45°"
            >
              <RotateCcw className="w-3.5 h-3.5 text-cyan-300" />
            </button>

            {/* Clear All */}
            <button
              onClick={handleClearAll}
              className="w-8 h-8 rounded-full hover:bg-rose-500/30 flex items-center justify-center text-rose-400 active:scale-90 transition"
              title="مسح كافة المقتنيات · Clear All"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Native Apple AR QuickLook USDZ button for iOS devices */}
        {isIOS && (
          <a
            rel="ar"
            href={assetUrl('immersive/vision-studio.usdz')}
            className="h-10 px-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-xl flex items-center gap-1.5 text-xs text-white font-medium shadow-lg active:scale-95 transition"
            title="عرض بتقنية Apple Quick Look الأصلية"
          >
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Apple AR</span>
          </a>
        )}
      </div>

      {/* 7. Bottom Artifact Carousel Dock */}
      <footer className="absolute bottom-0 inset-x-0 z-30 pb-3 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-auto">
        {/* Horizontal scrollable carousel */}
        <div className="flex items-center gap-2.5 overflow-x-auto px-4 py-1 no-scrollbar scroll-smooth">
          {ALQAMI_ARTIFACTS.map((artifact) => {
            const isSelected = selectedArtifact.id === artifact.id;
            return (
              <button
                key={artifact.id}
                onClick={() => {
                  spatialSound.playSnap();
                  setSelectedArtifact(artifact);
                }}
                className={`flex-shrink-0 flex items-center gap-2 p-1.5 pr-3 rounded-2xl backdrop-blur-xl transition-all duration-200 border ${
                  isSelected
                    ? 'bg-amber-500/25 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.35)] scale-105'
                    : 'bg-black/50 hover:bg-white/10 border-white/10 text-white/70'
                }`}
              >
                {/* Thumbnail */}
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-black/60 border border-white/10 flex-shrink-0">
                  <img
                    src={assetUrl(artifact.image.replace(/^\//, ''))}
                    alt={artifact.title.ar}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Titles */}
                <div className="text-right flex flex-col justify-center min-w-[95px] max-w-[130px]" dir="rtl">
                  <span className="text-[11px] font-bold truncate leading-tight text-white">
                    {artifact.title.ar}
                  </span>
                  <span className="text-[9px] text-white/60 truncate leading-tight mt-0.5" dir="ltr">
                    {artifact.title.en}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Creator Attribution Footnote */}
        <div className="text-center pt-1.5 pb-0.5">
          <span className="text-[9px] text-white/40 tracking-wider font-light">
            designed & developed by isaac faleh · تصميم و تطوير اسحاق فالح
          </span>
        </div>
      </footer>

      {/* 8. Curatorial Historical Details Modal */}
      {infoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div
            className="w-full sm:max-w-md bg-[#161311] border border-white/15 rounded-t-3xl sm:rounded-3xl p-5 text-right shadow-2xl max-h-[85vh] overflow-y-auto"
            dir="rtl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <button
                onClick={() => setInfoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 transition"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="text-right">
                <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">
                  {selectedArtifact.categoryLabel.ar}
                </span>
                <h3 className="text-base font-bold text-white">{selectedArtifact.title.ar}</h3>
              </div>
            </div>

            {/* Model Preview Image */}
            <div className="w-full h-44 rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-4 relative">
              <img
                src={assetUrl(selectedArtifact.image.replace(/^\//, ''))}
                alt={selectedArtifact.title.ar}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-amber-300 font-mono">
                {selectedArtifact.period.ar}
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-white/50 block">المصدر / المستودع:</span>
                <span className="font-semibold text-white/90 text-[11px] leading-tight">
                  {selectedArtifact.institution.ar}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-white/50 block">الأبعاد الواقعية:</span>
                <span className="font-semibold text-white/90 text-[11px] leading-tight font-mono">
                  {selectedArtifact.details.dimensions}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-white/50 block">المادة والتقنية:</span>
                <span className="font-semibold text-white/90 text-[11px] leading-tight">
                  {selectedArtifact.details.material.ar}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-white/50 block">الصانع / المؤلف:</span>
                <span className="font-semibold text-white/90 text-[11px] leading-tight truncate">
                  {selectedArtifact.creator.ar}
                </span>
              </div>
            </div>

            {/* Historical Description Story */}
            <div className="text-xs text-white/80 leading-relaxed space-y-2 mb-6">
              <p>{selectedArtifact.description.ar}</p>
              <p className="text-[11px] text-white/55 font-normal leading-normal text-left" dir="ltr">
                {selectedArtifact.description.en}
              </p>
            </div>

            {/* Place Button */}
            <button
              onClick={() => {
                setInfoModalOpen(false);
                handlePlaceArtifact(selectedArtifact);
              }}
              className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-95 transition"
            >
              <Plus className="w-4 h-4" />
              <span>تثبيت هذا المقتنى في الغرفة الآن</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
