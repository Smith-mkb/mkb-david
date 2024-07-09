import Profile from "../assets/profile.svg";
import { ABOUT_TEXT } from "../constant/index.js";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        A propos de <span className="text-neutral-500">moi</span>
      </h2>
      <div className="flex flex-wrap flex-col-reverse lg:items-center lg:flex-row">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={Profile} alt="profile" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl text-justify">
              {ABOUT_TEXT.pa1} <br />
              <br />
              {ABOUT_TEXT.pa2}
              <br />
              <br />
              {ABOUT_TEXT.pa3}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
