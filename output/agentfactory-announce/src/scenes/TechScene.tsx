import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors, type } from "../styles";
import { Code, Cpu, Layers, Container, BookOpen, Workflow } from "lucide-react";

const techStack = [
  { icon: Code, label: "Claude Code", color: colors.accent },
  { icon: Workflow, label: "MCP", color: colors.cyan },
  { icon: Cpu, label: "OpenAI SDK", color: colors.green },
  { icon: Layers, label: "Google ADK", color: colors.amber },
  { icon: Container, label: "Docker & K8s", color: colors.accent },
  { icon: BookOpen, label: "46 Chapters", color: colors.cyan },
];

export const TechScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const exitOpacity = interpolate(frame, [110, 125], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
        }}
      >
        <div style={{ ...type.label, color: colors.green, letterSpacing: "0.15em", marginBottom: 12 }}>
          COMPREHENSIVE CURRICULUM
        </div>
        <div style={{ ...type.h1, color: colors.textPrimary, fontSize: 54 }}>
          Everything You Need
        </div>
      </div>

      {/* Tech grid — 3x2 */}
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 200,
          right: 200,
          display: "flex",
          flexWrap: "wrap",
          gap: 28,
          justifyContent: "center",
        }}
      >
        {techStack.map(({ icon: Icon, label, color }, i) => {
          const row = Math.floor(i / 3);
          const delay = 15 + i * 8;
          const scale = spring({
            frame: Math.max(0, frame - delay),
            fps,
            from: 0.5,
            to: 1,
            durationInFrames: 20,
            config: { damping: 14 },
          });
          const opacity = interpolate(frame, [delay, delay + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={label}
              style={{
                width: 460,
                opacity,
                transform: `scale(${scale})`,
              }}
            >
              <div
                style={{
                  background: colors.bgCard,
                  borderRadius: 18,
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  border: `1px solid ${color}18`,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${color}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color={color} strokeWidth={1.5} />
                </div>
                <span style={{ ...type.h3, color: colors.textPrimary, fontSize: 28 }}>
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom text */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          width: "100%",
          textAlign: "center",
          opacity: interpolate(frame, [70, 85], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        <span style={{ ...type.body, color: colors.textSecondary }}>
          From fundamentals to enterprise deployment
        </span>
      </div>
    </AbsoluteFill>
  );
};
