import React from "react";

const ShortCard = (props) => {
  return (
    <div className="w-48 my-5 ">
      <img src={props.Image} alt="img" />
    </div>
  );
};

export default ShortCard;
