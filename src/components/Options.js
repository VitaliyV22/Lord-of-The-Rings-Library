import React from "react";

export const Options = () => {
  const options = ["character", "book", "movie", "quote"];
  return (
    <div className="md:flex  justify-center h-screen  gap-10 items-center">
        <div></div>
      {options.map((option, index) => {
        return <button key={index}>{option}</button>;
      })}
    </div>
  );
};
