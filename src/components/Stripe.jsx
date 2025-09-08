import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 py-4 px-4 
      border-t-[1.2px] border-b-[1.2px] lg:border-r-[1.2px] border-zinc-700 
      flex items-center justify-between max-lg:border-r-[1.2px] max-lg:border-l-[1.2px]">
      {/* <img className='w-20' src={val.url} alt="" /> */}
      <span className="font-semibold text-xs sm:text-sm">{val.url}</span>
      <span className="font-semibold text-xs sm:text-sm">{val.number}</span>
    </div>
  );
};

export default Stripe;
