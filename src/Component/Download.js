import React from "react";

export default function Download() {
  return (
    <div className="w-[100%] md:py-[100px] py-[50px] bg-black">
      <div className="max-w-[1100px] px-8 text-white mx-auto">
        <div className="flex md:flex-row flex-col gap-8 items-center">
          <div className="flex-1 relative">
            <img src="Netflix/mobile.jpg"></img>
            <div className="absolute border border-[white] w-[60%]  bg-black right-0 left-0 bottom-[10%] mx-auto p-2 rounded-lg">
              <div className="flex gap-4 items-center">
                <img
                  src="Netflix/boxshot.png"
                  className="sm:w-[3rem] w-[2rem]"
                ></img>
                <span>
                  <h5 className="text-white font-semibold">Stranger Things</h5>
                  <p className="text-blue-700">Downloading...</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="sm:text-5xl text-3xl font-bold pb-4">
              Download your shows to watch offline
            </h1>
            <span className="sm:text-2xl text-xl">
              Save your favorites easily and always have something to watch.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
