import type { ImageMetadata } from "astro";
import web from "@/assets/web.png";
import backend from "@/assets/backend.png";
import creator from "@/assets/creator.png";
import mobile from "@/assets/mobile.png";

export interface Service {
  title: string;
  icon: ImageMetadata;
}

export const services: Service[] = [
  { title: "Web and Mobile Developer", icon: web },
  { title: "Circuit Analysis and Design", icon: backend },
  { title: "Systems Architect", icon: creator },
  { title: "IoT Engineer", icon: mobile },
];
