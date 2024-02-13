import React from "react";

export const Movies = (props) => {
  const { data } = props;

  return (
    <div className="flex text-white flex-col w-screen items-center  p-5  h-[800px] overflow-y-scroll ">
      <div className="text-center flex flex-col mt-5  gap-10 bg-white bg-opacity-10 w-[90%]">
        {data.docs.map((movie, index) => {
          const keys = Object.keys(movie).filter((element) => {
            if (element == "name" || element == "_id") {
              return false;
            }
            return true;
          });

          return (
            <div key={index}>
              <h1 className="hover:font-bold cursor-pointer text-2xl bg-white bg-opacity-10 "> {movie.name}</h1>
              {keys.map((title) => {
                return (
                  <div className="" key={title}>
                    <p>
                      {" "}
                      {title} :{movie[title]}{" "}
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
