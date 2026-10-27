export interface Book {
  /** Folder under src/content/books/ and the URL segment under /fun/. */
  id: string;
  title: string;
  series: string;
  author: string;
  /** Optional: a work-in-progress book may not have one yet. */
  tagline?: string;
  /** Paragraphs of the blurb, shown on the landing page. */
  description?: string[];
  /** One-line summary for meta descriptions and the promo card. */
  summary: string;
  /** "complete", or "preview" for a book still being written. */
  status: "complete" | "preview";
  copyright: string;
  ogImage: string;
}

export const theStillFlame: Book = {
  id: "the-still-flame",
  title: "The Still Flame",
  series: "Psi Is Wide, Book One",
  author: "Victor Mjimapemba",
  tagline: "On Psi, every heart is heard. Some secrets burn anyway.",
  description: [
    "On the continent of Eta, every human carries the Choir: an implant that knows where you are, how your heart beats, and whether you're lying. Powers called omicrons are licensed, measured and owned by the state. And fire, wild and rare, is almost never tamed.",
    "Dimitri Gale was told he had no gift at all. Then, in a dead zone where the Choir can't see, fire wraps itself around his arm and doesn't burn him.",
    "His captain, Juliette Vasquez, hides it from the record. She's good at hiding things. Her twin, Romeo, can borrow the eyes of any animal but won't let anyone see him. And Susan de Ricci, heir to a centuries-old dynasty of vintners, is about to learn what her family has been selling in the dark.",
    "As a fragile truce with the Zetans hangs on one diplomatic reception, four young soldiers uncover a leak in their own command, a hollow assassin, and a man in the hills whose fire does not flicker. He knows Dimitri's name. He's known it all along.",
    "The Still Flame is a grounded science-fantasy about surveillance, inherited power, and the lines people cross to keep the ones they love.",
  ],
  summary: "On Psi, every heart is heard. Some secrets burn anyway. A science-fantasy novel by Victor Mjimapemba.",
  status: "complete",
  copyright: "© 2026 Victor Mjimapemba. All rights reserved.",
  ogImage: "/og-the-still-flame.jpg",
};

export const bookTwo: Book = {
  id: "book-two",
  title: "Psi Is Wide: Book Two",
  series: "Psi Is Wide, Book Two",
  author: "Victor Mjimapemba",
  summary:
    "A work-in-progress preview of the second book in Psi Is Wide, the sequel to The Still Flame, by Victor Mjimapemba.",
  status: "preview",
  copyright: "© 2026 Victor Mjimapemba. All rights reserved.",
  ogImage: "/og-book-two.jpg",
};

/** Every book, in series order. Pages under /fun/[book]/ are generated from this list. */
export const books: Book[] = [theStillFlame, bookTwo];
