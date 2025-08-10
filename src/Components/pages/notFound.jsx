import React from 'react'
import SiteTopComp from './siteTop'
import NavbarComp from './navbar'
import FooterComp from './footer'
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import NotFoundImg from '../../assets/mainAssets/NotFoundCar.svg'
import { useNavigate } from 'react-router-dom';

const NotFoundComp = () => {
    const navigate = useNavigate()
    
    const NotFoundNav = () => {
        navigate("/")
    }

  return (
    <div>
      <SiteTopComp />
      <NavbarComp />
      <div className="w-full flex flex-col items-center gap-5 py-30">
        <h1 className="text-9xl font-[urbanist] font-extrabold">404</h1>
        <h2 className="text-5xl font-[urbanist] font-bold text-center">Page Not Found</h2>
        <p className="text-xl text-gray-500 font-light font-[urbanist] text-center">
          Page not available. Please search again or navigate using the menu.
        </p>
        <button
          onClick={NotFoundNav}
          className="bg-green-500 px-10 py-5 rounded-md flex items-center gap-2 text-xl font-bold font-[urbanist] cursor-pointer hover:bg-green-600"
        >
          <ArrowBackOutlinedIcon fontSize="medium" style={{ color: "black" }} />
          Back to Home
        </button>
        <img src={NotFoundImg} alt="NotFoundImg" />
      </div>
      <FooterComp />
    </div>
  );
}

export default NotFoundComp