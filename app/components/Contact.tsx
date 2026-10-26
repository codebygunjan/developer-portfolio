"use client";

import { useState } from "react";
import { Mail, MapPin, Clock3, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "gunjankhudaniya414@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: email,
      action: true,
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Pune, Maharashtra, India",
    },
    {
      icon: Clock3,
      label: "AVAILABILITY",
      value: "Open to opportunities",
      subtitle: "Full-time / Internship / Freelance",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/codebygunjan",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gunjan-khudaniya-121159356/",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080b10] px-5 py-16 text-white sm:px-8 md:px-16 md:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-blue-400">
            LET'S CONNECT
          </p>

          <h2 className="max-w-3xl font-serif text-4xl leading-[1.06] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            Got a project
            <br />
            in mind? <span className="text-blue-500">Let's talk.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            I'm always open to new opportunities, interesting projects, or just
            a friendly chat. Feel free to reach out. I'd love to hear from you!
          </p>
        </div>

        {/* Contact information */}
        <div className="max-w-2xl">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group flex gap-4 border-b border-white/8 py-5 first:pt-0 last:border-b-0"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/50 text-blue-400 transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-500/10">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="mb-1.5 text-[9px] font-semibold tracking-[0.24em] text-blue-300/80">
                    {item.label}
                  </p>

                  {item.label === "EMAIL" ? (
                    <a
                      href={`mailto:${email}`}
                      className="break-all text-xs text-slate-200 transition-colors hover:text-blue-400 sm:text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xs text-slate-200 sm:text-sm">
                      {item.value}
                    </p>
                  )}

                  {item.subtitle && (
                    <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* Copy email */}
                {item.action && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="flex h-8 shrink-0 items-center gap-1.5 self-center rounded-full border border-slate-700/80 px-3 text-[10px] text-slate-300 transition-all hover:border-blue-400 hover:text-blue-400"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
          <span className="text-[10px] font-semibold tracking-[0.23em] text-slate-400">
            FIND ME ON
          </span>

          <div className="mr-2 hidden h-px w-12 bg-blue-500/50 sm:block" />

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Icon size={16} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
