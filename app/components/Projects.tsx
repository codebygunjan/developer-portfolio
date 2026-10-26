import { ArrowUpRight } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  const projectInfo = [
    {
      id: 1,
      title1: "SHAN",
      title2: " Furniture & Interior Design Website ",
      description:
        "An elegant furniture website showcasing modern interiors, beautiful layouts and a seamless shopping experience. Built with a focus on clean design, performance and user-friendly navigation.",
      tech: ["React", "Tailwind", "GSAP"],
      live: "https://shan-furniture-website.vercel.app/",
      github: "https://github.com/codebygunjan/SHAN-Furniture-Website",
      image: "/shan.png",
    },
    {
      id: 2,
      title1: "HADAN",
      title2: "Hotel Booking Website",
      description:
        " A modern hotel booking website with a clean and luxurious design, smooth animations and an intuitive user experience. Built to make hotel search and booking simple, fast and beautiful.",
      tech: ["React", "Tailwind"],
      live: "https://hadan-hotel-booking-website.vercel.app/",
      github: "https://github.com/codebygunjan/HADAN---Hotel-Booking-Website",
      image: "/hadan.png",
    },
  ];
  return (
    <section
      id="projects"
      className="portfolio-panel my-10 p-4 lg:py-6 bg-card flex flex-col items-start"
    >
      <div className="text-accent-strong text-[22px] border border-accent/20 bg-accent/10 flex gap-2 items-center w-50 px-5 py-1 rounded-3xl">
        <span className="h-3 w-3 animate-pulse [animation-duration:0.5s] rounded-full bg-accent-strong mr-2" />
        My
        <span className="text-accent"> projects</span>
      </div>
      <h1 className="capitalize mt-5 mx-10 text-[40px] font-medium font-heading text-muted/40">
        real <span className="text-foreground">projects.</span>
        <span className="text-muted/40"> real</span>
        <span className="text-foreground"> impact.</span>
      </h1>
      <p className="text-muted lg:mr-20 mx-7 text-lg mt-2 border-b border-border pb-5">
        Here are some of the projects I've built. Each one reflecting my journey
        of learning, creating, and solving real-world problems. Every project
        teaches me something new and pushes me to become a better developer.
      </p>

      <div className="lg:mx-10 mx-4 flex flex-col items-center  ">
        {projectInfo.map((info) => {
          return (
            <div
              key={info.id}
              className="mt-10 flex items-center flex-col xl:flex-row my-2"
            >
              <div>
                <p className="text-foreground/80 text-xl">
                  0{info.id} -
                  <span className="text-3xl font-bold font-heading text-accent-strong">
                    {" "}
                    {info.title1.slice(0, 2)}
                    <span className="text-accent/80">
                      {info.title1.slice(2)}
                    </span>
                  </span>
                </p>

                <h3 className="text-accent text-lg mx-10">{info.title2}</h3>
                <p className="xl:w-220 text-foreground/70 font-sans md:text-lg text-sm py-3 mr-10">
                  {info.description}
                </p>
                <div className="flex gap-3 items-start my-3">
                  {info.tech.map((item) => {
                    return (
                      <div
                        key={item}
                        className="py-1 px-3 border bg-accent/10 flex border-border rounded-2xl items-center gap-2 inset-shadow-sm inset-shadow-indigo-500/20"
                      >
                        {" "}
                        <span className="h-2 w-2 rounded-full bg-accent animate-ping [animation-duration:0.7s] mr-1" />
                        {item}
                      </div>
                    );
                  })}
                </div>
                <button className="flex">
                  <a
                    href={info.live}
                    className="flex items-center gap-1 rounded-2xl bg-accent-strong/10 portfolio-panel px-4  inset-shadow-sm inset-shadow-blue-500 inset-1 shadow-lg shadow-blue-500/50 py-1 text-lg m-2 hover:bg-accent duration-300 text-white/80"
                  >
                    live site <ArrowUpRight size={18} />
                  </a>

                  <a
                    href={info.github}
                    className="flex items-center gap-1 rounded-2xl hover:bg-accent hover:shadow-lg hover:shadow-blue-500/50  px-3 py-1 text-lg m-2 bg-transparent border border-border duration-300 text-white/60"
                  >
                    view code <AiFillGithub size={18} />
                  </a>
                </button>
              </div>
              {/* image div */}

              {/* Laptop mockup */}
              <div className="w-full max-w-3xl mx-auto my-4">
                {/* Laptop screen */}
                <div className="relative rounded-t-xl border-2 border-b-0 border-slate-600/80 bg-slate-900 p-2 shadow-xl shadow-blue-900/30">
                  <div className="overflow-hidden rounded-md border border-white/10">
                    <img
                      src={info.image}
                      alt={`${info.title1} website preview`}
                      className="block aspect-video w-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Laptop base */}
                <div className="relative mx-auto h-2 w-[108%] translate-x-[-3.7%] rounded-b-[100%] bg-linear-to-b from-slate-400 via-slate-600 to-slate-800 shadow-lg shadow-blue-900/30">
                  <div className="mx-auto h-1 w-1/4 rounded-b-md bg-slate-500/80" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
