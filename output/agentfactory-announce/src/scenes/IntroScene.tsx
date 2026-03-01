import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";
import { colors, type } from "../styles";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Book cover slides in from right with spring
  const bookX = spring({ frame, fps, from: 120, to: 0, durationInFrames: 35, config: { damping: 14 } });
  const bookOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const bookRotate = interpolate(frame, [0, 35], [8, -3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Glow behind book pulses
  const glowScale = interpolate(frame, [20, 60, 100], [0.8, 1.1, 0.95]);
  const glowOpacity = interpolate(frame, [5, 25], [0, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // "INTRODUCING" label
  const labelOpacity = interpolate(frame, [15, 28], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const labelY = interpolate(frame, [15, 28], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Title words stagger
  const titleWords = ["The", "AI", "Agent", "Factory"];
  const titleStart = 25;

  // Tagline
  const taglineOpacity = interpolate(frame, [60, 75], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const taglineY = interpolate(frame, [60, 75], [15, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Stats counter "17,035 professionals learning"
  const statsOpacity = interpolate(frame, [80, 92], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const countTo = 17035;
  const countProgress = interpolate(frame, [80, 105], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const currentCount = Math.floor(countTo * countProgress);

  // Exit
  const exitOpacity = interpolate(frame, [110, 130], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      {/* LEFT SIDE — text content */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "55%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 120 }}>
        {/* INTRODUCING label */}
        <div style={{ opacity: labelOpacity, transform: `translateY(${labelY}px)`, marginBottom: 16 }}>
          <span style={{ ...type.label, color: colors.accent, fontSize: 18, letterSpacing: "0.2em" }}>
            INTRODUCING
          </span>
        </div>

        {/* Title words */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, marginBottom: 24 }}>
          {titleWords.map((word, i) => {
            const wordStart = titleStart + i * 5;
            const wordOpacity = interpolate(frame, [wordStart, wordStart + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const wordY = interpolate(frame, [wordStart, wordStart + 10], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const isHighlight = word === "AI" || word === "Agent";
            return (
              <span
                key={word}
                style={{
                  ...type.hero,
                  fontSize: 82,
                  color: isHighlight ? colors.accent : colors.textPrimary,
                  opacity: wordOpacity,
                  transform: `translateY(${wordY}px)`,
                  display: "inline-block",
                  textShadow: isHighlight ? `0 0 40px ${colors.accentGlow}` : "none",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Tagline */}
        <div style={{ opacity: taglineOpacity, transform: `translateY(${taglineY}px)`, marginBottom: 8 }}>
          <span style={{ ...type.bodyLg, color: colors.textSecondary, fontSize: 28 }}>
            The Spec-Driven Blueprint for Building
          </span>
          <br />
          <span style={{ ...type.bodyLg, color: colors.textSecondary, fontSize: 28 }}>
            and Monetizing Digital FTEs
          </span>
        </div>

        {/* Panaversity attribution */}
        <div style={{ opacity: taglineOpacity * 0.6, marginBottom: 28 }}>
          <span style={{ ...type.label, color: colors.textDim, fontSize: 13 }}>BY PANAVERSITY</span>
        </div>

        {/* Stats counter */}
        <div style={{ opacity: statsOpacity, display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ ...type.stat, fontSize: 48, color: colors.accent }}>
            {currentCount.toLocaleString()}
          </span>
          <span style={{ ...type.body, color: colors.textSecondary, fontSize: 22 }}>
            professionals learning
          </span>
        </div>
      </div>

      {/* RIGHT SIDE — book cover */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 80,
          transform: `translateY(-50%) translateX(${bookX}px) rotate(${bookRotate}deg)`,
          opacity: bookOpacity,
        }}
      >
        {/* Glow behind book */}
        <div
          style={{
            position: "absolute",
            inset: -60,
            borderRadius: 30,
            background: `radial-gradient(circle, ${colors.accentGlow}, transparent 70%)`,
            opacity: glowOpacity,
            transform: `scale(${glowScale})`,
            filter: "blur(40px)",
          }}
        />
        {/* Book image with perspective shadow */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: `
              0 25px 60px rgba(0,0,0,0.5),
              0 0 80px ${colors.accentGlow},
              -5px 0 30px rgba(0,0,0,0.3)
            `,
          }}
        >
          <Img
            src={staticFile("images/book-cover.webp")}
            style={{ width: 420, height: 420, objectFit: "cover" }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
