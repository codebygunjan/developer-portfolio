"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FaLaptop, FaPaintBrush } from "react-icons/fa";
import { BiSolidZap } from "react-icons/bi";
import { Code2 } from "lucide-react";

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.9,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  });

  const passion = [
    {
      id: 1,
      icon: FaLaptop,
      color: "#1553d7",
      bgColor: "#041B4B",
      title: "Responsive Websites",
      description: "that look great on every device",
    },
    {
      id: 2,
      icon: FaPaintBrush,
      color: "#9F62F8",
      bgColor: "#17184A",
      title: "Modern Interfaces",
      description: "clean, minimal and user-friendly",
    },
    {
      id: 3,
      icon: BiSolidZap,
      color: "#F9921F",
      bgColor: "#2E2621",
      title: "Interactive Experiences",
      description: "with smooth animations and transitions",
    },
  ];
  return (
    <section
      id="about"
      ref={aboutRef}
      className="portfolio-panel my-10 mt-12 p-4 lg:py-6 bg-card flex flex-col items-start"
    >
      <div className="text-accent-strong/80 text-[22px] border border-accent/20 bg-accent/10 flex items-center px-5 py-1 rounded-3xl">
        <span className="h-3 w-3 rounded-full bg-accent-strong animate-pulse [animation-duration:0.6s] mr-3" />
        Abo
        <span className="text-accent">ut Me</span>
      </div>
      <h1 className="text-accent-strong font-semibold uppercase tracking-wider mt-7 lg:mx-15">
        Building modern, responsive an
        <span className="text-accent/80">d interactive web experiences.</span>
      </h1>

      <div className="flex xl:flex-row-reverse flex-col overflow-hidden items-center  justify-evenly mt-5 md:mx-10">
        <div className="flex flex-col items-start lg:mx-15">
          <h1 className="capitalize text-muted/60 font-heading font-extrabold lg:text-[50px] text-3xl whitespace-nowrap md:my-2 my-6 lg:mx-20">
            more than just <span className="text-foreground">code.</span>
          </h1>
          <p className="xl:text-xl text-md text-muted lg:mx-10 lg font-sans max-w-150 xl:max-w-full">
            I'm Gunjan, a Frontend Developer who loves turning ideas into
            beautiful, user-friendly websites. I enjoy clean design, smooth
            animations and writing code that brings ideas to life. Currently
            focused on Frontend Development while exploring new technologies and
            building real-world projects. Building modern, responsive and
            interactive web experiences that make an impact.
          </p>
          <div className="capitalize bg-accent-strong/5 mt-10 inset-shadow-sm inset-shadow-indigo-800/90 border border-accent/80 m-5 rounded-xl py-3 px-2 xl:px-6">
            <p className=" text-foreground/90 text-lg font-heading font-medium flex items-center tracking-wider">
              <span className="hidden lg:block h-3 w-3 rounded-full border-3 border-accent-strong mr-3 animate-pulse [animation-duration:0.6s] " />
              great websites are not just built to look good, but to create
              meaningful experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:mt-0 mt-10">
          <div className="portfolio-panel px-3 py-5 min-w-80">
            <h1 className="text-xl text-foreground/90 flex gap-2 capitalize items-center pb-5 justify-center">
              <div className="bg-red-600/15 border border-red-600/90 rounded-lg p-1 ">
                <Code2 color="red" />
              </div>
              what i love building
            </h1>
            <div className="flex flex-col">
              {passion.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="border rounded-2xl m-2 border-border px-2 py-3 flex gap-5 items-center"
                  >
                    <div
                      className="p-3 border rounded-lg"
                      style={{
                        borderColor: `${item.color}`,
                        backgroundColor: `${item.bgColor}`,
                      }}
                    >
                      <Icon size={25} color={item.color} />
                    </div>
                    <div>
                      <h1 className="text-foreground/80 font-medium text-lg text-heading">
                        {item.title}
                      </h1>
                      <p className="text-muted text-sans">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
