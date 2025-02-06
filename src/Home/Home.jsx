import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
