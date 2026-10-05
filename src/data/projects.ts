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
  image: ImageMetadata;
  /** GitHub repository. Omit for closed-source projects. */
  sourceUrl?: string;
  /** Live demo or case study. */
  liveUrl?: string;
}

export const projects: Project[] = [
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
    sourceUrl: "https://github.com/Victor-M16/Stores-Management",
  },
  {
    name: "Financial Revenue Management and Taxation System (FRMT)",
    description:
      "FRMT is a Django-based application enabling councils, entities, and citizens to manage financial transactions with real-time tracking, multi-tenancy, and role-based authentication, improving transparency and revenue management.",
    tags: [
      { name: "django", color: "blue" },
      { name: "javascript", color: "green" },
      { name: "springboot", color: "yellow" },
    ],
    image: frmt,
  },
  {
    name: "Smart Pharmacist System",
    description:
      "A secure, real-time vending machine control system for medication dispensation, utilizing an ESP32 and Django API. It allows doctors to remotely manage prescriptions and sends patients an access code for medication retrieval at the vending machine.",
    tags: [
      { name: "django", color: "blue" },
      { name: "esp32", color: "green" },
      { name: "healthcare", color: "pink" },
    ],
    image: smartPharm,
    sourceUrl: "https://github.com/Victor-M16/Smart-Pharmacist",
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
    name: "Facial Recognition Access Control System",
    description:
      "An automatic real-time security system developed using Flask, Raspberry Pi, and ESP32, which uses facial recognition to manage access control based on user identification.",
    tags: [
      { name: "flask", color: "blue" },
      { name: "raspberrypi", color: "green" },
      { name: "esp32", color: "pink" },
    ],
    image: facialRecognition,
    sourceUrl: "https://github.com/Victor-M16/Facial-Recognition-Access-Control-System",
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
