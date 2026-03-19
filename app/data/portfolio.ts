export const personalInfo = {
  name: "Utkarsh Rahim",
  firstName: "Utkarsh",
  title: "Technical Lead & Full-Stack Engineer",
  taglines: [
    "Technical Lead.",
    "Full-Stack Engineer.",
    "Wildlife Photographer.",
    "Problem Solver.",
  ],
  bio: "Technical Lead with 7+ years of experience designing, developing, and deploying scalable web applications. Skilled in Angular, React, Node.js, and cloud-native architectures — I bridge the gap between complex requirements and elegant, performant solutions.",
  location: "Bengaluru, India",
  email: "utkarshrahim@gmail.com",
  github: "https://github.com/utkarshrahim",
  linkedin: "https://linkedin.com/in/utkarshrahim",
  instagram: "https://www.instagram.com/lensofutkarsh/",
  resume: "/resume.pdf",
  avatar: "/images/profile/profile.jpg",
}

export const skills = [
  {
    category: "Frontend",
    icon: "◈",
    color: "blue" as const,
    items: ["TypeScript", "Angular", "React / Next.js", "Tailwind CSS", "RxJS"],
  },
  {
    category: "Backend",
    icon: "◆",
    color: "purple" as const,
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    icon: "◇",
    color: "cyan" as const,
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Tools & Other",
    icon: "◉",
    color: "blue" as const,
    items: ["Git", "Elixir", "Appsmith", "REST APIs", "GraphQL"],
  },
]

export const navLinks = [
  { label: "Home",        href: "/" },
  { label: "Experience",  href: "/experience" },
  { label: "Projects",    href: "/projects" },
  { label: "GitHub",      href: "/github" },
  { label: "Resume",      href: "/resume" },
  { label: "Photography", href: "/wildlife" },
]

export const projects = [
  {
    id: "fpl-intelligence",
    title: "fpl-intelligence",
    description: "Analytics and intelligence layer for FPL with helpful insights and structured data handling.",
    repoUrl: "https://github.com/utkarshrahim/fpl-intelligence",
    tech: ["Analytics", "Data", "Sports/Stats"],
  },
  {
    id: "release-tracker",
    title: "release tracker",
    description: "Track and surface releases with a clean UI and a robust data pipeline.",
    repoUrl: "https://github.com/utkarshrahim/release-tracker",
    tech: ["Tracking", "APIs", "UI"],
  },
  {
    id: "safari-bot",
    title: "safari bot",
    description: "Automation-focused project built with a focus on reliability, speed, and maintainable flows.",
    repoUrl: "https://github.com/utkarshrahim/safari-bot",
    tech: ["Automation", "Web", "Workflow"],
  },
]
