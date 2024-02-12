import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    phaet,
    cupcake,
    django,
    python,
    mysql,
    portfolio,
    trafficid,
    timetableapp,
    portfolio3d,
    victor,
    victorsmile,
    sips_i,
    sips_p,
    sips_pi,
    frmt,
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
      title: "Django Fullstack Developer",
      icon: web,
    },
    {
      title: "ReactNative Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning and AI enthusiast",
      icon: backend,
    },
    {
      title: "IoT systems engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
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
      title: "Fullstack Developer",
      company_name: "Lemonade Systems",
      icon: phaet,
      iconBg: "#000000",
      date: "Jan 2023 - Present",
      points: [
        "Created and maintaining the web application that displays company information for clients like Phaet Holdings Limted.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Rydberg Starck Limited",
      icon: phaet,
      iconBg: "#000000",
      date: "June 2023 - Present",
      points: [
        "Developing and maintaining web applications using Django.",
        "Collaborating with cross-functional teams including product managers to create high-quality products.",
        "Implementing FRMT, a system that has a web app module, mobile app module and USSD to allow citizens, and entities to keep track of their various payments.",
      ],
    },
    {
      title: "Digital Malawi Hackathon Winner",
      company_name: "Team Sixth Sense - SIPS",
      icon: phaet,
      iconBg: "#000000",
      date: "February 2024",
      points: [
        "Developed SIPS, an Inventory Management and Procurement web application system using Django and React.",
        "Integrated a Raspberry Pi RFID device with the django web app to show real time updates",
        "Integrated predictive machine learning (SARIMAX model) with the django web app to show important inventory management metrics like optimum order quantity and reorder levels.",
      ],
    },
    

  ];
  
  const testimonials = [
    {
      testimonial:
        "Victor is a driven individual and he takes his work seriously.",
      name: "Vincent Kavala",
      designation: "Teacher",
      company: "Kalibu Academy",
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
    {
      testimonial:
        "Victor works relentlessly to meet project deadlines. We love working together with him.",
      name: "Yusuf Chimole",
      designation: "CEO",
      company: "Rydberg Starck Limited",
      image: victor,
    },
  ];
  
  const projects = [
    {
      name: "Smarter Inventory and Procurement System",
      description:
        "SIPS allows users to keep track of RFID tagged inventory items in real time via their web app, and can integrate with procurement systems by sending them RFQs when stock levels deplete below metrics suggested by a trained SARIMAX model.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
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
      name: "Financial Revenue Management and Taxation System",
      description:
        "FRMT is a unified financial management application that allows councils, entitties and citizens to manage their releveant payments. ",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
      ],
      image: frmt,
      source_code_link: "https://github.com/rydbergstarck/frmt",
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
    {
      name: "Personal Portfolio",
      description:
        "A website for displaying personal projects",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Victor-M16/react-portfolio",
    },
   
  ];
  const moments=[
    {
      name: "",
      description:
        "",
      tags: [
        
      ],
      image: victorsmile,
      source_code_link: "https://github.com/Victor-M16",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,moments };
