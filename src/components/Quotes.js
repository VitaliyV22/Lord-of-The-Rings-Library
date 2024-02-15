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
      <div><h1 className="text-center"></h1></div>
      <div className="flex flex-col text-white items-center p-10 gap-3 h-[800px] overflow-y-scroll">
        <div className="text-center flex flex-col mt-5 gap-10 bg-white bg-opacity-10 w-[90%]">
          {filteredQuotes.map((quote, index) => (
            <div className="hover:font-bold cursor-pointer" key={index}>
              {quote.dialog}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
