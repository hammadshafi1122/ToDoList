import React, { useState } from 'react'
import Notes from './Notes'
import { v4 as uuidv4 } from 'uuid';
uuidv4();


function Input() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const handleDelete =(id)=>
  {
    const updatedNotes = maintask.filter(t => t.id !== id);
    setmaintask(updatedNotes);
  }




  const handleSubmit = (e)=>
  {
    e.preventDefault()
    let uploadNote = [...maintask , {id:uuidv4(), title, desc}]
    setmaintask(uploadNote)
    setdesc("")
    settitle("")

    
    console.log(maintask)
  }
 
 


  return (
    <>
    <div className=' p-3 flex justify-center '>
     
      <form className='bg-main  flex  rounded-lg  p-3  m-2 space-x-2 justify-around w-128 hover:bg-gray' onSubmit={handleSubmit}>
      <div className='flex flex-col space-y-2'>
        <div className='flex space-x-3'>
        <span className='px-8 text-white font-bold '>Title:</span>
        
        <input className=' rounded-md p-2 ' type='text' placeholder='Type Title'  value={title} onChange={(e)=>
        {
          settitle(e.target.value)
        }}></input>
        </div>
      
        <div className='flex space-x-5'>
        <span className=' text-white font-bold '>Description:</span>
        <input className='rounded-md p-2 ' type='text' placeholder='Type Description' value={desc} onChange={(e)=>
        setdesc(e.target.value)}></input>
        </div>
      </div>
        
      <button className='bg-blue h-10 mt-5 px-1 rounded-md text-white font-bold hover:bg-button '>Submit</button>
      </form>
      </div>

     
    <h1 className='bg-gray text-white font-bold text-center text-2xl p-2'>To-Do list</h1>
    <div className='flex items-center flex-col'>
    {maintask ==0 ? (

        
<div className='bg-blue'><h1 className='text-center my-28 font-bold '>NO THING TO DISPLAY</h1></div>

):

(
  
    maintask.map((t, i)=>
        
    

    (
            <Notes   
            key={t.id}
            id={t.id}
            title= {t.title}
            description={t.desc}
            onDelete={(e)=> handleDelete(t.id)}

            />
        )
        
        
        )
        
)}


    </div>

      


        
    </>


  )
}

export default Input