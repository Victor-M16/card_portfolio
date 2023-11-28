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
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning and AI enthusiast",
      icon: backend,
    },
    {
      title: "IoT engineer",
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
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      title: "Full stack Developer",
      company_name: "Phaet Consolidated",
      icon: phaet,
      iconBg: "#000000",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and Django.",
        "Collaborating with cross-functional teams including product managers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Created and maintaining the web application that integrates the company Information System and Order Management System",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Phaet Consolidated",
      icon: phaet,
      iconBg: "#000000",
      date: "Jan 2023 - Present",
      points: [
        "Created and maintaining the mobile application that integrates the company Information System and Order Management System",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Cupcake Data Analytics",
      icon: cupcake,
      iconBg: "#390050",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and Django.",
        "Collaborating with cross-functional teams including product managers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Created and maintaining the web application that integrates the company Information System and Order Management System",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Cupcake Data Analytics",
      icon: cupcake,
      iconBg: "#390050",
      date: "May 2023 - Present",
      points: [
        "Conducting extensive data analysis and exploration using Python, uncovering valuable insights from large datasets.",
        "Developed and implemented machine learning models to solve complex business problems, leveraging Python libraries such as scikit-learn and TensorFlow.",
        "Applying advanced statistical analysis techniques in Python, including hypothesis testing, regression analysis, and time series analysis.",
        "Creating compelling data visualizations and reports using Python libraries like Matplotlib and Plotly, effectively communicating findings to stakeholders.",
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
      company: "Phaet Consolidated",
      image: victor,
    },
    {
      testimonial:
        "After Victor optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "You",
      designation: "CEO",
      company: "A very Smart Organisation",
      image: victor,
    },
  ];
  
  const projects = [

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
