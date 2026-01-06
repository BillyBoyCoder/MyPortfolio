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
