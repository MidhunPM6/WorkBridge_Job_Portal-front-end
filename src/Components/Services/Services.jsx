import React from "react";
import todoimg from "../../assets/services/todo-list.png";
import wordimg from "../../assets/services/word.png";
import presentationimg from "../../assets/services/presentation.png";
import teamsimg from "../../assets/services/teams.png";
import timeimg from "../../assets/services/time.png";
import templateimg from "../../assets/services/template.png";

const Services = () => {
  return (
    <>
      <div className="flex flex-col font-poppins bg-slate-50" id="service">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 place-content-center pt-20 pb-16 max-w-6xl mx-auto">
          <div className="p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-200">
            <img src={todoimg} alt="To-Do List" className="w-12" />
            <h1 className="pt-2 text-lg font-semibold">To-Do List</h1>
            <p className="pt-2 text-center hover:text-violet-600">
              Whether you're managing <br /> daily tasks, tracking projects,
              <br /> or just keeping a list of things <br /> to remember, this
              tool helps you <br /> stay on top of everything.
            </p>
          </div>

          <div className="p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-200">
            <img src={wordimg} alt="Word Feature" className="w-12" />
            <h1 className="pt-2 text-lg font-semibold">Word</h1>
            <p className="pt-2 text-center hover:text-violet-600">
              With our Word Feature, creating <br /> and managing documents has{" "}
              <br /> never been easier. Designed for <br /> efficiency and
              flexibility.
            </p>
          </div>

          <div className="p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-200">
            <img
              src={presentationimg}
              alt="Presentation Feature"
              className="w-12"
            />
            <h1 className="pt-2 text-lg font-semibold">Presentation</h1>
            <p className="pt-2 text-center hover:text-violet-600">
              Design professional and <br /> engaging presentations <br />{" "}
              effortlessly with our powerful <br /> Presentation Feature.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 place-content-center pt-10 pb-28 max-w-6xl mx-auto">
          <div className="p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-200">
            <img src={teamsimg} alt="Teams Feature" className="w-12" />
            <h1 className="pt-2 text-lg font-semibold">Teams</h1>
            <p className="pt-2 text-center hover:text-violet-600">
              Elevate your team's efficiency <br /> with our innovative Teams{" "}
              <br /> Feature, designed to enhance <br /> collaboration and
              streamline <br /> project management.
            </p>
          </div>

          <div className="p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-200">
            <img src={timeimg} alt="Time Management Feature" className="w-12" />
            <h1 className="pt-2 text-lg font-semibold">Time Management</h1>
            <p className="pt-2 text-center hover:text-violet-600">
              Take control of your schedule <br /> and boost your productivity{" "}
              <br /> with our intuitive Time <br /> Management feature. Designed{" "}
              <br /> to help you prioritize tasks and <br /> manage your time
              effectively.
            </p>
          </div>

          <div className="p-6 border-2 border-slate-300 hover:border-slate-200 flex flex-col items-center bg-white rounded-md shadow-md transition-all duration-200">
            <img src={templateimg} alt="Templates Feature" className="w-12" />
            <h1 className="pt-2 text-lg font-semibold">Templates</h1>
            <p className="pt-2 text-center hover:text-violet-600">
              Unlock creativity and streamline your <br /> work process with our
              diverse <br /> range of customizable templates. Whether <br />{" "}
              you're creating documents,
              <br /> presentations, or project plans, our <br /> templates are
              designed to <br /> make your tasks easier <br /> and more
              efficient.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
