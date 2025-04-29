import { useState } from "react";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ExpertisePage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const contentMap: Record<number, React.ReactNode> = {
    2: <p>Content for Research & Advisory</p>,
    3: <p>Content for Leasing and Profitability</p>,
    4: <p>Content for Seasoned</p>,
    5: <p>Content for Accelerate</p>,
  };

  const serviceList = [
    { id: 1, name: "Buying & Selling" },
    { id: 2, name: "Research & Advisory" },
    { id: 3, name: "Leasing and Profitability" },
    { id: 4, name: "Seasoned" },
    { id: 5, name: "Accelerate" },
  ];

  const handleClick = () => setShowDropdown(!showDropdown);

  return (
    <div>
      {/* Banner Section */}
      <section className="relative">
        <img
          src="https://azbigmedia.com/wp-content/uploads/2023/12/commercial-real-estate-outlook-for-2024.jpg"
          alt="Expertise Page Banner"
          className="w-full h-[503px] object-cover"
        />

        {/* Blue Overlay */}
    <div className="absolute inset-0 bg-[#0E406F]/50 transition duration-300"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-[60px] font-bold">EXPERTISE</h1>
            <span className="mt-4 inline-block px-6 py-2 border border-white rounded-full text-sm">
              <Link to="/" className="hover:text-blue-300">Home</Link> / <Link to="/expertise" className="hover:text-blue-300">Expertise</Link>
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-12 py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Expertise Container */}
          <div className="flex flex-col bg-white shadow-md p-6 rounded-lg" style={{ width: '450px', height: '530px' }}>
            <div className="text-left">
              <h2 className="text-xl font-semibold text-blue-900 mb-1">Expertise</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-800 rounded-full mb-6"></div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col w-full space-y-3">
              {/* Kickstart Button */}
              <button
                onClick={handleClick}
                className={`flex items-center w-full py-2 px-4 rounded-md transition-all duration-300 justify-between ${
                  showDropdown ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-blue-100 text-gray-700'
                }`}
              >
                <span>Kickstart</span>
                <ArrowRight size={18} className="text-[#2a3a6f]" />
              </button>

              {/* Animated Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  showDropdown ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col w-full space-y-2 ml-2 mt-2">
                  {serviceList.slice(0, 3).map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className="flex items-center justify-between w-full py-2 px-4 rounded-md hover:bg-blue-100 text-gray-700 transition-all duration-200"
                    >
                      <span>{service.name}</span>
                      <ArrowRight size={18} className="text-[#2a3a6f]" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Seasoned and Accelerate Buttons */}
              {serviceList.slice(3).map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className="flex items-center justify-between w-full py-2 px-4 rounded-md hover:bg-blue-100 text-gray-700 transition-all duration-200"
                >
                  <span>{service.name}</span>
                  <ArrowRight size={18} className="text-[#2a3a6f]" />
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 pl-6">
            {selectedService === 1 ? (
              // If Buying & Selling is selected
              <div className="flex space-x-4" style={{ width: "940px", height: "250px" }}>
                <div className="flex-1 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src="http://www.therealestateworks.com/wp-content/uploads/2014/04/For-Sale.jpg"
                    alt="Buying & Selling 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/sold-for-sale-real-estate-sign-in-front-of-new-royalty-free-image-1685982441.jpg"
                    alt="Buying & Selling 2"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src="https://www.rismedia.com/wp-content/uploads/2023/02/Strategies_for_Working_the_2023_Luxury_Real_Estate_Market_1460067423.jpg"
                    alt="Buying & Selling 3"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ) : (
              // If other services are selected
              <>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  {serviceList.find((s) => s.id === selectedService)?.name || 'Service Not Found'}
                </h2>
                <div className="text-gray-700 text-justify leading-relaxed space-y-2">
                  {contentMap[selectedService || 0] || <p>Content is currently unavailable.</p>}
                </div>
              </>
            )}
          </div>

          {/* Contact Container */}
          <div className="flex flex-col items-center justify-center bg-[#0b2c53] text-white text-center rounded-lg p-6 shadow-md hover:shadow-2xl transition-all duration-300" style={{ width: '450px', height: '530px' }}>
            <div className="mb-4">
              <PhoneCall size={48} color="white" />
            </div>
            <p className="text-lg font-semibold mb-2">Need Help?</p>
            <p className="text-sm font-medium mb-2">Call Here</p>
            <p className="text-sm font-medium">
              <a href="tel:+63288881000" className="text-blue-300 hover:underline">+63 2 8888 1000</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
