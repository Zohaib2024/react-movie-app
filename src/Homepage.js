import React from "react";
import CarousalMovies from "./CarousalMovies";

import ShortCard from "./ShortCard";

import Shortheading from "./Shortheading";
import SiteFooter from "./SiteFooter";

const Homepage = () => {
  return (
    <>
      <CarousalMovies />

      <Shortheading name="Trending Movies" />
      <div className="flex gap-5 justify-center items-center w-full">
        <ShortCard Image="images/DealPool.jpg" />
        <ShortCard Image="/images/Jurassic_world.jpg" />
        <ShortCard Image="/images/Joker.jpg" />
        <ShortCard Image="/images/mufasa.jpg" />
        <ShortCard Image="images/Nibecraft.jpg" />
      </div>
      <Shortheading name="Latest Movies" />
      <div className="flex gap-5 justify-center items-center w-full">
        <ShortCard Image="images/DealPool.jpg" />
        <ShortCard Image="/images/Jurassic_world.jpg" />
        <ShortCard Image="/images/Joker.jpg" />
        <ShortCard Image="/images/mufasa.jpg" />
        <ShortCard Image="images/Nibecraft.jpg" />
      </div>

      <SiteFooter />
    </>
  );
};

export default Homepage;
