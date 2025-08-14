import React, { Component } from "react";
import { Link } from "react-router-dom";
import SiteTopComp from "./pages/siteTop";
import NavbarComp from "./pages/navbar";
import FooterComp from "./pages/footer";
import Slider from "react-slick";
import FirstCaruselImg from "../assets/caruselAssets/CaruselOne.jpg";
import SecondCaruselImg from "../assets/caruselAssets/CaruselTwo.jpg";
import ThirdCaruselImg from "../assets/caruselAssets/CaruselThree.jpeg";
import CheckIcon from "../assets/mainAssets/check.svg";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import BrowseByTypeComp from "./pages/browseByType";
import MostSearchedvehiclesComp from "./pages/mostSearchedvehicles";
import RentalSystemComp from "./pages/rentalSystem";
import CarReview from "./pages/carReview";
import FeaturedListingComp from "./pages/featuredListing";
import PremiumBrendsComp from "./pages/premiumBrends";
import AwesomeTeamComp from "./pages/awesomeTeam";
import ColculatorComp from "./pages/calculator";
import CommentsComp from "./pages/comments";
import HowOne from '../assets/mainAssets/howIconOne.svg'
import HowTwo from '../assets/mainAssets/howIconTwo.svg'
import HowThree from '../assets/mainAssets/howIconThree.svg'
import HowFour from "../assets/mainAssets/howIconFour.svg";
import GooglePlay from "../assets/mainAssets/GooglePlay.svg";
import AppStore from "../assets/mainAssets/ApppStore.svg";
import Phone from "../assets/mainAssets/phone.png";

