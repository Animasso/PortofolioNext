import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

function TechLines({ tech }) {
  // useEffect(() => {
  //   AOS.init({ duration: 3000 });
  // }, []);
  return (
    <>
      <p
        className=" text-gray-600 py-2 flex items-center"
        // data-aos="zoom-in-left"
      >
        <RiRadioButtonFill className=" pr-1" /> {tech}
      </p>
    </>
  );
}

export default TechLines;
