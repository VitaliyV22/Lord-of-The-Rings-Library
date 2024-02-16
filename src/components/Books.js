import React from "react";
import FellowShip from "../public/Fellowship of the ring.jpg"
export const Books = (props) => {
  const { data } = props;

  // Sample array of descriptions
  const descriptions = [
    "A thrilling adventure through the unknown.",
    "A heartwarming tale of friendship and courage.",
    "An epic journey of self-discovery.",
    // Add more descriptions as needed
  ];

  return (
    <div>
      <div className="lg:grid absolute lg:grid-row-3 gap-3 justify-center h-[750px] text-white text-xl w-screen ">
        {data.docs.map((book, index) => {
          return (
            <div
              className="border hover:shadow-xl text-center hover:shadow-blackf border-gray-500 rounded-t-xl  bg-slate-200 bg-opacity-30 h-[15rem]"
              key={index}
            >
              <h1 className="text-2xl bg-black border border-black rounded-t-xl">
                {book.name}
              </h1>
              <p className="p-4">{descriptions[index % descriptions.length]}</p> {/* Use index to cycle through descriptions */}
            </div>
          );
        })}
      </div>
      <img  alt="" />
    </div>
  );
};
