import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    reactjs,
    tailwind,
    git,

    django,
    python,
    mysql,

    trafficid,
    timetableapp,
    portfolio3d,
    victor, //anonymous picture


    sips_pi,
    frmt,
    docker,
    smart_pharm,
    phaet_info,
    valentine,
    facial_recognition,
    lemonade,
    escom,
    mubas,
    rydberg,
    nextgen,
    
  } from "./assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web and Mobile Developer",
      icon: web,
    },
    {
      title: "Circuit Analysis and Design",
      icon: backend,
    },
    {
      title: "Systems Architect",
      icon: creator,
    },
    {
      title: "IoT engineer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "mySQL",
      icon: mysql,
    },

  ];

    
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Rydberg Starck Limited",
      icon: rydberg,
      iconBg: "#FFFFFF",
      date: "July 2023 - July 2024",
      points: [
        "Designed and developed the Financial Revenue Management and Taxation (FRMT) system using Django, integrating mobile app functionality via RESTful APIs.",
        "Built multi-tenant and role-based authentication systems, along with real-time transaction tracking, dashboards, and geolocation features.",
        "FRMT successfully passed pilot testing with Nsanje District Council, enhancing transparency and revenue tracking.",
        "Partially migrated the FRMT system to a microservices architecture using Spring Boot, enhancing modularity and scalability.",
      ],
      website:"https://rydbergstarck.com/",
    },
    {
      title: "Engineering Intern",
      company_name: "ESCOM",
      icon: escom,
      iconBg: "#FFFFFF",
      date: "July 2023 - October 2023",
      points: [
        "Optimized maintenance and repair workflows by using SCADA systems to monitor and manage power grid distribution in Malawi’s southern region.",
        "Assisted in real-time data tracking, reporting, and situational awareness for distribution and transmission line operations.",
        "Conducted requirements gathering of GIS solutions for tracking transmission infrastructure, aiming to streamline maintenance activities.",
      ],
      website:"https://www.escom.mw/",
    },
    {
      title: "Digital Malawi Hackathon Winner",
      company_name: "Team Sixth Sense - SIPS",
      icon: nextgen,
      iconBg: "#FFFFFF",
      date: "February 2024",
      points: [
        "Developed Smarter Inventory and Procurement System (SIPS), an award-winning inventory management web application using Django and Next.js.",
        "Integrated RFID technology using a Raspberry Pi, allowing real-time inventory tracking and automated procurement management.",
        "Implemented a SARIMAX predictive model for inventory optimization, showing metrics like optimal order quantities and reorder points.",
        "Achieved compliance with Public-Private Partnership Commission (PPPC) procurement regulations, contributing to the project’s first-place win.",
      ],
      website:"https://nxtgenlabs.mw/",
    },
    {
      title: "Electronics and Computer Engineer",
      company_name: "MUBAS Final Year Project - Smart Pharmacist System",
      icon: mubas,
      iconBg: "#FFFFFF",
      date: "February 2024 - October 2024",
      points: [
        "With HIPAA compliance in mind, developed a secure, real-time vending machine control system using Django and ESP32, focused on healthcare data privacy and low-latency communication.",
        "Enabled remote prescription management by doctors, who could issue prescription codes sent to patients for medication retrieval at vending machines.",
        "Emphasized data security by enforcing HTTPS-based API communication and role-based authentication to restrict access to sensitive medical data.",
      ],
      website:"https://www.mubas.ac.mw/",
    },
    {
      title: "CEO & Systems Engineer",
      company_name: "Lemonade Systems",
      icon: lemonade,
      iconBg: "#000000",
      date: "Jan 2023 - Present",
      points: [
        "Founded and lead Lemonade Systems, managing business operations and spearheading technical development.",
        "Architect, develop and maintain systems for various domains including education, energy, procurement and cyberseucirty.",
        "Developing bwal0 and Lucy",
        "Develop web applications to showcase company information, including for clients such as Phaet Holdings Limited.",
      ],
      website:"https://lemonade-systems.netlify.app/",
    },
  ];
  
  
  const testimonials = [
    {
      testimonial:
        "Victor works relentlessly to meet project deadlines. We love working together with him.",
      name: "Yusuf Chimole",
      designation: "CEO",
      company: "Rydberg Starck Limited",
      image: victor,
    },
    {
      testimonial:
        "I've never met a someone who cares about details like Victor and can explain complicated concepts with ease. He can be an engineer and a lecturer.",
      name: "Emmanuel Mukondiya",
      designation: "Transmission Supervisor",
      company: "ESCOM",
      image: victor,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Victor does.",
      name: "Emmanuel Mjimapemba",
      designation: "CEO",
      company: "Phaet Holdings Limted",
      image: victor,
    },
  ];
  
  const projects = [
    {
      name: "Smarter Inventory and Procurement System (SIPS)",
      description:
        "SIPS allows users to monitor RFID-tagged inventory items in real time through a web app, and can integrate with procurement systems to automatically send RFQs when stock levels fall below thresholds predicted by a SARIMAX model.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "raspberrypi",
          color: "pink-text-gradient",
        },
      ],
      image: sips_pi,
      source_code_link: "https://github.com/Victor-M16/Stores-Management",
    },
    {
      name: "Financial Revenue Management and Taxation System (FRMT)",
      description:
        "FRMT is a Django-based application enabling councils, entities, and citizens to manage financial transactions with real-time tracking, multi-tenancy, and role-based authentication, improving transparency and revenue management.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "springboot",
          color: "yellow-text-gradient",
        },
      ],
      image: frmt,
      source_code_link: "",
    },
    {
      name: "Smart Pharmacist System",
      description:
        "A secure, real-time vending machine control system for medication dispensation, utilizing an ESP32 and Django API. It allows doctors to remotely manage prescriptions and sends patients an access code for medication retrieval at the vending machine.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "esp32",
          color: "green-text-gradient",
        },
        {
          name: "healthcare",
          color: "pink-text-gradient",
        },
      ],
      image: smart_pharm,
      source_code_link: "https://github.com/Victor-M16/Smart-Pharmacist",
    },

    {
      name: "Valentine's Day Themed Website",
      description:
        "A React-based Valentine's Day website designed with an interactive and visually engaging interface, providing users with a holiday-themed experience.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "design",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: valentine,
      source_code_link: "https://github.com/your-username/valentines-website",
    },
    {
      name: "Facial Recognition Access Control System",
      description:
        "An automatic real-time security system developed using Flask, Raspberry Pi, and ESP32, which uses facial recognition to manage access control based on user identification.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "raspberrypi",
          color: "green-text-gradient",
        },
        {
          name: "esp32",
          color: "pink-text-gradient",
        },
      ],
      image: facial_recognition,
      source_code_link: "https://github.com/Victor-M16/Facial-Recognition-Access-Control-System",
    },
    {
      name: "Phaet Informational Website",
      description:
        "An informational website for phaet holdings limited, my first client.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: phaet_info,
      source_code_link: "https://github.com/Victor-M16/PHAET",
    },
    {
      name: "Traffic Signs Recognition System",
      description:
        "Basic Machine Learning Python GUI App to classify uploaded traffic signs ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: trafficid,
      source_code_link: "https://github.com/Victor-M16/Python-Traffic-Signs-Recognition-System",
    },
    {
      name: "Personal 3D-Portfolio",
      description:
        "A website for displaying personal projects",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio3d,
      source_code_link: "https://github.com/Victor-M16/3d-portfolio",
    },
    {
      name: "Study Timetable Generator",
      description:
        "Web-based application that allows users to create timetables from a given number of subjects.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: timetableapp,
      source_code_link: "https://github.com/Victor-M16/Simple-Timetable-Generator",
    },
   
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };
