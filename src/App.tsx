import React, { useState, useRef, useEffect, useCallback, lazy, Suspense } from 'react';
import {
  LayoutGrid,
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
} from 'lucide-react';
import { AppId, EnvironmentId, WindowState } from './types/spatial';
import type { XRHardwareState } from './components/xr/RealARXREngine';
import { assetUrl } from './utils/assetUrl';
import { SpatialWindow } from './components/shell/SpatialWindow';
import { ControlCenter3Panel } from './components/shell/ControlCenter3Panel';
import { HomeViewLauncher } from './components/shell/HomeViewLauncher';
import { spatialSound } from './utils/spatialSound';
import type { SpatialWorldPanelControls } from './components/xr/spatial/SpatialWorld';
import { requestMotionPermission } from './components/xr/spatial/motionPermission';
import { ChromaticWaveWallpaper } from './components/effects/ChromaticWaveWallpaper';

const SpatialWorldStage = lazy(() => import('./components/xr/spatial/SpatialWorld'));

const RealARXREngine = lazy(() =>
  import('./components/xr/RealARXREngine').then((module) => ({ default: module.RealARXREngine }))
);
const AlqamiSpatialApp = lazy(() =>
  import('./components/apps/AlqamiSpatialApp').then((module) => ({ default: module.AlqamiSpatialApp }))
);
const AlqamiARKitObjectScanner = lazy(() =>
  import('./components/apps/AlqamiARKitObjectScanner').then((module) => ({
    default: module.AlqamiARKitObjectScanner,
  }))
);

const getInitialWindows = (): Record<AppId, WindowState> => {
  const isClient = typeof window !== 'undefined';
  const screenW = isClient ? window.innerWidth : 1280;
  const screenH = isClient ? window.innerHeight : 800;
  const bigWidth = Math.min(1360, Math.max(1040, screenW - 48));
  const bigHeight = Math.min(840, Math.max(720, screenH - 64));

  return {
    ikea: {
      id: 'ikea',
      title: 'علقمي · Alqami Islamic Heritage Spatial Museum',
      isOpen: true,
      x: 0,
      y: -10,
      z: 20,
      width: bigWidth,
      height: bigHeight,
      zIndex: 30,
    },
  };
};

const INITIAL_WINDOWS = getInitialWindows();

