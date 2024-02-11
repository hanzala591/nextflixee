import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function FrequentQAs(props) {
  const questionAnswer = props.questionAnswer;
  const [icon, setIcon] = useState(faPlus);
  const [display, setDisplay] = useState("hidden");

  const opened = () => {
    if (icon == faPlus) {
      setIcon(faXmark);
      setDisplay("");
    } else {
      setIcon(faPlus);
      setDisplay("hidden");
    }
  };

  return (
    <div>
      <div
        className="w-[100%] mt-3 bg-gray-900 hover:bg-gray-700 hover:cursor-pointer"
        onClick={opened}
      >
        <div className="flex p-[20px_10px] justify-between items-center">
          <p className="sm:text-2xl text-xl">{questionAnswer.question}</p>
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
      </div>
      <div className="w-[100%] bg-gray-900 ">
        <div className={display}>
          <div className="h-[3px] bg-black"></div>
          <div className="p-[20px_10px] items-center">
            <p>{questionAnswer.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
