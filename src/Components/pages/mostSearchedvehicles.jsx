import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Bmw from '../../assets/MostSearchedVehiclesAsstest/Bmw.webp'
import Chevrolet from "../../assets/MostSearchedVehiclesAsstest/chevrole.jpg";
import Bwd from "../../assets/MostSearchedVehiclesAsstest/bwd.jpeg";
import Genesis from "../../assets/MostSearchedVehiclesAsstest/genesis.jpg";
import Mers from "../../assets/MostSearchedVehiclesAsstest/mers.avif";
import Sanata from "../../assets/MostSearchedVehiclesAsstest/sanata.jpg";
import StarIcon from "@mui/icons-material/Star";
import Fuel from '../../assets/MostSearchedVehiclesAsstest/fuel.svg'
import Seat from '../../assets/MostSearchedVehiclesAsstest/seat.svg'
import Gear from '../../assets/MostSearchedVehiclesAsstest/gear.svg'
import Speed from "../../assets/MostSearchedVehiclesAsstest/speed.svg";
import CachedIcon from "@mui/icons-material/Cached";
import { useNavigate } from "react-router-dom";

const MostSearchedvehiclesComp = () => {
    const navigate = useNavigate()
    const BtnNav = () => {
        navigate("/car-detailed-page");
    }

  return (
    <div className="Container">
      <div className="flex flex-col my-20 gap-10 font-[urbanist]">
        <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-end gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold">Most Searched Vehicles</h1>
            <p className="text-xl font-bold text-gray-400">
              The world's leading car brands
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-end items-center gap-3">
            <div className="flex items-center gap-2 justify-end w-full">
              <button className="flex items-center justify-center gap-1 bg-gray-200 border-2 border-gray-400 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
                Categories
                <ExpandMoreIcon fontSize="small" style={{ color: "Black" }} />
              </button>
              <button className="flex items-center justify-center gap-1 bg-gray-200 border-2 border-gray-400 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
                Duration
                <ExpandMoreIcon fontSize="small" style={{ color: "Black" }} />
              </button>
            </div>
            <div className="flex items-center gap-2 justify-end w-full sm:w-auto">
              <button className="flex w-43 items-center justify-center gap-1 bg-gray-200 border-2 border-gray-400 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
                Review / Rating
                <ExpandMoreIcon fontSize="small" style={{ color: "Black" }} />
              </button>
              <button className="flex w-30 items-center justify-center gap-1 bg-gray-200 border-2 border-gray-400 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
                Price range
                <ExpandMoreIcon fontSize="small" style={{ color: "Black" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
          <div className="flex flex-col lg:flex-row border-[1px] border-gray-300 rounded-xl ">
            <img
              src={Bmw}
              alt="Bmw"
              className="md:h-55 lg:h-74 md:w-100 rounded-xl z-10 lg:w-120 overflow-hidden "
            />
            <div className="flex flex-col gap-3 p-4 border-1px border-gray-300 rounded-xl -mt-[15px] lg:mt-0 lg:-ml-[80px] lg:w-[70%] z-30 bg-white xl:justify-center">
              <div className="flex items-center gap-1">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-light">
                  4.25 <span className="text-gray-400">(560 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold lg:text-sm xl:text-xl">
                BMW M2 G300
              </h1>
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">43.100km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Gasalin</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Gear} alt="Gear" className="h-4" />
                    <p className="text-sm font-bold">Automatic</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Seat} alt="Seat" className="h-4" />
                    <p className="text-sm font-bold">4 seats</p>
                  </div>
                </div>
              </div>
              <hr className="text-gray-300 my-3" />
              <div className="flex lg:flex-col lg:items-baseline xl:flex-row xl:items-center  gap-3 items-center justify-between">
                <p className="text-3xl font-light">
                  <span className="text-lg text-gray-400">From</span> $65.00
                </p>
                <button
                  onClick={BtnNav}
                  className="lg:w-full xl:w-auto text-xl font-bold bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-[1px] border-gray-300 rounded-xl ">
            <img
              src={Chevrolet}
              alt="Chevrolet"
              className="md:h-55 lg:h-74 md:w-100  rounded-xl z-10 lg:w-120 overflow-hidden "
            />
            <div className="flex flex-col gap-3 p-4 border-1px border-gray-300 rounded-xl -mt-[15px] lg:mt-0 lg:-ml-[80px] lg:w-[70%] z-30 bg-white xl:justify-center">
              <div className="flex items-center gap-1">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-light">
                  3.72 <span className="text-gray-400">(275 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold lg:text-sm xl:text-xl">
                Chevrolet Seeker SUV
              </h1>
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">32.396km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Gasalin</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Gear} alt="Gear" className="h-4" />
                    <p className="text-sm font-bold">Automatic</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Seat} alt="Seat" className="h-4" />
                    <p className="text-sm font-bold">4 seats</p>
                  </div>
                </div>
              </div>
              <hr className="text-gray-300 my-3" />
              <div className="flex lg:flex-col lg:items-baseline xl:flex-row xl:items-center  gap-3 items-center justify-between">
                <p className="text-3xl font-light">
                  <span className="text-lg text-gray-400">From</span> $35.62
                </p>
                <button
                  onClick={BtnNav}
                  className="lg:w-full xl:w-auto text-xl font-bold bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-[1px] border-gray-300 rounded-xl ">
            <img
              src={Bwd}
              alt="Bwd"
              className="md:h-55 lg:h-74 md:w-100 rounded-xl z-10 lg:w-120 overflow-hidden "
            />
            <div className="flex flex-col gap-3 p-4 border-1px border-gray-300 rounded-xl -mt-[15px] lg:mt-0 lg:-ml-[80px] lg:w-[70%] z-30 bg-white xl:justify-center">
              <div className="flex items-center gap-1">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-light">
                  3.89 <span className="text-gray-400">(403 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold lg:text-sm xl:text-xl">
                BWD Chempion 2023 S
              </h1>
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">13.102km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Electric</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Gear} alt="Gear" className="h-4" />
                    <p className="text-sm font-bold">Automatic</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Seat} alt="Seat" className="h-4" />
                    <p className="text-sm font-bold">4 seaats</p>
                  </div>
                </div>
              </div>
              <hr className="text-gray-300 my-3" />
              <div className="flex lg:flex-col lg:items-baseline xl:flex-row xl:items-center  gap-3 items-center justify-between">
                <p className="text-3xl font-light">
                  <span className="text-lg text-gray-400">From</span> $71.32
                </p>
                <button
                  onClick={BtnNav}
                  className="lg:w-full xl:w-auto text-xl font-bold bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col lg:flex-row border-[1px] border-gray-300 rounded-xl ">
            <img
              src={Genesis}
              alt="Genesis"
              className="md:h-55 lg:h-74 md:w-100 rounded-xl z-10 lg:w-120 overflow-hidden "
            />
            <div className="flex flex-col gap-3 p-4 border-1px border-gray-300 rounded-xl -mt-[15px] lg:mt-0 lg:-ml-[80px] lg:w-[70%] z-30 bg-white xl:justify-center">
              <div className="flex items-center gap-1">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-light">
                  4.23 <span className="text-gray-400">(504 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold lg:text-sm xl:text-xl">
                Genesis G23 2021
              </h1>
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">102.300km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Diesel</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Gear} alt="Gear" className="h-4" />
                    <p className="text-sm font-bold">Automatic</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Seat} alt="Seat" className="h-4" />
                    <p className="text-sm font-bold">6 seats</p>
                  </div>
                </div>
              </div>
              <hr className="text-gray-300 my-3" />
              <div className="flex lg:flex-col lg:items-baseline xl:flex-row xl:items-center  gap-3 items-center justify-between">
                <p className="text-3xl font-light">
                  <span className="text-lg text-gray-400">From</span> $60.00
                </p>
                <button
                  onClick={BtnNav}
                  className="lg:w-full xl:w-auto text-xl font-bold bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col lg:flex-row border-[1px] border-gray-300 rounded-xl ">
            <img
              src={Mers}
              alt="Mers"
              className="md:h-55 lg:h-74 md:w-100 rounded-xl z-10 lg:w-120 overflow-hidden "
            />
            <div className="flex flex-col gap-3 p-4 border-1px border-gray-300 rounded-xl -mt-[15px] lg:mt-0 lg:-ml-[80px] lg:w-[70%] z-30 bg-white xl:justify-center">
              <div className="flex items-center gap-1">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-light">
                  4.83 <span className="text-gray-400">(749 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold lg:text-sm xl:text-xl">
                Mersades-Benz S-class
              </h1>
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">36.207km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Diesel</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Gear} alt="Gear" className="h-4" />
                    <p className="text-sm font-bold">Automatic</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Seat} alt="Seat" className="h-4" />
                    <p className="text-sm font-bold">4 seats</p>
                  </div>
                </div>
              </div>
              <hr className="text-gray-300 my-3" />
              <div className="flex lg:flex-col lg:items-baseline xl:flex-row xl:items-center  gap-3 items-center justify-between">
                <p className="text-3xl font-light">
                  <span className="text-lg text-gray-400">From</span> $70.83
                </p>
                <button
                  onClick={BtnNav}
                  className="lg:w-full xl:w-auto text-xl font-bold bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col lg:flex-row border-[1px] border-gray-300 rounded-xl ">
            <img
              src={Sanata}
              alt="Sanata"
              className="md:h-55 lg:h-74 md:w-100 rounded-xl z-10 lg:w-120 overflow-hidden "
            />
            <div className="flex flex-col gap-3 p-4 border-1px border-gray-300 rounded-xl -mt-[15px] lg:mt-0 lg:-ml-[80px] lg:w-[70%] z-30 bg-white xl:justify-center">
              <div className="flex items-center gap-1">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-light">
                  3.41 <span className="text-gray-400">(302 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold lg:text-sm xl:text-xl">
                Sanata R200 Restyle
              </h1>
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">103.930km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Gasalin</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Gear} alt="Gear" className="h-4" />
                    <p className="text-sm font-bold">Manual</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Seat} alt="Seat" className="h-4" />
                    <p className="text-sm font-bold">4 seats</p>
                  </div>
                </div>
              </div>
              <hr className="text-gray-300 my-3" />
              <div className="flex lg:flex-col lg:items-baseline xl:flex-row xl:items-center  gap-3 items-center justify-between">
                <p className="text-3xl font-light">
                  <span className="text-lg text-gray-400">From</span> $38.51
                </p>
                <button
                  onClick={BtnNav}
                  className="lg:w-full xl:w-auto text-xl font-bold bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-green-500 sm:w-80 px-4 py-3 mx-auto rounded-lg flex items-center justify-center gap-3 text-xl font-bold cursor-pointer hover:bg-green-600">
          <CachedIcon fontSize="large" style={{ color: "black" }} />
          Load More Cars
        </button>
      </div>
    </div>
  );
};
export default MostSearchedvehiclesComp;
