import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const FeildSelection = () => {
  const industry_list = [
    "Software development",
    "Accounting",
    "Administration",
    "Data Entry",
    "Teaching",
  ];
  const navigate = useNavigate();
  const [industry, setIndustry] = useState("");
  const handleclick = () => {
    if (industry === industry_list[0]) {
      navigate("/");
    } else {
    }
  };

  return (
    <>
      <div className="flex justify-center lg:pt-20 text-white font-poppins bg-gradient-to-r from-violet-200 lg: w-[100vw] lg:h-[100vh] ">
        <div className="flex flex-col bg-violet-500 opacity-80 items-center lg:w-[50vh] lg:h-[45vw] h-[100vh] w-[100vw] rounded-md shadow-xl pt-28">
          <h1 className="text-5xl font-Kaushan">TaskEasy</h1>
          <h1 className="pt-20 pb-2">Select Your Intustry</h1>
          <select
            className="py-2 lg:w-64 rounded-md  border-2 border-gray-500 text-black "
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            {industry_list.map((obj) => (
              <option className="">{obj}</option>
            ))}
          </select>
          <label htmlFor="" className="pt-2">
            Create a Project
          </label>
          <input
            type="text"
            placeholder="Project Name"
            className="py-2 w-52 mt-3 lg:w-64 rounded-md text-black"
          />

          <button
            className=" mt-12 bg-white text-black py-2 px-7 text-lg font-semibold rounded-md shadow-2xl "
            onClick={handleclick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FeildSelection;
