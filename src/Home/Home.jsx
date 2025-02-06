import AboutMe from "../Components/AboutMe/AboutMe";
import Banner from "../Components/Banner/Banner";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <div className="w-full mx-auto lg:w-[90%] md:w-[90%]">
      <Banner />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Home;
