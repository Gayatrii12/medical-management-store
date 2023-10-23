// import MedForm from "./components/medform";
import React, { useState } from "react";
import Medicine from "./medicine";

export default function AddMed(){
    const [medname, setMedname] = useState('');
    const [manufacturer, setManufacturer] = useState("");
    const [mfgdate, setMfgdate] = useState("");
    const [expdate, setExpdate] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [medicines, setMedicines] = useState([]);

    const handleChange = (e) => {
      const {value} = e.target;
      
      setMedname(e.target.value);
      setManufacturer(e.target.value);
      setMfgdate(e.target.value);
      setExpdate(e.target.value);
      setQty(e.target.value);
      setPrice(e.target,value);
      console.log("Added");

      const newMedicine = {
        medname,
        manufacturer,
        mfgdate,
        expdate,
        qty,
        price,
      };
      setMedicines([...medicines, newMedicine]);

    };

    return (
      <div class="mx-auto my-10 w-2/3 bg-slate-100 rounded-xl shadow-lg">
        <form>
          <div class="mx-20 my-10 text-slate-900 text-3xl font-semibold">
            <div class="pt-10">Add Medicine</div>
            <div class="border-2 border-slate-300 my-2"></div>
          </div>
          <div class="mx-20 mb-4">
            <label class="block text-gray-700 text-md font-bold mb-2">
              Medicine Name:
            </label>
            <input
              class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={medname}
              onChange={(e) => setMedname(e.target.value)}
              type="text"
              placeholder="Medicine Name"
            />
          </div>
          <div class="mx-20 mb-4">
            <label class="block text-gray-700 text-md font-bold mb-2">
              Manufacturer:
            </label>
            <input
              class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              type="text"
              placeholder="Manufacturer"
            />
          </div>
          <div class="flex flex-row">
            <div class="mx-20 mb-4">
              <label class="block text-gray-700 text-md font-bold mb-2">
                Mfg. Date:
              </label>
              <input
                class="shadow appearance-none border rounded w-42 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={mfgdate}
                onChange={(e) => setMfgdate(e.target.value)}
                type="date"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-md font-bold mb-2">
                Exp. Date:
              </label>
              <input
                class="shadow appearance-none border rounded w-42 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={expdate}
                onChange={(e) => setExpdate(e.target.value)}
                type="date"
              />
            </div>
          </div>
          <div class="flex flex-row">
            <div class="mx-20 mb-4">
              <label class="block text-gray-700 text-md font-bold mb-2">
                Quantity:
              </label>
              <input
                class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                type="number"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-md font-bold mb-2">
                Price:
              </label>
              <input
                class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
              />
            </div>
          </div>
        </form>
        <div class="mx-20 my-10 pb-10">
          <button
            class="rounded-sm bg-blue-900 py-1 px-2 flex place-content-center text-white text-sm hover:bg-blue-400"
            onClick={handleChange}
          >
            Add Medicine
          </button>
        </div>
        <Medicine medicines={medicines} />
      </div>
    );
}