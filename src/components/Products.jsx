import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import Arqitel from "../assets/Arqitel.webm";
import TTR from "../assets/TTR.webm";
import Yahoo from "../assets/Yahoo.webm";
import YIR from "../assets/YIR.webm";


const Products = () => {
  let products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR AI",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];

  let [position, setPosition] = useState(0);
  let [opacity, setOpacity] = useState(0)
  const mover = (val) => {
    setPosition(val * 18);
  };

  const videos = [Arqitel, TTR, YIR, Yahoo];
  
  return (
    <div className="mt-16 relative">
      {products.map((val, index) => (
        <Product val={val} mover={mover} setOpacity={setOpacity} index={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position }}
          animate={{ y: position + `rem`, opacity }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
          style={{opacity}}
          className="window absolute w-[33rem] h-[18rem] left-[25%] overflow-hidden rounded-md"
        >

          {videos.map((video, i) => (
            <motion.div
            key={i}
            animate={{ y: -position + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1 ], duration: 0.3}}
            className="w-full h-full"
          >
            <video className="w-full h-full object-cover" src={video} autoPlay loop muted playsInline></video>
          </motion.div>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default Products;
