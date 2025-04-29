import Navbar from './components/ui/Navbar';  // Ensure correct import path
import Footer from './components/ui/Footer';  // Ensure correct import path
import ServicesPage from './pages/ServicesPage';
import Homepage from './pages/Homepage';  // Assuming your homepage is in Homepage.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import router components

function App() {
  return (
    <Router>
      {/* Wrap the Routes with the Navbar and Footer */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />  {/* This will render Homepage component on / */}
        <Route path="/services" element={<ServicesPage />} />  {/* This will render ServicesPage component */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
