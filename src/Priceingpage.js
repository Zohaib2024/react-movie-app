import Pricebox from "./Pricebox";

const Priceingpage = () => {
  return (
    <div className=" bg-black flex items-center justify-center p-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 ">
        <Pricebox plan=" Basic plan" data="10 Movies/Day" price="Rs:1000" />
        <Pricebox plan=" Basic plan" data="10 Movies/Day" price="Rs:1000" />
        <Pricebox plan=" Basic plan" data="10 Movies/Day" price="Rs:1000" />
      </div>
    </div>
  );
};

export default Priceingpage;
