import React, {useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

function Navbar() {
const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left side */}
        <div className='flex items-center'>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Munch <span className='font-bold'>Hub</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] hover:cursor-pointer'>
                <p id='Delivery' className='{delivery} text-white rounded-full p-2'>Delivery</p>
                <p id='Pickup'>Pickup</p>
            </div>
        </div>


        {/* Search Input */}

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search Foods'/>

        </div>

    </div>
  )
}

export default Navbar