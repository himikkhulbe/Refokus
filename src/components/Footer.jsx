import React from "react";

const Footer = () => {
  return (
    <div className="w-full pb-10">
      <div className="max-w-screen-xl mx-auto flex items-center gap-10">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-400 capitalize">socials</h4>
            {["instagram", "twitter(X)", "LinkedIn"].map((item, index) => (
              <a className="block mt-2 capitalize text-zinc-400">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-400 capitalize">socials</h4>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a className="block mt-2 capitalize">{item}</a>
            ))}
          </div>
          <div className="flex flex-col items-end mt-12">
            <p className="mb-10 text-right">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <span className="px-2 py-2 bg-blue-700 text-sm"><span className="italic font-bold">W&nbsp;&nbsp;&nbsp;</span>Enterprise Partner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
