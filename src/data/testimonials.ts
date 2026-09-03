/**
 * Testimonials & Shipment Proof Dataset
 * ─────────────────────────────────────────────────────────────────────
 * High-resolution shipment and invoice proofs hosted on Cloudinary
 * Folder: 'nuralam-shipment-testimoni' (publicId: pt-*.png)
 */

export interface TestimonialItem {
  id: number;
  client: string;
  clientShort: string;
  type: string;
  location: string;
  publicId: string;
  badge: string;
}

export const CLOUD_NAME = "krhqqd69";

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    client: "PT ADA Kosmetik",
    clientShort: "ADA Kosmetik",
    type: "Pengiriman Botol & Jar Kosmetik",
    location: "Surabaya, Jawa Timur",
    publicId: "pt-ada-kosmetik-01.png",
    badge: "Verified Delivery",
  },
  {
    id: 2,
    client: "PT ADA Kosmetik",
    clientShort: "ADA Kosmetik",
    type: "Resi Ekspedisi & Invoice Resmi",
    location: "Surabaya, Jawa Timur",
    publicId: "pt-ada-kosmetik-02.png",
    badge: "Invoice Terbit",
  },
  {
    id: 3,
    client: "PT ADA Kosmetik",
    clientShort: "ADA Kosmetik",
    type: "Dokumentasi Muat Ekspedisi Kargo",
    location: "Surabaya, Jawa Timur",
    publicId: "pt-ada-kosmetik-03.png",
    badge: "Cargo Shipped",
  },
  {
    id: 4,
    client: "PT ADA Kosmetik",
    clientShort: "ADA Kosmetik",
    type: "Quality Check & Packing Kayu Aman",
    location: "Surabaya, Jawa Timur",
    publicId: "pt-ada-kosmetik-04.png",
    badge: "QC Passed",
  },
  {
    id: 5,
    client: "PT ALFA VIKTORI FAMILIA",
    clientShort: "Alfa Viktori",
    type: "Pengiriman Kemasan Skincare Premium",
    location: "Jakarta Barat, DKI Jakarta",
    publicId: "pt-alfa-viktori-familia-01.png",
    badge: "Verified Delivery",
  },
  {
    id: 6,
    client: "PT ALFA VIKTORI FAMILIA",
    clientShort: "Alfa Viktori",
    type: "Resi Kargo & Bukti Timbang Barang",
    location: "Jakarta Barat, DKI Jakarta",
    publicId: "pt-alfa-viktori-familia-02.png",
    badge: "Resi Resmi",
  },
  {
    id: 7,
    client: "PT ALFA VIKTORI FAMILIA",
    clientShort: "Alfa Viktori",
    type: "Pengiriman Botol Serum & Dropper",
    location: "Jakarta Barat, DKI Jakarta",
    publicId: "pt-alfa-viktori-familia-03.png",
    badge: "Cargo Shipped",
  },
  {
    id: 8,
    client: "PT ALFA VIKTORI FAMILIA",
    clientShort: "Alfa Viktori",
    type: "Serah Terima Ekspedisi Logistik",
    location: "Jakarta Barat, DKI Jakarta",
    publicId: "pt-alfa-viktori-familia-04.png",
    badge: "Order Completed",
  },
  {
    id: 9,
    client: "PT Brigit Biofarma Teknologi",
    clientShort: "Brigit Biofarma",
    type: "Pengiriman Kemasan Farmasi & Herbal",
    location: "Bandung, Jawa Barat",
    publicId: "pt-brigit-biofarma-01.png",
    badge: "Verified Delivery",
  },
  {
    id: 10,
    client: "PT Brigit Biofarma Teknologi",
    clientShort: "Brigit Biofarma",
    type: "Invoice Pengiriman & Surat Jalan",
    location: "Bandung, Jawa Barat",
    publicId: "pt-brigit-biofarma-02.png",
    badge: "Invoice Terbit",
  },
  {
    id: 11,
    client: "PT Brigit Biofarma Teknologi",
    clientShort: "Brigit Biofarma",
    type: "Packaging Botol Spray & Pipet",
    location: "Bandung, Jawa Barat",
    publicId: "pt-brigit-biofarma-03.png",
    badge: "QC Passed",
  },
  {
    id: 12,
    client: "PT NUR IMAN",
    clientShort: "Nur Iman",
    type: "Pengiriman Pot Cream & Jar Kosmetik",
    location: "DI Yogyakarta",
    publicId: "pt-nur-iman-01.png",
    badge: "Verified Delivery",
  },
  {
    id: 13,
    client: "PT NUR IMAN",
    clientShort: "Nur Iman",
    type: "Dokumentasi Muat Truk Ekspedisi",
    location: "DI Yogyakarta",
    publicId: "pt-nur-iman-02.png",
    badge: "Cargo Shipped",
  },
  {
    id: 14,
    client: "PT NUR IMAN",
    clientShort: "Nur Iman",
    type: "Resi Pengiriman Kargo Darat",
    location: "DI Yogyakarta",
    publicId: "pt-nur-iman-03.png",
    badge: "Resi Resmi",
  },
  {
    id: 15,
    client: "PT NUR IMAN",
    clientShort: "Nur Iman",
    type: "Penerimaan Kemasan di Pabrik Klien",
    location: "DI Yogyakarta",
    publicId: "pt-nur-iman-04.png",
    badge: "Order Completed",
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
    // 500x500 square thumbnail optimized for marquee performance (~30-40KB)
    return `${base}/w_500,h_500,c_fill,f_auto,q_auto:good/${publicId}`;
  }
  // High-res for lightbox zoom
  return `${base}/w_1200,h_1200,c_limit,f_auto,q_auto:best/${publicId}`;
}
