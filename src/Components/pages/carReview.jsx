import Slider from "react-slick";
import BgOne from "../../assets/carReviewAssets/audi.png";
import BgTwo from "../../assets/carReviewAssets/hyundai.avif";
import BgThree from "../../assets/carReviewAssets/santafe.webp";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const CarReview = () => {
  const navigate = useNavigate();
  const BtnNav = () => {
    navigate("/car-detailed-page");
  };

  // carusel right arrow function
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="Container">
        <div
          onClick={onClick}
          className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center absolute -top-25 right-30 cursor-pointer hover:bg-green-600"
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
          className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center z-10 absolute top-125 right-45 cursor-pointer hover:bg-green-600"
        >
          <KeyboardArrowLeftOutlinedIcon fontSize="large" />
        </div>
      </div>
    );
  }

  const settings = {
    infinite: true,
    arrow: true,
    speed: 500,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="Container">
      <div className="my-20 font-[Urbanist]">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div
                className="h-150 bg-cover bg-center bg-no-repeat w-full rounded-2xl flex flex-col gap-10 justify-center px-20"
                style={{ backgroundImage: `url(${BgTwo})` }}
              >
                <p className="text-xl font-light text-green-500 uppercase">
                  Car Reviev
                </p>
                <h1 className="text-4xl font-bold text-white ">
                  Hyundai Tucson Plug-In <br /> Hybrid 2025 review
                </h1>
                <p className="hidden sm:flex text-lg text-gray-300 font-light">
                  The Tucson Plug-in Hybrid is easy to drive and provides a{" "}
                  <br />
                  sufficient all-electric range.
                </p>
                <button
                  onClick={BtnNav}
                  className="flex items-center mt-10 justify-center gap-1 text-xl font-bold text-black bg-green-500 w-55 py-3 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  View Details
                  <ArrowForwardIcon
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </button>
              </div>
            </div>
            <div>
              <div
                className="h-150 bg-cover bg-center bg-no-repeat w-full rounded-2xl flex flex-col gap-10 justify-center px-20"
                style={{ backgroundImage: `url(${BgThree})` }}
              >
                <p className="text-xl font-light text-green-500 uppercase">
                  Car Reviev
                </p>
                <h1 className="text-4xl font-bold text-white ">
                  Sanata Santafe New Restyle <br /> Electric 2025 review
                </h1>
                <p className="hidden sm:flex text-lg text-gray-300 font-light">
                  The Tucson Plug-in Hybrid is easy to drive and provides a{" "}
                  <br />
                  sufficient all-electric range.
                </p>
                <button
                  onClick={BtnNav}
                  className="flex items-center mt-10 justify-center gap-1 text-xl font-bold text-black bg-green-500 w-55 py-3 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  View Details
                  <ArrowForwardIcon
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </button>
              </div>
            </div>
            <div>
              <div
                className="h-150 bg-cover bg-center bg-no-repeat w-full rounded-2xl flex flex-col gap-10 justify-center px-20"
                style={{ backgroundImage: `url(${BgOne})` }}
              >
                <p className="text-xl font-light text-green-500 uppercase">
                  Car Reviev
                </p>
                <h1 className="text-4xl font-bold text-white ">
                  New Audi SUV Q Models <br /> Swansway Motor group
                </h1>
                <p className="hidden sm:flex text-lg text-gray-300 font-light">
                  The Tucson Plug-in Hybrid is easy to drive and provides a
                  <br />
                  sufficient all-electric range.
                </p>
                <button
                  onClick={BtnNav}
                  className="flex items-center mt-10 justify-center gap-1 text-xl font-bold text-black bg-green-500 w-55 py-3 rounded-lg cursor-pointer hover:bg-green-600"
                >
                  View Details
                  <ArrowForwardIcon
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarReview;
