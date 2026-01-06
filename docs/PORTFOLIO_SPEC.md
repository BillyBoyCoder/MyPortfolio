# William Cook Portfolio - Technical Specification

> **Version:** 1.3  
> **Last Updated:** January 6, 2026  
> **Status:** Brainstorming Complete - Ready for Development  
> **Contact Form:** EmailJS Integration Confirmed  
> **Experience Section:** Updated to match resume format

---

## Quick Reference

| Item | Value |
|------|-------|
| **Name** | William Cook |
| **Title** | Full Stack Software Engineer |
| **Email** | bcookemail@gmail.com |
| **GitHub Profile** | https://github.com/BillyBoyCoder/ |
| **LinkedIn** | https://www.linkedin.com/in/william-cook-5a656537b |
| **Location** | Tennessee, USA |

---

## Portfolio Repository

| Item | Value |
|------|-------|
| **Repository URL** | https://github.com/BillyBoyCoder/MyPortfolio |
| **SSH Clone** | `git@github.com:BillyBoyCoder/MyPortfolio.git` |
| **HTTPS Clone** | `https://github.com/BillyBoyCoder/MyPortfolio.git` |
| **Preferred Method** | **SSH** |

### Initial Setup Commands

```bash
# Clone via SSH (preferred)
git clone git@github.com:BillyBoyCoder/MyPortfolio.git
cd MyPortfolio

# Or if starting fresh in existing directory
git init
git remote add origin git@github.com:BillyBoyCoder/MyPortfolio.git

# Verify remote
git remote -v
```

---

## Technology Stack

### Frontend
- **Framework:** React 18+
- **Build Tool:** Vite
- **UI Library:** Material UI (MUI)
- **State Management:** React Context API
- **Styling:** MUI + CSS-in-JS

### Backend
- **Required:** NO - Use serverless form service
- **Contact Form:** EmailJS or Formspree (email delivery only)

### Hosting
- **Frontend:** Vercel (free tier)
- **Backend:** Not required

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.styles.js
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.styles.js
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── Skills.styles.js
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   └── Projects.styles.js
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   ├── Timeline.jsx
│   │   │   └── Experience.styles.js
│   │   ├── Education/
│   │   │   └── Education.jsx
│   │   ├── Testimonials/
│   │   │   └── Testimonials.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── Contact.styles.js
│   │   └── common/
│   │       ├── Navbar.jsx
│   │       ├── Footer.jsx
│   │       ├── ThemeToggle.jsx
│   │       ├── SectionTitle.jsx
│   │       └── ScrollToTop.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── personalInfo.js
│   ├── theme/
│   │   ├── lightTheme.js
│   │   ├── darkTheme.js
│   │   └── index.js
│   ├── assets/
│   │   ├── images/
│   │   │   ├── headshot.jpg
│   │   │   ├── logo.svg
│   │   │   └── projects/
│   │   └── icons/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## Data Files Content

### src/data/personalInfo.js

```javascript
export const personalInfo = {
  name: "William Cook",
  title: "Full Stack Software Engineer",
  email: "bcookemail@gmail.com",
  location: "Tennessee, USA",
  github: "https://github.com/BillyBoyCoder/",
  linkedin: "https://www.linkedin.com/in/william-cook-5a656537b",
  
  elevatorPitch: `Full Stack Software Engineer with 10+ years of professional experience, 
    now specializing in the MERN stack. I combine deep industry knowledge with modern 
    development practices, having delivered enterprise-scale automation solutions that 
    transformed hours of manual work into minutes. Currently completing TripleTen's 
    intensive Software Engineering program to formalize my React, Node.js, and MongoDB 
    expertise while seeking opportunities to bring battle-tested problem-solving skills 
    to innovative teams.`,
  
  uniqueValue: [
    "10+ years delivering production software in enterprise environments",
    "Self-directed major projects outside job scope that addressed critical company needs",
    "Experience across frontend, backend, cloud services, and database technologies",
    "Demonstrated ability to reduce operational time from hours to minutes",
    "TripleTen bootcamp provides current best practices in React ecosystem"
  ]
};
```

### src/data/projects.js

