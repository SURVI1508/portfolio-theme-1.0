import React from "react";

export const Hero = () => {
  return (
    <div>
      <div className="grid grid-col-2 gap-0  lg:grid-cols-2 sm:py-8 container">
        <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-5 sm:py-[3rem]">
          <span className="text-[#2D2D2D] font-[600] text-[15px] sm:text-[20px]">
            Branding | Image making{" "}
          </span>
          <h1 className="text-[#2D2D2D] font-[600] text-[35px] sm:text-[68px]">
            Visual Designer
          </h1>
          <p className="text-[#2D2D2D] text-center sm:text-start  font-[400] text-[13px] sm:text-[17px]">
            This is a template Figma file, turned into code using Anima. <br />
            Learn more at AnimaApp.com
          </p>
          <div className="py-5 sm:py-[1rem]">
            <button className="w-[180px] sm:w-[250px] h-[50px] sm:h-[80px] font-[600] text-[15px] sm:text-[20px] text-white bg-[#2D2D2D]">
              Contact
            </button>
          </div>
        </div>
        <div className=" sm:h-[450px] w-full flex sm:hidden lg:flex justify-center ">
          <img className="h-full w-auto" src="HeaderImage 1.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
