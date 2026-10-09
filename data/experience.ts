import type { Job } from "@/types/portfolio";

export const jobs: Job[] = [
  {
    company: "Abdias Healthcare",
    role: "Freelance Software Developer",
    period: "Jul 2025 – Oct 2026",
    summary:
      "Developed the frontend of a healthcare management system using React.js and Tailwind CSS, supporting patient, doctor, employee, lead, invoicing, and operational workflows.",
    points: [
      "Built responsive dashboards and reusable UI components across multiple healthcare management modules.",
      "Implemented frontend role-based access control (RBAC), protected routes, and permission-based navigation using dynamic parent-child menu structures.",
      "Developed interfaces for patient management, employee attendance, doctor and employee management, lead tracking, and invoicing/billing workflows.",
      "Integrated frontend functionality with backend APIs, implementing reusable forms and centralized validation while collaborating with the backend developer to ensure reliable data flow and feature integration.",
    ],
    tech: ["React.js", "Tailwind CSS", "RBAC", "Protected Routes", "REST APIs"],
  },
  {
    company: "SAM Corporate",
    role: "Software Developer",
    period: "Aug 2023 – Jun 2025",
    summary:
      "Worked on an enterprise ESG platform that helps organizations manage, track, and report ESG data and compliance requirements.",
    points: [
      "Developed features using React, Remix, TypeScript, and MongoDB.",
      "Built responsive, reusable UI components with React and Tailwind CSS.",
      "Implemented Remix loaders and actions for data fetching, form processing, and API integration.",
      "Worked on routing, validation, data handling, and server-side rendering.",
      "Collaborated with a Dubai-based team on requirements, development, testing, and delivery.",
      "Worked in an Agile environment.",
    ],
    tech: [
      "React",
      "Remix",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Git",
      "Agile",
    ],
  },
];
