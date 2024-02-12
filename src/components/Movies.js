import React from "react";

export const Movies = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-col w-screen items-center border border-black ">
      {data.docs.map((movie, index) => {
        return <div key={index}>{movie.name}</div>;
      })}
    </div>
  );
};
