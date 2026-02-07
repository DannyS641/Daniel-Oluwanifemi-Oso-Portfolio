"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl">
            <span className="text-black">Daniel Oso</span>
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-black transition-colors"
            >
              About Me
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Services
            </a>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Book a Call ?
          </button>
        </div>
      </div>
    </nav>
  );
}
