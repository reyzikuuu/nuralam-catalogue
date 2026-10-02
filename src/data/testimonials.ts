/**
 * Testimonials & Shipment Proof Dataset
 * ─────────────────────────────────────────────────────────────────────
 * High-resolution shipment proofs and delivery documentation
 * hosted on Cloudinary (cloud: krhqqd69).
 * Layout: Pure visual proof gallery without PT / company names.
 */

export interface TestimonialItem {
  id: number;
  publicId: string;
  alt: string;
}

export const CLOUD_NAME = "krhqqd69";

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    publicId: "v1790922103/testimoni-01.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 01",
  },
  {
    id: 2,
    publicId: "v1790922103/testimoni-02.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 02",
  },
  {
    id: 3,
    publicId: "v1790922103/testimoni-03.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 03",
  },
  {
    id: 4,
    publicId: "v1790922103/testimoni-04.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 04",
  },
  {
    id: 5,
    publicId: "v1790922103/testimoni-05.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 05",
  },
  {
    id: 6,
    publicId: "v1790922103/testimoni-06.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 06",
  },
  {
    id: 7,
    publicId: "v1790922104/testimoni-07.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 07",
  },
  {
    id: 8,
    publicId: "v1790922104/testimoni-08.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 08",
  },
  {
    id: 9,
    publicId: "v1790922104/testimoni-09.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 09",
  },
  {
    id: 10,
    publicId: "v1790922104/testimoni-10.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 10",
  },
  {
    id: 11,
    publicId: "v1790922104/testimoni-11.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 11",
  },
  {
    id: 12,
    publicId: "v1790922104/testimoni-12.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 12",
  },
  {
    id: 13,
    publicId: "v1790922104/testimoni-13.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 13",
  },
  {
    id: 14,
    publicId: "v1790922109/testimoni-14.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 14",
  },
  {
    id: 15,
    publicId: "v1790922110/testimoni-15.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 15",
  },
  {
    id: 16,
    publicId: "v1790922103/testimoni-16.webp",
    alt: "Dokumentasi Bukti Pengiriman & Testimoni 16",
  },
];

/**
 * Cloudinary helper for testimonial image transformations
 */
export function getTestimoniUrl(
  publicId: string,
  variant: "thumb" | "full" = "thumb"
): string {
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  if (variant === "thumb") {
    // 600x600 square thumbnail optimized for crisp high-density display
    return `${base}/w_600,h_600,c_fill,f_auto,q_auto:good/${publicId}`;
  }
  // High-res for lightbox zoom
  return `${base}/w_1200,h_1200,c_limit,f_auto,q_auto:best/${publicId}`;
}
