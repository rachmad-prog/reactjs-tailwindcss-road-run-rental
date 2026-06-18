import React from "react";

function AppStoreBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-black py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
          Unduh Aplikasi RoadRun Rental
        </h2>
        <p className="max-w-md mx-auto font-medium opacity-90 text-sm sm:text-base">
          Dapatkan kemudahan mengelola pesanan jadwal rental langsung melalui
          genggaman smartphone Anda secara instan.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button className="bg-black text-white font-bold px-6 py-3 rounded-xl flex items-center gap-3 shadow-md hover:bg-zinc-900 transition-colors">
            <span className="text-2xl">
              <i class="ri-google-play-fill"></i>
            </span>
            <div className="text-left">
              <p className="text-[10px] opacity-60 leading-none">GET IT ON</p>
              <p className="text-sm font-bold leading-none mt-1">Google Play</p>
            </div>
          </button>
          <button className="bg-black text-white font-bold px-6 py-3 rounded-xl flex items-center gap-3 shadow-md hover:bg-zinc-900 transition-colors">
            <span className="text-2xl ">
              <i class="ri-apple-fill"></i>
            </span>
            <div className="text-left">
              <p className="text-[10px] opacity-60 leading-none">
                Download on the
              </p>
              <p className="text-sm font-bold leading-none mt-1">App Store</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AppStoreBanner;
