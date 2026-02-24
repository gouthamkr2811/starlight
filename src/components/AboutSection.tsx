"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let ctx: any;
        const initGSAP = async () => {
            const gsap = (await import("gsap")).default;
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                gsap.fromTo(
                    imageRef.current,
                    { opacity: 0, x: -60 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none none",
                        },
                    }
                );

                gsap.fromTo(
                    contentRef.current,
                    { opacity: 0, x: 60 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none none",
                        },
                    }
                );

                gsap.fromTo(
                    lineRef.current,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
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
            id="about"
            ref={sectionRef}
            className="section-padding bg-dark-2"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section label */}
                <div className="text-center mb-16">
                    <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">
                        Our Story
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        About <span className="gold-gradient-text italic">Us</span>
                    </h2>
                    <span
                        ref={lineRef}
                        className="block mx-auto mt-4 h-px w-24 bg-gold origin-left"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left – image */}
                    <div ref={imageRef} className="relative" style={{ opacity: 0 }}>
                        <div className="relative h-[480px] w-full overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                                alt="Luxury event decoration"
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                        </div>
                        {/* Decorative frame */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/40 pointer-events-none" />
                        <div className="absolute -top-4 -left-4 w-20 h-20 border border-gold/20 pointer-events-none" />
                    </div>

                    {/* Right – content */}
                    <div ref={contentRef} className="space-y-6" style={{ opacity: 0 }}>
                        <p className="text-gold text-xs uppercase tracking-[0.3em]">
                            ✦ &nbsp; Est. 2015 &nbsp; ✦
                        </p>
                        <h3 className="font-serif text-3xl md:text-4xl text-white leading-snug">
                            Where Dreams{" "}
                            <span className="gold-gradient-text italic">Become</span> Reality
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed">
                            At Starlight Affairs, we design magical experiences tailored to
                            your dreams. From weddings to corporate galas, we bring elegance
                            and creativity together.
                        </p>
                        <p className="text-white/50 leading-relaxed">
                            With over a decade of experience crafting extraordinary events, our
                            team of passionate designers and coordinators work tirelessly to
                            ensure every detail reflects your unique vision and exceeds your
                            expectations.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                            {[
                                { value: "500+", label: "Events" },
                                { value: "10+", label: "Years" },
                                { value: "98%", label: "Happy Clients" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="font-serif text-3xl font-bold gold-gradient-text">
                                        {stat.value}
                                    </p>
                                    <p className="text-white/40 text-sm uppercase tracking-widest mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
