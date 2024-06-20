import { getServicesDetails } from "@/services/getServices";

const page = async ({ params }) => {
  const details = await getServicesDetails(params.id);
  const { service } = details;
  const { title, description, img, price, facility } = service;
  return (
    <div className="w-10/12 mx-auto ">
      <div
        className="hero my-4 h-[250px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(/images/checkout/checkout.png)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-start text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Service Details</h1>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-3xl font-semibold py-3">{title}</h1>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="w-full my-20 flex gap-3">
        <div className="w-[75%] grid grid-cols-2 gap-7">
          {facility.map((item, idx) => (
            <div
              key={idx}
              className="max-w-md bg-gray-200 p-9 rounded-md border-t-4 border-t-primary"
            >
              <h1 className="text-2xl font-semibold pb-3">{item.name}</h1>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
        <div className="w-[25%] flex justify-center items-center bg-gray-200 h-[200px] rounded-lg">
          <div className="text-center ">
            <h1 className="text-xl font-semibold py-5">
              <span>Price</span>
              <span>${price}</span>
            </h1>
            <button className="bg-primary text-white px-5 py-2 rounded-md">
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
