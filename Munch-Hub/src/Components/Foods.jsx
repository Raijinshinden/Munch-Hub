import React, { useState } from 'react'

  const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter by Type burgers/pizza/etc...
  const filterType = (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category;
        })
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price;
        })
    );
  };

  return (
    <div className='max-w-[1640] m-auto px-4 py-12'>
        <h1 className='text-yellow-500 font-bold text-4xl text-center mb-4'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setFoods(data)} className='m-1 border-yellow-500 border-2 text-yellow-500'>

                    </button>

                </div>
            </div>

        </div>

    </div>
  )

  }


export default Foods