import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";
const PLACEHOLDER_IMG = "/assets/logo-dark.svg";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live }: { live?: string }) => {
  if (!live || live === "#") return null;
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  react: brand("React.js", "react-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  ai: brand("AI / LLMs", "vercel-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "debat-ai",
    category: "AI Platform",
    title: "Debat AI",
    src: `${BASE_PATH}/debat-ai/debat-ai.png`,
    screenshots: ["debat-ai.png"],
    live: "https://reason-duel.emergent.host/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.ai,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An AI-powered debate platform where users can debate with AI,
            participate in multi-person debates, and let AI judge the debate
            using reasoning capabilities. Built with modern web technologies
            and powered by large language models for intelligent,
            real-time debate experiences.
          </TypographyP>
          <div className="my-4 space-y-2 text-sm text-muted-foreground font-mono">
            <p>◆ Intelligent multi-turn reasoning engine</p>
            <p>◆ Real-time AI debate with natural responses</p>
            <p>◆ Multi-user debate judging system</p>
            <p>◆ AI-powered verdict and argument analysis</p>
            <p>◆ Modern, responsive UI with fast interactions</p>
          </div>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/debat-ai/debat-ai.png`]} />
        </div>
      );
    },
  },
  {
    id: "techyboy-store",
    category: "E-commerce",
    title: "Techyboystore",
    src: `${BASE_PATH}/techyboy-store/techyboy-store.png`,
    screenshots: ["techyboy-store.png"],
    live: "https://techyboystore.vercel.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A premium, modern e-commerce storefront for TechyBoy. Designed with 
            sleek animations, fast performance, fully responsive design, and 
            intuitive product discovery tools for seamless shopping.
          </TypographyP>
          <div className="my-4 space-y-2 text-sm text-muted-foreground font-mono">
            <p>◆ Modern UI/UX and micro-interactions</p>
            <p>◆ Fast and secure checkouts</p>
            <p>◆ Dynamic cart and product management</p>
            <p>◆ Fully responsive across desktop, tablet, and mobile</p>
            <p>◆ Performance optimized with static site generation</p>
          </div>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/techyboy-store/techyboy-store.png`]} />
        </div>
      );
    },
  },
  {
    id: "techyboy-live",
    category: "Startup / Agency",
    title: "TechyBoy.live",
    src: `${BASE_PATH}/techyboy-live/techyboy-live.png`,
    screenshots: ["techyboy-live.png"],
    live: "https://techyboy.live",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.gsap,
      ],
      backend: [
        PROJECT_SKILLS.node,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            The official startup website for TechyBoy website development agency. 
            Built to present agency services, pricing tiers, operational schema, 
            and project portfolios with high performance and interactive animations.
          </TypographyP>
          <div className="my-4 space-y-2 text-sm text-muted-foreground font-mono">
            <p>◆ Interactive 3D Vanta.js net network background</p>
            <p>◆ High performance animations built using GSAP</p>
            <p>◆ Fully responsive across all desktop, tablet, and mobile devices</p>
            <p>◆ Structurised Organization and FAQ schemas for SEO optimization</p>
            <p>◆ Built-in custom forms and WhatsApp partnership CTAs</p>
          </div>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/techyboy-live/techyboy-live.png`]} />
        </div>
      );
    },
  },
];

export default projects;
