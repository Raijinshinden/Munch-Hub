import React, { useState } from 'react'
import { data } from '../data/data';

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
                    <button onClick={()=> setFoods(data)} className='m-1 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        All
                    </button>
                    <button onClick={()=> filterType('burger')} className='m-1 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        Burgers
                    </button>
                    <button onClick={()=> filterType('chicken')} className='m-1 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        Chickens
                    </button>
                    <button onClick={()=> filterType('salad')} className='m-1 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        Salads
                    </button>
                    <button onClick={()=> filterType('curry')} className='m-1 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        Curries
                    </button>
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Price Range</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=> filterPrice('$5')} className='m-2 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        $5
                    </button>
                    <button onClick={()=> filterPrice('$10')} className='m-2 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        $10
                    </button>
                    <button onClick={()=> filterPrice('$15')} className='m-2 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        $15
                    </button>
                    <button onClick={()=> filterPrice('$20')} className='m-2 border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white'>
                        $20
                    </button>
                </div>
            </div>
        </div>

        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index)=>(
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 hover:cursor-pointer'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-yellow-500 text-white py-1 px-2 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>



        </div>
    )
}


export default Food