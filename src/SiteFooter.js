const SiteFooter = () => {
  return (
    <footer className="bg-black text-white w-full py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Branding / Logo */}
        <div className="text-2xl font-bold text-red-600 mb-3 md:mb-0">
          {/* FILMY */}
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-white">
          {/* <a href="#home" className="hover:text-red-600 transition">
            Home
          </a>
          <a href="#movies" className="hover:text-red-600 transition">
            Movies
          </a>
          <a href="#pricing" className="hover:text-red-600 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-red-600 transition">
            Contact
          </a> */}
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 mt-3 md:mt-0">
          © {new Date().getFullYear()} Created by Zohaib
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
