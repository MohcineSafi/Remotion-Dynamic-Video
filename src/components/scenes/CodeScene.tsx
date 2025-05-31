
import React from 'react';
import { useCurrentFrame, interpolate, useVideoConfig } from 'remotion';

export const CodeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const codeLines = [
    'const future = () => {',
    '  return innovations.map(tech => {',
    '    return tech.transform(reality);',
    '  }).filter(solution => {',
    '    return solution.impact > 0;',
    '  });',
    '};',
  ];

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-gray-700 max-w-4xl">
        <div className="flex items-center mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 ml-4 text-sm">innovation.js</span>
        </div>

        <div className="font-mono text-lg space-y-2">
          {codeLines.map((line, index) => {
            const lineDelay = index * 8;
            const lineOpacity = interpolate(
              frame,
              [lineDelay, lineDelay + 15],
              [0, 1],
              { extrapolateRight: 'clamp' }
            );

            const lineX = interpolate(
              frame,
              [lineDelay, lineDelay + 15],
              [-50, 0],
              { extrapolateRight: 'clamp' }
            );

            return (
              <div
                key={index}
                className="flex"
                style={{
                  opacity: lineOpacity,
                  transform: `translateX(${lineX}px)`,
                }}
              >
                <span className="text-gray-500 mr-4 w-8 text-right">{index + 1}</span>
                <span className="text-white">
                  {line.split(' ').map((word, wordIndex) => {
                    let color = 'text-white';
                    if (word === 'const' || word === 'return') color = 'text-purple-400';
                    if (word === 'future' || word === 'innovations' || word === 'tech' || word === 'solution') color = 'text-blue-400';
                    if (word.includes('(') || word.includes(')') || word.includes('{') || word.includes('}')) color = 'text-yellow-400';
                    if (word.includes('=>')) color = 'text-pink-400';

                    return (
                      <span key={wordIndex} className={color}>
                        {word}{' '}
                      </span>
                    );
                  })}
                </span>
              </div>
            );
          })}
        </div>

        {/* Cursor animation */}
        <div
          className="w-0.5 h-6 bg-blue-400 mt-2"
          style={{
            opacity: Math.sin(frame / 10) > 0 ? 1 : 0,
            marginLeft: interpolate(frame, [0, 80], [0, 400]),
          }}
        />
      </div>
    </div>
  );
};
