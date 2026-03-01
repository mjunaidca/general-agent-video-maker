import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Background } from "./Background";
import { IntroScene } from "./scenes/IntroScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { PipelineScene } from "./scenes/PipelineScene";
import { TechScene } from "./scenes/TechScene";
import { CTAScene } from "./scenes/CTAScene";

// Scene timing (frames at 30fps)
// Intro: 0-120 (4s)
// Problem: 100-240 (4.7s, overlaps intro exit)
// Pipeline: 220-390 (5.7s, overlaps problem exit)
// Tech: 370-510 (4.7s, overlaps pipeline exit)
// CTA: 440-540 (3.3s, overlaps tech exit)

export const AgentFactoryVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Persistent animated background */}
      <Background />

      {/* Scene sequences with overlapping transitions */}
      <Sequence from={0} durationInFrames={130}>
        <IntroScene />
      </Sequence>

      <Sequence from={100} durationInFrames={140}>
        <ProblemScene />
      </Sequence>

      <Sequence from={220} durationInFrames={170}>
        <PipelineScene />
      </Sequence>

      <Sequence from={370} durationInFrames={140}>
        <TechScene />
      </Sequence>

      <Sequence from={440} durationInFrames={100}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
