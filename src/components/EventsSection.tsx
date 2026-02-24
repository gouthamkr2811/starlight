"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const events = [
    {
        title: "Royal Wedding",
        description:
            "A fairytale union adorned with florals, candlelight, and timeless elegance.",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
        tag: "Wedding",
    },
    {
        title: "Corporate Gala",
        description:
            "Sophisticated soirées that blend business prestige with luxury entertainment.",
        image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
        tag: "Corporate",
    },
    {
        title: "Birthday Bash",
        description:
            "Vibrant, personalised birthday celebrations crafted around your personality.",
        image:
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
        tag: "Birthday",
    },
    {
        title: "Engagement Party",
        description:
            "Intimate gatherings that celebrate love with style, warmth and finesse.",
        image:
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
        tag: "Engagement",
    },
    {
        title: "Award Night",
        description:
            "Grand ceremonies honouring excellence with red-carpet flair and prestige.",
        image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
        tag: "Awards",
    },
    {
        title: "Private Luxury Dinner",
        description:
            "Exclusive dining experiences with curated menus in breath-taking settings.",
        image:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        tag: "Dining",
    },
];

export default function EventsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let ctx: any;
        const initGSAP = async () => {
            const gsap = (await import("gsap")).default;
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                cardsRef.current.forEach((card, i) => {
                    if (!card) return;
                    gsap.fromTo(
                        card,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.9,
                            ease: "power3.out",
                            delay: (i % 3) * 0.15,
                            scrollTrigger: {
                                trigger: card,
                                start: "top 88%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                });
            });
        };

        initGSAP();
        return () => ctx?.revert();
    }, []);

    return (
        <section id="events" ref={sectionRef} className="section-padding bg-dark">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">
                        What We Offer
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        Our <span className="gold-gradient-text italic">Events</span>
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {events.map((event, i) => (
                        <div
                            key={event.title}
                            ref={(el) => {
                                if (el) cardsRef.current[i] = el;
                            }}
                            className="group relative overflow-hidden bg-dark-2 border border-white/5 hover:border-gold/40 transition-all duration-500 cursor-pointer"
                            style={{ opacity: 0 }}
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-2 via-transparent to-transparent" />
                                {/* Tag */}
                                <span className="absolute top-4 left-4 px-3 py-1 bg-dark/80 border border-gold/50 text-gold text-xs uppercase tracking-widest">
                                    {event.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                                    {event.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {event.description}
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-gold text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                                    <span>Discover</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
