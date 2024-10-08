import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card 1 */}
        <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2 '>Buy One, Get One Free deals</p>
                <p className='px-2'>Updated Weekly</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>See more</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                 src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                 alt='A delicious burger and fries served on a white plate.'/>
        </div>
        {/* Card 2 */}
        <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>See More</button>
            </div>
            <img className='max-h-[150px] md:max-h-[200px] w-full object-cover rounded-xl'
                 src='https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                 alt='A group of people toasting at a restaurant.'/>
        </div>
        {/* Card 3 */}
        <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>We have desserts too.</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>See More</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                 src='https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                 alt='Delicious cakes topped wth berries on a plate.'/>
        </div>
    </div>
  )
}

export default HeadlineCards