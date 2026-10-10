export interface CatalogCategory {
  id: string;
  name: string;
  folder: string;
  description: string;
  color: string;
}

export interface CatalogPageItem {
  id: number;
  pageNumber: number;
  title: string;
  category: string;
  folder: string;
  fileName: string;
  publicId: string;
}

// ─── Configuration ────────────────────────────────
export const CLOUD_NAME = "krhqqd69";
export const ROOT_FOLDER = "";
export const WA_NUMBER = "6287875285840";
export const TOTAL_PAGES = 84;

// ─── Categories ───────────────────────────────────
export const CATEGORIES: CatalogCategory[] = [
  {
    id: "all",
    name: "Semua Halaman",
    folder: "",
    description: "Seluruh 84 halaman katalog lengkap",
    color: "#0071E3",
  },
  {
    id: "airless",
    name: "Airless Bottle",
    folder: "airless",
    description: "Botol airless & pump vacuum modern",
    color: "#2563EB",
  },
  {
    id: "parfum",
    name: "Parfum",
    folder: "parfum",
    description: "Botol parfum kaca, crimp, & spray fragrance",
    color: "#E11D48",
  },
  {
    id: "bottle-jar",
    name: "Bottle & Jar",
    folder: "bottle-jar",
    description: "Kombinasi botol & jar kemasan kosmetik",
    color: "#059669",
  },
  {
    id: "cap-bottle",
    name: "Cap & Bottle",
    folder: "cap-bottle",
    description: "Tutup botol, dropper, & aksesoris cap",
    color: "#D97706",
  },
  {
    id: "lipcream",
    name: "Lipcream",
    folder: "lipcream",
    description: "Kemasan lipcream, lipgloss, & wand",
    color: "#DB2777",
  },
  {
    id: "plastic-bottle",
    name: "Plastic Bottle",
    folder: "plastic-bottle",
    description: "Botol plastik PET / HDPE berbagai ukuran",
    color: "#7C3AED",
  },
  {
    id: "pot-cream",
    name: "Pot Cream",
    folder: "pot-cream",
    description: "Pot cream, jar akrilik, & wadah skincare",
    color: "#0D9488",
  },
];

// ─── Cloudinary Image URL Helper ──────────────────
export function getCloudinaryUrl(
  publicId?: string,
  transformation: "reader" | "zoom" | "thumb" | "grid" | "raw" = "reader"
): string {
  if (!publicId) return "";
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

  let transformParams = "f_auto,q_auto";
  if (transformation === "reader") {
    // Sharp web viewing, optimized payload ~150KB
    transformParams = "w_1200,c_limit,f_auto,q_auto:good";
  } else if (transformation === "zoom") {
    // Ultra high-res for reading mm specs on pinch zoom
    transformParams = "w_2000,c_limit,f_auto,q_auto:best";
  } else if (transformation === "thumb") {
    // Micro thumbnail ~10KB for 60fps scrolling
    transformParams = "w_300,c_limit,f_auto,q_auto:low";
  } else if (transformation === "grid") {
    // Grid overview cards ~20-30KB, crisp 2-4 column preview
    transformParams = "w_400,c_limit,f_auto,q_auto:good";
  }

  // If publicId already has an extension (.png, etc.), do not append .webp
  if (publicId.includes(".")) {
    return `${base}/${transformParams}/${publicId}`;
  }

  return `${base}/${transformParams}/${publicId}.webp`;
}

// Helper to generate Public ID
export function buildPublicId(folder: string, fileName: string): string {
  if (!folder) return fileName;
  return `${folder}/${fileName}`;
}

