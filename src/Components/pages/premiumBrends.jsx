import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BMW from "../../assets/PremiumBrendsAssets/bmw-color.svg";
import Chevrolet from "../../assets/PremiumBrendsAssets/chevrolet-color.svg";
import Ford from "../../assets/PremiumBrendsAssets/ford-color.svg";
import Hyundai from "../../assets/PremiumBrendsAssets/hyundai-color.svg";
import Kia from "../../assets/PremiumBrendsAssets/kia-color.svg";
import Mers from "../../assets/PremiumBrendsAssets/Mercedes-Logo.svg";
import Opel from "../../assets/PremiumBrendsAssets/opel-color.svg";
import Peugeot from "../../assets/PremiumBrendsAssets/peugeot-color.svg";
import Tesla from "../../assets/PremiumBrendsAssets/tesla-color.svg";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const PremiumBrendsComp = () => {
  const navigate = useNavigate();
  const ShowAllBtn = () => {
    navigate("/all-brends-page");
  };

  // Carusel settings
  var settings = {
    arrow:false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-gray-100 h- font-[Urbanist]">
      <div className="Container">
        <div className="py-15 ">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:items-end justify-between">
            <div>
              <h1 className="text-5xl font-extrabold">Premium Brands</h1>
              <p className="text-lg font-light text-gray-400">
                Unveil the Finest Selection of High-End Vehicles
              </p>
            </div>
            <button
              onClick={ShowAllBtn}
              className="text-xl font-bold bg-green-500 rounded-lg px-5 py-3 cursor-pointer hover:bg-green-600"
            >
              Show All Brends
              <ArrowForwardIcon fontSize="medium" style={{ color: "black" }} />
            </button>
          </div>
          <div className="mt-15">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={Ford} alt="Ford" className="h-15" />
                    <p className="text-lg font-light">Ford </p>
                    <p className="text-sm font-extralight text-gray-400">
                      59 cars
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={Opel} alt="Opel" className="h-15" />
                    <p className="text-lg font-light">Opel </p>
                    <p className="text-sm font-extralight text-gray-400">
                      32 cars
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={Mers} alt="Mers" className="h-15" />
                    <p className="text-md w-25 font-light">Mersades-Benz</p>
                    <p className="text-sm font-extralight text-gray-400">
                      48 cars
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={Peugeot} alt="Peugeot" className="h-15" />
                    <p className="text-lg font-light">Peugeot </p>
                    <p className="text-sm font-extralight text-gray-400">
                      13 cars
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={BMW} alt="BMW" className="h-15" />
                    <p className="text-lg font-light">BMW </p>
                    <p className="text-sm font-extralight text-gray-400">
                      42 cars
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={Chevrolet} alt="Chevrolet" className="h-15" />
                    <p className="text-lg font-light">Chevrolet </p>
                    <p className="text-sm font-extralight text-gray-400">
                      19 cars
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={Hyundai} alt="Hyundai" className="h-15" />
                    <p className="text-lg font-light">Hyundai </p>
                    <p className="text-sm font-extralight text-gray-400">
                      37 cars
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={Tesla} alt="Tesla" className="h-15" />
                    <p className="text-lg font-light">Tesla </p>
                    <p className="text-sm font-extralight text-gray-400">
                      20 cars
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-30 h-35 py-5 flex flex-col items-center justify-center border bg-white border-gray-300 rounded-md">
                    <img src={Kia} alt="Ford" className="h-15" />
                    <p className="text-lg font-light">Kia </p>
                    <p className="text-sm font-extralight text-gray-400">
                      38 cars
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumBrendsComp;
