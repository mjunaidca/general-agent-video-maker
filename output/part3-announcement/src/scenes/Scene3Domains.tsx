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
import {
  Compass,
  Briefcase,
  Landmark,
  TrendingUp,
  Scale,
  HeartPulse,
  FileCode,
} from "lucide-react";

const DOMAINS = [
  { name: "Architecture & Engineering", Icon: Compass },
  { name: "Business & Operations", Icon: Briefcase },
  { name: "Banking & Finance", Icon: Landmark },
  { name: "Sales & Revenue", Icon: TrendingUp },
  { name: "Legal & Compliance", Icon: Scale },
  { name: "Healthcare Operations", Icon: HeartPulse },
  { name: "Technical Documentation", Icon: FileCode },
];

// 3-2-2 grid positions — wider spacing for larger cards
const GRID_POSITIONS = [
  // Row 1: 3 cards
  { x: -340, y: -200 },
  { x: 0, y: -200 },
  { x: 340, y: -200 },
  // Row 2: 2 cards
  { x: -170, y: 10 },
  { x: 170, y: 10 },
  // Row 3: 2 cards
  { x: -170, y: 220 },
  { x: 170, y: 220 },
];

// Entry directions for cascade variety
const ENTRY_DIRS = [
  { x: -120, y: -100 },
  { x: 0, y: -120 },
  { x: 120, y: -100 },
  { x: -100, y: 80 },
  { x: 100, y: 80 },
  { x: -80, y: 120 },
  { x: 80, y: 120 },
];

export const Scene3Domains: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cards cascade: 4-frame stagger
  const stagger = 4;

  // "Your domain" highlight on Healthcare (index 5) — after all visible
  const allVisibleFrame = DOMAINS.length * stagger + 30;
  const highlightStart = allVisibleFrame + 10;

  // Compression: starts at ~300 frames in
  const compressionStart = 300;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 0,
          height: 0,
        }}
      >
        {DOMAINS.map((domain, i) => {
          const entrySpring = spring({
            frame: frame - i * stagger,
            fps,
            config: springPresets.cardEntry,
          });

          const entryDir = ENTRY_DIRS[i];
          const gridPos = GRID_POSITIONS[i];

          // Entry animation
          const x = interpolate(
            entrySpring,
            [0, 1],
            [entryDir.x + gridPos.x, gridPos.x]
          );
          const y = interpolate(
            entrySpring,
            [0, 1],
            [entryDir.y + gridPos.y, gridPos.y]
          );
          const opacity = interpolate(entrySpring, [0, 1], [0, 1]);

          // Healthcare highlight
          const isHighlight = i === 5;
          const highlightSpring = spring({
            frame: frame - highlightStart,
            fps,
            config: springPresets.enlargePulse,
          });
          const highlightScale = isHighlight
            ? interpolate(highlightSpring, [0, 0.5, 1], [1, 1.03, 1])
            : 1;
          const highlightGlow =
            isHighlight && frame >= highlightStart && frame < highlightStart + 12;

          // Compression toward center
          const compressionSpring = spring({
            frame: frame - compressionStart,
            fps,
            config: springPresets.compression,
          });
          const compressX = interpolate(compressionSpring, [0, 1], [x, 0]);
          const compressY = interpolate(compressionSpring, [0, 1], [y, 0]);
          const compressScale = interpolate(
            compressionSpring,
            [0, 1],
            [highlightScale, 0.05]
          );
          const compressOpacity = interpolate(
            compressionSpring,
            [0, 0.8, 1],
            [opacity, opacity, 0]
          );

          const finalX = frame >= compressionStart ? compressX : x;
          const finalY = frame >= compressionStart ? compressY : y;
          const finalScale = frame >= compressionStart ? compressScale : highlightScale;
          const finalOpacity = frame >= compressionStart ? compressOpacity : opacity;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: finalX - 150,
                top: finalY - 48,
                width: 300,
                height: 96,
                background: colors.cardBg,
                borderRadius: 14,
                border: `1px solid ${highlightGlow ? colors.blue : colors.border}`,
                boxShadow: highlightGlow
                  ? `0 0 24px ${colors.blue}40`
                  : "0 4px 20px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "0 20px",
                opacity: finalOpacity,
                transform: `scale(${finalScale})`,
              }}
            >
              <domain.Icon size={32} color={colors.blue} />
              <span
                style={{
                  ...typeScale.body,
                  fontSize: 20,
                  fontWeight: 700,
                  color: colors.white,
                  whiteSpace: "nowrap",
                }}
              >
                {domain.name}
              </span>
            </div>
          );
        })}

        {/* Blue glow point at center after compression */}
        {frame >= compressionStart + 30 && (
          <div
            style={{
              position: "absolute",
              left: -10,
              top: -10,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: colors.blue,
              boxShadow: `0 0 40px ${colors.blue}, 0 0 80px ${colors.blue}60`,
              opacity: interpolate(
                frame,
                [compressionStart + 30, compressionStart + 45, compressionStart + 70],
                [0, 1, 0],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              ),
            }}
          />
        )}
      </div>
    </AbsoluteFill>
  );
};
