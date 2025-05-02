import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; 
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const PrimeFoundation = (title: string, team: TeamMember[]) => (
  <>
    <h3 className="text-[40px] font-bold text-blue-950 mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 mb-12">
      {team.map((member, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md w-[350px] h-[450px] flex flex-col items-center"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-[350px] h-[350px] object-cover"
          />
          <div className="w-full h-[auto]  border-gray-400 bg-[#FFFEFE] flex flex-col items-start justify-center p-4">
            <h4 className="text-lg font-semibold text-black">{member.name}</h4>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

const teamLeaders: TeamMember[] = [
  { name: 'Honey A', role: 'Team Leader', image: '/default.png' },
  { name: 'Hanie B', role: 'Team Leader', image: '/default.png' },
  { name: 'Hany C', role: 'Team Leader', image: '/default.png' },
];

const marketingTeam: TeamMember[] = [
  { name: 'Stitch A', role: 'Marketing Specialist', image: '/default.png' },
  { name: 'Stitch B', role: 'Marketing Coordinator', image: '/default.png' },
  { name: 'Stitch C', role: 'Social Media Manager', image: '/default.png' },
  { name: 'Stitch D', role: 'Content Creator', image: '/default.png' },
  { name: 'Stitch E', role: 'Digital Marketer', image: '/default.png' },
  { name: 'Stitch F', role: 'PR Executive', image: '/default.png' },
];

const Team: React.FC = () => {
  return (
    <div className="flex-col items-center">
      <Navbar />
          {/* Banner Section */}
          <section className="relative mb-10">
        <div className="w-full h-[500px] bg-[url('/Property/Properties.png')] bg-cover bg-center rounded-lg relative group">
           {/* Overlay */}
           <div className="absolute inset-0 bg-[#0E406F]/30 transition duration-300"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          >
            <h1 className="text-[36pt] sm:text-[48pt] font-bold">PRIME Foundation</h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">Prime Foundation</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Founder Section */}
        <section className="container mx-auto p-8 flex flex-col md:flex-row items-center gap-8 mb-10">
  <img
    src="/Leadership/SirJet.png"
    alt="Founder"
    className="w-[350px] h-[450px] rounded-lg shadow-lg object-cover"
  />
  <div className="w-full">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">Jet Yu</h2>
    <h3 className="text-xl font-semibold mb-4 text-gray-600">Chief Executive Officer</h3>
    <p className="text-gray-700 leading-relaxed">
      Sir Jet Yu is the visionary behind the PRIME Foundation. With years of experience in the industry, he strives to create a platform that nurtures young leaders and innovators through mentorship, education, and opportunities.
    </p>
    <p className="text-gray-700 leading-relaxed mt-4">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </p>
  </div>
</section>

{/* Highlight Section */}
<section className="container mx-auto p-8 flex flex-col md:flex-row-reverse items-center gap-8 mb-10">
  <img
    src="/Leadership/SirCholo.png"
    alt="Highlight"
    className="w-[350px] h-[450px] rounded-lg shadow-lg object-cover"
  />
  <div className="w-full">
    <h2 className="text-3xl font-bold mb-4 text-gray-800 text-right">Cholo Florencio</h2>
    <h3 className="text-xl font-semibold mb-4 text-gray-600 text-right">Executive Vice-President</h3>
    <p className="text-gray-700 leading-relaxed text-justify">
      Since joining PRIME in 2014, he has taken various roles in Business Development, Landlord Representation, Leasing & Sales, and Research & Advisory. As a seasoned real estate professional with over 15 years of experience in the Philippines property market, he has been involved in over 200 transactions with property developers, land bankers, landlords, and occupiers.
    </p>
    <p className="text-gray-700 leading-relaxed text-justify mt-4">
      He has led teams managing over PhP15 Billion worth of accounts and secured exclusive leasing agency contracts for PRIME with multiple commercial developments.
    </p>
  </div>
</section>

        {/* Team Sections */}
        <section className="container mx-auto ">
          {PrimeFoundation("Team Leaders", teamLeaders)}
          <div className="my-15" />
          {PrimeFoundation("Marketing Team", marketingTeam)}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Team;