import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <motion.div
      initial={{ y: "100px" }}
      animate={{ y: "0px" }}
      transition={{ duration: "0.6" }}
      id="contact"
      className="py-24 xl:pt-36 text-center "
    >
      <div className="flex justify-center">
        <div className="flex gap-x-4 mb-14">
          <Link
            to="https://linkedin.com/in/shukurah-nurudeen-200b68197"
            className="bg-[#ffffff0d] w-14 h-14 rounded-full text-[#2f89fc] flex justify-center items-center"
          >
            <FaLinkedin className=" text-[25px]" />
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
            <FaGithub className="text-[25px]" />
          </Link>
        </div>
      </div>

      <h3 className="font-bold text-4xl mb-2">Let's Connect</h3>
      <Link to="mailto: shukurahkike@gmail.com" className="text-[#2f89fc]">
        shukurahkike@gmail.com
      </Link>
    </motion.div>
  );
};

export default Contact;
