"use client";

import { useEffect, useRef, useState } from "react";

const philosophies = [
    {
        number: "01",
        title: "Masterpiece",
        text: "Where Every Celebration Becomes a Masterpiece.",
        sub: "We treat each event as a unique canvas — crafted with precision, passion, and artistry.",
        icon: "✦",
    },
    {
        number: "02",
        title: "Memories",
        text: "Turning Moments into Memories Under the Stars.",
        sub: "Every detail is an opportunity to create a story worth telling for generations.",
        icon: "★",
    },
    {
        number: "03",
        title: "Excellence",
        text: "Elegance. Luxury. Perfection.",
        sub: "Our unwavering commitment to excellence elevates every experience we curate.",
        icon: "◈",
    },
    {
        number: "04",
        title: "Vision",
        text: "Your Vision, Our Passion.",
        sub: "We listen deeply, dream boldly, and execute flawlessly — your dream is our mission.",
        icon: "⬡",
    },
    {
        number: "05",
        title: "Celebration",
        text: "Celebrate Life's Finest Moments.",
        sub: "From intimate evenings to grand galas, we make every celebration unforgettable.",
        icon: "✿",
    },
];

export default function QuotesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = (index: number) => {
        if (animating || index === active) return;
        setAnimating(true);
        setTimeout(() => {
            setActive(index);
            setAnimating(false);
        }, 300);
    };

    const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
            setActive((prev) => (prev + 1) % philosophies.length);
        }, 4000);
    };

    const stopAutoplay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // GSAP entrance for the section
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let ctx: any;
        const initGSAP = async () => {
            const gsap = (await import("gsap")).default;
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(() => {
                gsap.fromTo(
                    sectionRef.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
                    }
                );
            });
        };
        initGSAP();
        return () => ctx?.revert();
    }, []);

    const current = philosophies[active];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 px-4 overflow-hidden bg-dark"
            style={{ opacity: 0 }}
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.07)_0%,_transparent_65%)] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="relative max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">Words We Live By</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        Our <span className="gold-gradient-text italic">Philosophy</span>
                    </h2>
                </div>

                {/* Main interactive area */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-stretch">

                    {/* Left — Tab list */}
                    <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                        {philosophies.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => { goTo(i); stopAutoplay(); startAutoplay(); }}
                                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 text-left border transition-all duration-400 group ${active === i
                                        ? "border-gold bg-gold/10 text-white"
                                        : "border-white/8 text-white/40 hover:border-white/20 hover:text-white/70"
                                    }`}
                            >
                                <span className={`font-mono text-xs transition-colors duration-300 ${active === i ? "text-gold" : "text-white/20 group-hover:text-white/40"}`}>
                                    {p.number}
                                </span>
                                <span className={`text-sm uppercase tracking-widest transition-colors duration-300 hidden md:block ${active === i ? "text-white" : ""}`}>
                                    {p.title}
                                </span>
                                <span className={`text-sm uppercase tracking-widest transition-colors duration-300 md:hidden ${active === i ? "text-white" : ""}`}>
                                    {p.title}
                                </span>
                                {/* Active indicator */}
                                {active === i && (
                                    <span className="ml-auto text-gold hidden md:block">→</span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right — Content card */}
                    <div
                        className="relative border border-white/8 bg-white/[0.02] p-8 md:p-12 overflow-hidden"
                        onMouseEnter={stopAutoplay}
                        onMouseLeave={startAutoplay}
                    >
                        {/* Animated gold corner accents */}
                        <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/60" />
                        <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/60" />
                        <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/60" />
                        <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/60" />

                        {/* Big background number */}
                        <span className="absolute top-4 right-6 font-serif text-[120px] leading-none text-white/[0.03] font-bold select-none pointer-events-none">
                            {current.number}
                        </span>

                        {/* Content — fades on transition */}
                        <div
                            className="relative"
                            style={{
                                opacity: animating ? 0 : 1,
                                transform: animating ? "translateY(12px)" : "translateY(0)",
                                transition: "opacity 0.3s ease, transform 0.3s ease",
                            }}
                        >
                            {/* Icon */}
                            <div className="text-gold text-3xl mb-6">{current.icon}</div>

                            {/* Quote */}
                            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-snug mb-6">
                                &ldquo;{current.text}&rdquo;
                            </blockquote>

                            {/* Sub-text */}
                            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                                {current.sub}
                            </p>

                            {/* Author tag */}
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-gold/60" />
                                <span className="text-gold text-xs uppercase tracking-[0.3em]">Starlight Affairs</span>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
                            <div
                                key={active}
                                className="h-full bg-gold/70"
                                style={{
                                    animation: "progress 4s linear forwards",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {philosophies.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { goTo(i); stopAutoplay(); startAutoplay(); }}
                            className={`transition-all duration-300 rounded-full ${active === i ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Progress animation keyframes */}
            <style>{`
                @keyframes progress {
                    from { width: 0%; }
                    to   { width: 100%; }
                }
            `}</style>
        </section>
    );
}
