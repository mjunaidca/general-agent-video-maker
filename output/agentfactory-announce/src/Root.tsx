import React from "react";
import { Composition } from "remotion";
import { AgentFactoryVideo } from "./AgentFactoryVideo";

export const Root: React.FC = () => {
  return (
    <Composition
      id="AgentFactoryAnnounce"
      component={AgentFactoryVideo}
      durationInFrames={540}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
