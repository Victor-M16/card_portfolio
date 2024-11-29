import React from 'react';
import { Tilt } from 'react-tilt';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants'; // Update the import statement

import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  const tiltRef = React.useRef(null);
  const touchX = useMotionValue(0);
  const rotateX = useTransform(touchX, [-50, 50], [5, -5]);

  return (
    <Tilt ref={tiltRef} className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card'
        style={{ rotateX }}
      >
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly
          items-center flex-col'
          onMouseEnter={() => {
            tiltRef.current.onMouseEnter();
          }}
          onMouseLeave={() => {
            tiltRef.current.onMouseLeave();
          }}
          onTouchStart={() => {
            tiltRef.current.onMouseEnter();
          }}
          onTouchEnd={() => {
            tiltRef.current.onMouseLeave();
          }}
          onTouchMove={(event) => {
            touchX.set(event.touches[0].clientX - event.target.offsetWidth / 2);
          }}
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
I am Victor Mjimapemba: an engineer who turns code, circuits and designs into catalysts for change.
I transform complex challenges into elegant solutions, blending technical mastery with humanitarian vision. My work isn't just about technology—it's about unlocking human potential.
When you collaborate with me, you're not just hiring an engineer. You're igniting possibility.
Let's redefine what's possible, together.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
