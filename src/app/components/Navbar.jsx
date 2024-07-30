import Link from "next/link";
import React from "react";
export const Navbar = () => {
  return (
    <div className="w-full h-[70px] flex justify-between items-center container sm:py-[3rem]">
      <div>
        <h1 className="text-[20px] font-[600]">Logo</h1>
      </div>
      <div className="block sm:hidden">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </span>
      </div>
      <div className=" hidden sm:flex gap-10">
        <Link className="text-[#2D2D2D] text-[1.3rem] font-[400]" href="/about">
          About
        </Link>
        <Link className="text-[#2D2D2D] text-[1.3rem] font-[400]" href="/about">
          Work
        </Link>
        <Link className="text-[#2D2D2D] text-[1.3rem] font-[400]" href="/about">
          Contact
        </Link>
      </div>
    </div>
  );
};