```javascript
export const projects = [
  {
    id: 1,
    title: "Automated QA Case Generation System",
    category: "professional",
    shortDescription: "AWS Lambda-powered automation reducing case creation from hours to minutes",
    fullDescription: `Quality Assurance analysts spent several hours manually creating ~800 FogBugz 
      cases for software updates, managing data across Google Sheets and the FogBugz web interface. 
      Developed an AWS Lambda-powered automation system triggered via a custom web interface. The 
      solution integrated Google Sheets API and FogBugz API to automatically read spreadsheet entries, 
      determine customer hosting status, create appropriate cases, and assign them to the correct personnel.`,
    impact: "Reduced case creation time from several hours to under 5 minutes",
    techStack: ["React", "Node.js", "AWS Lambda", "Google Sheets API", "FogBugz API", "SQL Server", "Bootstrap"],
    role: "Sole Developer",
    challenges: "Discovered existing tech stack couldn't update Google Sheets directly. Researched Google APIs and implemented AWS Lambda solution to bridge the gap.",
    liveUrl: null,
    githubUrl: null,
    images: [], // Architecture diagram needed
    featured: true
  },
  {
    id: 2,
    title: "Customer Operations Dashboard",
    category: "professional",
    shortDescription: "Real-time dashboard reducing issue identification from hours to seconds",
    fullDescription: `Support staff lacked visibility into customer system health across hosted and 
      non-hosted POS installations, requiring manual SQL queries in SSMS to diagnose issues. Built 
      a full-stack web dashboard using React (frontend), W Language (API layer), and SQL Server 
      (backend). The dashboard displays real-time customer analytics including disk space, database 
      health, and software status.`,
    impact: "Reduced issue identification time from potentially hours to seconds. Currently in active production use.",
    techStack: ["React", "WLanguage", "SQL Server", "REST API"],
    role: "Sole Developer",
    challenges: "Designing a real-time monitoring system that aggregates data from multiple customer environments.",
    liveUrl: null,
    githubUrl: null,
    images: [], // Mockup/diagram needed
    featured: true
  },
  {
    id: 3,
    title: "WTWR (What To Wear?)",
    category: "mern",
    shortDescription: "Full-stack weather-based clothing recommendation app",
    fullDescription: `Full-stack web application that recommends clothing based on current weather 
      conditions. Users can manage their wardrobe, create accounts, and receive personalized suggestions. 
      Features include real-time weather integration, JWT authentication, full CRUD operations for 
      clothing items, smart filtering, social features (like/unlike), and temperature unit toggle.`,
    impact: "Complete MERN stack application demonstrating modern React patterns and Express.js backend",
    techStack: ["React 18", "React Router 6", "Vite", "Express.js", "Node.js", "MongoDB Atlas", "JWT", "OpenWeatherMap API"],
    role: "Full Stack Developer",
    challenges: "Implementing secure authentication flow, real-time weather integration, and responsive design.",
    liveUrl: "https://se-project-react-nine.vercel.app/",
    githubUrl: "https://github.com/BillyBoyCoder/se_project_react",
    images: [],
    featured: true,
    deployment: {
      frontend: "Vercel",
      backend: "Google Cloud VM + PM2"
    }
  },
  {
    id: 4,
    title: "Spots - Social Photo Sharing",
    category: "javascript",
    shortDescription: "Responsive social media application for location-based photo sharing",
    fullDescription: `Responsive social media application for sharing location-based photos with 
      interactive features. Demonstrates DOM manipulation, event handling, and responsive design principles.`,
    impact: "Showcases JavaScript proficiency and responsive design skills",
    techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"],
    role: "Developer",
    liveUrl: null,
    githubUrl: "https://github.com/BillyBoyCoder/se_project_spots",
    images: [],
    featured: false
  },
  {
    id: 5,
    title: "Coffee Shop Landing Page",
    category: "htmlcss",
    shortDescription: "Modern responsive coffee shop landing page with BEM methodology",
    fullDescription: `Modern, responsive coffee shop landing page for Triple Peaks Library featuring 
      smooth scrolling navigation, embedded YouTube tutorials, interactive table reservation form, 
      organized menu display, and mobile-first responsive design using BEM methodology.`,
    impact: "Demonstrates HTML5/CSS3 mastery and modern layout techniques",
    techStack: ["HTML5", "CSS3", "Google Fonts", "BEM Methodology"],
    role: "Developer",
    liveUrl: null,
    githubUrl: "https://github.com/BillyBoyCoder/se_project_coffeeshop-ft",
    images: [],
    featured: false
  },
  {
    id: 6,
    title: "Triple Peaks Library",
    category: "htmlcss",
    shortDescription: "Library webpage demonstrating foundational web development",
    fullDescription: `First project in TripleTen's Software Engineering program. Library webpage 
      demonstrating semantic HTML5, Flexbox, CSS positioning, and z-index layering.`,
    impact: "Foundation project showcasing HTML/CSS fundamentals",
    techStack: ["HTML5", "CSS3", "Flexbox"],
    role: "Developer",
    liveUrl: null,
    githubUrl: "https://github.com/BillyBoyCoder/se_project_library",
    images: [],
    featured: false
  }
];
```

### src/data/skills.js

