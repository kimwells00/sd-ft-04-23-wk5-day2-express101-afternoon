const express = require("express");
const app = express();
app.use(express.json());

// Create an empty array to store restaurant data
const restaurants = [{ name: "Uchi", style: "Asian", price: "$$$$" }];

// Routes go here

// Route to add a new restaurant
app.post("/add_restaurant", (req, res) => {
  const newRestaurant = req.body;
  restaurants.push(newRestaurant);
  res.send("restaurant added successfully");
  console.log(restaurants);
});
// Route to update an existing restaurant
app.put("/update_restaurant", (req, res) => {
  const updateRestaurant = req.body;
  for (let i = 0; i < restaurants.length; i++) {
    if ((updateRestaurant.name = restaurants[i].name)) {
      restaurants.splice(i, 1, updateRestaurant);
    }
  }
  res.send(restaurants);
  console.log(restaurants);
});

// Route to delete a restaurant
app.post("/delete_restaurant", (req, res) => {
  const filteredRestaurants = restaurants.filter(
    (resta) => resta.name !== req.body.name
  );
  restaurants = filteredRestaurants;
  res.send(restaurants);
});
// Route to get all restaurants
app.get("/get_restaurants", (req, res) => {
  res.send("viewing all restaurants");
  console.log(restaurants);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
