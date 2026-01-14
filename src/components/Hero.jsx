import { HERO_CONTENT } from "../constant/index.js";
import Profile from "../assets/hero_profile.png";
import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 mt-24 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap items-center mb-5 sm:flex">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
           <motion.h1
              className="text-5xl text-center sm:text-left lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              David Mukombo
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-balance text-center"
            >
              Développeur Full-Stack
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              src={Profile}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
