import { ProductType } from "@prisma/client";

export const PRODUCT_PRICING: Record<ProductType, { amount: number; label: string; formats: string[] }> = {
  STAMP_FILE: {
    amount: 290,
    label: "Stamp one file",
    formats: ["png", "jpg", "pdf"]
  },
  EXTRACT_ONLY: {
    amount: 490,
    label: "Extract and save stamp",
    formats: ["png"]
  },
  COMBO: {
    amount: 690,
    label: "Extract + stamp",
    formats: ["png", "jpg", "pdf"]
  }
};
