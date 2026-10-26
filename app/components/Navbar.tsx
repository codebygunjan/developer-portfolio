"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 portfolio-panel w-[94%] max-w-8xl px-5 py-6 z-10 bg-card flex items-center justify-between shadow-lg shadow-blue-600/20">
      {/* logo */}
      <div>
        <h1 className="text-accent-strong text-2xl font-medium font-heading ml-7">
          Gun
          <span className="text-accent">jan</span>
          <span className="text-foreground">K.</span>
        </h1>
      </div>
      {/* nav-menu */}
      <div className="hidden md:flex md:gap-10 text-lg font-sans text-muted mr-5">
        <a className="hover:text-foreground duration-300" href="#home">
          Home
        </a>
        <a className="hover:text-foreground duration-300" href="#about">
          About
        </a>
        <a className="hover:text-foreground duration-300" href="#skills">
          Skills
        </a>
        <a className="hover:text-foreground duration-300" href="#projects">
          Projects
        </a>
        <a className="hover:text-foreground duration-300" href="#contact">
          Contact
        </a>
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => {
            setIsMenuOpen(true);
          }}
          className="block md:hidden text-muted hover:text-foreground duration-300"
        >
          <Menu />
        </button>
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 h-100 w-full fixed top-0 left-0 z-50 bg-background flex items-center flex-col`}
        >
          <button
            className="absolute top-15 right-9 text-muted hover:text-foreground duration-300"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <X />
          </button>

          <div className="flex flex-col gap-3 my-10 pt-20 px-10 text-muted text-lg">
            <a className="hover:text-foreground duration-300" href="#home">
              Home
            </a>
            <a className="hover:text-foreground duration-300" href="#about">
              About
            </a>
            <a className="hover:text-foreground duration-300" href="#skills">
              Skills
            </a>
            <a className="hover:text-foreground duration-300" href="#projects">
              Projects
            </a>
            <a className="hover:text-foreground duration-300" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
