import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isactive, setIsactive] = useState("");

  const handleActive = (id) => {
    setIsactive(id);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-black lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to={"/"}
          onClick={() => handleActive("home")}
          className={`flex items- hover:text-[#FF014F] ${
            isactive === "home" && "text-[#FF014F]"
          }`}
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          onClick={() => handleActive("#")}
          className={`flex items- hover:text-[#FF014F] ${
            isactive === "#" && "text-[#FF014F]"
          }`}
        >
          About Me
        </a>
      </Typography>
      <a
        href="#Skills"
        onClick={() => handleActive("#Skills")}
        className={`flex items- hover:text-[#FF014F] ${
          isactive === "#Skills" && "text-[#FF014F]"
        }`}
      >
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Skills
        </Typography>
      </a>
      <a
        href="#Projects"
        onClick={() => handleActive("#Projects")}
        className={`flex items- hover:text-[#FF014F] ${
          isactive === "#Projects" && "text-[#FF014F]"
        }`}
      >
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Projects
        </Typography>
      </a>
      <a
        href="#Contact"
        onClick={() => handleActive("#Contact")}
        className={`flex items- hover:text-[#FF014F] ${
          isactive === "#Contact" && "text-[#FF014F]"
        }`}
      >
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Contacts
        </Typography>
      </a>
    </ul>
  );
  return (
    <div className="sticky top-0 z-10">
      <div>
        <Navbar className="sticky top-0  h-max max-w-full bg-[#ECF0F3] rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Link to={"/"}>
              <Typography
                as="h2"
                className="mr-4 text-2xl cursor-pointer py-1.5 text-black font-bold"
              >
                Rajib.s
              </Typography>
            </Link>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  size="md"
                  className="hidden lg:inline-block border shadow-[#a6a6a6a1] shadow-lg border-gray-200 bg-[#f7f7f7]"
                >
                  <a
                    href="https://drive.google.com/file/d/1RBGasD2Z3-YYTVS0JDUulcv0J8TQkWlv/view?usp=sharing"
                    target="_blank"
                    className="flex justify-center gap-3 text-[#FF014F] items-center"
                  >
                    <div className="flex justify-center gap-3 items-center">
                      <GoDownload />
                      <span className="text-primary tracking-wider">
                        Resume
                      </span>
                    </div>
                  </a>
                </Button>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <RxCross1 className="text-black text-xl" />
                ) : (
                  <TiThMenu className="text-black text-xl" />
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1 mt-4">
              <a
                href="https://drive.google.com/file/d/18RD2vhh9kqUcuAHPAM8o8BNpGYWBoADd/view?usp=sharing"
                target="_blank"
                className="block w-full text-center text-sm font-bold text-[#FF014F] border border-gray-200 bg-[#070707] shadow-lg py-2 px-4 rounded-lg"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center gap-3 items-center">
                  <GoDownload />
                  <span className="text-primary tracking-wider">Resume</span>
                </div>
              </a>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
