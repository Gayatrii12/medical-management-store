import React, { useState } from "react";

const Try = () => {
  const [med, setMed] = useState({
    medname: "",
    manufacturer: "",
    mfgdate: "",
    expdate: "",
    qty: "",
    price: ""
});
  const [medicines, setMedicines] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMed({ ...med, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (med.medname && med.manufacturer && med.mfgdate && med.expdate && med.qty && med.price) {
      const newMed = { ...med, id: new Date().getTime().toString() };
      setMedicines([...medicines, newMed]);
      setMed({
        medname: "",
        manufacturer: "",
        mfgdate: "",
        expdate: "",
        qty: "",
        price: "",
      });
    }
  };
  return (
    <>
      <article class="mx-auto my-10 w-2/3 bg-slate-100 rounded-xl shadow-lg">
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
              name="medname"
              value={med.medname}
              onChange={handleChange}
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
              name="manufacturer"
              value={med.manufacturer}
              onChange={handleChange}
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
                name="mfgdate"
                value={med.mfgdate}
                onChange={handleChange}
                type="date"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-md font-bold mb-2">
                Exp. Date:
              </label>
              <input
                class="shadow appearance-none border rounded w-42 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="expdate"
                value={med.expdate}
                onChange={handleChange}
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
                name="qty"
                value={med.qty}
                onChange={handleChange}
                type="number"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-md font-bold mb-2">
                Price:
              </label>
              <input
                class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="price"
                value={med.price}
                onChange={handleChange}
                type="number"
              />
            </div>
          </div>
        </form>
        <div class="mx-20 my-10 pb-10">
          <button
            type="submit"
            class="rounded-sm bg-blue-900 py-1 px-2 flex place-content-center text-white text-sm hover:bg-blue-400"
            onClick={handleSubmit}
          >
            Add Medicine
          </button>
        </div>
      </article>

      <article class="mx-auto my-10 w-2/3 bg-slate-100 rounded-xl shadow-lg">
        <div class="mx-10 my-4 pt-8 text-slate-900 text-3xl font-semibold">
          Medicines
        </div>
        <div class="text-lg font-semibold flex flex-row justify-center pt-7">
          <p class="mx-11">Medicine</p>
          <p class="mx-11">Manufacturer</p>
          <p class="mx-10">Mfg. Date</p>
          <p class="mx-11">Exp. Date</p>
          <p class="mx-11">Quantity</p>
          <p class="mx-11">Price</p>
        </div>
        <div class="border-2 border-slate-300 my-2 mx-10"></div>
        {medicines.map((med) => {
          const { id, medname, manufacturer, mfgdate, expdate, qty, price } =
            med;
          return (
            <div>
              <div class="text-lg flex flex-row justify-center  my-8 " key={id}>
                <p class="mx-14">{medname}</p>
                <p class="mx-14">{manufacturer}</p>
                <p class="mx-14">{mfgdate}</p>
                <p class="mx-14">{expdate}</p>
                <p class="mx-14">{qty}</p>
                <p class="mx-14">{price}</p>
              </div>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Try;

//  name="price"
//               value={med.price}
//               onChange={handleChange}