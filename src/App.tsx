import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExpertisePage from './pages/Expertise';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add Navbar */}
      <Routes>
        <Route path="/expertise" element={<ExpertisePage />} />
        {/* Add more routes here if necessary */}
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
};

export default App;
