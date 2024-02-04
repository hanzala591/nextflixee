import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function FrequentQAs() {
  return (
    <div>
      <div className="w-[100%] mt-3 mb-2 bg-gray-900 hover:bg-gray-700 hover:cursor-pointer">
        <div className="flex p-[20px_10px] justify-between items-center">
          <p className="sm:text-2xl text-xl">What is Netflix?</p>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </div>
        <div className="h-[3px] bg-black"></div>
        <div className="p-[20px_10px] items-center">
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.{" "}
          </p>
          <p>
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </p>
        </div>
      </div>
      <div className="w-[100%] mt-3 mb-2 bg-gray-900 hover:bg-gray-700 hover:cursor-pointer">
        <div className="flex p-[20px_10px] justify-between items-center">
          <p className="sm:text-2xl text-xl">What is Netflix?</p>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </div>
      </div>
    </div>
  );
}
