import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const Companies = () => {
  return (
    <div className="w-full overflow-hidden">
      <p className={`${styles.sectionSubText} text-center mb-4`}>
        Great People I have worked with
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex flex-row gap-10 inline-flex"
          style={{ 
            display: "inline-flex",
            width: "200%", // Double the width to ensure continuous scrolling
          }}
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate the experiences to create a seamless loop */}
          {[...experiences, ...experiences].map((experience, index) => (
            <div
              key={`experience-${index}`}
              className="w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 flex-shrink-0 mx-4"
              title={experience.company_name}
            >
            <a 
              href={experience.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Companies, "companies");