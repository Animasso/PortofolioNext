import React from "react";

import { RiRadioButtonFill } from "react-icons/ri";

function TechLines({ tech }) {
  return (
    <>
      <p className=" text-gray-600 py-2 flex items-center">
        <RiRadioButtonFill className=" pr-1" /> {tech}
      </p>
    </>
  );
}

export default TechLines;
