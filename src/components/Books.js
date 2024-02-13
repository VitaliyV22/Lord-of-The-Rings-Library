import React from "react";

export const Books = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col items-center mt-5 p-10 gap-3 justify-center h-[500px] text-white text-xl w-screen bg-white bg-opacity-10 ">
      {data.docs.map((book, index) => {
        return (
          <div
            className="hover:font-bold cursor-pointer m-auto text-center"
            key={index}
          >
            <h1 className="text-2xl bg-white bg-opacity-20">{book.name}</h1>
          </div>
        );
      })}
    </div>
  );
};
