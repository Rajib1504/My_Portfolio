import { Button } from "@material-tailwind/react";

const Projects = () => {
  return (
    <div>
      <h3 className="text-[#FF014F] font-light mb-4 text-center text-lg lg:text-2xl">
        Projects
      </h3>
      <p className="text-gray-400 text-center lg:w-1/2 mx-auto mb-4">
        Explore my projects showcasing modern web development skills using
        React, Node.js, and MongoDB. Each project is designed for seamless
        functionality, responsiveness, and user-friendly experiences. 🚀{" "}
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 rounded-lg my-4 w-full">
        {/* project -1  */}
        <div className="flex flex-col gap-2 rounded-lg shadow-2xl bg-gray-200 ">
          {/* img container  */}
          <div className="">
            <img
              className="rounded-xl mb-2"
              src="https://i.ibb.co/672wtBx7/Screenshot-2025-02-07-154442.png"
              alt="Taskhive"
            />
          </div>
          {/* text container  */}
          <div className="m-2">
            <h2 className="text-2xl font-bold text-center">Task_Hive</h2>
            <p className="text-sm lg:text-base text-gray-400">
              Task Hive is a Full-Stack project Over the gig tasks and earn
              money.Buyer can sell task worker can do work and get paid and
              Admin also can monitor all works with Payment details.
            </p>
            {/* tech section  */}
            <div className="flex justify-around items-center flex-wrap gap-2">
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                React
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Javascript
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                NodeJs
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Express
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Mongodb
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Payment System
              </span>
            </div>
            {/* button  */}
            <div className="flex justify-center items-center">
              <Button
                variant="gradient"
                className="rounded-lg shadow-2xl bg-gray-500 p-3 mx-auto px-4 w-[80%] m-2"
              >
                View details
              </Button>
            </div>
          </div>
        </div>
        {/* project-2  */}
        <div className="flex flex-col gap-2 rounded-lg shadow-2xl bg-gray-200 ">
          {/* img container  */}
          <div className="">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/BHmpS0sc/Screenshot-2025-02-07-134716.png"
              alt="share bites"
            />
          </div>
          {/* text container  */}
          <div className="m-2">
            <h2 className="text-2xl font-bold text-center">Share Bites</h2>
            <p className="text-sm lg:text-base text-gray-400">
              Share Bites is a website to serve the food to others.Rather then
              throw the excess food people can share the food to others.Motive
              is to reduce the wastage of food in our country...
            </p>
            {/* tech section  */}
            <div className="flex justify-around items-center flex-wrap gap-2">
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                React
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Javascript
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                NodeJs
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Express
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Mongodb
              </span>
            </div>
            {/* button  */}
            <div className="flex justify-center items-center">
              <Button
                variant="gradient"
                className="rounded-lg shadow-2xl bg-gray-500 p-3 mx-auto px-4 w-[80%] m-2"
              >
                View details
              </Button>
            </div>
          </div>
        </div>
        {/* project-3  */}
        <div className="flex flex-col gap-2 rounded-lg shadow-2xl bg-gray-200 ">
          {/* img container  */}
          <div className="">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/cSjm03rm/Screenshot-2025-02-07-154951.png"
              alt="Wild explore"
            />
          </div>
          {/* text container  */}
          <div className="m-2">
            <h2 className="text-2xl font-bold text-center">Wild Explore</h2>
            <p className="text-sm lg:text-base text-gray-400">
              Wild explore is actually a Travel website where user can plan
              their trip and also can get the details about the trip. user can
              have a meeting with the travel aggeny too on meet..
            </p>
            {/* tech section  */}
            <div className="flex justify-around items-center flex-wrap gap-2">
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                React
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Javascript
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                NodeJs
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Express
              </span>
              <span className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md">
                Mongodb
              </span>
            </div>
            {/* button  */}
            <div className="flex justify-center items-center">
              <Button
                variant="gradient"
                className="rounded-lg shadow-2xl bg-gray-500 p-3 mx-auto px-4 w-[80%] m-2"
              >
                View details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
