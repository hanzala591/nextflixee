import React from "react";

export default function Header() {
  return (
    <div className="w-[100%]  sm:min-h-[100vh] h-[80vh] bg-[url(./../public/Netflix/header.jpg)] bg-center bg-cover ">
      <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)]">
        <div className="max-w-[1100px] pt-4  px-4 mx-auto flex items-center justify-between">
          <h1 className="text-[red] sm:text-6xl text-3xl font-bold">Netflix</h1>
          <div>
            <button className="text-white rounded bg-[red] sm:p-[5px_15px] p-[3px_9px] font-semibold">
              Sign in
            </button>
          </div>
        </div>
        <div className="max-w-[1100px] sm:p-[150px_10px] p-[130px_10px] mx-auto">
          <h1 className="text-white sm:text-5xl text-3xl text-center font-bold">
            Unlimited movies, TV shows, and more
          </h1>
          <h4 className=" text-center text-white sm:text-2xl text-xl py-5">
            Watch anywhere. Cancel anytime.
          </h4>
          <h6 className="text-white text-center px-[13px] text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h6>
          <div className="flex sm:flex-row flex-col justify-center sm:gap-3 gap-6 mt-6">
            <div className="flex justify-center">
              <input
                className="rounded text-white bg-[rgba(0,0,0,0.3)] border-[1px] p-[10px_20px] border-gray-500"
                placeholder="Email address"
              />
            </div>
            <div className="flex justify-center">
              <button className="text-white bg-red-600 hover:bg-red-700 p-[10px_20px] duration-300 rounded font-semibold">
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
