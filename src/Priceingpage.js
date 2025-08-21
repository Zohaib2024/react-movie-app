import Pricebox from "./Pricebox";

const Priceingpage = () => {
  return (
    <div>
      <div className="w-full flex justify-center flex-col items-center gap-5">
        <Pricebox plan=" Basic plan" data="10 Movies/Day" price="Rs:1000" />
        <Pricebox plan=" Basic plan" data="10 Movies/Day" price="Rs:1000" />
        <Pricebox plan=" Basic plan" data="10 Movies/Day" price="Rs:1000" />
      </div>
    </div>
  );
};

export default Priceingpage;
