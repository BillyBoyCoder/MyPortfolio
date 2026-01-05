# William Cook - Portfolio Website

A professional portfolio website for William Cook, a Full Stack Software Engineer with 10+ years of experience specializing in the MERN stack.

## Tech Stack

- **Framework:** React 18 with Vite
- **UI Library:** Material UI (MUI)
- **Styling:** Emotion (CSS-in-JS)
- **State:** React Context API (theme management)
- **Form Service:** EmailJS (contact form)
- **Smooth Scroll:** react-scroll

## Features

- Responsive single-page design
- Dark/light theme toggle with localStorage persistence
- Smooth scroll navigation
- Interactive project showcase with modal details
- Contact form with validation
- Mobile-friendly hamburger menu
- SEO optimized with Open Graph tags

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:BillyBoyCoder/MyPortfolio.git
cd MyPortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview  # Preview the build locally
```

## Project Structure

```
src/
├── components/
│   ├── Hero/          # Landing section
│   ├── About/         # About me section
│   ├── Skills/        # Skills showcase
│   ├── Projects/      # Project cards & modal
│   ├── Experience/    # Work timeline
│   ├── Education/     # Education info
│   ├── Testimonials/  # Placeholder
│   ├── Contact/       # Contact form
│   └── common/        # Shared components
├── context/           # React Context (theme)
├── data/              # Portfolio content
├── theme/             # MUI theme config
└── assets/            # Images & icons
```

## Configuration

### EmailJS Setup

To enable the contact form, update the credentials in `src/components/Contact/ContactForm.jsx`:

```javascript
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';
```

### Adding Your Resume

Place your resume PDF in the `public/` folder as `resume.pdf`.

## Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite and configure the build
3. Set any environment variables if needed

## License

This project is for personal use.

---

Built with React + Vite + Material UI
