import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { colors } from "./styles";
import { Scene1Question } from "./scenes/Scene1Question";
import { Scene1bTension } from "./scenes/Scene1bTension";
import { Scene2Scale } from "./scenes/Scene2Scale";
import { Scene3Domains } from "./scenes/Scene3Domains";
import { Scene4Crystallization } from "./scenes/Scene4Crystallization";
import { Scene5Moment } from "./scenes/Scene5Moment";

// Scene start frames (60fps)
const S1_START = 0;       // 0:00
const S1B_START = 210;    // 3.5s
const S2_START = 330;     // 5.5s
const S3_START = 600;     // 10s
const S4_START = 960;     // 16s
const S4_PHASE3 = 1260;   // 21s (extraction)
const S4_PHASE4 = 1440;   // 24s (spec+deploy)
const S5_START = 1620;    // 27s

// Small offset so visuals lead voice slightly
const VO_LEAD = 6; // 0.1s

export const PartThreeAnnouncement: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      {/* VO segments — each synced to its scene start */}
      <Sequence from={S1_START + VO_LEAD}>
        <Audio src={staticFile("audio/vo_s1.wav")} volume={0.9} />
      </Sequence>
      <Sequence from={S1B_START + VO_LEAD}>
        <Audio src={staticFile("audio/vo_s1b.wav")} volume={0.9} />
      </Sequence>
      <Sequence from={S2_START + VO_LEAD}>
        <Audio src={staticFile("audio/vo_s2.wav")} volume={0.9} />
      </Sequence>
      <Sequence from={S3_START + VO_LEAD}>
        <Audio src={staticFile("audio/vo_s3.wav")} volume={0.9} />
      </Sequence>
      <Sequence from={S4_START + VO_LEAD}>
        <Audio src={staticFile("audio/vo_s4a.wav")} volume={0.9} />
      </Sequence>
      <Sequence from={S4_PHASE3 + VO_LEAD}>
        <Audio src={staticFile("audio/vo_s4b.wav")} volume={0.9} />
      </Sequence>
      <Sequence from={S4_PHASE4 + VO_LEAD}>
        <Audio src={staticFile("audio/vo_s4c.wav")} volume={0.9} />
      </Sequence>
      <Sequence from={S5_START + VO_LEAD}>
        <Audio src={staticFile("audio/vo_s5.wav")} volume={0.9} />
      </Sequence>

      {/* Scene 1: The Question — 0:00–3.5s */}
      <Sequence from={0} durationInFrames={216}>
        <Scene1Question />
      </Sequence>

      {/* Scene 1b: The Tension — 3.5s–5.5s */}
      <Sequence from={206} durationInFrames={130}>
        <Scene1bTension />
      </Sequence>

      {/* Scene 2: The Scale — 5.5s–10s */}
      <Sequence from={326} durationInFrames={280}>
        <Scene2Scale />
      </Sequence>

      {/* Scene 3: The Seven Domains — 10s–16s */}
      <Sequence from={596} durationInFrames={370}>
        <Scene3Domains />
      </Sequence>

      {/* Scene 4: The Crystallization — 16s–27s */}
      <Sequence from={956} durationInFrames={670}>
        <Scene4Crystallization />
      </Sequence>

      {/* Scene 5: The Moment — 27s–38s */}
      <Sequence from={1616} durationInFrames={664}>
        <Scene5Moment />
      </Sequence>
    </AbsoluteFill>
  );
};
