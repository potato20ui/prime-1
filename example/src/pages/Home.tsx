import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-1 bg-white">
        {/* Blank section that fills remaining space */}
      </section>

      <Footer />
    </div>
  );
}

export default Home;
