import React from 'react'
import SiteTopComp from "../pages/siteTop";
import NavbarComp from "../pages/navbar";
import FooterComp from "../pages/footer";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AppleIcon from "../../assets/AuthAssets/apple.svg";
import FaceBookIcon from "../../assets/AuthAssets/Facebook.svg";
import GoogleIcon from "../../assets/AuthAssets/google.svg";
import { useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const SignUpComp = () => {
   const navigate = useNavigate();
  
    const RegPage = () => {
      navigate("/sign-in");
    };
    const SignUpNav = () => {
      navigate("/sign-in");
    };
  return (
    <div>
      <SiteTopComp />
      <NavbarComp />
      <div className="w-full flex items-center justify-center py-20">
        <div className="sm:min-w-[500px] min-w-[300px] border-gray-400 border-2 rounded-xl shadow-xl/30 flex flex-col gap-2 items-center p-5 sm:p-10">
          <p className="text-black text-lg font-light font-[urbanist] bg-green-200 px-4 py-1 rounded-xl">
            Register
          </p>
          <h1 className="text-black text-3xl font-[urbanist] font-bold">
            Create an Account
          </h1>
          <div className="w-full flex items-center gap-1 px-2 py-4 bg-gray-200 rounded-md mt-5">
            <PersonOutlineIcon fontSize="small" />
            <input
              type="text"
              placeholder="Email/Username"
              className="w-full text-xl font-light text-black font-[urbanist] placeholder:text-gray-500 outline-0"
            />
          </div>
          <div className="w-full flex items-center gap-1 px-2 py-4 bg-gray-200 rounded-md mt-2">
            <EmailOutlinedIcon fontSize="small" />
            <input
              type="text"
              placeholder="Email/Username"
              className="w-full text-xl font-light text-black font-[urbanist] placeholder:text-gray-500 outline-0"
            />
          </div>
          <div className="w-full flex items-center gap-1 px-2 py-4 bg-gray-200 rounded-md mt-2">
            <LockOutlinedIcon fontSize="small" />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-xl font-light text-black font-[urbanist] placeholder:text-gray-500 outline-0"
            />
          </div>
          <div className="w-full flex items-center gap-1 px-2 py-4 bg-gray-200 rounded-md mt-2">
            <LockOutlinedIcon fontSize="small" />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-xl font-light text-black font-[urbanist] placeholder:text-gray-500 outline-0"
            />
          </div>
          <div className="flex items-center w-full my-3">
            <Checkbox
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
              defaultChecked
            />
            <p className="text-md text-gray-500">
              I agree to term and conditions
            </p>
          </div>
          <button
            onClick={SignUpNav}
            className="text-2xl font-[urbanist] font-extrabold bg-green-500 w-full py-3 rounded-lg flex items-center gap-1 justify-center cursor-pointer hover:bg-green-700"
          >
            Sign up
            <ArrowForwardOutlinedIcon fontSize="small" />
          </button>
          <p className="text-lg text-gray-500 mt-4 font-[urbanist] font-extralight">
            Or connect with your social account
          </p>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 bg-gray-200 py-3 w-50 justify-center rounded-md border-gray-400 border-2 cursor-pointer hover:bg-gray-300">
              <img src={GoogleIcon} alt="GoogleIcon" />
              <p>Sign in with Google</p>
            </div>
            <div className="flex items-center  bg-gray-200 py-[11px] w-13 justify-center rounded-md border-gray-400 border-2 cursor-pointer hover:bg-gray-300">
              <img src={FaceBookIcon} alt="FaceBookIcon" />
            </div>
            <div className="flex items-center  bg-gray-200 py-[11px] w-13 justify-center rounded-md border-gray-400 border-2 cursor-pointer hover:bg-gray-300">
              <img src={AppleIcon} alt="AppleIcon" />
            </div>
          </div>
          <h4 className="text-sm text-gray-500 font-[urbanist] font-bold mt-10">
            Don’t have an account?
            <button
              onClick={RegPage}
              className="text-black cursor-pointer hover:text-green-500"
            >
              Register Here !
            </button>
          </h4>
        </div>
      </div>
      <FooterComp />
    </div>
  );
}

export default SignUpComp