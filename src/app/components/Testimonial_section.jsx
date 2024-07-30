import React from "react";
import { Testimonial_card } from "./common/Testimonial_card";
import { Heading } from "./common/Heading";

const Testimonial_section = () => {
  return (
    <div className="max-w-full overflow-x-hidden py-6 flex flex-col gap-6  sm:gap-5 px-4 sm:px-10">
      <Heading heading="Testimonial" />

      <div className="w-full grid-rows grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        <Testimonial_card />
        <Testimonial_card />
        <Testimonial_card />
        <Testimonial_card />
        <Testimonial_card />
        <Testimonial_card />
        <Testimonial_card />
        <Testimonial_card />
      </div>
    </div>
  );
};

export default Testimonial_section;
