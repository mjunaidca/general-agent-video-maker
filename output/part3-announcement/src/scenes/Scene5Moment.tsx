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
import {
  Compass,
  Briefcase,
  Landmark,
  TrendingUp,
  Scale,
  HeartPulse,
  FileCode,
} from "lucide-react";

const DOMAIN_ICONS = [Compass, Briefcase, Landmark, TrendingUp, Scale, HeartPulse, FileCode];

export const Scene5Moment: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // White flash dissipates (first few frames)
  const flashOpacity = interpolate(frame, [0, 4], [0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "Part 3 Is Live" — type-on at 50ms/char
  const title = "Part 3 Is Live";
  const typeSpeed = Math.round(60 * 0.05); // 3 frames/char
  const titleChars = Math.min(
    title.length,
    Math.max(0, Math.floor((frame - 6) / typeSpeed))
  );

  // Subtitle fade (0.5s after title complete)
  const titleDoneFrame = 6 + title.length * typeSpeed;
  const subtitleOpacity = interpolate(
    frame,
    [titleDoneFrame + 30, titleDoneFrame + 54],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // URL slides up
  const urlSpring = spring({
    frame: frame - (titleDoneFrame + 60),
    fps,
    config: springPresets.urlSlide,
  });
  const urlY = interpolate(urlSpring, [0, 1], [40, 0]);
  const urlOpacity = interpolate(urlSpring, [0, 1], [0, 1]);

  // Blue horizontal rule
  const ruleStart = titleDoneFrame + 90;
  const ruleWidth = interpolate(frame, [ruleStart, ruleStart + 30], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CTA fade
  const ctaOpacity = interpolate(
    frame,
    [ruleStart + 30, ruleStart + 60],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Orbiting domain icons (background, 0.15 opacity)
  const orbitRadius = 420;
  const orbitSpeed = (2 * Math.PI) / (60 * 60); // 60s full rotation

  return (
    <AbsoluteFill>
      {/* White flash dissipation */}
      {flashOpacity > 0 && (
        <AbsoluteFill style={{ background: "#fff", opacity: flashOpacity }} />
      )}

      {/* Background orbiting domain icons */}
      {DOMAIN_ICONS.map((Icon, i) => {
        const angle = frame * orbitSpeed + (i * 2 * Math.PI) / DOMAIN_ICONS.length;
        const x = Math.cos(angle) * orbitRadius;
        const y = Math.sin(angle) * orbitRadius * 0.6;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              opacity: 0.15,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon size={36} color={colors.blue} />
          </div>
        );
      })}

      {/* "Part 3 Is Live" */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <span
          style={{
            ...typeScale.display,
            color: colors.white,
          }}
        >
          {title.slice(0, titleChars)}
          {titleChars < title.length && titleChars > 0 && (
            <span
              style={{
                display: "inline-block",
                width: 5,
                height: 86,
                background: colors.blue,
                marginLeft: 4,
                opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0,
                verticalAlign: "baseline",
              }}
            />
          )}
        </span>
      </div>

      {/* "Domain Agent Workflows" subtitle */}
      <div
        style={{
          position: "absolute",
          top: "44%",
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: subtitleOpacity,
        }}
      >
        <span
          style={{
            ...typeScale.h2,
            color: colors.whiteSecondary,
          }}
        >
          Domain Agent Workflows
        </span>
      </div>

      {/* URL */}
      <div
        style={{
          position: "absolute",
          top: "56%",
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: urlOpacity,
          transform: `translateY(${urlY}px)`,
        }}
      >
        <span
          style={{
            ...typeScale.code,
            fontSize: 34,
            color: colors.blue,
          }}
        >
          agentfactory.panaversity.org
        </span>
      </div>

      {/* Blue horizontal rule */}
      <div
        style={{
          position: "absolute",
          top: "63%",
          left: "50%",
          transform: "translateX(-50%)",
          width: `${ruleWidth * 6}px`,
          maxWidth: 600,
          height: 3,
          background: colors.blue,
          borderRadius: 2,
        }}
      />

      {/* CTA */}
      <div
        style={{
          position: "absolute",
          top: "69%",
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: ctaOpacity,
        }}
      >
        <span
          style={{
            ...typeScale.bodyLg,
            color: colors.white,
          }}
        >
          The builders are done. Now it's your turn.
        </span>
      </div>

      {/* AF monogram */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          right: 72,
          opacity: ctaOpacity * 0.4,
        }}
      >
        <span
          style={{
            fontFamily: fonts.sans,
            fontSize: 32,
            fontWeight: 800,
            color: colors.whiteDim,
            letterSpacing: "0.05em",
          }}
        >
          AF
        </span>
      </div>
    </AbsoluteFill>
  );
};
