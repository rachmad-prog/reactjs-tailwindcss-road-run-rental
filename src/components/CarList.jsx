import React from "react";

const CARS = [
  {
    id: 1,
    name: "BMW 3 Series",
    price: "$80",
    type: "Luxury",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Tesla Model 3",
    price: "$95",
    type: "Electric",
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Audi A4 Premium",
    price: "$85",
    type: "Luxury",
    img: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=400&q=80",
  },
];

function CarList() {
  return (
    <section id="cars" className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase mb-2">
              Koleksi <span className="text-amber-500">Armada</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Pilih mobil ideal sesuai dengan kebutuhan perjalanan Anda
            </p>
          </div>
          <button className="text-amber-500 font-bold hover:underline mt-4 sm:mt-0 text-sm">
            Lihat Semua Mobil →
          </button>
        </div>

        {/* Grid Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car) => (
            <div
              key={car.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-500/5 transition-all">
              <div className="h-48 overflow-hidden bg-zinc-850 p-4 flex items-center justify-center">
                <img
                  src={car.img}
                  alt={car.name}
                  className="max-h-full max-w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 border-t border-zinc-800 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                      {car.type}
                    </span>
                    <h3 className="text-xl font-bold mt-0.5">{car.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white">{car.price}</p>
                    <p className="text-xs text-gray-500">/ Day</p>
                  </div>
                </div>
                <button className="w-full bg-transparent hover:bg-amber-500 text-amber-500 hover:text-black font-bold py-2.5 rounded-lg border border-amber-500/40 hover:border-amber-500 transition-all text-sm uppercase tracking-wide">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarList;
