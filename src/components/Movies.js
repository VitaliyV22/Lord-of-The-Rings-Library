import React from "react";

export const Movies = (props) => {
  const { data } = props;

  return (
    <div>
      <div className="text-white w-screen h-[750px] gap-4 overflow-y-scroll">
        <div className="text-center  lg:grid lg:grid-cols-4 justify-center items-center m-5 mt-5 gap-8 bg-opacity-10 ">
          {data.docs.map((movie, index) => {
            const keys = Object.keys(movie).filter((element) => {
              if (element == "name" || element == "_id") {
                return false;
              }
              return true;
            });

            return (
              <div className="cursor-pointer" key={index}>
                <h1 className="text-2xl r bg-black border-gray-500 h-auto  rounded-t-xl  font-bold">
                  {" "}
                  {movie.name}
                </h1>
                <div className="border hover:shadow-xl hover:shadow-black flex justify-center items-center flex-col border-gray-500 rounded-b-xl  bg-slate-200 bg-opacity-30 h-[15rem]" >
                  {keys.map((title) => {
                    return (
                      <div className="text-md text-center" key={title}>
                        <p className="uppercase">
                          {" "}
                          {title} :{movie[title]}{" "}
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
