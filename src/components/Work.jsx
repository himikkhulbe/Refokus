import React, { useState } from "react";
import { motion, useScroll } from "motion/react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7b1365533469003a2ea4_thumbnail_4_3.png",
      top: "60%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67927da839051b812d25de74_brightwave-thumbnail-4_3.png",
      top: "66%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203.webp",
      top: "62%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d20d502275e293f0367f_Analog%20Way-%204%203-min.webp",
      top: "57%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6792867f19f728bf3062fb63_thumbnail-4_3.png",
      top: "69%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5e725f1b8b3c5e55b0c_Rocket%20Chat%20-%204%203.webp",
      top: "54%",
      left: "54%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showImages(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 4:
        showImages([0, 1, 2, 3]);
        break;
      case 6:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 8:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-lg mx-auto px-4">
        {/* Responsive heading */}
        <h1 className="text-[30vw] sm:text-[25vw] md:text-[30vw] max-md:pt-10 leading-none text-center font-medium select-none">
          work
        </h1>

        {/* Positioned images */}
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="w-28 sm:w-40 md:w-52 lg:w-64 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
