import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

interface Award {
  img: string;
  title: string;
}

const featuredAwards: Award[] = [
  { img: "award1.png", title: "Top Property Consultancy 2024" },
  { img: "award2.png", title: "Innovation in Real Estate 2023" },
  { img: "award3.png", title: "Best Workplace Culture" },
  { img: "award1.png", title: "Sustainability Excellence Award" },
];

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

  const filteredYears = Object.keys(awardsData).sort((a, b) => Number(b) - Number(a));
  const displayYears = yearParam && awardsData[yearParam] ? [yearParam] : filteredYears;

  const scrollFeatured = (direction: "left" | "right") => {
    const scrollElement = document.getElementById("featuredScroll");
    if (scrollElement) {
      scrollElement.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

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