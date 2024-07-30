import React from "react";

export const Card = () => {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className="h-[300px]  overflow-hidden ">
        <img
          src="Image (1).png"
          alt="product-image"
          className="w-full h-full object-cover hover:scale-125 transition-all duration-500 hover:saturate-0"
        />
      </div>
      <div className=" flex flex-col gap-1 ">
        <h1 className="text-[20px] font-800 ">Project title</h1>
        <h1 className="text-[16px] font-200 text-[#2D2D2D] ">
          UI, Art drection
        </h1>
      </div>
    </div>
  );
};
