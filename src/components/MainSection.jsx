import React from "react";
import img1 from "../asset/Dhaval file/photo/MainSectionImg.png";
import CTAbtn from "../components/common/CTAbtn";
import { TypeAnimation } from "react-type-animation";


const MainSection = () => {

 
  return (
    <div id="home" className="bg-white flex xl:flex-row flex-col mt-6  lg:flex-row xl:justify-between lg:justify-between justify-center items-center  lg:min-h-[90vh] xl:min-h-[90vh]  w-11/12 mx-auto ">
      <div className="">
        <div className=" font-josefin mx-6  ">
          <div className="md:w-[500px] lg:w-[500px] xl:w-[500px] sm:w-[450px] w-[270px]">
            <p className="xl:text-[100px] lg:text-[95px] text-[50px] font-semibold text-[#D82782]">
              Breeze
            </p>
            {/* <div className="absolute w-[373px] h-[277px] rounded-full blur-2xl opacity-40  left-6 top-6 bg-gradient-to-r from-start to-end "></div> */}
            <p className="xl:text-[100px] lg:text-[95px] text-[50px]  font-semibold text-[#46BBCD] xl:mt-[-40px] lg:mt-[-40px] mt-[-25px]">
              Enterprise
            </p>

            <p className=" h-[65px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-semibold text-amber-700">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Your Source for Pharmaceutical Raw Materials",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Your Source for Superior Quality",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: "", display: "inline-block" }}
                repeat={Infinity}
              />
            </p>
          </div>
        </div>
        <div className="mx-6 my-8 ">
          <CTAbtn linkto="/products" >Explore</CTAbtn>
        </div>
      </div>
      <div className="">
        <img
          src={img1}
          alt="Home-Section-Img"
          className="lg:w-[600px] xl:w-[600px] "
        />
      </div>
    </div>
  );
};

export default MainSection;
