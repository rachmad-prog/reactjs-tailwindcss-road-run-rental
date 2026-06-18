import React from "react";

function Testimonial() {
  const reviews = [
    {
      name: "Alex Kevin",
      role: "Business Traveler",
      text: "Pelayanan yang sangat memuaskan! Kondisi mobil BMW sangat bersih dan performanya prima. Sangat direkomendasikan untuk perjalanan bisnis.",
      avatar: "🧑‍💼",
    },
    {
      name: "Sarah Kirana",
      role: "Family Vacation",
      text: "Proses rental lewat website sangat cepat dan mudah. CS ramah dan sigap membantu saat penjemputan unit di bandara.",
      avatar: "👩‍💼",
    },
  ];

  return (
    <section id="testimonial" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-center uppercase mb-12">
          Apa Kata <span className="text-amber-500">Mereka?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between">
              <p className="text-gray-300 italic text-sm leading-relaxed">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-zinc-800">
                <span className="text-3xl bg-zinc-800 p-2 rounded-full">
                  {rev.avatar}
                </span>
                <div>
                  <h4 className="font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-gray-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
