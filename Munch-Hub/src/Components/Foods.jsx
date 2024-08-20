import React, { useState } from 'react'

function Foods() {
  const Food = () => {
  
  const [foods, setFoods] = useState(data);

  // Filter by Type burgers/pizza/etc...
  const filterType = (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category
        })
    )
  }
  }
}

export default Foods