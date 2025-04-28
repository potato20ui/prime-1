import { FC } from "react";
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OurExpertise: FC = () => {
  return (
    <div className="bg-[#e6e6e1] text-[#1a1a1a] text-[12px] font-sans">
      <Navbar />

      {/* Top Blue Banner */}
      <header className="bg-[#0046b8] relative">
        <img
          src="https://storage.googleapis.com/a1aa/image/c216c4cb-9111-4589-a0e1-7d118768b1ed.jpg"
          alt="Blueprint style house architectural drawing in blue"
          className="w-full h-[120px] object-cover absolute top-0 left-0 opacity-30"
        />
        <h1 className="relative text-white font-bold text-[28px] leading-[34px] px-8 py-6 max-w-[1200px] mx-auto font-sans">
          EXPERTISE
        </h1>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="flex flex-col gap-6 w-full md:w-[320px] bg-[#e6e6e1] rounded-lg p-6 font-sans">
          {/* Our Expertise Box */}
          <section className="bg-[#e6e6e1] rounded-lg p-6 border border-[#d9d9d9] shadow-sm font-sans">
            <h2 className="text-[#0046b8] font-semibold text-[13px] mb-4 underline">
              Our Expertise
            </h2>

            {/* Kickstart Dropdown */}
            <div className="mb-3">
              <Select>
                <SelectTrigger className="w-full rounded-full border border-[#bfbfbf] text-[#666666] font-semibold text-[12px] py-2 px-4">
                  <SelectValue placeholder="Kickstart" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kickstart">Kickstart</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex flex-col mt-3 gap-3">
                {["Buying and Selling", "Research and Advisory", "Leasing and Profitability"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="text-[#666666] text-[12px] font-semibold border border-[#bfbfbf] rounded-full py-2 px-4 text-left"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Seasoned Dropdown */}
            <Select>
              <SelectTrigger className="w-full mb-4 rounded-full border border-[#bfbfbf] text-[#666666] font-semibold text-[12px] py-2 px-4">
                <SelectValue placeholder="Seasoned" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seasoned">Seasoned</SelectItem>
              </SelectContent>
            </Select>

            {/* Accelerate Dropdown */}
            <Select>
              <SelectTrigger className="w-full rounded-full border border-[#bfbfbf] text-[#666666] font-semibold text-[12px] py-2 px-4">
                <SelectValue placeholder="Accelerate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="accelerate">Accelerate</SelectItem>
              </SelectContent>
            </Select>
          </section>

          {/* Call to Action */}
          <section className="bg-[#0046b8] rounded-lg p-8 flex flex-col items-center justify-center text-center text-white font-sans">
            <div className="border border-white rounded-full p-4 mb-4">
              <i className="fas fa-phone fa-lg" />
            </div>
            <h3 className="font-bold text-[16px] mb-1">Need Help? Call Here</h3>
            <p className="font-semibold text-[12px]">+123 456 7890</p>
          </section>
        </aside>

        {/* Right Content */}
        <section className="flex-1 border border-[#0046b8] rounded-md p-4 font-sans">
          {/* Sell a property */}
          <article>
            <h2 className="font-bold text-[14px] mb-2">Sell your property</h2>
            <p className="text-[11px] mb-4 leading-[14px]">
              With PRIME's full-fledged expertise, we help investors make impactful decisions that open their doors to profitable
              opportunities and potentially high returns. Disposing property must be transparent and well-thought of. Our team crafts
              acquisition strategies rooted in deep analytics, innovative and proactive thinking. We provide the holistic view of
              property and guide our clients in every step of the disposal while making sure that all aspects were discussed, and risks
              were identified and avoided.
            </p>
            <p className="font-semibold text-[12px] mb-2">What to expect from us:</p>
            <ul className="list-disc list-inside text-[11px] mb-4 space-y-1">
              <li>Help you in making the informed decision in acquiring or disposing a property.</li>
              <li>Due diligence on the authenticity and ownership of the property.</li>
              <li>Maximize the profitability of your property or investment.</li>
              <li>Transparency in the transaction whether you are a buyer or seller.</li>
              <li>Ensure that complete documents are prepared and facilitation of the whole process from beginning until completion.</li>
            </ul>
            <div className="flex gap-4">
              <img
                className="rounded-md object-cover w-2/3"
                src="https://storage.googleapis.com/a1aa/image/6cc1713c-4f96-41e4-a6d1-ec5ac11c28ef.jpg"
                alt="Modern house with large windows and a sold sign in front yard"
              />
              <img
                className="rounded-md object-cover w-1/3"
                src="https://storage.googleapis.com/a1aa/image/a0ed2abe-dc10-4fa5-ee0a-bf90db0e1408.jpg"
                alt="Modern house with a for sale sign in front yard"
              />
            </div>
          </article>

          {/* Buy a property */}
          <article className="mt-8">
            <h2 className="font-bold text-[14px] mb-2">Buy a property</h2>
            <p className="text-[11px] mb-4 leading-[14px]">
              With PRIME's full-fledged expertise, we help investors make impactful decisions that open their doors to profitable
              opportunities and potentially high returns. Disposing property must be transparent and well-thought of. Our team crafts
              acquisition strategies rooted in deep analytics, innovative and proactive thinking. We provide the holistic view of
              property and guide our clients in every step of the disposal while making sure that all aspects were discussed, and risks
              were identified and avoided.
            </p>
            <p className="font-semibold text-[12px] mb-2">What to expect from us:</p>
            <ul className="list-disc list-inside text-[11px] space-y-1">
              <li>Help you in making the informed decision in acquiring or disposing a property.</li>
              <li>Due diligence on the authenticity and ownership of the property.</li>
              <li>Maximize the profitability of your property or investment.</li>
              <li>Transparency in the transaction whether you are a buyer or seller.</li>
              <li>Ensure that complete documents are prepared and facilitation of the whole process from beginning until completion.</li>
            </ul>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurExpertise;
