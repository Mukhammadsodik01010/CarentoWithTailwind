import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import CarImg from "../../assets/mainAssets/GreenCar.svg";
import EastIcon from "@mui/icons-material/East";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SunnyIcon from "@mui/icons-material/Sunny";
import { useNavigate } from "react-router-dom";

  const SiteTopComp = () => {
  const navigate = useNavigate();
  const NavBtn = () => {
    navigate("/pricing");
  };

  return (
    <div className="flex items-center  w-full bg-black px-5 sm:px-10 md:px-20 text-white h-10">
      <div className="flex-1/8 flex xl:flex-3/8 items-center gap-5 justify-start">
        <div className="flex items-center gap-2 hover:text-green-500 hover:cursor-pointer">
          <LocalPhoneIcon fontSize="small" />
          <p className="text-sm font-[urbanist] hidden xl:flex">
            +1 222-555-33
          </p>
        </div>
        <div className="flex items-center gap-2 hover:text-green-500 hover:cursor-pointer">
          <EmailIcon fontSize="small" />
          <p className="text-sm font-[urbanist] hidden xl:flex">
            sale@carento.com
          </p>
        </div>
      </div>
      <div className="flex-5/8 hidden xl:flex4/8 lg:flex items-center gap-4 justify-center ">
        <img src={CarImg} alt="CarImg" />
        <p className="text-sm font-[Urbanist]">
          More than <span className="text-[#70F46D]">800+ </span> special
          collection cars in this summer
        </p>
        <button
          onClick={NavBtn}
          className="flex items-center justify-center text-sm text-black bg-green-500 rounded-[8px] py-[3px] px-[10px] hover:bg-green-600 cursor-pointer"
        >
          Access Now <EastIcon fontSize="small" />
        </button>
      </div>
      <div className="flex-2/8 flex items-center gap-5 justify-end">
        <div className="hidden sm:flex items-center gap-2 hover:text-green-500 hover:cursor-pointer">
          <LanguageIcon fontSize="medium" style={{ color: "white" }} />
          <p className="font-[urbanist] texs-base font-bold ">EN</p>
          <KeyboardArrowDownIcon fontSize="small" style={{ color: "white" }} />
        </div>
        <div className="hidden sm:flex  h-10 w-[2px] bg-gray-400"></div>
        <div className="hidden sm:flex items-center gap-2 hover:text-green-500 hover:cursor-pointer">
          <p className="font-[urbanist] texs-base font-bold ">USD</p>
          <KeyboardArrowDownIcon fontSize="small" style={{ color: "white" }} />
        </div>
        <div className="h-10 w-[2px] bg-gray-400"></div>
        <div>
          <SunnyIcon fontSize="medium" color="warning" />
        </div>
      </div>
    </div>
  );
};

export default SiteTopComp;
