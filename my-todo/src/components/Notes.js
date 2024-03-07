import React, { useState } from 'react'
import Buttons from './Buttons';
function TrueNotes(props) {
    const [editedTitle, setEditedTitle] = useState(props.title);
    const [editeddesc, setediteddesc] = useState(props.description)
  const [isEditing, setisEditing] = useState(true);


  const handleDelete =()=>
  {
    props.onDelete()

  }
  const handleSave =()=>
  {

    setisEditing(true)
    
    console.log("Save")
  }
  const handleCancel=()=>
  {
    setisEditing(false)

      setEditedTitle(props.title)
      setediteddesc(props.description)
  }

  const handleClick =()=>
{

    

    setisEditing(false)
    console.log("save")
}
  return (
    <>
        <div className='bg-main text-black  p-3  mt-4   rounded-lg flex justify-around space-x-2 w-128 hover:bg-gray'>
    <div className='space-y-2 '>
      <div className='flex'>
      <span className='px-8 text-white font-bold mx-3.5'>Title:</span> {isEditing ? (
            
              <input
              className=' rounded-md p-2 focus:outline-none'
              type='text'
              placeholder='Type Title'
              value={editedTitle}
              
            />
          ) : (
            <input
            className=' rounded-md p-2  '
            type='text'
            placeholder='Type Title'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
              
            />
          )}
      </div>
    
  <div className='flex'>  
  <span className='px-2 text-white font-bold mx-2.5'>Description:</span> 
  {
    isEditing ? 
    (
      <input
      className='rounded-md p-2  focus:outline-none '
      type='text'
      placeholder='Type Title'
      value={editeddesc}
      />
    )
    :
    ( 
      <input
      className='rounded-md p-2  '
      type='text'
      placeholder='Type Title'
      value={editeddesc}
      onChange={(e) => setediteddesc(e.target.value)}
        
      />
    )     
  } 
  </div>
      
    </div>

    {isEditing?
    (
      <Buttons
    Button_1="Delete"
    Button_2="Edit"
    onEdit={handleClick}
    onDelete={handleDelete}
    />
    
    )
  :
  (
    <Buttons
    Button_1="Save"
    Button_2="Cancel"
    onDelete={handleSave}
    onEdit={handleCancel}
    
    />
  )}
   
    
    
  </div>
    </>
  )
}

export default TrueNotes