```javascript
export const skills = {
  languages: [
    { name: "JavaScript / ES6+", level: "Intermediate", icon: "javascript" },
    { name: "SQL", level: "Advanced", icon: "database" },
    { name: "WLanguage (PCSoft)", level: "Advanced", icon: "code" }
  ],
  frontend: [
    { name: "React", level: "Intermediate", icon: "react" },
    { name: "HTML5", level: "Advanced", icon: "html" },
    { name: "CSS3 / BEM", level: "Advanced", icon: "css" },
    { name: "Material UI", level: "Intermediate", icon: "materialui" },
    { name: "Vite", level: "Intermediate", icon: "vite" },
    { name: "Bootstrap", level: "Intermediate", icon: "bootstrap" }
  ],
  backend: [
    { name: "Node.js", level: "Intermediate", icon: "nodejs" },
    { name: "Express.js", level: "Intermediate", icon: "express" },
    { name: "REST API Design", level: "Intermediate", icon: "api" },
    { name: "JWT Authentication", level: "Intermediate", icon: "lock" }
  ],
  databases: [
    { name: "SQL Server", level: "Advanced", icon: "sqlserver" },
    { name: "MongoDB / Atlas", level: "Intermediate", icon: "mongodb" },
    { name: "Mongoose ODM", level: "Intermediate", icon: "mongoose" }
  ],
  cloud: [
    { name: "AWS (Lambda)", level: "Intermediate", icon: "aws" },
    { name: "Google Cloud", level: "Intermediate", icon: "gcp" },
    { name: "Vercel", level: "Intermediate", icon: "vercel" },
    { name: "Docker", level: "Intermediate", icon: "docker" },
    { name: "PM2", level: "Intermediate", icon: "pm2" }
  ],
  tools: [
    { name: "Git / GitHub", level: "Intermediate", icon: "git" },
    { name: "Postman", level: "Intermediate", icon: "postman" },
    { name: "Responsive Design", level: "Advanced", icon: "responsive" },
    { name: "API Integration", level: "Advanced", icon: "api" }
  ]
};
```

### src/data/experience.js

```javascript
export const experience = [
  {
    id: 1,
    title: "Software Engineer II",
    company: "TCS, a LeadVenture Company",
    period: "January 2017 – May 2023",
    description: "Enterprise software development with focus on automation and operational efficiency",
    responsibilities: [
      "Engineered and maintained a comprehensive desktop Point-of-Sale (POS) application using W Language (WinDev) and Object-Oriented Programming (OOP) principles.",
      "Developed and integrated custom RESTful APIs to facilitate seamless data exchange between internal software and third-party services.",
      "Designed and deployed a web-based operational support dashboard using React, empowering staff to proactively detect customer issues and perform immediate remediation directly via the interface.",
      "Architected and optimized SQL Server databases, authoring complex stored procedures and queries to ensure high performance and data integrity.",
      "Led Agile development workflows using Jira for project management and version control, while providing mentorship and code reviews for junior developers."
    ],
    keyProjects: [
      {
        name: "Automated QA Case Generation System",
        challenge: "Quality Assurance analysts spent several hours manually creating ~800 FogBugz cases for software updates, managing data across Google Sheets and the FogBugz web interface.",
        solution: "Developed an AWS Lambda-powered automation system triggered via a custom web interface. The solution integrated Google Sheets API and FogBugz API to automatically read spreadsheet entries, determine customer hosting status, create appropriate cases, and assign them to the correct personnel.",
        impact: "Reduced case creation time from several hours to under 5 minutes. Enabled batch processing of 1-100+ cases with a single button click, dramatically improving QA workflow efficiency."
      },
      {
        name: "Customer Operations Dashboard",
        challenge: "Support staff lacked visibility into customer system health across hosted and non-hosted POS installations, requiring manual SQL queries in SSMS to diagnose issues.",
        solution: "Built a full-stack web dashboard using React (frontend), W Language (API layer), and SQL Server (backend). The dashboard displays real-time customer analytics including disk space, database health, and software status.",
        impact: "Reduced issue identification time from potentially hours to seconds. The dashboard remains in active production use, enabling proactive customer support and significantly reducing customer frustration."
      }
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "TripleTen",
    degree: "Software Engineering Boot Camp",
    period: "Expected January 2026",
    focus: "Intensive full-stack program focusing on MERN stack (MongoDB, Express.js, React, Node.js) development",
    status: "Completing"
  },
  {
    id: 2,
    institution: "Motlow State Community College",
    degree: "General Studies",
    period: "1995",
    focus: "",
    status: "Completed"
  }
];
```

---

## Theme Configuration

### src/theme/lightTheme.js

