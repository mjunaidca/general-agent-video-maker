import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, type } from "../styles";
import { Clock, DollarSign, Users, ArrowRight } from "lucide-react";

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Wipe-in from left
  const wipeProgress = interpolate(frame, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const clipPath = `inset(0 ${(1 - wipeProgress) * 100}% 0 0)`;

  // Stats comparison
  const stats = [
    { icon: Clock, human: "40 hrs/week", agent: "168 hrs/week", label: "Availability", delay: 15 },
    { icon: DollarSign, human: "$80K+/year", agent: "Fraction", label: "Cost", delay: 25 },
    { icon: Users, human: "1 person", agent: "Infinite scale", label: "Capacity", delay: 35 },
  ];

  // Section header
  const headerOpacity = interpolate(frame, [10, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Exit
  const exitOpacity = interpolate(frame, [105, 120], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ clipPath, opacity: exitOpacity }}>
      {/* Header */}
      <div style={{ position: "absolute", top: 120, left: 120, opacity: headerOpacity }}>
        <span style={{ ...type.label, color: colors.amber, letterSpacing: "0.15em" }}>
          THE SHIFT
        </span>
      </div>

      <div style={{ position: "absolute", top: 160, left: 120, opacity: headerOpacity }}>
        <span style={{ ...type.h1, color: colors.textPrimary, fontSize: 56 }}>
          Human Workers vs
        </span>
        <br />
        <span style={{ ...type.h1, color: colors.accent, fontSize: 56 }}>
          Digital FTEs
        </span>
      </div>

      {/* Stats row */}
      <div
        style={{
          position: "absolute",
          top: 380,
          left: 120,
          right: 120,
          display: "flex",
          gap: 40,
        }}
      >
        {stats.map(({ icon: Icon, human, agent, label, delay }, i) => {
          const cardScale = spring({
            frame: Math.max(0, frame - delay),
            fps,
            from: 0.8,
            to: 1,
            durationInFrames: 20,
            config: { damping: 12 },
          });
          const cardOpacity = interpolate(frame, [delay, delay + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          // Animate the arrow and agent value
          const revealProgress = interpolate(frame, [delay + 20, delay + 35], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={label}
              style={{
                flex: 1,
                opacity: cardOpacity,
                transform: `scale(${cardScale})`,
              }}
            >
              {/* Card */}
              <div
                style={{
                  background: colors.bgCard,
                  borderRadius: 20,
                  padding: "36px 32px",
                  border: `1px solid rgba(255,255,255,0.06)`,
                  height: 320,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Icon + label */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `${colors.accent}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color={colors.accent} />
                  </div>
                  <span style={{ ...type.label, color: colors.textSecondary, fontSize: 14 }}>
                    {label}
                  </span>
                </div>

                {/* Human value */}
                <span style={{ ...type.h3, color: colors.textDim, fontSize: 28, textDecoration: "line-through" }}>
                  {human}
                </span>

                {/* Arrow */}
                <div style={{ margin: "16px 0", opacity: revealProgress }}>
                  <ArrowRight size={24} color={colors.accent} />
                </div>

                {/* Agent value */}
                <span
                  style={{
                    ...type.h2,
                    color: colors.accent,
                    fontSize: 34,
                    opacity: revealProgress,
                    textShadow: `0 0 20px ${colors.accentGlow}`,
                  }}
                >
                  {agent}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
