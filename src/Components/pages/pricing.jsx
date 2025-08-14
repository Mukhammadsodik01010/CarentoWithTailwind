import React from "react";
import SiteTopComp from "./siteTop";
import NavbarComp from "./navbar";
import FooterComp from "./footer";
import PricingHero from "../../assets/mainAssets/Pricinghero.png";
import CheckIcon from "../../assets/mainAssets/check.svg";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const PricingComp = () => {
  const [prices, setPrices] = React.useState({
    Basic: "19",
    Standart: "29",
    Premium: "49",
    Vip: "99",
    monthName: "month",
  });

  const MonthPlans = () => {
    setPrices({
      Basic: "19",
      Standart: "29",
      Premium: "49",
      Vip: "99",
      monthName: "month",
    });
  };

  const YearPlans = () => {
    setPrices({
      Basic: "248",
      Standart: "348",
      Premium: "588",
      Vip: "1.188",
      monthName: "year",
    });
  };

  return (
    <div>
      <SiteTopComp />
      <NavbarComp />
      <div
        className="flex flex-col gap-2 justify-center pl-20  bg-cover bg-center bg-no-repeat h-96 max-w-[1600px] mx-auto my-13 rounded-lg"
        style={{
          backgroundImage: `url(${PricingHero})`,
        }}
      >
        <h1 className="text-5xl font-bold text-white font-[urbanist]">
          Pricing
        </h1>
        <p className="text-xl font-bold text-white font-[urbanist]">
          Choose The Best Plan That’s For You
        </p>
      </div>
      <h1 className="text-4xl font-[urbanist] font-bold text-center">
        Membership Plans
      </h1>
      <div className="flex items-center justify-center gap-5 my-10">
        <button
          onClick={MonthPlans}
          className="bg-green-500 px-5 py-3 rounded-lg text-xl font-[urbanist] cursor-pointer font-light hover:bg-gray-300"
        >
          Monthly Price
        </button>
        <button
          onClick={YearPlans}
          className="bg-gray-300 px-5 py-3 rounded-lg text-xl font-[urbanist] cursor-pointer font-light hover:bg-green-500"
        >
          Annual Price
        </button>
      </div>
      <div className="Container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center  gap-10 my-20">
          <div className="max-w-70 h-130 border-gray-300 border-2 flex flex-col justify-center gap-3 rounded-lg p-5">
            <h2 className="text-lg font-semibold font-[urbanist]">Basic</h2>
            <h1 className="text-4xl font-bold font-[urbanist]">
              ${prices.Basic}{" "}
              <span className="text-gray-500 text-xl">
                / {prices.monthName}
              </span>
            </h1>
            <p className="text-sm font-light font-[urbanist]">
              For most businesses that want to optimize web queries
            </p>
            <hr className="text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Access to standard vehicles
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                24/7 customer support
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Basic insurance coverage
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Online booking
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Standard roadside assistance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                One free vehicle per month
              </p>
            </div>
            <button className="text-lg font-[urbanist] font-bold bg-green-500 py-2 mt-4 rounded-lg cursor-pointer hover:bg-green-600">
              Get Started Now{" "}
              <ArrowForwardOutlinedIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <div className="max-w-70 h-130  border-gray-300 border-2 flex flex-col justify-center gap-3 rounded-lg p-5">
            <h2 className="text-lg font-semibold font-[urbanist]">Standard</h2>
            <h1 className="text-4xl font-bold font-[urbanist]">
              ${prices.Standart}{" "}
              <span className="text-gray-500 text-xl">
                / {prices.monthName}
              </span>
            </h1>
            <p className="text-sm font-light font-[urbanist]">
              For most businesses that want to optimize web queries
            </p>
            <hr className="text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                All Basic Plan features
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Access to premium vehicles
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Flexible rental terms
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">GPS included</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Free additional driver
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Unlimited vehicle swaps
              </p>
            </div>
            <button className="text-lg font-[urbanist] font-bold bg-green-500 py-2 mt-4 rounded-lg cursor-pointer hover:bg-green-600">
              Get Started Now{" "}
              <ArrowForwardOutlinedIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <div className="max-w-70 h-130  border-gray-300 border-2 flex flex-col justify-center gap-3 rounded-lg p-5">
            <h2 className="text-lg font-semibold font-[urbanist]">Premium</h2>
            <h1 className="text-4xl font-bold font-[urbanist]">
              ${prices.Premium}{" "}
              <span className="text-gray-500 text-xl">
                / {prices.monthName}
              </span>
            </h1>
            <p className="text-sm font-light font-[urbanist]">
              For most businesses that want to optimize web queries
            </p>
            <hr className="text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                All Standard Plan features
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Luxury vehicle options
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Complimentary upgrades
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Enhanced insurance coverage
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Free airport pickup, drop-off
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Exclusive deals and offers
              </p>
            </div>
            <button className="text-lg font-[urbanist] font-bold bg-green-500 py-2 mt-4 rounded-lg cursor-pointer hover:bg-green-600">
              Get Started Now{" "}
              <ArrowForwardOutlinedIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <div className="max-w-70 h-130  border-gray-300 border-2 flex flex-col justify-center gap-3 rounded-lg p-5">
            <h2 className="text-lg font-semibold font-[urbanist]">VIP</h2>
            <h1 className="text-4xl font-bold font-[urbanist]">
              ${prices.Vip}
              <span className="text-gray-500 text-xl">
                {" "}
                / {prices.monthName}
              </span>
            </h1>
            <p className="text-sm font-light font-[urbanist]">
              For most businesses that want to optimize web queries
            </p>
            <hr className="text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                All Premium Plan features
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                VIP transfer service
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Personal concierge
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Unlimited mileage
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                Luxury vehicle upgrades
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#D8F4DB]">
                <img src={CheckIcon} alt="CheckIcon" />
              </div>
              <p className="text-sm font-[urbanist] font-light">
                24/7 account manager
              </p>
            </div>
            <button className="text-lg font-[urbanist] font-bold bg-green-500 py-2 mt-4 rounded-lg cursor-pointer hover:bg-green-600">
              Get Started Now{" "}
              <ArrowForwardOutlinedIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </button>
          </div>
        </div>
      </div>
      <hr className="text-gray-400" />
      <div className="Container">
        <h1 className="text-4xl font-[urbanist] font-bold mt-20 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-lg font-[urbanist] font-medium text-gray-600 text-center mt-2">
          Any questions? We would be happy to help you.
        </p>
        <div className="w-full flex justify-between gap-10 py-15">
          <div>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    {" "}
                    How do I make a reservation on your website?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    What documents do I need for my trip, and how do I obtain
                    them?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    In the event that I need to modify or cancel my reservation,
                    what are the policies in place?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    Can you specify the types of credit/debit cards, digital
                    wallets, or other online payment methods accepted?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    What payment methods do you accept?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    Can I modify or cancel my reservation?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    Do you offer discounts for group bookings?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    How do I search for hotels on your website?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    In the event that I need to modify or cancel my reservation,
                    what are the policies in place?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    Is breakfast included in the room rate?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    Are pets allowed in the hotels?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    How do I contact customer support if I have a question or
                    issue?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  <p className="text-xl font-[urbanist] font-bold">
                    Are there any loyalty programs or rewards for frequent
                    guests?
                  </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-[urbanist] font-light text-gray-500">
                  Provide a step-by-step guide on how users can browse and book
                  travel services on your platform. Include information on
                  searching for destinations, selecting dates, choosing
                  accommodation, and completing the booking process. Mention any
                  special features or tools that can help users find the best
                  deals.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 my-10">
            <button className="w-50 flex items-center justify-center gap-1 bg-gray-300 px-5 py-3 rounded-lg text-xl font-[urbanist] cursor-pointer font-light hover:bg-green-500">
              Contact Us
              <ArrowForwardOutlinedIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </button>
            <button className="w-50 flex items-center justify-center gap-1 bg-green-500 px-5 py-3 rounded-lg text-xl font-[urbanist] cursor-pointer font-light hover:bg-gray-300">
              Submit a Ticket
              <ArrowForwardOutlinedIcon
                fontSize="small"
                style={{ color: "black" }}
              />
            </button>
          </div>
        </div>
      </div>
      <hr className="text-gray-400" />
      <div>
        <h1 className="text-center my-10 text-red-500">
          Place for news carusel
        </h1>
      </div>
      <FooterComp />
    </div>
  );
};

export default PricingComp;
