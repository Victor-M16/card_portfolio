import type { ImageMetadata } from "astro";
import rydberg from "@/assets/company/rydberg.png";
import escom from "@/assets/company/escom.jpeg";
import nextgen from "@/assets/company/nextgen.png";
import mubas from "@/assets/company/mubas.png";
import lemonade from "@/assets/company/logo.svg";
import fcb from "@/assets/company/fcb.jpg";

export interface Experience {
  title: string;
  company: string;
  logo: ImageMetadata;
  logoBg: string;
  date: string;
  points: string[];
  website: string;
}

// Newest first.
export const experiences: Experience[] = [
  {
    title: "Graduate (Management) Trainee",
    company: "First Capital Bank Malawi",
    logo: fcb,
    logoBg: "#ffffff",
    date: "Feb 2025 – Present",
    points: [
      "Rotated through various departments including Retail Banking, Corporate Banking, Credit Risk, and Operations to gain comprehensive banking knowledge.",
      "Assisted in evaluating loan applications, conducting market research, and supporting daily banking operations.",
      "Participated in training sessions on financial products, regulatory compliance, and customer service excellence.",
      "Collaborated with cross-functional teams to improve banking processes and enhance customer experience.",
      "Developed various internal tools to automate routine tasks, improving efficiency within the bank.",
    ],
    website: "https://www.firstcapitalbank.co.mw/",
  },
  {
    title: "CEO & Systems Engineer",
    company: "Lemonade Systems",
    logo: lemonade,
    logoBg: "#000000",
    date: "Jan 2023 – Present",
    points: [
      "Founded and lead Lemonade Systems, managing business operations and spearheading technical development.",
      "Architect, develop and maintain systems for various domains including education, energy, procurement and cybersecurity.",
      "Developing bwal0 and Lucy.",
      "Develop web applications to showcase company information, including for clients such as Phaet Holdings Limited.",
    ],
    website: "https://lemonade-systems.netlify.app/",
  },
  {
    title: "Electronics and Computer Engineer",
    company: "MUBAS Final Year Project – Smart Pharmacist System",
    logo: mubas,
    logoBg: "#ffffff",
    date: "Feb 2024 – Oct 2024",
    points: [
      "With HIPAA compliance in mind, developed a secure, real-time vending machine control system using Django and ESP32, focused on healthcare data privacy and low-latency communication.",
      "Enabled remote prescription management by doctors, who could issue prescription codes sent to patients for medication retrieval at vending machines.",
      "Emphasized data security by enforcing HTTPS-based API communication and role-based authentication to restrict access to sensitive medical data.",
    ],
    website: "https://www.mubas.ac.mw/",
  },
  {
    title: "Digital Malawi Hackathon Winner",
    company: "Team Sixth Sense – SIPS",
    logo: nextgen,
    logoBg: "#ffffff",
    date: "Feb 2024",
    points: [
      "Developed Smarter Inventory and Procurement System (SIPS), an award-winning inventory management web application using Django and Next.js.",
      "Integrated RFID technology using a Raspberry Pi, allowing real-time inventory tracking and automated procurement management.",
      "Implemented a SARIMAX predictive model for inventory optimization, showing metrics like optimal order quantities and reorder points.",
      "Achieved compliance with Public-Private Partnership Commission (PPPC) procurement regulations, contributing to the project’s first-place win.",
    ],
    website: "https://nxtgenlabs.mw/",
  },
  {
    title: "Engineering Intern",
    company: "ESCOM",
    logo: escom,
    logoBg: "#ffffff",
    date: "Jul 2023 – Oct 2023",
    points: [
      "Optimized maintenance and repair workflows by using SCADA systems to monitor and manage power grid distribution in Malawi’s southern region.",
      "Assisted in real-time data tracking, reporting, and situational awareness for distribution and transmission line operations.",
      "Conducted requirements gathering of GIS solutions for tracking transmission infrastructure, aiming to streamline maintenance activities.",
    ],
    website: "https://www.escom.mw/",
  },
  {
    title: "Software Engineer Intern",
    company: "Rydberg Starck Limited",
    logo: rydberg,
    logoBg: "#ffffff",
    date: "Jul 2023 – Jul 2024",
    points: [
      "Designed and developed the Financial Revenue Management and Taxation (FRMT) system using Django, integrating mobile app functionality via RESTful APIs.",
      "Built multi-tenant and role-based authentication systems, along with real-time transaction tracking, dashboards, and geolocation features.",
      "FRMT successfully passed pilot testing with Nsanje District Council, enhancing transparency and revenue tracking.",
      "Partially migrated the FRMT system to a microservices architecture using Spring Boot, enhancing modularity and scalability.",
    ],
    website: "https://rydbergstarck.com/",
  },
];
