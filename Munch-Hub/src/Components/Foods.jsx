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

    </div>
  )

  }


export default Foods