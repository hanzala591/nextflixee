import React from "react";

export default function Enjoy() {
  return (
    <div className="w-[100%] md:py-[100px] py-[50px] bg-black">
      <div className="max-w-[1100px] px-8 text-white mx-auto">
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <div className="flex-1">
            <h1 className="sm:text-5xl text-3xl font-bold pb-4">
              Enjoy on your TV
            </h1>
            <span className="sm:text-2xl text-xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </span>
          </div>
          <div className="flex-1 relative">
            <img
              src="Netflix/desktop.png"
              alt="imgage not found"
              className="z-[2]"
            ></img>
            <div className="absolute left-[14%] top-[22%] max-w-[71%] max-h-[40%] z-[1]]">
              <video
                src="Netflix/vedio.m4v"
                autoPlay
                muted
                playsInline
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
