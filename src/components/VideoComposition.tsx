
import React from 'react';
import { Composition, Folder } from 'remotion';
import { TechVideo } from './TechVideo';

export const VideoComposition: React.FC = () => {
  return (
    <>
      <Folder name="Tech Videos">
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
      </Folder>
    </>
  );
};
