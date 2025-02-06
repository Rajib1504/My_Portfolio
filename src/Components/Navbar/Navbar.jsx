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

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

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
        <a href="#" className="flex items-center">
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contacts
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="sticky top-0 z-10">
      <div>
        <Navbar className="sticky top-0  h-max max-w-full bg-[#ECF0F3] rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="h2"
              className="mr-4 text-2xl cursor-pointer py-1.5 text-black font-bold"
            >
              Rajib.s
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  size="md"
                  className="hidden lg:inline-block border shadow-[#a6a6a6a1] shadow-lg border-gray-200 bg-[#f7f7f7]"
                >
                  <a
                    href="https://drive.google.com/file/d/18RD2vhh9kqUcuAHPAM8o8BNpGYWBoADd/view?usp=sharing"
                    target="_blank"
                    className="flex justify-center gap-3 text-[#FF014F] items-center"
                  >
                    <span className="text-primary">Resume</span> <GoDownload />
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
                  <span className="text-primary">Resume</span>
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
