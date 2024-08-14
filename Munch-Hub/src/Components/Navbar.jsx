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

        </div>

    </div>
  )
}

export default Navbar