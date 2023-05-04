import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomePageView from "./HomePage";
import AboutusPageview from "./AboutusPage";
import PredictPageview from "./Predictpage";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import LoginpageView from "./LoginPage";
import RegisterpageView from "./Registerpage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageView />} />
          <Route path="/about" element={<AboutusPageview />} />
          <Route path="/login" element={<LoginpageView />} />
          <Route path="/register" element={<RegisterpageView />} />
          <Route path="/predict" element={<PredictPageview />} />
          <Route path="/login" element={<RegisterpageView />} />
          {/* <Route path="/" element={<RegisterpageView />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
