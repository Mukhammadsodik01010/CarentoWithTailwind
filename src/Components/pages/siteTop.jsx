import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import CarImg from "../../assets/mainAssets/GreenCar.svg";
import EastIcon from "@mui/icons-material/East";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SunnyIcon from "@mui/icons-material/Sunny";

const SiteTopComp = () => {
  return (
    <div className="flex items-center  w-full bg-black px-20 text-white h-10">
      <div className="flex-2/8 flex items-center gap-5 justify-start">
        <div className="flex items-center gap-2">
          <LocalPhoneIcon fontSize="small" />
          <p className="text-sm font-[urbanist]">+1 222-555-33-99</p>
        </div>
        <div className="flex items-center gap-2">
          <EmailIcon fontSize="small" />
          <p className="text-sm font-[urbanist]">sale@carento.com</p>
        </div>
      </div>
      <div className="flex-4/8 flex items-center gap-4 justify-center">
        <img src={CarImg} alt="CarImg" />
        <p className="text-sm font-[Urbanist]">
          More than <span className="text-[#70F46D]">800+ </span> special
          collection cars in this summer
        </p>
        <button className="flex items-center justify-center text-sm text-black bg-green-500 rounded-[8px] py-[3px] px-[10px]">
          Access Now <EastIcon fontSize="small" />
        </button>
      </div>
      <div className="flex-2/8 flex items-center gap-5 justify-end">
        <div className="flex items-center gap-2">
          <LanguageIcon fontSize="medium" />
          <p>EN</p>
          <KeyboardArrowDownIcon fontSize="small" />
        </div>
        <div className="h-10 w-[2px] bg-gray-400"></div>
        <div className="flex items-center gap-2">
          <p>USD</p>
          <KeyboardArrowDownIcon fontSize="small" />
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
