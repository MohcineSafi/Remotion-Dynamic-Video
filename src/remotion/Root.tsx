
import React from 'react';
import { Composition } from 'remotion';
import { TechVideo } from '../components/TechVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TechVideo"
        component={TechVideo}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: 'Modern Tech Showcase',
        }}
      />
    </>
  );
};
