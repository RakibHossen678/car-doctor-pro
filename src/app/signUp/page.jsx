"use client";
import SocialSignIn from "@/Components/shared/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const handleSingUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      name: form.name.value,
      email: form.email.value,
      pass: form.password.value,
    };
    const resp = await fetch("http://localhost:3000/signUp/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(resp);
    if (resp.status === 200) {
      form.reset();
    }
  };
  return (
    <div className="w-10/12 mx-auto my-12 flex items-center">
      <div className="w-1/2">
        <Image
          alt="login"
          width={350}
          height={400}
          src="/images/login/login.svg"
        ></Image>
      </div>
      <div className="w-1/2">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  border-2">
          <h1 className="text-2xl font-bold text-center py-6">Sign Up</h1>
          <form onSubmit={handleSingUp} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block  font-medium">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border-gray-700 border-2 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block  font-medium">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border-gray-700 border-2 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="w-full px-4 py-3 rounded-md border-gray-700 border-2 focus:border-violet-400"
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md bg-primary text-white"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <SocialSignIn></SocialSignIn>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              href="/login"
              className=" text-primary"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
