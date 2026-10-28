"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BarChart, Code2, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 70,
      duration: 0.5,
    });

    tl.from(".profile-text", {
      opacity: 0,
      y: 90,
      duartion: 1.5,
    });

    tl.from(".profile-info", {
      opacity: 0,
      y: 90,
      duartion: 1,
    });
    tl.from(introRef.current, {
      opacity: 0,
      x: 100,
      duration: 0.4,
    });
    tl.from(statsRef.current, {
      opacity: 0,
      x: 100,
      duration: 0.4,
    });
  });
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 150,
      duration: 1,
    });
  });

  const ideas = [
    {
      Id: 1,
      num: "10+",
      info: "Projects Build",
      description: "from ideas to live Projects",
      icon: Code2,
    },
    {
      Id: 2,
      num: "1+",
      info: "year of learning",
      description: "consistency growth everyday",
      icon: GraduationCap,
    },
    {
      Id: 3,
      num: "100%",
      info: "Commitment to Growth",
      description: "Learning, building, and improving every day",
      icon: BarChart,
    },
  ];

  const technologies = [
    { name: "HTML", color: "#F97316" },
    { name: "CSS", color: "#3B82F6" },
    { name: "JavaScript", color: "#FACC15" },
    { name: "React", color: "#22D3EE" },
    { name: "GSAP", color: "#4ADE80" },
  ];
  return (
    <main id="home" className="mt-35 flex md:flex-row flex-col gap-10">
      <div
        ref={cardRef}
        className="bg-card pt-10 pb-5 px-10 flex flex-col items-center md:w-120  portfolio-panel"
      >
        {/* left side */}
        <div className="relative h-60 w-60 flex justify-center items-center">
          <div className=" absolute inset-0 rounded-full border-t-4 border-b-4 border-accent-strong animate-spin"></div>
          <div className=" absolute inset-2 rounded-full border-r border-l border-accent animate-pulse"></div>
          <div className="h-50 w-50 inset-4 rounded-full">
            <Image
              src="/profileImg.png"
              alt="Gunjan Khudaniya"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex justify-center flex-col items-center lg:mt-15">
          <h1
            ref={titleRef}
            className="text-accent text-2xl font-semibold whitespace-nowrap"
          >
            Gunjan Khudaniya
          </h1>
          <h1 className="profile-text text-foreground text-3xl font-medium pt-1 font-sans whitespace-nowrap">
            Frontend Developer
          </h1>
          <p className="profile-info text-muted text-md py-5 text-center">
            I build modern, responsive and interactive web experiences with a
            passion for clean design and smooth animations.
          </p>
        </div>
      </div>

      {/* info */}
      <div className="flex flex-col w-full gap-5">
        <div
          ref={introRef}
          className="portfolio-panel flex items-start flex-col py-1 bg-card"
        >
          <div className="flex items-center bg-green-800/55 gap-3 w-auto text-green-100 px-9 py-1 rounded-full m-5">
            <div className="h-2.5 w-2.5 animate-ping [animation-duration:0.7s] bg-green-400 rounded-full"></div>
            Available for Work
          </div>
          <h1 className="text-accent-strong text-md tracking-wider font-medium px-5">
            TURNING IDEA<span className="text-accent">S INTO REALITY</span>
          </h1>
          <h1 className="px-5 lg:px-10 text-[40px] lg:text-[43px] font-semibold text-muted/60 py-2 font-heading">
            Crafting Beautiful
            <span className="text-foreground pl-1"> Web Experiences</span>
          </h1>
          <p className="text-lg text-muted font-sans px-5 mr-10 pb-1">
            I'm a Frontend Developer who loves creating interactive,
            user-friendly and visually appealing websites. I enjoy bringing
            ideas to life with code and animations.
          </p>

          <div className="flex gap-4 flex-wrap mx-4 my-2 xl:ml-20 mb-4">
            {technologies.map((tech) => {
              return (
                <div
                  key={tech.name}
                  className="flex  items-center justify-center border border-white/20 rounded-full gap-3 py-1.5 px-3"
                  style={{
                    boxShadow: `inset 0 0 10px 0 ${tech.color}40`,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full animate-pulse [animation-duration:0.6s]"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          ref={statsRef}
          className="w-full portfolio-panel flex justify-around flex-wrap  lg:divide-x lg:divide-border py-3 bg-card"
        >
          {ideas.map((idea) => {
            const Icon = idea.icon;
            return (
              <div
                className="py-5 flex flex-col items-start px-5 "
                key={idea.Id}
              >
                <div className="p-2 bg-accent/30 border border-accent-strong rounded-2xl ">
                  <Icon color="#4f89e7" size={26} />
                </div>
                <h1 className="text-[40px] font-bold lg:py-3 text-accent">
                  {idea.num}
                </h1>
                <p className="text-lg text-accent/60">{idea.info}</p>
                <p className="text-xl text-muted w-80">{idea.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
