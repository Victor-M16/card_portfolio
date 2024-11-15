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
        I'm a multi-award winning electronics and computer engineer with experience building both monolithic and microservice based systems. 
        My technology stack includes Java, Python, JavaScript, Arduino language, and PostgreSQL among others. 
        
        My passion lies in leveraging technology to solve real world business problems such as process optimization, and more importantly,
        social problems such as the digital and literacy divide.

        With me, you are not just getting a competent developer, you are getting an empathetic one who will go 
        above and beyond to make sure your needs are met.

        I have a track record of meeting project deadlines and creating innovative solutions that display both my
        passion for the craft of software engineering as well as my humanitarian need to improve the lives of the less fortunate.

        I am a fast learner, who believes in being meticulous and leveraging team-work to build solutions that matter.
        I take a client-first approach to produce compliant, performant, scalable and maintainable user-friendly solutions.

        Let's be more, together!
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
