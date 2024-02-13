import React from 'react'

export const Characters = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col w-screen items-center mt-5 p-10 gap-3 h-[500px] overflow-y-scroll">
      {data.docs.map((character, index) => {
        return <div className='hover:font-bold cursor-pointer' key={index}>{character.name}</div>;
      })}
    </div>
  )
}
