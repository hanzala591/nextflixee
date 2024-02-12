import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCaretDown, faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="w-[100%] bg-black py-[70px] text-white">
      <div className="max-w-[1100px] md:px-8 px-5 mx-auto underline">
        <div>Questions? Contact us.</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
          <div>
            <ul>
              <a className="block py-1">FAQ</a>
              <a className="block py-1">Investor Relations</a>
              <a className="block py-1">Privacy</a>
              <a className="block py-1">Speed Test</a>
            </ul>
          </div>
          <div>
            <ul>
              <a className="block py-1">Help Center</a>
              <a className="block py-1">Jobs</a>
              <a className="block py-1">Cookie Preferences</a>
              <a className="block py-1">Legal Notices</a>
            </ul>
          </div>
          <div>
            <ul>
              <a className="block py-1">Account</a>
              <a className="block py-1">Ways to Watch</a>
              <a className="block py-1">Corporate Information</a>
              <a className="block py-1">Only on Netflix</a>
            </ul>
          </div>
          <div>
            <ul>
              <a className="block py-1">Media Center</a>
              <a className="block py-1">Terms of Use</a>
              <a className="block py-1">Contact Us</a>
            </ul>
          </div>
        </div>
        <div className="p-[5px_10px] border w-fit mt-5 rounded">
          <FontAwesomeIcon icon={faLanguage} className="text-white pr-2" />
          <button>English</button>
          <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
        </div>
      </div>
    </div>
  );
}
