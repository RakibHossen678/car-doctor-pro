"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import SocialSignIn from "@/Components/shared/SocialSignIn";

const page = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const resp = await signIn("credentials", {
      email,
      pass,
      redirect: false,
    });
    console.log(resp);
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
          <h1 className="text-2xl font-bold text-center py-6">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block  font-medium">
                Email
              </label>
              <input
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
              Sign in
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
            Don't have an account?
            <Link
              rel="noopener noreferrer"
              href="/signUp"
              className=" text-primary"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
