import React from 'react'

function ContactInput({title}) {
    return (
        <div className='flex flex-col ml-20 mt-5'>
            <label className='font-bold mb-2'>{title}</label>
            <input type="text" className='w-60 h-8 border  border-gray-200500'/>
        </div>
    )
}

export default ContactInput;
