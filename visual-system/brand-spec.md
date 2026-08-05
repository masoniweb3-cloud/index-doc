# Signa Index · Visual Identity Specification

> Source: current Signa frontend implementation
> Asset completeness: sufficient for documentation diagrams

## Core assets

### Logo

- Primary dark-background wordmark: `assets/signa-logo-white.png`
- Use: VIS board, documentation identity, image reference
- Never stretch, recolor, outline, or redraw the wordmark.

### Current product UI

- Mobile trading surface: `assets/current-ui.png`
- Use: visual source of truth for palette, density, typography hierarchy, borders, states, and transactional emphasis

## Color system

| Role | Token | Value |
|---|---|---|
| Canvas | `--signa-canvas` | `#04101F` |
| Sidebar / deep surface | `--signa-sidebar` | `#061426` |
| Primary surface | `--signa-surface` | `#08182A` |
| Raised surface | `--signa-surface-raised` | `#0B1C30` |
| Soft surface | `--signa-surface-soft` | `#0E2035` |
| Border | `--signa-line` | `#24364E` |
| Strong border | `--signa-line-strong` | `#334862` |
| Primary text | `--signa-text` | `#F5F7FB` |
| Warm display text | `--signa-display` | `#F4EEE5` |
| Secondary text | `--signa-text-soft` | `#C3CAD6` |
| Muted text | `--signa-muted` | `#8E9BB0` |
| State / data accent | `--signa-accent` | `#43E6A6` |
| Positive | `--signa-green` | `#3ADF91` |
| Negative / warning state | `--signa-red` | `#FF7585` |
| Transaction action | `--signa-action` | `#E1AD65` |
| Operational warning | `--signa-warning` | `#F4B433` |

## Typography

- Display and conceptual titles: Georgia, regular 500, tight tracking, warm white
- Body and labels: Geist / modern neutral sans, medium weight
- Tickers, formulas, weights, timestamps: Geist Mono / compact monospaced numerals
- Chinese diagrams: use a clear modern CJK sans for body; reserve serif only for short high-level titles where glyph quality is reliable

## Diagram grammar

- Canvas: solid `#04101F`; never use generic white infographic backgrounds.
- Reading direction: left-to-right for processes; top-to-bottom only for hierarchies and calculations.
- Nodes: restrained rectangular modules with 1px `#24364E` border and 8–12px visual corner radius.
- Connectors: thin graphite lines; use emerald only for active state and amber only for decisions or transaction-like transformation.
- Numbers: large monospaced figures; probabilities and weights remain visually distinct from labels.
- Icons: only when they encode a real role; one icon per major stage at most.
- Conclusion: one concise takeaway line, not decorative copy.

## Image rules

- Each image must explain one mechanism that would otherwise require several paragraphs.
- No abstract world globes, particles, coins, candlesticks, robots, generic AI brains, or ornamental signal fields.
- No invented market values, dates, products, or status labels.
- Use exact supplied labels only; no filler text and no watermark.
- Prefer landscape 3:2 or 16:9 for inline documentation.

## Multilingual rule

- The first release uses Simplified Chinese text.
- English versions must be regenerated or deterministically typeset later; do not reuse Chinese raster text under English pages.
