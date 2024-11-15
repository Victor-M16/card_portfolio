import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      <div className={`${styles.paddingX} absolute inset-0 top-[15px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>

      <motion.div
        variants={fadeIn("up","spring", 0.5, 0.75)}
        >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
      </motion.div>
      
      <motion.div variants={textVariant()}>
      <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span 
          className="text-[#915eff]">Victor</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I engineer and develop real time information systems. <br className="sm:block hidden"/>
          I also perform business analytics.<span className={`${styles.sectionSubText}text-[#915eff]`}>Scroll or Swipe to begin</span>         
          </p>
        </div>     
      </motion.div>
   
      </div>
      


      
      <div className="absolute mt-80 w-full
      flex justify-center items-center">
        <a href="#about"> 
        <div className="w-[70px] h-[120px] rounded-3xl border-4 border-secondary
           flex justify-center items-start p-1">

    



          <div className="w-[25px] h-[45px] rounded-3xl border-2 border-secondary
           flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-1 h-2 rounded-full bg-secondary mb-1"
              />
          </div>
        </div>
          
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "")