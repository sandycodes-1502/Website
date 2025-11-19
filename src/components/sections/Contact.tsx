"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formState);
    };

    return (
        <section id="contact" className="py-20 relative min-h-[80vh] flex items-center">
            <div className="max-w-4xl mx-auto px-6 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I'm always open to
                        discussing new opportunities and ideas.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 md:p-12 rounded-3xl border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <Send size={20} />
                        Send Message
                    </motion.button>
                </form>
            </div>
        </section>
    );
}