// ─── WhatsApp Link Generator ───────────────────────
export function getWhatsAppCatalogLink(pageNumber: number, pageTitle?: string): string {
  const titleText = pageTitle ? ` (${pageTitle})` : "";
  const message = `Halo Admin Nur Alam Packaging, saya tertarik dan ingin konsultasi harga/spesifikasi produk di *Katalog Halaman ${pageNumber}*${titleText}. Mohon informasi selengkapnya. Terima kasih!`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── 84 Catalog Pages Dataset ─────────────────────
export const CATALOG_PAGES: CatalogPageItem[] = [
  // ── Airless Bottle (2 pages) ──
  {
    "id": 1,
    "pageNumber": 1,
    "title": "Airless Bottle - Hal 1",
    "category": "airless",
    "folder": "airless",
    "fileName": "Catalog_Nuralam_Airless_1.0.png",
    "publicId": "Catalog_Nuralam_Airless_1.0.png"
  },
  {
    "id": 2,
    "pageNumber": 2,
    "title": "Airless Bottle - Hal 2",
    "category": "airless",
    "folder": "airless",
    "fileName": "Catalog_Nuralam_Airless_2.0.png",
    "publicId": "Catalog_Nuralam_Airless_2.0.png"
  },
  // ── Parfum (22 pages) ──
  {
    "id": 3,
    "pageNumber": 3,
    "title": "Parfum - Hal 1",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-01.png",
    "publicId": "nuralam-parfum-01.png"
  },
  {
    "id": 4,
    "pageNumber": 4,
    "title": "Parfum - Hal 2",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-02.png",
    "publicId": "nuralam-parfum-02.png"
  },
  {
    "id": 5,
    "pageNumber": 5,
    "title": "Parfum - Hal 3",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-03.png",
    "publicId": "nuralam-parfum-03.png"
  },
  {
    "id": 6,
    "pageNumber": 6,
    "title": "Parfum - Hal 4",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-04.png",
    "publicId": "nuralam-parfum-04.png"
  },
  {
    "id": 7,
    "pageNumber": 7,
    "title": "Parfum - Hal 5",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-05.png",
    "publicId": "nuralam-parfum-05.png"
  },
  {
    "id": 8,
    "pageNumber": 8,
    "title": "Parfum - Hal 6",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-06.png",
    "publicId": "nuralam-parfum-06.png"
  },
  {
    "id": 9,
    "pageNumber": 9,
    "title": "Parfum - Hal 7",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-07.png",
    "publicId": "nuralam-parfum-07.png"
  },
  {
    "id": 10,
    "pageNumber": 10,
    "title": "Parfum - Hal 8",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-08.png",
    "publicId": "nuralam-parfum-08.png"
  },
  {
    "id": 11,
    "pageNumber": 11,
    "title": "Parfum - Hal 9",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-09.png",
    "publicId": "nuralam-parfum-09.png"
  },
  {
    "id": 12,
    "pageNumber": 12,
    "title": "Parfum - Hal 10",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-10.png",
    "publicId": "nuralam-parfum-10.png"
  },
  {
    "id": 13,
    "pageNumber": 13,
    "title": "Parfum - Hal 11",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-11.png",
    "publicId": "nuralam-parfum-11.png"
  },
  {
    "id": 14,
    "pageNumber": 14,
    "title": "Parfum - Hal 12",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-12.png",
    "publicId": "nuralam-parfum-12.png"
  },
  {
    "id": 15,
    "pageNumber": 15,
    "title": "Parfum - Hal 13",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-13.png",
    "publicId": "nuralam-parfum-13.png"
  },
  {
    "id": 16,
    "pageNumber": 16,
    "title": "Parfum - Hal 14",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-14.png",
    "publicId": "nuralam-parfum-14.png"
  },
  {
    "id": 17,
    "pageNumber": 17,
    "title": "Parfum - Hal 15",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-15.png",
    "publicId": "nuralam-parfum-15.png"
  },
  {
    "id": 18,
    "pageNumber": 18,
    "title": "Parfum - Hal 16",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-16.png",
    "publicId": "nuralam-parfum-16.png"
  },
  {
    "id": 19,
    "pageNumber": 19,
    "title": "Parfum - Hal 17",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-17.png",
    "publicId": "nuralam-parfum-17.png"
  },
  {
    "id": 20,
    "pageNumber": 20,
    "title": "Parfum - Hal 18",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-18.png",
    "publicId": "nuralam-parfum-18.png"
  },
  {
    "id": 21,
    "pageNumber": 21,
    "title": "Parfum - Hal 19",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-19.png",
    "publicId": "nuralam-parfum-19.png"
  },
  {
    "id": 22,
    "pageNumber": 22,
    "title": "Parfum - Hal 20",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-20.png",
    "publicId": "nuralam-parfum-20.png"
  },
  {
    "id": 23,
    "pageNumber": 23,
    "title": "Parfum - Hal 21",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-21.png",
    "publicId": "nuralam-parfum-21.png"
  },
  {
    "id": 24,
    "pageNumber": 24,
    "title": "Parfum - Hal 22",
    "category": "parfum",
    "folder": "parfum",
    "fileName": "nuralam-parfum-22.png",
    "publicId": "nuralam-parfum-22.png"
  },
  // ── Bottle & Jar (5 pages) ──
  {
    "id": 25,
    "pageNumber": 25,
    "title": "Bottle & Jar - Hal 1",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_1.0.png",
    "publicId": "Catalog_Nuralam_Bottle_1.0.png"
  },
  {
    "id": 26,
    "pageNumber": 26,
    "title": "Bottle & Jar - Hal 2",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_2.0.png",
    "publicId": "Catalog_Nuralam_Bottle_2.0.png"
  },
  {
    "id": 27,
    "pageNumber": 27,
    "title": "Bottle & Jar - Hal 3",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_3.0.png",
    "publicId": "Catalog_Nuralam_Bottle_3.0.png"
  },
  {
    "id": 28,
    "pageNumber": 28,
    "title": "Bottle & Jar - Hal 4",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_4.0.png",
    "publicId": "Catalog_Nuralam_Bottle_4.0.png"
  },
  {
    "id": 29,
    "pageNumber": 29,
    "title": "Bottle & Jar - Hal 5",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_5.0.png",
    "publicId": "Catalog_Nuralam_Bottle_5.0.png"
  },
  // ── Cap & Bottle (14 pages) ──
  {
    "id": 30,
    "pageNumber": 30,
    "title": "Cap & Bottle - Hal 1",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_1.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_1.0.png"
  },
  {
    "id": 31,
    "pageNumber": 31,
    "title": "Cap & Bottle - Hal 2",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_2.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_2.0.png"
  },
  {
    "id": 32,
    "pageNumber": 32,
    "title": "Cap & Bottle - Hal 3",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_3.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_3.0.png"
  },
  {
    "id": 33,
    "pageNumber": 33,
    "title": "Cap & Bottle - Hal 4",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_4.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_4.0.png"
  },
  {
    "id": 34,
    "pageNumber": 34,
    "title": "Cap & Bottle - Hal 5",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_5.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_5.0.png"
  },
  {
    "id": 35,
    "pageNumber": 35,
    "title": "Cap & Bottle - Hal 6",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_6.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_6.0.png"
  },
  {
    "id": 36,
    "pageNumber": 36,
    "title": "Cap & Bottle - Hal 7",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_7.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_7.0.png"
  },
  {
    "id": 37,
    "pageNumber": 37,
    "title": "Cap & Bottle - Hal 8",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_8.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_8.0.png"
  },
  {
    "id": 38,
    "pageNumber": 38,
    "title": "Cap & Bottle - Hal 9",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_9.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_9.0.png"
  },
  {
    "id": 39,
    "pageNumber": 39,
    "title": "Cap & Bottle - Hal 10",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_10.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_10.png"
  },
  {
    "id": 40,
    "pageNumber": 40,
    "title": "Cap & Bottle - Hal 11",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_11.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_11.png"
  },
  {
    "id": 41,
    "pageNumber": 41,
    "title": "Cap & Bottle - Hal 12",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_12.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_12.png"
  },
  {
    "id": 42,
    "pageNumber": 42,
    "title": "Cap & Bottle - Hal 13",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_13.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_13.png"
  },
  {
    "id": 43,
    "pageNumber": 43,
    "title": "Cap & Bottle - Hal 14",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_14.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_14.png"
  },
  // ── Lipcream (4 pages) ──
  {
    "id": 44,
    "pageNumber": 44,
    "title": "Lipcream - Hal 1",
    "category": "lipcream",
    "folder": "lipcream",
    "fileName": "Catalog_Nuralam_Lipcream_1.0.png",
    "publicId": "Catalog_Nuralam_Lipcream_1.0.png"
  },
  {
    "id": 45,
    "pageNumber": 45,
    "title": "Lipcream - Hal 2",
    "category": "lipcream",
    "folder": "lipcream",
    "fileName": "Catalog_Nuralam_Lipcream_2.0.png",
    "publicId": "Catalog_Nuralam_Lipcream_2.0.png"
  },
  {
    "id": 46,
    "pageNumber": 46,
    "title": "Lipcream - Hal 3",
    "category": "lipcream",
    "folder": "lipcream",
    "fileName": "Catalog_Nuralam_Lipcream_3.0.png",
    "publicId": "Catalog_Nuralam_Lipcream_3.0.png"
  },
  {
    "id": 47,
    "pageNumber": 47,
    "title": "Lipcream - Hal 4",
    "category": "lipcream",
    "folder": "lipcream",
    "fileName": "Catalog_Nuralam_Lipcream_4.0.png",
    "publicId": "Catalog_Nuralam_Lipcream_4.0.png"
  },
  // ── Plastic Bottle (19 pages) ──
  {
    "id": 48,
    "pageNumber": 48,
    "title": "Plastic Bottle - Hal 1",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_1.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_1.0.png"
  },
  {
    "id": 49,
    "pageNumber": 49,
    "title": "Plastic Bottle - Hal 2",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_2.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_2.0.png"
  },
  {
    "id": 50,
    "pageNumber": 50,
    "title": "Plastic Bottle - Hal 3",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_3.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_3.0.png"
  },
  {
    "id": 51,
    "pageNumber": 51,
    "title": "Plastic Bottle - Hal 4",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_4.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_4.0.png"
  },
  {
    "id": 52,
    "pageNumber": 52,
    "title": "Plastic Bottle - Hal 5",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_5.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_5.0.png"
  },
  {
    "id": 53,
    "pageNumber": 53,
    "title": "Plastic Bottle - Hal 6",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_6.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_6.0.png"
  },
  {
    "id": 54,
    "pageNumber": 54,
    "title": "Plastic Bottle - Hal 7",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_7.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_7.0.png"
  },
  {
    "id": 55,
    "pageNumber": 55,
    "title": "Plastic Bottle - Hal 8",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_8.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_8.0.png"
  },
  {
    "id": 56,
    "pageNumber": 56,
    "title": "Plastic Bottle - Hal 9",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_9.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_9.0.png"
  },
  {
    "id": 57,
    "pageNumber": 57,
    "title": "Plastic Bottle - Hal 10",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_10.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_10.png"
  },
  {
    "id": 58,
    "pageNumber": 58,
    "title": "Plastic Bottle - Hal 11",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_11.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_11.png"
  },
  {
    "id": 59,
    "pageNumber": 59,
    "title": "Plastic Bottle - Hal 12",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_12.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_12.png"
  },
  {
    "id": 60,
    "pageNumber": 60,
    "title": "Plastic Bottle - Hal 13",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_13.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_13.png"
  },
  {
    "id": 61,
    "pageNumber": 61,
    "title": "Plastic Bottle - Hal 14",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_14.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_14.png"
  },
  {
    "id": 62,
    "pageNumber": 62,
    "title": "Plastic Bottle - Hal 15",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_15.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_15.png"
  },
  {
    "id": 63,
    "pageNumber": 63,
    "title": "Plastic Bottle - Hal 16",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_16.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_16.png"
  },
  {
    "id": 64,
    "pageNumber": 64,
    "title": "Plastic Bottle - Hal 17",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_17.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_17.png"
  },
  {
    "id": 65,
    "pageNumber": 65,
    "title": "Plastic Bottle - Hal 18",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_18.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_18.png"
  },
  {
    "id": 66,
    "pageNumber": 66,
    "title": "Plastic Bottle - Hal 19",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_19.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_19.png"
  },
  // ── Pot Cream (18 pages) ──
  {
    "id": 67,
    "pageNumber": 67,
    "title": "Pot Cream - Hal 1",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_1.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_1.0.png"
  },
  {
    "id": 68,
    "pageNumber": 68,
    "title": "Pot Cream - Hal 2",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_2.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_2.0.png"
  },
  {
    "id": 69,
    "pageNumber": 69,
    "title": "Pot Cream - Hal 3",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_3.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_3.0.png"
  },
  {
    "id": 70,
    "pageNumber": 70,
    "title": "Pot Cream - Hal 4",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_4.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_4.0.png"
  },
  {
    "id": 71,
    "pageNumber": 71,
    "title": "Pot Cream - Hal 5",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_5.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_5.0.png"
  },
  {
    "id": 72,
    "pageNumber": 72,
    "title": "Pot Cream - Hal 6",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_6.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_6.0.png"
  },
  {
    "id": 73,
    "pageNumber": 73,
    "title": "Pot Cream - Hal 7",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_7.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_7.0.png"
  },
  {
    "id": 74,
    "pageNumber": 74,
    "title": "Pot Cream - Hal 8",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_8.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_8.0.png"
  },
  {
    "id": 75,
    "pageNumber": 75,
    "title": "Pot Cream - Hal 9",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_9.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_9.0.png"
  },
  {
    "id": 76,
    "pageNumber": 76,
    "title": "Pot Cream - Hal 10",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_10.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_10.png"
  },
  {
    "id": 77,
    "pageNumber": 77,
    "title": "Pot Cream - Hal 11",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_11.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_11.png"
  },
  {
    "id": 78,
    "pageNumber": 78,
    "title": "Pot Cream - Hal 12",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_12.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_12.png"
  },
  {
    "id": 79,
    "pageNumber": 79,
    "title": "Pot Cream - Hal 13",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_13.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_13.png"
  },
  {
    "id": 80,
    "pageNumber": 80,
    "title": "Pot Cream - Hal 14",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_14.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_14.png"
  },
  {
    "id": 81,
    "pageNumber": 81,
    "title": "Pot Cream - Hal 15",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_15.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_15.png"
  },
  {
    "id": 82,
    "pageNumber": 82,
    "title": "Pot Cream - Hal 16",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_16.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_16.png"
  },
  {
    "id": 83,
    "pageNumber": 83,
    "title": "Pot Cream - Hal 17",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_17.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_17.png"
  },
  {
    "id": 84,
    "pageNumber": 84,
    "title": "Pot Cream - Hal 18",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_18.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_18.png"
  }
];
