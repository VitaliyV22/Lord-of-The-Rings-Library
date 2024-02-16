import React, { useState } from "react";

export const Quotes = (props) => {
  const { data } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuotes = data.docs.filter(
    (quote) =>
      quote.dialog &&
      quote.dialog.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <input
          className="text-center h-5 border text-white border-black rounded-lg px-2 py-4 bg-black hover:shadow-md  "
          type="text"
          value={searchTerm}
          placeholder="Search Quote"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="text-white w-screen h-[750px] gap-4 overflow-y-scroll ">
        <div className="text-center lg:grid lg:grid-cols-3 justify-center items-center m-5 mt-8 gap-8 bg-opacity-10 ">
          {filteredQuotes.map((quote, index) => (
            <div
              className="text-2xl italic bg-black bg-opacity-30 cursor-pointer hover:shadow-xl hover:shadow-black border-gray-500 h-auto  rounded-xl  font-bold"
              key={index}
            >
              "{quote.dialog}
              "
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
