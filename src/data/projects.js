export const projects = [
  {
    id: 1,
    title: "Automated QA Case Generation System",
    category: "professional",
    shortDescription: "AWS Lambda-powered automation reducing case creation from hours to minutes",
    fullDescription: `The problem we had to solve: We were using a Google spreadsheet to keep track of more than 600 upgrades for a point-of-sale software. Each upgrade required a FogBugz case to be created so that staff could keep track of what they did during the upgrade process for the Point of Sale software to our customer. Our current technology stack did not allow me to integrate with the Google Spreadsheet. This is what I had to solve. The staff who requested this process to be automated also requested, if possible, that we could automate the process of generating the FogBugz cases. The process was currently taking the staff member several hours to update his spreadsheet and create all the cases.`,
    impact: "Reduced case creation time from several hours to under 5 minutes",
    techStack: ["React", "Node.js", "AWS Lambda", "Google Sheets API", "FogBugz API", "SQL Server", "Bootstrap"],
    role: "Sole Developer",
    challenges: `The solution: I spent many hours after work, late into the night, working on this and thought nothing of it because this was a challenging task and forced me into territory I had not been. It was exciting.

Our current technology stack did not allow me to integrate with Google Spreadsheets as we were using a language called WLanguage, which is an OOP language created by PC Soft.

I knew that FogBugz had an API I could integrate with. I also knew that Google Spreadsheets must have an API. I began the research. Familiarized myself with the Google API and how I could get access to the Google Spreadsheet. Now, how do I build the FogBugz cases and modify the spreadsheet? I knew I could create a Lambda function on AWS, although I had never done this before. I also knew that these functions could be executed by a URL. There was another critical need for our company that I was going to be working on in the future - a web-based dashboard for support. So I thought, "What a clever place to put the functionality to execute the Lambda function on AWS!" And that is exactly what I did. I wrote a Lambda function that would scrape information entered by our staff member from the Google spreadsheet, access the FogBugz API, create the FogBugz cases, go back and update the spreadsheet. This allowed the user to create one or create 500 cases, all at the click of a button. Reducing hours of work down to minutes.`,
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
