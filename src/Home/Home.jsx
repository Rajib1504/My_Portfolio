import AboutMe from "../Components/AboutMe/AboutMe";
import Banner from "../Components/Banner/Banner";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <div className="w-full px-4 mx-auto lg:w-[90%] md:w-[90%]">
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