const HomeComp = () => {
  // carusel right arrow function
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="Container">
        <div
          onClick={onClick}
          className="h-10 w-10 rounded-full bg-white flex items-center justify-center absolute -top-15 right-20 cursor-pointer hover:bg-green-500"
        >
          <KeyboardArrowRightOutlinedIcon fontSize="large" />
        </div>
      </div>
    );
  }

  // carusel left arrow function
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="Container">
        <div
          onClick={onClick}
          className="h-10 w-10 rounded-full bg-white flex items-center justify-center z-10 absolute top-135.5 lg:top-175.5 xl:top-156 right-35 cursor-pointer hover:bg-green-500"
        >
          <KeyboardArrowLeftOutlinedIcon fontSize="large" />
        </div>
      </div>
    );
  }

  // carusel settings
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      {/* site top */}
      <SiteTopComp />
      {/* navbar */}
      <NavbarComp />
      {/* carusel */}
      <Slider {...settings}>
        <div>
          <div
            className="pt-20 w-full h-150 lg:h-190 xl:h-170 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url(${FirstCaruselImg})`,
            }}
          >
            <div className="Container">
              <div className="flex flex-col gap-7">
                <p className="text-xl text-green-500 font-[urbanist] font-bold">
                  Find Your Perfect Car
                </p>
                <h1 className="text-5xl font-extrabold text-white font-[urbanist]">
                  Looking for a vehicle? <br /> You’re in the perfect spot.
                </h1>
                <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-20  ">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                      <img src={CheckIcon} alt="CheckIcon" />
                    </div>
                    <p className="text-lg text-white font-light font-[urbanist]">
                      High quality at a low cost.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                      <img src={CheckIcon} alt="CheckIcon" />
                    </div>
                    <p className="text-lg text-white font-light font-[urbanist]">
                      Premium services
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                      <img src={CheckIcon} alt="CheckIcon" />
                    </div>
                    <p className="text-lg text-white font-light font-[urbanist]">
                      24/7 roadside support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pt-20 w-full h-150 lg:h-190 xl:h-170 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url(${SecondCaruselImg})`,
            }}
          >
            <div className="Container">
              <div className="flex flex-col gap-7">
                <p className="text-xl text-green-500 font-[urbanist] font-bold">
                  +3600 cars for you
                </p>
                <h1 className="text-5xl font-extrabold text-white font-[urbanist]">
                  Find your next vehicle today
                </h1>
                <p className="text-xl text-white font-[urbanist] font-bold">
                  Browse our diverse inventory and enjoy a seamless buying
                  experience <br /> with expert support every step of the way
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pt-20 w-full h-150 lg:h-190 xl:h-170 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url(${ThirdCaruselImg})`,
            }}
          >
            <div className="Container">
              <div className="flex flex-col gap-7">
                <p className="text-xl text-green-500 font-[urbanist] font-bold">
                  +3600 cars for you
                </p>
                <h1 className="text-5xl font-extrabold text-white font-[urbanist]">
                  Discover your next car today.
                </h1>
                <p className="text-xl text-white font-[urbanist] font-bold">
                  Explore our wide selection and experience a smooth buying
                  process <br /> with personalized support at every stage.
                </p>
                <p className="text-xl text-white font-[urbanist] font-bold">
                  Popular Searches:
                  <span className="font-extralight underline">
                    Economy,
                  </span>{" "}
                  <span className="font-extralight underline">Standard, </span>
                  <span className="font-extralight underline">Luxury, </span>
                  <span className="font-extralight underline">SUV, </span>
                  <span className="font-extralight underline">
                    Convertible.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* Searching menu inside carusel */}
      <div className="Container">
        <div className="w-full bg-white border-gray-300 border-2 rounded-2xl p-5 font-[urbanist] my-10 lg:absolute lg:-top-100 xl:-top-85 lg:w-[92%]">
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
      {/* Browse by type */}
      <BrowseByTypeComp />
      <hr className="h-1 text-gray-300" />
      {/* Most Searched vehicles Comp */}
      <MostSearchedvehiclesComp />
      {/* rental system */}
      <RentalSystemComp />
      {/* Car reviev */}
      <CarReview />
      {/* Statistica fo Global branches */}
      <div className="Container">
        <div className="py-10 bg-blue-100 rounded-xl mb-20 w-full grid gap-10 grid-cols-2 sm:grid-cols-3  md:grid-cols-5 place-items-center">
          <div className="w-25 flex flex-col gap-2 items-start justify-center">
            <h3 className="text-3xl font-extrabold">45+</h3>
            <p className="text-base font-bold">Global Branches</p>
          </div>
          <div className="w-25 flex flex-col gap-2 items-start justify-center">
            <h3 className="text-3xl font-extrabold">29K</h3>
            <p className="text-base font-bold">Destinations Collaboration</p>
          </div>
          <div className="w-25 flex flex-col gap-2 items-start justify-center">
            <h3 className="text-3xl font-extrabold">20+</h3>
            <p className="text-base font-bold">Years Experience</p>
          </div>
          <div className="w-25 flex flex-col gap-2 items-start justify-center">
            <h3 className="text-3xl font-extrabold">168K</h3>
            <p className="text-base font-bold">Happy Customers</p>
          </div>
          <div className="w-25 flex flex-col gap-2 items-start justify-center">
            <h3 className="text-3xl font-extrabold">15M</h3>
            <p className="text-base font-bold">User Accounts</p>
          </div>
        </div>
      </div>
      {/* Featured Listing */}
      <FeaturedListingComp />
      {/* premium brends */}
      <PremiumBrendsComp />
      {/* Agents */}
      <AwesomeTeamComp />
      {/* Colculator Section */}
      <div className="bg-gray-600 font-[urbanist]">
        <div className="Container">
          <div className="flex gap-5 items-center justify-between py-10">
            <div className="w-full flex items-center justify-center">
              <ColculatorComp />
            </div>
            <div className="w-full hidden  lg:flex flex-col gap-8 py-40">
              <h1 className="text-5xl font-extrabold text-white">
                Want to Calculate <br /> Your Car Payment?
              </h1>
              <p className="text-lg font-bold text-white">
                Match with up to 4 lenders to get the lowest rate <br />{" "}
                available with no markups, no fees, and no obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Comppents component */}
      <CommentsComp />
      {/* how it works Component */}
      <div className="Container">
        <div className="font-[urbanist] my-20">
          <p className="text-lg font-light text-gray-400 text-center">
            HOW IT WORKS
          </p>
          <h1 className="text-4xl font-bold text-center">
            Presenting Your New <br /> Go-To Car Rental Experience
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
            <div className="flex flex-col items-center justify-center gap-2 w-55 h-50 p-5">
              <img src={HowOne} alt="HowOne" />
              <h4 className="text-xl font-bold">Choose a Location</h4>
              <p className="text-sm font-light text-gray-400">
                Select the ideal destination to begin your journey with ease
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-55 h-50 p-5">
              <img src={HowOne} alt="HowOne" />
              <h4 className="text-xl font-bold">Choose a Location</h4>
              <p className="text-sm font-light text-gray-400">
                Select the ideal destination to begin your journey with ease
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-55 h-50 p-5">
              <img src={HowOne} alt="HowOne" />
              <h4 className="text-xl font-bold">Choose a Location</h4>
              <p className="text-sm font-light text-gray-400">
                Select the ideal destination to begin your journey with ease
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-55 h-50 p-5">
              <img src={HowOne} alt="HowOne" />
              <h4 className="text-xl font-bold">Choose a Location</h4>
              <p className="text-sm font-light text-gray-400">
                Select the ideal destination to begin your journey with ease
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Download app part */}
      <div className="bg-gray-200 font-[urbanist] pt-20">
        <div className="Container">
          <div className="flex gap-10 ">
            <div className="flex-1/2 flex flex-col items-center lg:items-baseline pl-0 gap-4 lg:pl-40 pb-5">
              <p className="text-white bg-green-500 text-xl font-light w-40 flex items-center justify-center px-3 py-2 rounded-lg">
                Download App
              </p>
              <h1 className="text-3xl font-bold">
                Get 15% off when <br /> ordering on the App
              </h1>
              <p className="text-xl font-light text-gray-400">
                Manage all your car rentals on the go <br /> with the Carento
                app
              </p>
              <div className="flex flex-col lg:flex-row items-start gap-2">
                <button className="bg-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-500">
                  <img src={GooglePlay} alt="GooglePlay" />
                </button>
                <button className="bg-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-500">
                  <img src={AppStore} alt="AppStore" />
                </button>
              </div>
            </div>
            <div className="hidden lg:flex flex-1/2 items-end">
              <img src={Phone} alt="Phone" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <FooterComp />
    </div>
  );
};

export default HomeComp;
