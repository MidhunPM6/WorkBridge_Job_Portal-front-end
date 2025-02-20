import React, { useState } from "react";

import PersonalDetails from "./PersonalDetails";
import ExperienceComp from "./ExperienceComp";
import EducationDetails from "./EducationDetails";
import AccountSetting from "./AccountSetting";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState("");

  // Render components based on the selected menu option
  const renderComponent = () => {
    switch (activeComponent) {
      case "PersonalDetails":
        return <PersonalDetails />;
      case "Experience":
        return <ExperienceComp />;
      case "EducationDetails":
        return <EducationDetails />;
      case "AccountSetting":
        return <AccountSetting />;
      default:
        return <PersonalDetails />;
    }
  };

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex mt-16 justify-center">
      <div className="flex  items-start">
        {/* Side Menu */}
        <div
          className={`bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800 via-black to-slate-800 p-6 rounded-lg shadow-lg 
            ${isOpen ? "block" : "hidden"} 
            sm:block w-72`}
        >
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveComponent("PersonalDetails")}
                className="flex items-center text-white hover:text-gray-300"
              >
                Personal Details
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent("Experience")}
                className="flex items-center text-white hover:text-gray-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent("EducationDetails")}
                className="flex items-center text-white hover:text-gray-300"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent("AccountSetting")}
                className="flex items-center text-white hover:text-gray-300"
              >
                Account Settings
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 rounded-lg shadow-2xl ml-6 w-full max-w-2xl">
          {renderComponent()}
        </div>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleMenu}
        className="fixed top-5 left-5 z-10 bg-gray-800 text-white p-3 rounded-full sm:hidden"
      >
        {isOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
};

export default SideMenu;
