import React from 'react'

function Buttons(props) {
  return (
    <div className='space-x-2 flex items-center'>
      <button  onClick={props.onDelete} className='bg-blue p-1 text-white font-bold rounded-md hover:bg-button'>{props.Button_1}</button>
      <button onClick={()=>
      {props.onEdit([props.index])}}   className='bg-blue p-1 text-white font-bold rounded-md hover:bg-button'> {props.Button_2}</button>
    </div>
  )
}
 
export default Buttons