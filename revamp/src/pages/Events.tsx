  import { useState, useEffect, JSX } from "react";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import Navbar from "@/components/Navbar/Navbar";
  import Footer from "@/components/Footer";
  
  // Navigation menu items data
  
  // Footer navigation data
  
  // Speaker data
  const speakerData = {
    name: "Marck P. Gonzales",
    title: "Lead Software Engineer & Tech Community Host",
    background: `Marck P. Gonzales is an experienced IT professional with a strong background in software engineering, system architecture, and tech leadership. A proud graduate of the University of the Philippines with a degree in Information Technology, Marck has spent the last 8+ years building web and mobile applications, optimizing enterprise systems, and mentoring upcoming developers in the industry.
  
  He currently works as a Lead Software Engineer at NovaTech Solutions, where he leads a cross-functional team working on cloud-based applications, automation tools, and AI-powered platforms. Marck is known for his passion for clean code, user-centric design, and staying up-to-date with the latest tech trends.
  
  Outside of work, Marck is a familiar face in the local tech scene—hosting seminars, moderating hackathons, and leading workshops focused on web development, software architecture, and digital innovation. His approachable and engaging style makes him a favorite host at IT events and student-led conferences.`,
  };
  
  export const Events = (): JSX.Element => {
    // State for the countdown timer
    const [timeLeft, setTimeLeft] = useState({
      days: 20,
      hours: 22,
      minutes: 22,
      seconds: 0,
    });
    const [eventEnded, setEventEnded] = useState(false);
  
    // Set the target date (July 22, 2025, 00:00:00 PST)
    // Note: Month is 0-indexed in JavaScript Date (6 for July)
    // Setting time to 00:00:00
    // Using 'America/Los_Angeles' as a proxy for PST, adjust if a more specific timezone is needed
    const targetDate = new Date('2025-07-22T00:00:00-08:00'); // Assuming PST is UTC-8, adjust if necessary
  
    // Function to calculate time left
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
  
      if (difference <= 0) {
        setEventEnded(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
  
      return { days, hours, minutes, seconds };
    };
  
    // Effect to update the timer every second
    useEffect(() => {
      // Update time left immediately on mount
      setTimeLeft(calculateTimeLeft());
  
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      // Clear interval when component unmounts or event ends
      return () => clearInterval(timer);
    }, []); // Empty dependency array means this effect runs only once on mount
  
    useEffect(() => {
      if (timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && !eventEnded) {
          setEventEnded(true);
      }
    }, [timeLeft, eventEnded]); // Re-run effect when timeLeft or eventEnded changes
  
  
    return (
      <div className="bg-white flex flex-row justify-end w-full">
        <Navbar/>
        <div className="bg-white w-full max-w-[1920px] relative">
          {/* Hero Section */}
          <section className="w-full h-[971px] relative bg-[url(/Services.png)] bg-cover bg-[50%_50%]">
            {/* Conference Info */}
            <div className="absolute w-[382px] h-[209px] top-[381px] left-[109px]">
              <div className="[font-family:'Inter',Helvetica] font-light text-white text-[23px] ml-2 mt-[11px]">
                BUSINESS LEADERS
              </div>
              <div className="[font-family:'Inter',Helvetica] font-bold text-white text-[35px] ml-2 mt-3">
                CONFERENCE 2025
              </div>
              <div className="[font-family:'Inter',Helvetica] font-light text-white text-xl ml-2 mt-6">
                22-25 July 2025 - Greatwork 2 Office
              </div>
              {/* Display the dynamic timer */}
              <div className="[font-family:'Inter',Helvetica] font-light text-white text-3xl ml-2 mt-2">
                {eventEnded ? (
                  <span>Event Started!</span>
                ) : (
                  <span>
                    {timeLeft.days} | {timeLeft.hours} | {timeLeft.minutes} |{" "}
                    {timeLeft.seconds}
                  </span>
                )}
              </div>
              <div className="[font-family:'Inter',Helvetica] font-light text-white text-[13px] ml-0.5 mt-[11px]">
                &nbsp;&nbsp;Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;Minutes&nbsp;&nbsp;&nbsp;&nbsp;Seconds
              </div>
            </div>
          </section>
          {/* About Event Section */}
          <section className="w-full h-[190px] bg-[#0F656B] py-6 px-[174px]">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[35px] text-white">
              ABOUT EVENT
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl mt-5">
              Join top real estate professionals, investors, and tech leaders to
              explore the future of property innovation. Discover trends,
              strategies,
              <br />
              and digital tools shaping the Philippine real estate landscape.
            </p>
          </section>
          {/* Featured Speaker Section */}
          <section className="w-full max-w-[1508px] mx-auto mt-[60px] mb-[60px]">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[35px] text-center mb-[113px]">
              Featured Speaker
            </h2>
            <div className="flex flex-wrap gap-6">
              {/* Speaker Image and Info */}
              <div className="w-full max-w-[550px]">
                <img
                  className="w-full h-[500px] object-cover"
                  alt="Speaker"
                  src="/default.png"
                />
                <div className="mt-[47px] text-center">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[25px]">
                    {speakerData.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-light text-black text-xl mt-[13px]">
                    Title: {speakerData.title}
                  </p>
                </div>
              </div>
              {/* Speaker Background */}
              <div className="w-full max-w-[900px]">
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#474747] text-[35px] text-center mb-[34px]">
                  BACKGROUND
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-black text-xl text-justify whitespace-pre-line">
                  {speakerData.background}
                </p>
              </div>
            </div>
          </section>
          {/* chat our team */}
          {/* === Chat With Our Team Section (Made Larger) === */}
          <section className="w-full flex justify-center my-[60px] px-4">
            {" "}
            {/* Existing margin/padding */}
            <div className="max-w-7xl w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              {" "}
              {/* Changed: max-w-6xl to max-w-7xl */}
              {/* Left Column: Form */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                {" "}
                {/* Changed: p-8 md:p-12 to p-10 md:p-16 */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  {" "}
                  {/* Changed: text-2xl md:text-3xl to text-3xl md:text-4xl, mb-3 to mb-4 */}
                  Chat to our team
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                  {" "}
                  {/* Changed: Added text-lg, mb-8 to mb-10 */}
                  Need help with something? Get in touch with our friendly team
                  and we'll get in touch within 2 hours.
                </p>
                {/* Form Fields - Using imported Input and Button */}
                <form className="space-y-6">
                  {" "}
                  {/* Changed: space-y-5 to space-y-6 */}
                  {/* Name Field */}
                  <div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-base" // Changed: py-3 to py-4, added text-base
                    />
                  </div>
                  {/* Phone Number Field */}
                  <div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+63"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-base" // Changed: py-3 to py-4, added text-base
                    />
                  </div>
                  {/* Email Field */}
                  <div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jana@framer.com"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-4 text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-base" // Changed: py-3 to py-4, added text-base
                    />
                  </div>
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gray-900 text-white font-semibold py-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 text-lg" // Changed: py-3 to py-4, added text-lg
                    onClick={(e) => e.preventDefault()}
                  >
                    Submit
                  </Button>
                </form>
              </div>
              {/* Right Column: Image */}
              <div className="w-full md:w-1/2 hidden md:block">
                <img
                  // IMPORTANT: Use your actual image path here
                  src="Contact.png" // Make sure this path is correct!
                  alt="Person working on a laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
       <Footer/>
         
        </div>
      </div>
    );
  };