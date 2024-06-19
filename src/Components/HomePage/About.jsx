import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-10/12 items-center my-24 mx-auto flex">
      <div className="w-1/2 relative">
        <Image
          alt="eng"
          src={"/images/about_us/person.jpg"}
          width={380}
          height={450}
          className="rounded-md"
        />
        <Image
          alt="equip"
          src={"/images/about_us/parts.jpg"}
          width={300}
          height={300}
          className="absolute border-[6px] top-1/2 left-1/2 rounded-md border-white"
        />
      </div>
      <div className="w-1/2">
        <p>About Us</p>
        <h1>We are qualified & of experience in this field</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button>Get More Info</button>
      </div>
    </div>
  );
};

export default About;
