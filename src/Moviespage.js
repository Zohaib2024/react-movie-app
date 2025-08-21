import ShortCard from "./ShortCard";

const Moviespage = () => {
  return (
    <div>
      <div className="flex gap-5 justify-center items-center w-full my-10">
        <input
          id="email"
          type="email"
          placeholder="Enter Movie Name "
          className="p-3 w-1/2  rounded-md border border-gray-400 bg-transparent text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
        />
        <button className=" p-3 rounded-md border border-gray-400 bg-transparent text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600">
          Search
        </button>
      </div>

      <div className="flex gap-5 justify-center items-center w-full">
        <ShortCard Image="images/DealPool.jpg" />
        <ShortCard Image="/images/Jurassic_world.jpg" />
        <ShortCard Image="/images/Joker.jpg" />
        <ShortCard Image="/images/mufasa.jpg" />
        <ShortCard Image="images/Nibecraft.jpg" />
      </div>
      <div className="flex gap-5 justify-center items-center w-full">
        <ShortCard Image="images/DealPool.jpg" />
        <ShortCard Image="/images/Jurassic_world.jpg" />
        <ShortCard Image="/images/Joker.jpg" />
        <ShortCard Image="/images/mufasa.jpg" />
        <ShortCard Image="images/Nibecraft.jpg" />
      </div>
      <div className="flex gap-5 justify-center items-center w-full">
        <ShortCard Image="images/DealPool.jpg" />
        <ShortCard Image="/images/Jurassic_world.jpg" />
        <ShortCard Image="/images/Joker.jpg" />
        <ShortCard Image="/images/mufasa.jpg" />
        <ShortCard Image="images/Nibecraft.jpg" />
      </div>
      <div className="flex gap-5 justify-center items-center w-full">
        <ShortCard Image="images/DealPool.jpg" />
        <ShortCard Image="/images/Jurassic_world.jpg" />
        <ShortCard Image="/images/Joker.jpg" />
        <ShortCard Image="/images/mufasa.jpg" />
        <ShortCard Image="images/Nibecraft.jpg" />
      </div>
    </div>
  );
};

export default Moviespage;
