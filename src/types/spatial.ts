export type AppId = 'ikea' | 'alqami';

export type EnvironmentId =
  | 'living-room'
  | 'wood-studio'
  | 'thorsmork'
  | 'sunset-clouds'
  | 'cafe-lounge'
  | 'chromatic-wave';

export type QuickLookShaderMode = 'original' | 'plain' | 'wireframe' | 'uv';

export type EarthGlobeMode = 'daylight' | 'orbit' | 'rotation' | 'clouds';

export interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  x: number; // 3D X offset in px
  y: number; // 3D Y offset in px
  z: number; // 3D Z depth in px
  width: number;
  height: number;
  curved?: boolean;
  zIndex: number;
}
