import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  const [text, setText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="w-full h-[calc(100vh-90px)] flex justify-center items-center"
    >
      <div className="text-center">
        <motion.p
          key={text ? `Hello! I'm` : `I'm a`}
          initial={{ y: "100px" }}
          animate={{ y: "0px" }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: "0.7" }}
          className="uppercase tracking-[5px] text-[#FFFFFF99] md:text-lg xl:text-2xl mb-4 md:mb-7"
        >
          {text ? `Hello! I'm` : `I'm a`}
        </motion.p>
        <motion.p
          key={text ? `Shukurah Nurudeen` : `Website Developer`}
          initial={{ y: "100px" }}
          animate={{ y: "0px" }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: "0.7" }}
          className="uppercase text-[40px] tracking-[5px] mb-4 font-bold leading-[50px] px-4 md:text-5xl xl:text-6xl"
        >
          {text ? `Shukurah Nurudeen` : `Website Developer`}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
