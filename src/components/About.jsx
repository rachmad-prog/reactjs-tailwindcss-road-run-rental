import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 text-white py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Gambar Sisi Kiri */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
            alt="About Car"
            className="rounded-2xl shadow-xl border border-zinc-800 object-cover h-[350px] w-full max-w-[500px]"
          />
        </div>

        {/* Deskripsi Sisi Kanan */}
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase">
            Tentang <span className="text-amber-500">Kami</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Kami adalah penyedia layanan rental mobil terpercaya yang
            berkomitmen memberikan pengalaman perjalanan terbaik bagi Anda. Baik
            untuk kebutuhan bisnis, liburan keluarga, ataupun acara spesial,
            kami menyediakan solusi armada terbaik yang selalu prima.
          </p>

          {/* Fitur List */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center space-x-2">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-gray-300 font-medium">Armada Terbaru</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-gray-300 font-medium">
                Supir Berpengalaman
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-gray-300 font-medium">
                Tanpa Biaya Tersembunyi
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-gray-300 font-medium">
                Layanan Darurat 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
