import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SiteTopComp from "./siteTop";
import NavbarComp from "./navbar";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FirstImage from '../../assets/carDetailedPage/one.jpg'
import SecondImage from '../../assets/carDetailedPage/two.jpeg'
import ThirdImage from '../../assets/carDetailedPage/three.jpeg'
import FourImage from '../../assets/carDetailedPage/four.jpg'
import FivetImage from '../../assets/carDetailedPage/five.jpeg'
import SixtImage from "../../assets/carDetailedPage/six.jpeg";
import GridViewIcon from "@mui/icons-material/GridView";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FooterComp from "./footer";
import Speed from '../../assets/carDetailedPage/speed.svg'
import Fuel from '../../assets/carDetailedPage/fuel.svg'
import Gear from '../../assets/carDetailedPage/gear.svg'
import Seat from '../../assets/carDetailedPage/seat.svg'
import Bags from '../../assets/carDetailedPage/bag.svg'
import Car from '../../assets/carDetailedPage/car.svg'
import Door from '../../assets/carDetailedPage/doors.svg'
import Litr from "../../assets/carDetailedPage/litr.svg";
import Mark from "../../assets/carDetailedPage/mark.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ColculatorComp from "./calculator";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height:"90%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CarDetailedPageComp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <SiteTopComp />
      <NavbarComp />
      <div className="Container">
        <div className="flex items-center gap-4 font-[urbanist] mt-10">
          <h1 className="text-lg text-gray-400 font-light">Home</h1>
          <ArrowForwardIosIcon fontSize=" small" style={{ color: "gray" }} />
          <h1 className="text-lg text-gray-400 font-light">Cars rental</h1>
          <ArrowForwardIosIcon fontSize=" small" style={{ color: "gray" }} />
          <h1 className="text-lg font-light">Dodge Challanger 2020</h1>
        </div>
        <div className="flex w-fit gap-2 border border-gray-300 px-3 py-2 rounded-2xl my-8 ">
          <StarIcon fontSize="small" style={{ color: "green" }} />
          <p className="text-sm font-light">
            4.95 <span className="text-gray-400">(672 reviews)</span>
          </p>
        </div>
        <h1 className="text-4xl font-bold font-[urbanist]">
          Dodge Challanger Hellcat - Modern compact sedan in <br /> white color
          on beautiful dark wheels
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-end gap-5 justify-between my-10 font-[urbanist]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-10">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <LocationOnIcon fontSize="small" />
                <p className="text-lg font-light">Las Vegas, USA</p>
              </div>
              <p className="text-lg font-light underline">Show on map</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <QrCodeIcon fontSize=" small" />
                <p className="text-lg font-light">Fleet Code:</p>
              </div>
              <p className="text-lg font-light underline">LVA-4125</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 w-fit px-3 py-2 rounded-xl bg-green-500 cursor-pointer hover:bg-green-600">
              <ShareIcon fontSize="small" />
              <p className="text-lg font-bold">Share</p>
            </div>
            <div className="flex items-center gap-1 w-fit px-3 py-2 rounded-xl bg-green-500 cursor-pointer hover:bg-green-600">
              <FavoriteIcon fontSize="medium" style={{ color: "black" }} />
              <p className="text-lg font-bold">Wishlist</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 h-fit">
          <div className="flex-1/2 relative">
            <img
              src={FirstImage}
              alt="FirstImage"
              className="rounded-2xl w-full h-70 sm:h-100"
            />
            <div className="flex w-full justify-center md:flex-col lg:flex-row  lg:items-center gap-2 lg:gap-5 my-10 md:my-0  md:absolute  md:top-72 lg:top-85 pl-5">
              <div className="flex items-center justify-center gap-1 w-45  px-3 py-2 rounded-2xl bg-green-500 cursor-pointer hover:bg-green-600">
                <GridViewIcon />
                <p className="text-lg font-bold font-[urbanist]">
                  See All Photos
                </p>
              </div>
              <div
                onClick={handleOpen}
                className="flex items-center justify-center gap-1 w-45  px-3 py-2 rounded-2xl bg-green-500 cursor-pointer hover:bg-green-600"
              >
                <PlayCircleOutlineIcon />
                <p className="text-lg font-bold font-[urbanist]">Video Clips</p>
              </div>
            </div>
          </div>
          <div className="hidden flex-1/2 md:grid grid-cols-2 gap-5 place-items-center">
            <img
              src={SecondImage}
              alt="SecondImage"
              className="w-70 h-45 rounded-2xl"
            />
            <img
              src={ThirdImage}
              alt="ThirdImage"
              className="w-70 h-45 rounded-2xl"
            />
            <img
              src={FourImage}
              alt="FourImage"
              className="w-70 h-45 rounded-2xl"
            />
            <img
              src={FivetImage}
              alt="FivetImage"
              className="w-70 h-45 rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 font-[urbanist]">
          <div className="flex flex-col gap-5 my-10 w-full">
            <div className="border-2 p-10 rounded-xl border-gray-300 grid grid-cols-2 sm:grid-cols-4 place-items-center gap-5">
              <div className="flex items-center gap-2 w-30 justify-center py-2 rounded-md bg-green-200">
                <img src={Speed} alt="Speed" />
                <p className="text-sm font-light">56,500</p>
              </div>
              <div className="flex items-center gap-2 w-30 justify-center py-2 rounded-md bg-green-200">
                <img src={Fuel} alt="Fuel" />
                <p className="text-sm font-light">Diesel</p>
              </div>
              <div className="flex items-center gap-2 w-30 justify-center py-2 rounded-md bg-green-200">
                <img src={Gear} alt="Gear" />
                <p className="text-sm font-light">Automatic</p>
              </div>
              <div className="flex items-center gap-2 w-30 justify-center py-2 rounded-md bg-green-200">
                <img src={Seat} alt="Seat" />
                <p className="text-sm font-light">2 seats</p>
              </div>
              <div className="flex items-center gap-2 w-30 justify-center py-2 rounded-md bg-green-200">
                <img src={Bags} alt="Bags" />
                <p className="text-sm font-light">1 Large bags</p>
              </div>
              <div className="flex items-center gap-2 w-30 justify-center py-2 rounded-md bg-green-200">
                <img src={Car} alt="Car" />
                <p className="text-sm font-light">Crossover</p>
              </div>
              <div className="flex items-center gap-2 w-30 justify-center py-2 rounded-md bg-green-200">
                <img src={Door} alt="Door" />
                <p className="text-sm font-light">2 Doors</p>
              </div>
              <div className="flex items-center gap-2 w-30 justify-center py-2 rounded-md bg-green-200">
                <img src={Litr} alt="Litr" />
                <p className="text-sm font-light">2.5L</p>
              </div>
            </div>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 component="span" className="text-2xl font-bold">
                  Overview
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-sm font-light">
                  Introducing the epitome of modern sophistication in the realm
                  of compact SUVs – the Seltos K3. Dressed in a captivating blue
                  hue that exudes elegance and flair, this dynamic vehicle
                  stands as a testament to innovation and style. With its sleek
                  design accentuated by striking dark wheels, the Seltos K3 is
                  not merely a mode of transportation but a statement of refined
                  taste and contemporary living.
                </p>
                <p className="text-sm font-light mt-3">
                  Prepare to embark on a journey where cutting-edge technology
                  meets unparalleled comfort, all wrapped in a package of
                  unparalleled aesthetics. Join us as we delve into the world of
                  the Seltos K3, where every detail is crafted to elevate your
                  driving experience to new heights.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 component="span" className="text-2xl font-bold">
                  Included in the price
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-around">
                  <div className="flex flex-col items-start  gap-2">
                    <div className="flex items-center gap-1">
                      <img src={Mark} alt="Mark" />
                      <p className="text-sm font-light">
                        Free cancellation up to 48 hours before pick-up
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={Mark} alt="Mark" />
                      <p className="text-sm font-light">
                        Collision Damage Waiver with $700 deductible
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start  gap-2">
                    <div className="flex items-center gap-1">
                      <img src={Mark} alt="Mark" />
                      <p className="text-sm font-light">
                        Theft Protection with ₫66,926,626 excess
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={Mark} alt="Mark" />
                      <p className="text-sm font-light">Unlimited mileage</p>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 component="span" className="text-2xl font-bold">
                  Question & Answers
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2">
                    <HelpOutlineIcon
                      fontSize="small"
                      style={{ color: "gray" }}
                    />
                    <h2 className="text-lg font-bold">
                      Is The High Roller suitable for all ages?
                    </h2>
                  </div>
                  <p className="text-sm font-light mt-3">
                    Absolutely! The High Roller offers a family-friendly
                    experience suitable for visitors of all ages. Children must
                    be accompanied by an adult.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5 mt-4">
                  <div className="flex items-center gap-2">
                    <HelpOutlineIcon
                      fontSize="small"
                      style={{ color: "gray" }}
                    />
                    <h2 className="text-lg font-bold">
                      Can I bring food or drinks aboard The High Roller?
                    </h2>
                  </div>
                  <p className="text-sm font-light mt-3">
                    Absolutely! The High Roller offers a family-friendly Outside
                    food and beverages are not permitted on The High Roller.
                    However, there are nearby dining options at The LINQ
                    Promenade where you can enjoy a meal before or after your
                    ride.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5 mt-4">
                  <div className="flex items-center gap-2">
                    <HelpOutlineIcon
                      fontSize="small"
                      style={{ color: "gray" }}
                    />
                    <h2 className="text-lg font-bold">
                      Is The High Roller wheelchair accessible?
                    </h2>
                  </div>
                  <p className="text-sm font-light mt-3">
                    es, The High Roller cabins are wheelchair accessible, making
                    it possible for everyone to enjoy the breathtaking views of
                    Las Vegas.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h1 component="span" className="text-2xl font-bold">
                  Loan Calculator
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <ColculatorComp />
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex flex-col gap-5 w-full  lg:w-150 my-10">
            <div className="border-2 p-10 rounded-xl border-gray-300 grid">
              <h1 className="text-2xl font-bold">Get Started</h1>
              <button className="flex items-center justify-center gap-1 w-full bg-green-500 text-xl font-bold py-2 rounded-lg cursor-pointer hover:bg-green-600 mt-2">
                Schedule Test Drive
                <ArrowForwardIcon fontSize="small" />
              </button>
              <button className="flex items-center justify-center gap-1 w-full bg-green-500 text-xl font-bold py-2 rounded-lg cursor-pointer hover:bg-green-600 mt-2">
                Make An Offer Price
                <ArrowForwardIcon fontSize="small" />
              </button>
            </div>
            <div className="border-2 p-10 rounded-xl border-gray-300 grid">
              <h1 className="text-2xl font-bold">Rent This Vehicle</h1>
              <div className="flex flex-col items-start gap-1 mt-5">
                <p className="text-lg font-bold">Pick-Up</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </div>
              <div className="flex flex-col items-start gap-1 mt-5">
                <p className="text-lg font-bold">Drop-Off</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </div>
              <hr className="text-gray-300 my-5"/>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />

      {/* video modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-xl font-bold font-[urbanist] my-4">
            Dodge Challanger Hellcat
          </h1>
          <iframe
            width="100%"
            height="90%"
            src="https://www.youtube.com/embed/hmA6to7Vg-U?si=Wl1FxUEcghembW1T"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Box>
      </Modal>
    </>
  );
};

export default CarDetailedPageComp;
