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
    <div className="bg-[var(--color-PRIMElightgray)] min-h-screen">
      <Navbar /> {/* Navbar added here */}
     {/* Header Section */}
<section className="relative mb-10">
  <div
    className="w-full h-[500px] rounded-lg overflow-hidden relative group"
    style={{
      backgroundImage: `url("/awards.png")`, // Background image for the banner
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-PRIMEblue opacity-50"></div> {/* Updated to match Careers color */}

    {/* Centered Title and Breadcrumb with animation */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
    >
      <h1 className="text-[36pt] sm:text-[48pt] font-bold">AWARDS & RECOGNITION</h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="inline-flex items-center px-[40px] py-[12px] border-2 border-white rounded-full text-lg font-semibold mt-4"
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold">Awards</span>
      </motion.div>
    </motion.div>
  </div>
</section>

      <Featured />

      {/* 🗓 Awards by Year */}
      {displayYears.map((year) => (
        <section key={year}>
          <h2 className="text-2xl text-gray-800 font-semibold mt-8 ml-8 relative">
            {year}
            <span className="block w-20 h-1 bg-yellow-400 absolute -bottom-2 left-0"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-10 gap-6 mx-auto mt-8">
            {awardsData[year].map((award, idx) => (
              <div
                key={idx}
                className="w-[340px] h-[450px] bg-white rounded-lg shadow-md p-4 text-center"
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
