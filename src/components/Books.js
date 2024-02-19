import React, { useState } from "react";

export const Books = (props) => {
  const { data } = props;
  const [bookInfo, setbookInfo] =useState({

  })
 

  return (
    <div>
      <div className="flex gap-10 flex-col items-center justify-center h-[500px] text-white text-xl  ">
        {data.docs.map((book, index) => {
          return (
            <div
              className="border-black cursor-pointer"
              key={index}
            >
              <a className="text-2xl bg-black bg-opacity-50 border border-black rounded-t-xl">
              📚  {book.name}
              </a>
              <p></p>
              
            </div>
          );
        })}
    
        
      </div>
     
      <img  alt="" />
    </div>
  );
};
