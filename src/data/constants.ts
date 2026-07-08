export enum SkillNames {
  C = "c",
  JAVA = "java",
  JS = "js",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  NODEJS = "nodejs",
  FIREBASE = "firebase",
  GIT = "git",
  GITHUB = "github",
  FIGMA = "figma",
  CANVA = "canva",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.C]: {
    id: 1,
    name: "c",
    label: "C",
    shortDescription: "Low-level programming and system fundamentals",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 2,
    name: "java",
    label: "Java",
    shortDescription: "Object-oriented programming and application development",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.JS]: {
    id: 3,
    name: "js",
    label: "JavaScript",
    shortDescription: "Interactive logic and dynamic web experiences",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 4,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic web structure and accessibility",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 5,
    name: "css",
    label: "CSS",
    shortDescription: "Modern styling, animations, and responsive design",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 6,
    name: "react",
    label: "React",
    shortDescription: "Component-based UI development",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React framework for production",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Server-side JavaScript runtime",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 9,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Backend-as-a-service for real-time applications",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.GIT]: {
    id: 10,
    name: "git",
    label: "Git",
    shortDescription: "Version control and collaboration",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 11,
    name: "github",
    label: "GitHub",
    shortDescription: "Code hosting and open-source collaboration",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.FIGMA]: {
    id: 12,
    name: "figma",
    label: "Figma",
    shortDescription: "UI/UX design and prototyping",
    color: "#a259ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  [SkillNames.CANVA]: {
    id: 13,
    name: "canva",
    label: "Canva",
    shortDescription: "Graphic design and visual content creation",
    color: "#00c4cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description?: string[];
  skills?: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2025",
    endDate: "Present",
    title: "CEO & Founder",
    company: "TechyBoy",
    description: [
      "Building modern websites, AI solutions, and digital products for clients and startups.",
      "Leading a team of 10+ members across development, design, and strategy.",
      "Delivering projects to 10+ monthly clients — including business websites, portfolio sites, and AI applications.",
      "Built and launched Debat AI — an AI-powered debate platform with reasoning capabilities.",
      "Driving product vision, client relations, and end-to-end project delivery.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.JS,
      SkillNames.NODEJS,
      SkillNames.FIREBASE,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "2025",
    endDate: "Present",
    title: "Diploma in Information Technology",
    company: "Ganpat University",
    description: [
      "Pursuing Diploma in Information Technology — building strong foundations in programming, networking, and system design.",
      "Webathon Winner — took first place demonstrating execution speed and design vision under pressure.",
      "Participated in 2 hackathons — sharpened rapid prototyping, AI integration, and leadership skills.",
    ],
    skills: [
      SkillNames.C,
      SkillNames.JAVA,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
