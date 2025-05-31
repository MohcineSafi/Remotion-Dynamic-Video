
import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, Sequence } from 'remotion';
import { CodeScene } from './scenes/CodeScene';
import { LogoScene } from './scenes/LogoScene';
import { TextScene } from './scenes/TextScene';
import { IntroScene } from './scenes/IntroScene';

interface TechVideoProps {
  title: string;
}

export const TechVideo: React.FC<TechVideoProps> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background gradient animation
  const gradientRotation = interpolate(
    frame,
    [0, 300],
    [0, 360],
    {
      extrapolateRight: 'clamp',
    }
  );

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background: `linear-gradient(${gradientRotation}deg, #0f0f23, #1a1a2e, #16213e, #0f3460)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const delay = i * 0.5;
          const opacity = interpolate(
            frame,
            [delay * fps, (delay + 2) * fps],
            [0, 0.1],
            { extrapolateRight: 'clamp' }
          );
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity,
                transform: `scale(${interpolate(frame, [0, 300], [0.5, 2])})`,
              }}
            />
          );
        })}
      </div>

      {/* Scene sequences */}
      <Sequence from={0} durationInFrames={60}>
        <IntroScene title={title} />
      </Sequence>

      <Sequence from={60} durationInFrames={80}>
        <CodeScene />
      </Sequence>

      <Sequence from={140} durationInFrames={60}>
        <LogoScene />
      </Sequence>

      <Sequence from={200} durationInFrames={100}>
        <TextScene />
      </Sequence>
    </div>
  );
};
