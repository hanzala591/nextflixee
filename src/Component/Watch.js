import React from "react";

export default function Watch() {
  return (
    <div className="w-[100%] md:py-[100px] py-[50px] bg-black">
      <div className="max-w-[1100px] px-8 text-white mx-auto">
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <div className="flex-1">
            <h1 className="sm:text-5xl text-3xl font-bold pb-4">
              Watch everywhere
            </h1>
            <span className="sm:text-2xl text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </span>
          </div>
          <div className="flex-1 relative"></div>
        </div>
      </div>
    </div>
  );
}
