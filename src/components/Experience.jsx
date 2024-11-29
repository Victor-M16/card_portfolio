// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-full h-full object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Work Experience.
//         </h2>
//       </motion.div>

//       <div className='mt-10 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");


import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        padding: "1.5rem",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #232631",
        transform: "translateY(-50%)"
      }}
      date={experience.date}
      dateClassName="text-secondary font-medium"
      iconStyle={{ 
        background: experience.iconBg,
        borderRadius: "50%",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full p-2'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full object-contain rounded-full'
          />
        </div>
      }
    >
      <div className="space-y-2">
        <h3 className='text-white text-xl md:text-2xl font-bold'>
          {experience.title}
        </h3>
        <p className='text-secondary text-base font-semibold'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-4 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-sm md:text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className='mt-2'>
        <VerticalTimeline 
          lineColor="#232631"
          layout="1-column-left"
          className="custom-timeline"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

// Optional: Add custom CSS to enhance responsiveness
const styleOverrides = `
  @media (max-width: 1170px) {
    .vertical-timeline-element-content {
      max-width: 100% !important;
      padding: 1rem !important;
    }
    .vertical-timeline-element-date {
      display: block !important;
      position: relative !important;
      margin-top: 0.5rem !important;
      text-align: left !important;
    }
  }
`;

// Inject custom styles
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styleOverrides
document.head.appendChild(styleSheet);

export default SectionWrapper(Experience, "work");