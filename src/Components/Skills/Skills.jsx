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
    <div className="max-w-3xl mx-auto p-5 font-sans">
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
    </div>
  );
};

export default Skills;
