import { revalidateTag } from "next/cache";

export async function revalidateAllTags() {
  // Revalidation des tags globaux
  const globalTags = ["header-data", "footer-data", "page-homepage-data"];

  globalTags.forEach((tag) => revalidateTag(tag));
}
