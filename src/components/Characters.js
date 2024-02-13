import React from 'react'
import { useState } from 'react';

export const Characters = (props) => {
  
const [char, setChar] = useState('')
const mappedList = data.docs.filter(element => {
  if (char == ''){
    return true
  }
  if (element.includes(char)){
    return true
  }
  return false
})
  const { data } = props;
  return (
    <div className="flex flex-col w-screen items-center mt-5 p-10 gap-3 h-[500px] overflow-y-scroll">
     <input className='border border-black rounded-md h-5 ' type="text" />
    
    {mappedList.map((char, index) => {
      return <div key={index}>
        {}
      </div>
    
      
    })}
    </div>
  )
}
