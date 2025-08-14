import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ColculatorComp = () => {
  return (
    <div className="flex flex-col gap-2 bg-white  p-15 rounded-xl font-[Urbanist]">
      <h1 className="text-2xl font-bold">Car Loan Calculator</h1>
      <p className="text-lg font-light text-gray-400">
        Estimate your monthly auto loan payments with this calculator.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-5 py-10">
        <div className="flex flex-col gap-4 justify-baseline w-full">
          <div className="flex flex-col justify-baseline gap-2">
            <p className="text-sm font-light">Price of vehicle</p>
            <input
              type="text"
              placeholder="$20.000"
              className="text-lg font-light border border-gray-300 rounded-lg py-2 px-4 outline-0"
            />
          </div>
          <div className="flex flex-col justify-baseline gap-2">
            <p className="text-sm font-light">Terms</p>
            <input
              type="text"
              placeholder="12 months"
              className="text-lg font-light border border-gray-300 rounded-lg py-2 px-4 outline-0"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-baseline w-full">
          <div className="flex flex-col justify-baseline gap-2">
            <p className="text-sm font-light">Interest rate</p>
            <input
              type="text"
              placeholder="5%"
              className="text-lg font-light border border-gray-300 rounded-lg py-2 px-4 outline-0"
            />
          </div>
          <div className="flex flex-col justify-baseline gap-2">
            <p className="text-sm font-light">Down payment</p>
            <input
              type="text"
              placeholder="$12,000"
              className="text-lg font-light border border-gray-300 rounded-lg py-2 px-4 outline-0"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-lg font-bold">Down payment ammout</p>
          <p className="text-lg font-bold">Amount financed</p>
          <p className="text-lg font-bold">Monthly payment</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-lg font-bold">$12,000</p>
          <p className="text-lg font-bold">$800,00</p>
          <p className="text-lg font-bold text-green-500">$480,00</p>
        </div>
      </div>
          <button className='text-xl font-bold bg-green-500 w-full py-3 mt-5 rounded-lg cursor-pointer hover:bg-green-600'>Apply for a loan
              <ArrowForwardIcon fontSize='meduim' style={{color:"black"}}/>
      </button>
    </div>
  );
}

export default ColculatorComp