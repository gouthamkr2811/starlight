import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starlight Affairs | Crafting Unforgettable Moments",
  description:
    "Starlight Affairs designs magical event experiences — from royal weddings to corporate galas. Elegance, luxury, and perfection in every detail.",
  keywords:
    "event management, luxury events, weddings, corporate gala, Starlight Affairs",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Starlight Affairs | Crafting Unforgettable Moments",
    description:
      "We design magical experiences tailored to your dreams. From weddings to corporate galas.",
    type: "website",
    url: "https://starlightaffairs.com",
    siteName: "Starlight Affairs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Starlight Affairs | Crafting Unforgettable Moments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starlight Affairs | Crafting Unforgettable Moments",
    description:
      "We design magical experiences tailored to your dreams. From weddings to corporate galas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
