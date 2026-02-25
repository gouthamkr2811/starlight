"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { allGalleryImages, encode } from "@/lib/galleryImages";

export default function GalleryPage() {
    const [lightbox, setLightbox] = useState<number | null>(null);

    const open = (i: number) => setLightbox(i);
    const close = () => setLightbox(null);
    const prev = useCallback(() =>
        setLightbox((i) => (i !== null ? (i - 1 + allGalleryImages.length) % allGalleryImages.length : null)),
        []
    );
    const next = useCallback(() =>
        setLightbox((i) => (i !== null ? (i + 1) % allGalleryImages.length : null)),
        []
    );

    return (
        <main className="min-h-screen bg-dark pt-8 pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back button */}
                <div className="mb-8">
                    <Link
                        href="/#gallery"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm uppercase tracking-widest transition-colors duration-300"
                    >
                        <span>←</span>
                        <span>Back to Home</span>
                    </Link>
                </div>

                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">
                        Our Portfolio
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Full{" "}
                        <span className="gold-gradient-text italic">Gallery</span>
                    </h1>
                    <p className="text-white/40 mt-4 text-sm tracking-widest uppercase">
                        {allGalleryImages.length} Moments Captured
                    </p>
                    {/* Gold divider */}
                    <span className="block mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                    {allGalleryImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden aspect-square group cursor-pointer"
                            onClick={() => open(i)}
                        >
                            <Image
                                src={encode(img.file)}
                                alt={img.alt}
                                fill
                                quality={90}
                                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    <svg
                                        className="w-6 h-6 text-gold"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                                        />
                                    </svg>
                                    <span className="text-gold text-[10px] uppercase tracking-widest">View</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-white/30 text-sm mb-6 uppercase tracking-widest">
                        Love what you see?
                    </p>
                    <a
                        href="https://wa.me/917902210653?text=Hi%20Starlight%20Affairs%2C%20I%27d%20like%20to%20enquire%20about%20your%20event%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-dark transition-all duration-500"
                    >
                        Plan Your Event
                        <span>→</span>
                    </a>
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={close}
                >
                    {/* Close */}
                    <button
                        className="absolute top-5 right-5 text-white/60 hover:text-gold text-3xl leading-none transition-colors duration-200 z-10"
                        onClick={close}
                    >
                        ×
                    </button>

                    {/* Prev */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold text-4xl leading-none transition-colors duration-200 z-10 px-3 py-2"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                    >
                        ‹
                    </button>

                    {/* Image */}
                    <div
                        className="relative w-full max-w-4xl h-[70vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={encode(allGalleryImages[lightbox].file)}
                            alt={allGalleryImages[lightbox].alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* Next */}
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold text-4xl leading-none transition-colors duration-200 z-10 px-3 py-2"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                    >
                        ›
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-widest">
                        {lightbox + 1} / {allGalleryImages.length}
                    </div>
                </div>
            )}
        </main>
    );
}