export function App() {
  const domOverlayRootRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(() => new Date());

  // Real Hardware AR / XR State
  const [xrState, setXrState] = useState<XRHardwareState>({
    cameraActive: false,
    cameraFacing: 'environment',
    gyroActive: false,
    handTrackingActive: false,
    webxrSupported: false,
    webxrSessionActive: false,
    arPlacementMode: false,
    headRotation: { yaw: 0, pitch: 0, roll: 0 },
    ambientRGB: { r: 62, g: 58, b: 54 },
    hitTestSurfaceDetected: false,
  });

  // Spatial OS Shell State
  const [windows, setWindows] = useState<Record<AppId, WindowState>>(getInitialWindows);
  const [topZ, setTopZ] = useState(40);
  const [homeOpen, setHomeOpen] = useState(false);
  const [controlCenterOpen, setControlCenterOpen] = useState(false);
  // Default to wood-studio wallpaper matching pic 3
  const [currentEnv, setCurrentEnv] = useState<EnvironmentId>('wood-studio');
  const [immersionLevel, setImmersionLevel] = useState<number>(65);
  const [isArkitScannerOpen, setIsArkitScannerOpen] = useState(false);
  const [ikeaActiveNav, setIkeaActiveNav] = useState<'grid' | 'search' | 'user' | 'favorites' | 'cart'>('grid');
  const [lang, setLang] = useState<'ar' | 'en'>(() => {
    try {
      return (localStorage.getItem('alqami_lang') as 'ar' | 'en') || 'ar';
    } catch {
      return 'ar';
    }
  });

  useEffect(() => {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#472c16';
  }, []);

  useEffect(() => {
    const handleLangEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: 'ar' | 'en' }>;
      if (customEvent.detail?.lang) {
        setLang(customEvent.detail.lang);
      }
    };
    window.addEventListener('visionos:lang-change', handleLangEvent);
    return () => {
      window.removeEventListener('visionos:lang-change', handleLangEvent);
    };
  }, []);

  useEffect(() => {
    const onOpenScanner = () => setIsArkitScannerOpen(true);
    window.addEventListener('visionos:open-arkit-scanner', onOpenScanner);
    return () => window.removeEventListener('visionos:open-arkit-scanner', onOpenScanner);
  }, []);

  useEffect(() => {
    const handleSearchState = (e: Event) => {
      const ce = e as CustomEvent<{ open: boolean }>;
      if (ce.detail?.open) {
        setIkeaActiveNav('search');
      } else {
        setIkeaActiveNav('grid');
      }
    };
    window.addEventListener('visionos:search-state', handleSearchState);
    return () => window.removeEventListener('visionos:search-state', handleSearchState);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('webxr-active', xrState.webxrSessionActive);
    document.body.classList.toggle('camera-passthrough-active', xrState.cameraActive || Boolean(xrState.spatialWorldActive));
    return () => {
      document.body.classList.remove('webxr-active', 'camera-passthrough-active');
    };
  }, [xrState.webxrSessionActive, xrState.cameraActive, xrState.spatialWorldActive]);

  useEffect(() => {
    if (!xrState.spatialWorldActive || !xrState.cameraActive || xrState.handTrackingActive) return;
    setXrState((prev) =>
      prev.spatialWorldActive && prev.cameraActive && !prev.handTrackingActive
        ? { ...prev, handTrackingActive: true }
        : prev
    );
  }, [xrState.spatialWorldActive, xrState.cameraActive, xrState.handTrackingActive, setXrState]);

  // Desktop room-look fallback
  const [cameraLook, setCameraLook] = useState<{ yaw: number; pitch: number }>({ yaw: 0, pitch: 0 });
  const isPanningRoomRef = useRef(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const glideVelocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });
  const glideAnimationRef = useRef<number | null>(null);
  const [isRoomGliding, setIsRoomGliding] = useState(false);

  const stopGliding = useCallback(() => {
    if (glideAnimationRef.current !== null) {
      cancelAnimationFrame(glideAnimationRef.current);
      glideAnimationRef.current = null;
    }
    glideVelocityRef.current = { vx: 0, vy: 0 };
    setIsRoomGliding(false);
  }, []);

  const handleRoomMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    const isBackdropSurface = target?.getAttribute('data-room-bg') === 'true';
    if (!isBackdropSurface) return;

    e.preventDefault();
    stopGliding();
    isPanningRoomRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    const handleRoomMouseMove = (moveEvent: MouseEvent) => {
      if (!isPanningRoomRef.current) return;
      const dx = moveEvent.clientX - lastMousePosRef.current.x;
      const dy = moveEvent.clientY - lastMousePosRef.current.y;
      lastMousePosRef.current = { x: moveEvent.clientX, y: moveEvent.clientY };

      const factor = 0.085;
      const vx = dx * factor;
      const vy = dy * factor;
      glideVelocityRef.current = { vx: vx * 0.75, vy: vy * 0.75 };

      setCameraLook((prev) => ({
        yaw: Math.max(-28, Math.min(28, prev.yaw + vx)),
        pitch: Math.max(-16, Math.min(16, prev.pitch + vy)),
      }));
    };

    const handleRoomMouseUp = () => {
      isPanningRoomRef.current = false;
      window.removeEventListener('mousemove', handleRoomMouseMove);
      window.removeEventListener('mouseup', handleRoomMouseUp);

      let currentVx = glideVelocityRef.current.vx;
      let currentVy = glideVelocityRef.current.vy;
      if (Math.abs(currentVx) < 0.01 && Math.abs(currentVy) < 0.01) return;

      setIsRoomGliding(true);
      const stepGlide = () => {
        currentVx *= 0.88;
        currentVy *= 0.88;
        if (Math.abs(currentVx) < 0.005 && Math.abs(currentVy) < 0.005) {
          stopGliding();
          return;
        }
        setCameraLook((prev) => ({
          yaw: Math.max(-28, Math.min(28, prev.yaw + currentVx)),
          pitch: Math.max(-16, Math.min(16, prev.pitch + currentVy)),
        }));
        glideAnimationRef.current = requestAnimationFrame(stepGlide);
      };
      glideAnimationRef.current = requestAnimationFrame(stepGlide);
    };

    window.addEventListener('mousemove', handleRoomMouseMove);
    window.addEventListener('mouseup', handleRoomMouseUp);
  };

  const bringToFront = (id: AppId) => {
    setTopZ((prev) => {
      const next = prev + 1;
      setWindows((w) => ({
        ...w,
        [id]: { ...w[id], zIndex: next },
      }));
      return next;
    });
  };

  const openSingleOrFocusApp = useCallback((id: AppId = 'ikea') => {
    setHomeOpen(false);
    setControlCenterOpen(false);
    setTopZ((prev) => {
      const next = prev + 1;
      setWindows((w) => {
        const updated = { ...w };
        const previous = updated[id] || updated.ikea;
        updated.ikea = {
          ...previous,
          isOpen: true,
          zIndex: next,
        };
        return updated;
      });
      return next;
    });
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditing =
        target?.isContentEditable ||
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey;

      if (event.key === 'Escape') {
        setHomeOpen(false);
        setControlCenterOpen(false);
        return;
      }
      if (isEditing) return;

      if (event.key.toLowerCase() === 'h') {
        setHomeOpen((open) => !open);
        setControlCenterOpen(false);
      } else if (event.key.toLowerCase() === 'c') {
        setControlCenterOpen((open) => !open);
        setHomeOpen(false);
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, [openSingleOrFocusApp]);

  const environmentBackdrops: Record<EnvironmentId, string> = {
    'living-room': assetUrl('images/custom_room_bg.png'),
    'wood-studio': assetUrl('images/custom_room_bg.png'),
    thorsmork: assetUrl('reference/control_center__e3iguusguvma_large.jpg'),
    'sunset-clouds': assetUrl('images/custom_room_bg.png'),
    'cafe-lounge': assetUrl('images/custom_room_bg.png'),
    'chromatic-wave': '',
  };

  const totalYaw = xrState.headRotation.yaw + cameraLook.yaw;
  const totalPitch = xrState.headRotation.pitch + cameraLook.pitch;

  const renderWindowElement = (win: WindowState, world?: SpatialWorldPanelControls) => (
    <SpatialWindow
      worldAnchored={Boolean(world)}
      onWorldGrab={world?.onWorldGrab}
      onWorldDepth={world?.onWorldDepth}
      id={win.id}
      title={win.title}
      x={win.x}
      y={win.y}
      z={win.z}
      width={win.width}
      height={win.height}
      zIndex={win.zIndex}
      curved={win.curved}
      alqamiMode={xrState.alqamiModeActive}
      onClose={() =>
        setWindows((prev) => ({
          ...prev,
          [win.id]: { ...prev[win.id], isOpen: false },
        }))
      }
      onFocus={() => bringToFront(win.id)}
      onMove={(nx, ny) =>
        setWindows((prev) => ({
          ...prev,
          [win.id]: { ...prev[win.id], x: nx, y: ny },
        }))
      }
      onZChange={(nz) =>
        setWindows((prev) => ({
          ...prev,
          [win.id]: { ...prev[win.id], z: nz },
        }))
      }
      onResize={(nw, nh) =>
        setWindows((prev) => ({
          ...prev,
          [win.id]: { ...prev[win.id], width: nw, height: nh },
        }))
      }
      leftOrnament={
        win.id === 'ikea' ? (
          <div className="vision-ornament rounded-full p-1.5 flex flex-col gap-2 pointer-events-auto">
            {[
              { id: 'grid' as const, icon: LayoutGrid, label: lang === 'ar' ? 'المعرض' : 'Catalog' },
              { id: 'search' as const, icon: Search, label: lang === 'ar' ? 'بحث في المقتنيات' : 'Search' },
              { id: 'user' as const, icon: User, label: lang === 'ar' ? 'عن المعرض' : 'About' },
              { id: 'favorites' as const, icon: Heart, label: lang === 'ar' ? 'المفضلة' : 'Favorites', dot: true },
              { id: 'cart' as const, icon: ShoppingBag, label: lang === 'ar' ? 'السلة' : 'Bag' },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = ikeaActiveNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    spatialSound.playPinchTap();
                    if (item.id === 'search') {
                      if (ikeaActiveNav === 'search') {
                        setIkeaActiveNav('grid');
                        window.dispatchEvent(new CustomEvent('visionos:close-search'));
                      } else {
                        setIkeaActiveNav('search');
                        window.dispatchEvent(new CustomEvent('visionos:toggle-search'));
                      }
                    } else {
                      setIkeaActiveNav(item.id);
                      if (item.id === 'grid') {
                        window.dispatchEvent(new CustomEvent('visionos:close-search'));
                      }
                    }
                  }}
                  title={item.label}
                  className={`w-9 h-9 rounded-full flex items-center justify-center relative transition-all active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-white/35 text-white shadow-[0_0_12px_rgba(255,255,255,0.4)] scale-105'
                      : 'text-white/75 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.dot && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A] absolute top-1.5 right-1.5 shadow-[0_0_6px_#FFD60A]" />
                  )}
                </button>
              );
            })}
          </div>
        ) : undefined
      }
    >
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center gap-3 text-sm text-white/75">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/25 border-t-white" />
            <span>Opening spatial app…</span>
          </div>
        }
      >
        <AlqamiSpatialApp
          onPreviewInSpace={() => {}}
          lang={lang}
          onToggleLang={setLang}
          activeNav={ikeaActiveNav}
          onNavChange={setIkeaActiveNav}
        />
      </Suspense>
    </SpatialWindow>
  );

  const renderSpatialViewport = (eyeOffsetPx: number = 0) => (
    <div
      onMouseDown={handleRoomMouseDown}
      className="relative w-full h-full overflow-hidden select-none"
    >
      {/* 1. Backdrop wallpaper: wood-studio by default (matching pic 3) */}
      {!xrState.cameraActive && !xrState.webxrSessionActive && (
        <div
          data-room-bg="true"
          style={{
            transform: `translate3d(${-totalYaw * 6 + eyeOffsetPx}px, ${
              -totalPitch * 5
            }px, -120px) scale(1.16)`,
            transition: isPanningRoomRef.current || isRoomGliding ? 'none' : 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="fixed inset-0 z-0 pointer-events-auto"
        >
          {currentEnv === 'wood-studio' && (
            <div
              data-room-bg="true"
              className="w-full h-full bg-[repeating-linear-gradient(90deg,#6e4726_0px,#6e4726_14px,#472c16_14px,#472c16_24px)] relative"
            >
              <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#d6cfc4] to-[#b8afa2]" />
              <div className="absolute inset-0 bg-radial from-amber-200/15 via-transparent to-black/55" />
            </div>
          )}
          {currentEnv === 'living-room' && (
            <img
              data-room-bg="true"
              src={assetUrl('images/custom_room_bg.png')}
              alt="Warm Living Room with Fireplace"
              className="w-full h-full object-cover brightness-[0.92]"
            />
          )}
          {currentEnv === 'thorsmork' && (
            <div
              data-room-bg="true"
              className="w-full h-full bg-gradient-to-b from-[#0b1d3a] via-[#1c4b82] to-[#0f172a] relative overflow-hidden"
            >
              <div className="absolute -top-20 inset-x-0 h-96 bg-gradient-to-r from-emerald-400/35 via-cyan-300/45 to-purple-500/35 blur-3xl animate-pulse" />
              <img
                src={assetUrl('reference/control_center__e3iguusguvma_large.jpg')}
                alt="Thórsmörk Mountains"
                className="w-full h-full object-cover object-[78%_55%] scale-[2.2] opacity-55 mix-blend-screen"
              />
            </div>
          )}
          {currentEnv === 'sunset-clouds' && (
            <div
              data-room-bg="true"
              className="w-full h-full bg-gradient-to-b from-[#2c4c70] via-[#d48b6a] to-[#2b1d28] relative"
            >
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1f161d] via-[#9e5a47]/60 to-transparent" />
            </div>
          )}
          {currentEnv === 'cafe-lounge' && (
            <img
              data-room-bg="true"
              src={environmentBackdrops['cafe-lounge']}
              alt="Lounge"
              className="w-full h-full object-cover blur-[2px] brightness-75"
            />
          )}
          {currentEnv === 'chromatic-wave' && (
            <div data-room-bg="true" className="w-full h-full relative overflow-hidden">
              <ChromaticWaveWallpaper />
            </div>
          )}

          {/* Immersion Dimming Scrim */}
          <div
            data-room-bg="true"
            style={{ opacity: (immersionLevel - 50) / 140 }}
            className="absolute inset-0 bg-black pointer-events-none transition-opacity"
          />
        </div>
      )}

      {/* 2. Spatial window stage */}
      <div
        style={{
          transform: `translate3d(${eyeOffsetPx}px, 0, 0) rotateY(${-totalYaw}deg) rotateX(${totalPitch}deg) rotateZ(${-xrState.headRotation.roll * 0.25}deg)`,
          filter: xrState.anaglyphActive
            ? 'drop-shadow(-4px 0 0 rgba(255, 0, 0, 0.75)) drop-shadow(4px 0 0 rgba(0, 255, 255, 0.75))'
            : undefined,
          transition: isPanningRoomRef.current || isRoomGliding ? 'none' : 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative w-full h-full preserve-3d z-10 pointer-events-none"
      >
        {!homeOpen &&
          (Object.values(windows) as WindowState[])
            .filter((w) => w.isOpen)
            .map((win) => (
              <div key={win.id} className="pointer-events-auto">
                {renderWindowElement(win)}
              </div>
            ))}
      </div>
    </div>
  );

  const handleToggleSpatialWorld = async () => {
    spatialSound.playAlqamiChime();
    const next = !xrState.spatialWorldActive;
    if (next) {
      window.dispatchEvent(new Event('visionos:start-camera'));
      void requestMotionPermission();
    }
    setXrState((prev) => ({
      ...prev,
      spatialWorldActive: next,
      cameraActive: next ? true : prev.cameraActive,
      gyroActive: next ? true : prev.gyroActive,
      alqamiModeActive: false,
      objectTracking3DActive: false,
      handTrackingActive: next,
    }));
  };

  return (
    <div
      ref={domOverlayRootRef}
      className="visionos-root fixed inset-0 w-screen h-[100dvh] overflow-hidden isolate bg-transparent"
    >
      {/* Real Hardware AR / XR Sensor & Camera Engine */}
      <Suspense fallback={null}>
        <RealARXREngine
          xrState={xrState}
          setXrState={setXrState}
          domOverlayRootRef={domOverlayRootRef}
          onRecenterView={() => {
            setCameraLook({ yaw: 0, pitch: 0 });
            setWindows(INITIAL_WINDOWS);
          }}
        />
      </Suspense>

      {/* Top controls: Round Alqami Logo button (AR World Mode), Home button, and Control Center */}
      <div className="visionos-shell-controls fixed top-3.5 left-1/2 -translate-x-1/2 z-[85] flex items-center gap-2 pointer-events-auto">
        <button
          onClick={() => {
            spatialSound.playAlqamiChime();
            handleToggleSpatialWorld();
          }}
          className={`vision-btn h-8 w-8 rounded-full vision-ornament flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-all p-1 text-white border border-white/20 ${
            xrState.spatialWorldActive ? 'ring-2 ring-cyan-400 bg-cyan-500/30' : ''
          }`}
          title={xrState.spatialWorldActive ? 'الخروج من عالم الواقع المعزز · Exit AR World' : 'دخول عالم الواقع المعزز · Enter AR World Mode'}
          aria-label="Toggle AR World Mode"
        >
          <img
            src={assetUrl('logo.png')}
            alt="Alqami"
            className="w-4.5 h-4.5 object-contain drop-shadow"
          />
        </button>

        <button
          onClick={() => {
            spatialSound.playPinchTap();
            setHomeOpen(!homeOpen);
            setControlCenterOpen(false);
          }}
          className={`vision-btn h-8 w-8 rounded-full vision-ornament flex items-center justify-center text-white ${homeOpen ? 'ring-2 ring-white/80' : ''}`}
          title="Open Home View"
          aria-label="Open Home View"
          aria-pressed={homeOpen}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
        </button>

        {/* Look-Up Control Center Pill */}
        <button
          onClick={() => {
            spatialSound.playPinchTap();
            setControlCenterOpen(!controlCenterOpen);
            setHomeOpen(false);
          }}
          className="vision-btn px-3 py-1 rounded-full vision-ornament text-xs font-semibold flex items-center gap-1 text-white/95 hover:bg-white/20 transition active:scale-95"
          title="Look Up Gesture — Open Control Center"
        >
          <span>{currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Creator Credit Badge */}
      <div className="fixed bottom-3 right-4 z-[75] pointer-events-auto max-w-[85vw]">
        <div className="px-3.5 py-1 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 shadow-lg backdrop-blur-xl flex items-center justify-center select-none text-[9px] sm:text-[10px] text-white/70 font-normal tracking-wide gap-1.5 text-center whitespace-nowrap">
          <span>designed & developed by isaac faleh</span>
          <span className="text-white/25">·</span>
          <span dir="rtl">تصميم و تطوير اسحاق فالح</span>
        </div>
      </div>

      {/* Spatial Stage */}
      {xrState.spatialWorldActive ? (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-20 flex items-center justify-center text-white text-sm">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/25 border-t-white mr-2" />
              Initializing Spatial World…
            </div>
          }
        >
          <SpatialWorldStage
            cameraActive={xrState.cameraActive}
            ambientRGB={xrState.ambientRGB}
            handTrackingActive={xrState.handTrackingActive}
            onToggleHandTracking={() =>
              setXrState((prev) => ({
                ...prev,
                handTrackingActive: !prev.handTrackingActive,
                cameraActive: true,
              }))
            }
            objectTracking3DActive={xrState.objectTracking3DActive}
            onToggleObjectTracking={() =>
              setXrState((prev) => ({
                ...prev,
                objectTracking3DActive: !prev.objectTracking3DActive,
                cameraActive: true,
              }))
            }
            onOpenHome={() => setHomeOpen(true)}
            onExit={() => setXrState((prev) => ({ ...prev, spatialWorldActive: false }))}
            panels={
              homeOpen
                ? []
                : (Object.values(windows) as WindowState[])
                    .filter((w) => w.isOpen)
                    .map((w) => ({ id: w.id, width: w.width, height: w.height }))
            }
            renderPanel={(id, controls) => {
              const win = windows[id as AppId];
              return win ? renderWindowElement(win, controls) : null;
            }}
            hud={null}
          />
        </Suspense>
      ) : xrState.sbsStereoActive && !xrState.webxrSessionActive ? (
        <div className="flex w-full h-full">
          <div className="w-1/2 h-full overflow-hidden border-r border-white/20 relative">
            {renderSpatialViewport(-(xrState.ipdOffset || 16))}
          </div>
          <div className="w-1/2 h-full overflow-hidden relative">
            {renderSpatialViewport(xrState.ipdOffset || 16)}
          </div>
        </div>
      ) : (
        renderSpatialViewport(0)
      )}

      {/* Home View Launcher */}
      <HomeViewLauncher
        isOpen={homeOpen}
        onLaunchApp={(id) => openSingleOrFocusApp(id)}
        onOpenControlCenter={() => {
          setHomeOpen(false);
          setControlCenterOpen(true);
        }}
        onToggleEnvironments={() => {
          const order: EnvironmentId[] = [
            'wood-studio',
            'living-room',
            'chromatic-wave',
            'thorsmork',
            'sunset-clouds',
            'cafe-lounge',
          ];
          setCurrentEnv(order[(order.indexOf(currentEnv) + 1) % order.length]);
        }}
      />

      {/* Control Center */}
      <ControlCenter3Panel
        isOpen={controlCenterOpen}
        onClose={() => setControlCenterOpen(false)}
        currentEnv={currentEnv}
        onSelectEnv={(env) => setCurrentEnv(env)}
        immersionLevel={immersionLevel}
        onChangeImmersion={(val) => setImmersionLevel(val)}
        onOpenApp={(id) => openSingleOrFocusApp(id)}
        onToggleRealCamera={() => window.dispatchEvent(new Event('visionos:toggle-camera'))}
        realCameraActive={xrState.cameraActive}
        spatialWorldActive={xrState.spatialWorldActive}
        onToggleSpatialWorld={handleToggleSpatialWorld}
        alqamiModeActive={xrState.alqamiModeActive}
        onToggleAlqamiMode={() =>
          setXrState((prev) => ({
            ...prev,
            alqamiModeActive: !prev.alqamiModeActive,
            cameraActive: !prev.alqamiModeActive ? true : prev.cameraActive,
            gyroActive: !prev.alqamiModeActive ? true : prev.gyroActive,
          }))
        }
        objectTracking3DActive={xrState.objectTracking3DActive}
        onToggle3DObjectTracking={() =>
          setXrState((prev) => ({
            ...prev,
            objectTracking3DActive: !prev.objectTracking3DActive,
            cameraActive: !prev.objectTracking3DActive ? true : prev.cameraActive,
          }))
        }
        lang={lang}
        onToggleLang={setLang}
      />

      {/* ARKit 3D Object Scanner Studio */}
      {isArkitScannerOpen && (
        <Suspense fallback={null}>
          <AlqamiARKitObjectScanner
            isOpen={isArkitScannerOpen}
            onClose={() => setIsArkitScannerOpen(false)}
            onDeployInSpace={(art) => {
              window.dispatchEvent(
                new CustomEvent('visionos:place-ar-object', {
                  detail: {
                    glb: art.model.glb,
                    label: `${art.title.ar} · ${art.title.en}`,
                    scale: art.model.scale || 1.0,
                    dimensions: art.details.dimensions,
                    id: art.id,
                    offsetPlacement: true,
                  },
                })
              );
            }}
            onOpenDetail={() => {
              openSingleOrFocusApp('ikea');
            }}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
