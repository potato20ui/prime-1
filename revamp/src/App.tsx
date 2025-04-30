import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Expertise from "@/pages/Expertise"
import Services from "@/pages/Services"
import Contact from "@/pages/Contact"
import Careers from "@/pages/Careers"
import Awards from "@/pages/About/Awards"
import Properties from "@/pages/Properties"
import {Events} from "@/pages/Events"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/About/awards" element={<Awards />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  )
}

export default App
