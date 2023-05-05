import React, { useState } from "react";

const Discount = ({ productsField, setProductsField, data, index }) => {
  const [toggle, settoggle] = useState(false);
  const handleDiscount = (e, index) => {
    let { name, value } = e.target;
    let newArray = [...productsField];
    newArray[index] = { ...newArray[index], [name]: value };
    setProductsField(newArray);
  };
  return (
    <div>
      <button
        onClick={() => {
          settoggle(true);
        }}
        className="outline-none border-2 px-4 py-1 bg-primary text-white rounded-sm ml-6 hover:text-primary hover:bg-white hover:border-primary transition-all"
        style={{
          display: toggle ? "none" : "block",
        }}
      >
        Add Discount
      </button>

      <div
        className="ml-4 w-full justify-between items-center"
        style={{
          display: !toggle ? "none" : "flex",
        }}
      >
        <input
          type="text"
          value={data?.discount}
          onChange={(e) => handleDiscount(e, index)}
          name="discount"
          placeholder="Discount"
          className="px-2 py-1 bg-white items-center shadow-sm border text-sm outline-none"
        />
        <select
          className="px-2 py-1 border text-sm outline-none"
          name="typeofdis"
          value={data?.typeofdis}
          onChange={(e) => handleDiscount(e, index)}
        >
          <option hidden></option>
          <option value="% off"> % off</option>
          <option value="flat off"> flat off</option>
        </select>
      </div>
    </div>
  );
};

export default Discount;
