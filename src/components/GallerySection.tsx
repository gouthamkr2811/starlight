"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Using your local event images from public/images/event
// Files with spaces/parentheses must be URL-encoded for Next.js <Image>
const encode = (name: string) =>
    `/images/event/${encodeURIComponent(name)}`;

const galleryImages = [
    { file: "WhatsApp Image 2026-02-22 at 19.27.35.jpeg", span: "row-span-2", alt: "Event highlight" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.39.jpeg", span: "", alt: "Event decoration" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.40.jpeg", span: "", alt: "Celebration setup" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.41.jpeg", span: "row-span-2", alt: "Grand event" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.42.jpeg", span: "", alt: "Luxury moment" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.43.jpeg", span: "", alt: "Event styling" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.44.jpeg", span: "row-span-2", alt: "Premium event" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.46.jpeg", span: "", alt: "Floral decor" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.47.jpeg", span: "", alt: "Night celebration" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.48.jpeg", span: "", alt: "Table setting" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.50.jpeg", span: "", alt: "Event ambiance" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.51.jpeg", span: "", alt: "Special occasion" },
];

export default function GallerySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let ctx: any;
        const initGSAP = async () => {
            const gsap = (await import("gsap")).default;
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                itemsRef.current.forEach((el, i) => {
                    if (!el) return;
                    gsap.fromTo(
                        el,
                        { opacity: 0, scale: 0.9 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            delay: (i % 3) * 0.1,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%",
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
                <div className="text-center mb-16">
                    <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">
                        Our Portfolio
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        Event <span className="gold-gradient-text italic">Gallery</span>
                    </h2>
                </div>

                {/* Masonry-style grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-3 md:gap-4">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) itemsRef.current[i] = el;
                            }}
                            className={`relative overflow-hidden group cursor-pointer ${img.span}`}
                            style={{ opacity: 0 }}
                        >
                            <Image
                                src={encode(img.file)}
                                alt={img.alt}
                                fill
                                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                                <span className="text-gold border border-gold px-4 py-2 text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
