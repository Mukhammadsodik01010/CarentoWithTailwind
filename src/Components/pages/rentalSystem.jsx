import React from "react";
import BgImage from "../../assets/rentalSystem/rentalSystem.jpg";
import CarImg from "../../assets/rentalSystem/rentalcenterimage.png";
import Key from "../../assets/rentalSystem/key.svg";
import CarSearch from "../../assets/rentalSystem/searchCar.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const RentalSystemComp = () => {
    const navigate = useNavigate()

    const BtnNav = () => {
    navigate("/pricing");
}
  return (
    <div
      className="hidden sm:flex w-full h-200 bg-cover bg-no-repeat bg-center font-[urbanist]"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="Container">
        <div className="flex flex-col gap-10 items-center justify-center h-200 ">
          <p className="text-xl font-light bg-gray-300 py-2 rounded-xl w-70 flex items-center justify-center">
            Best Car Rental System
          </p>
          <h1 className="text-4xl font-extrabold text-center">
            Receive a Competitive Offer <br />
            Sell Your Car to Us Today.
          </h1>
          <div className="h-100 w-full flex items-end justify-between gap-5 ">
            <div className="flex flex-col items-start bg-white h100 w-40e rounded-2xl p-10 gap-5">
              <div className="w-15 h-15 flex items-center justify-center bg-green-200 rounded-full">
                <img src={CarSearch} alt="CarSearch" className="h-10" />
              </div>
              <h2 className="text-2xl font-bold">Loking for a rental car?</h2>
              <p className="text-lg font-light text-gray-400">
                Find your perfect rental car for any journey, <br /> from road
                trips to business travel.
              </p>
              <button
                onClick={BtnNav}
                className="text-xl font-bold bg-green-500 flex items-center justify-center gap-1 py-2 px-5 rounded-lg cursor-pointer hover:bg-green-600"
              >
                Get Started Now
                <ArrowForwardIcon
                  fontSize="medium"
                  style={{ color: "black" }}
                />
              </button>
            </div>
            <img
              src={CarImg}
              alt="CarImg"
              className="hidden lg:block h-80 xl:h-auto -mb-10 xl:-mb-20"
            />
            <div className="flex flex-col items-start bg-white h100 w-40e rounded-2xl p-10 gap-5">
              <div className="w-15 h-15 flex items-center justify-center bg-green-200 rounded-full">
                <img src={Key} alt="Key" className="h-10" />
              </div>
              <h2 className="text-2xl font-bold">Loking for a rental car?</h2>
              <p className="text-lg font-light text-gray-400">
                Find your perfect rental car for any journey, <br /> from road
                trips to business travel.
              </p>
              <button
                onClick={BtnNav}
                className="text-xl font-bold bg-green-500 flex items-center justify-center gap-1 py-2 px-5 rounded-lg cursor-pointer hover:bg-green-600"
              >
                Get Started Now
                <ArrowForwardIcon
                  fontSize="medium"
                  style={{ color: "black" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalSystemComp;
