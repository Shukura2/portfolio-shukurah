import { motion } from "motion/react";

const data = [
  { id: 1, logo: "/images/nextjs-logo.png", width: "40px", height: "40px" },
  { id: 2, logo: "/images/react-logo.png", width: "40px", height: "40px" },
  { id: 3, logo: "/images/redux.png", width: "45px", height: "40px" },
  { id: 4, logo: "/images/javascript.png", width: "40px", height: "40px" },
  { id: 5, logo: "/images/typescript-logo.png", width: "40px", height: "40px" },
  { id: 6, logo: "/images/api-logo.jpg", width: "40px", height: "40px" },
  {
    id: 7,
    logo: "/images/Tailwind_CSS_Logo.svg.png",
    width: "40px",
    height: "40px",
  },
  { id: 8, logo: "/images/mui.png", width: "40px", height: "40px" },
  { id: 10, logo: "/images/express_js.png", width: "40px", height: "40px" },
  { id: 11, logo: "/images/github.png", width: "40px", height: "40px" },
  { id: 13, logo: "/images/nodejs.png", width: "40px", height: "40px" },
  { id: 14, logo: "/images/Postgresql.png", width: "40px", height: "40px" },
  { id: 15, logo: "/images/Figma-logo.svg.png", width: "40px", height: "40px" },
];

const MyServices = () => {
  return (
    <motion.div
      initial={{ y: "100px" }}
      whileInView={{ y: "0px" }}
      transition={{ duration: "0.9" }}
      id="skills"
      className="mb-12 md:mb-24"
    >
      <div className="text-center pt-[130px] pb-12 md:pb-[100px]">
        <p className="uppercase tracking-[5px]">skills</p>
        <h2 className="text-[40px] font-bold">Tools I Use</h2>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap gap-4 justify-between md:justify-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[70px] h-[70px] grayscale hover:grayscale-0 transition duration-300 ease-in-out border border-[#8c8c8c] flex justify-center items-center rounded-xl"
            >
              <img src={item.logo} width={item.width} height={item.height} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MyServices;
