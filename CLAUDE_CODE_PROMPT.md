# Claude Code Agent Prompt: William Cook Portfolio Build

## Project Context

You are building a professional software engineering portfolio website for **William Cook**, a Full Stack Software Engineer with 10+ years of experience specializing in the MERN stack. This portfolio will be used to attract recruiters and hiring managers for full-time employment opportunities.

---

## Critical Documentation

Before writing ANY code, you MUST read and internalize these reference documents:

1. **Technical Specification**: `PORTFOLIO_SPEC.md`
   - Contains all data structures, project information, skills inventory
   - Has pre-written data files ready to use
   - Includes theme configuration and color palettes
   - Lists all required sections and their priorities

2. **Master Document**: `William_Cook_Portfolio_Master_Document_v1.1.docx`
   - Contains comprehensive project requirements
   - Includes design specifications and visual style guidelines
   - Has detailed project descriptions with impacts and tech stacks
   - Contains the elevator pitch and unique value propositions

**Read these documents completely before proceeding. Do not assume or invent information—use only what is specified in the documentation.**

---

## Repository Information

| Item | Value |
|------|-------|
| **Repository** | https://github.com/BillyBoyCoder/MyPortfolio |
| **Clone (SSH)** | `git@github.com:BillyBoyCoder/MyPortfolio.git` |
| **Push Method** | SSH (preferred) |

---

## Technology Stack (Mandatory)

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | React 18+ | Use functional components with hooks |
| Build Tool | Vite | Fast development and optimized builds |
| UI Library | Material UI (MUI) | Touch-friendly, responsive components |
| State | React Context API | For theme (dark/light) toggle |
| Styling | MUI + Emotion | CSS-in-JS approach |
| Form Service | EmailJS or Formspree | No backend needed |
| Hosting | Vercel | Auto-deploy from GitHub |

**Do NOT use:**
- Redux (overkill for this project)
- React Router (single-page scrolling site)
- Any backend/Express.js (use serverless form service)
- Tailwind CSS (use MUI instead)

---

## Build Phases

Execute these phases sequentially. Complete each phase fully before moving to the next. Commit after each phase.

### Phase 1: Project Initialization

```bash
# Clone repository
git clone git@github.com:BillyBoyCoder/MyPortfolio.git
cd MyPortfolio

# Initialize Vite + React
npm create vite@latest . -- --template react

# Install core dependencies
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

# Install additional dependencies
npm install @emailjs/browser    # Contact form
npm install react-scroll        # Smooth scrolling navigation

# Verify installation
npm run dev
```

**Commit**: `feat: initialize Vite + React project with MUI`

### Phase 2: Project Structure

