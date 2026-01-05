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
    images: [],
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
    images: [],
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
