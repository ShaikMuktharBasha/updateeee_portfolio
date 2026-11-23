import React, { useState, useEffect } from 'react';
import { playClick } from '../utils/sound';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const ClickShockwave: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't spawn if clicking inside input or textarea
      const target = e.target as HTMLElement;
      if (target.closest('input, textarea')) return;

      // Play subtle UI click if sound enabled
      playClick();

      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-4), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 550);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1e3fd8]/40 dark:border-[#38bdf8]/50 shadow-[0_0_12px_rgba(56,189,248,0.35)] animate-ping opacity-60 w-8 h-8 pointer-events-none"
        />
      ))}
    </div>
  );
};
