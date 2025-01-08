import React from 'react'
import  { useState } from 'react'


export const ExpText = ({info,max = 100}) => {
    const [exp, setExp] = useState(false);
    if (info.length <= max) { <p>{info}</p> };
    const text = exp ? info : info.substring(0, max)

  return (
      <p >
          {text}... <button onClick={()=>setExp(!exp)} className='text-blue-600 text-[20px] hover:text-blue-700'> { exp ?  "less":"reade more"}</button>
    </p>
  )
}
