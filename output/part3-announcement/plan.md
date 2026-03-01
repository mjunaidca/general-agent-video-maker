# Build Plan: Part 3 Announcement Video

## Context

The spec (`output/part3-announcement/spec.md` v3) is approved. Discovery is complete. Zero code exists — this is a greenfield Remotion build for a 38-second (2280 frames @ 60fps) motion graphics announcement video.

**Governing artifact**: `output/part3-announcement/spec.md`
**Target**: 16:9 landscape (Phase 1 only — defer responsive format prop)

---

## Build Strategy: Scene-by-Scene

Build each scene end-to-end (layout + animation + burned-in caption), then integrate. This lets us preview and iterate per-scene in Remotion Studio before wiring them together.

---

## Step 1: Scaffold Project

Manual scaffold (no interactive CLI) under `output/part3-announcement/`:

```
output/part3-announcement/
├── src/
│   ├── index.ts              # registerRoot
│   ├── Root.tsx              # Composition (2280 frames, 60fps, 1920x1080)
│   ├── PartThreeAnnouncement.tsx  # Main composition (sequences + background)
│   ├── styles.ts             # Brand colors, fonts, type scale, spring presets
│   ├── springs.ts            # Named spring configs from spec
│   ├── BurnedInCaption.tsx   # Keyword caption overlay component
│   ├── Transcription.tsx     # VO subtitle overlay (for later)
│   └── scenes/
│       ├── Scene1Question.tsx
│       ├── Scene1bTension.tsx
│       ├── Scene2Scale.tsx
│       ├── Scene3Domains.tsx
│       ├── Scene4Crystallization.tsx
│       └── Scene5Moment.tsx
├── public/
│   ├── audio/                # VO, music, SFX (populated later)
│   └── images/               # (none needed — all code-generated)
├── remotion.config.ts
├── tsconfig.json
└── package.json
```

**Dependencies**: `remotion`, `@remotion/cli`, `react`, `react-dom`, `lucide-react`, `typescript`, `@types/react`

---

## Step 2: Foundation Files

### `styles.ts`
- Brand colors from spec: `#0a0a0f`, `#3b82f6`, `#f59e0b`, `#2d2d2d`, `#262626`, `#3d3d3d`
- White levels: primary (0.95), secondary (0.55), dim (0.3)
- Type scale: `display` (Inter Bold, ~72px), `h1`, `h2`, `body`, `code` (JetBrains Mono), `caption` (Inter Black 900, uppercase, +0.05em tracking)
- Font families: `Inter, system-ui, sans-serif` and `'JetBrains Mono', monospace`

### `springs.ts`
Named presets extracted from spec's animation notes:
- `cardEntry`: stiffness 90, damping 10
- `textReveal`: stiffness 100, damping 12
- `deploySpike`: stiffness 220, damping 8
- `compression`: stiffness 200, damping 18
- `captionPop`: stiffness 180, damping 10
- `enlargePulse`: stiffness 150, damping 12
- `urlSlide`: stiffness 100, damping 14

### `BurnedInCaption.tsx`
Accepts timing data (start frame, end frame, text, position). Renders bold uppercase keyword punches from the spec's caption table. Spring pop entrance, fade exit.

---

## Step 3: Build Scenes (one at a time, in order)

