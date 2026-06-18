import React from "react";

function Services() {
  const services = [
    {
      title: "Harga Kompetitif",
      icon: "💰",
      desc: "Tarif sewa transparan dan bersaing dengan jaminan kualitas unit terbaik.",
    },
    {
      title: "Kondisi Prima",
      icon: "🔧",
      desc: "Setiap unit mobil melalui inspeksi ketat dan servis berkala secara rutin.",
    },
    {
      title: "Booking Mudah",
      icon: "📱",
      desc: "Proses reservasi online cepat hanya dalam hitungan menit lewat aplikasi.",
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase mb-2">
          Mengapa Memilih <span className="text-amber-500">Kami?</span>
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm mb-12">
          Layanan istimewa yang dirancang khusus demi kenyamanan perjalanan
          berkendara Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl group hover:border-amber-500/50 transition-all duration-300 text-center">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
