import React from "react";
import Button from "../ui/Button";

const Intro = () => {
  return (
    <section className="relative w-full max-w-[1800px] mx-auto">
      <img src="/images/home/element.png" className=" top-1 left-1 absolute" />
      <div className="container  mx-auto  flex items-center justify-between  min-h-[78vh] pt-10">
        <dev className="max-w-screen-sm  ">
          <h1 className="text-5xl font-semibold text-lg py-2">
            Virtual healthcare
          </h1>
          <h1 className="text-5xl font-semibold text-lg py-2">for you</h1>
          <p className="text-gray-600 py-4 w-full max-w-[400px]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <Button className="my-10 font-bold py-4">Consult today</Button>
        </dev>
        <dev>
          <img src="/images/home/intro.png" />
        </dev>
      </div>
    </section>
  );
};

export default Intro;
