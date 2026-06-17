# Portfolio Site Blueprint — Vengatramanan S

## 1. Visual Direction

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#0B0E17` | Primary background |
| Surface | `#111624` | Cards, nav, elevated areas |
| Card | `#161D30` | Feature cards, plan cards |
| Border | `#1E2840` | Subtle dividers, card borders |
| Primary Accent | `#5B8AF0` | CTAs, links, active states |
| Secondary Accent | `#A78BFA` | Gradients, highlights |
| Success | `#34D399` | Checkmarks, positive indicators |
| Text Primary | `#E8EAF0` | Headlines, body copy |
| Text Muted | `#6B7499` | Captions, secondary labels |

### Typography
- **Headlines:** Syne (weights: 400, 600, 700, 800) — bold, modern, confident
- **Body:** Inter (weights: 300, 400, 500, 600) — clean, highly legible
- **Mono:** JetBrains Mono (weights: 400, 500) — code snippets, tech labels

### Spacing System
- Base unit: 4px
- Section padding: `py-24` (96px)
- Card padding: `p-8 md:p-10` (32–40px)
- Grid gap: `gap-8` (32px)

### Design Principles
- Flat backgrounds; depth via subtle elevation cards, not heavy shadows
- Gradients used sparingly for CTAs and badge highlights only
- All interactive elements have hover transitions (`hover:-translate-y-0.5`, `hover:shadow-lg`)
- Border-radius: `rounded-2xl` (16px) for cards, `rounded-xl` (12px) for buttons

---

## 2. Site Map & Layout Architecture

```
├── Navigation (sticky, glass-morphism)
│   ├── Logo / Name
│   ├── Links: About | Services | Pricing | Contact
│   └── CTA: "Get In Touch"
│
├── Hero Section (full-viewport, left-aligned)
│   ├── Label: "Full-Stack Developer — Available for Projects"
│   ├── H1: Primary Value Proposition
│   ├── Subheadline: 2-line supporting statement
│   ├── Dual CTA row: [View My Work] [Download Resume]
│   └── Trust row: "3+ years • Angular + .NET • 15+ projects delivered"
│
├── About Section (two-column on desktop)
│   ├── Left: Sticky section label + small intro blurb
│   ├── Right:
│   │   ├── H2: "Building reliable software that scales"
│   │   ├── Body paragraph (3–4 lines): 3yr experience, reliability focus
│   │   ├── Mini stats row (4 items):
│   │   │   ├── 3+ Years Experience
│   │   │   ├── Angular + C# / .NET
│   │   │   ├── SQL Server / MySQL
│   │   │   └── Git, Vercel & IIS
│   │   └── H3 + paragraph: "Why work with me"
│   │       └── 3 bullet points: reliability, scalable arch, full-stack ownership
│
├── Services Section (three-column card grid)
│   ├── Section header with gradient-accent label
│   ├── Intro sentence
│   └── 3 Service Cards:
│       ├── Card 1: Dynamic Web Apps (Angular)
│       │   └── Tags: Angular, TypeScript, Responsive UI, SEO
│       ├── Card 2: Scalable Backends (C# / ASP.NET Core)
│       │   └── Tags: REST APIs, Microservices, authentication, caching
│       └── Card 3: Database Optimization (SQL)
│           └── Tags: SQL Server, MySQL, query tuning, indexing
│
├── Pricing Section (two-column centered)
│   ├── Section header
│   ├── [Basic] [Advanced] toggle (future-ready, default: static)
│   ├── Two pricing cards:
│   │   ├── Basic: ₹2,999 — Landing Pages & Angular UI
│   │   └── Advanced: ₹5,999 — Full-Stack Dynamic Apps
│   └── Custom solution link at bottom
│
├── Tech Stack Strip (marquee or icon grid)
│   ├── Angular | C# | ASP.NET Core | SQL Server | MySQL | Git | GitHub | Vercel | IIS
│   └── Consistent icon treatment, muted color
│
├── Contact / CTA Section (max-width container, centered)
│   ├── H2: "Let's build something together"
│   ├── Subheadline: availability note
│   └── Primary CTA button + email display
│
└── Footer (simple, single row)
    ├── © 2026 Vengatramanan S
    ├── GitHub link
    └── LinkedIn / Twitter links
```

---

## 3. Section Content Specification

### Navigation
- Sticky top bar, backdrop-blur-md, `bg-surface/80`
- Logo: Name or initials in Syne 600
- Links: muted color, hover:text-accent transition
- Mobile: hamburger menu (out of scope for initial build, but plan for it)

### Hero Section
**Layout:** Full-viewport height, centered vertically, left-aligned text, max-width constraint.

**Copy:**
> **Label (mono, small, uppercase, text-accent):** Full-Stack Developer — Available for Projects
>
> **H1:** I build Angular & .NET web apps that are fast, scalable, and built to last.
>
> **Subhead:** With 3 years of production experience, I deliver maintainable full-stack solutions — from pixel-perfect Angular interfaces to robust ASP.NET Core backends connected to optimized SQL databases.
>
> **Primary CTA:** View My Work
> **Secondary CTA:** Download Resume
>
> **Trust bar:** 3+ years exp • Angular + C# / .NET • 15+ projects shipped

