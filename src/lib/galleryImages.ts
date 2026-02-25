export const encode = (name: string) =>
    `/images/event/${encodeURIComponent(name)}`;

export interface GalleryImage {
    file: string;
    alt: string;
    span?: string; // used only in homepage masonry
}

// First 12 shown on homepage (with masonry spans)
export const homepageImages: GalleryImage[] = [
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

// All 54 images shown on full gallery page
export const allGalleryImages: GalleryImage[] = [
    { file: "WhatsApp Image 2026-02-22 at 19.27.35.jpeg", alt: "Event highlight" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.39.jpeg", alt: "Event decoration" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.39 (1).jpeg", alt: "Event decoration 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.40.jpeg", alt: "Celebration setup" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.40 (1).jpeg", alt: "Celebration setup 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.41.jpeg", alt: "Grand event" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.42.jpeg", alt: "Luxury moment" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.42 (1).jpeg", alt: "Luxury moment 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.42 (2).jpeg", alt: "Luxury moment 3" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.43.jpeg", alt: "Event styling" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.43 (1).jpeg", alt: "Event styling 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.43 (2).jpeg", alt: "Event styling 3" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.44.jpeg", alt: "Premium event" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.44 (1).jpeg", alt: "Premium event 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.46.jpeg", alt: "Floral decor" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.46 (1).jpeg", alt: "Floral decor 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.47.jpeg", alt: "Night celebration" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.47 (1).jpeg", alt: "Night celebration 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.48.jpeg", alt: "Table setting" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.48 (1).jpeg", alt: "Table setting 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.50.jpeg", alt: "Event ambiance" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.50 (1).jpeg", alt: "Event ambiance 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.50 (2).jpeg", alt: "Event ambiance 3" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.51.jpeg", alt: "Special occasion" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.52.jpeg", alt: "Elegant setup" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.55.jpeg", alt: "Starlight moment" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.55 (1).jpeg", alt: "Starlight moment 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.56.jpeg", alt: "Event glow" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.56 (1).jpeg", alt: "Event glow 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.56 (2).jpeg", alt: "Event glow 3" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.57.jpeg", alt: "Luxury dinner" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.58.jpeg", alt: "Grand decoration" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.59.jpeg", alt: "Royal setup" },
    { file: "WhatsApp Image 2026-02-22 at 19.27.59 (1).jpeg", alt: "Royal setup 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.28.00.jpeg", alt: "Premium staging" },
    { file: "WhatsApp Image 2026-02-22 at 19.28.00 (1).jpeg", alt: "Premium staging 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.28.01.jpeg", alt: "Gala night" },
    { file: "WhatsApp Image 2026-02-22 at 19.28.01 (1).jpeg", alt: "Gala night 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.28.01 (2).jpeg", alt: "Gala night 3" },
    { file: "WhatsApp Image 2026-02-22 at 19.28.02.jpeg", alt: "Grand finale" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.11.jpeg", alt: "Ceremony decor" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.13.jpeg", alt: "Milestone event" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.13 (1).jpeg", alt: "Milestone event 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.22.jpeg", alt: "Stage setup" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.22 (1).jpeg", alt: "Stage setup 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.24.jpeg", alt: "Award ceremony" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.24 (1).jpeg", alt: "Award ceremony 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.25.jpeg", alt: "Celebration lights" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.27.jpeg", alt: "Luxury candlelight" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.30.jpeg", alt: "Floral arrangement" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.32.jpeg", alt: "Enchanted evening" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.33.jpeg", alt: "Gold accents" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.33 (1).jpeg", alt: "Gold accents 2" },
    { file: "WhatsApp Image 2026-02-22 at 19.29.33 (2).jpeg", alt: "Gold accents 3" },
];
