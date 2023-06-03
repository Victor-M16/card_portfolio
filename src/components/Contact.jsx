import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_dtoyr6l",
        "template_z7rjdhy",
        {
          from_name: form.name,
          to_name: "Victor Mjimapemba",
          from_email: form.email,
          to_email: "vcmjimapemba@gmail.com",
          message: form.message,
        },
        "C7RhN2odoKoUsm5yk"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-6 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-6'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-sm'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

    </div>

  );
};

export default SectionWrapper(Contact, "contact");