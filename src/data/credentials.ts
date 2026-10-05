export interface Highlight {
  title: string;
  detail: string;
  year?: string;
}

export interface Education {
  school: string;
  qualification: string;
  dates: string;
  result: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}

export const highlights: Highlight[] = [
  {
    title: "World Bank Group Youth Summit Delegate",
    detail: "Selected under the theme “Designing Jobs for the Digital Age”.",
    year: "2026",
  },
  {
    title: "Registered Graduate Engineer",
    detail: "Malawi Engineering Institute (MEI).",
    year: "2026",
  },
  {
    title: "First Class Honours",
    detail: "Bachelor of Electronics and Computer Engineering, MUBAS.",
    year: "2024",
  },
  {
    title: "1st Place, E-Government Digital Malawi Hackathon",
    detail: "Organised by NxtGen Labs, for SIPS, an inventory and procurement management system.",
    year: "2024",
  },
  {
    title: "1st Place, Starck Innovation Awards",
    detail: "For the Facial Recognition Access Control and Surveillance System (FRACS).",
    year: "2024",
  },
  {
    title: "FIRST Global Robotics Competition",
    detail: "Led a cross-functional team that designed and built a pollutant-removing robot, showcased in Dubai.",
  },
  {
    title: "Global Highest Mark, IGCSE Agriculture",
    detail: "And valedictorian (best student) at Kalibu Academy.",
    year: "2018",
  },
];

export const education: Education[] = [
  {
    school: "Malawi University of Business and Applied Sciences (MUBAS)",
    qualification: "Bachelor of Electronics and Computer Engineering (Honours)",
    dates: "2019 – 2024",
    result: "First Class Honours (Distinction)",
  },
  {
    school: "Kamuzu Academy",
    qualification: "Advanced Subsidiary Level",
    dates: "2018 – 2019",
    result: "4 As in Mathematics, Business Studies, Physics and Chemistry",
  },
  {
    school: "Kalibu Academy",
    qualification: "IGCSE",
    dates: "2014 – 2018",
    result: "9 A*s, including English, Mathematics, Physics, Chemistry and Computer Science",
  },
];

export const certifications: Certification[] = [
  { name: "Finance & Quantitative Modeling for Analysts", issuer: "University of Pennsylvania", date: "Jan 2026" },
  { name: "Data Privacy & Protection Standards", issuer: "Dr. Pawel Mielniczek", date: "Dec 2025" },
  { name: "Script Programming Tutor", issuer: "ElevatEd", date: "Nov 2025" },
  { name: "Data Science: Python and SQL", issuer: "IBM" },
  { name: "Programming with JavaScript", issuer: "Meta" },
];

export const interests = ["Efficient inference", "Machine learning systems", "Sparse computation", "Edge AI"];
