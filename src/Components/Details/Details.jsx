import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [project, setProject] = useState();
  //   console.log(project);
  const params = useParams();
  //   console.log(params);
  useEffect(() => {
    fetch(
      `https://my-portfolio-server-five-iota.vercel.app/details/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [params.id]);
  return (
    <div className="max-w-2xl mx-auto bg-gray-500 text-white rounded-lg shadow-lg p-6">
      {/* Project Image */}
      <img
        src={project?.image}
        alt={project?.name}
        className="w-full rounded-lg mb-4"
      />

      {/* Project Title */}
      <h2 className="text-2xl font-bold text-[#FF014F]  text-center">
        {project?.name}
      </h2>

      {/* Description */}
      <p className="text-gray-300 mt-2">{project?.description}</p>

      {/* Tech Stack */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#FF014F] ">Tech Stack</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project?.stacks?.map((stack, index) => (
            <span
              key={index}
              className="bg-gray-700 text-sm px-3 py-1 rounded-lg"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#FF014F] ">Key Features</h3>
        <ul className="list-disc list-inside mt-2 text-gray-300">
          {project?.features?.map((item, index) => (
            <li key={index}>{item.feature}</li>
          ))}
        </ul>
      </div>

      {/* Problems Faced */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#FF014F] ">Challenges</h3>
        <ul className="list-disc list-inside mt-2 text-gray-300">
          {project?.problemsFaced?.map((item, index) => (
            <li key={index}>{item.problem}</li>
          ))}
        </ul>
      </div>

      {/* Feature Improvement */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#FF014F] ">
          Future Improvements
        </h3>
        <p className="text-gray-300 mt-1">{project?.featureImprovement}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <a
          href={project?.clientRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-[#FF014F]  to-[#630622]  hover:bg-[#6c4651]  text-white px-4 py-2 rounded-lg"
        >
          GitHub Repo
        </a>
        <a
          href={`${project?.liveLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-[#861581] to-[#480844]  hover:bg-[#573456] text-white px-4 py-2 rounded-lg"
        >
          Live Site
        </a>
        <button
          onClick={() => window.history.back()}
          className="bg-[#865515] hover:bg-[#695233] text-white px-8 py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Details;
