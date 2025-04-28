import { useState } from "react";
import { PhoneCall } from "lucide-react";

const ExpertisePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setShowDropdown((prev) => !prev);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <div>
      {/* Banner Image Section */}
      <section className="relative">
        <img
          src="https://azbigmedia.com/wp-content/uploads/2023/12/commercial-real-estate-outlook-for-2024.jpg"
          alt="Expertise Page Banner"
          className="w-full h-[503px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-[60px] font-bold">EXPERTISE</h1>
            <span className="mt-4 inline-block px-6 py-2 border border-white rounded-full text-sm">
              Home / Expertise
            </span>
          </div>
        </div>
      </section>

      {/* Content Section with Panels and Main Text */}
      <section className="px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Expertise Panels */}
          <div className="flex flex-col items-center space-y-6">
            {/* First Modal */}
            <div
              className="w-[454px] h-[533px] bg-white shadow-2xl rounded-xl p-6"
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col mb-6">
                <h1 className="text-[24px] font-semibold text-[#2a3a6f] mb-1">
                  Expertise
                </h1>
                <div className="h-[4px] w-[75px] flex">
                  <div className="bg-yellow-400 w-[30%]"></div>
                  <div className="bg-white w-[5%]"></div>
                  <div className="bg-[#2a3a6f] w-[65%]"></div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  onClick={handleClick}
                  className="bg-white text-[#2a3a6f] text-[17px] px-4 py-2 rounded flex justify-between items-center hover:bg-[#add8e6] transition duration-200 ease-in-out font-semibold"
                >
                  Kickstart
                  <span
                    className={`text-[#2a3a6f] text-lg ml-2 transform transition duration-200 ease-in-out ${
                      showDropdown ? "rotate-90" : ""
                    }`}
                  >
                    &gt;
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                    showDropdown ? "max-h-[400px]" : ""
                  }`}
                >
                  <div className="flex flex-col space-y-2 ml-6 mt-2">
                    {[
                      "Buying & Selling",
                      "Research & Advisory",
                      "Leasing and Profitability",
                    ].map((label, idx) => (
                      <button
                        key={idx}
                        className="bg-white text-[#2a3a6f] text-[17px] px-4 py-2 rounded flex justify-between items-center hover:bg-[#add8e6] transition duration-200 ease-in-out font-semibold"
                      >
                        {label}
                        <span className="text-[#2a3a6f] text-lg ml-2">&gt;</span>
                      </button>
                    ))}
                  </div>
                </div>

                {["Seasoned", "Accelerate"].map((label, idx) => (
                  <button
                    key={idx}
                    className="bg-white text-[#2a3a6f] text-[17px] px-4 py-2 rounded flex justify-between items-center hover:bg-[#add8e6] transition duration-200 ease-in-out font-semibold"
                  >
                    {label}
                    <span className="text-[#2a3a6f] text-lg ml-2">&gt;</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Second Modal */}
            <div className="w-[454px] h-[522px] bg-[#2a3a6f] shadow-2xl rounded-xl flex flex-col items-center justify-center space-y-4">
              <div className="animate-ringing">
                <PhoneCall className="text-white w-16 h-16" />
              </div>
              <div className="text-white text-center font-bold text-[30px] space-y-1">
                <p>Need Help?</p>
                <p>Call Here.</p>
                <p className="text-[18px] font-bold">(+63) 912 345 6789</p>
              </div>
            </div>
          </div>

          {/* Main Text Content */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Real Estate Advisory
              </h2>

              {/* You can put more main page content here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
