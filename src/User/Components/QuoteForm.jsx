import React, { useState } from "react";

const QuoteForm = () => {
  const [selected, setSelected] = useState(false);
  const handleSelected = (item) => {
    setSelected(item);
  };
  return (
    <>
      <div className="">
        <div className="prouct-category flex flex-col m-4 gap-2 ">
          <h1 className="">Product Category:</h1>
          <div className="flex gap-2 items-center">
            {["Herbal", "Cosmetics", "FMCG"].map((item, i) => (
              <div
                onClick={() => handleSelected(item)}
                className={
                  selected === item
                    ? "bg-green-800 text-white w-full rounded-sm text-center cursor-pointer  duration-300 shadow-sm"
                    : "border w-full rounded-sm text-center border-green-800 cursor-pointer"
                }
                key={i}
              >
                <li className="list-none">{item}</li>
              </div>
            ))}
          </div>
        </div>
        <div className="form-container overflow-y-auto">
          <form className="p-4 space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Your Email</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Your Contact</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Company Name</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Minimum Quantity (Pcs)</label>
              <input
                type="text"
                className="w-full border h-9 border-gray-300 outline-none rounded-md px-2 placeholder:px-2"
                id="name"
                placeholder="enter your name"
              />
            </div>
            <div className="textarea flex flex-col">
              <label htmlFor="textarea">Yor Message</label>
                <textarea placeholder="enter your query" rows="4" className="border rounded-sm border-green-800"></textarea>
            </div>
           <button type="submit" className="px-6 py-2 bg-green-800 hover:bg-green-700 duration-300 text-white">
            Submit Form
           </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuoteForm;
