
import React from 'react';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const PrimeFoundation = (title: string, team: TeamMember[]) => (
  <>
    <h3 className="text-[40px] font-bold text-blue-950 mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-3 gap-10 mb-12">
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
          <div className="w-full h-[100px] border-t border-gray-400 bg-[#FFFEFE] flex flex-col items-start justify-center p-4">
            <h4 className="text-lg font-semibold text-black">{member.name}</h4>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

const teamLeaders: TeamMember[] = [
  { name: 'Honey A', role: 'Team Leader', image: '/honey_a.png' },
  { name: 'Hanie B', role: 'Team Leader', image: '/hanie_b.jpg' },
  { name: 'Hany C', role: 'Team Leader', image: '/hany_c.jpg' },
];

const marketingTeam: TeamMember[] = [
  { name: 'Stitch A', role: 'Marketing Specialist', image: '/stitch_a.jpg' },
  { name: 'Stitch B', role: 'Marketing Coordinator', image: '/stitch_b.png' },
  { name: 'Stitch C', role: 'Social Media Manager', image: '/stitch_c.jpg' },
  { name: 'Stitch D', role: 'Content Creator', image: '/stitch_d.jpg' },
  { name: 'Stitch E', role: 'Digital Marketer', image: '/stitch_e.png' },
  { name: 'Stitch F', role: 'PR Executive', image: '/stitch_f.jpg' },
];

const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white">

        <img
          src="/Leadership/Leadership.png"
          alt="Hero Background"
          className="absolute inset-0 object-cover w-1920px h-500px"
        />

        <div className=" relative z-10 text-center ">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight  w-[403px] h-[73px] sm:w-[80%] md:w-[403px] font-montserrat">
            <span className="text-yellow-400">PRIME</span> TEAM
          </h1>
          
          
          <nav className="mt-4 flex items-center justify-center w-[409px] h-[60px] px-6 py-2 rounded-full border border-white shadow-md">
  <Link to="/" className="text-white hover:text-blue-700 transition-all font-montserrat font-semibold" style={{ fontSize: '30px' }}>
    Home
  </Link>
  <span className="text-white mx-2 font-montserrat font-semibold" style={{ fontSize: '30px' }}>
    /
  </span>
  <h1
    className="font-semibold font-montserrat text-white"
    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '30px' }}
  >
    <span className="text-yellow-400">PRIME </span>Team
  </h1>
</nav>

        </div>
      </div>

      {/* Founder Section */}
      <section className="container mx-auto p-8 flex flex-col md:flex-row items-center gap-2 mb-5">
        <img
          src="/Leadership/SirJet.png"
          alt="Founder"
          className="w-[350px] h-[450px]"
        />
        <div>
  <div className="w-[845px] py-6">
    <h2 className="text-3xl font-bold mb-2 px-10">Jet Yu</h2>
    <h3 className="text-xl font-bold mb-2 px-10">Chief Executive Officer</h3>

    {/* Textbox */}
    <div className="px-10">
      <textarea
        className="w-full h-[300px] p-4 border border-gray-300 rounded-lg shadow-sm resize-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        readOnly
      >
         Sir Jet Yu is the visionary behind the PRIME Foundation. With years of experience in the industry, he strives to create a platform that nurtures young leaders and innovators through mentorship, education, and opportunities.

                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      </textarea>
    </div>
  </div>
</div>

      </section>

      {/* Highlight Section */}
      <section className="container mx-auto p-8 flex flex-col md:flex-row-reverse items-center gap-2 mb-5">
        <img src="/Leadership/SirCholo.png" alt="Highlight" className="w-[350px] h-[450px] my-10"/>
        <div>
          <div className="w-[845px] h-[264px] py-50"> 
            <h2 className="text-3xl font-bold mb-2 text-right px-10">Cholo Florencio</h2>
            <h3 className="text-xl font-bold mb- text-right px-10">Executive Vice-President</h3>
            <p className="text-gray-500 text-justify px-10">
              Since joining PRIME in 2014, he has taken various roles in Business Development, Landlord Representation, Leasing & Sales, and Research & Advisory.
              As a seasoned real estate professional with over 15 years of experience in the Philippines property market, he has been involved in over 200 transactions with property developers, land bankers, landlords, and occupiers.
              He has led teams managing over PhP15 Billion worth of accounts and secured exclusive leasing agency contracts for PRIME with multiple commercial developments.
            </p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="container mx-auto p-8">
        {PrimeFoundation('Team Leaders', teamLeaders)}
        <div className="my-15" />
        {PrimeFoundation('Marketing Team', marketingTeam)}
      </section>
    </div>
  );
}

export default Team;