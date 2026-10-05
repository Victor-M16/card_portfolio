import type { ImageMetadata } from "astro";
import sips from "@/assets/sips_pi.jpg";
import frmt from "@/assets/frmt.png";
import smartPharm from "@/assets/smart_pharm.png";
import valentine from "@/assets/valentine.png";
import facialRecognition from "@/assets/facial_recognition.png";
import phaetInfo from "@/assets/phaet_info.png";
import trafficId from "@/assets/trafficid.png";
import portfolio3d from "@/assets/portfolio3d.png";
import timetableApp from "@/assets/timetableapp.png";

export type TagColor = "blue" | "green" | "pink" | "yellow";

export interface Project {
  name: string;
  description: string;
  tags: { name: string; color: TagColor }[];
  /** Screenshot or photo. Without one, the card shows a styled title panel. */
  image?: ImageMetadata;
  /** Shown as a gold badge, e.g. a competition win. */
  award?: string;
  /** GitHub repository. Omit for closed-source projects. */
  sourceUrl?: string;
  /** Live demo, case study or blog post. */
  liveUrl?: string;
  /** Featured projects get full cards; the rest are listed under "Earlier work". */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Lucy",
    description:
      "A voice assistant anyone in Malawi can reach with an ordinary phone call, in Chichewa or English. No app, no internet, no reading required. Runs on a self-hosted phone line with open speech recognition on CPU.",
    tags: [
      { name: "voice-ai", color: "blue" },
      { name: "chichewa", color: "green" },
      { name: "asterisk", color: "pink" },
    ],
    liveUrl: "/blog/lucy-picked-up-the-phone/",
    featured: true,
  },
  {
    name: "Smarter Inventory and Procurement System (SIPS)",
    description:
      "SIPS allows users to monitor RFID-tagged inventory items in real time through a web app, and can integrate with procurement systems to automatically send RFQs when stock levels fall below thresholds predicted by a SARIMAX model.",
    tags: [
      { name: "python", color: "blue" },
      { name: "nextjs", color: "green" },
      { name: "raspberrypi", color: "pink" },
    ],
    image: sips,
    award: "1st place, Digital Malawi Hackathon",
    sourceUrl: "https://github.com/Victor-M16/Stores-Management",
    featured: true,
  },
  {
    name: "Financial Revenue Management and Taxation System (FRMT)",
    description:
      "FRMT is a Django-based application enabling councils, entities, and citizens to manage financial transactions with real-time tracking, multi-tenancy, and role-based authentication, improving transparency and revenue management. Piloted with Nsanje District Council.",
    tags: [
      { name: "django", color: "blue" },
      { name: "flutter", color: "green" },
      { name: "springboot", color: "yellow" },
    ],
    image: frmt,
    featured: true,
  },
  {
    name: "Facial Recognition Access Control and Surveillance System (FRACS)",
    description:
      "A real-time access control and surveillance system. A Raspberry Pi runs face recognition with OpenCV, an ESP32 drives the servo that opens the door, and a Flask web portal lets users manage the system.",
    tags: [
      { name: "opencv", color: "blue" },
      { name: "raspberrypi", color: "green" },
      { name: "esp32", color: "pink" },
    ],
    image: facialRecognition,
    award: "1st place, Starck Innovation Awards 2024",
    sourceUrl: "https://github.com/Victor-M16/Facial-Recognition-Access-Control-System",
    featured: true,
  },
  {
    name: "Smart Pharmacist Vending Machine",
    description:
      "A secure, real-time vending machine control system for dispensing medication, designed with HIPAA in mind. A doctor enters a prescription, the patient receives an SMS with a code, and the machine (ESP32 + Django API, prototyped in Fusion 360) dispenses exactly what was prescribed.",
    tags: [
      { name: "django", color: "blue" },
      { name: "esp32", color: "green" },
      { name: "healthcare", color: "pink" },
    ],
    image: smartPharm,
    sourceUrl: "https://github.com/Victor-M16/Smart-Pharmacist",
    featured: true,
  },
  {
    name: "Phaet Informational Website",
    description: "An informational website for Phaet Holdings Limited, my first client.",
    tags: [
      { name: "html", color: "blue" },
      { name: "css", color: "green" },
      { name: "js", color: "pink" },
    ],
    image: phaetInfo,
    sourceUrl: "https://github.com/Victor-M16/PHAET",
  },
  {
    name: "Valentine's Day Themed Website",
    description:
      "A React-based Valentine's Day website designed with an interactive and visually engaging interface, providing users with a holiday-themed experience.",
    tags: [
      { name: "reactjs", color: "blue" },
      { name: "design", color: "green" },
      { name: "css", color: "pink" },
    ],
    image: valentine,
    // TODO: add the real repository link (the old one was a "your-username" placeholder).
  },
  {
    name: "Traffic Signs Recognition System",
    description: "A basic machine learning Python GUI app that classifies uploaded traffic signs.",
    tags: [{ name: "python", color: "blue" }],
    image: trafficId,
    sourceUrl: "https://github.com/Victor-M16/Python-Traffic-Signs-Recognition-System",
  },
  {
    name: "Personal 3D Portfolio",
    description: "A website for displaying personal projects.",
    tags: [
      { name: "reactjs", color: "blue" },
      { name: "threejs", color: "green" },
      { name: "tailwindcss", color: "pink" },
    ],
    image: portfolio3d,
    sourceUrl: "https://github.com/Victor-M16/3d-portfolio",
  },
  {
    name: "Study Timetable Generator",
    description: "A web-based application that lets users create timetables from a given number of subjects.",
    tags: [
      { name: "django", color: "blue" },
      { name: "css", color: "green" },
      { name: "html", color: "pink" },
    ],
    image: timetableApp,
    sourceUrl: "https://github.com/Victor-M16/Simple-Timetable-Generator",
  },
];
