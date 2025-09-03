import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover="false" }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff", padding: "23px"}} className={`bg-zinc-800 p-5 rounded-xl flex flex-col justify-between min-h-[25rem] ${width}`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{para ? "Up Next: Culture" : "Get In Touch"}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-2xl font-normal mt-7">{para ? "Who we are" : <>Let's get to it,<br />together.</>}</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-8xl font-medium leading-none">
              Start a Project
            </h1>
            <button className="rounded-full px-5 py-2 border-[1px] border-zinc-300 mt-5 font-light">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-400 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
