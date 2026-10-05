// Not rendered yet. Add photos and wire up a Testimonials section when ready.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Victor works relentlessly to meet project deadlines. We love working together with him.",
    name: "Yusuf Chimole",
    role: "CEO",
    company: "Rydberg Starck Limited",
  },
  {
    quote:
      "I've never met someone who cares about details like Victor and can explain complicated concepts with ease. He can be an engineer and a lecturer.",
    name: "Emmanuel Mukondiya",
    role: "Transmission Supervisor",
    company: "ESCOM",
  },
  {
    quote: "I've never met a web developer who truly cares about their clients' success like Victor does.",
    name: "Emmanuel Mjimapemba",
    role: "CEO",
    company: "Phaet Holdings Limited",
  },
];
