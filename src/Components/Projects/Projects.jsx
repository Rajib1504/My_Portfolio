import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:9000/data")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleSubmit = (id) => {
    console.log(id);
    navigate(`/details/${id}`);
  };
  return (
    <div id="Projects">
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
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col gap-2 rounded-lg shadow-2xl bg-gray-200 "
          >
            {/* img container  */}
            <div className="">
              <img
                className="rounded-xl mb-2"
                src={product.image}
                alt="Taskhive"
              />
            </div>
            {/* text container  */}
            <div className="m-2">
              <h2 className="text-2xl font-bold text-center">{product.name}</h2>
              <p className="text-sm lg:text-base text-gray-400">
                {product.howHelp}
              </p>
              {/* tech section  */}
              <div className="flex justify-around items-center flex-wrap gap-2">
                {product.stacks.map((stack, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg p-2 px-3 bg-gradient-to-br form-gray-200 to-white shadow-md"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              {/* button  */}

              <div className="flex justify-center items-center">
                <Button
                  onClick={() => handleSubmit(product._id)}
                  variant="gradient"
                  className="rounded-lg shadow-2xl bg-gray-500 p-3 mx-auto px-4 w-[80%] m-2"
                >
                  View details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
