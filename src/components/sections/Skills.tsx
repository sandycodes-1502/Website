"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "🎨" },
    { name: "GSAP", icon: "🎭" },
    { name: "Three.js", icon: "🧊" },
    { name: "Node.js", icon: "🟢" },
    { name: "Figma", icon: "🖌️" },
];

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(gridRef.current?.children || [], {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={containerRef} className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold font-outfit text-center mb-16">
                    My <span className="text-gradient">Tech Stack</span>
                </h2>

                <div
                    ref={gridRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group p-6 rounded-xl glass-card border border-white/5 hover:border-primary/50 transition-colors duration-300 flex flex-col items-center justify-center gap-4 cursor-default"
                        >
                            <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </span>
                            <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
