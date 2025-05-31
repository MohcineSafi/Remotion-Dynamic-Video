
import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const TextScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textItems = [
    { text: 'INNOVATION', color: 'from-blue-400 to-cyan-400' },
    { text: 'CREATIVITY', color: 'from-purple-400 to-pink-400' },
    { text: 'TECHNOLOGY', color: 'from-green-400 to-blue-400' },
    { text: 'FUTURE', color: 'from-yellow-400 to-red-400' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      {textItems.map((item, index) => {
        const itemDelay = index * 20;
        const itemFrame = Math.max(0, frame - itemDelay);
        
        const scale = spring({
          frame: itemFrame,
          fps,
          config: {
            damping: 100,
            stiffness: 200,
          },
        });

        const opacity = interpolate(itemFrame, [0, 15], [0, 1]);
        const blur = interpolate(itemFrame, [0, 15], [10, 0]);

        return (
          <div
            key={index}
            className={`text-7xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
            style={{
              transform: `scale(${scale})`,
              opacity,
              filter: `blur(${blur}px)`,
            }}
          >
            {item.text}
          </div>
        );
      })}

      {/* Call to action */}
      <div
        className="text-2xl text-white font-light mt-16 text-center"
        style={{
          opacity: interpolate(frame, [80, 100], [0, 1]),
          transform: `translateY(${interpolate(frame, [80, 100], [30, 0])}px)`,
        }}
      >
        <p>Shape Tomorrow with Technology</p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
      </div>
    </div>
  );
};
