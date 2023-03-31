import Image from "next/image";
import { motion } from "framer-motion";
const BoxSkills = ({ logoSkill, stack }) => {
  return (
    <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
        className="grid grid-cols-2 gap-4 justify-center items-center"
        data-aos="flip-left"
      >
        <div className="m-auto">
          <Image src={logoSkill} alt="logo" width="64" height="64" />
        </div>
        <div>
          <h3 className="uppercase flex flex-col items-center justify-center">
            {" "}
            {stack}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};
export default BoxSkills;