Create the following directory structure exactly as specified:

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── index.js
│   ├── About/
│   │   ├── About.jsx
│   │   └── index.js
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   ├── SkillCard.jsx
│   │   └── index.js
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   └── index.js
│   ├── Experience/
│   │   ├── Experience.jsx
│   │   ├── Timeline.jsx
│   │   └── index.js
│   ├── Education/
│   │   ├── Education.jsx
│   │   └── index.js
│   ├── Testimonials/
│   │   ├── Testimonials.jsx
│   │   └── index.js
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   └── index.js
│   └── common/
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       ├── ThemeToggle.jsx
│       ├── SectionTitle.jsx
│       └── ScrollToTop.jsx
├── context/
│   └── ThemeContext.jsx
├── data/
│   ├── personalInfo.js
│   ├── projects.js
│   ├── skills.js
│   └── experience.js
├── theme/
│   ├── lightTheme.js
│   ├── darkTheme.js
│   └── index.js
├── assets/
│   ├── images/
│   └── icons/
├── App.jsx
├── main.jsx
└── index.css
```

**Commit**: `feat: establish project structure`

### Phase 3: Theme & Context Setup

1. Create ThemeContext with dark/light mode toggle
2. Implement MUI themes using colors from PORTFOLIO_SPEC.md:

**Light Mode:**
- Background: #FFFFFF / #F7FAFC
- Primary Text: #1A202C
- Primary Accent: #3182CE
- Secondary Text: #718096

**Dark Mode:**
- Background: #171923 / #1A202C
- Primary Text: #F7FAFC
- Primary Accent: #63B3ED
- Secondary Text: #A0AEC0

3. Wrap App in ThemeProvider and custom ThemeContext
4. Persist theme preference in localStorage

**Commit**: `feat: implement dark/light theme with MUI`

### Phase 4: Data Files

Create all data files using the EXACT content from PORTFOLIO_SPEC.md:
- `personalInfo.js` - Name, title, email, elevator pitch, unique value
- `projects.js` - All 6 projects with complete details
- `skills.js` - Categorized skills with proficiency levels
- `experience.js` - Work history and education

**Do not modify or embellish the content—use exactly what's in the spec.**

**Commit**: `feat: add portfolio data files`

### Phase 5: Common Components

Build reusable components:

1. **Navbar.jsx**
   - Fixed position, transparent → solid on scroll
   - Navigation links with smooth scroll
   - Theme toggle button
   - Resume download button
   - Mobile hamburger menu

2. **Footer.jsx**
   - Social links (GitHub, LinkedIn)
   - Copyright notice
   - Back to top button

3. **SectionTitle.jsx**
   - Consistent heading style for all sections
   - Subtle underline accent

4. **ThemeToggle.jsx**
   - Sun/Moon icon toggle
   - Smooth transition animation

5. **ScrollToTop.jsx**
   - Floating button, appears after scrolling

**Commit**: `feat: build common/shared components`

### Phase 6: Hero Section

Requirements:
- Full viewport height
- Professional headshot (placeholder until provided)
- Name: "William Cook"
- Title: "Full Stack Software Engineer"
- Brief tagline
- CTA buttons: "View Projects" and "Contact Me"
- Social links (GitHub, LinkedIn)
- Subtle animation on load (fade in)

**Commit**: `feat: implement Hero section`

### Phase 7: About Section

Requirements:
- Display elevator pitch from personalInfo.js
- List unique value propositions
- Professional, engaging layout
- Optional: subtle background pattern or gradient

**Commit**: `feat: implement About section`

### Phase 8: Skills Section

Requirements:
- Categorized skill display (Languages, Frontend, Backend, Databases, Cloud, Tools)
- Visual proficiency indicators (Intermediate/Advanced)
- Technology icons where available
- Responsive grid layout
- Consider using MUI Chip or Card components

**Commit**: `feat: implement Skills section`

### Phase 9: Projects Section

Requirements:
- Featured projects prominently displayed (marked with `featured: true`)
- Project cards showing:
  - Project title
  - Category badge (Professional/MERN/JavaScript/HTML-CSS)
  - Short description
  - Tech stack chips
  - Links (Live Demo, GitHub) where available
- Click to expand modal with full details:
  - Full description
  - Challenge/Solution/Impact
  - Role
  - All tech stack items
- Filter by category (optional enhancement)

**Priority order for display:**
1. Automated QA Case Generation System (Professional)
2. Customer Operations Dashboard (Professional)
3. WTWR - What To Wear (MERN)
4. Spots (JavaScript)
5. Coffee Shop Landing Page (HTML/CSS)
6. Triple Peaks Library (HTML/CSS)

**Commit**: `feat: implement Projects section with modal details`

### Phase 10: Experience & Education

Requirements:
- Visual timeline component
- Work experience entry showing 10+ years
- Key achievements as bullet points
- Education section with TripleTen bootcamp
- Clean, professional layout

**Commit**: `feat: implement Experience and Education sections`

### Phase 11: Testimonials Section

Requirements:
- Placeholder section (content pending)
- Design the component structure
- Use placeholder text: "Testimonials coming soon"
- Easy to populate later

**Commit**: `feat: implement Testimonials placeholder section`

### Phase 12: Contact Section

Requirements:
- Contact form with fields: Name, Email, Message
- Form validation (required fields, email format)
- Integration with EmailJS or Formspree
- Loading state during submission
- Success/error feedback messages
- Alternative contact methods (email link, LinkedIn)
- Resume download button

**EmailJS Integration:**
```javascript
import emailjs from '@emailjs/browser';

// User will need to add their own keys
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

**Commit**: `feat: implement Contact section with form`

### Phase 13: App Assembly & Navigation

