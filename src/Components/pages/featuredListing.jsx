import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Fuel from "../../assets/MostSearchedVehiclesAsstest/fuel.svg";
import Seat from "../../assets/MostSearchedVehiclesAsstest/seat.svg";
import Gear from "../../assets/MostSearchedVehiclesAsstest/gear.svg";
import Speed from "../../assets/MostSearchedVehiclesAsstest/speed.svg";
import BMWcarOne from "../../assets/featuresListingAssets/BMW.jpg";
import Genesis from "../../assets/featuresListingAssets/genesis.avif";
import Malibu from "../../assets/featuresListingAssets/malibu.webp";
import MersBig from "../../assets/featuresListingAssets/mersBig.jpg";
import Sarento from "../../assets/featuresListingAssets/sarento.avif";
import Tesla from "../../assets/featuresListingAssets/tesla.webp";
import Tracker from "../../assets/featuresListingAssets/tracker.webp";
import MersSport from "../../assets/featuresListingAssets/mersSport.webp";
import { useNavigate } from "react-router-dom";

const FeaturedListingComp = () => {
    const navigate = useNavigate()
    const BtnViewAll = () => {
        navigate("/all-cars-list");
    }
    const BtnBook = () => {
        navigate("/car-detailed-page");
    }

  return (
    <div className="Container">
      <div className="font-[Urbanist] my-20">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:items-end justify-between">
          <div>
            <h1 className="text-5xl font-extrabold">Featured Listings</h1>
            <p className="text-lg font-light text-gray-400">
              Find the perfect ride for any occasion
            </p>
          </div>
          <button
            onClick={BtnViewAll}
            className="text-xl font-bold bg-green-500 rounded-lg px-5 py-3 cursor-pointer hover:bg-green-600"
          >
            View More
            <ArrowForwardIcon fontSize="medium" style={{ color: "black" }} />
          </button>
        </div>
        <div className="my-10 relative grid gap-10 grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className=" relative max-w-[400px]  h-100 ">
            <img
              src={BMWcarOne}
              alt="BMWcarOne"
              className="z-10 rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
              <div className="flex items-center gap-1 bg-white border-gray-300 border w-36 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-extralight">
                  4.95 <span className="text-gray-400">(672 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold">BMW 3 Series Review 2025</h1>
              <div className="flex items-center gap-1">
                <LocationOnIcon fontSize="small" style={{ color: "black" }} />
                <p className="text-sm font-light text-gray-400">
                  New South Wales, Australia
                </p>
              </div>
              <hr className="text-gray-300" />
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
              <div className="flex items-center justify-between">
                <p className="text-2xl font-extrabold">
                  $69.56 <span className="text-sm text-gray-400">/ day</span>
                </p>
                <button
                  onClick={BtnBook}
                  className="text-xl font-bold bg-green-500 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px] h-100">
            <img src={Genesis} alt="Genesis" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
              <div className="flex items-center gap-1 bg-white border-gray-300 border w-36 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-extralight">
                  3.22 <span className="text-gray-400">(419 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold">Genesis V340 Model</h1>
              <div className="flex items-center gap-1">
                <LocationOnIcon fontSize="small" style={{ color: "black" }} />
                <p className="text-sm font-light text-gray-400">
                  Washington, Amerika
                </p>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">45.500km</p>
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
              <div className="flex items-center justify-between">
                <p className="text-2xl font-extrabold">
                  $51.00 <span className="text-sm text-gray-400">/ day</span>
                </p>
                <button
                  onClick={BtnBook}
                  className="text-xl font-bold bg-green-500 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px] h-100">
            <img src={Malibu} alt="Malibu" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
              <div className="flex items-center gap-1 bg-white border-gray-300 border w-36 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-extralight">
                  2.34 <span className="text-gray-400">(243 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold">Malibu Chevrolet Turbo</h1>
              <div className="flex items-center gap-1">
                <LocationOnIcon fontSize="small" style={{ color: "black" }} />
                <p className="text-sm font-light text-gray-400">
                  Tashkent, Uzbekistan
                </p>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">102.400km</p>
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
              <div className="flex items-center justify-between">
                <p className="text-2xl font-extrabold">
                  $30.12 <span className="text-sm text-gray-400">/ day</span>
                </p>
                <button
                  onClick={BtnBook}
                  className="text-xl font-bold bg-green-500 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px] h-100">
            <img src={MersBig} alt="MersBig" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
              <div className="flex items-center gap-1 bg-white border-gray-300 border w-36 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-extralight">
                  4.17 <span className="text-gray-400">(586 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold">Mersades-Benz S Class</h1>
              <div className="flex items-center gap-1">
                <LocationOnIcon fontSize="small" style={{ color: "black" }} />
                <p className="text-sm font-light text-gray-400">
                  Seoul, South Korea
                </p>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">32.500km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Disel</p>
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
              <div className="flex items-center justify-between">
                <p className="text-2xl font-extrabold">
                  $47.54 <span className="text-sm text-gray-400">/ day</span>
                </p>
                <button
                  onClick={BtnBook}
                  className="text-xl font-bold bg-green-500 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px] h-100">
            <img src={Sarento} alt="Sarento" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
              <div className="flex items-center gap-1 bg-white border-gray-300 border w-36 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-extralight">
                  4.95 <span className="text-gray-400">(672 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold">KIA Sarento Review 2025</h1>
              <div className="flex items-center gap-1">
                <LocationOnIcon fontSize="small" style={{ color: "black" }} />
                <p className="text-sm font-light text-gray-400">
                  Gwangju, Korea
                </p>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">67.100km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Disel</p>
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
              <div className="flex items-center justify-between">
                <p className="text-2xl font-extrabold">
                  $39.87 <span className="text-sm text-gray-400">/ day</span>
                </p>
                <button
                  onClick={BtnBook}
                  className="text-xl font-bold bg-green-500 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px] h-100">
            <img src={Tesla} alt="Tesla" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
              <div className="flex items-center gap-1 bg-white border-gray-300 border w-36 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-extralight">
                  4.00 <span className="text-gray-400">(403 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold">Tesla Model S Supercharger</h1>
              <div className="flex items-center gap-1">
                <LocationOnIcon fontSize="small" style={{ color: "black" }} />
                <p className="text-sm font-light text-gray-400">
                  New South Wales, Australia
                </p>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">23.900km</p>
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
                    <p className="text-sm font-bold">4 seats</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-extrabold">
                  $50.95 <span className="text-sm text-gray-400">/ day</span>
                </p>
                <button
                  onClick={BtnBook}
                  className="text-xl font-bold bg-green-500 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px] h-100">
            <img src={Tracker} alt="Tracker" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
              <div className="flex items-center gap-1 bg-white border-gray-300 border w-36 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-extralight">
                  3.7 <span className="text-gray-400">(409 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold">Chevrolet Tracher 2023</h1>
              <div className="flex items-center gap-1">
                <LocationOnIcon fontSize="small" style={{ color: "black" }} />
                <p className="text-sm font-light text-gray-400">
                  Kokand, Fergana
                </p>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">54.000km</p>
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
              <div className="flex items-center justify-between">
                <p className="text-2xl font-extrabold">
                  $32.74 <span className="text-sm text-gray-400">/ day</span>
                </p>
                <button
                  onClick={BtnBook}
                  className="text-xl font-bold bg-green-500 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px] h-100">
            <img
              src={MersSport}
              alt="MersSport"
              className="z-10 rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
              <div className="flex items-center gap-1 bg-white border-gray-300 border w-36 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                <StarIcon style={{ color: "green", height: "15px" }} />
                <p className="text-sm font-extralight">
                  4.24 <span className="text-gray-400">(593 reviews)</span>
                </p>
              </div>
              <h1 className="text-xl font-bold">Mersades-Benz Sport W23</h1>
              <div className="flex items-center gap-1">
                <LocationOnIcon fontSize="small" style={{ color: "black" }} />
                <p className="text-sm font-light text-gray-400">
                  Mascow, Russia
                </p>
              </div>
              <hr className="text-gray-300" />
              <div className="flex items-center">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Speed} alt="Speed" className="h-4" />
                    <p className="text-sm font-bold">130.910km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Fuel} alt="Fuel" className="h-4" />
                    <p className="text-sm font-bold">Disel</p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={Gear} alt="Gear" className="h-4" />
                    <p className="text-sm font-bold">Automatic</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Seat} alt="Seat" className="h-4" />
                    <p className="text-sm font-bold">2 seats</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-extrabold">
                  $61.00 <span className="text-sm text-gray-400">/ day</span>
                </p>
                <button
                  onClick={BtnBook}
                  className="text-xl font-bold bg-green-500 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListingComp;
