import React from "react";
import "./pricebox.css";
const Pricebox = (props) => {
  return (
    <div className="text-white  w-1/2  mt-10 ">
      {/* <table className="w-[400px] ">
        <tr className="">
          <th>{props.plan}</th>
        </tr>
        <tr>
          <td>{props.data}</td>
        </tr>
        <tr>
          <td>{props.price} </td>
        </tr>
        <tr>
          <td>
            <button className="bg-red-600 w-40 h-8 rounded-md">
              Subscribe
            </button>
          </td>
        </tr>
      </table> */}
      <table class="  w-full ">
        <thead>
          <tr>
            <th class=" bg-red-600 text-center px-28 py-6 text-2xl">
              {props.plan}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border  border-red-600  text-center px-28 py-6  text-2xl  ">
              {props.data}
            </td>
          </tr>
          <tr>
            <td class="border  border-red-600  text-center  px-28 py-6 text-2xl ">
              {props.price}
            </td>
          </tr>
          <tr>
            <td class="border flex justify-center  px-28 py-6  border-red-600 ">
              <button className="bg-red-600 px-20 py-6 rounded-md">
                Subscribe
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pricebox;
