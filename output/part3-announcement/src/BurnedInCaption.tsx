import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { colors, type as typeScale } from "./styles";
import { springPresets } from "./springs";

export interface CaptionEntry {
  text: string;
  startFrame: number;
  endFrame: number;
  position: "upper-third" | "center" | "center-top" | "bottom-center";
}

export const CAPTIONS: CaptionEntry[] = [
  { text: "YOUR EXPERTISE", startFrame: 30, endFrame: 120, position: "upper-third" },
  { text: "TRAPPED", startFrame: 270, endFrame: 318, position: "center" },
  { text: "NO CODE REQUIRED", startFrame: 510, endFrame: 600, position: "bottom-center" },
  { text: "7 DOMAINS", startFrame: 660, endFrame: 840, position: "center-top" },
  { text: "DEPLOYABLE AGENTS", startFrame: 840, endFrame: 960, position: "center-top" },
  { text: "YOUR EXPERTISE", startFrame: 990, endFrame: 1290, position: "bottom-center" },
  { text: "STRUCTURED. DEPLOYED.", startFrame: 1290, endFrame: 1500, position: "bottom-center" },
  { text: "PLAIN-ENGLISH SPEC", startFrame: 1500, endFrame: 1560, position: "bottom-center" },
  { text: "DEPLOY", startFrame: 1560, endFrame: 1620, position: "bottom-center" },
  { text: "PART 3 IS LIVE", startFrame: 1650, endFrame: 1860, position: "center" },
  { text: "YOUR TURN", startFrame: 1860, endFrame: 2280, position: "center" },
];

const positionStyles: Record<CaptionEntry["position"], React.CSSProperties> = {
  "upper-third": {
    top: 160,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
  },
  center: {
    top: "50%",
    left: 0,
    right: 0,
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "center",
  },
  "center-top": {
    top: 140,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
  },
  "bottom-center": {
    bottom: 120,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
  },
};

export const BurnedInCaptionOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeCaption = CAPTIONS.find(
    (c) => frame >= c.startFrame && frame <= c.endFrame
  );

  if (!activeCaption) return null;

  const entryProgress = spring({
    frame: frame - activeCaption.startFrame,
    fps,
    config: springPresets.captionPop,
  });

  const dur = activeCaption.endFrame - activeCaption.startFrame;
  const fadeOut = Math.min(12, Math.floor(dur / 4));
  const opacity = interpolate(
    frame,
    [activeCaption.endFrame - fadeOut, activeCaption.endFrame],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const scale = interpolate(entryProgress, [0, 1], [0.85, 1]);

  const isDeployCaption = activeCaption.text === "DEPLOY";

  return (
    <div
      style={{
        position: "absolute",
        ...positionStyles[activeCaption.position],
        opacity,
        pointerEvents: "none",
        zIndex: 100,
      }}
    >
      <span
        style={{
          ...typeScale.caption,
          fontSize: isDeployCaption ? 60 : 44,
          color: colors.white,
          transform: `scale(${scale})`,
          display: "inline-block",
          textShadow: "0 4px 24px rgba(0,0,0,0.8)",
        }}
      >
        {activeCaption.text}
      </span>
    </div>
  );
};
