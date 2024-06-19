import ServiceCards from "../Card/ServiceCards";
import { services } from "../lib/services";

const Services = () => {
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="pt-20 text-center">
        <h1 className="text-primary font-semibold py-3">Our Services</h1>
        <h2 className="text-2xl font-semibold pb-3">Our Service Area</h2>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="my-20 grid grid-cols-3 gap-9">
        {services.map((service) => (
          <ServiceCards service={service} key={service._id}></ServiceCards>
        ))}
      </div>
    </div>
  );
};

export default Services;
