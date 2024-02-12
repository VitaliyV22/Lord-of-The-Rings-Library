import React from "react";

export const Options = (props) => {
  const { selection, setSelection } = props;
  const options = ["character", "book", "movie", "quote"];

  console.log("SELECTION VALUE: ", selection);
  return (
    <>
      <div className=" font-[MedivalSharp] flex flex-col justify-center h-screen  gap-10 items-center">
        <div>
          <h1 className=" font-medium  text-4xl ">Lord of The Rings Library</h1>
        </div>
        <div className="flex gap-5">
          {options.map((option, index) => {
            return (
              <button onClick={setSelection(option)}
                className="border border-black rounded-md bg-opacity-25 bg-black text-white bg-[rg] font-bold p-2  hover:opacity-50"
                key={index}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
