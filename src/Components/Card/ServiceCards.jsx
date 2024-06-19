import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const ServiceCards = ({ service }) => {
  console.log(service);
  return (
    <div>
      <div className="card
      h-[300px] card-compact border-2 w-96 bg-base-100 shadow-xl">
        <figure className="mt-4 rounded-md">
          <Image
            src={service.img}
            width={350}
            height={350} 
            alt="reaper"
            className="rounded-md"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          <div className="flex justify-between items-center text-primary font-semibold text-xl">
            <h1>
              <span>Price:</span>
              ${service.price}
              <span></span>
            </h1>
            <button>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
