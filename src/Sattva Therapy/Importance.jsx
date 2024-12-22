import React from "react";

const Importance = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* first div */}
      <div className="mb12 pt-5 px-4">
        <p className="text-lg text-center text-gray-500 leading-relaxed">According to Acharya Charaka, Chikitsa had been classified on many different basis, out of which Trividhachikitsa has been given the most importance. Under Trividhachikitsa, there are three main types of chikitsa namely, Daivavyapashraya, Yuktivyapashray and Sattvavajaya chikitsa</p>
      </div>

      {/* Second div */}
      <div className="mb-12 pt-5">
        <h1 className="text-3xl text-center text-gray-500 leading-relaxed">IMPORTANCE OF SATTVAVAJAYA IN TODAYS WORLD</h1>
      </div>

      {/* Thrird Div */}
      <div className="flex flex-col md:flex-row justify-around gap-6">
        <div className="bg-[#5e7f0538] rounded-2xl xl:w-full md:w-1/3 flex flex-col items-center pt-5 pb-10 m-4">
          <h3 className="text-2xl font-semibold mb-2">Daivavyapashraya</h3>
          <p className="text-base">Divine</p>
        </div>
        <div className="bg-[#5e7f0538] rounded-2xl xl:w-full md:w-1/3 flex flex-col items-center  pt-5 pb-10  m-4">
          <h3 className="text-2xl font-semibold mb-2">Yuktivyapashray</h3>
          <p className="text-base">Rational</p>
        </div>
        <div className="bg-[#5e7f0538] rounded-2xl xl:w-full md:w-1/3 flex flex-col items-center pt-5 pb-10  m-4">
          <h3 className="text-2xl font-semibold mb-2">Sattvavajaya</h3>
          <p className="text-base">Physcotherapy</p>
        </div>
      </div>
    </div>
  );
};

export default Importance;
