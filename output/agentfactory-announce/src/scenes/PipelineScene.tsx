import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, type } from "../styles";
import { Hammer, Package, Banknote, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Hammer,
    title: "Manufacture",
    desc: "Build AI agents with Claude Code, MCP, and agent SDKs",
    color: colors.accent,
    glow: colors.accentGlow,
  },
  {
    icon: Package,
    title: "Package",
    desc: "Bundle into production-ready Digital FTEs with Docker & K8s",
    color: colors.cyan,
    glow: colors.cyanGlow,
  },
  {
    icon: Banknote,
    title: "Monetize",
    desc: "Sell as subscriptions, success fees, or enterprise licenses",
    color: colors.green,
    glow: colors.greenGlow,
  },
];

export const PipelineScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header entrance
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const headerY = interpolate(frame, [0, 15], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Exit
  const exitOpacity = interpolate(frame, [140, 155], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 100,
          width: "100%",
          textAlign: "center",
          opacity: headerOpacity,
          transform: `translateY(${headerY}px)`,
        }}
      >
        <div style={{ ...type.label, color: colors.cyan, letterSpacing: "0.15em", marginBottom: 12 }}>
          THE BLUEPRINT
        </div>
        <div style={{ ...type.h1, color: colors.textPrimary, fontSize: 58 }}>
          Three Steps to Revenue
        </div>
      </div>

      {/* Pipeline cards */}
      <div
        style={{
          position: "absolute",
          top: 320,
          left: 100,
          right: 100,
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        {steps.map(({ icon: Icon, title, desc, color, glow }, i) => {
          const cardDelay = 20 + i * 20;
          const cardScale = spring({
            frame: Math.max(0, frame - cardDelay),
            fps,
            from: 0.7,
            to: 1,
            durationInFrames: 25,
            config: { damping: 12 },
          });
          const cardOpacity = interpolate(frame, [cardDelay, cardDelay + 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          // Arrow between cards
          const arrowOpacity = interpolate(frame, [cardDelay + 15, cardDelay + 25], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <React.Fragment key={title}>
              <div
                style={{
                  flex: 1,
                  opacity: cardOpacity,
                  transform: `scale(${cardScale})`,
                }}
              >
                <div
                  style={{
                    background: colors.bgCard,
                    borderRadius: 24,
                    padding: "44px 36px",
                    border: `1px solid ${color}22`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Top glow line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "20%",
                      right: "20%",
                      height: 2,
                      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                      opacity: 0.6,
                    }}
                  />

                  {/* Step number */}
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 24,
                      ...type.stat,
                      fontSize: 64,
                      color: `${color}10`,
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 18,
                      background: `${color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      boxShadow: `0 0 30px ${glow}`,
                    }}
                  >
                    <Icon size={32} color={color} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <div style={{ ...type.h2, color: colors.textPrimary, fontSize: 36, marginBottom: 12 }}>
                    {title}
                  </div>

                  {/* Description */}
                  <div style={{ ...type.body, color: colors.textSecondary, fontSize: 22, lineHeight: 1.5 }}>
                    {desc}
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div style={{ opacity: arrowOpacity, padding: "0 8px" }}>
                  <ChevronRight size={32} color={colors.textDim} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
