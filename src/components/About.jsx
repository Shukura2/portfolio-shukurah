import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col flex-wrap gap-y-10 md:flex-row md:justify-between"
    >
      <motion.div
        initial={{ opacity: "0", x: "-200px" }}
        whileInView={{ opacity: "1", x: "0" }}
        transition={{ duration: "0.5" }}
        className="md:w-[40%] xl:w-[30%]"
      >
        <img src="/images/aboutimg.jpg" alt="" />
      </motion.div>

      <motion.div
        initial={{ y: "100px" }}
        whileInView={{ y: "0px" }}
        transition={{ duration: "0.7" }}
        className="md:w-[50%] xl:w-[55%] relative"
      >
        <div className="hidden xl:block text-[180px] z-[-1]  text-[#242323] absolute top-[-170px] left-[-50px] font-extrabold uppercase">
          ABOUT
        </div>

        <p className="text-white mb-[70px] text-xl hidden xl:block">
          Hi! I'm Shukurah Nurudeen
        </p>
        <p className="text-[#8c8c8c] xl:w-[80%] text-lg">
          As a frontend developer, I aim to create seamless and user-centric web
          experiences that bridge design and functionality. With a foundational
          understanding of backend systems and databases, I strive to deliver
          cohesive and efficient solutions that align with modern web standards
          and user needs.
        </p>
        <p className="my-5 text-[#2f89fc] text-lg">Checkout my resume</p>
        <div className="flex gap-x-3">
          <Link
            to="https://linkedin.com/in/shukurah-nurudeen-200b68197"
            className="bg-[#ffffff0d] w-14 h-14 rounded-full text-[#2f89fc] flex justify-center items-center"
          >
            <FaLinkedin className="text-[25px]" />
          </Link>

          <Link
            to="https://twitter.com/Shukurah_k"
            className="bg-[#ffffff0d] w-14 h-14 rounded-full text-[#2f89fc] flex justify-center items-center"
          >
            <FaTwitter className=" text-[25px]" />
          </Link>

          <Link
            to="https://github.com/Shukura2"
            className="bg-[#ffffff0d] w-14 h-14 rounded-full text-[#2f89fc] flex justify-center items-center"
          >
            <FaGithub className=" text-[25px]" />
          </Link>
        </div>

        <h5 className="my-5 text-xl">Contact me here!</h5>
        <p className="text-lg text-[#8c8c8c]">
          Email:{" "}
          <span>
            <Link
              to="mailto: shukurahkike@gmail.com"
              className="text-[#2f89fc]"
            >
              shukurahkike@gmail.com
            </Link>
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
