import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const positions = Array(7).fill({
  title: "Position",
  location: "Quezon City",
  type: "Full-time",
  salary: "₱15,000 - ₱20,000",
});

export default function Careers() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-PRIMEwhite text-PRIMEgray">
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <section className="relative mb-10">
        <div className="w-full h-[500px] bg-[url('/Careers.jpeg')] bg-cover bg-center rounded-lg relative group">
          {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEblue/70 transition duration-300"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          >
            <h1 className="text-[36pt] sm:text-[48pt] font-gotham-bold uppercase">
              Careers
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">Careers</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-[1400px] mx-auto px-4 py-10">
        <h2 className="text-5xl font-semibold text-center mb-4 text-PRIMEblack">
          Why Work with <span className="text-PRIMEblue font-bold">PRIME</span>{" "}
          Philippines
        </h2>
        <p className="text-justify text-xl text-PRIMEgray leading-8.5">
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
              <h3 className="text-[30px] font-semibold text-PRIMEblack ">
                {position.title}
              </h3>
              <div className="flex items-center text-[20px] text-PRIMEgray space-x-4">
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
                className="p-[20px] bg-PRIMEblue text-PRIMEwhite rounded-lg hover:bg-PRIMEblue/90 transition duration-200"
                onClick={() => navigate(`/careers/${index}`)} // ✅ Template string fixed
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
