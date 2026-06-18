import React from "react";

function Hero() {
  return (
    <div
      id="home"
      className="bg-black text-white min-h-[85vh] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Teks Hero */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            Effortless Renting
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase leading-tight">
            Premium Car Rental <br />
            <span className="text-amber-500">For Your Journey</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Temukan kenyamanan berkendara terbaik dengan armada mobil premium
            kami. Proses cepat, harga transparan, dan layanan 24/7.
          </p>
          <div className="pt-2">
            <a
              href="#cars"
              className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-8 py-3.5 rounded-md shadow-lg shadow-amber-500/20 transition-all uppercase tracking-wider text-sm">
              Book Your Ride
            </a>
          </div>
        </div>

        {/* Gambar Mobil */}
        <div className="flex justify-center relative">
          <img
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
            alt="Premium Car"
            className="w-full max-w-[550px] object-contain drop-shadow-[0_20px_50px_rgba(245,158,11,0.15)] rounded-2xl"
          />
        </div>
      </div>

      {/* Dekorasi Background Latar Belakang */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}

export default Hero;
