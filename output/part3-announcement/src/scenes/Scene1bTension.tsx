import React, { useMemo } from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { colors, type as typeScale } from "../styles";
import { springPresets } from "../springs";

const LINES = [
  "Knowledge trapped in inboxes.",
  "In PDFs.",
  "In people's heads.",
];

// Pre-generate particle positions for dissolve
const generateParticles = (lineIndex: number, count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${lineIndex}-${i}`,
    offsetX: Math.random() * 400 + 120,
    offsetY: (Math.random() - 0.5) * 100,
    size: Math.random() * 5 + 3,
    speed: Math.random() * 0.5 + 0.5,
    opacity: Math.random() * 0.6 + 0.4,
  }));

export const Scene1bTension: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const particles = useMemo(
    () => LINES.map((_, i) => generateParticles(i, 40)),
    []
  );

  // Lines stagger in: 12 frames apart
  const lineStagger = 12;
  // Dissolve starts at frame 78 (hold 0.5s after last line settles ~frame 48)
  const dissolveStart = 78;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 900 }}>
          {LINES.map((line, i) => {
            const lineFrame = frame - i * lineStagger;

            const entrySpring = spring({
              frame: lineFrame,
              fps,
              config: springPresets.textReveal,
            });

            const yOffset = interpolate(entrySpring, [0, 1], [12, 0]);
            const lineOpacity = interpolate(entrySpring, [0, 1], [0, 1]);

            // Dissolve: each line dissolves starting at dissolveStart
            const dissolveProgress = interpolate(
              frame,
              [dissolveStart, dissolveStart + 15],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            const textOpacity = lineOpacity * (1 - dissolveProgress);

            return (
              <div key={i} style={{ position: "relative" }}>
                {/* Text line */}
                <div
                  style={{
                    ...typeScale.body,
                    fontSize: 44,
                    color: colors.whiteSecondary,
                    opacity: textOpacity,
                    transform: `translateY(${yOffset}px)`,
                    marginBottom: 20,
                    paddingLeft: i * 60, // Cascading indent
                  }}
                >
                  {line}
                </div>

                {/* Particles (dissolve) */}
                {dissolveProgress > 0 &&
                  particles[i].map((p) => {
                    const pProgress = dissolveProgress * p.speed;
                    return (
                      <div
                        key={p.id}
                        style={{
                          position: "absolute",
                          top: p.offsetY,
                          left: i * 60 + p.offsetX * pProgress,
                          width: p.size,
                          height: p.size,
                          borderRadius: "50%",
                          background: colors.white,
                          opacity: p.opacity * (1 - pProgress),
                        }}
                      />
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
