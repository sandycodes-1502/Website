"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                scale: 0.8,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "back.out(1.7)",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={containerRef}
            className="min-h-screen flex items-center justify-center py-20 relative"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div ref={textRef} className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold font-outfit">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                        <p>
                            I'm a creative developer based in San Francisco, passionate about
                            building digital products that look good and work well. With a
                            background in design and engineering, I bridge the gap between
                            aesthetics and functionality.
                        </p>
                        <p>
                            My approach is driven by a desire to create immersive, user-centric
                            experiences that leave a lasting impression. I believe in the power
                            of motion and interactivity to tell stories and guide users through
                            complex interfaces.
                        </p>
                    </div>
                </div>

                <div ref={imageRef} className="relative flex justify-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-[50px] opacity-30 animate-pulse-slow" />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 glass-card flex items-center justify-center">
                            {/* Placeholder for Avatar/Image */}
                            <span className="text-6xl">👨‍💻</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
