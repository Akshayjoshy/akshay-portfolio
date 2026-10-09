import type { SkillGroup } from "@/types/portfolio";
const s = (name: string, hint: string) => ({ name, hint });
export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      s("Java", "Backend development"),
      s("JavaScript", "Web scripting"),
      s("TypeScript", "Typed JavaScript"),
      s("HTML", "Markup"),
      s("CSS", "Styling"),
    ],
  },
  {
    title: "Frontend",
    items: [
      s("React.js", "Frontend UI development"),
      s("React Native", "Mobile apps"),
      s("Tailwind CSS", "Utility-first styling"),
      s("Remix", "Full-stack React framework"),
    ],
  },
  {
    title: "Backend",
    items: [
      s("Spring Boot", "Backend REST API development"),
      s("Hibernate", "ORM"),
      s("REST APIs", "API design and integration"),
      s("Spring Security", "Security framework"),
    ],
  },
  {
    title: "Database",
    items: [
      s("MySQL", "Relational database"),
      s("MongoDB", "Document database"),
    ],
  },
  {
    title: "Auth & security",
    items: [
      s("JWT", "Token-based authentication"),
      s("RBAC", "Role-based access control"),
      s("Protected routes", "Permission-gated navigation"),
    ],
  },
  {
    title: "Tools & other",
    items: [
      s("GitHub", "Version control"),
      s("Bitbucket", "Version control"),
      s("VS Code", "Editor"),
      s("Postman", "API testing"),
      s("Jira", "Issue tracking"),
      s("Agile", "Team workflow"),
    ],
  },
];