---

### About Section
**Layout:** Two columns on desktop (`lg:grid-cols-2`). Left column has section label; right column has primary content.

**Copy:**
> **H2:** Building reliable software that scales
>
> **Body:** I'm a software developer with 3 years of hands-on experience building and maintaining web applications. I specialize in the Angular → C# → SQL stack, which means I own features end-to-end without handing off between frontend and backend teams. Every component I ship is built for performance, tested for edge cases, and documented so it stays maintainable.
>
> **Stats Row:**
> - 3+ Years Experience
> - Angular + C# / .NET
> - SQL Server / MySQL
> - Git, Vercel & IIS
>
> **H3:** Why work with me
>
> **Bullet Points:**
> - **Reliability first:** I write clean, documented code and follow deployment best practices across IIS and Vercel environments.
> - **Scalable architecture:** I design backends in ASP.NET Core and schema in SQL that grow with your user base — not against it.
> - **Full-stack problem solving:** You get one developer who can own the feature from database schema to Angular UI to CI/CD pipeline.

---

### Services Section
**Layout:** Three-column card grid on desktop (`lg:grid-cols-3`), stacked on mobile.

**Card 1 — Dynamic Web Apps (Angular)**
> Angular-based interfaces built for speed and accessibility.
>
> - Reactive component architecture
> - Responsive layouts (mobile → desktop)
> - Core Web Vitals optimization
> - SEO-friendly routing & metadata

**Card 2 — Scalable Backends (C# / ASP.NET Core)**
>
> RESTful APIs and server-side logic built for traffic and growth.
>
> - RESTful API design with Swagger docs
> - JWT authentication & role-based access
> - Caching & rate-limiting strategies
> - Docker-ready, IIS & Vercel deployment

**Card 3 — Database Optimization (SQL Server / MySQL)**
>
> Schema design and query tuning that keep your app fast under load.
>
> - Relational schema design & migrations
> - Indexing & query optimization
> - Stored procedures & triggers
> - Backup & recovery planning

---

### Pricing Section
**Reuse the pricing copy and card structure from the existing `pricing-section.html`.** Integrate into the Angular app as a standalone component (`PricingComponent`).

Recommended integration pattern:
- Create `src/app/pricing/pricing.component.ts`, `.html`, `.css`, `.scss`
- Route to `/pricing` or embed inline in the home page
- The HTML/CSS from `pricing-section.html` serves as the static template; migrate classes into Angular's view encapsulation

**Plan Badges & emphasis rules:**
- Advanced card: gradient top border, subtle glow, "Most Popular" floating badge
- Basic card: clean border-only style, no badge

---

### Tech Stack Strip
**Layout:** Single row, centered, icon labels with muted text. Wrap on mobile.

**Items:** Angular, TypeScript, C#, ASP.NET Core, SQL Server, MySQL, Git, GitHub, Vercel, IIS

**Treatment:** Each item is a `inline-flex` chip with `border border-border rounded-full px-4 py-2 text-sm text-muted`. No backgrounds, airy feel.

---

### Contact Section
**Layout:** Full-width dark surface background (slightly lighter than base), centered content block.

**Copy:**
> **H2:** Let's build something together
>
> **Subhead:** I'm currently available for freelance projects and contract work. Let's discuss your requirements and timeline.
>
> **Primary CTA:** [Contact Me] → mailto link
> **Secondary:** Or reach out directly at vengatramanan.s@email.com

---

### Footer
**Layout:** Single row, centered, minimal.

- © 2026 Vengatramanan S — Built with Angular & Tailwind CSS
- GitHub | LinkedIn | Twitter links

---

## 4. Component Breakdown (Angular)

| Component | File(s) | Notes |
|-----------|---------|-------|
| `NavbarComponent` | `navbar.component.ts/html/css` | Sticky, glass nav |
| `HeroComponent` | `hero.component.ts/html/css` | Full-viewport hero |
| `AboutComponent` | `about.component.ts/html/css` | Two-column layout + stats |
| `ServicesComponent` | `services.component.ts/html/css` | 3-column card grid |
| `PricingComponent` | `pricing.component.ts/html/css` | 2-column pricing |
| `TechStackComponent` | `tech-stack.component.ts/html/css` | Icon/chip strip |
| `ContactComponent` | `contact.component.ts/html/css` | CTA block |
| `FooterComponent` | `footer.component.ts/html/css` | Simple footer |

## 5. Implementation Notes

1. **Typography setup:** Add Google Fonts link in `index.html` (Inter, Syne, JetBrains Mono).
2. **Tailwind:** Use CDN for prototype (`tailwind.config` inline). For production, install `@tailwindcss/postcss` and move config to `tailwind.config.ts`.
3. **Responsive breakpoints:** `md:` (768px) for card adjustments; `lg:` (1024px) for multi-column grids.
4. **Accessibility:** All CTAs are semantic `<a>` or `<button>` elements; color contrast on text-muted is ~4.5:1 against background.
5. **Performance:** Lazy-load non-critical sections where applicable; keep above-the-fold CSS inline.
