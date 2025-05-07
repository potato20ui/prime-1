import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Featured from "./Featured";
import awardsbg from "@/assets/awardsbg.png";

interface Award {
  img: string;
  title: string;
  date: string;
}

const awardsData: Record<string, Award[]> = {
  2024: [
    {
      img: "/asia leaders logo.png",
      title: "Asia Leaders Awards",
      date: "November 2019",
    },
    {
      img: "/golden globe logo.png",
      title: "Golden Globe Annual Awards",
      date: "November 2019",
    },
    {
      img: "/global excellence logo.png",
      title: "Global Excellence Awards",
      date: "November 2022",
    },
    {
      img: "/asia leaders logo.png",
      title: "Asia Leaders Awards",
      date: "November 2019",
    },
  ],
  2023: [
    {
      img: "/golden globe logo.png",
      title: "Golden Globe Annual Awards",
      date: "November 2019",
    },
    {
      img: "/global excellence logo.png",
      title: "Global Excellence Awards",
      date: "November 2019",
    },
    {
      img: "/asia leaders logo.png",
      title: "Asia Leaders Awards",
      date: "November 2019",
    },
    {
      img: "/golden globe logo.png",
      title: "Golden Globe Annual Awards",
      date: "November 2019",
    },
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
      
      <header className="bg-blue-900 text-white py-0 text-center relative">
        <div
          className="w-full h-[500px] bg-cover bg-center opacity-60"
          style={{
            backgroundImage: 'url("/awards.png")', // Path to your header background image
            backgroundSize: 'cover',  // Maintain aspect ratio
            backgroundPosition: 'center center'  // Center the image within the header
          }}
        ></div>
        {/* Text positioned on top of the image */}
        <h1 className="absolute inset-0 text-4xl font-bold z-10 text-center flex justify-center items-center text-white">
          AWARDS & RECOGNITION
        </h1>
      </header>

      {/* 🌟 Featured Awards */}
      <section className="mt-0"> {/* Removed extra margin-top */}
        <h2 className="text-2xl text-gray-800 font-semibold mt-8 ml-8 relative">
          Featured Awards
          <span className="block w-32 h-1 bg-yellow-400 absolute -bottom-2 left-0"></span>
        </h2>

        <div className="relative px-8 py-6">
          {/* Left Button */}
          <button
            onClick={() => scrollFeatured("left")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 z-10 text-2xl"
          >
            &lt;
          </button>

          {/* Scrollable Awards */}
          <div
            id="featuredScroll"
            className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
          >
            {featuredAwards.map((award, idx) => (
              <div
                key={idx}
                className="inline-block w-[340px] h-[379px] bg-white rounded-lg shadow-md mx-2 p-4 text-center"
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

          {/* Right Button */}
          <button
            onClick={() => scrollFeatured("right")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 z-10 text-2xl"
          >
            &gt;
          </button>
        </div>
      </section>
      {/* Featured Awards Section */}
      <Featured />
      {/* 🗓 Awards by Year */}
      {displayYears.map((year) => (
        <section key={year}>
          <h2 className="text-2xl text-gray-800 font-semibold mt-8 ml-8 relative">
            {year}
            <span className="block w-full h-1 bg-PRIMEgray absolute -bottom-2 left-0"></span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-6">
            {awardsData[year].map((award, idx) => (
              <div
                key={idx}
                className="w-[340px] h-[379px] bg-white rounded-lg shadow-md p-4 text-center"
              >
                <div className="w-[350px] h-[320px] flex items-center border-[0.5px] border-PRIMElightgray px-5">
                  {award.img && (
                    <img
                      src={award.img}
                      alt={award.title}
                      className="w-full h-[200px] object-contain"
                    />
                  )}
                </div>

                <div className="w-[350px] h-[130px] flex flex-col items-center justify-center  border-[0.5px] border-t-0 border-PRIMElightgray">
                  <p className="text-base">{award.title}</p>
                  <span className=" text-PRIMEgray">{award.date}</span>
                </div>
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
