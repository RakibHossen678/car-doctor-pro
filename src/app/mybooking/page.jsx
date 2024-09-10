"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const page = () => {
  const session = useSession();
  const [booking, setBooking] = useState([]);
  const loadData = async () => {
    const resp = await fetch(
      `http://localhost:3000/mybooking/api/${session?.data?.user?.email}`
    );
    const data = await resp.json();
    setBooking(data.myBooking);
    return data.myBooking;
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(booking)
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
      <div className="my-20">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
