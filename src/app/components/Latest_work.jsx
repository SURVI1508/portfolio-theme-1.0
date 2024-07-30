import React from "react";
import { Card } from "./common/Card";
import { Heading } from "./common/Heading";

const Latest_work = () => {
  return (
    <div
      id="work"
      className="max-w-full overflow-x-hidden py-6 flex flex-col px-4 sm:px-10"
    >
      <Heading heading="Latest work" />

      <div className="w-full grid  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Latest_work;
