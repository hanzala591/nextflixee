import React from "react";

export default function CreateProfile() {
  return (
    <div className="w-[100%] md:py-[100px] py-[50px] bg-black">
      <div className="max-w-[1100px] px-8 text-white mx-auto">
        <div className="flex md:flex-row flex-col gap-8 items-center">
          <div className="flex-1 relative">
            <img src="Netflix/img.png"></img>
          </div>
          <div className="flex-1">
            <h1 className="sm:text-5xl text-3xl font-bold pb-4">
              Create profiles for kids
            </h1>
            <span className="sm:text-2xl text-xl">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
