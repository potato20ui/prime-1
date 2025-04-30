import {
  BuildingIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneCallIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
// Assuming Button and Input are correctly imported from their paths
import { Button } from "../../../../components/ui/button"; // Adjust path as needed
import { Input } from "../../../../components/ui/input";   // Adjust path as needed

export const FooterByAnima = (): JSX.Element => {
  const navigationLinks = {
    column1: [
      { text: "Expertise", href: "#" },
      { text: "Services", href: "#" },
      { text: "Properties", href: "#" },
      { text: "About", href: "#" },
    ],
    column2: [
      { text: "Events", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Press Room", href: "#" },
      { text: "Contact", href: "#" },
    ],
  };

  const contactInfo = [
    {
      icon: <BuildingIcon className="w-6 h-6 text-white" />,
      text: "3/F Main GreatWork Ben-Lor IT Center, Diliman, Quezon City, Metro Manila",
    },
    { icon: <PhoneIcon className="w-6 h-6 text-white" />, text: "(+63) 917 555 8222" },
    { icon: <PhoneCallIcon className="w-6 h-6 text-white" />, text: "(+632) 8442 8888" },
    {
      icon: <MailIcon className="w-6 h-6 text-white" />,
      text: "inquiry@primephilippines.com",
      isEmail: true,
    },
  ];

  // Updated order to match the image: Facebook, LinkedIn, Instagram, YouTube
  const socialLinks = [
    { icon: <FacebookIcon className="w-full h-full" />, href: "#" },
    { icon: <LinkedinIcon className="w-full h-full" />, href: "#" },
    { icon: <InstagramIcon className="w-full h-full" />, href: "#" },
    { icon: <YoutubeIcon className="w-full h-full" />, href: "#" },
  ];

  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="w-full bg-[#181d1e] py-24">
        <div className="container mx-auto px-4">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-x-24">

            {/* Left Column: Logo and Contact Info */}
            <div className="flex flex-col space-y-6">
              {/* Logo Placeholder - Ensure the path /prime-logo-1-1.png is correct */}
              <div className="w-[248px] h-[72px] bg-[url(/prime-logo-1-1.png)] bg-cover bg-left bg-no-repeat flex items-center" />

              <div className="flex flex-col space-y-4 mt-5">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    {/* Render icon */}
                    {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6 text-white flex-shrink-0' })} {/* Added flex-shrink-0 */}
                    {/* Render text or email link */}
                    <div className="ml-4 font-['Montserrat',Helvetica] font-light text-white text-[15px] leading-5">
                      {item.isEmail ? (
                        <a
                          href={`mailto:${item.text}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="underline hover:text-[#ffbf00] transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Column: PRIME RADAR Newsletter and Socials */}
            <div className="flex flex-col space-y-6">
              <div className="font-['Roboto_Slab',Helvetica] font-bold text-[40px] leading-tight">
                <span className="text-white">PRIME </span>
                <span className="text-[#ffbf00]">RADAR</span>
              </div>

              <p className="font-['Montserrat',Helvetica] font-light text-white text-lg leading-5">
                Get the latest real estate insights, events and news from our<br />newsletter
              </p>

              {/* Newsletter Input and Button */}
              <div className="flex w-full max-w-[400px]">
                <div className="relative flex-1">
                  <Input
                    className="h-12 rounded-l-[10px] rounded-r-none bg-[#dfdfdf] text-black font-['Montserrat',Helvetica] font-medium text-[15px] px-[30px] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffbf00] border-0" // Added border-0
                    placeholder="Email address"
                    type="email" // Added type attribute
                  />
                </div>
                <Button className="h-12 rounded-l-none rounded-r-[10px] bg-[#fcfcfc] text-[#010642] font-['Montserrat',Helvetica] font-bold text-[15px] px-[29px] hover:bg-[#ffbf00] hover:text-[#010642] transition-colors">
                  SUBSCRIBE
                </Button>
              </div>

              {/* Social Links and Consultation Link */}
              <div className="flex items-center space-x-4 pt-2"> {/* Added pt-2 for slight spacing adjustment */}
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-[34px] h-[34px] flex items-center justify-center text-white hover:text-[#ffbf00] transition-colors"
                    aria-label={`Link to ${social.href}`} // Consider making aria-label more descriptive e.g., "Link to Facebook"
                    target="_blank" // Added target blank for external links
                    rel="noopener noreferrer" // Added rel for security
                  >
                    {social.icon}
                  </a>
                ))}

                <a
                  href="#"
                  className="ml-6 font-['Inter',Helvetica] font-medium text-white text-xl leading-6 underline hover:text-[#ffbf00] transition-colors"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            {/* Right Column: Navigation Links */}
            <div className="flex flex-col">
              <h3 className="font-['Montserrat',Helvetica] font-bold text-[#ffbf00] text-[22px] mb-12">
                NAVIGATION
              </h3>

              <div className="flex space-x-16">
                {/* Navigation Column 1 */}
                <div className="flex flex-col space-y-8">
                  {navigationLinks.column1.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="font-['Montserrat',Helvetica] font-medium text-white text-lg hover:text-[#ffbf00] transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>

                {/* Navigation Column 2 */}
                <div className="flex flex-col space-y-8">
                  {navigationLinks.column2.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="font-['Montserrat',Helvetica] font-medium text-white text-lg hover:text-[#ffbf00] transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div> {/* End Grid */}
        </div> {/* End Container */}
      </div> {/* End Top Section */}

      {/* Bottom Copyright Section */}
      <div className="w-full h-[100px] bg-[#181d1e] border-t-2 border-[#fdfdfd] flex items-center justify-center">
        <div className="font-['Montserrat',Helvetica] font-medium text-[#d5d5d5] text-xl text-center px-4"> {/* Added text-center and px-4 for responsiveness */}
          2013 - 2025 PRIME Philippines.&nbsp;&nbsp;All Rights Reserved
        </div>
      </div>
    </footer>
  );
};