import ServiceCard from "./common/ServiceCard";

export const ServiceSection = () => {
  return (
    <div
      id="about"
      className="container grid sm:grid-cols-3 gap-8 py-8 sm:py-10 lg:py-12 "
    >
      <ServiceCard
        image="conn.png"
        heading="Product Design"
        description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
      />
      <ServiceCard
        image="ppp.png"
        heading="Visual Design"
        description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
      />{" "}
      <ServiceCard
        image="conn.png"
        heading="Art Direction"
        description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
      />
    </div>
  );
};
