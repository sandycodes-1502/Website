"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Background animation
            gsap.to(bgRef.current, {
                rotate: 360,
                duration: 20,
                repeat: -1,
                ease: "linear",
            });

            // Text Reveal
            tl.from(textRef.current?.querySelectorAll(".char") || [], {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                duration: 1,
                ease: "power4.out",
            })
                .from(subtextRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                }, "-=0.5")
                .from(ctaRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                }, "-=0.6");

            // Parallax Effect on Scroll
            gsap.to(textRef.current, {
                y: -100,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const splitText = (text: string) => {
        return text.split("").map((char, index) => (
            <span key={index} className="char inline-block">
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    ref={bgRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[100px] opacity-50"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <h1
                    ref={textRef}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold font-outfit tracking-tighter mb-6 overflow-hidden"
                >
                    <div className="overflow-hidden">
                        {splitText("Building Digital")}
                    </div>
                    <div className="text-gradient overflow-hidden mt-2">
                        {splitText("Experiences")}
                    </div>
                </h1>

                <p
                    ref={subtextRef}
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
                >
                    Creative Developer & UI/UX Designer crafting immersive web experiences with code and creativity.
                </p>

                <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <span className="relative z-10">View Work</span>
                        <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
