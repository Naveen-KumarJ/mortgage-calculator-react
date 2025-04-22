import React, { useState } from "react";

function FormComponent({ data, setData }) {
  function handleEvent(e) {
    const { name, value } = e.target;

    setData((prev) => {
      let updatedData = { ...prev };

      if (name === "homeValue") {
        updatedData.homeValue = Number(value);
        if (updatedData.downPayment > updatedData.homeValue) {
          updatedData.downPayment = updatedData.homeValue;
        }
        updatedData.loanAmount =
          updatedData.homeValue - updatedData.downPayment;
      } else if (name === "downPayment") {
        updatedData.downPayment = Number(value);
        updatedData.loanAmount =
          updatedData.homeValue - updatedData.downPayment;
      } else if (name === "loanAmount") {
        updatedData.loanAmount = Number(value);
        updatedData.downPayment =
          updatedData.homeValue - updatedData.loanAmount;
      } else {
        updatedData[name] = value;
      }

      return updatedData;
    });
  }

  return (
    <section className="text-neutral-300 flex-1 rounded-xl border-1 border-neutral-200">
      <form className="p-2 flex flex-col gap-3 justify-center h-full">
        <label htmlFor="homeValue" className="border-b-2 py-2">
          <h2 className="form-title">Home Value</h2>
          <h4 className="text-sm font-semibold">₹ {data.homeValue}</h4>
          <input
            type="range"
            id="homeValue"
            name="homeValue"
            value={data.homeValue}
            className="w-full"
            min={1000}
            max={10000}
            step={100}
            onChange={handleEvent}
          />
          <div className="flex justify-between text-xs">
            <span>₹ 1000</span>
            <span>₹ 10000</span>
          </div>
        </label>
        <label htmlFor="downPayment" className="border-b-2 py-2">
          <h2 className="form-title">Down Payment</h2>
          <h4 className="text-sm font-semibold">₹ {data.downPayment}</h4>
          <input
            type="range"
            id="downPayment"
            name="downPayment"
            value={data.downPayment}
            className="w-full"
            min={0}
            max={data.homeValue}
            step={100}
            onChange={handleEvent}
          />
          <div className="flex justify-between text-xs">
            <span>₹ 0</span>
            <span>₹ {data.homeValue}</span>
          </div>
        </label>
        <label htmlFor="loanAmount" className="border-b-2 py-2">
          <h2 className="form-title">Loan Amount</h2>
          <h4 className="text-sm font-semibold">₹ {data.loanAmount}</h4>
          <input
            type="range"
            id="loanAmount"
            name="loanAmount"
            value={data.loanAmount}
            className="w-full"
            min={0}
            max={data.homeValue}
            step={100}
            onChange={handleEvent}
          />
          <div className="flex justify-between text-xs">
            <span>₹ 0</span>
            <span>₹ {data.homeValue}</span>
          </div>
        </label>
        <label htmlFor="interestRate" className="border-b-2 py-2">
          <h2 className="form-title">Interest Rate</h2>
          <h4 className="text-sm font-semibold">% {data.interestRate}</h4>
          <input
            type="range"
            id="interestRate"
            name="interestRate"
            value={data.interestRate}
            className="w-full"
            min={2}
            max={18}
            onChange={handleEvent}
          />
          <div className="flex justify-between text-xs">
            <span>% 2</span>
            <span>% 18</span>
          </div>
        </label>
        <label htmlFor="tenure">
          <h2 className="form-title">Tenure</h2>
          <select
            id="tenure"
            name="tenure"
            value={data.tenure}
            className="text-sm font-semibold w-full p-2 border-1 rounded"
            onChange={handleEvent}
          >
            <option value="5" className="text-black">
              5 Years
            </option>
            <option value="10" className="text-black">
              10 Years
            </option>
            <option value="15" className="text-black">
              15 Years
            </option>
            <option value="20" className="text-black">
              20 Years
            </option>
            <option value="25" className="text-black">
              25 Years
            </option>
          </select>
        </label>
      </form>
    </section>
  );
}

export default FormComponent;
