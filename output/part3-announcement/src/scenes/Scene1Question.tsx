import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { colors, fonts, type as typeScale } from "../styles";
import { springPresets } from "../springs";

export const Scene1Question: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Digital glitch at frame 18 (0.3s) — 2-frame pattern interrupt
  const isGlitch = frame >= 18 && frame < 20;

  // Display text spring-in
  const textSpring = spring({
    frame: frame - 20,
    fps,
    config: springPresets.textReveal,
  });
  const textScale = interpolate(textSpring, [0, 1], [0.92, 1]);
  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);

  // Text fade at 2.5s (frame 150) to make room for terminal
  const textFade = interpolate(frame, [150, 180], [1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Terminal typing starts at 2.5s (frame 150)
  const terminalLine1 = "$ agent-factory --status";
  const terminalLine2 = "Expertise: ⚠ Not connected";
  const typeSpeed = Math.round(60 * 0.035); // 35ms/char at 60fps ≈ 2 frames/char
  const termStart = 150;
  const line1Chars = Math.max(
    0,
    Math.min(terminalLine1.length, Math.floor((frame - termStart) / typeSpeed))
  );
  const line2Start = termStart + terminalLine1.length * typeSpeed + 10;
  const line2Chars = Math.max(
    0,
    Math.min(terminalLine2.length, Math.floor((frame - line2Start) / typeSpeed))
  );

  // Warning pulse: amber for 8 frames then blue
  const warningDone = frame > line2Start + terminalLine2.length * typeSpeed;
  const pulseFrame = frame - (line2Start + terminalLine2.length * typeSpeed);
  const isAmber = warningDone && pulseFrame >= 0 && pulseFrame < 8;
  const warningColor = isAmber ? colors.amber : colors.blue;

  // Terminal scale-down for transition (last 30 frames)
  const terminalScale = interpolate(frame, [186, 216], [1, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const terminalX = interpolate(frame, [186, 216], [0, -580], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const terminalY = interpolate(frame, [186, 216], [0, -320], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* Glitch overlay */}
      {isGlitch && (
        <AbsoluteFill
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(59,130,246,0.15) 2px,
              rgba(59,130,246,0.15) 4px
            )`,
            mixBlendMode: "screen",
            opacity: 0.7,
          }}
        />
      )}

      {/* Display text — centered on screen */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: textOpacity * textFade,
          transform: `scale(${textScale})`,
        }}
      >
        <span
          style={{
            ...typeScale.display,
            color: colors.white,
            textAlign: "center",
            maxWidth: 1200,
            whiteSpace: "pre-line",
          }}
        >
          {"What if your expertise\ncould run 24/7?"}
        </span>
      </div>

      {/* Terminal */}
      {frame >= termStart && (
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: `translate(calc(-50% + ${terminalX}px), calc(-50% + ${terminalY}px)) scale(${terminalScale})`,
            width: 640,
            background: colors.cardBg,
            borderRadius: 14,
            border: `1px solid ${colors.border}`,
            padding: "20px 28px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
          </div>

          <div style={{ ...typeScale.code, color: colors.whiteSecondary }}>
            {terminalLine1.slice(0, line1Chars)}
            {line1Chars < terminalLine1.length && line1Chars > 0 && (
              <span
                style={{
                  display: "inline-block",
                  width: 10,
                  height: 24,
                  background: colors.blue,
                  marginLeft: 2,
                  opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0,
                }}
              />
            )}
          </div>

          {line2Chars > 0 && (
            <div
              style={{
                ...typeScale.code,
                color: warningColor,
                marginTop: 6,
                textShadow: warningDone
                  ? `0 0 16px ${warningColor}40`
                  : "none",
              }}
            >
              {terminalLine2.slice(0, line2Chars)}
            </div>
          )}
        </div>
      )}
    </AbsoluteFill>
  );
};
