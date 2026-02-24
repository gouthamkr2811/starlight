"use client";

import { useEffect, useRef } from "react";

const quotes = [
    {
        text: "Where Every Celebration Becomes a Masterpiece.",
        author: "Starlight Affairs",
    },
    {
        text: "Turning Moments into Memories Under the Stars.",
        author: "Starlight Affairs",
    },
    {
        text: "Elegance. Luxury. Perfection.",
        author: "Our Promise",
    },
    {
        text: "Your Vision, Our Passion.",
        author: "Our Mission",
    },
    {
        text: "Celebrate Life's Finest Moments with Starlight Affairs.",
        author: "Starlight Affairs",
    },
];

export default function QuotesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const quotesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let ctx: any;
        const initGSAP = async () => {
            const gsap = (await import("gsap")).default;
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                gsap.fromTo(
                    quotesRef.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        };

        initGSAP();
        return () => ctx?.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-6 overflow-hidden bg-dark"
        >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="relative max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">
                        Words We Live By
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        Our{" "}
                        <span className="gold-gradient-text italic">Philosophy</span>
                    </h2>
                </div>

                {/* Quotes */}
                <div className="space-y-10">
                    {quotes.map((q, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) quotesRef.current[i] = el;
                            }}
                            className={`flex flex-col items-center text-center ${i % 2 !== 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}
                            style={{ opacity: 0 }}
                        >
                            <span className="text-gold/30 font-serif text-6xl leading-none -mb-4">
                                &ldquo;
                            </span>
                            <p className="font-serif text-xl md:text-2xl text-white/80 italic leading-relaxed max-w-2xl">
                                {q.text}
                            </p>
                            <span className="mt-4 text-gold text-xs uppercase tracking-widest">
                                — {q.author}
                            </span>
                            {i < quotes.length - 1 && (
                                <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
