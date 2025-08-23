import CapstoneProject from "../assets/capstone project.png";
import LearnUp from "../assets/learnup.png";

export const DATA = {
  name: "Bui Quang Huy",
  role: "Frontend Developer",
  summary:
    "Junior Frontend Developer with hands-on experience in academic projects using React, Next.js, and TailwindCSS. Passionate about building modern, user-friendly web applications and eager to grow in a dynamic professional environment.",
  location: "Binh Duong, Vietnam",
  email: "buiquanghuy532001@gmail.com",
  phone: "0917002565",
  socials: [
    { label: "GitHub", href: "https://github.com/huybq532001" },
    { label: "Facebook", href: "https://www.facebook.com/HuyBQ5321" },
  ],
  skills: [
    {
      group: "Core",
      items: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "React / Next.js", level: 88 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "TailwindCSS", level: 85 },
      ],
    },
    {
      group: "Backend & Data",
      items: [
        { name: "Node.js", level: 70 },
        { name: "GraphQL / Apollo", level: 72 },
        { name: "REST APIs", level: 80 },
        { name: "PostgreSQL", level: 60 },
      ],
    },
  ],
  projects: [
    {
      title:
        "Capstone Project: Thesis Registration & Information Management System | FPT University | 2024 – 2025",
      desc: "Developed a web system to manage thesis registration, advisor assignment, and progress tracking.\n- Role: Frontend Developer — built the UI with React and TailwindCSS, integrated with GraphQL API.\n- Achievements: Delivered 20+ functional screens, optimized client-side performance.",
      tags: ["React", "Tailwind", "Redux"],
      image: CapstoneProject,
      link: "https://final-capstone-project-nu.vercel.app/log-in",
      repo: "https://github.com/AnhPhi2002/Final-Capstone-Project.git",
    },
    {
      title:
        "Course Project: LearnUp – Student Support Platform | FPT University | 2024",
      desc: "Objective: Built a website that connects new students with teachers and alumni, integrated with an e-learning marketplace.\n- Role: Frontend Developer — implemented UI using React, Redux, and TailwindCSS.\n- Achievements: Completed MVP within 8 weeks; demo system reached 100+ accounts.",
      tags: ["React", "Tailwind"],
      image: LearnUp,
      link: "https://learnup.id.vn/",
      repo: "https://github.com/AnhPhi2002/EXE201-Project",
    },
    {
      title:
        "Mini Project: Sexual Health Care System | FPT University | 2021",
      desc: "Developed a platform for managing sexual and reproductive health, integrating at-home testing services and online consultations.\n- Role: Frontend Developer — built UI with Next.js and TailwindCSS, integrated APIs for service data and booking management.\n- Key Features:\n  + Book at-home tests and receive results online.\n  + Online health consultations with doctors.\n  + Personal dashboard with medical history and test records.",
      tags: ["Next.js", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
      link: "https://project-swp391.vercel.app",
      repo: "https://github.com/EricLee0109/project_swp391.git",
    },
  ],
  experience: [
    {
      role: "Frontend Engineer",
      company: "TechCorp",
      period: "2023 – Present",
      points: [
        "Built a reusable design system with 30+ components.",
        "Optimized Core Web Vitals: TTFB, CLS, LCP.",
      ],
    },
  ],
  education: [
    {
      school: "FPT University Ho Chi Minh City",
      major: "Software Engineering",
      period: "2020 – 2025",
    },
  ],
};
