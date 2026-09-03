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
export const TOTAL_PAGES = 65;

// ─── Categories ───────────────────────────────────
export const CATEGORIES: CatalogCategory[] = [
  {
    id: "all",
    name: "Semua Halaman",
    folder: "",
    description: "Seluruh 65 halaman katalog lengkap",
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

// ─── 65 Catalog Pages Dataset ─────────────────────
export const CATALOG_PAGES: CatalogPageItem[] = [
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
    "title": "Bottle & Jar - Hal 1",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_1.0.png",
    "publicId": "Catalog_Nuralam_Bottle_1.0.png"
  },
  {
    "id": 7,
    "pageNumber": 7,
    "title": "Bottle & Jar - Hal 2",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_2.0.png",
    "publicId": "Catalog_Nuralam_Bottle_2.0.png"
  },
  {
    "id": 8,
    "pageNumber": 8,
    "title": "Bottle & Jar - Hal 3",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_3.0.png",
    "publicId": "Catalog_Nuralam_Bottle_3.0.png"
  },
  {
    "id": 9,
    "pageNumber": 9,
    "title": "Bottle & Jar - Hal 4",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_4.0.png",
    "publicId": "Catalog_Nuralam_Bottle_4.0.png"
  },
  {
    "id": 10,
    "pageNumber": 10,
    "title": "Bottle & Jar - Hal 5",
    "category": "bottle-jar",
    "folder": "bottle-jar",
    "fileName": "Catalog_Nuralam_Bottle_5.0.png",
    "publicId": "Catalog_Nuralam_Bottle_5.0.png"
  },
  {
    "id": 11,
    "pageNumber": 11,
    "title": "Cap & Bottle - Hal 1",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_1.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_1.0.png"
  },
  {
    "id": 12,
    "pageNumber": 12,
    "title": "Cap & Bottle - Hal 2",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_2.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_2.0.png"
  },
  {
    "id": 13,
    "pageNumber": 13,
    "title": "Cap & Bottle - Hal 3",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_3.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_3.0.png"
  },
  {
    "id": 14,
    "pageNumber": 14,
    "title": "Cap & Bottle - Hal 4",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_4.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_4.0.png"
  },
  {
    "id": 15,
    "pageNumber": 15,
    "title": "Cap & Bottle - Hal 5",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_5.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_5.0.png"
  },
  {
    "id": 16,
    "pageNumber": 16,
    "title": "Cap & Bottle - Hal 6",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_6.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_6.0.png"
  },
  {
    "id": 17,
    "pageNumber": 17,
    "title": "Cap & Bottle - Hal 7",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_7.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_7.0.png"
  },
  {
    "id": 18,
    "pageNumber": 18,
    "title": "Cap & Bottle - Hal 8",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_8.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_8.0.png"
  },
  {
    "id": 19,
    "pageNumber": 19,
    "title": "Cap & Bottle - Hal 9",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_9.0.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_9.0.png"
  },
  {
    "id": 20,
    "pageNumber": 20,
    "title": "Cap & Bottle - Hal 10",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_10.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_10.png"
  },
  {
    "id": 21,
    "pageNumber": 21,
    "title": "Cap & Bottle - Hal 11",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_11.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_11.png"
  },
  {
    "id": 22,
    "pageNumber": 22,
    "title": "Cap & Bottle - Hal 12",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_12.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_12.png"
  },
  {
    "id": 23,
    "pageNumber": 23,
    "title": "Cap & Bottle - Hal 13",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_13.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_13.png"
  },
  {
    "id": 24,
    "pageNumber": 24,
    "title": "Cap & Bottle - Hal 14",
    "category": "cap-bottle",
    "folder": "cap-bottle",
    "fileName": "Catalog_Nuralam_Cap_Bottle_14.png",
    "publicId": "Catalog_Nuralam_Cap_Bottle_14.png"
  },
  {
    "id": 25,
    "pageNumber": 25,
    "title": "Lipcream - Hal 1",
    "category": "lipcream",
    "folder": "lipcream",
    "fileName": "Catalog_Nuralam_Lipcream_1.0.png",
    "publicId": "Catalog_Nuralam_Lipcream_1.0.png"
  },
  {
    "id": 26,
    "pageNumber": 26,
    "title": "Lipcream - Hal 2",
    "category": "lipcream",
    "folder": "lipcream",
    "fileName": "Catalog_Nuralam_Lipcream_2.0.png",
    "publicId": "Catalog_Nuralam_Lipcream_2.0.png"
  },
  {
    "id": 27,
    "pageNumber": 27,
    "title": "Lipcream - Hal 3",
    "category": "lipcream",
    "folder": "lipcream",
    "fileName": "Catalog_Nuralam_Lipcream_3.0.png",
    "publicId": "Catalog_Nuralam_Lipcream_3.0.png"
  },
  {
    "id": 28,
    "pageNumber": 28,
    "title": "Lipcream - Hal 4",
    "category": "lipcream",
    "folder": "lipcream",
    "fileName": "Catalog_Nuralam_Lipcream_4.0.png",
    "publicId": "Catalog_Nuralam_Lipcream_4.0.png"
  },
  {
    "id": 29,
    "pageNumber": 29,
    "title": "Plastic Bottle - Hal 1",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_1.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_1.0.png"
  },
  {
    "id": 30,
    "pageNumber": 30,
    "title": "Plastic Bottle - Hal 2",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_2.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_2.0.png"
  },
  {
    "id": 31,
    "pageNumber": 31,
    "title": "Plastic Bottle - Hal 3",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_3.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_3.0.png"
  },
  {
    "id": 32,
    "pageNumber": 32,
    "title": "Plastic Bottle - Hal 4",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_4.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_4.0.png"
  },
  {
    "id": 33,
    "pageNumber": 33,
    "title": "Plastic Bottle - Hal 5",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_5.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_5.0.png"
  },
  {
    "id": 34,
    "pageNumber": 34,
    "title": "Plastic Bottle - Hal 6",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_6.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_6.0.png"
  },
  {
    "id": 35,
    "pageNumber": 35,
    "title": "Plastic Bottle - Hal 7",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_7.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_7.0.png"
  },
  {
    "id": 36,
    "pageNumber": 36,
    "title": "Plastic Bottle - Hal 8",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_8.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_8.0.png"
  },
  {
    "id": 37,
    "pageNumber": 37,
    "title": "Plastic Bottle - Hal 9",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_9.0.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_9.0.png"
  },
  {
    "id": 38,
    "pageNumber": 38,
    "title": "Plastic Bottle - Hal 10",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_10.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_10.png"
  },
  {
    "id": 39,
    "pageNumber": 39,
    "title": "Plastic Bottle - Hal 11",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_11.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_11.png"
  },
  {
    "id": 40,
    "pageNumber": 40,
    "title": "Plastic Bottle - Hal 12",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_12.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_12.png"
  },
  {
    "id": 41,
    "pageNumber": 41,
    "title": "Plastic Bottle - Hal 13",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_13.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_13.png"
  },
  {
    "id": 42,
    "pageNumber": 42,
    "title": "Plastic Bottle - Hal 14",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_14.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_14.png"
  },
  {
    "id": 43,
    "pageNumber": 43,
    "title": "Plastic Bottle - Hal 15",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_15.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_15.png"
  },
  {
    "id": 44,
    "pageNumber": 44,
    "title": "Plastic Bottle - Hal 16",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_16.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_16.png"
  },
  {
    "id": 45,
    "pageNumber": 45,
    "title": "Plastic Bottle - Hal 17",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_17.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_17.png"
  },
  {
    "id": 46,
    "pageNumber": 46,
    "title": "Plastic Bottle - Hal 18",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_18.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_18.png"
  },
  {
    "id": 47,
    "pageNumber": 47,
    "title": "Plastic Bottle - Hal 19",
    "category": "plastic-bottle",
    "folder": "plastic-bottle",
    "fileName": "Catalog_Nuralam_PET_Bottle_19.png",
    "publicId": "Catalog_Nuralam_PET_Bottle_19.png"
  },
  {
    "id": 48,
    "pageNumber": 48,
    "title": "Pot Cream - Hal 1",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_1.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_1.0.png"
  },
  {
    "id": 49,
    "pageNumber": 49,
    "title": "Pot Cream - Hal 2",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_2.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_2.0.png"
  },
  {
    "id": 50,
    "pageNumber": 50,
    "title": "Pot Cream - Hal 3",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_3.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_3.0.png"
  },
  {
    "id": 51,
    "pageNumber": 51,
    "title": "Pot Cream - Hal 4",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_4.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_4.0.png"
  },
  {
    "id": 52,
    "pageNumber": 52,
    "title": "Pot Cream - Hal 5",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_5.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_5.0.png"
  },
  {
    "id": 53,
    "pageNumber": 53,
    "title": "Pot Cream - Hal 6",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_6.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_6.0.png"
  },
  {
    "id": 54,
    "pageNumber": 54,
    "title": "Pot Cream - Hal 7",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_7.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_7.0.png"
  },
  {
    "id": 55,
    "pageNumber": 55,
    "title": "Pot Cream - Hal 8",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_8.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_8.0.png"
  },
  {
    "id": 56,
    "pageNumber": 56,
    "title": "Pot Cream - Hal 9",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_9.0.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_9.0.png"
  },
  {
    "id": 57,
    "pageNumber": 57,
    "title": "Pot Cream - Hal 10",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_10.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_10.png"
  },
  {
    "id": 58,
    "pageNumber": 58,
    "title": "Pot Cream - Hal 11",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_11.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_11.png"
  },
  {
    "id": 59,
    "pageNumber": 59,
    "title": "Pot Cream - Hal 12",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_12.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_12.png"
  },
  {
    "id": 60,
    "pageNumber": 60,
    "title": "Pot Cream - Hal 13",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_13.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_13.png"
  },
  {
    "id": 61,
    "pageNumber": 61,
    "title": "Pot Cream - Hal 14",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_14.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_14.png"
  },
  {
    "id": 62,
    "pageNumber": 62,
    "title": "Pot Cream - Hal 15",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_15.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_15.png"
  },
  {
    "id": 63,
    "pageNumber": 63,
    "title": "Pot Cream - Hal 16",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_16.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_16.png"
  },
  {
    "id": 64,
    "pageNumber": 64,
    "title": "Pot Cream - Hal 17",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_17.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_17.png"
  },
  {
    "id": 65,
    "pageNumber": 65,
    "title": "Pot Cream - Hal 18",
    "category": "pot-cream",
    "folder": "pot-cream",
    "fileName": "Catalog_Nuralam_Pot_Cream_18.png",
    "publicId": "Catalog_Nuralam_Pot_Cream_18.png"
  }
];
