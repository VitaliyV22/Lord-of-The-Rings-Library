import React from "react";

export const Movies = (props) => {
  const { data } = props;

  return (
    
    <div className="flex flex-col w-screen items-center mt-5 p-10 gap-3 h-[500px] overflow-y-scroll">
      {data.docs.map((movie, index) => {

        const keys= Object.keys(movie).filter(element => {
          if (element == 'name' || element == '_id'){
            return false 
          }return true
        })
        
        return <div  key={index}>
         <h1 className='hover:font-bold cursor-pointer'> {movie.name}</h1> 
         {keys.map(title => {
            return (
              <div key= {title}>
                <p> {title} :{movie[title]} </p>
              </div>
            )
         })}
         </div>;
      })}
    </div>
  );
};
