import React from "react";
import { useState } from "react";

export const Characters = (props) => {
  const { data } = props;

  const [char, setChar] = useState("");
  const mappedList = data.docs.filter((element) => {
    if (char == "") {
      return true;
    }
    if (element['name'].includes(char)) {
      return true;
    }
    return false;
  });

  return (
    <div className="flex text-white  flex-col w-screen items-center  p-5  h-[800px] overflow-y-scroll ">
      <div><input className=" bg-white bg-opacity-10 text-center h-5 " type="text" value={char} placeholder="Character Name" onChange={(e) => {
        setChar(e.target.value)
      }}/></div>
      <div className="text-center flex flex-col mt-5  gap-10 bg-white bg-opacity-10 w-[90%]">
      {mappedList.map((char, index) => {
        const keys = Object.keys(char).filter((element) => {
          if (element == "name" || element == "_id" || element == "wikiUrl") {
            return false;
          }
          if (!char[element]) {
            return false;
          }
          return true;
        });

        return (
          <div key={index}>
            <h1 className="text-2xl bg-white bg-opacity-10"> {char.name} </h1>
            {keys.map((title) => {
              return (
                <div key={title}>
                  <p>
                    {" "}
                    {title} :{char[title]}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
      </div>
      
    </div>
  );
};
