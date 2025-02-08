import AboutMe from "../Components/AboutMe/AboutMe";
import Banner from "../Components/Banner/Banner";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import ContactSection from "./../Components/Contact/ContactSection";

const Home = () => {
  return (
    <div id="home" className="w-full px-4 mx-auto lg:w-[90%] md:w-[90%]">
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactSection />
    </div>
  );
};

export default Home;
