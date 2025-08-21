import React from "react";

const Shortheading = (props) => {
  return (
    <div className="flex justify-around">
      <div className="text-white font-bold text-3xl mt-10 mb-5 ">
        {props.name}
      </div>
      <div> </div>
      <div> </div>
    </div>
  );
};

export default Shortheading;
