export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  author: string;
  videoSrc: string;
  thumbnail: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "modern-portfolio",
    title: "Modern Developer Portfolio",
    description:
      "A high-performance personal website featuring smooth transitions, glassmorphism UI, and dark mode optimization.",
    author: "Ianne Carl",
    videoSrc: "/Showcase/Portfolio/Portfolio-Vid.mp4",
    thumbnail: "/Showcase/Portfolio/Portfolio-Pic.png",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Next.js"],
    link: "https://portfolio.snapjsx.com",
    github: "https://github.com/Gladiarn",
  },
];
