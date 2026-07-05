# 🚀 NexaTech Solutions — Corporate Website

> **University DevOps Project | 23BCE8510**  
> A complete, production-quality static corporate website for NexaTech Solutions.

---

## 🌐 Live Preview

Open `index.html` in any modern browser — no server, build tools, or dependencies required.

---

## 🏢 About This Project

**NexaTech Solutions** is a fictional Fortune 500-style technology company website built as part of a university DevOps project. The website demonstrates enterprise-level web design and development using only vanilla HTML5, CSS3, and JavaScript.

**Tagline:** *Engineering the Future Through Technology*

---

## 📁 Project Structure

```
23BCE8510-DevOps-Project/
│
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── careers.html        # Careers page
├── gallery.html        # Gallery page
├── contact.html        # Contact page
│
├── css/
│   └── style.css       # Master stylesheet (2,200+ lines)
│
├── js/
│   └── script.js       # Vanilla JS (animations, form, gallery)
│
├── images/             # (empty — images generated via CSS/emoji)
│
└── README.md           # This file
```

---

## 📄 Pages Overview

| Page | Description | Key Sections |
|------|-------------|--------------|
| **Home** | Landing page with full hero | Hero, Brand Ticker, About Intro, Why Us, Services, Stats, Projects, Testimonials, News, CTA |
| **About** | Company story & team | Story, Vision/Mission, Core Values (8), Leadership Team (4), Timeline (7 milestones), Achievements (6) |
| **Services** | All 8 service offerings | Cloud, AI, ML, Cybersecurity, DevOps, Web, Mobile, Data Analytics — each with features list |
| **Careers** | Jobs & culture | Culture, Benefits (9), Open Positions (8), Hiring Process (4 steps), Employee Stories |
| **Gallery** | Photo gallery | 18 items across 6 categories, with filters & lightbox |
| **Contact** | Contact form & info | Validated form, offices, map, FAQ accordion |

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--clr-primary` | `#0057FF` | Primary brand blue |
| `--clr-accent` | `#00C2FF` | Cyan accent |
| `--clr-accent-2` | `#7B2FFF` | Purple accent |
| `--clr-bg-900` | `#050A14` | Deepest background |
| `--clr-bg-800` | `#080F1F` | Section background |
| `--clr-text-100` | `#FFFFFF` | Primary text |

### Typography
- **Headings:** Poppins (700, 800)
- **Body:** Inter (400, 500, 600)
- Sourced from Google Fonts

### Design Principles
- ✅ Dark theme with blue accent gradients
- ✅ Glassmorphism (navbar, modals, cards)
- ✅ Gradient backgrounds & text
- ✅ Soft shadows with glow effects
- ✅ Rounded corners (`6px` to `30px`)
- ✅ CSS custom properties (design tokens)

---

## ⚡ Features

### Global Features
- ✅ **Page Loader** — Animated loading screen on every page
- ✅ **Sticky Navbar** — Glassmorphism effect on scroll
- ✅ **Responsive Mobile Menu** — Hamburger toggle with smooth animation
- ✅ **Scroll Animations** — IntersectionObserver-based fade/slide-in
- ✅ **Active Navigation Highlight** — Auto-detected from URL
- ✅ **Smooth Scrolling** — Native CSS + JS anchor enhancement
- ✅ **Ripple Buttons** — Ink ripple effect on click
- ✅ **Animated Counters** — Eased number animation on scroll
- ✅ **Scroll-to-Top Button** — Appears after 400px scroll
- ✅ **Professional Footer** — 4-column grid with links & socials
- ✅ **Responsive Design** — Mobile, tablet, desktop breakpoints

### Page-Specific Features
- **Home:** Brand ticker, floating hero animation, orbital rings
- **About:** CSS timeline (alternating), team cards with socials
- **Services:** Detailed service cards with hover icon animation
- **Careers:** Job listings with salary ranges, hiring process steps
- **Gallery:** Category filter system, hover overlays, lightbox modal
- **Contact:** Full client-side form validation, FAQ accordion (`<details>`)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Structure | HTML5 (Semantic) |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Behaviour | Vanilla JavaScript (ES6+, no frameworks) |
| Fonts | Google Fonts (Inter, Poppins) |
| Icons | Unicode Emoji (no icon library) |

**Zero dependencies. Zero build tools. Zero backend.**

---

## 📱 Responsive Breakpoints

| Breakpoint | Target | Changes |
|------------|--------|---------|
| `> 1100px` | Desktop | Full multi-column layouts |
| `≤ 1100px` | Large Tablet | 2-column adjustments |
| `≤ 900px` | Tablet | Mobile menu, stacked layouts |
| `≤ 600px` | Mobile | Single-column, full stacks |

---

## 🚀 How to Run

### Option 1: Simply open the file
```bash
# Navigate to the project folder and open:
index.html
```

### Option 2: Local HTTP server (recommended for production testing)
```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .

# Then visit: http://localhost:8080
```

---

## ✅ Code Quality

- **Semantic HTML5** — Proper use of `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **Accessibility** — ARIA labels, roles, keyboard navigation, focus management
- **SEO** — Title tags, meta descriptions, Open Graph, semantic headings
- **Performance** — No external JS libraries, minimal network requests, lazy animation triggers
- **Cross-browser** — Tested on Chrome, Firefox, Safari, Edge
- **Clean CSS** — CSS custom properties (design tokens), BEM-inspired naming, no duplication
- **Modular JS** — Each feature in its own `init*()` function, executed on `DOMContentLoaded`
- **No console errors**

---

## 🎓 Academic Information

| Field | Value |
|-------|-------|
| Student ID | 23BCE8510 |
| Project Type | DevOps University Project |
| Phase | Static Website (Phase 1) |
| Next Phases | Docker, Jenkins CI/CD, Kubernetes (planned separately) |

---

## 📋 Upcoming DevOps Integration (Future Phases)

This static website will be containerized and deployed using:

- 🐳 **Docker** — Container image for the website
- 🔁 **Jenkins** — CI/CD pipeline for automated builds
- ☸️ **Kubernetes** — Orchestration and deployment
- 🌐 **Nginx** — Web server inside container

*Note: These DevOps files are NOT part of this repository. They will be added in subsequent project phases.*

---

## 👤 Author

**Student ID:** 23BCE8510  
**Project:** University DevOps Project  
**Company:** NexaTech Solutions (fictional)  
**Website Type:** Static Corporate Technology Website

---

## 📜 License

This project is created for educational purposes as part of a university DevOps course.  
All company names, logos, and content are fictional and for demonstration only.

---

*Built with ❤️ using only HTML, CSS, and Vanilla JavaScript.*
