# SnapJSX Design System Specification

## Visual Aesthetic
Modern, premium developer tooling with shadcn-inspired minimalism. High-contrast, sharp typography, subtle micro-interactions, and depth through layering and shadows.

## Color Palette

### Light Mode
- Background: #FBFBFB (paper white)
- Foreground: #0A0A0A (deep black)
- Card: #FFFFFF (pure white)
- Border: #E4E4E7 (slate gray, 1px thin)
- Accent: #F4F4F5 (light gray for hover states)
- Muted Text: #71717A (neutral gray)
- Primary (Yellow): #FFD700 (electric yellow)
- Primary Foreground: #0A0A0A (black text on yellow)

### Dark Mode
- Background: #0A0A0A (deep black)
- Foreground: #FAFAFA (off-white)
- Card: #0F0F0F (charcoal)
- Border: #27272A (dark slate, 1px thin)
- Accent: #1A1A1A (dark gray for hover states)
- Muted Text: #A1A1AA (light neutral gray)
- Primary (Yellow): #FFD700 (electric yellow - same in both modes)
- Primary Foreground: #0A0A0A (black text on yellow)

## Typography

### Fonts
- **Sans-Serif**: Inter (weights: 300, 400, 500, 600, 700, 800)
  - Used for: All UI elements, headings, body text, navigation
- **Monospace**: JetBrains Mono (weights: 400, 500, 600)
  - Used for: Logo, code blocks, component metadata labels, technical labels

### Hierarchy
- **Hero Heading**: 60px (3.75rem), font-weight 800, tight tracking
- **Section Headings**: 48px (3rem), font-weight 700
- **Card Titles**: 20px (1.25rem), font-weight 600
- **Body Text**: 16px (1rem), font-weight 400
- **Metadata Labels**: 12px (0.75rem), font-weight 500, monospace, tracking-wide
- **Button Text**: 14px (0.875rem), font-weight 500

## Layout Structure
# DESIGN & UX SPECIFICATION

## 1. LAYOUT ARCHITECTURE (The Master Flow)
The website homepage (`src/app/page.tsx`) must be implemented as a vertical scroll-flow with the following sections in order:

1. **Navbar**: Sticky, 64px, backdrop-blur. Contains logo, nav links, search, theme toggle, and CTA.
2. **Hero**: Centered content, bold typography, grid-background, radial yellow highlights.
3. **Social Proof**: Monochrome logo strip of frameworks.
4. **Famous Components**: 3-column grid of interactive placeholders.
5. **Why SnapJSX?**: 3-column feature benefits grid (Velocity, Consistency, Learnability).
6. **Testimonials**: Developer-focused quote block.
7. **FAQ**: Accordion-style layout.
8. **Footer**: 4-column structure with muted utility links.

## 2. VISUAL STYLE (The Shadcn Standard)
... [Keep your Palette, Typography, and Component Anatomy sections here] ...
### Homepage (/)

#### 1. Navbar (Sticky, 64px height)
- **Left**: Monospace logo `</SnapJSX/>` with yellow angle brackets
- **Center**: Horizontal nav links (MCP, Blocks, Icons, Docs, Pricing, Examples) in muted gray, hover to foreground
- **Right**: 
  - Wide search input (256px) with search icon (left) and Cmd+K indicator (right)
  - Sun/Moon theme toggle button (rounded, subtle hover background)
  - "Get Started" button (yellow background, black text, shadow with yellow glow)
- Border bottom: 1px, transparent backdrop blur effect

#### 2. Hero Section (Centered, max-width 1152px)
- **Badge**: Pill-shaped, light gray background, border, sparkles icon + "Zero Dependencies" text
- **Main Heading**: 
  - Line 1: "Copy. Paste. Complete." (bold black)
  - Line 2: "Barebone JSX for Modern Apps." (muted gray)
- **Subheading**: 20px, muted gray, max-width 672px, centered
- **CTAs**: Two buttons side-by-side
  - Primary: Yellow background, "Browse Components" + arrow icon, yellow shadow glow
  - Secondary: Border only, "Learn More", hover gray background
- **Background Effects**:
  - Radial gradient (yellow, 10% opacity from bottom center)
  - Grid pattern overlay (3% opacity, 32px squares)
  - Two large blurred circles (yellow, 5% opacity) for depth
  - Animated SVG illustration: Abstract UI blocks, dotted connecting lines with flowing animation, glowing nodes

#### 3. Famous Components Section (3-column grid, gap 24px)
- **Section Header**: Centered, heading + description
- **Component Cards**:
  - White/dark card background with subtle border (1px)
  - Metadata label at top (12px mono, "Category · Size")
  - Preview area: Checkered background (16px squares, light/dark), centered component with frosted glass backdrop
  - Component title + description
  - "Copy Code" button (border, hover shows yellow accent)
  - **Hover State**: Lift shadow (yellow tint), border brightens, scale 1.01

#### 4. How It Works Section (3-column grid, gap 32px)
- **Section Header**: Centered
- **Process Cards**: 
  - Large circular badge (64px, yellow border, yellow/10% background, step number in yellow mono)
  - Title below (18px, semibold)
  - Description (14px, muted, centered)
  - Connecting arrows between steps (yellow gradient, 50% opacity, horizontal flow)

