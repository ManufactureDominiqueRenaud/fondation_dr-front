import { revalidateAllTags } from "@/lib/revalidate";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Récupère le secret dans les headers
  const secret = req.headers.get("X-Revalidate-Secret");

  // Vérifie si le secret est correct
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Revalide tous les tags
  try {
    revalidateAllTags();
    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? (error as Error).message : "Unknown error";
    console.log(errorMessage);
    return NextResponse.json(
      { message: "Error revalidating tags", error: errorMessage },
      { status: 500 }
    );
  }
}
