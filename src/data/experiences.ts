import type { ImageMetadata } from "astro";
import rydberg from "@/assets/company/rydberg.png";
import escom from "@/assets/company/escom.jpeg";
import nextgen from "@/assets/company/nextgen.png";
import mubas from "@/assets/company/mubas.png";
import lemonade from "@/assets/company/logo.svg";
import fcb from "@/assets/company/fcb.jpg";

export interface Role {
  title: string;
  date: string;
  points: string[];
}

export interface Experience {
  company: string;
  logo: ImageMetadata;
  logoBg: string;
  website: string;
  /** Newest first. Several roles at one company render as a single timeline entry. */
  roles: Role[];
}

// Newest first.
export const experiences: Experience[] = [
  {
    company: "FMBcapital Holdings Plc / First Capital Bank Malawi",
    logo: fcb,
    logoBg: "#ffffff",
    website: "https://www.firstcapitalbank.co.mw/",
    roles: [
      {
        title: "Graduate (Management) Trainee – Transformation (Group Level)",
        date: "Mar 2026 – Present",
        points: [
          "Acting AI Systems Engineer for the department: evaluating AI use cases for the bank and leading model and architecture decisions, beyond the formal Graduate Trainee scope.",
          "Developed a self-hosted, LLM-driven pipeline that generates standardised credit committee summaries from raw credit report data, cutting manual preparation time for committee review.",
          "Built an internal ID-validation API (OCR and barcode scanning for national IDs and driving licences across Malawi, Zimbabwe and Botswana) and a liveness test, the digital infrastructure behind automated customer self-onboarding across the Group.",
          "Engineering automated quality assurance pipelines with Playwright and Schemathesis for digital onboarding platforms, including API contract validation for reliability and security.",
          "Advising on an updated Data Governance Policy that standardises business intelligence practices across the Group (Malawi, Zimbabwe, Zambia, Botswana and Mozambique).",
        ],
      },
      {
        title: "Graduate (Management) Trainee – IT Channels & Applications",
        date: "Sep 2025 – Feb 2026",
        points: [
          "Designed and deployed a production-grade data pipeline that automates end-of-day reporting for 30+ billers.",
          "Nearly eliminated reporting failures by removing the manual steps where they occurred.",
          "Built an internal IT governance tracking system covering root-cause analyses, SSL certificates, integration endpoints and backup registrations.",
          "Analysed system availability metrics for regulatory reporting to the Reserve Bank of Malawi.",
        ],
      },
      {
        title: "Graduate (Management) Trainee – Commercial Banking",
        date: "Feb 2025 – Aug 2025",
        points: [
          "Rotated across risk, treasury, credit, branch operations, audit and HR.",
          "Gained working exposure to credit underwriting, liquidity flows, compliance controls and branch-level operational governance.",
          "Contributed to innovation initiatives including a POS cashback concept and analytics-driven product positioning.",
        ],
      },
    ],
  },
  {
    company: "Lemonade Systems",
    logo: lemonade,
    logoBg: "#000000",
    website: "https://lemonade-systems.netlify.app/",
    roles: [
      {
        title: "CEO & Systems Engineer",
        date: "Jan 2023 – Present",
        points: [
          "Founded and lead Lemonade Systems, managing business operations and spearheading technical development.",
          "Architect, develop and maintain systems for various domains including education, energy, procurement and cybersecurity.",
          "Building Lucy, a Chichewa and English voice assistant anyone can reach with an ordinary phone call, and bwal0.",
          "Develop web applications to showcase company information, including for clients such as Phaet Holdings Limited.",
        ],
      },
    ],
  },
  {
    company: "MUBAS Final Year Project – Smart Pharmacist System",
    logo: mubas,
    logoBg: "#ffffff",
    website: "https://www.mubas.ac.mw/",
    roles: [
      {
        title: "Electronics and Computer Engineer",
        date: "Feb 2024 – Oct 2024",
        points: [
          "With HIPAA compliance in mind, developed a secure, real-time vending machine control system using Django and ESP32, focused on healthcare data privacy and low-latency communication.",
          "Enabled remote prescription management by doctors, who could issue prescription codes sent to patients for medication retrieval at vending machines.",
          "Emphasized data security by enforcing HTTPS-based API communication and role-based authentication to restrict access to sensitive medical data.",
        ],
      },
    ],
  },
  {
    company: "Team Sixth Sense – SIPS",
    logo: nextgen,
    logoBg: "#ffffff",
    website: "https://nxtgenlabs.mw/",
    roles: [
      {
        title: "Digital Malawi Hackathon Winner",
        date: "Feb 2024",
        points: [
          "Developed Smarter Inventory and Procurement System (SIPS), an award-winning inventory management web application using Django and Next.js.",
          "Integrated RFID technology using a Raspberry Pi, allowing real-time inventory tracking and automated procurement management.",
          "Implemented a SARIMAX predictive model for inventory optimization, showing metrics like optimal order quantities and reorder points.",
          "Achieved compliance with Public-Private Partnership Commission (PPPC) procurement regulations, contributing to the project’s first-place win.",
        ],
      },
    ],
  },
  {
    company: "Electricity Supply Corporation of Malawi (ESCOM)",
    logo: escom,
    logoBg: "#ffffff",
    website: "https://www.escom.mw/",
    roles: [
      {
        title: "Engineering Intern",
        date: "Jul 2023 – Oct 2023",
        points: [
          "Monitored and managed the southern region's distribution grid (Blantyre, Zomba, Mangochi) via SCADA in real time, supporting fault response and maintenance scheduling.",
          "Inspected high-voltage transmission structures in the field, documenting asset conditions and applying maintenance safety protocols.",
          "Led requirements gathering for a GIS system to optimise transmission line maintenance, translating field pain points into structured specifications for linesmen and contractors.",
          "Reported real-time grid performance data to senior engineers, building a foundational understanding of data-driven maintenance planning in large-scale infrastructure.",
        ],
      },
    ],
  },
  {
    company: "Rydberg Starck Limited",
    logo: rydberg,
    logoBg: "#ffffff",
    website: "https://rydbergstarck.com/",
    roles: [
      {
        title: "Software Engineer Intern",
        date: "Jul 2023 – Jul 2024",
        points: [
          "Developed the backend of the Financial Revenue Management and Taxation (FRMT) system in Django, integrated with a Flutter mobile app and a JavaScript analytics dashboard via a RESTful API.",
          "Built multi-tenant and role-based authentication systems, along with real-time transaction tracking, dashboards, and geolocation features.",
          "FRMT successfully passed pilot testing with Nsanje District Council, enhancing transparency and revenue tracking.",
          "Partially migrated the FRMT system to a microservices architecture using Spring Boot, enhancing modularity and scalability.",
          "Researched and wrote proposals for new systems, working in agile iterations.",
        ],
      },
    ],
  },
];
