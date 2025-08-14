import React from "react";
import AgentOne from "../../assets/agentsAssets/agentOne.jpg";
import AgentTwo from "../../assets/agentsAssets/agentTwo.jpg";
import AgentThree from "../../assets/agentsAssets/agentThree.jpg";
import AgentFour from "../../assets/agentsAssets/agentFour.jpg";
import AgentFive from "../../assets/agentsAssets/agentFive.webp";
import AgentSix from "../../assets/agentsAssets/agentSix.webp";
import AgentSeven from "../../assets/agentsAssets/agentSeven.jpg";
import AgentEight from "../../assets/agentsAssets/agentEight.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

const AwesomeTeamComp = () => {
  const navigate = useNavigate();

  const AgentNavBtn = () => {
    navigate("agents-detailed-page");
  };

  return (
    <div className="Container">
      <div className="py-20 font-[Urbanist]">
        <p className="text-lg font-light text-gray-400 text-center">
          Awesome Teams
        </p>
        <h1 className="text-5xl font-bold text-center mt-3">Meet Our Agents</h1>
        <div className="my-10 relative grid gap-5 grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className=" relative max-w-[400px]  h-80">
            <img src={AgentOne} alt="AgentOne" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38 sm:top-36 lg:top-38 xl:top-35">
              <h1 className="text-xl font-bold">Cody Fisher</h1>
              <p className="text-sm font-light text-gray-400">
                CFO (Chief Financial Officer)
              </p>

              <hr className="text-gray-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <InstagramIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <XIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <YouTubeIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 cursor-pointer  hover:bg-green-600">
                  <ArrowOutwardIcon
                    onClick={AgentNavBtn}
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px]  h-80 ">
            <img src={AgentTwo} alt="AgentTwo" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38 sm:top-36 lg:top-38 xl:top-35">
              <h1 className="text-xl font-bold">Emily Johnson</h1>
              <p className="text-sm font-light text-gray-400">
                CFO (Chief Financial Officer)
              </p>

              <hr className="text-gray-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <InstagramIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <XIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <YouTubeIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 cursor-pointer  hover:bg-green-600">
                  <ArrowOutwardIcon
                    onClick={AgentNavBtn}
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px]  h-80 ">
            <img
              src={AgentThree}
              alt="AgentThree"
              className="z-10 rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38 sm:top-36 lg:top-38 xl:top-35">
              <h1 className="text-xl font-bold">Michael Anderson</h1>
              <p className="text-sm font-light text-gray-400">
                CFO (Chief Financial Officer)
              </p>

              <hr className="text-gray-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <InstagramIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <XIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <YouTubeIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 cursor-pointer  hover:bg-green-600">
                  <ArrowOutwardIcon
                    onClick={AgentNavBtn}
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px]  h-80 ">
            <img
              src={AgentFour}
              alt="AgentFour"
              className="z-10 rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38 sm:top-36 lg:top-38 xl:top-35">
              <h1 className="text-xl font-bold">David Thompson</h1>
              <p className="text-sm font-light text-gray-400">
                CFO (Chief Financial Officer)
              </p>

              <hr className="text-gray-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <InstagramIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <XIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <YouTubeIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 cursor-pointer  hover:bg-green-600">
                  <ArrowOutwardIcon
                    onClick={AgentNavBtn}
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px]  h-80 ">
            <img
              src={AgentFive}
              alt="AgentFive"
              className="z-10 rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38 sm:top-36 lg:top-38 xl:top-35">
              <h1 className="text-xl font-bold">Sarah Williams</h1>
              <p className="text-sm font-light text-gray-400">
                CFO (Chief Financial Officer)
              </p>

              <hr className="text-gray-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <InstagramIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <XIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <YouTubeIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 cursor-pointer  hover:bg-green-600">
                  <ArrowOutwardIcon
                    onClick={AgentNavBtn}
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px]  h-80 ">
            <img src={AgentSix} alt="AgentSix" className="z-10 rounded-t-xl" />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38 sm:top-36 lg:top-38 xl:top-35">
              <h1 className="text-xl font-bold">Jessica Brown</h1>
              <p className="text-sm font-light text-gray-400">
                CFO (Chief Financial Officer)
              </p>

              <hr className="text-gray-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <InstagramIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <XIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <YouTubeIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 cursor-pointer  hover:bg-green-600">
                  <ArrowOutwardIcon
                    onClick={AgentNavBtn}
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px]  h-80 ">
            <img
              src={AgentSeven}
              alt="AgentSeven"
              className="z-10 rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38 sm:top-36 lg:top-38 xl:top-35">
              <h1 className="text-xl font-bold">Robert Miller</h1>
              <p className="text-sm font-light text-gray-400">
                CFO (Chief Financial Officer)
              </p>

              <hr className="text-gray-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <InstagramIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <XIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <YouTubeIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 cursor-pointer  hover:bg-green-600">
                  <ArrowOutwardIcon
                    onClick={AgentNavBtn}
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-[400px]  h-80 ">
            <img
              src={AgentEight}
              alt="AgentEight"
              className="z-10 rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-4 rounded-xl border-gray-300 border  w-full bg-white absolute top-38 sm:top-36 lg:top-38 xl:top-35">
              <h1 className="text-xl font-bold">Olivia Davis Ask ChatGPT</h1>
              <p className="text-sm font-light text-gray-400">
                CFO (Chief Financial Officer)
              </p>

              <hr className="text-gray-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <InstagramIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <XIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                  <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10">
                    <YouTubeIcon fontSize="medium" style={{ color: "black" }} />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 cursor-pointer  hover:bg-green-600">
                  <ArrowOutwardIcon
                    onClick={AgentNavBtn}
                    fontSize="medium"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeTeamComp;
