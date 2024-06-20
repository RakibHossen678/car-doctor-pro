import React from "react";

const page = () => {
  return (
    <div className="w-10/12 mx-auto">
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
      <div>
        
      </div>
    </div>
  );
};

export default page;
