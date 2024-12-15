import React from 'react'
const restaurants = [
    { id: 1, name: "McDonald's", isClose: true },
    { id: 2, name: "KFC", isClose: false },
    { id: 3, name: "Pizza Hut", isClose: true },

  ];

const Restaurant = () => {
    const closeRestaurants = restaurants.filter(restaurant => restaurant.isClose);
  return (
    <div>
      <h2>Restaurants</h2>
      {restaurants.map(restaurant => (
        <div key={restaurant.id}>
          <h4>{restaurant.name}</h4>
        </div>
      ))}

      <h2>Close Restaurants</h2>
      {closeRestaurants.map(restaurant => (
        <div key={restaurant.id}>
          <h4>{restaurant.name}</h4>
        </div>
      ))}
    </div>
  )
}

export default Restaurant
