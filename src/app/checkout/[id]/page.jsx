"use client";
import { getServicesDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const CheckoutPage = ({ params }) => {
  const { data } = useSession();
  console.log(data);
  const [service, setService] = useState({});
  const loadService = async () => {
    const details = await getServicesDetails(params.id);
    setService(details.service);
  };
  const { _id, title, description, img, price, facility } = service || {};
  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newBooking = {
      email: data?.user?.email,
      name: data?.user?.name,
      address: form.address.value,
      phone: form.phone.value,
      ...service,
    };
    console.log(newBooking);
    const resp = await fetch("http://localhost:3000/checkout/api/new-booking", {
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(resp);
  };
  useEffect(() => {
    loadService();
  }, [params.id]);
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
      <div className="my-20">
        <section class="max-w-4xl p-16 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800">
          <form onSubmit={handleBooking}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <input
                  defaultValue={data?.user?.name}
                  placeholder="First Name"
                  id="name"
                  type="text"
                  name="name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <input
                  defaultValue={new Date().toISOString().split("T")[0]}
                  placeholder="Last Name"
                  id="name"
                  type="date"
                  name="date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <input
                  defaultValue={price}
                  placeholder="Enter Price"
                  id="num"
                  type="number"
                  name="price"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <input
                  placeholder="Your Phone"
                  id="phone"
                  type="text"
                  name="phone"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <input
                  defaultValue={data?.user?.email}
                  placeholder=" Email Address"
                  id="emailAddress"
                  type="email"
                  name="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <input
                  placeholder=" Enter Present Address"
                  type="text"
                  name="address"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            {/* <div>
              <textarea
                placeholder="Your Message"
                id="message"
                name="message"
                rows="4"
                cols="82"
                className="rounded-lg px-4 py-2  mt-5"
              ></textarea>
            </div> */}
            <div className="mt-6">
              <button
                type="submit"
                className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Order Confirm
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;
