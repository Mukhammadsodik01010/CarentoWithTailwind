import React, { Component } from "react";
import Slider from "react-slick";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import AvatarOne from "../../assets/commentAssets/avatarOne.jpeg";
import AvatarTwo from "../../assets/commentAssets/avatarTwo.jpeg";
import AvatarThree from "../../assets/commentAssets/avatarThree.jpeg";
import AvatarFour from "../../assets/commentAssets/avatarFour.jpg";
import AvatarFive from "../../assets/commentAssets/avatarFive.jpeg";
import AvatarSix from "../../assets/commentAssets/avatarSix.avif";
import AvatarSeven from "../../assets/commentAssets/avatarSeven.jpeg";
import AvatarEight from "../../assets/commentAssets/avatarEight.jpg";



import Rating from "@mui/material/Rating";

const CommentsComp = () => {
  var settings = {
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1690,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1237,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 flex flex-col gap-4 font-[urbanist]">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-2 w-70 py-2 rounded-4xl bg-gray-200 border border-gray-300">
          <AvatarGroup spacing="small">
            <Avatar alt="Remy Sharp" src={AvatarOne} />
            <Avatar alt="Travis Howard" src={AvatarTwo} />
            <Avatar alt="Cindy Baker" src={AvatarFour} />
          </AvatarGroup>
          <p className="text-lg font-bold font-[urbanist]">Testimonials</p>
        </div>
      </div>
      <h1 className="text-4xl font-extrabold text-center font-[urbanist]">
        What they say about us?
      </h1>
      <div className="my-10 relative">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="border border-gray-300 rounded-xl p-10 flex flex-col gap-3 justify-center  mx-10 h-130 sm:h-80 ">
                <h1 className="text-2xl font-bold">The best booking system</h1>
                <p className="text-lg font-light text-gray-400">
                  Embarking on our dream vacation was made a breeze through the
                  seamless coordination of tours and hotels using this
                  exceptional booking platform.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-5">
                  <div className="flex items-end gap-3">
                    <Avatar
                      alt="AvatarOne"
                      src={AvatarOne}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Sophia Moore</h4>
                      <p className="text-sm font-light">New York</p>
                    </div>
                  </div>
                  <Rating name="simple-controlled" value={4} />
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-300 rounded-xl p-10 flex flex-col gap-3 justify-center  mx-10 h-130 sm:h-80">
                <h1 className="text-2xl font-bold">
                  Mobile-Friendly and Fast!
                </h1>
                <p className="text-lg font-light text-gray-400">
                  Embarking on our dream vacation was made a breeze through the
                  seamless coordination of tours and hotels using this
                  exceptional booking platform.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-5">
                  <div className="flex items-end gap-3">
                    <Avatar
                      alt="AvatarTwo"
                      src={AvatarTwo}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Ethan Brooks</h4>
                      <p className="text-sm font-light">Paris</p>
                    </div>
                  </div>
                  <Rating name="simple-controlled" value={3} />
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-300 rounded-xl p-10 flex flex-col gap-3 justify-center  mx-10 h-130 sm:h-80">
                <h1 className="text-2xl font-bold">
                  Excellent Customer Service
                </h1>
                <p className="text-lg font-light text-gray-400">
                  The booking process was smooth and enjoyable, thanks to quick
                  responses and a helpful team.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-5">
                  <div className="flex items-end gap-3">
                    <Avatar
                      alt="AvatarThree"
                      src={AvatarThree}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Olivia Parker</h4>
                      <p className="text-sm font-light">New York</p>
                    </div>
                  </div>
                  <Rating name="simple-controlled" value={4} />
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-300 rounded-xl p-10 flex flex-col gap-3 justify-center  mx-10 h-130 sm:h-80">
                <h1 className="text-2xl font-bold">Hassle-Free Experience</h1>
                <p className="text-lg font-light text-gray-400">
                  Every step was clear, from selecting packages to final
                  confirmation — no confusion at all
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-5">
                  <div className="flex items-end gap-3">
                    <Avatar
                      alt="AvatarFour"
                      src={AvatarFour}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Liam Hayes</h4>
                      <p className="text-sm font-light">London</p>
                    </div>
                  </div>
                  <Rating name="simple-controlled" value={2} />
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-300 rounded-xl p-10 flex flex-col gap-3 justify-center  mx-10 h-130 sm:h-80">
                <h1 className="text-2xl font-bold">
                  Highly Flexible and Customizable
                </h1>
                <p className="text-lg font-light text-gray-400">
                  We could tailor our trip exactly how we wanted, with no
                  restrictions and plenty of options
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-5">
                  <div className="flex items-end gap-3">
                    <Avatar
                      alt="AvatarFive"
                      src={AvatarFive}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Grace Mitchell</h4>
                      <p className="text-sm font-light">Sydney</p>
                    </div>
                  </div>
                  <Rating name="simple-controlled" value={4} />
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-300 rounded-xl p-10 flex flex-col gap-3 justify-center  mx-10 h-130 sm:h-80">
                <h1 className="text-2xl font-bold">Great Value for Money</h1>
                <p className="text-lg font-light text-gray-400">
                  The prices were fair, and the quality of service far exceeded
                  our expectations.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-5">
                  <div className="flex items-end gap-3">
                    <Avatar
                      alt="AvatarSix"
                      src={AvatarSix}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Lucas Bennett</h4>
                      <p className="text-sm font-light">Toronto</p>
                    </div>
                  </div>
                  <Rating name="simple-controlled" value={3} />
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-300 rounded-xl p-10 flex flex-col gap-3 justify-center  mx-10 h-130 sm:h-80">
                <h1 className="text-2xl font-bold">
                  Smooth from Start to Finish
                </h1>
                <p className="text-lg font-light text-gray-400">
                  Booking, payment, and confirmation all happened in minutes —
                  couldn’t be easier
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-5">
                  <div className="flex items-end gap-3">
                    <Avatar
                      alt="AvatarSeven"
                      src={AvatarSeven}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Emily Carter</h4>
                      <p className="text-sm font-light">Dubai</p>
                    </div>
                  </div>
                  <Rating name="simple-controlled" value={4} />
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-300 rounded-xl p-10 flex flex-col gap-3 justify-center  mx-10 h-130 sm:h-80">
                <h1 className="text-2xl font-bold">Stress-Free Planning</h1>
                <p className="text-lg font-light text-gray-400">
                  All the details were handled so well that we could just relax
                  and enjoy
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-5">
                  <div className="flex items-end gap-3">
                    <Avatar
                      alt="AvatarEight"
                      src={AvatarEight}
                      sx={{ width: 56, height: 56 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Sophia Adams</h4>
                      <p className="text-sm font-light">Rome</p>
                    </div>
                  </div>
                  <Rating name="simple-controlled" value={2} />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="hidden xl:flex w-[20%] bg-gradient-to-r from-white to-transparent h-100 absolute -top-5 left-0"></div>
        <div className="hidden xl:flex w-[20%] bg-gradient-to-l from-white to-transparent h-100 absolute -top-5 right-0"></div>
      </div>
    </div>
  );
};

export default CommentsComp;

