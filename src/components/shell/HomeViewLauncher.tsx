import React from 'react';
import {
  Wifi,
  BatteryCharging,
  Mountain,
  AppWindow,
} from 'lucide-react';
import { AppId } from '../../types/spatial';
import { spatialSound } from '../../utils/spatialSound';

interface HomeViewLauncherProps {
  isOpen: boolean;
  onLaunchApp: (id: AppId) => void;
  onOpenControlCenter: () => void;
  onToggleEnvironments: () => void;
}

export const HomeViewLauncher: React.FC<HomeViewLauncherProps> = ({
  isOpen,
  onLaunchApp,
  onOpenControlCenter,
  onToggleEnvironments,
}) => {
  if (!isOpen) return null;
  const now = new Date();

  return (
    <div className="fixed inset-0 z-[65] flex flex-col items-center justify-center pointer-events-auto select-none">
      {/* Left Vertical Mode Switcher Pill */}
      <div
        style={{ left: 'max(12px, calc(50% - 320px))', transform: 'translateY(-50%) translateZ(40px)' }}
        className="launcher-sidebar fixed top-1/2 vision-ornament rounded-full p-1.5 flex flex-col gap-2"
      >
        <div
          aria-current="page"
          className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center text-white shadow"
          title="Apps"
        >
          <AppWindow className="w-4 h-4" />
        </div>
        <button
          onClick={() => {
            spatialSound.playPinchTap();
            onToggleEnvironments();
          }}
          className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center text-white/75"
          title="Environments"
        >
          <Mountain className="w-4 h-4" />
        </button>
      </div>

      <div className="launcher-content flex flex-col items-center preserve-3d">
        <div className="mb-6 text-center">
          <h1 className="text-[23px] font-semibold tracking-tight text-white drop-shadow">Your apps</h1>
          <p className="mt-1 text-[11px] text-white/65">Alqami Spatial Islamic Heritage Museum</p>
        </div>

        <div className="flex items-center justify-center gap-9 preserve-3d">
          <button
            onMouseEnter={() => spatialSound.playHover()}
            onClick={() => {
              spatialSound.playPinchTap();
              onLaunchApp('ikea');
            }}
            className="group flex flex-col items-center gap-2.5 preserve-3d"
          >
            <div
              style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%)' }}
              className="w-[84px] h-[84px] rounded-[24px] flex items-center justify-center shadow-[0_18px_38px_rgba(0,0,0,0.45),inset_0_2px_2px_rgba(255,255,255,0.5)] border border-white/25 transition-all duration-300 group-hover:scale-110 group-hover:translate-z-4 group-active:scale-95 relative"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                <span className="rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-[14px] font-extrabold text-black tracking-tight shadow">
                  علقمي
                </span>
              </div>
            </div>
            <span className="text-[13px] font-semibold text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] tracking-tight">
              Alqami Heritage
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Status Line & Dock */}
      <div
        style={{ transform: 'translateZ(50px)' }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <button
          onClick={() => {
            spatialSound.playPinchTap();
            onOpenControlCenter();
          }}
          className="vision-btn px-4 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/15 flex items-center gap-3 text-[12px] font-medium text-white/90"
        >
          <span>{now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} · {now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
          <Wifi className="w-3.5 h-3.5 text-white/85" />
          <BatteryCharging className="w-4 h-4 text-white/85" />
        </button>

        <div style={{ width: 'min(280px, calc(100vw - 32px))' }} className="h-[60px] rounded-[24px] vision-glass px-6 py-2 flex items-center justify-around">
          <button
            onClick={() => onLaunchApp('ikea')}
            className="hover:text-white transition flex items-center gap-1.5 text-xs font-medium text-white/85"
          >
            <AppWindow className="w-4 h-4" />
            <span>Museum</span>
          </button>
          <button
            onClick={onToggleEnvironments}
            className="hover:text-white transition flex items-center gap-1.5 text-xs font-medium text-white/85"
          >
            <Mountain className="w-4 h-4" />
            <span>Environment</span>
          </button>
        </div>
      </div>
    </div>
  );
};
