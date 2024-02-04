import React from "react";
import FrequentQAs from "./FrequentQAs";

export default function Question() {
  return (
    <div>
      <div className="w-[100%] py-[100px] bg-black ">
        <div className="max-w-[1100px] mx-auto text-white">
          <h1 className="text-center sm:text-5xl text-3xl font-bold pb-4">
            Frequently Asked Questions
          </h1>
          <FrequentQAs></FrequentQAs>
        </div>
      </div>
    </div>
  );
}
