import React from "react";
import { NavLink } from "react-router-dom";

const Pricebox = (props) => {
  return (
    <div className="w-full max-w-sm mt-10 text-white">
      <table className="w-full  rounded-lg overflow-hidden ">
        <thead>
          <tr>
            <th className="bg-red-600 text-center text-xl sm:text-2xl py-4">
              {props.plan}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-red-600 text-center py-4 text-base sm:text-xl">
              {props.data}
            </td>
          </tr>
          <tr>
            <td className="border border-red-600 text-center py-4 text-base sm:text-xl">
              {props.price}
            </td>
          </tr>
          <tr>
            <td className="border border-red-600 text-center py-4 px-24">
               <NavLink to="/login">
              <button className="bg-red-600 text-white px-6 py-2 sm:px-10 sm:py-3 rounded-md hover:bg-red-700 transition">
                Subscribe
              </button>
              </NavLink> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pricebox;
