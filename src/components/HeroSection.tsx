"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let ctx: any;
        const initGSAP = async () => {
            const gsap = (await import("gsap")).default;

            ctx = gsap.context(() => {
                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

                tl.fromTo(
                    overlayRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 1.2 }
                )
                    .fromTo(
                        headingRef.current,
                        { opacity: 0, y: 80, clipPath: "inset(100% 0 0 0)" },
                        { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1.4 },
                        "-=0.6"
                    )
                    .fromTo(
                        subRef.current,
                        { opacity: 0, y: 40 },
                        { opacity: 1, y: 0, duration: 1 },
                        "-=0.8"
                    )
                    .fromTo(
                        btnRef.current,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.8 },
                        "-=0.6"
                    );
            });
        };

        initGSAP();
        return () => ctx?.revert();
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background image */}
            <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80"
                alt="Luxury event setup"
                fill
                priority
                className="object-cover object-center scale-105"
                sizes="100vw"
            />

            {/* Gradient overlays */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40" />

            {/* Decorative lines */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60 hidden lg:block" />
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60 hidden lg:block" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <p className="text-gold text-sm uppercase tracking-[0.4em] mb-6 font-light">
                    ✦ &nbsp; Premium Event Management &nbsp; ✦
                </p>

                <h1
                    ref={headingRef}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                    style={{ opacity: 0 }}
                >
                    Starlight{" "}
                    <span className="gold-gradient-text italic">Affairs</span>
                </h1>

                <p
                    ref={subRef}
                    className="text-lg md:text-2xl text-white/70 font-light tracking-wide mb-10 max-w-xl mx-auto"
                    style={{ opacity: 0 }}
                >
                    Crafting Unforgettable Moments
                </p>

                <a
                    ref={btnRef}
                    href="#events"
                    className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-dark transition-all duration-500 group"
                    style={{ opacity: 0 }}
                >
                    Explore Events
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
            </div>
        </section>
    );
}
