import React from "react";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-500 pt-16 pb-8 border-t border-zinc-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Kolom Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-white uppercase tracking-wider">
            Road<span className="text-amber-500">Run Rental</span>
          </h3>
          <p className="text-gray-400">
            Solusi terbaik penyewaan kendaraan premium terpercaya dengan standar
            pelayanan nomor satu.
          </p>
        </div>

        {/* Kolom Links 1 */}
        <div className="space-y-4">
          <h4 className="font-bold text-white text-base">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-amber-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#cars"
                className="hover:text-amber-500 transition-colors">
                Armada Mobil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-amber-500 transition-colors">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom Links 2 */}
        <div className="space-y-4">
          <h4 className="font-bold text-white text-base">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition-colors">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom Contact */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-base">Contact</h4>
          <p className="text-gray-400">📍 Bogor, Indonesia</p>
          <p className="text-gray-400">✉️ support@roadrunrental.co</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs mt-12 pt-6 border-t border-zinc-900">
        <p>
          &copy; {new Date().getFullYear()} RoadRun Rental. All rights reserved.
          by Rachmadinata, S.Kom
        </p>
      </div>
    </footer>
  );
}

export default Footer;
