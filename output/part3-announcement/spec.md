# Video Production Spec — v3

**Title**: Part 3 Is Live — Domain Agent Workflows
**Category**: Technical Teaser (Announcement)
**Duration**: 38 seconds
**Aspect Ratio**: 16:9 (primary), 9:16 and 1:1 variants (see Responsive Composition Strategy)
**FPS**: 60
**Resolution**: 1920x1080 (16:9), 1080x1920 (9:16), 1080x1080 (1:1)
**Voice**: Kore (authoritative, measured pace)

---

## Director's Treatment

A launch announcement with product-keynote energy, designed for universal reach — existing Agent Factory community AND knowledge workers discovering this for the first time.

**Emotional arc**: Personal tension ("what if YOUR expertise could run 24/7?") → pain (knowledge trapped) → scale (1.2 billion workers) → recognition (7 domains — viewer sees their industry) → transformation (expertise crystallizes into a deployable spec) → identity ("now it's your turn").

**Key design principles in v3**:

1. **Universal hook** — opens with an identity question that works for bankers, lawyers, and architects who've never heard of Agent Factory. Part 1-2 callback moved later.
2. **Mute-first** — every scene has burned-in keyword captions AND a bold text anchor. 85% of initial views are silent.
3. **Safe-zone composition** — all critical content lives in a center column (810x810 within 1920x1080) so the same scenes work at 16:9, 9:16, and 1:1 without re-layout.
4. **Density discipline** — Scene 4 is simplified. "Knowledge Extraction Method" gets 1.5s of stillness with no competing motion for brand recall.
5. **60fps** — spring animations render smoother, algorithmic preference on YouTube Shorts / TikTok / Reels.

---

## Responsive Composition Strategy

All scenes are designed with a **center safe zone** (810x810px within the 1920x1080 canvas). Critical content — text, icons, key animations — stays within this zone.

**16:9 (primary)**: Full canvas. Peripheral elements (orbiting icons, particle trails, texture backgrounds) extend into wings.

**9:16 (vertical)**: Safe zone content centered in 1080x1920. Vertical padding above/below filled with subtle gradient or brand color wash. Terminal windows and cards reflow to portrait orientation.

**1:1 (square)**: Safe zone fills the frame. Tightest crop — only essential elements.

Implementation: One Remotion composition with a `format` prop (`"landscape" | "portrait" | "square"`) that adjusts layout, font sizes, and element positioning. Peripheral decorative elements hidden in portrait/square.

---

## Scene Breakdown

### Scene 1: "The Question" (0:00 – 3.5s, 3.5s)

