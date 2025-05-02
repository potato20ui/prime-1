import Navbar from "@/components/Landingpage/Navbar"; // Import Navbar component
import Footer from "@/components/Landingpage/Footer"; // Import Footer component
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import careersImg from "../assets/careers.jpg";

const positions = Array(7).fill({
  title: "Position",
  location: "Quezon City",
  type: "Full-time",
  salary: "₱15,000 - ₱20,000",
});

export default function Careers() {
  const navigate = useNavigate(); // 👈 Initialize navigate function

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="relative h-[500px] w-full">
        {/* Background Image */}
        <img
          src={careersImg}
          alt="Careers Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-PRIMEblue opacity-70"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">CAREERS</h1>
          <div className="border items-center justify-center px-[40px] py-[12px] rounded-4xl  mt-2">
            <p className="text-xl">Home / Careers</p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-[1400px] mx-auto px-4 py-10">
        <h2 className="text-5xl font-semibold text-center mb-4">
          Why Work with <span className="text-PRIMEblue font-bold">PRIME</span>{" "}
          Philippines
        </h2>
        <p className="text-justify text-xl text-gray-600 leading-8.5">
          Working with PRIME will give you a first-hand experience and introduce
          you to the exciting landscape of the real estate industry. With a
          positive company culture, opportunities for personal and career
          growth, and the chance to work with experienced and topnotch
          professionals, your career here at PRIME is promising.
        </p>
      </section>

      {/* Positions List */}
      <section className="max-w-[1400px] mx-auto px-4 pb-16 space-y-4">
        {positions.map((position, index) => (
          <div
            key={index}
            className="flex justify-between items-center rounded-xl shadow-xl px-[60px] py-[35px]"
          >
            <div>
              <h3 className="text-[30px] font-semibold">{position.title}</h3>
              <div className="flex items-center text-[20px] text-gray-600 space-x-4">
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {position.location}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {position.type}
                </span>
                <span>{position.salary}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="default"
                className="p-[20px] bg-PRIMEblue text-white rounded-lg hover:bg-blue-700 transition duration-200"
                onClick={() => navigate(`/careers/${index}`)} // 👈 Go to position page
              >
                View Position
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
