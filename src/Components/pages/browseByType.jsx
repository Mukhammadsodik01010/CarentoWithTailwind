import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Crassower from '.././../assets/BrowseByTypeAsseets/Crassower.jpg'
import HatchBack from '.././../assets/BrowseByTypeAsseets/Hatchback.jpg'
import Minivan from '.././../assets/BrowseByTypeAsseets/Minivan.jpg'
import Sedan from '.././../assets/BrowseByTypeAsseets/Sedan.webp'
import Sports from '.././../assets/BrowseByTypeAsseets/Sport.jpg'
import SUV from ".././../assets/BrowseByTypeAsseets/SUV.jpg";
import { useNavigate } from "react-router-dom";

const BrowseByTypeComp = () => {
  const navigate = useNavigate()
  
  const BtnNav = () => {
    navigate("/all-cars-list")
  }

  return (
    <div className="Container">
      <div className="font-[Urbanist] my-20">
        <div className="flex flex-col sm:flex-row items-baseline sm:items-end gap-3 justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold">Browse by Type</h1>
            <p className="text-xl font-light text-gray-400">
              Find the perfect ride for any occasion
            </p>
          </div>
          <button
            onClick={BtnNav}
            className="flex items-center justify-center gap-1 text-lg font-bold bg-green-500 px-5 py-2 rounded-lg cursor-pointer hover:bg-green-600"
          >
            View All
            <ArrowForwardIcon fontSize="small" style={{ color: "black" }} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 place-items-center my-15 gap-10">
          <div className="w-40 flex flex-col items-center">
            <img
              src={Crassower}
              alt="Crassower"
              className="w-full rounded-xl h-25"
            />
            <p className="bg-gray-200 border-2 border-gray-400 rounded-2xl px-3 text-sm font-light -mt-3">
              24 Vehicles
            </p>
            <h3 className="text-xl font-bold mt-2">Crassower</h3>
          </div>
          <div className="w-40 flex flex-col items-center">
            <img
              src={HatchBack}
              alt="HatchBack"
              className="w-full rounded-xl h-25"
            />
            <p className="bg-gray-200 border-2 border-gray-400 rounded-2xl px-3 text-sm font-light -mt-3">
              24 Vehicles
            </p>
            <h3 className="text-xl font-bold mt-2">Hatchback</h3>
          </div>
          <div className="w-40 flex flex-col items-center">
            <img src={Sedan} alt="Sedan" className="w-full rounded-xl h-25" />
            <p className="bg-gray-200 border-2 border-gray-400 rounded-2xl px-3 text-sm font-light -mt-3">
              24 Vehicles
            </p>
            <h3 className="text-xl font-bold mt-2">Sedan</h3>
          </div>
          <div className="w-40 flex flex-col items-center">
            <img src={SUV} alt="SUV" className="w-full rounded-xl h-25" />
            <p className="bg-gray-200 border-2 border-gray-400 rounded-2xl px-3 text-sm font-light -mt-3">
              24 Vehicles
            </p>
            <h3 className="text-xl font-bold mt-2">SUV</h3>
          </div>
          <div className="w-40 flex flex-col items-center">
            <img src={Sports} alt="Sports" className="w-full rounded-xl h-25" />
            <p className="bg-gray-200 border-2 border-gray-400 rounded-2xl px-3 text-sm font-light -mt-3">
              24 Vehicles
            </p>
            <h3 className="text-xl font-bold mt-2">Sports</h3>
          </div>
          <div className="w-40 flex flex-col items-center">
            <img
              src={Minivan}
              alt="Minivan"
              className="w-full rounded-xl h-25"
            />
            <p className="bg-gray-200 border-2 border-gray-400 rounded-2xl px-3 text-sm font-light -mt-3">
              24 Vehicles
            </p>
            <h3 className="text-xl font-bold mt-2">Minivan</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByTypeComp;
