import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Expertise from "@/pages/Expertise";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import Awards from "@/pages/About/Awards";
import Properties from "@/pages/Properties";
import { Events } from "@/pages/Events";
import Pressroom from "@/pages/Pressroom"; // ✅ Import the Pressroom page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about/awards" element={<Awards />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pressroom" element={<Pressroom />} /> {/* ✅ Add Pressroom Route */}
      </Routes>
    </Router>
  );
}

export default App;
