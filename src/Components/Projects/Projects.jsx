import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    axios
      .get("https://my-portfolio-server-five-iota.vercel.app/data")
      .then((res) => setProducts(res.data));
  }, []);

  const handleSubmit = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div id="Projects" className="py-10 px-5">
      <h3
        className="text-[#FF014F] font-light mb-4 text-center text-lg lg:text-2xl"
        data-aos="fade-up"
      >
        Projects
      </h3>
      <p
        className="text-gray-400 text-center lg:w-1/2 mx-auto mb-4"
        data-aos="fade-up"
      >
        Explore my projects showcasing modern web development skills using
        React, Node.js, and MongoDB. Each project is designed for seamless
        functionality, responsiveness, and user-friendly experiences. 🚀
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2 rounded-lg my-4 w-full">
        {products?.map((product, index) => (
          <div
            key={product._id}
            className="flex flex-col gap-4 rounded-lg shadow-xl bg-white transition-transform duration-300 hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Delays animation for each card
          >
            {/* Image Section */}
            <div className="overflow-hidden rounded-lg">
              <img
                className="rounded-t-lg w-full h-52 object-cover"
                src={product.image}
                alt={product.name}
                data-aos="fade-right"
              />
            </div>

            {/* Text Section */}
            <div className="m-4" data-aos="fade-left">
              <h2 className="text-2xl font-bold text-center">{product.name}</h2>
              <p className="text-sm lg:text-base text-gray-500">
                {product.howHelp}
              </p>

              {/* Tech Stack Section */}
              <div className="flex justify-center flex-wrap gap-2 my-3">
                {product.stacks.map((stack, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg p-2 px-3 bg-gradient-to-br from-gray-200 to-white shadow-md text-gray-700"
                    data-aos="zoom-in"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              {/* View Details Button */}
              <div className="flex justify-center">
                <Button
                  onClick={() => handleSubmit(product._id)}
                  variant="gradient"
                  className="rounded-lg bg-gray-500 p-3 px-4 w-[80%] text-white font-medium transition-transform hover:scale-105"
                  data-aos="fade-up"
                >
                  View Details
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
