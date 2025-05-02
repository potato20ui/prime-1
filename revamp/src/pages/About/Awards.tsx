import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Featured from "./Featured";
import awardsImg from "/awards.png";

interface Award {
  img: string;
  title: string;
}

const awardsData: Record<string, Award[]> = {
  2024: [
    { img: "award1.png", title: "Asia Leaders Awards" },
    { img: "award2.png", title: "Golden Globe Annual Awards" },
    { img: "award3.png", title: "Global Excellence Awards" },
    { img: "award1.png", title: "Real Estate Icon Awards" },
  ],
  2023: [
    { img: "award1.png", title: "Asia Leaders Awards" },
    { img: "award2.png", title: "Golden Globe Annual Awards" },
    { img: "award3.png", title: "Global Excellence Awards" },
    { img: "award2.png", title: "Innovator of the Year" },
  ],
};

const Awards: React.FC = () => {
  const [searchParams] = useSearchParams();
  const yearParam = searchParams.get("year");

  const filteredYears = Object.keys(awardsData).sort(
    (a, b) => Number(b) - Number(a)
  );
  const displayYears =
    yearParam && awardsData[yearParam] ? [yearParam] : filteredYears;

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Navbar /> {/* Navbar added here */}
      {/* Header */}
      <div className="relative h-[500px] w-full">
        {/* Background Image */}
        <img
          src={awardsImg}
          alt="Careers Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-PRIMEblue opacity-70"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold uppercase">Awards & Recognition</h1>
          <div className="border items-center justify-center px-[40px] py-[12px] rounded-4xl  mt-2">
            <p className="text-xl">Home / Awards & Recognition </p>
          </div>
        </div>
      </div>
      <Featured />
      {/* 🗓 Awards by Year */}
      {displayYears.map((year) => (
        <section key={year}>
          <h2 className="text-2xl text-gray-800 font-semibold mt-8 ml-8 relative">
            {year}
            <span className="block w-20 h-1 bg-yellow-400 absolute -bottom-2 left-0"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-6">
            {awardsData[year].map((award, idx) => (
              <div
                key={idx}
                className="w-[340px] h-[379px] bg-white rounded-lg shadow-md p-4 text-center"
              >
                {award.img && (
                  <img
                    src={award.img}
                    alt={award.title}
                    className="w-full h-[200px] object-contain"
                  />
                )}
                <p className="mt-4 text-base text-gray-600">{award.title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Awards;
