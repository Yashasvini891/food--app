import React from "react";

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image:
      "https://i0.wp.com/olivesandlamb.com/wp-content/uploads/2024/05/Chicken-Parmesan-Pizza-10-4x5-1.jpg",
    rating: "4.5",
    description:
      "Delicious cheesy pizzas with fresh toppings and crispy crust.",
  },
  {
    id: 2,
    name: "Burger Hub",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/dcq9nvf5vcyznk1bqjdx",
    rating: "4.2",
    description: "Juicy burgers with fresh veggies and special sauces.",
  },
  {
    id: 3,
    name: "Biryani House",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/lYTVn4BY2g2Ujdk8nMI9kg/348s.jpg",
    rating: "4.7",
    description: "Authentic spicy biryani cooked with rich flavors and aroma.",
  },
];

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between">
        <h1 className="text-xl font-bold text-orange-500">Foodie</h1>
        <div className="space-x-4">
          <button className="hover:text-orange-500">Home</button>
          <button className="hover:text-orange-500">Orders</button>
          <button className="hover:text-orange-500">Profile</button>
        </div>
      </nav>

      {/* Heading */}
      <h2 className="text-2xl font-semibold p-4">Restaurants Near You</h2>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {restaurants.map((res) => (
          <div key={res.id} className="bg-white rounded-xl shadow">
            <img
              src={res.image}
              alt={res.name}
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />

            <div className="p-2">
              <h3 className="font-bold text-sm">{res.name}</h3>
              <p className="text-gray-600 text-xs">⭐ {res.rating}</p>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                {res.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
