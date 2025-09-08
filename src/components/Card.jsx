import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover = "false", height = "null" }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "23px",
      }}
      className={`bg-zinc-800 p-5 rounded-xl flex flex-col justify-between min-h-[20rem] sm:min-h-[25rem] ${height} ${width}`}
    >
      {/* Top Section */}
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-sm sm:text-base">
            {para ? "Up Next: Culture" : "Get In Touch"}
          </h3>
          <IoIosArrowRoundForward className="text-xl sm:text-2xl" />
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-normal mt-5 sm:mt-7">
          {para ? "Who we are" : <>Let's get to it,<br />together.</>}
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="down w-full mt-4 sm:mt-0">
        {start && (
          <>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium leading-tight sm:leading-none">
              Start a Project
            </h1>
            <button className="rounded-full px-4 sm:px-5 py-2 border border-zinc-300 mt-4 sm:mt-5 font-light text-sm sm:text-base">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-2 sm:mt-0">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
