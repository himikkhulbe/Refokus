import { motion } from "framer-motion";

const Marquee = ({ imagesURL, direction }) => {
  return (
    <div className="flex w-full py-5 overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{repeat: Infinity, ease:"linear", duration:20}}
        className="flex flex-shrink-0 gap-[8rem] py-2 px-[4rem]"
      >
        {imagesURL.map((url) => (
          <img src={url} className="w-28" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{repeat: Infinity, ease:"linear", duration:20}}
        className="flex flex-shrink-0 gap-[8rem] py-2 px-[4rem]"
      >
        {imagesURL.map((url) => (
          <img src={url} className="w-28" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
