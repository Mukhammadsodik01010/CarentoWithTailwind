import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Logo from "../../assets/mainAssets/logo.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";

import { useNavigate } from "react-router-dom";

const FooterComp = () => {
  const navigate = useNavigate();
  const NavBtn = () => {
    navigate("/pricing");
  };
  return (
    <>
      <div className="w-full bg-black py-20">
        <div className="Container">
          <div className="flex flex-col lg:flex-row gap-5 items-center justify-center lg:justify-between">
            <p className=" text-3xl  font-[urbanist] text-white">
              Subscribe to see secret deals <br /> prices drop the moment you
              sign up!
            </p>
            <div className="flex items-center gap-3 justify-start">
              <div className="flex items-center gap-2 sm:w-100 border-2 border-gray-500 py-4 px-4 rounded-xl">
                <MailOutlineIcon fontSize="medium" style={{ color: "white" }} />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-lg text-white placeholder:text-gray-500 outline-0 w-full"
                />
              </div>
              <button
                onClick={NavBtn}
                className="text-black text-xl font-[urbanist] font-light bg-green-500 px-6 py-4 rounded-xl cursor-pointer hover:bg-green-700"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-between gap-20 border-y-[2px] border-y-gray-500 py-10 my-10">
            <div className="lg:flex-1/4">
              <div className=" flex items-center gap-2">
                <img src={Logo} alt="Logo" />
                <p className="text-3xl text-white font-bold font-[urbanist]">
                  Carento
                </p>
              </div>
              <div className="flex flex-col items-start pl-4 my-5 gap-5">
                <div className="flex items-start gap-1">
                  <LocationOnIcon fontSize="small" style={{ color: "gray" }} />
                  <p className="text-gray-500 text-sm font-[urbanist]">
                    2356 Oakwood Drive, Suite 18, San Francisco, California
                    94111, US
                  </p>
                </div>
                <div className="flex items-start gap-1">
                  <WatchLaterIcon fontSize="small" style={{ color: "gray" }} />
                  <p className="text-gray-500 text-sm font-[urbanist]">
                    Hours: 8:00 - 17:00, Mon - Sat
                  </p>
                </div>
                <div className="flex items-start gap-1">
                  <EmailIcon fontSize="small" style={{ color: "gray" }} />
                  <p className="text-gray-500 text-sm font-[urbanist]">
                    support@carento.com
                  </p>
                </div>
                <div>
                  <div className="flex items-start gap-1 mt-4">
                    <LocalPhoneIcon
                      fontSize="medium"
                      style={{ color: "gray" }}
                    />
                    <p className="text-white text-sm font-[urbanist]">
                      Need help? Call us
                    </p>
                  </div>
                  <p className="text-green-500 text-xl font-bold font-[urbanist]">
                    +1 222-555-33-99
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-3/4 hidden lg:flex justify-between gap-20 text-gray-500 text-sm font-[urbanist] font-light">
              <div className="flex flex-col gap-5">
                <p className="text-white">Company</p>
                <p>About Us</p>
                <p>Our Awards</p>
                <p>Agencies</p>
                <p>Copyright Notices</p>
                <p>Terms of Use</p>
                <p>Privacy Notice</p>
                <p>Lost & Found</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white">Our Services</p>
                <p>Car Rental Services</p>
                <p>Vehicle Leasing Options</p>
                <p>Long-Term Car Rentals</p>
                <p>Car Sales and Trade-Ins</p>
                <p>Luxury Car Rentals</p>
                <p>Rent-to-Own Programs</p>
                <p>Fleet Management Solutions</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white">Our Partners</p>
                <p>Affiliates</p>
                <p>Travel Agents</p>
                <p>AARP Members</p>
                <p>Points Programs</p>
                <p>Military & Veterans</p>
                <p>Work with us</p>
                <p>Advertise with us</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white">Support</p>
                <p>Forum support</p>
                <p> Help Center</p>
                <p>Live chat</p>
                <p>How it works</p>
                <p>Security</p>
                <p>Refund Policy</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-2 items-center justify-between">
            <p className="text-gray-400 text-sm font-light font-[urbanist]">
              © 2024 Carento Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <p className="text-white text-xl font-[urbanist] font-bold">Follow Us</p>
              <FacebookOutlinedIcon
                fontSize="medium"
                style={{ color: "green" }}
              />
              <YouTubeIcon fontSize="medium" style={{ color: "white" }} />
              <InstagramIcon fontSize="medium" style={{ color: "white" }} />
              <XIcon fontSize="medium" style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComp;
