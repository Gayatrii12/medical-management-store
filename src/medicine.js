import React, { useState } from "react";
import AddMed from "./AddMed";

export default function Medicine({ medicines }) {
  return (
    <div>
      {medicines.map((med, index) => {
        const { medname, manufacturer, mfgdate, expdate, qty, price } = med;
        return (
          <div class="text-slate-700 text-lg flex flex-row" key={index}>
            {medname}
            {manufacturer}
            {mfgdate}
            {expdate}
            {qty}
            {price}
          </div>
        );
      })}
    </div>
  );
}
