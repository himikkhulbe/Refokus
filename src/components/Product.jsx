import React from "react";
import Button from "./Button";

const Product = ({ val, mover, index, setOpacity }) => {
  return (
    <div className="w-full py-14 h-[18rem] text-white">
      <div
        onMouseEnter={() => {
          mover(index);
          setOpacity(1)
        }}
        onMouseLeave={() => {
          setOpacity(0)
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl font-medium capitalize">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-4">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
