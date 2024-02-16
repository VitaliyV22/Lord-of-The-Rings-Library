import React from "react";
import { useState } from "react";

export const Characters = (props) => {
  const { data } = props;

  const [char, setChar] = useState("");

  const mappedList = data.docs.filter((element) => {
    const searchQuery = char.toLowerCase();
    const characterName = element["name"];

    if (!characterName) return false; // Check if characterName is undefined or null

    const lowerCharacter = characterName.toLowerCase();

    if (searchQuery === "") {
      return true;
    }
    if (lowerCharacter.includes(searchQuery)) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <div className="flex justify-center  m-5">
        <input
          className="text-center h-5 border text-white border-black rounded-lg px-2 py-4 bg-black hover:shadow-md  "
          type="text"
          value={char}
          placeholder="Character Name"
          onChange={(e) => {
            setChar(e.target.value);
          }}
        />
      </div>
      <div className=" text-white w-screen h-[750px] gap-4 overflow-y-scroll ">
        <div className="text-center lg:grid lg:grid-cols-4 justify-center items-center m-5 mt-5 gap-8 bg-opacity-10  ">
          {mappedList.map((char, index) => {
            const keys = Object.keys(char).filter((element) => {
              if (
                element == "name" ||
                element == "_id" ||
                element == "wikiUrl"
              ) {
                return false;
              }
              if (!char[element]) {
                return false;
              }
              return true;
            });

            return (
              <div>
                <h1 className="text-2xl bg-black border-gray-500 h-auto  rounded-t-xl  font-bold">
                  {" "}
                  {char.name}{" "}
                </h1>
                <div
                  className="border hover:shadow-xl hover:shadow-black flex justify-center items-center flex-col border-gray-500 rounded-b-xl  bg-slate-200 bg-opacity-30 h-[15rem]"
                  key={index}
                >
                  {keys.map((title) => {
                    return (
                      <div className="text-md text-center" key={title}>
                        <p className="uppercase">
                          {" "}
                          {title} :{char[title]}{" "}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
