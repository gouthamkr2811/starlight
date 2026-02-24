"use client";

export default function ContactSection() {
    const whatsappUrl =
        "https://wa.me/917902210653?text=Hi%20Starlight%20Affairs%2C%20I%27d%20like%20to%20enquire%20about%20your%20event%20services.";

    return (
        <section id="contact" className="section-padding bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – info */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-gold text-xs uppercase tracking-[0.4em] mb-3">
                                Get in Touch
                            </p>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
                                Let&apos;s Create{" "}
                                <span className="gold-gradient-text italic">Magic</span>{" "}
                                Together
                            </h2>
                        </div>
                        <p className="text-white/50 leading-relaxed text-lg max-w-md">
                            Ready to begin crafting your unforgettable experience? Reach out
                            and let our team bring your vision to life.
                        </p>

                        {/* Contact details */}
                        <div className="space-y-5 pt-4">
                            {[
                                {
                                    icon: "✉",
                                    label: "Email",
                                    value: "hello@starlightaffairs.com",
                                },
                                {
                                    icon: "☎",
                                    label: "Phone",
                                    value: "+91 7902210653 / +91 7025039713",
                                },
                                {
                                    icon: "⌖",
                                    label: "Location",
                                    value: "Nadathara, Mannuthy, Kerala",
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4">
                                    <span className="text-gold text-xl w-8">{item.icon}</span>
                                    <div>
                                        <p className="text-white/30 text-xs uppercase tracking-widest">
                                            {item.label}
                                        </p>
                                        <p className="text-white/80 mt-0.5">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right – WhatsApp CTA */}
                    <div className="flex flex-col items-center justify-center bg-dark-2 border border-white/5 p-10 md:p-14 text-center space-y-8">
                        {/* WhatsApp icon */}
                        <div className="w-20 h-20 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-10 h-10"
                                fill="#25D366"
                            >
                                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.827.74 5.484 2.035 7.793L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.76-1.843l-.484-.287-5.002 1.194 1.245-4.876-.315-.5A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.87c-.398-.2-2.356-1.163-2.72-1.295-.365-.133-.63-.2-.896.2-.266.398-1.03 1.295-1.262 1.561-.232.266-.465.3-.863.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.057-1.982-2.362-2.214-2.76-.232-.398-.025-.613.175-.812.18-.18.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.2-.896-2.16-1.228-2.96-.323-.777-.651-.672-.896-.684l-.764-.013c-.266 0-.698.1-1.063.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.627 4.12c.2.266 2.808 4.287 6.803 6.015.952.41 1.694.655 2.273.838.955.304 1.824.261 2.511.158.766-.114 2.356-.963 2.689-1.894.333-.93.333-1.729.233-1.894-.1-.166-.365-.266-.763-.465z" />
                            </svg>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-serif text-2xl md:text-3xl text-white font-bold">
                                Chat With Us on WhatsApp
                            </h3>
                            <p className="text-white/50 max-w-xs mx-auto leading-relaxed">
                                Click below to start a conversation directly — we typically
                                reply within minutes.
                            </p>
                        </div>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold uppercase tracking-widest text-sm px-10 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5"
                                fill="currentColor"
                            >
                                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.827.74 5.484 2.035 7.793L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.2-2.356-1.163-2.72-1.295-.365-.133-.63-.2-.896.2-.266.398-1.03 1.295-1.262 1.561-.232.266-.465.3-.863.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.057-1.982-2.362-2.214-2.76-.232-.398-.025-.613.175-.812.18-.18.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.2-.896-2.16-1.228-2.96-.323-.777-.651-.672-.896-.684l-.764-.013c-.266 0-.698.1-1.063.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.627 4.12c.2.266 2.808 4.287 6.803 6.015.952.41 1.694.655 2.273.838.955.304 1.824.261 2.511.158.766-.114 2.356-.963 2.689-1.894.333-.93.333-1.729.233-1.894-.1-.166-.365-.266-.763-.465z" />
                            </svg>
                            Message Us on WhatsApp
                        </a>

                        <p className="text-white/25 text-xs tracking-widest uppercase">
                            +91 79022 10653
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
