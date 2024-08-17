import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'> {/* Card 1 */}
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2 '>Buy One, Get One Free deals</p>
                <p className='px-2'>Updated Weekly</p>
                <button className='border-white bg-white'></button>
            </div>

        </div>
    </div>
  )
}

export default HeadlineCards