Requirements:
- Assemble all sections in App.jsx in correct order
- Implement smooth scroll navigation
- Add section IDs for navigation targeting
- Ensure proper spacing between sections
- Test responsive behavior at all breakpoints

**Section Order:**
1. Hero
2. About
3. Skills
4. Projects
5. Experience
6. Education
7. Testimonials
8. Contact

**Commit**: `feat: assemble complete single-page application`

### Phase 14: Responsive Design & Polish

Requirements:
- Test and fix all breakpoints:
  - Mobile: 320px - 480px
  - Tablet: 481px - 768px
  - Desktop: 769px+
- Ensure touch-friendly interactions (48px minimum touch targets)
- Verify dark/light mode consistency
- Add subtle hover effects and transitions
- Optimize images (when added)
- Check accessibility (color contrast, focus states)

**Commit**: `feat: responsive design and polish`

### Phase 15: SEO & Meta Tags

Requirements:
- Update index.html with:
  - Title: "William Cook | Full Stack Software Engineer"
  - Meta description
  - Open Graph tags for social sharing
  - Favicon (placeholder)
- Add semantic HTML where applicable

**Commit**: `feat: add SEO meta tags and favicon`

### Phase 16: Final Testing & Deployment Prep

Requirements:
- Run production build: `npm run build`
- Test production build locally: `npm run preview`
- Verify all functionality works
- Check console for errors
- Create/update README.md with:
  - Project description
  - Tech stack
  - Setup instructions
  - Deployment info

**Commit**: `feat: production ready - final testing complete`

---

## Design Guidelines

### Visual Style
- **Aesthetic**: Minimalist and Clean
- **Animations**: Subtle and Professional (no flashy effects)
- **Typography**: Inter or Roboto font family
- **Spacing**: Generous whitespace, breathable layouts

### Do's
- Use consistent spacing (MUI's spacing system)
- Maintain visual hierarchy
- Keep interactions smooth and responsive
- Use the defined color palette strictly
- Make CTAs prominent and clear

### Don'ts
- No excessive animations or parallax effects
- No bright/neon colors outside the palette
- No cluttered layouts
- No auto-playing media
- No generic stock photos

---

## Quality Checklist

Before considering any phase complete, verify:

- [ ] Code follows React best practices (hooks, functional components)
- [ ] Components are properly modularized
- [ ] No console errors or warnings
- [ ] Responsive at all breakpoints
- [ ] Dark/light mode works correctly
- [ ] All data comes from data files (not hardcoded in components)
- [ ] Accessibility basics covered (alt text, ARIA labels where needed)
- [ ] Committed with meaningful commit message

---

## Error Handling

If you encounter issues:

1. **Build errors**: Check import paths, missing dependencies
2. **MUI issues**: Ensure ThemeProvider wraps the app
3. **Styling conflicts**: Use MUI's sx prop or styled() consistently
4. **Form not sending**: Verify EmailJS credentials (user must set up account)

---

## Asset Placeholders

Until real assets are provided, use:

- **Headshot**: MUI Avatar with initials "WC" or placeholder image
- **Logo**: Text-based logo "WC" styled nicely
- **Project images**: Gradient placeholders or screenshots from live URLs
- **Resume**: Placeholder button (user will add PDF later)

---

## Success Criteria

The portfolio is complete when:

1. ✅ All 10 sections are implemented and functional
2. ✅ Dark/light theme toggle works with persistence
3. ✅ Navigation smoothly scrolls to sections
4. ✅ All 6 projects display with correct information
5. ✅ Contact form submits successfully
6. ✅ Fully responsive (mobile, tablet, desktop)
7. ✅ Production build succeeds without errors
8. ✅ Code is clean, organized, and well-commented
9. ✅ README.md is complete
10. ✅ Ready for Vercel deployment

---

## Final Notes

- **Commit frequently** with descriptive messages
- **Push to GitHub** after each major phase
- **Ask for clarification** if any requirement is unclear
- **Reference the documentation** whenever unsure about content or design
- **Prioritize functionality** over perfection—we can iterate

Begin by cloning the repository and reading the specification documents. Good luck!

---

*This prompt was generated for the William Cook Portfolio project on January 5, 2026.*
