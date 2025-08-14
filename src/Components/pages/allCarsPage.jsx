import React from "react";
import SiteTopComp from "./siteTop";
import NavbarComp from "./navbar";
import PricingHero from "../../assets/mainAssets/Pricinghero.png";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Map from "../../assets/allCarsAssets/Map.png";
import ClearIcon from "@mui/icons-material/Clear";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import StarIcon from "@mui/icons-material/Star";
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
import Pagination from "@mui/material/Pagination";
import PremiumBrendsComp from "./premiumBrends";
import FooterComp from "./footer";

const AllCarsListComp = () => {
   const navigate = useNavigate()
  const black = grey[900];


  const BtnBook = () => {
    navigate("/car-detailed-page");
  };

  const LetSide = (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className="text-xl font-bold font-[urbanist]" component="span">
            Show on map
          </h1>
        </AccordionSummary>
        <AccordionDetails>
          <img src={Map} alt="Map" />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className="text-xl font-bold font-[urbanist]" component="span">
            Filter Price
          </h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="bg-gray-300 rounded-md px-1 py-0.5 cursor-pointer hover:bg-gray-200">
                <ClearIcon fontSize="small" />
              </div>
              <p className="text-lg font-light font-[urbanist]">Clear</p>
            </div>
            <button className="flex items-center gap-1 bg-green-500 px-3 py-1 rounded-xl cursor-pointer hover:bg-green-600">
              <PersonIcon fontSize="small" />
              <p className="text-lg font-bold font-[urbanist]">Apply</p>
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className="text-xl font-bold font-[urbanist]" component="span">
            Car type
          </h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className="font-[urbanist] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  defaultChecked
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">All</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                198
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">Sedans</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                32
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">SUVs</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                13
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">Coupes</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                23
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Hatchbacks
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                35
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Convertibles
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                56
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">Trucks</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                78
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-5">
            <p className="text-lg font-light font-[urbanist]">See more</p>
            <ExpandMoreIcon fontSize="small" />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className="text-xl font-bold font-[urbanist]" component="span">
            Car Amenities
          </h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className="font-[urbanist] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">All</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                32
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Leather upholstery
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                13
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  defaultChecked
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Heated seats
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                23
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Sunroof/Moonroof
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                23
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Keyless entry/start
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                12
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Heads-up display
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                8
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Adaptive cruise control
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                22
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-5">
            <p className="text-lg font-light font-[urbanist]">See more</p>
            <ExpandMoreIcon fontSize="small" />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className="text-xl font-bold font-[urbanist]" component="span">
            Fuel Type
          </h1>
        </AccordionSummary>
        <AccordionDetails>
          <div className="font-[urbanist] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">All</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                41
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Plug-in Hybrid (PHEV)
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                6
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  defaultChecked
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Hybrid (HEV)
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                10
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Electric Vehicle (EV)
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                4
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">Diesel</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                17
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">
                  Gasoline/Petrol
                </h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                19
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  style={{
                    color: black,
                    "&.Mui-checked": {
                      color: black,
                    },
                  }}
                />
                <h5 className="text-lg font-bold font-[urbanist]">Hydrogen</h5>
              </div>
              <p className="text-sm font-light bg-gray-300 flex items-center justify-center py-1 rounded-lg w-8">
                9
              </p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );

  return (
    <div>
      <SiteTopComp />
      <NavbarComp />
      {/* Hero */}
      <div
        className="flex flex-col gap-2 justify-center items-center  bg-cover bg-center bg-no-repeat h-96  max-w-[1600px] mx-auto my-13 rounded-lg"
        style={{
          backgroundImage: `url(${PricingHero})`,
        }}
      >
        <h4 className="text-lg bg-green-100 px-5 py-3 rounded-2xl font-light font-[urbanist]">
          Find cars for sale and for rent near you
        </h4>
        <h1 className="text-5xl font-bold text-white font-[urbanist]">
          Discover Your Ideal Vehicle
        </h1>
        <p className="text-xl font-light text-white font-[urbanist]">
          Search and find your best car rental with easy way
        </p>
      </div>
      {/* Menu inside hero */}
      <div className="Container">
        <div className="w-full bg-white border-gray-300 border-2 rounded-2xl p-5 font-[urbanist] my-10 lg:absolute lg:-top-40  lg:w-[92%]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="bg-green-400 rounded-lg px-3 py-2 text-base font-bold w-20">
                All cars
              </p>
              <p className="bg-gray-400 rounded-lg px-3 py-2 text-base font-bold w-22">
                New cars
              </p>
              <p className="bg-gray-400 rounded-lg px-3 py-2 text-base font-bold w-23">
                Used cars
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <PersonIcon fontSize="small" style={{ color: "black" }} />
              <p className="text-sm font-bold text-gray-400">
                Need more information?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-gray-300 border-2 mt-5 rounded-2xl p-5 xl:flex-row ">
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:w-full">
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:justify-center lg:justify-between lg:w-full">
                <div className="flex flex-col gap-2 w-full border-b-1 border-b-gray-300 pb-1 min-w-40">
                  <p className="text-sm font-bold text-gray-400">
                    Pick Up Location
                  </p>
                  <div className="flex gap-1 justify-between items-end">
                    <div className="flex gap-1 items-center">
                      <LocationOnIcon
                        fontSize="small"
                        style={{ color: "gray" }}
                      />
                      <p className="text-sm font-bold">New York, USA</p>
                    </div>
                    <ExpandMoreIcon
                      fontSize="small"
                      style={{ color: "gary" }}
                    />
                  </div>
                </div>
                <div className="hidden sm:flex h-15 border-1 border-gray-300"></div>
                <div className="flex flex-col gap-2 w-full border-b-1 border-b-gray-300 pb-1 min-w-40">
                  <p className="text-sm font-bold text-gray-400">
                    Drop Off Location
                  </p>
                  <div className="flex gap-1 justify-between items-end">
                    <div className="flex gap-1 items-center">
                      <LocationOnIcon
                        fontSize="small"
                        style={{ color: "gray" }}
                      />
                      <p className="text-sm font-bold">Delaware, USA</p>
                    </div>
                    <ExpandMoreIcon
                      fontSize="small"
                      style={{ color: "gary" }}
                    />
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex h-15 border-1 border-gray-300"></div>
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:justify-center lg:justify-between lg:w-full">
                <div className="flex flex-col gap-2 w-full border-b-1 border-b-gray-300 pb-1 min-w-40">
                  <p className="text-sm font-bold text-gray-400">
                    Pick Up Date & Time
                  </p>
                  <div className="flex gap-1 justify-between items-end">
                    <div className="flex gap-1 items-center">
                      <LocationOnIcon
                        fontSize="small"
                        style={{ color: "gray" }}
                      />
                      <p className="text-sm font-bold">Thu, Oct 01 2024</p>
                    </div>
                    <ExpandMoreIcon
                      fontSize="small"
                      style={{ color: "gary" }}
                    />
                  </div>
                </div>
                <div className="hidden sm:flex h-15 border-1 border-gray-300"></div>
                <div className="flex flex-col gap-2 w-full border-b-1 border-b-gray-300 pb-1 min-w-40">
                  <p className="text-sm font-bold text-gray-400">
                    Return Date & Time
                  </p>
                  <div className="flex gap-1 justify-between items-end">
                    <div className="flex gap-1 items-center">
                      <LocationOnIcon
                        fontSize="small"
                        style={{ color: "gray" }}
                      />
                      <p className="text-sm font-bold">Mon, Oct 07 2024</p>
                    </div>
                    <ExpandMoreIcon
                      fontSize="small"
                      style={{ color: "gary" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link to={"/all-cars-list"}>
              <button className="w-full  xl:w-60 bg-green-500 rounded-lg py-3 px-2 flex items-center justify-center gap-1 text-lg font-bold cursor-pointer hover:bg-green-600">
                <SearchIcon fontSize="medium" style={{ color: "black" }} />
                Find a Vehicle
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* All cars Part */}
      <div className="Container">
        <h1 className="text-4xl font-bold font-[urbanist]  lg:mt-65 xl:mt-50">
          Our Vehicle Fleet
        </h1>
        <p className="text-xl text-gray-400 font-light font-[urbanist]">
          Turning dreams into reality with versatile vehicles.
        </p>
        <div className="flex gap-10 mt-10">
          <div className="w-90 hidden lg:flex flex-col gap-3">{LetSide}</div>
          <div className="w-full ">
            <div className=" flex flex-col md:flex-row items-end md:items-center gap-2 justify-between w-full border-b border-b-gray-300 pb-5 ">
              <div className="flex items-center gap-3">
                <GridViewIcon fontSize="medium" />
                <ListIcon fontSize="large" style={{ color: "gray" }} />
                <p className="text-lg font-light font-[urbanist] text-gray-400">
                  64 Tours found
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                <div className="flex items-center gap-3">
                  <ImportExportIcon fontSize="medium" />
                  <div className="flex items-center justify-center w-35 gap-2 p-2 border border-gray-300 rounded-xl ">
                    <p className="text-lg text-gray-400 font-bold font-[urbanist]">
                      Show: <span className="text-black">12</span>
                    </p>
                    <ExpandMoreIcon />
                  </div>
                </div>
                <div className="flex items-center justify-center w-55 gap-2 p-2 border border-gray-300 rounded-xl ">
                  <p className="text-lg text-gray-400 font-bold font-[urbanist]">
                    Sort by: <span className="text-black">Newest Post</span>
                  </p>
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="my-10 relative grid gap-10 grid-cols-1 md:grid-cols-2  xl:grid-cols-3  place-items-center">
              <div className=" relative max-w-[400px]  h-100 ">
                <img
                  src={BMWcarOne}
                  alt="BMWcarOne"
                  className="z-10 rounded-t-xl"
                />
                <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
                  <div className="flex items-center gap-1 bg-white border-gray-300 border w-40 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                    <StarIcon style={{ color: "green", height: "15px" }} />
                    <p className="text-sm font-extralight">
                      4.95 <span className="text-gray-400">(672 reviews)</span>
                    </p>
                  </div>
                  <h1 className="text-xl font-bold">BMW 3 Series</h1>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "black" }}
                    />
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
                      $69.56{" "}
                      <span className="text-sm text-gray-400">/ day</span>
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
                  src={Genesis}
                  alt="Genesis"
                  className="z-10 rounded-t-xl"
                />
                <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
                  <div className="flex items-center gap-1 bg-white border-gray-300 border w-40 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                    <StarIcon style={{ color: "green", height: "15px" }} />
                    <p className="text-sm font-extralight">
                      3.22 <span className="text-gray-400">(419 reviews)</span>
                    </p>
                  </div>
                  <h1 className="text-xl font-bold">Genesis V340 Model</h1>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "black" }}
                    />
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
                      $51.00{" "}
                      <span className="text-sm text-gray-400">/ day</span>
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
                  <div className="flex items-center gap-1 bg-white border-gray-300 border w-40 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                    <StarIcon style={{ color: "green", height: "15px" }} />
                    <p className="text-sm font-extralight">
                      2.34 <span className="text-gray-400">(243 reviews)</span>
                    </p>
                  </div>
                  <h1 className="text-xl font-bold">Malibu Chevrolet Turbo</h1>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "black" }}
                    />
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
                      $30.12{" "}
                      <span className="text-sm text-gray-400">/ day</span>
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
                  src={MersBig}
                  alt="MersBig"
                  className="z-10 rounded-t-xl"
                />
                <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
                  <div className="flex items-center gap-1 bg-white border-gray-300 border w-40 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                    <StarIcon style={{ color: "green", height: "15px" }} />
                    <p className="text-sm font-extralight">
                      4.17 <span className="text-gray-400">(586 reviews)</span>
                    </p>
                  </div>
                  <h1 className="text-xl font-bold">Mersades-Benz S Class</h1>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "black" }}
                    />
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
                      $47.54{" "}
                      <span className="text-sm text-gray-400">/ day</span>
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
                  src={Sarento}
                  alt="Sarento"
                  className="z-10 rounded-t-xl"
                />
                <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
                  <div className="flex items-center gap-1 bg-white border-gray-300 border w-40 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                    <StarIcon style={{ color: "green", height: "15px" }} />
                    <p className="text-sm font-extralight">
                      4.95 <span className="text-gray-400">(672 reviews)</span>
                    </p>
                  </div>
                  <h1 className="text-xl font-bold">KIA Sarento Review 2025</h1>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "black" }}
                    />
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
                      $39.87{" "}
                      <span className="text-sm text-gray-400">/ day</span>
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
                  <div className="flex items-center gap-1 bg-white border-gray-300 border w-40 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                    <StarIcon style={{ color: "green", height: "15px" }} />
                    <p className="text-sm font-extralight">
                      4.00 <span className="text-gray-400">(403 reviews)</span>
                    </p>
                  </div>
                  <h1 className="text-xl font-bold">Tesla Supercharger</h1>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "black" }}
                    />
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
                      $50.95{" "}
                      <span className="text-sm text-gray-400">/ day</span>
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
                  src={Tracker}
                  alt="Tracker"
                  className="z-10 rounded-t-xl"
                />
                <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38">
                  <div className="flex items-center gap-1 bg-white border-gray-300 border w-40 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                    <StarIcon style={{ color: "green", height: "15px" }} />
                    <p className="text-sm font-extralight">
                      3.7 <span className="text-gray-400">(409 reviews)</span>
                    </p>
                  </div>
                  <h1 className="text-xl font-bold">Chevrolet Tracher 2023</h1>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "black" }}
                    />
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
                      $32.74{" "}
                      <span className="text-sm text-gray-400">/ day</span>
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
                  <div className="flex items-center gap-1 bg-white border-gray-300 border w-40 justify-center rounded-xl h-6 -mt-7 ml-[40%]">
                    <StarIcon style={{ color: "green", height: "15px" }} />
                    <p className="text-sm font-extralight">
                      4.24 <span className="text-gray-400">(593 reviews)</span>
                    </p>
                  </div>
                  <h1 className="text-xl font-bold">Mersades-Benz</h1>
                  <div className="flex items-center gap-1">
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "black" }}
                    />
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
                      $61.00{" "}
                      <span className="text-sm text-gray-400">/ day</span>
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
        {/* pagination */}
        <div className=" flex items-center justify-center  lg:justify-start lg:pl-80 pb-10">
          <Pagination count={10} variant="text" size="large" color="success" shape="rounded" />
        </div>
      </div>
      {/* premium brends */}
      <PremiumBrendsComp />
      {/* footer */}
      <FooterComp/>
    </div>
  );
};

export default AllCarsListComp;
