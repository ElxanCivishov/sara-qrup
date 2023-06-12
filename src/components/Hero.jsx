import { LoginBg } from "../assets";
import { motion } from "framer-motion";
import {
  buttonClick,
  heroTextLeft,
  heroTextRight,
  heroTextTop,
} from "../assets/animations";

const Hero = () => {
  return (
    <div
      className="w-[100%] h-screen relative flex flex-col justify-center 
    bg-gradient-to-r from-indigo-600 to-indigo-300"
    >
      <img
        src={LoginBg}
        className="absolute object-cover  top-0 left-0 w-[100%] h-[100%] opacity-90"
        alt="login image"
      />
      <motion.div
        {...heroTextLeft}
        className="z-10 w-full md:w-880 transition-all duration-[2s] px-8 md:px-20 py-3 md:py-6 bg-transparent flex items-center justify-start text-white"
      >
        <p className="text-3xl md:text-5xl font-semibold">
          Lorem ipsum dolor sit, amet
        </p>
      </motion.div>
      <motion.div
        {...heroTextRight}
        className="z-10 w-full md:w-880 transition-all duration-[2s] px-8 md:px-20 py-3 md:py-6 bg-transparent flex items-center justify-start text-white"
      >
        <p className="text-xl md:text-3xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          iure autem similique corrupti doloremque maxime neque facere nam
        </p>
      </motion.div>
      <motion.div
        {...heroTextTop}
        className="z-10 w-full md:w-880 transition-all duration-[2s] px-8 md:px-20 py-6 bg-transparent flex items-center justify-start gap-4"
      >
        <motion.button
          {...buttonClick}
          className="px-4 text-xl py-2 shadow-md border bg-emerald-800 rounded-md hover:bg-emerald-600 text-white cursor-pointer"
        >
          Məhsullar
        </motion.button>
        <motion.button
          {...buttonClick}
          className="px-4 text-xl py-2 shadow-md border bg-emerald-800 rounded-md hover:bg-emerald-600 text-white cursor-pointer"
        >
          Haqqımızda
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
