import React from "react";
import { Composition } from "remotion";
import { PartThreeAnnouncement } from "./PartThreeAnnouncement";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="PartThreeAnnouncement"
        component={PartThreeAnnouncement}
        durationInFrames={2280}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
