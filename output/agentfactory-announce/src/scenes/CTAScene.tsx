import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, type } from "../styles";
import { ArrowRight, Bot } from "lucide-react";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Central icon with glow
  const iconScale = spring({ frame, fps, from: 0, to: 1, durationInFrames: 30, config: { damping: 10 } });

  // Expanding ring
  const ringProgress = interpolate(frame, [10, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ringOpacity = interpolate(frame, [10, 30, 50, 60], [0, 0.5, 0.3, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Title
  const titleOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [20, 35], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // URL
  const urlOpacity = interpolate(frame, [40, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // CTA button
  const ctaScale = spring({
    frame: Math.max(0, frame - 55),
    fps,
    from: 0.8,
    to: 1,
    durationInFrames: 25,
    config: { damping: 10, stiffness: 200 },
  });
  const ctaOpacity = interpolate(frame, [55, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Pulsing glow on CTA
  const pulsePhase = Math.sin(frame * 0.08) * 0.3 + 0.7;

  return (
    <AbsoluteFill>
      {/* Expanding ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 800 * ringProgress,
          height: 800 * ringProgress,
          borderRadius: "50%",
          border: `2px solid ${colors.accent}`,
          transform: "translate(-50%, -50%)",
          opacity: ringOpacity,
        }}
      />

      {/* Bot icon */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: "50%",
          transform: `translate(-50%, 0) scale(${iconScale})`,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: `linear-gradient(135deg, ${colors.accent}, ${colors.cyan})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 50px ${colors.accentGlow}`,
          }}
        >
          <Bot size={44} color="white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 370,
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div style={{ ...type.h1, color: colors.textPrimary, fontSize: 60 }}>
          Start Building Today
        </div>
      </div>

      {/* URL */}
      <div
        style={{
          position: "absolute",
          top: 470,
          width: "100%",
          textAlign: "center",
          opacity: urlOpacity,
        }}
      >
        <span
          style={{
            ...type.mono,
            fontSize: 26,
            color: colors.accent,
            background: `${colors.accent}10`,
            padding: "12px 28px",
            borderRadius: 12,
            border: `1px solid ${colors.accent}30`,
          }}
        >
          agentfactory.panaversity.org
        </span>
      </div>

      {/* CTA Button */}
      <div
        style={{
          position: "absolute",
          top: 560,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: ctaOpacity,
          transform: `scale(${ctaScale})`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: `linear-gradient(135deg, ${colors.accent}, #2563eb)`,
            padding: "18px 44px",
            borderRadius: 16,
            boxShadow: `0 0 ${40 * pulsePhase}px ${colors.accentGlow}`,
          }}
        >
          <span style={{ ...type.h3, color: "white", fontSize: 26 }}>
            START READING
          </span>
          <ArrowRight size={24} color="white" />
        </div>
      </div>

      {/* Bottom attribution */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          width: "100%",
          textAlign: "center",
          opacity: urlOpacity * 0.5,
        }}
      >
        <span style={{ ...type.label, color: colors.textDim, fontSize: 13 }}>
          PANAVERSITY — THE AI AGENT FACTORY
        </span>
      </div>
    </AbsoluteFill>
  );
};
