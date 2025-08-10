import React from "react";
import Logo from "../../assets/mainAssets/logo.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const NavbarComp = () => {
  const [open, setOpen] = React.useState(false);
  const [adds, setAdds] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const addsDrawer = (newOpen) => () => {
    setAdds(newOpen);
  };

  return (
    <>
      <div className="px-5 sm:px-10  md:px-20 w-full h-20 flex items-center justify-start border-b-2 border-b-gray-300 shadow-md">
        <Link to={"/"} className="flex-2/8">
          <div className=" flex items-center gap-2">
            <img src={Logo} alt="Logo" />
            <p className="text-3xl font-bold font-[urbanist]">Carento</p>
          </div>
        </Link>
        <div className="flex-4/8 hidden xl:flex items-center justify-center">
          {/* Navbar home */}
          <div className="relative group z-10">
            <div className="flex items-center gap-1 px-2 cursor-pointer hover:text-green-600">
              <h1 className="text-lg font-[urbanist] font-medium">Home</h1>
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border-2 border-green-500 shadow-lg rounded-lg py-2  text-sm">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Home
                </a>
              </div>
            </div>
          </div>
          {/* navbar inventory */}
          <div className="relative group z-10">
            <div className="flex items-center gap-1 px-2 cursor-pointer hover:text-green-600">
              <h1 className="text-lg font-[urbanist] font-medium">Inventory</h1>
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border-2 border-green-500 shadow-lg rounded-lg py-2  text-sm">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Inventory
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Inventory
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Inventory
                </a>
              </div>
            </div>
          </div>
          {/* navbar dealers */}
          <div className="relative group z-10">
            <div className="flex items-center gap-1 px-2 cursor-pointer hover:text-green-600">
              <h1 className="text-lg font-[urbanist] font-medium">Dealers</h1>
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border-2 border-green-500 shadow-lg rounded-lg py-2  text-sm">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Dealers
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Dealers
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Dealers
                </a>
              </div>
            </div>
          </div>
          {/* navbar shop */}
          <div className="relative group z-10">
            <div className="flex items-center gap-1 px-2 cursor-pointer hover:text-green-600">
              <h1 className="text-lg font-[urbanist] font-medium">Shop</h1>
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border-2 border-green-500 shadow-lg rounded-lg py-2  text-sm">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Shop
                </a>
              </div>
            </div>
          </div>
          {/* navbar pages */}
          <div className="relative group z-10">
            <div className="flex items-center gap-1 px-2 cursor-pointer hover:text-green-600">
              <h1 className="text-lg font-[urbanist] font-medium">Pages</h1>
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border-2 border-green-500 shadow-lg rounded-lg py-2  text-sm">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  Pages
                </a>
              </div>
            </div>
          </div>
          {/* navbar news */}
          <div className="relative group z-10">
            <div className="flex items-center gap-1 px-2 cursor-pointer hover:text-green-600">
              <h1 className="text-lg font-[urbanist] font-medium">News</h1>
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border-2 border-green-500 shadow-lg rounded-lg py-2  text-sm">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  News
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  News
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500"
                >
                  News
                </a>
              </div>
            </div>
          </div>
          {/* navvar contact */}
          <div className=" px-2 hover:text-green-600 cursor-pointer">
            <a href="#" className="text-lg font-[urbanist] font-medium">
              Contact
            </a>
          </div>
        </div>
        <div className="flex-2/8 flex items-center gap-3 justify-end">
          <Link to={"/sign-in"}>
            <div className="flex  items-center gap-1 cursor-pointer hover:text-green-500">
              <PersonIcon fontSize="medium" style={{color:"black"}} />
              <p className=" hidden sm:flex text-base font-[urbanist] font-bold">
                Sign in
              </p>
            </div>
          </Link>
          <button className="hidden sm:flex text-sm font-[urbanist] font-bold bg-green-500 px-3 py-2 rounded-lg hover:bg-green-600 cursor-pointer">
            Add Listing
          </button>
          <div className="flex items-center justify-center p-[5px] bg-green-500 rounded-lg cursor-pointer hover:bg-green-600">
            <div onClick={addsDrawer(true)}>
              <GridViewIcon fontSize="medium" />
            </div>
          </div>
          <div className="flex xl:hidden items-center justify-center p-[5px] bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-600">
            <div onClick={toggleDrawer(true)}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Menu icon Drower */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <div className="flex items-center w-full p-4 justify-between cursor-pointer my-2">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" />
              <p className="text-3xl font-bold font-[urbanist]">Carento</p>
            </div>
            <CloseIcon color="success" onClick={toggleDrawer(false)} />
          </div>
          <Divider />
          <div className="flex flex-col gap-4 p-4 mt-3">
            <div className="flex items-center justify-between cursor-pointer hover:text-green-500 hover:pl-3">
              <p className="text-lg font-[urbanist] font-bold">Home</p>
              <KeyboardArrowRightIcon />
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:text-green-500 hover:pl-3">
              <p className="text-lg font-[urbanist] font-bold">Inventory</p>
              <KeyboardArrowRightIcon />
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:text-green-500 hover:pl-3">
              <p className="text-lg font-[urbanist] font-bold">Dealers</p>
              <KeyboardArrowRightIcon />
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:text-green-500 hover:pl-3">
              <p className="text-lg font-[urbanist] font-bold">Shop</p>
              <KeyboardArrowRightIcon />
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:text-green-500 hover:pl-3">
              <p className="text-lg font-[urbanist] font-bold">Pages</p>
              <KeyboardArrowRightIcon />
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:text-green-500 hover:pl-3">
              <p className="text-lg font-[urbanist] font-bold">News</p>
              <KeyboardArrowRightIcon />
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:text-green-500 hover:pl-3">
              <p className="text-lg font-[urbanist] font-bold">Contact</p>
            </div>
          </div>
        </Box>
      </Drawer>
      {/* adds drower */}
      <Drawer anchor="right" open={adds} onClose={addsDrawer(false)}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={addsDrawer(false)}
        >
          <div className="flex items-center w-full p-4 justify-between cursor-pointer my-2">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" />
              <p className="text-3xl font-bold font-[urbanist]">Carento</p>
            </div>
            <CloseIcon color="success" onClick={addsDrawer(false)} />
          </div>
          <div className="flex items-center gap-3 px-4 mb-2 justify-end">
            <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
              <LanguageIcon fontSize="medium" style={{ color: "black" }} />
              <p className="font-[urbanist] texs-base font-bold ">EN</p>
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </div>
            <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
              <p className="font-[urbanist] texs-base font-bold ">USD</p>
              <KeyboardArrowDownIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </div>
          </div>
          <Divider />
          {/* Skaleton insted of content here */}
          <div className="flex flex-col gap-10 p-4 items-center">
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarComp;