### Scene 1: "The Question" (0:00–3.5s, frames 0–210)
- Dark bg, 2-frame digital glitch at frame 18 (0.3s)
- Display text spring-in: "What if your expertise could run 24/7?"
- Hold 2s clean
- Terminal prompt types below at 2.5s: `$ agent-factory --status` / `Expertise: ⚠ Not connected`
- Warning pulse: amber (#f59e0b) 8 frames → blue (#3b82f6)
- Caption: "YOUR EXPERTISE" at 0.5s upper-third

### Scene 1b: "The Tension" (3.5s–5.5s, frames 210–330)
- Terminal small upper-left
- Three staggered lines (12 frames apart, spring Y-offset 8px):
  "Knowledge trapped in inboxes." / "In PDFs." / "In people's heads."
- Each line indented further right (cascading drift)
- Hold 0.5s, then particle dissolve (~40 particles/line, drift right)
- Caption: "TRAPPED" center at 4.5s

### Scene 2: "The Scale" (5.5s–10s, frames 330–600)
- Counter: 0 → 200M → 600M → 1.2B (spring settle, accelerating)
- "Knowledge Workers" subtitle, "Global knowledge workforce" sublabel
- Translucent artifact textures behind (0.08 opacity, 15-frame crossfade) — code-generated rectangles with faint lines representing contracts/floor plans/charts/dashboards
- Three Lucide icons (Landmark, Scale, Compass) spring from bottom, staggered 6 frames
- Caption: "NO CODE REQUIRED" at 8.5s

### Scene 3: "The Seven Domains" (10s–16s, frames 600–960)
- 7 domain cards in 3-2-2 grid, dark panels (#2d2d2d), rounded corners
- Each: Lucide icon (blue) + domain name (white bold)
- 4-frame stagger cascade from varying directions
- "Your domain" moment: Healthcare enlarges 3% + blue border glow 12 frames
- 1s hold, then compress to center point
- Captions: "7 DOMAINS" at 11s → "DEPLOYABLE AGENTS" at 14s

### Scene 4: "The Crystallization" (16s–27s, frames 960–1620)
Four phases:
1. **Messy Mind** (960–1110): Brain icon large center, 4 text fragments orbiting at 0.3 rot/sec
2. **Brand Moment** (1110–1260): "Knowledge Extraction Method" fades in, 1.5s stillness (all motion paused), blue underline draws L→R
3. **Extraction** (1260–1440): Fragments accelerate inward, emerge structured on right, synapse lines (1px blue, 15 frames)
4. **Spec + Deploy** (1440–1620): SKILL.md document types in (25ms/char), Deploy badge spring-pop at frame 1560, camera-shake (2 frames, 3px), blue flash ring expanding

### Scene 5: "The Moment" (27s–38s, frames 1620–2280)
- 1-frame white flash
- "Part 3 Is Live" types center (50ms/char)
- "Domain Agent Workflows" subtitle fades in
- URL slides up: agentfactory.panaversity.org
- Blue horizontal rule draws across
- CTA: "The builders are done. Now it's your turn."
- 7 domain icons orbit at 0.15 opacity background
- "AF" monogram bottom-right
- 5s hold to end

---

## Step 4: Wire Composition

`PartThreeAnnouncement.tsx` — sequences all scenes with 4-6 frame overlaps at transitions. Background layer (solid #0a0a0f) persists outside sequences. BurnedInCaption overlay on top with full timing table.

---

## Step 5: Start Studio & Preview

```bash
cd output/part3-announcement && npm install && npm run dev
```

Then expose via cloudflare tunnel:
```bash
bash .claude/skills/cloudflare-tunnel/scripts/tunnel.sh start 3000
```

Send preview URL. Iterate scene-by-scene.

---

## Step 6: Audio (after visual approval)

1. Generate VO with Gemini TTS (Kore voice) using the full narration script from spec
2. Add `Transcription.tsx` synced to VO timing
3. BGM and SFX — source or defer based on operator preference

---

## Key Reusable Patterns from References

- **TerminalWindow** from `references/components.md` — adapt for Scene 1 terminal
- **StatsDisplay** — adapt for Scene 2 counter (needs spring settle instead of linear)
- **FeatureCard** — adapt for Scene 3 domain cards (simplify: icon + name only)
- **TextReveal** — adapt for Scene 5 type-on effect
- **Spring configs** — all from spec's animation notes, not reference defaults

---

## Step 7: Visual QA via Claude-in-Chrome

After each scene build (and after full composition wiring), use **Claude-in-Chrome browser automation** to review the Remotion Studio preview like a human reviewer:

### Per-Scene QA Loop
1. Open Remotion Studio in browser (localhost:3000 or tunnel URL)
2. Navigate to the composition in the Studio UI
3. Use `mcp__claude-in-chrome__computer` to scrub to key frames for each scene
4. Take screenshots at critical moments (scene entry, mid-animation, exit)
5. Compare screenshots against spec requirements:
   - Colors match brand palette?
   - Text hierarchy correct (display > body > dim)?
   - Lucide icons rendering, no emoji?
   - Burned-in captions visible at correct positions?
   - Layout within safe zone (810x810 center)?
6. If issues found → fix code → hot-reload → re-screenshot → verify

### Key Frames to Screenshot & Verify
| Frame | What to Check |
|-------|--------------|
| 18 | Digital glitch visible (pattern interrupt) |
| 30 | "What if your expertise..." display text centered |
| 150 | Terminal prompt visible, warning pulse amber |
| 210 | Tension lines staggering in |
| 270 | "TRAPPED" caption visible |
| 400 | Counter mid-climb |
| 570 | 1.2B settled, icons visible, "NO CODE REQUIRED" caption |
| 660 | Domain cards cascading |
| 900 | Cards compressed to point |
| 1100 | Brain + orbiting fragments |
| 1200 | "Knowledge Extraction Method" — stillness window (no competing motion) |
| 1400 | SKILL.md document typing |
| 1560 | Deploy spike — badge + camera shake + blue flash ring |
| 1625 | White flash → "Part 3 Is Live" typing |
| 1900 | Full CTA visible with URL + "Your turn" |
| 2200 | Hold frame — all elements stable |

### Full Composition QA
After all scenes wired:
1. Play through full 38s in browser, take screenshots every ~5s
2. Verify transition overlaps are smooth (no black gaps)
3. Run mute test: story reads visually with captions only
4. Run squint test: zoom out screenshot, check hierarchy
5. Iterate: fix → hot-reload → re-verify until spec-compliant

### Quality Checklist (from CLAUDE.md)
- [ ] Mute test: story follows without sound
- [ ] Squint test: hierarchy visible when squinting
- [ ] Timing test: motion feels natural (springs, no linear)
- [ ] Consistency test: similar elements behave similarly
- [ ] Slideshow test: does NOT look like PowerPoint
- [ ] Brand test: colors/fonts/tone match Agent Factory
- [ ] Text test: no scene >15 words on screen
- [ ] Icon test: zero emoji, all Lucide React

---

## Implementation Note

When starting build, first load the remotion skill via `/remotion` (Skill tool) to activate the full workflow context, then proceed with Step 1 scaffolding.
