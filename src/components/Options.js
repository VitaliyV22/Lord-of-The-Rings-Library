import React from "react";
import styles from "./options.module.css"

export const Options = (props) => {
  const { selection, setSelection } = props;
  const options = ["character", "book", "movie", "quote"];

  console.log("SELECTION VALUE: ", selection);
  return (
    <div>
      <div className=" font-[MedivalSharp] flex justify-bewteen w-screen bg-black gap-10 items-center">
        <div>
          <h1 className=" font-medium text-white rounded-md p-2 text-center text-4xl ">Lord of The Rings Librarian</h1>
        </div>
        <div className="flex gap-5  text-2xl">
          {options.map((option, index) => {
            return (
              <button  onClick={setSelection(option)}
                className= {`${option === selection ? styles.selectedButton : styles.nonSelectedButton}`}
                key={index}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
