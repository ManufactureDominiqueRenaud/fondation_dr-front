import { revalidateTag } from "next/cache";

export async function revalidateAllTags() {
  // Revalidation des tags globaux
  const globalTags = ["header-data", "footer-data", "page-homepage-data"];

  // Next 16 impose un profil cacheLife ; "max" reproduit le comportement
  // de revalidateTag(tag) en Next 15. updateTag() n'est pas utilisable ici :
  // il lève une exception hors Server Action (nos appels viennent d'un Route Handler).
  globalTags.forEach((tag) => revalidateTag(tag, "max"));
}
