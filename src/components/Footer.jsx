import React from "react";

const Footer = () => {
  return (
    <div className="w-full pb-10 py-10 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10">
        
        {/* Left Logo */}
        <div className="w-full lg:basis-1/2 text-center lg:text-left">
          <h1 className="text-7xl max-sm:text-[6rem] sm:text-9xl lg:text-[11rem] font-semibold tracking-tight leading-none">
            refokus.
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-full lg:basis-1/2 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-8">
          
          {/* Socials */}
          <div className="w-1/2 sm:w-auto">
            <h4 className="mb-4 sm:mb-10 text-zinc-400 capitalize">socials</h4>
            {["instagram", "twitter(X)", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                className="block mt-2 capitalize text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Pages */}
          <div className="w-1/2 sm:w-auto">
            <h4 className="mb-4 sm:mb-10 text-zinc-400 capitalize">pages</h4>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a
                key={index}
                className="block mt-2 capitalize text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Description + Badge */}
          <div className="w-full sm:flex-1 flex flex-col items-start sm:items-end mt-4 sm:mt-12">
            <p className="mb-6 sm:mb-10 text-left sm:text-right text-sm sm:text-base text-zinc-400">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <span className="px-3 py-2 bg-blue-700 text-sm rounded-md">
              <span className="italic font-bold">W&nbsp;&nbsp;&nbsp;</span>
              Enterprise Partner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
