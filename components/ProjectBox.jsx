import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectBox = ({ pic, projectName, stack, projectUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        ease: "easeIn",
      }}
      className="relative flex justify-center items-center min-h-[150px] lg:min-h-[310px] w-full max-w-[400px] rounded-xl shadow-xl shadow-gray-500 group overflow-hidden"
    >
      {/* Image visible en entier sans déformation */}
      <Image
        src={pic}
        alt={projectName}
        width={200}
        height={150}
        className="object-cover w-full h-full rounded-xl group-hover:opacity-10 transition-opacity duration-300"
      />

      {/* Texte au hover, centré, responsive */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/0">
        <h3 className="text-sm sm:text-base md:text-lg text-blue-600 font-semibold break-words">
          {projectName}
        </h3>
        <p className="py-2 text-xs sm:text-sm text-blue-600 break-words">
          {stack}
        </p>
        <Link href={projectUrl}>
          <p className="py-2 px-4 bg-blue-500 rounded-lg text-gray-800 text-xs sm:text-sm md:text-base font-semibold hover:bg-blue-600">
            Plus d&apos;info
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
