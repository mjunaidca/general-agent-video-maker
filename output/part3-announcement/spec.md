# Video Production Spec — v4 (as-built)

**Title**: Part 3 Is Live — Domain Agent Workflows
**Category**: Technical Teaser (Announcement)
**Duration**: 38 seconds
**Aspect Ratio**: 16:9 (Phase 1 deliverable)
**FPS**: 60
**Resolution**: 1920x1080
**Voice**: Kore (Gemini TTS, `gemini-2.5-flash-preview-tts`)
**Rendered output**: `out/part3-announcement.mp4` (3.8 MB, H.264 + AAC)

---

## Director's Treatment

A launch announcement with product-keynote energy, designed for universal reach — existing Agent Factory community AND knowledge workers discovering this for the first time.

**Emotional arc**: Personal tension ("what if YOUR expertise could run 24/7?") → pain (knowledge trapped) → scale (1.2 billion workers) → recognition (7 domains — viewer sees their industry) → transformation (expertise crystallizes into a deployable spec) → identity ("now it's your turn").

**Key design principles**:

1. **Universal hook** — opens with an identity question that works for bankers, lawyers, and architects who've never heard of Agent Factory.
2. **Bold visual anchors** — every scene has large on-screen text that carries the narrative visually. No burned-in keyword captions (removed in v4 — operator preference for cleaner frames).
3. **Scaled-up typography** — all type sizes bumped ~40% from v3 for impact at all viewport sizes. Display at 96px, stat counter at 140px.
4. **Clean compositions** — Scene 2 simplified to centered vertical stack (artifact textures removed for clarity).
5. **60fps** — spring animations render smoother, algorithmic preference on YouTube Shorts / TikTok / Reels.

---

## Scene Breakdown

### Scene 1: "The Question" (0:00 – 3.5s, frames 0–210)

