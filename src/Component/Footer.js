import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faCake,
  faCaretDown,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="w-[100%] bg-black py-[70px] text-white">
      <div className="max-w-[1100px] md:px-8 px-5 mx-auto underline">
        <div>Questions? Contact us.</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
          <div>
            <ul>
              <a className="block py-1 cursor-pointer">FAQ</a>
              <a className="block py-1 cursor-pointer">Investor Relations</a>
              <a className="block py-1 cursor-pointer">Privacy</a>
              <a className="block py-1 cursor-pointer">Speed Test</a>
            </ul>
          </div>
          <div>
            <ul>
              <a className="block py-1 cursor-pointer">Help Center</a>
              <a className="block py-1 cursor-pointer">Jobs</a>
              <a className="block py-1 cursor-pointer">Cookie Preferences</a>
              <a className="block py-1 cursor-pointer">Legal Notices</a>
            </ul>
          </div>
          <div>
            <ul>
              <a className="block py-1 cursor-pointer">Account</a>
              <a className="block py-1 cursor-pointer">Ways to Watch</a>
              <a className="block py-1 cursor-pointer">Corporate Information</a>
              <a className="block py-1 cursor-pointer">Only on Netflix</a>
            </ul>
          </div>
          <div>
            <ul>
              <a className="block py-1 cursor-pointer">Media Center</a>
              <a className="block py-1 cursor-pointer">Terms of Use</a>
              <a className="block py-1 cursor-pointer">Contact Us</a>
            </ul>
          </div>
        </div>
        <button className="p-[5px_10px] border w-fit mt-5 rounded">
          <FontAwesomeIcon icon={faLanguage} className="text-white pr-2" />
          English
          <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
        </button>
      </div>
    </div>
  );
}
