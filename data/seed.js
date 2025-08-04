const mongoose = require("mongoose");
const Product = require("../models/Product");

const products = [
  {
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
    image: "/images/burger-11.jpg",
  },
  {
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
    image: "/images/burger-12.jpg",
  },
  {
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
    image: "/images/burger-13.jpg",
  },
  {
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
    image: "/images/burger-14.jpg",
  },
  {
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
    image: "/images/burger-15.jpg",
  },
  {
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
    image: "/images/burger-16.jpg",
  },
  {
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
    image: "/images/burger-17.jpg",
  },
  {
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    image: "/images/burger-18.jpg",
  },
  {
    title: "BBQ Chicken",
    paragraph: "Grilled chicken breast, BBQ sauce, lettuce, pickles, onion",
    rating: 4.2,
    price: 94.99,
    image: "/images/burger-11.jpg",
  },
  {
    title: "Buffalo Wings",
    paragraph: "Chicken wings, buffalo sauce, celery, ranch dip",
    rating: 4.7,
    price: 39.99,
    image: "/images/burger-12.jpg",
  },
  {
    title: "Chicken Tenders",
    paragraph: "Crispy chicken strips, honey mustard, fries",
    rating: 4.3,
    price: 56.95,
    image: "/images/burger-13.jpg",
  },
  {
    title: "Cheeseburger Wrap",
    paragraph: "Beef patty, cheddar cheese, lettuce, pickles, wrapped in a tortilla",
    rating: 4.0,
    price: 79.99,
    image: "/images/burger-14.jpg",
  },
  {
    title: "Falafel Pita",
    paragraph: "Falafel balls, hummus, mixed greens, tomatoes, cucumber in pita",
    rating: 4.1,
    price: 65.3,
    image: "/images/burger-15.jpg",
  },
  {
    title: "Chicken Caesar Wrap",
    paragraph: "Grilled chicken, Caesar dressing, lettuce, parmesan cheese",
    rating: 4.6,
    price: 80.75,
    image: "/images/burger-16.jpg",
  },
  {
    title: "Beef Burrito",
    paragraph: "Ground beef, rice, beans, cheese, sour cream, wrapped in a flour tortilla",
    rating: 4.4,
    price: 85.99,
    image: "/images/burger-17.jpg",
  },
  {
    title: "Fish Tacos",
    paragraph: "Grilled fish, cabbage, salsa, avocado, lime",
    rating: 4.3,
    price: 79.99,
    image: "/images/burger-18.jpg",
  },
  {
    title: "Cheese Fries",
    paragraph: "Crispy fries, melted cheddar cheese, bacon bits, ranch sauce",
    rating: 4.8,
    price: 45.99,
    image: "/images/burger-11.jpg",
  },
  {
    title: "Sweet Potato Fries",
    paragraph: "Crispy sweet potato fries with dipping sauce",
    rating: 4.5,
    price: 39.5,
    image: "/images/burger-12.jpg",
  },
  {
    title: "Spicy Veggie Burger",
    paragraph: "Spicy patty, avocado, lettuce, tomato, jalapenos",
    rating: 4.0,
    price: 79.95,
    image: "/images/burger-13.jpg",
  },
  {
    title: "Mushroom Swiss Burger",
    paragraph: "House patty, Swiss cheese, mushrooms, lettuce, tomato",
    rating: 4.6,
    price: 92.75,
    image: "/images/burger-14.jpg",
  },
  {
    title: "Mango Chicken Salad",
    paragraph: "Grilled chicken, mango, mixed greens, avocado, vinaigrette",
    rating: 4.2,
    price: 72.5,
    image: "/images/burger-15.jpg",
  },
  {
    title: "Pulled Pork Sandwich",
    paragraph: "Pulled pork, BBQ sauce, coleslaw, pickles",
    rating: 4.5,
    price: 85.99,
    image: "/images/burger-16.jpg",
  },
  {
    title: "Veggie Wrap",
    paragraph: "Grilled vegetables, hummus, mixed greens, tomato, cucumber",
    rating: 3.9,
    price: 68.25,
    image: "/images/burger-17.jpg",
  },
  {
    title: "BBQ Ribs",
    paragraph: "Tender ribs, BBQ sauce, cornbread, coleslaw",
    rating: 4.8,
    price: 120.75,
    image: "/images/burger-18.jpg",
  },
  {
    title: "Steak Sandwich",
    paragraph: "Grilled steak, garlic butter, lettuce, tomato, onions, mayo",
    rating: 4.7,
    price: 110.5,
    image: "/images/burger-11.jpg",
  },
];

mongoose.connect("mongodb://127.0.0.1:27017/Food-App").then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Database seeded!");
  mongoose.disconnect();
});
