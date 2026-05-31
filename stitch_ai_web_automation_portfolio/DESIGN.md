---
name: Cyber-Minimalist Professional
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#3cddc7'
  on-tertiary: '#003731'
  tertiary-container: '#00a392'
  on-tertiary-container: '#00302a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#62fae3'
  tertiary-fixed-dim: '#3cddc7'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005047'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  button-text:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style
The brand personality is rooted in precision, innovation, and technical mastery. This design system targets high-end enterprise clients and tech startups looking for cutting-edge automation and AI integration. 

The aesthetic follows a **Cyber-Minimalist** approach: a synthesis of high-performance developer tools and luxury tech interfaces. It utilizes a deep, immersive dark mode to reduce eye strain and emphasize vibrant, "light-emitting" interactive elements. The style leverages subtle glassmorphism to create a sense of depth and hardware-inspired precision, while maintaining a rigorous, grid-based structure that reflects the developer's focus on structured data and clean code.

## Colors
The palette is built upon a foundation of deep space blacks and charcoals to provide maximum contrast for functional highlights. 

- **Primary (AI Blue):** Used for primary actions, active states, and core branding. 
- **Secondary (Electric Purple):** Used for accent details, specialized AI features, and gradient stops.
- **Tertiary (Cyan):** Reserved for success states, code syntax highlighting, and secondary data visualizations.
- **Surface Strategy:** Backgrounds utilize the deepest hex (#020617), while card surfaces and containers use the Neutral (#0f172a) to create a tiered visual hierarchy. Interactive borders use a slightly lighter slate to define boundaries without heavy visual weight.

## Typography
The typography system balances the geometric authority of **Montserrat** for headings with the high-utility legibility of **Inter** for long-form content. 

To reinforce the developer persona, **JetBrains Mono** is utilized for labels, metadata, and technical snippets. This adds a "terminal" aesthetic that signals technical expertise. Headings should utilize tight letter-spacing and heavy weights to command attention, while body text remains spacious to ensure readability against the dark background.

## Layout & Spacing
This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

The layout logic is governed by a 4px base unit, ensuring all components align to a consistent rhythmic scale. Layouts should utilize "Subtle Grid Patterns"—a faint 24px or 48px square background mesh (#1e293b at 0.1 opacity)—to evoke the feel of a blueprint or technical schematic. Large sections should be separated by generous vertical whitespace (80px - 120px) to allow the sophisticated elements to "breathe" and maintain a premium feel.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

1.  **Glass Layers:** Use backdrop-blur (12px to 20px) on navigation bars and floating modals. Backgrounds should be semi-transparent (#0f172a at 0.7 opacity) with a 1px solid border (#ffffff at 0.1 opacity) to simulate a glass edge.
2.  **Glow Effects:** Primary interactive elements (like active buttons or AI status indicators) use a soft, colored outer glow (drop-shadow) using the primary blue color at low opacity (0.3) to simulate an emissive screen effect.
3.  **Z-Axis:** Higher elevation levels are indicated by lighter surface colors and increased backdrop-blur, never by traditional heavy black shadows.

## Shapes
The shape language is "Soft-Tech." Elements use a consistent **0.25rem (4px)** corner radius to maintain a precise, engineered feel. 

While the general UI is rectangular and structured, specific "AI" or "Automation" elements may use pill-shaped chips for status indicators to provide a visual contrast against the rigid grid. Avoid large, bubbly radii as they detract from the professional, sophisticated tone.

## Components
- **Buttons:** Primary buttons use a solid gradient (Primary Blue to Secondary Purple) with white text. Secondary buttons are "Ghost" style with a 1px border and a subtle hover-state glow.
- **Sleek Cards:** Project cards feature a 1px border (#1e293b) and a very subtle hover lift effect. The background should be a solid surface (#0f172a), but the header of the card can utilize a glassmorphic blur.
- **Chips:** Technical tags (e.g., "Python," "React," "OpenAI") should use JetBrains Mono in small caps with a subtle background tint of the primary color.
- **Input Fields:** Dark backgrounds with a 1px bottom border that glows (Transitions to Primary Blue) when focused.
- **Code Blocks:** Custom styled containers with a "copy" button, using the tertiary cyan for syntax highlighting.
- **AI Pulse:** A custom component—a small, breathing animated circle—used next to "Live" or "Active" automation services to indicate the system is "thinking."