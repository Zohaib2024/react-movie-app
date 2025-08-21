import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-black ">
        <div className="flex justify-around items-center h-20">
          <div className="text-3xl font-extrabold text-red-600">FILMY</div>
          <div className="flex gap-5">
            <ul className="flex justify-around items-center gap-10 text-white">
              <NavLink to="/">Home</NavLink>

              <NavLink to="/Movies">Movies</NavLink>
              <NavLink to="/Pricing">Pricing</NavLink>
              <NavLink to="/Contact">Contact</NavLink>

              {/* <Route path="/" element={<Homepage />} />
        <Route path="/Series" element={<Homepage />} />
        <Route path="/Movies" element={<Moviespage />} />
        <Route path="/Pricing" element={<Priceingpage />} />
        <Route path="/Contact" element={<Contactpage />} /> */}
            </ul>
            <button className="bg-red-600 w-32 h-10 rounded-lg">
              <b className="text-white">Log in</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
