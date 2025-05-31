
import React, { useState } from 'react';
import { TechVideo } from '../components/TechVideo';
import { Player } from '@remotion/player';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Dynamic Tech Video
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience animated code snippets, logos, and smooth text transitions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <Player
                component={TechVideo}
                durationInFrames={300}
                compositionWidth={1920}
                compositionHeight={1080}
                fps={30}
                controls
                inputProps={{
                  title: 'Modern Tech Showcase',
                }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
                  <span className="text-blue-300 text-sm font-medium">Animated Code</span>
                </div>
                <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                  <span className="text-purple-300 text-sm font-medium">Logo Transitions</span>
                </div>
                <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg px-4 py-2">
                  <span className="text-pink-300 text-sm font-medium">Text Effects</span>
                </div>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2">
                  <span className="text-green-300 text-sm font-medium">Modern Theme</span>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                This video demonstrates smooth animations, gradient backgrounds, 
                syntax-highlighted code snippets, and dynamic text transitions 
                perfect for tech presentations and promotional content.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-white mb-2">Dynamic Animations</h3>
            <p className="text-gray-400 text-sm">Smooth transitions and spring animations create engaging visual experiences</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-white mb-2">Code Visualization</h3>
            <p className="text-gray-400 text-sm">Syntax-highlighted code snippets with typewriter effects</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Modern Design</h3>
            <p className="text-gray-400 text-sm">Gradient backgrounds and glassmorphism effects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
