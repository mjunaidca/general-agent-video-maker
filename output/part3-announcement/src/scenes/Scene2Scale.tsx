import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { colors, type as typeScale } from "../styles";
import { springPresets } from "../springs";
import { Landmark, Scale, Compass } from "lucide-react";

// Counter thresholds with formatted labels
const COUNTER_STEPS = [
  { label: "0", frame: 0 },
  { label: "200M", frame: 40 },
  { label: "600M", frame: 80 },
  { label: "1.2B", frame: 120 },
];

const ICONS = [
  { Icon: Landmark, delay: 0 },
  { Icon: Scale, delay: 6 },
  { Icon: Compass, delay: 12 },
];

export const Scene2Scale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Determine current counter display
  let counterLabel = "0";
  for (const step of COUNTER_STEPS) {
    if (frame >= step.frame) counterLabel = step.label;
  }

  // Spring settle on final value
  const settleSpring = spring({
    frame: frame - 120,
    fps,
    config: springPresets.textReveal,
  });
  const counterScale =
    frame >= 120 ? interpolate(settleSpring, [0, 1], [1.06, 1]) : 1;

  return (
    <AbsoluteFill>
      {/* Centered vertical stack: counter + subtitle + label + icons */}
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
        {/* Counter */}
        <div style={{ transform: `scale(${counterScale})` }}>
          <span
            style={{
              ...typeScale.stat,
              color: colors.white,
              display: "block",
              textAlign: "center",
            }}
          >
            {counterLabel}
          </span>
        </div>

        {/* "Knowledge Workers" subtitle */}
        <span
          style={{
            ...typeScale.h2,
            color: colors.whiteSecondary,
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Knowledge Workers
        </span>

        {/* Sublabel */}
        <span
          style={{
            ...typeScale.label,
            color: colors.whiteDim,
            marginTop: 12,
            textAlign: "center",
          }}
        >
          Global knowledge workforce
        </span>

        {/* Three icons spring from bottom */}
        <div
          style={{
            display: "flex",
            gap: 80,
            marginTop: 60,
          }}
        >
          {ICONS.map(({ Icon, delay }, i) => {
            const iconSpring = spring({
              frame: frame - 140 - delay,
              fps,
              config: springPresets.cardEntry,
            });
            const y = interpolate(iconSpring, [0, 1], [50, 0]);
            const opacity = interpolate(iconSpring, [0, 1], [0, 1]);

            return (
              <div
                key={i}
                style={{
                  transform: `translateY(${y}px)`,
                  opacity,
                }}
              >
                <Icon size={48} color={colors.blue} />
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
