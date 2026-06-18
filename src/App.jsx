import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CarList from "./components/CarList";
import Testimonial from "./components/Testimonial";
import AppStoreBanner from "./components/AppStoreBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans antialiased scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStoreBanner />
      <Footer />
    </div>
  );
}

export default App;
