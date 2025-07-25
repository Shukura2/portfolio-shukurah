import { motion } from "motion/react";
import { Link } from "react-router";

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
            <img src="/images/agenda.png" alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.6" }}
            className="px-8 md:w-[60%] xl:w-[50%]"
          >
            <h2 className="text-3xl leading-normal mb-7 font-medium">Agenda</h2>
            <p className="text-[#8c8c8c] text-lg mb-5">
              A fullstack application for managing events, users and feedback
            </p>
            <p className="text-[#8c8c8c] text-[13px] mb-2">
              NextJS / Express JS / PostgreSQL
            </p>

            <div className=" flex gap-x-[20px] mt-5">
              <Link
                to="https://event-management-client-eta.vercel.app/"
                className="text-[#2f89fc] text-lg leading-relaxed pb-8"
              >
                Demo
              </Link>
              <Link
                to="https://github.com/Shukura2/event-management-client"
                className="text-[#2f89fc] text-lg leading-relaxed pb-8"
              >
                Code
              </Link>
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
            <img src="/images/task-management.png" alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.8" }}
            className="px-8 md:w-[60%] xl:w-[50%]"
          >
            <h2 className="text-3xl leading-normal mb-7 font-medium">
              Task Management App
            </h2>
            <p className="text-[#8c8c8c] text-lg mb-5">
              A simple task tracking application for organizing and managing
              daily tasks with notification.
            </p>
            <p className="text-[#8c8c8c] text-[13px] mb-2">
              NextJS / Firebase / Tailwind CSS
            </p>

            <div className="flex gap-x-[20px] mt-5">
              <Link
                to="https://task-management-app-47u8.vercel.app/"
                className="text-[#2f89fc] text-lg leading-relaxed pb-8"
              >
                Demo
              </Link>
              <Link
                to="https://github.com/Shukura2/task-management-app"
                className="text-[#2f89fc] text-lg leading-relaxed pb-8"
              >
                Code
              </Link>
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
            <img src="/images/startup-landing-p.png" alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.10" }}
            className="px-8 md:w-[60%] xl:w-[50%]"
          >
            <h2 className="text-3xl leading-normal mb-7 font-medium">
              StartUp Landing Page
            </h2>
            <p className="text-[#8c8c8c] text-lg mb-5">
              A responsive landing page designed to showcase products and
              services and also drive user engagement.
            </p>
            <p className="text-[#8c8c8c] text-[13px] mb-2">
              ReactJS / Material UI
            </p>

            <div className="flex gap-x-[20px] mt-5">
              <Link
                to="https://startup-landing-page-design.netlify.app/"
                className="text-[#2f89fc] text-lg leading-relaxed pb-8"
              >
                Demo
              </Link>
              <Link
                to="https://github.com/Shukura2/startup-landing-page"
                className="text-[#2f89fc] text-lg leading-relaxed pb-8"
              >
                Code
              </Link>
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
            <img src="/images/Screenshot portfolio.png" alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "100px" }}
            whileInView={{ y: "0px" }}
            transition={{ duration: "0.12" }}
            className="px-8 md:w-[60%] xl:w-[50%]"
          >
            <h2 className="text-3xl leading-normal mb-7 font-medium">
              Portfolio Design
            </h2>
            <p className="text-[#8c8c8c] text-lg mb-5">
              A personal portfolio app to showcase projects, skills, and
              experience in a clean, responsive layout.
            </p>
            <p className="text-[#8c8c8c] text-[13px] mb-2">
              ReactJS / Tailwind CSS / React Scroll
            </p>

            <div className="flex gap-x-[20px] mt-5">
              <p className="text-[#2f89fc] text-lg leading-relaxed pb-8">
                Demo
              </p>
              <Link
                to="https://github.com/Shukura2/portfolio-shukurah"
                className="text-[#2f89fc] text-lg leading-relaxed pb-8"
              >
                Code
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
