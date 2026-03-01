import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { colors } from "./styles";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow-drifting gradient orbs
  const orb1X = interpolate(frame, [0, 540], [15, 75]);
  const orb1Y = interpolate(frame, [0, 540], [20, 60]);
  const orb2X = interpolate(frame, [0, 540], [80, 30]);
  const orb2Y = interpolate(frame, [0, 540], [70, 25]);
  const orb3X = interpolate(frame, [0, 540], [50, 60]);
  const orb3Y = interpolate(frame, [0, 540], [80, 15]);

  // Subtle grid pulse
  const gridOpacity = interpolate(
    frame,
    [0, 120, 240, 360, 540],
    [0.03, 0.06, 0.04, 0.06, 0.03]
  );

  return (
    <AbsoluteFill style={{ background: colors.bg }}>
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          left: `${orb1X}%`,
          top: `${orb1Y}%`,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.accentGlow}, transparent 70%)`,
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${orb2X}%`,
          top: `${orb2Y}%`,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.cyanGlow}, transparent 70%)`,
          transform: "translate(-50%, -50%)",
          filter: "blur(90px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${orb3X}%`,
          top: `${orb3Y}%`,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)`,
          transform: "translate(-50%, -50%)",
          filter: "blur(100px)",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: gridOpacity,
          backgroundImage: `
            linear-gradient(${colors.accent}22 1px, transparent 1px),
            linear-gradient(90deg, ${colors.accent}22 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