#### 5. Footer (4-column grid)
- Categories: Product, Resources, Community, Legal
- Links in muted gray, hover to foreground
- Bottom border separator, copyright centered below

---

### Documentation Page (/docs)

#### 1. Navbar (Same as homepage, sticky)

#### 2. Sidebar (Fixed left, 240px wide, top: 64px, height: calc(100vh - 64px))
- **Sections**: Core Components, Loaders, Notifications, Navigation
- **Section Headers**: 12px, medium weight, muted gray, with small icon
- **Dividers**: 1px border between sections (50% opacity)
- **Navigation Items**:
  - Default: Gray text, rounded, hover shows light gray background
  - Active: Yellow/10% background, yellow text, yellow border (20% opacity), medium weight

#### 3. Main Content Area (Left margin 240px, padding 32px)
- **Page Header**: 
  - Section title (48px, bold)
  - Description (18px, muted)
- **Component Grid**: 2 columns, 24px gap
- **Component Cards**:
  - Background: Card color, border 1px (50% opacity)
  - Rounded corners: 12px (xl)
  - Metadata: 12px mono, muted
  - Preview: Checkered background with border, 200px min-height, centered component on frosted backdrop
  - Code block (when toggled): Accent background (50% opacity), 1px border, max-height 256px, scrollable, 12px mono code
  - Action buttons:
    - "Copy JSX" primary button: Yellow background, black text, yellow shadow
    - "Copied!" state: Yellow/20% background, yellow text, yellow border
    - Code toggle icon: Border, hover gray, active shows yellow accent
  - **Hover**: Shadow xl with yellow tint, border brightens

---

## Component Anatomy

### Buttons
- **Primary (Yellow)**: bg-primary, text-primary-foreground, rounded-lg, shadow-sm with primary/20 shadow, hover: bg-primary/90 + shadow-md
- **Secondary**: border, rounded-lg, hover: bg-accent
- **Icon Only**: p-2, rounded-md, hover: bg-accent

### Input Fields
- Border: 1px, accent background
- Focus: 2px ring primary/50, border becomes primary
- Placeholder: Muted text
- Icons: Positioned absolute inside (left/right padding)

### Cards
- Background: Card color
- Border: 1px, border color (often 50% opacity)
- Rounded: 12px (xl for cards, lg for smaller elements)
- Hover: shadow-xl + shadow-primary/5, border brightens
- Transition: all 300ms

### Code Blocks
- Background: Accent/50%
- Border: 1px border/50%
- Font: JetBrains Mono, 12px
- Padding: 16px
- Rounded: lg

### Toast Notifications
- Fixed: top-20, right-32
- Card background with yellow border (30% opacity)
- Shadow xl with yellow/10% tint
- Pulsing dot indicator + checkmark icon
- Slide-in animation from top
- Auto-dismiss: 2 seconds

---

## Spacing System (8px grid)
- Gaps: 8px, 16px, 24px, 32px
- Padding: 16px (sm), 24px (md), 32px (lg), 48px (xl)
- Section spacing: 96px (24) vertical between major sections

## Shadows
- **sm**: subtle, for buttons
- **lg**: for card hovers
- **xl**: for elevated states, toasts
- All shadows have yellow tint (primary/5 to primary/30 opacity)

## Animations
- **Hover transitions**: 300ms all
- **Slide-in**: 300ms from top with fade
- **Pulse**: Infinite, 2s duration for loading dots
- **Spin**: Infinite for spinners
- **Bounce**: Infinite for bouncing dots
- **Flow**: Dotted lines animate stroke-dashoffset over 2-3s

## Micro-interactions
- Buttons: Hover increases shadow, slight scale on primary CTAs
- Cards: Lift on hover with yellow-tinted shadow
- Links: Color transition on hover
- Active states: Yellow accent appears
- Copy feedback: Button transforms to "Copied!" state with yellow/20% bg
- Theme toggle: Smooth icon swap

## Background Effects
- Grid overlay: 32px squares, very low opacity (3%)
- Radial gradients: Yellow at 10% from strategic positions
- Blur circles: Large (256-384px), yellow 5% opacity, blur-3xl
- Checkered pattern: 16px squares, alternating light/dark based on theme

## 5. HOMEPAGE ARCHITECTURE (Scroll Flow)

### 1. Hero Section (The Hook)
- *See previous spec for details.*

### 2. Social Proof / "Trusted By" Bar
- Subtle, monochrome logo strip (low opacity) of frameworks (Next.js, Tailwind, React, etc.) to build immediate credibility.

### 3. Famous Components (The Evidence)
- 3-column grid showcasing the most interactive "Shadcn-style" components. 
- Goal: Immediate "Wow" factor.

### 4. "Why SnapJSX?" (The Value Prop)
- 3-column feature grid using card icons:
    - **Velocity:** "Stop writing boilerplate. Focus on the interface."
    - **Consistency:** "Pixel-perfect styles, every single time."
    - **Learnability:** "Fullstack logic explained, not just hidden."

### 5. Testimonials / Quote Section
- "Developer First" quote block. 
- *Quote Example*: "SnapJSX saved me hours of styling. It’s like having a design system in my pocket." - *[Developer Name/Role]*

### 6. FAQ (The Friction Reducer)
- Accordion style. 
- Q: "Can I use this with my own Tailwind theme?" / "How do I update my components?"

### 7. Footer (The Anchor)
- 4-column structure as defined previously.