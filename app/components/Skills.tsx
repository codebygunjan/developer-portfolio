import { GraduationCap } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaCode,
  FaLaptopCode,
  FaGitAlt,
  FaGithub,
  FaPlug,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiGsap,
  SiVite,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skiils() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#4f89e7" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
      ],
    },
    {
      id: 2,
      title: "Styling & Animation",
      description: "Creating polished layouts and engaging animations.",
      skills: [
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "GSAP", icon: SiGsap, color: "#88CE02" },
        { name: "CSS Animations", icon: FaCode, color: "#1572B6" },
        { name: "Responsive Design", icon: FaLaptopCode, color: "#3B82F6" },
      ],
    },
    {
      id: 3,
      title: "Tools & Workflow",
      description: "Tools I use to write, manage, and build projects.",
      skills: [
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#F9FAFB" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
      ],
    },
    {
      id: 4,
      title: "Currently Learning",
      description: "Growing my skills with modern web technologies.",
      skills: [
        { name: "Next.js", icon: SiNextdotjs, color: "#F9FAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "API Integration", icon: FaPlug, color: "#22C55E" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="portfolio-panel my-10 mt-12 p-4 lg:py-6 bg-card flex flex-col items-start"
    >
      <div>
        <div className="text-accent-strong text-[22px] border border-accent/20 bg-accent/10 flex gap-2 items-center w-40 px-5 py-1 rounded-3xl">
          <span className="h-3 w-3 animate-pulse [animation-duration:0.5s] rounded-full bg-accent-strong mr-2" />
          My
          <span className="text-accent"> Skills</span>
        </div>
        <h1 className="capitalize text-3xl px-3 font-semibold text-muted/60 py-2 lg:py-3 font-heading">
          Tools i use to turn
          <span className="text-foreground/60 pl-1"> ideas into</span>
          <span className="text-foreground"> reality</span>
        </h1>
        <p className="text-muted text-lg font-sans">
          I work with modern technologies to build beautiful, fast and
          interactive web experiences.
        </p>
      </div>

      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 xl:gap-3">
          {skillCategories.map((skill) => {
            return (
              <div
                key={skill.id}
                className="portfolio-panel m-2 p-4 py-7 flex hover:bg-accent/5 duration-200 items-center flex-col justify-between bg-background"
              >
                <h1 className="text-accent text-xl font-medium">
                  {skill.title}
                </h1>
                <p className="text-foreground text-md py-4 px-2 font-sans">
                  {skill.description}
                </p>
                <div className="grid grid-cols-2 gap-4 gap-x-8">
                  {skill.skills.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex gap-3 items-center flex-col xl:flex-row"
                      >
                        <div className="p-3 bg-accent/10 border border-accent-strong rounded-2xl">
                          <Icon size={28} color={item.color} />
                        </div>
                        <span className="text-sm text-muted">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 m-5">
          <div className="p-4 mr-3 border border-accent/70 rounded-2xl bg-accent/10">
            <GraduationCap color="#4f89e7" />
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-accent-strong text-lg font-semibold">
              Always learning.
              <span className="text-accent/80"> Always Building</span>
            </p>
            <p className="capitalize text-lg tracking-wider">
              The Best Skill is a mindset to keep learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
