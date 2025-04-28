import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import OurExpertise from "@/pages/OurExpertise"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<OurExpertise />} />
      </Routes>
    </Router>
  )
}

export default App
