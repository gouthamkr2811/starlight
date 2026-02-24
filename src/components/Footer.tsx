"use client";

export default function Footer() {
    const socials = [
        {
            name: "Instagram",
            href: "https://instagram.com",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://facebook.com",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
        },
        {
            name: "Twitter / X",
            href: "https://twitter.com",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="bg-dark-2 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <p className="font-serif text-2xl font-bold gold-gradient-text">
                            ✦ Starlight Affairs
                        </p>
                        <p className="text-white/30 text-sm mt-1 tracking-wider">
                            Crafting Unforgettable Moments
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {["Home", "About", "Events", "Gallery", "Contact"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white/40 text-xs uppercase tracking-widest hover:text-gold transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.name}
                                className="text-white/40 hover:text-gold border border-white/10 hover:border-gold p-2.5 transition-all duration-300"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 mb-6 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-white/25 text-xs uppercase tracking-widest">
                        © {new Date().getFullYear()} Starlight Affairs. All rights
                        reserved. Crafted with passion.
                    </p>
                </div>
            </div>
        </footer>
    );
}
