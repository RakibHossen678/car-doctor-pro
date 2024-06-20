import ServiceCards from "../Card/ServiceCards";

const getServices = async () => {
  const res = await fetch("http://localhost:3000/services/api/get-all");
  const services = res.json();
  return services;
};
const Services = async () => {
  const {services}= await getServices();
  // console.log(data.services);
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
        {services?.map((service) => (
          <ServiceCards service={service} key={service._id}></ServiceCards>
        ))}
      </div>
    </div>
  );
};

export default Services;
