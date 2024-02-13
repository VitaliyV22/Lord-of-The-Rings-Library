import React from "react";

export const Books = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col items-center  mt-5 p-10 gap-3 h-[500px] text-white text-xl w-screen bg-white bg-opacity-10 ">
      {data.docs.map((book, index) => {
        return (
          <div className="hover:font-bold cursor-pointer" key={index}>
            {book.name}
          </div>
        );
      })}
    </div>
  );
};
