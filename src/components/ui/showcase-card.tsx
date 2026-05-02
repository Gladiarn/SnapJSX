"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { memo, useRef, useState } from "react";
import type { ShowcaseProject } from "@/content/showcase";

interface ShowcaseCardProps {
  project: ShowcaseProject;
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    {...props}
  >
    <title>GitHub</title>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ShowcaseCard = memo(function ShowcaseCard({
  project,
}: ShowcaseCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    videoRef.current
      ?.play()
      .catch((err) => console.log("Video play failed:", err));
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      // biome-ignore lint/correctness/noSelfAssign: video currentTime reset
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-card border border-border/50 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_-12px_rgba(255,215,0,0.15)] will-change-transform"
    >
      {/* Video/Thumbnail Background */}
      <div className="absolute inset-0 bg-muted">
        {/* biome-ignore lint/performance/noImgElement: intentional usage for complex overlay transitions */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          loading="lazy"
        />
        <video
          ref={videoRef}
          src={project.videoSrc}
          loop
          muted
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Decorative Border Glow */}
      <div className="absolute inset-0 border-[1px] border-white/5 rounded-[2.5rem] pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 transition-transform duration-500 group-hover:-translate-y-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-2 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {project.title}
              </h3>
              <div
                className={`w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100 animate-pulse"}`}
              >
                <Play className="w-4 h-4 fill-primary" />
              </div>
            </div>

            <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-lg line-clamp-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
              {project.description}
            </p>

            <div className="flex items-center gap-6 pt-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                >
                  Live Preview <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                >
                  Source Code <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Author Badge */}
      <div className="absolute top-8 left-8 flex items-center gap-3 transition-transform duration-500 group-hover:translate-x-1">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-yellow-500 p-[1px]">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-primary">
            {project.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>
        <span className="text-xs font-bold text-white/80 tracking-wide bg-black/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/5">
          {project.author}
        </span>
      </div>
    </motion.div>
  );
});
