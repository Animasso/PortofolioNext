import Image from "next/image";

const BoxSkills = ({ logoSkill, stack }) => {
  return (
    <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={logoSkill} alt="logo" width="64" height="64" />
        </div>
        <div>
          <h3 className="uppercase flex flex-col items-center justify-center">
            {" "}
            {stack}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default BoxSkills;
