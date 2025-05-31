
import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

interface IntroSceneProps {
  title: string;
}

export const IntroScene: React.FC<IntroSceneProps> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: {
      damping: 100,
      stiffness: 200,
      mass: 0.5,
    },
  });

  const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
  
  const subtitleY = interpolate(frame, [20, 50], [50, 0]);
  const subtitleOpacity = interpolate(frame, [20, 50], [0, 1]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h1
        className="text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8"
        style={{
          transform: `scale(${titleScale})`,
          opacity: titleOpacity,
        }}
      >
        {title}
      </h1>
      
      <p
        className="text-2xl text-gray-300 font-light tracking-wider"
        style={{
          transform: `translateY(${subtitleY}px)`,
          opacity: subtitleOpacity,
        }}
      >
        Experience the Future of Technology
      </p>

      {/* Animated underline */}
      <div
        className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"
        style={{
          width: interpolate(frame, [40, 60], [0, 400]),
        }}
      />
    </div>
  );
};
