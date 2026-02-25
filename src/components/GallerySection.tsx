"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { homepageImages, encode } from "@/lib/galleryImages";

export default function GallerySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const desktopItemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let ctx: any;
        const initGSAP = async () => {
            const gsap = (await import("gsap")).default;
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                desktopItemsRef.current.forEach((el, i) => {
                    if (!el) return;
                    gsap.fromTo(
                        el,
                        { opacity: 0, scale: 0.95 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            delay: (i % 3) * 0.1,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 92%",
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
        <section
            id="gallery"
            ref={sectionRef}
            className="section-padding bg-dark-2"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">
                        Our Portfolio
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        Event <span className="gold-gradient-text italic">Gallery</span>
                    </h2>
                </div>

                {/* Mobile: 2-col uniform square grid — no GSAP, always visible */}
                <div className="grid grid-cols-2 gap-2 md:hidden">
                    {homepageImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden aspect-square"
                        >
                            <Image
                                src={encode(img.file)}
                                alt={img.alt}
                                fill
                                quality={90}
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-dark/20" />
                        </div>
                    ))}
                </div>

                {/* Desktop: masonry-style grid with row-span + GSAP */}
                <div className="hidden md:grid md:grid-cols-3 auto-rows-[220px] gap-4">
                    {homepageImages.map((img, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) desktopItemsRef.current[i] = el;
                            }}
                            className={`relative overflow-hidden group cursor-pointer ${img.span ?? ""}`}
                            style={{ opacity: 0 }}
                        >
                            <Image
                                src={encode(img.file)}
                                alt={img.alt}
                                fill
                                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                sizes="33vw"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-gold border border-gold px-4 py-2 text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-dark transition-all duration-500 group"
                    >
                        View Full Gallery
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