**Visual**: Dark background (#0a0a0f). 2-frame digital glitch at frame 18 (scanline overlay, pattern interrupt). Display text springs into center:

**"What if your expertise could run 24/7?"**

96px Inter Bold, white primary, center-aligned. Holds for 2 seconds clean. At 2.5s (frame 150), text fades to 0.3 opacity as terminal prompt types below:

```
$ agent-factory --status
Expertise: ⚠ Not connected
```

Terminal: 640px wide, dark panel (#2d2d2d), rounded corners, traffic light dots. Type speed: 35ms/char (~2 frames/char at 60fps). Warning line pulses amber (#f59e0b) for 8 frames, then shifts to blue (#3b82f6).

**Voiceover**: "What if your twenty years of expertise... could run twenty-four seven?" (vo_s1.wav, 3.3s, speed-adjusted 1.43x)

**Transition**: Terminal scales down (0.4x) and slides to upper-left over last 30 frames.

**Animation notes**: Display text spring: stiffness 100, damping 12. Scale 0.92→1.0, opacity 0→1.

---

### Scene 1b: "The Tension" (3.5s – 5.5s, frames 210–330)

**Visual**: Three lines appear center-screen, staggered 12 frames apart, 44px body text, white secondary:

```
Knowledge trapped in inboxes.
In PDFs.
In people's heads.
```

Each line indented further right (60px cascade). Spring Y-offset 12px→0. After 0.5s hold (frame 78), all lines dissolve into ~40 particles per line drifting rightward with gravity-fade over 15 frames.

**Voiceover**: "Trapped in inboxes. PDFs. People's heads." (vo_s1b.wav, 1.7s, speed-adjusted 2.7x via chained atempo)

**Animation notes**: Spring config: stiffness 100, damping 12.

---

### Scene 2: "The Scale" (5.5s – 10s, frames 330–600)

**Visual**: Clean centered vertical stack (flexbox centered). No background artifacts.

Large counter steps through thresholds:
- Frame 0: "0"
- Frame 40: "200M"
- Frame 80: "600M"
- Frame 120: "1.2B" (spring settle, scale 1.06→1.0)

140px stat weight, white primary. Below:
- "Knowledge Workers" — 56px h2, white secondary
- "Global knowledge workforce" — 26px label, white dim

Three Lucide icons (Landmark, Scale, Compass) spring from bottom at frame 140, staggered 6 frames, size 48px, blue.

**Voiceover**: "1.2 billion knowledge workers. Zero need to write code." (vo_s2.wav, 4.1s, speed-adjusted 1.3x)

**v4 change**: Removed translucent artifact textures (contract, floor plan, chart, dashboard) that caused visual scatter at review. Clean stack reads better.

---

### Scene 3: "The Seven Domains" (10s – 16s, frames 600–960)

**Visual**: Seven domain cards in 3-2-2 grid, 300x96px each, dark panel (#2d2d2d), rounded 14px:

| Domain | Icon |
|--------|------|
| Architecture & Engineering | Compass |
| Business & Operations | Briefcase |
| Banking & Finance | Landmark |
| Sales & Revenue | TrendingUp |
| Legal & Compliance | Scale |
| Healthcare Operations | HeartPulse |
| Technical Documentation | FileCode |

Cards cascade from varying directions, 4-frame stagger. Icon 32px blue + domain name 20px bold white.

**"Your domain" moment**: Healthcare (index 5) enlarges 3% with blue border glow for 12 frames.

After 1s hold, all cards compress toward center (spring stiffness 200, damping 18), fading to 0. Blue glow point appears at center, then fades.

**Voiceover**: "Seven domains. From banking to healthcare — each one, a deployable agent." (vo_s3.wav, 5.7s, natural speed)

**Animation notes**: Card entry spring: stiffness 90, damping 10. Enlarge: stiffness 150, damping 12.

---

### Scene 4: "The Crystallization" (16s – 27s, frames 960–1620)

Four phases:

**Phase 1 — The Messy Mind (frames 0–150, 2.5s)**:
Brain icon (Lucide: Brain, 160px, blue) center-screen. 4 text fragments orbit at 0.3 rot/sec, 260px radius:
- "client risk", "deal structure", "regulatory compliance", "quarterly reports"

Label: "Your Expertise" (26px label, white dim) above brain.

**Voiceover**: "The Knowledge Extraction Method. What you already know..." (vo_s4a.wav, 3.6s, natural speed)

**Phase 2 — The Brand Moment (frames 150–300, 2.5s)**:
"Knowledge Extraction Method" fades in center-top (72px h1, white primary). Blue underline draws L→R. **1.5s stillness window** (frames 150–210): fragments pause orbit, brain dims to 0.92 scale. No competing motion — brand recall requires stillness.

At frame 210, motion resumes.

**Phase 3 — The Extraction (frames 300–480, 3s)**:
Fragments accelerate inward (gravity pull over 45 frames). Emerge structured on right side as clean aligned lines (24px, white, bold). 2 synapse lines (1.5px blue) connect brain to structure for 15 frames.

**Voiceover**: "...structured, deployed, operational." (vo_s4b.wav, 2.8s, natural speed)

**Phase 4 — The Spec + Deploy Spike (frames 480–660, 3s)**:
Brain fades out. SKILL.md document types in (580px wide, #262626 interior, 30px code font, 25ms/char):

```
SKILL.md
───────────────
Role: Domain expert
Process:
  1. Analyze inputs
  2. Apply expertise
  3. Generate output
```

At frame 600: **Deploy spike** — blue "Deploy" badge (20px, 24px border-radius) spring-pops onto document corner (stiffness 220, damping 8). Simultaneous: camera-shake (2 frames, 3px random offset), blue flash ring expanding to 250px radius over 10 frames.

Label: "Plain-English Agent Spec" (26px label, white dim) below document.

**Voiceover**: "Your expertise becomes the agent's operating system." (vo_s4c.wav, 2.8s, speed-adjusted 1.3x)

**Transition**: Last frame (659): white flash at 0.8 opacity.

---

### Scene 5: "The Moment" (27s – 38s, frames 1620–2280)

**The Reveal (frames 0–180, 3s)**:
White flash dissipates (0.8→0 over 4 frames). "Part 3 Is Live" types center (96px display, 50ms/char = 3 frames/char). 0.5s pause, then "Domain Agent Workflows" subtitle fades in (56px h2, white secondary, 24-frame fade).

URL slides up: `agentfactory.panaversity.org` (34px code font, blue, spring stiffness 100, damping 14).

**The Identity CTA (frames 180–360, 3s)**:
Blue horizontal rule draws across (600px max, 3px height). CTA fades in below:

**"The builders are done. Now it's your turn."** (44px bodyLg, white primary)

**The Hold (frames 360–664, 5s)**:
All elements visible. 7 domain icons orbit slowly (60s full rotation) at 0.15 opacity, 420px radius. "AF" monogram bottom-right (32px, 0.4 opacity).

**Voiceover**: "Part 3 is live. Domain Agent Workflows. The builders are done — now it's your turn." (vo_s5.wav, 6.5s, natural speed)

---

## Visual Direction

### Color Application
- **#0a0a0f**: Primary background, all scenes
- **#3b82f6**: Icons, rules, URL, Deploy badge, accent underlines, synapse lines, flash ring
- **#f59e0b**: Warning pulse only (Scene 1, 8 frames → transitions to blue)
- **#2d2d2d**: Domain cards, terminal windows
- **#262626**: SKILL.md interior
- **#3d3d3d**: Card borders, terminal borders, dividers
- **White primary (0.95)**: Headlines, domain names, "Part 3 Is Live", CTA
- **White secondary (0.55)**: Subtitles, body text, tension lines
- **White dim (0.3)**: Labels, sublabels

### Typography (as-built sizes from `styles.ts`)
| Token | Size | Weight | Use |
|-------|------|--------|-----|
| display | 96px | 700 | Hook question, "Part 3 Is Live" |
| h1 | 72px | 700 | "Knowledge Extraction Method" |
| h2 | 56px | 600 | Subtitles, "Knowledge Workers" |
| stat | 140px | 800 | Counter |
| body | 38px | 400 | Body text |
| bodyLg | 44px | 400 | CTA |
| code | 30px | 500 | Terminal, URL, SKILL.md |
| label | 26px | 600 | Uppercase labels |

Fonts: Inter (system-ui fallback), JetBrains Mono.

### Animation Style
- Spring physics everywhere. Zero linear easing.
- 60fps rendering
- Stagger offset: 4-6 frames between siblings
- Type-on: character-by-character for terminal/code
- Overlap transitions: 4-6 frames between scene sequences
- Pattern interrupt: 2-frame scanline glitch at frame 18
- White flash: 1 frame before Scene 5
- Stillness window: 1.5s in Scene 4 Phase 2 for brand recall
- Camera-shake: 2 frames, 3px random offset (deploy moment only)

### Spring Presets (from `springs.ts`)
| Name | Stiffness | Damping | Use |
|------|-----------|---------|-----|
| cardEntry | 90 | 10 | Domain card cascade |
| textReveal | 100 | 12 | Display text, counter settle |
| deploySpike | 220 | 8 | Deploy badge pop |
| compression | 200 | 18 | Card compression |
| captionPop | 180 | 10 | (reserved, captions disabled) |
| enlargePulse | 150 | 12 | Healthcare highlight |
| urlSlide | 100 | 14 | URL slide-up |

### Icon Selection (Lucide React)
| Usage | Icon |
|-------|------|
| Architecture | Compass |
| Business Ops | Briefcase |
| Banking | Landmark |
| Sales | TrendingUp |
| Legal | Scale |
| Healthcare | HeartPulse |
| Tech Docs | FileCode |
| Expertise/Brain | Brain |

---

## Audio Plan

### Voiceover (as-built)
8 separate Gemini TTS segments (Kore voice), each `<Sequence>`-aligned to scene start with 6-frame visual lead:

| Segment | File | Script | Duration | Speed | Scene Start Frame |
|---------|------|--------|----------|-------|-------------------|
| s1 | vo_s1.wav | "What if your twenty years of expertise... could run twenty-four seven?" | 3.3s | 1.43x | 6 |
| s1b | vo_s1b.wav | "Trapped in inboxes. PDFs. People's heads." | 1.7s | 2.7x | 216 |
| s2 | vo_s2.wav | "1.2 billion knowledge workers. Zero need to write code." | 4.1s | 1.3x | 336 |
| s3 | vo_s3.wav | "Seven domains. From banking to healthcare — each one, a deployable agent." | 5.7s | 1.0x | 606 |
| s4a | vo_s4a.wav | "The Knowledge Extraction Method. What you already know..." | 3.6s | 1.0x | 966 |
| s4b | vo_s4b.wav | "...structured, deployed, operational." | 2.8s | 1.0x | 1266 |
| s4c | vo_s4c.wav | "Your expertise becomes the agent's operating system." | 2.8s | 1.3x | 1446 |
| s5 | vo_s5.wav | "Part 3 is live. Domain Agent Workflows. The builders are done — now it's your turn." | 6.5s | 1.0x | 1626 |

**TTS model**: `gemini-2.5-flash-preview-tts`, voice: Kore
**Speed adjustment**: ffmpeg `atempo` filter. s1b uses chained `atempo=2.0,atempo=1.35` (2.7x total) since single atempo caps at 2.0x.

### Background Music
Not implemented in Phase 1. Spec for future:
- Dark, minimal electronic ambient
- Low-frequency pulse building across scenes 1-4
- Crescendo into Scene 5
- Volume: -18dB under VO, -12dB during pauses

### Sound Effects
Not implemented in Phase 1. See v3 spec SFX table for future reference.

---

## CTA

**Closing message**: "The builders are done. Now it's your turn."
**URL**: agentfactory.panaversity.org
**Action**: Identity-driven share trigger.

---

## Technical Notes

- **Composition**: `PartThreeAnnouncement` — 2280 frames, 60fps, 1920x1080
- **Scene overlap**: 4-6 frames at each transition boundary
- **Font loading**: Inter and JetBrains Mono via system/Google Fonts
- **No external images** — all visuals are code-generated
- **Responsive format prop**: Deferred to Phase 2

---

## File Structure (as-built)

```
output/part3-announcement/
├── spec.md                    # This file (v4, as-built)
├── src/
│   ├── index.ts               # registerRoot
│   ├── Root.tsx               # Composition definition
│   ├── PartThreeAnnouncement.tsx  # Main composition (sequences + VO)
│   ├── styles.ts              # Brand colors, fonts, type scale
│   ├── springs.ts             # Named spring configs
│   ├── BurnedInCaption.tsx    # Caption component (exists, not rendered)
│   ├── Transcription.tsx      # VO subtitle overlay (not used)
│   └── scenes/
│       ├── Scene1Question.tsx
│       ├── Scene1bTension.tsx
│       ├── Scene2Scale.tsx
│       ├── Scene3Domains.tsx
│       ├── Scene4Crystallization.tsx
│       └── Scene5Moment.tsx
├── public/
│   └── audio/
│       ├── vo_s1.wav          # Scene 1 VO (3.3s)
│       ├── vo_s1b.wav         # Scene 1b VO (1.7s)
│       ├── vo_s2.wav          # Scene 2 VO (4.1s)
│       ├── vo_s3.wav          # Scene 3 VO (5.7s)
│       ├── vo_s4a.wav         # Scene 4 phase 1-2 VO (3.6s)
│       ├── vo_s4b.wav         # Scene 4 phase 3 VO (2.8s)
│       ├── vo_s4c.wav         # Scene 4 phase 4 VO (2.8s)
│       └── vo_s5.wav          # Scene 5 VO (6.5s)
├── out/
│   └── part3-announcement.mp4 # Rendered output (3.8 MB)
├── remotion.config.ts
├── tsconfig.json
└── package.json
```

---

## Distribution Variants

### Phase 1 (delivered)
- 16:9 landscape — YouTube upload ready

### Phase 2 (future)
- 9:16 vertical — Instagram Reels, TikTok, YouTube Shorts
- 1:1 square — LinkedIn feed, X feed
- BGM and SFX layer
- Responsive `format` prop implementation

---

## Changelog

### v4 changes from v3 (production iterations)
1. **Burned-in captions removed** — operator rejected during review. Component (`BurnedInCaption.tsx`) exists but is not rendered. Cleaner frames preferred.
2. **Scene 2 simplified** — removed translucent artifact textures (contract, floor plan, chart, dashboard). Replaced with clean centered flexbox stack. Operator flagged original as "scattered".
3. **Type scale bumped ~40%** — all font sizes increased for impact. Display 72→96px, stat 96→140px, body 28→38px, code 22→30px, h1 56→72px, h2 42→56px, caption 32→44px, label 18→26px. Operator flagged v3 sizes as "too small".
4. **VO split into per-segment files** — single continuous TTS take replaced with 8 separate segments, each `<Sequence>`-aligned to scene start frames. Solves audio-video sync drift.
5. **VO scripts shortened** — s1b trimmed from "Trapped in inboxes. In PDFs. In people's heads." to "Trapped in inboxes. PDFs. People's heads." s2 trimmed from full sentence to "1.2 billion knowledge workers. Zero need to write code." Required to fit scene windows.
6. **VO speed-adjusted** — s1 (1.43x), s1b (2.7x chained atempo), s2 (1.3x), s4c (1.3x) via ffmpeg atempo to fit scene durations.
7. **BGM and SFX deferred** — only VO present in Phase 1 render.
8. **Responsive format prop deferred** — Phase 1 is landscape-only.
9. **Terminal window enlarged** — 520→640px wide, traffic lights 10→12px, padding increased.
10. **Domain cards enlarged** — 240x80→300x96px, icon 24→32px, wider grid spacing.
11. **Scene 4 elements scaled** — Brain icon 120→160px, fragment orbit radius 200→260px, SKILL.md doc 460→580px wide, Deploy badge font 14→20px.
