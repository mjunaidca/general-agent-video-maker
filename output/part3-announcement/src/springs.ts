import { SpringConfig } from "remotion";

export const springPresets: Record<string, SpringConfig> = {
  cardEntry: { stiffness: 90, damping: 10 },
  textReveal: { stiffness: 100, damping: 12 },
  deploySpike: { stiffness: 220, damping: 8 },
  compression: { stiffness: 200, damping: 18 },
  captionPop: { stiffness: 180, damping: 10 },
  enlargePulse: { stiffness: 150, damping: 12 },
  urlSlide: { stiffness: 100, damping: 14 },
};
