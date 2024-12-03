import React from "react";
import AboutImg from "../about-img.jpg";
import { motion } from "motion/react";

const Portfolio = () => {
  return (
    <div id="projects">
      <motion.div
        initial={{ y: "100px" }}
        whileInView={{ y: "0px" }}
        transition={{ duration: "0.4" }}
        className="text-center pt-[130px] pb-[100px]"
      >
        <p className="uppercase tracking-[5px]">Portfolio</p>
        <h2 className="text-[40px] font-bold">Checkout a few of my works</h2>
      </motion.div>

      <div className="flex sm:justify-center flex-wrap gap-y-[100px] ">
        <div className="flex flex-col gap-y-10 sm:w-[80%] xl:w-[100%] xl:items-center md:flex-row justify-center flex-wrap">
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.6" }}
            className="md:w-[30%] xl:w-[40%]"
          >
            <img src={AboutImg} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.6" }}
            className="px-8 md:w-[60%] xl:w-[50%]"
          >
            <h2 className="text-3xl leading-normal mb-7 font-medium">Title</h2>
            <p className="text-[#8c8c8c] text-lg mb-5">
              (desc) Even the all-powerful Pointing has no control about the
              blind texts it is an almost unorthographic life One day however a
              small line of blind text.
            </p>
            <p className="text-[#8c8c8c] text-[13px] mb-2">
              Stack used / Stack used / Stack used
            </p>

            <div className=" flex gap-x-[20px] mt-5">
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Demo
              </p>
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Code
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-y-10 sm:w-[80%] xl:w-[100%] xl:items-center justify-center flex-wrap">
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.8" }}
            className="md:w-[30%] xl:w-[40%]"
          >
            <img src={AboutImg} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.8" }}
            className="px-8 md:w-[60%] xl:w-[50%]"
          >
            <h2 className="text-3xl leading-normal mb-7 font-medium">Title</h2>
            <p className="text-[#8c8c8c] text-lg mb-5">
              (desc) Even the all-powerful Pointing has no control about the
              blind texts it is an almost unorthographic life One day however a
              small line of blind text.
            </p>
            <p className="text-[#8c8c8c] text-[13px] mb-2">
              Stack used / Stack used / Stack used
            </p>

            <div className="flex gap-x-[20px] mt-5">
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Demo
              </p>
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Code
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-y-10 sm:w-[80%] xl:w-[100%] xl:items-center md:flex-row justify-center flex-wrap">
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.10" }}
            className="md:w-[30%] xl:w-[40%]"
          >
            <img src={AboutImg} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.10" }}
            className="px-8 md:w-[60%] xl:w-[50%]"
          >
            <h2 className="text-3xl leading-normal mb-7 font-medium">Title</h2>
            <p className="text-[#8c8c8c] text-lg mb-5">
              (desc) Even the all-powerful Pointing has no control about the
              blind texts it is an almost unorthographic life One day however a
              small line of blind text.
            </p>
            <p className="text-[#8c8c8c] text-[13px] mb-2">
              Stack used / Stack used / Stack used
            </p>

            <div className="flex gap-x-[20px] mt-5">
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Demo
              </p>
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Code
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-y-10 sm:w-[80%] xl:w-[100%] xl:items-center justify-center flex-wrap">
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.12" }}
            className="md:w-[30%] xl:w-[40%]"
          >
            <img src={AboutImg} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.12" }}
            className="px-8 md:w-[60%] xl:w-[50%]"
          >
            <h2 className="text-3xl leading-normal mb-7 font-medium">Title</h2>
            <p className="text-[#8c8c8c] text-lg mb-5">
              (desc) Even the all-powerful Pointing has no control about the
              blind texts it is an almost unorthographic life One day however a
              small line of blind text.
            </p>
            <p className="text-[#8c8c8c] text-[13px] mb-2">
              Stack used / Stack used / Stack used
            </p>

            <div className="flex gap-x-[20px] mt-5">
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Demo
              </p>
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Code
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
