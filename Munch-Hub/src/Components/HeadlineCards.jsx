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
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
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
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Learn More</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                 src='https://images.pexels.com/photos/1267321/pexels-photo-1267321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                 alt='A large group of people having a conversation at a restaurant.'/>
        </div>
        {/* Card 3 */}
        <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div>

            </div>
            <img className=''/>
        </div>
    </div>
  )
}

export default HeadlineCards