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
import { Brain } from "lucide-react";

const FRAGMENTS = [
  '"client risk"',
  '"deal structure"',
  '"regulatory compliance"',
  '"quarterly reports"',
];

const SKILL_LINES = [
  "SKILL.md",
  "───────────────",
  "Role: Domain expert",
  "Process:",
  "  1. Analyze inputs",
  "  2. Apply expertise",
  "  3. Generate output",
];

export const Scene4Crystallization: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase boundaries (relative to scene start)
  const phase =
    frame < 150 ? 1 : frame < 300 ? 2 : frame < 480 ? 3 : 4;

  // Brain pulse
  const brainScale =
    phase === 2
      ? interpolate(frame, [150, 180], [1, 0.92], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : phase === 3
      ? interpolate(frame, [300, 330], [0.92, 1.05], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  const brainOpacity =
    phase >= 4
      ? interpolate(frame, [480, 510], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  // Fragment orbit (Phase 1 & early Phase 2)
  const orbitSpeed = phase === 2 && frame < 210 ? 0 : 0.3;
  const orbitAngle = frame * orbitSpeed * (Math.PI / 180);

  // Gravity pull in Phase 3
  const gravityProgress =
    phase === 3
      ? interpolate(frame, [300, 345], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : phase > 3
      ? 1
      : 0;

  // Brand text "Knowledge Extraction Method"
  const brandOpacity =
    phase >= 2
      ? interpolate(frame, [150, 170], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Blue underline draws L→R
  const underlineWidth =
    phase >= 2
      ? interpolate(frame, [170, 210], [0, 100], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // Brand text fades out for Phase 3+
  const brandFade =
    phase >= 3
      ? interpolate(frame, [300, 330], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  // SKILL.md document typing (Phase 4)
  const typeStartFrame = 480;
  const charsPerFrame = 60 * 0.025;
  const fullText = SKILL_LINES.join("\n");
  const typedChars =
    phase === 4
      ? Math.min(
          fullText.length,
          Math.floor((frame - typeStartFrame) * charsPerFrame)
        )
      : 0;

  // Deploy badge
  const deployFrame = 600;
  const deploySpring = spring({
    frame: frame - deployFrame,
    fps,
    config: springPresets.deploySpike,
  });
  const deployVisible = frame >= deployFrame;

  // Camera shake at deploy (2 frames, 3px)
  const isShake = frame >= deployFrame && frame < deployFrame + 2;
  const shakeX = isShake ? (Math.random() - 0.5) * 6 : 0;
  const shakeY = isShake ? (Math.random() - 0.5) * 6 : 0;

  // Blue flash ring at deploy
  const flashRingProgress = interpolate(
    frame,
    [deployFrame, deployFrame + 10],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const flashRingRadius = flashRingProgress * 250;
  const flashRingOpacity = 1 - flashRingProgress;

  // Synapse lines (Phase 3)
  const synapseOpacity =
    phase === 3
      ? interpolate(
          frame,
          [320, 330, 345, 360],
          [0, 0.6, 0.6, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        )
      : 0;

  // White flash transition to Scene 5 (last frame)
  const whiteFlash = frame >= 659 ? 0.8 : 0;

  return (
    <AbsoluteFill
      style={{
        transform: `translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      {/* Brain icon */}
      {brainOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${brainScale})`,
            opacity: brainOpacity,
          }}
        >
          <Brain size={160} color={colors.blue} strokeWidth={1.5} />
        </div>
      )}

      {/* "Your Expertise" label */}
      {phase <= 2 && (
        <div
          style={{
            position: "absolute",
            top: "24%",
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: interpolate(frame, [0, 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span style={{ ...typeScale.label, color: colors.whiteDim }}>
            Your Expertise
          </span>
        </div>
      )}

      {/* Orbiting fragments (Phase 1-2, pulled in Phase 3) */}
      {phase <= 3 &&
        FRAGMENTS.map((frag, i) => {
          const angle = orbitAngle + (i * Math.PI * 2) / FRAGMENTS.length;
          const radius = 260;

          const orbitX = Math.cos(angle) * radius;
          const orbitY = Math.sin(angle) * radius * 0.5;

          const pullX = interpolate(gravityProgress, [0, 1], [orbitX, 300]);
          const pullY = interpolate(
            gravityProgress,
            [0, 1],
            [orbitY, -140 + i * 50]
          );

          const fragOpacity =
            phase === 3 && gravityProgress > 0.8
              ? interpolate(gravityProgress, [0.8, 1], [0.7, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })
              : 0.5 + (i % 2) * 0.3;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `calc(42% + ${pullY}px)`,
                left: `calc(50% + ${pullX}px)`,
                transform: "translate(-50%, -50%)",
                opacity: fragOpacity,
              }}
            >
              <span
                style={{
                  ...typeScale.body,
                  fontSize: 26,
                  color: colors.whiteSecondary,
                  fontStyle: "italic",
                }}
              >
                {frag}
              </span>
            </div>
          );
        })}

      {/* Structured lines (Phase 3 right side) */}
      {phase === 3 &&
        gravityProgress > 0.5 &&
        FRAGMENTS.map((frag, i) => {
          const structOpacity = interpolate(
            gravityProgress,
            [0.5, 0.8],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          return (
            <div
              key={`struct-${i}`}
              style={{
                position: "absolute",
                top: `calc(30% + ${i * 50}px)`,
                left: "58%",
                opacity: structOpacity,
              }}
            >
              <span
                style={{
                  ...typeScale.body,
                  fontSize: 24,
                  color: colors.white,
                  fontWeight: 600,
                }}
              >
                {frag.replace(/"/g, "")}
              </span>
            </div>
          );
        })}

      {/* Synapse lines (Phase 3) */}
      {synapseOpacity > 0 && (
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <line
            x1="50%"
            y1="42%"
            x2="58%"
            y2="33%"
            stroke={colors.blue}
            strokeWidth={1.5}
            opacity={synapseOpacity}
          />
          <line
            x1="50%"
            y1="42%"
            x2="58%"
            y2="45%"
            stroke={colors.blue}
            strokeWidth={1.5}
            opacity={synapseOpacity * 0.7}
          />
        </svg>
      )}

      {/* "Knowledge Extraction Method" (Phase 2) */}
      <div
        style={{
          position: "absolute",
          top: "14%",
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: brandOpacity * brandFade,
        }}
      >
        <div style={{ display: "inline-block", position: "relative" }}>
          <span
            style={{
              ...typeScale.h1,
              color: colors.white,
            }}
          >
            Knowledge Extraction Method
          </span>
          <div
            style={{
              position: "absolute",
              bottom: -6,
              left: 0,
              width: `${underlineWidth}%`,
              height: 4,
              background: colors.blue,
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      {/* SKILL.md document (Phase 4) */}
      {phase === 4 && (
        <div
          style={{
            position: "absolute",
            top: "22%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 580,
            background: colors.cardInterior,
            borderRadius: 14,
            border: `1px solid ${colors.border}`,
            padding: "28px 32px",
            boxShadow: "0 12px 48px rgba(0,0,0,0.5)",
          }}
        >
          <pre
            style={{
              ...typeScale.code,
              color: colors.whiteSecondary,
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >
            {fullText.slice(0, typedChars)}
            {typedChars < fullText.length && (
              <span
                style={{
                  display: "inline-block",
                  width: 10,
                  height: 22,
                  background: colors.blue,
                  marginLeft: 2,
                  opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0,
                }}
              />
            )}
          </pre>

          {/* Deploy badge */}
          {deployVisible && (
            <div
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                background: colors.blue,
                color: "#fff",
                padding: "10px 24px",
                borderRadius: 24,
                fontSize: 20,
                fontWeight: 700,
                fontFamily: fonts.sans,
                transform: `scale(${deploySpring})`,
                boxShadow: `0 4px 20px ${colors.blue}60`,
              }}
            >
              Deploy
            </div>
          )}
        </div>
      )}

      {/* "Plain-English Agent Spec" label (Phase 4) */}
      {phase === 4 && typedChars > 30 && (
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: interpolate(frame, [530, 545], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span style={{ ...typeScale.label, color: colors.whiteDim }}>
            Plain-English Agent Spec
          </span>
        </div>
      )}

      {/* Blue flash ring at deploy */}
      {deployVisible && flashRingOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: "22%",
            right: "calc(50% - 290px - 16px)",
            width: 0,
            height: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: -flashRingRadius,
              top: -flashRingRadius,
              width: flashRingRadius * 2,
              height: flashRingRadius * 2,
              borderRadius: "50%",
              border: `2px solid ${colors.blue}`,
              opacity: flashRingOpacity,
            }}
          />
        </div>
      )}

      {/* White flash (last frame) */}
      {whiteFlash > 0 && (
        <AbsoluteFill
          style={{
            background: "#ffffff",
            opacity: whiteFlash,
          }}
        />
      )}
    </AbsoluteFill>
  );
};
