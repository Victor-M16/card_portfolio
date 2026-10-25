import { getCollection, type CollectionEntry } from "astro:content";

export type Chapter = CollectionEntry<"chapters">;

/** A book's chapters in reading order. */
export async function getChapters(bookId: string): Promise<Chapter[]> {
  const chapters = await getCollection("chapters", (entry) => entry.filePath?.includes(`/books/${bookId}/`) ?? false);
  return chapters.sort((a, b) => a.data.order - b.data.order);
}

/** Rough reading time at ~250 words per minute, a typical pace for fiction. */
export function chapterMinutes(body: string | undefined): number {
  const words = body?.trim().split(/\s+/).length ?? 0;
  return Math.max(1, Math.round(words / 250));
}
