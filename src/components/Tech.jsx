import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="w-full overflow-hidden">
      <p className={`${styles.sectionSubText} text-center mb-8`}>
        My Tech Skillset
      </p>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex flex-row gap-8 md:gap-12 inline-flex items-center"
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
          {/* Duplicate technologies to create seamless loop */}
          {[...technologies, ...technologies].map((technology, index) => (
            <div
              key={`tech-${index}`}
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 mx-4 flex items-center justify-center"
              title={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");