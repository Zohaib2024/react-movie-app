import Pricebox from "./Pricebox";

const Priceingpage = () => {
  return (
    <div className=" bg-black flex items-center justify-center p-5">

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 ">
        <Pricebox
          plan=" Basic plan"
          data="10 Movies/Day + 1 device"
          price="Rs:1000"
        />
        <Pricebox
          plan=" Standard plan"
          data="50 Movies/Day + 2 device"
          price="Rs:1600"
        />
        <Pricebox
          plan=" Premium plan"
          data="100 Movies/Day + 3 devices"
          price="Rs:2500"
        />
      </div>
    </div>
  );
};

export default Priceingpage;
