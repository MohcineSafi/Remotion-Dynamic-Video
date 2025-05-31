
import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const LogoScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    config: {
      damping: 80,
      stiffness: 100,
    },
  });

  const rotation = interpolate(frame, [0, 60], [0, 360]);
  
  const particleOpacity = interpolate(frame, [20, 40], [0, 1]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        {/* Animated particles around logo */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) + rotation;
          const radius = 150;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={i}
              className="absolute w-3 h-3 bg-blue-500 rounded-full"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                opacity: particleOpacity,
              }}
            />
          );
        })}

        {/* Main logo */}
        <div
          className="relative w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl shadow-2xl flex items-center justify-center"
          style={{
            transform: `scale(${logoScale}) rotate(${rotation * 0.1}deg)`,
          }}
        >
          <div className="text-white text-4xl font-bold">T</div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl opacity-30 blur-lg animate-pulse" />
        </div>

        {/* Brand text */}
        <div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold tracking-wider"
          style={{
            opacity: interpolate(frame, [30, 50], [0, 1]),
            transform: `translateX(-50%) translateY(${interpolate(frame, [30, 50], [20, 0])}px)`,
          }}
        >
          TECH VISION
        </div>
      </div>
    </div>
  );
};
