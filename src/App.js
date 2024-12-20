import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; // Make sure the path is correct
import Home from './Home/Home';
import SattvaTherapy from './Sattva Therapy/SattvaTherapy';
import AboutUs from './About Us/AboutUs';
import Headache from './MenuOne/Headache';
import Anxiety from './MenuOne/Anxiety';
import Sleep from './MenuOne/Sleep';
import PCOD from './MenuOne/PCOD';
import Fatigues from './MenuOne/Fatigues';
import GoStrezzPage from './MenuTwo/GoStrezz/GoStrezzPage';
import GoSleepPage from './MenuTwo/GoSleep/GoSleepPage';
// Import other components as needed

function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sattva Therapy" element={<SattvaTherapy />} />
          <Route path="/About Us" element={<AboutUs/>}/>
          <Route path="/Health Concerns/Headache" element={<Headache/>}/>
          <Route path="/Health Concerns/Anxiety" element={<Anxiety/>}/>
          <Route path="/Health Concerns/Sleep" element={<Sleep/>}/>
          <Route path="/Health Concerns/PCOD" element={<PCOD/>}/>
          <Route path="/Health Concerns/Fatigues" element={<Fatigues/>}/>
          <Route path="/Shop/GoStrezz" element={<GoStrezzPage />}/>
          <Route path="/Shop/GoSleep" element={<GoSleepPage />}/>

          

          {/* Add other routes as needed */}
        </Routes>
      </main>
      {/* Include Footer if you have one */}
    </Router>
  );
}

export default App;