**Visual**: Dark background (#0a0a0f). Screen flickers once (2-frame digital glitch at 0.3s — pattern interrupt). Then a single line of large display text springs into center screen:

**"What if your expertise could run 24/7?"**

The text is white primary, Inter Bold. It holds for 2 seconds — clean, uncluttered, no competing elements. This is a universal hook: it works whether you're a banker, a lawyer, an architect, or a Parts 1-2 reader.

At 2.5s, the text begins to fade as a terminal prompt types below it in smaller code font:

```
$ agent-factory --status
Expertise: ⚠ Not connected
```

The warning pulses amber (#f59e0b) for 8 frames, then shifts to blue. Establishes the technical context without leading with it.

**Burned-in caption**: **YOUR EXPERTISE** (appears at 0.5s, upper-third, white, bold, 1.5s duration)

**Voiceover**: "What if your twenty years of expertise... could run twenty-four seven?"

**Transition**: Terminal prompt scales down to upper-left. The words "Not connected" linger and morph into Scene 1b's tension text.

**Animation notes**: No fade-in — flicker appears at frame 1 (pattern interrupt). Display text spring-in: stiffness 100, damping 12. Terminal type speed: 35ms/char. Warning pulse: #f59e0b for 8 frames → #3b82f6.

---

### Scene 1b: "The Tension" (3.5s – 5.5s, 2s)

**Visual**: Terminal small in upper-left. Center screen, three lines appear in staggered sequence (fade-up, 0.4s apart), body text in white secondary:

```
Knowledge trapped in inboxes.
In PDFs.
In people's heads.
```

Each line indented further right than the previous — cascading drift suggesting accumulation. Hold 0.5s, then all three dissolve into particles drifting rightward.

**Burned-in caption**: **TRAPPED** (appears centered, large, white, overlaid briefly at 4.5s for 0.8s — mute viewers get the emotional beat)

**Voiceover**: "Trapped in inboxes. In PDFs. In people's heads."

**Transition**: Particles coalesce rightward, feeding into the counter of Scene 2.

**Animation notes**: Line stagger: 12 frames apart. Spring Y-offset: starts 8px below, settles. Particle dissolve: ~40 particles per line, drift right with gravity-fade over 15 frames.

---

### Scene 2: "The Scale" (5.5s – 10s, 4.5s)

**Visual**: Center screen, a large counter rapidly climbs:

**0 → 200M → 600M → 1.2B**

Display-sized, white primary, bold. Accelerates — starting slow, then snapping to 1.2B with a spring settle. Below: **"Knowledge Workers"** (white secondary). Sublabel: **"Global knowledge workforce"** (white dim, smaller).

Behind the counter, domain-specific artifacts flicker as translucent textures (0.08 opacity): a contract page, a floor plan grid, a patient chart, a financial dashboard — each visible for 12-15 frames, crossfading. These replace the v1/v2 silhouette grid. More visceral, less clip-art.

Three Lucide icons (Landmark, Scale, Compass) spring in from bottom, staggered 6 frames, landing beneath the text.

**Burned-in caption**: **NO CODE REQUIRED** (appears bottom-center at 8.5s, holds through transition)

**Voiceover**: "1.2 billion knowledge workers — bankers, lawyers, architects — and zero of them need to write code."

**Transition**: Icons multiply outward in a ripple, seeding Scene 3.

**Animation notes**: Counter interpolation: spring-settle on 1.2B (stiffness 100, damping 12). Format shifts at thresholds: "0"→"200M"→"600M"→"1.2B". Artifact textures: 0.08 opacity, 15-frame crossfade between each. "NO CODE REQUIRED" caption: spring pop stiffness 180, damping 10.

---

### Scene 3: "The Seven Domains" (10s – 16s, 6s)

**Visual**: Seven domain cards cascade in a staggered waterfall. Each card is a dark panel (#2d2d2d), rounded corners:
- Lucide icon (blue)
- Domain name (white primary, bold)

Descriptors removed from cards (v2 had one-liners — cut for speed and mute-readability at this pace).

| Domain | Icon |
|--------|------|
| Architecture & Engineering | Compass |
| Business & Operations | Briefcase |
| Banking & Finance | Landmark |
| Sales & Revenue | TrendingUp |
| Legal & Compliance | Scale |
| Healthcare Operations | HeartPulse |
| Technical Documentation | FileCode |

Card layout: 3-2-2 grid. Cards enter from varying directions, staggered by **4 frames** each (accelerated from v2's 6). The cascade IS the spectacle — fast, rhythmic, percussive.

**"Your domain" moment**: Once all 7 visible, one card (Healthcare by default) enlarges 3% with blue border glow for 12 frames, then settles. Subconscious cue.

After 1s hold, all cards compress into a tight cluster at center.

**Burned-in caption**: **7 DOMAINS** (appears at 11s, center-top) then **DEPLOYABLE AGENTS** (replaces it at 14s)

**Voiceover**: "Seven domains. From banking to healthcare — each one, a deployable agent."

**Transition**: Cards compress into a single glowing blue point, which expands into Scene 4.

**Animation notes**: Card springs: stiffness 90, damping 10. Stagger: 4 frames (tight cascade). Enlarge: spring to 1.03 then 1.0 (stiffness 150, damping 12). Compression: stiffness 200, damping 18. VO is ~4 seconds — reclaimed ~3s from v2 by not narrating all 7 names.

---

### Scene 4: "The Crystallization" (16s – 27s, 11s)

This is the intellectual climax. Expanded to 11s (gained time from Scene 3 compression). Simplified density — fewer elements, more breathing room.

**Phase 1 — The Messy Mind (16s–18.5s, 2.5s)**:

Center-screen, the Brain icon (Lucide: Brain) pulses at large scale, blue. Around it, **4 text fragments** orbit slowly — loose phrases floating in gentle disarray:

```
"client risk"   "deal structure"
"regulatory compliance"   "quarterly reports"
```

Reduced from v2's 6 fragments to 4. Slower orbit (0.3 rotations/sec). Cleaner composition. Label above brain: **"Your Expertise"** (white dim).

**Burned-in caption**: **YOUR EXPERTISE** (bottom-center, appears at 16.5s)

**Phase 2 — The Brand Moment (18.5s–21s, 2.5s)**:

The branded text **"Knowledge Extraction Method"** fades in above the brain, center-top. Inter Bold, white primary, blue underline draws left-to-right.

**Critical**: For 1.5 seconds (18.5s–20s), this text holds with **no competing motion**. Fragments pause their orbit. Brain dims slightly. The branded term owns the frame. Brand recall requires stillness.

At 20s, the brain pulses brighter and motion resumes — fragments begin pulling inward.

**Voiceover (18.5s–21s)**: "The Knowledge Extraction Method." — pause — "What you already know..."

**Phase 3 — The Extraction (21s–24s, 3s)**:

Fragments accelerate inward, pulled toward the brain like gravity. As they pass through, they emerge on the right — structured. Each fragment snaps into a clean line, aligning vertically.

2-3 synapse lines (thin, blue, 1px) briefly connect brain to forming structure — neural pathways. They persist for 15 frames, then fade.

**Burned-in caption**: **STRUCTURED. DEPLOYED.** (replaces "YOUR EXPERTISE" at 21.5s)

**Voiceover (21s–24s)**: "...structured, deployed, operational."

**Phase 4 — The Spec + Deploy Spike (24s–27s, 3s)**:

The structured lines resolve into a SKILL.md document:

```
SKILL.md
───────────────
Role: Domain expert
Process:
  1. Analyze inputs
  2. Apply expertise
  3. Generate output
```

Types in line by line (25ms/char). At 26s, the **Deploy moment** — this is the second retention spike:

- **"Deploy"** badge (blue pill) spring-pops onto document corner
- Simultaneous: brief camera-shake effect (2-frame 3px offset), impact sound hit, blue flash ring expanding outward from the badge
- This is deliberately bigger than v2's subtle badge — it's the mid-video attention peak

Below document: **"Plain-English Agent Spec"** (white dim).

**Burned-in caption**: **PLAIN-ENGLISH SPEC** (appears at 25s) → **DEPLOY** (replaces at 26s, larger, bolder)

**Voiceover (24s–27s)**: "Your expertise becomes the agent's operating system."

**Transition**: Document zooms toward camera. 1-frame white flash (#ffffff, 0.8 opacity). Resolves into Scene 5.

**Animation notes**: Fragment orbit: 0.3 rot/sec, 4 fragments, varying opacity 0.5-0.8. Stillness window: 18.5s–20s, all motion paused except subtle brain pulse. Gravity pull: fragments accelerate over 45 frames. Synapse lines: 1px, #3b82f6, 15-frame lifespan. SKILL.md type: 25ms/char. Deploy spike: camera-shake (random 3px X/Y offset for 2 frames), flash ring (blue circle expanding from badge to 200px radius over 10 frames, fading), spring pop stiffness 220, damping 8.

---

### Scene 5: "The Moment" (27s – 38s, 11s)

**The Reveal (27s–30s)**:

After 1-frame white flash, screen resolves to dark. Bold headline types center-screen, 50ms/char:

**"Part 3 Is Live"**

0.5s pause. Subtitle fades in:

**"Domain Agent Workflows"**

This is where existing readers connect: "Part 3" signals continuity. New viewers understand: "something launched."

URL slides up from bottom:

**agentfactory.panaversity.org**

**Burned-in caption**: **PART 3 IS LIVE** (large, center, appears with the typed text)

**The Identity CTA (30s–33s)**:

Blue horizontal rule (#3b82f6) draws across beneath URL. Below it, the CTA fades in — identity-driven:

**"The builders are done. Now it's your turn."**

White primary, slightly larger than body. The viewer is the next actor.

**Burned-in caption**: **YOUR TURN** (replaces "PART 3 IS LIVE" at 31s)

**The Hold (33s–38s)**:

All elements visible. 7 domain icons orbit slowly at 0.15 opacity in the background. "AF" monogram bottom-right.

5-second hold — long enough for the message to land and for social platform completion metrics.

**Voiceover**: "Part 3 is live. Domain Agent Workflows. The builders are done — now it's your turn."

**Transition**: None — final frame.

**Animation notes**: White flash: 1 frame, #ffffff at 0.8 opacity. Type: 50ms/char. Subtitle fade: 400ms. URL spring: stiffness 100, damping 14. CTA fade: 500ms. Orbiting icons: 60s rotation, 0.15 opacity.

---

## Visual Direction

### Color Application
- **#0a0a0f**: Primary background, all scenes
- **#3b82f6**: Icons, particles, rules, URL, Deploy badge, accent underlines, synapse lines, flash ring
- **#f59e0b**: Warning pulse only (Scene 1, 8 frames → transitions to blue)
- **#2d2d2d**: Domain cards, terminal windows
- **#262626**: SKILL.md interior
- **#3d3d3d**: Card borders, terminal borders, dividers
- **White primary (0.95)**: Headlines, domain names, "Part 3 Is Live", CTA, burned-in captions
- **White secondary (0.55)**: Subtitles, body text, tension lines (Scene 1b)
- **White dim (0.3)**: Labels, sublabels, "Plain-English Agent Spec"

### Typography
- **Display**: Inter Bold, -0.02em — hook question, counter, "Part 3 Is Live", "Knowledge Extraction Method"
- **Body**: Inter Regular — subtitles, CTA, descriptors
- **Code**: JetBrains Mono — terminal, URL, SKILL.md
- **Captions**: Inter Black (900 weight), uppercase, tracked +0.05em — burned-in keyword captions
- All sizes from `styles.ts`. No inline font sizes.

### Animation Style
- Spring physics everywhere. Zero linear easing.
- 60fps rendering for smoother springs and algorithmic preference
- Stagger offset: 4-6 frames between siblings
- Type-on: character-by-character for terminal/code
- Overlap transitions: 4-6 frames
- Pattern interrupt: Screen flicker at frame 1
- White flash: 1 frame before Scene 5, 1 frame equivalent for deploy spike (blue flash ring)
- Stillness window: 1.5s in Scene 4 for brand recall — all motion paused
- Camera-shake: 2 frames, 3px random offset (deploy moment only)

### Burned-In Caption System
Keyword captions appear as bold uppercase punches synced to VO. NOT full transcription — 2-3 word emotional beats. Positioned upper-third or bottom-center depending on scene composition. Always inside the safe zone.

| Scene | Caption | Timing | Position |
|-------|---------|--------|----------|
| 1 | YOUR EXPERTISE | 0.5s–2s | upper-third |
| 1b | TRAPPED | 4.5s–5.3s | center |
| 2 | NO CODE REQUIRED | 8.5s–10s | bottom-center |
| 3 | 7 DOMAINS → DEPLOYABLE AGENTS | 11s / 14s | center-top |
| 4 | YOUR EXPERTISE → STRUCTURED. DEPLOYED. → PLAIN-ENGLISH SPEC → DEPLOY | 16.5s / 21.5s / 25s / 26s | bottom-center |
| 5 | PART 3 IS LIVE → YOUR TURN | 27.5s / 31s | center |

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
| Document/Spec | FileText |

---

## Audio Plan

### Voiceover
**Full narration script** (timed to scenes):

> [0–3.5s] "What if your twenty years of expertise... could run twenty-four seven?"
>
> [3.5–5.5s] "Trapped in inboxes. In PDFs. In people's heads."
>
> [5.5–10s] "1.2 billion knowledge workers — bankers, lawyers, architects — and zero of them need to write code."
>
> [10–16s] "Seven domains. From banking to healthcare — each one, a deployable agent."
>
> [16–21s] "The Knowledge Extraction Method. What you already know..."
>
> [21–24s] "...structured, deployed, operational."
>
> [24–27s] "Your expertise becomes the agent's operating system."
>
> [27–38s] "Part 3 is live. Domain Agent Workflows. The builders are done — now it's your turn."

**Voice**: Kore — measured authority. Brief pauses between sentences (0.3-0.5s). Deliberate pause after "Knowledge Extraction Method" to let brand term breathe.

**Word count**: ~90 words in 38s = comfortable pace.

### Background Music
- Dark, minimal electronic ambient
- Low-frequency pulse building across scenes 1-4
- Crescendo into Scene 5
- Volume: -18dB under VO, -12dB during pauses

### Sound Effects
| Timing | Effect |
|--------|--------|
| 0.3s | Screen flicker — digital glitch/static |
| 1s–3.5s | Terminal keystrokes — mechanical, subtle |
| 3.5s | Warning chime — brief amber alert tone |
| 5s | Text dissolve — soft granular scatter |
| 5.5s–9s | Counter tick — digital increment, accelerating |
| 10s–15s | Card whooshes — soft, one per card, staggered |
| 18.5s | Brand reveal — subtle tonal rise as "Knowledge Extraction Method" appears |
| 21s–24s | Synapse crackle — faint electrical arc |
| 26s | **Deploy spike — deep impact hit + camera shake + flash ring** (second attention peak) |
| 27s | White flash — brief high-frequency transient |
| 28s | "Part 3 Is Live" — deep resonant thud on first letter |
| 30s | Blue line draw — clean sweep |

---

## CTA

**Closing message**: "The builders are done. Now it's your turn."
**URL**: agentfactory.panaversity.org
**Action**: Identity-driven share trigger. Viewer is positioned as the next actor. Designed to prompt forwarding to the domain expert at your company.

---

## Technical Notes

- **FPS**: 60 (smoother springs, algorithmic preference on Shorts/TikTok/Reels)
- **Resolution**: 1920x1080 (16:9), 1080x1920 (9:16), 1080x1080 (1:1)
- **Composition duration**: 38s (2280 frames at 60fps)
- **Scene overlap**: 4-6 frames at each transition boundary
- **Font loading**: Inter (Google Fonts), JetBrains Mono (Google Fonts)
- **No external images required** — all visuals are code-generated
- **Format prop**: `format: "landscape" | "portrait" | "square"` controls layout variant
- **Safe zone**: 810x810px center column — all critical content within

---

## Distribution Variants

### Phase 1 (this build)
- 16:9 landscape — primary deliverable, site hero / YouTube

### Phase 2 (post-approval)
- 9:16 vertical — Instagram Reels, TikTok, YouTube Shorts
- 1:1 square — LinkedIn feed, X feed
- Channel-specific domain order (LinkedIn: Banking/Legal/Ops first; X: Tech Docs/Architecture first)

All variants share the same Remotion composition with a `format` prop. No re-layout required — safe-zone design handles cropping.

---

## Changelog

### v3 changes from v2
1. **Universal hook** — "What if your expertise could run 24/7?" replaces Part 1-2 callback as opener. Works for new audience.
2. **Responsive composition** — safe-zone strategy + 9:16 and 1:1 variant specs. Distribution-ready.
3. **Scene 3 compressed** — 6s (from 8s). 4-frame stagger. VO cut to "Seven domains. From banking to healthcare — each one, a deployable agent." No list reading.
4. **Scene 4 simplified** — 4 fragments (from 6), slower orbit. 1.5s stillness window for "Knowledge Extraction Method" brand recall. Method A/B labels removed.
5. **Scene 4 expanded** — gained 2s from Scene 3 compression. Now 11s total with breathing room.
6. **Deploy retention spike** — camera-shake + impact hit + blue flash ring at 26s. Second attention peak.
7. **Burned-in keyword captions** — uppercase punch words synced to VO, separate from mute text anchors.
8. **Domain artifact textures** — contract, floor plan, patient chart, dashboard flicker behind counter (Scene 2). Replaces silhouette grid.
9. **60fps** — smoother springs, algorithmic preference.
10. **CTA confirmed** — "The builders are done. Now it's your turn." (identity-driven, carried from v2).
