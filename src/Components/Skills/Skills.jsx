// import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    { name: "HTML", percent: 80 },
    { name: "CSS", percent: 60 },
    { name: "Tailwind", percent: 70 },
    { name: "JS", percent: 60 },
    { name: "React", percent: 70 },
    { name: "Node.js", percent: 40 },
    { name: "Express.js", percent: 40 },
    { name: "MongoDB", percent: 35 },
    { name: "JWT", percent: 60 },
  ];

  return (
    <div className=" mx-auto p-5 font-sans">
      <h3 className="text-[#FF014F] font-light mb-4 text-center text-lg lg:text-2xl">
        Skills
      </h3>
      <h2 className="text-3xl text-gray-500 mb-8 text-left  font-bold">
        Development Skills
      </h2>

      {skills.map((skill, index) => (
        <div key={index} className="mb-5">
          <div className="flex justify-between text-sm text-gray-700 mb-2">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white via-[#eb9bb3] to-[#FF014F] rounded-full transition-[width] duration-800 ease-in-out"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
      {/* technologies  */}

      {/* frontend  */}

      <h3 className="text-[#FF014F] text-2xl">Frontend :</h3>
      <div className=" flex items-center gap-3  my-10">
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img className="w-8" src="https://imgur.com/If2tjcN.png" alt="Html" />
        </div>
        {/* image 2   */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-12"
            src=" https://i.imgur.com/PQUrE4k.png"
            alt="css"
          />
        </div>
        {/* image-3   */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-12"
            src="https://i.imgur.com/5GwxUUf.png"
            alt="js"
          />
        </div>
        {/* img-4  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-12"
            src="https://i.imgur.com/HdyOITq.png"
            alt="tailwind"
          />
        </div>
        {/* img-5  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-12"
            src="https://i.imgur.com/Vu7vq1H.png"
            alt="react"
          />
        </div>
        {/* img-6  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-12"
            src="https://i.imgur.com/hJGiS1G.png"
            alt="router dom"
          />
        </div>
      </div>
      {/* Backend & devops  */}
      <h3 className="text-[#FF014F] text-2xl">Backend :</h3>
      <div className=" flex items-center gap-3  my-10">
        {/* img-1  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-12"
            src="https://i.imgur.com/8p5vK57.png"
            alt="nodejs"
          />
        </div>
        {/* img-2  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-12"
            src="https://i.imgur.com/jX0Q8an.png"
            alt="express"
          />
        </div>
        {/* img-3  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-12"
            src="https://i.imgur.com/HBjx7QA.png"
            alt="mongodb"
          />
        </div>
        {/* img-4  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          {" "}
          <img
            className="w-12"
            src="https://i.imgur.com/nRjf4rj.png"
            alt="jwt"
          />
        </div>
        {/* img-5  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          <img
            className="w-8"
            src="https://i.imgur.com/Ly8G0eu.png"
            alt="firebase"
          />
        </div>
      </div>
      <h3 className="text-[#FF014F] text-2xl">Version Control Systems:</h3>
      <div className=" flex items-center gap-3  my-10">
        {/* img-1  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          {" "}
          <img
            className="w-12"
            src="https://i.imgur.com/Ce82CUA.png"
            alt="git"
          />
        </div>
        {/* img-2  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          {" "}
          <img
            className="w-12"
            src=" https://i.imgur.com/qVRcYIC.png"
            alt="github"
          />
        </div>
        {/* img-3  */}
        <div className="w-12 h-12  sm:w-12 sm:h-12 md:w-16 md:h-16 hover:scale-105 hover:origin-bottom text-gray-600 hover:text-white hover:ease-out hover:duration-200 rounded-sm bg-gradient-to-br from-gray-300 to-[#ffffff]  shadow-[-8px_-8px_14px_0_white] flex justify-center items-center transition-all">
          {" "}
          <img
            className="w-12"
            src="https://i.imgur.com/kP74yn2.png"
            alt="vscode"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