```javascript
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3182CE',
      dark: '#2c5282',
      light: '#63B3ED'
    },
    secondary: {
      main: '#718096'
    },
    background: {
      default: '#F7FAFC',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#1A202C',
      secondary: '#718096'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 600
    }
  }
});
```

### src/theme/darkTheme.js

```javascript
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#63B3ED',
      dark: '#3182CE',
      light: '#90CDF4'
    },
    secondary: {
      main: '#A0AEC0'
    },
    background: {
      default: '#171923',
      paper: '#1A202C'
    },
    text: {
      primary: '#F7FAFC',
      secondary: '#A0AEC0'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 600
    }
  }
});
```

---

## Sections to Build

| Order | Section | Priority | Notes |
|-------|---------|----------|-------|
| 1 | Hero | High | Name, title, headshot, social links |
| 2 | About | High | Elevator pitch, unique value |
| 3 | Skills | High | Categorized skill cards |
| 4 | Projects | High | 6 projects, featured flag |
| 5 | Experience | Medium | Timeline component |
| 6 | Education | Medium | TripleTen info |
| 7 | Certifications | Low | Empty placeholder for now |
| 8 | Testimonials | Low | Pending content |
| 9 | Contact | High | EmailJS/Formspree form |
| 10 | Resume Download | High | PDF in navbar/contact |

---

## Design Requirements

| Aspect | Requirement |
|--------|-------------|
| Style | Minimalist, Clean |
| Animations | Subtle, Professional |
| Color Mode | Dark/Light Toggle |
| Layout | Single-page scrolling |
| Navigation | Smooth scroll to sections |
| Responsive | Mobile-first approach |

---

## Contact Form Integration - EmailJS

### Account Information
- **Provider:** EmailJS (https://dashboard.emailjs.com)
- **Account Status:** ✅ Created
- **Free Tier:** 200 emails/month
- **Package:** `@emailjs/browser`

### EmailJS Setup Steps (Complete These in Dashboard)

#### Step 1: Add Email Service
1. Go to **Email Services** in sidebar
2. Click **"Add New Service"**
3. Select **Gmail** (or your preferred provider)
4. Connect your Gmail account (bcookemail@gmail.com)
5. **Save the Service ID** (e.g., `service_xxxxxxx`)

#### Step 2: Create Email Template
1. Go to **Email Templates** in sidebar
2. Click **"Create New Template"**
3. Configure template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email  
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (William Cook)
4. **Save the Template ID** (e.g., `template_xxxxxxx`)

**Recommended Template:**
```
Subject: Portfolio Contact from {{from_name}}

Hello William,

You received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

#### Step 3: Get Public Key
1. Go to **Account** in sidebar
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxxx`)

### Environment Variables (.env)

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

**⚠️ IMPORTANT:** Add `.env` to `.gitignore` to keep keys private!

### React Implementation

```javascript
// src/components/Contact/ContactForm.jsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField, Alert, CircularProgress } from '@mui/material';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      form.current.reset();
    })
    .catch((error) => {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
      console.error('EmailJS Error:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <TextField
        name="from_name"
        label="Your Name"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        name="from_email"
        label="Your Email"
        type="email"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        name="message"
        label="Message"
        multiline
        rows={4}
        required
        fullWidth
        margin="normal"
      />
      
      {status.message && (
        <Alert severity={status.type} sx={{ mt: 2 }}>
          {status.message}
        </Alert>
      )}
      
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
```

### Form Fields
| Field | Name Attribute | Required | Type |
|-------|---------------|----------|------|
| Name | `from_name` | Yes | text |
| Email | `from_email` | Yes | email |
| Message | `message` | Yes | textarea |

### Vercel Environment Variables
When deploying to Vercel, add these environment variables in Project Settings:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## Deployment Checklist

- [ ] Vercel account connected to GitHub
- [ ] Environment variables set (EmailJS keys)
- [ ] Custom domain configured (optional)
- [ ] Meta tags and Open Graph set
- [ ] Favicon and logo uploaded
- [ ] Resume PDF in public folder
- [ ] All project images optimized

---

## Assets Needed

| Asset | Status | Notes |
|-------|--------|-------|
| Headshot | ✅ Ready | User has image |
| Logo | ❌ Pending | To be designed |
| WTWR Screenshots | ✅ Available | Capture from live site |
| QA System Diagram | ❌ Pending | Architecture diagram |
| Dashboard Mockup | ❌ Pending | For professional project |
| Resume PDF | ✅ Ready | User has document |
| Testimonials | ❌ Pending | Need to collect |

---

## Commands Reference

```bash
# Create project
npm create vite@latest portfolio -- --template react

# Install dependencies
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @emailjs/browser
npm install react-scroll  # for smooth scrolling

# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

---

*This specification is ready for Claude Code agent to begin implementation.*
