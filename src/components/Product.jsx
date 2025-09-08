import React from "react";
import Button from "./Button";

const Product = ({ val, mover, index, setOpacity }) => {
  return (
    <div className="w-full py-14 h-auto lg:h-[18rem] text-white max-lg:px-5 max-lg:hover:bg-[#1430D4] duration-1000 max-lg:rounded-lg">
      <div
        onMouseEnter={() => {
          mover(index);
          setOpacity(1);
        }}
        onMouseLeave={() => {
          setOpacity(0);
        }}
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium capitalize">
          {val.title}
        </h1>

        {/* Details */}
        <div className="dets w-full lg:w-1/3">
          <p className="mb-6 lg:mb-10 text-sm sm:text-base md:text-lg">
            {val.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
