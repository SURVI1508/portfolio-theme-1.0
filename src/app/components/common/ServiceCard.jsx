const ServiceCard = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img
        className="w-[25%] sm:w-[40%]  xl:w-[30%] object-contain"
        src={image}
        alt=""
      />
      <h1 className="text-[20px] sm:text-[25px] lg:text-[35px] font-[600] mt-5">
        {heading}
      </h1>
      <span className=" text-[12px] sm:text-[14px] lg:text-[17px] font-[400] text-center">
        {description}
      </span>
    </div>
  );
};

export default ServiceCard;
