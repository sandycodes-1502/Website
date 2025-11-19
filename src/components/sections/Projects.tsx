"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A modern dashboard for managing online stores with real-time analytics, inventory tracking, and order management.",
        tags: ["Next.js", "Tailwind", "Recharts", "Supabase"],
        image: "linear-gradient(45deg, #8b5cf6, #3b82f6)",
        link: "#",
        github: "#",
    },
    {
        id: 2,
        title: "AI Task Manager",
        description: "Intelligent task management app that uses AI to prioritize and categorize your daily workflow.",
        tags: ["React", "OpenAI API", "Framer Motion", "Node.js"],
        image: "linear-gradient(45deg, #ec4899, #8b5cf6)",
        link: "#",
        github: "#",
    },
    {
        id: 3,
        title: "Crypto Portfolio",
        description: "Real-time cryptocurrency portfolio tracker with live price updates and historical data visualization.",
        tags: ["Vue.js", "D3.js", "CoinGecko API", "Firebase"],
        image: "linear-gradient(45deg, #3b82f6, #10b981)",
        link: "#",
        github: "#",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".project-card");
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={containerRef} className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-16">
                    Featured <span className="text-gradient">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            onClick={() => setSelectedProject(project)}
                            className="project-card group relative rounded-2xl overflow-hidden cursor-pointer glass-card border border-white/5 hover:border-primary/50 transition-colors"
                            whileHover={{ y: -10 }}
                        >
                            <div
                                className="h-48 w-full bg-cover bg-center"
                                style={{ background: project.image }}
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedProject.id}`}
                            className="w-full max-w-2xl bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div
                                className="h-64 w-full bg-cover bg-center"
                                style={{ background: selectedProject.image }}
                            />

                            <div className="p-8">
                                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-sm px-3 py-1 rounded-full bg-white/10 text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                                    >
                                        <Github size={18} />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
