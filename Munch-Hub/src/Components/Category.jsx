import React from 'react'
import { categories } from '../data/data'

const Category = () => {
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-yellow-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            {/* Categories */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((item, index) => (
                    <div key={index} className='bg-gray-100'>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Category