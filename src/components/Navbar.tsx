"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Events", href: "#events" },
        { label: "Gallery", href: "#gallery" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/50"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#hero"
                    className="font-serif text-xl md:text-2xl font-bold gold-gradient-text tracking-wide"
                >
                    ✦ Starlight Affairs
                </Link>

                {/* Desktop nav links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-sm uppercase tracking-widest text-white/70 hover:text-gold transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-dark transition-all duration-300"
                >
                    Book Now
                </a>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                        className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-dark-2/98 backdrop-blur-md`}
            >
                <ul className="flex flex-col py-4 px-6 gap-4">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="block text-sm uppercase tracking-widest text-white/70 hover:text-gold transition-colors py-2"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="inline-block px-5 py-2 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-dark transition-all duration-300 mt-2"
                        >
                            Book Now
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
