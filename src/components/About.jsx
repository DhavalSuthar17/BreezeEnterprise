import React from "react";
import founder from "../asset/Dhaval file/photo/download.jpeg";
import CTAbtn from "../components/common/CTAbtn";

const About = () => {
  return (
    <section id="about">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
        {/* foudning story wala div */}
        <div className="flex flex-col items-center gap-10 lg:flex-row justify-between ">
          {/* foudning story right box */}
          <div>
            <img
              className=" w-[500px] rounded-md shadow-[0_0_20px_0] shadow-[#FC6767]"
              src={founder}
              alt="Founding Story Img"
            />
          </div>
          {/* founding story left box */}
          <div className="my-24 flex lg:w-[50%] flex-col gap-10">
            <h1 className="bg-gradient-to-br from-[#b43aa2] via-[#066dd4] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
              About Us
            </h1>

            <p className="text-base font-medium  lg:w-[95%]">
              <span className="font-bold">Brijesh N Prajapati </span>- is a
              leading supplier of pharmaceutical raw materials in India. We are
              a trusted partner to the industry for over 13 years. Our products
              are used in the manufacture of a wide range of pharmaceutical
              products including tablets, capsules, injectables, and more. We
              are committed to providing our customers with the highest quality
              products and services at competitive prices.
            </p>
            <p className="text-base font-medium  lg:w-[95%]">
              <div>
                Customer Support:-{" "}
                <span className=" font-semibold  ">
                  breezeenterprise@gmail.com
                </span>
              </div>
              <div>
                <span>
                  Contact Us:-{" "}
                  <span className=" font-semibold  ">9724888822</span>
                </span>
              </div>
            </p>

            <div>
              <button
                onClick={() => {
                  window.location.href = "tel:+91 8460492019";
                }}
              >
                <CTAbtn linkto={""}>Call Us</CTAbtn>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
