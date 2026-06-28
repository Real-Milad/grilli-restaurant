import { menuImages } from "./imgData.js";
const { menu1, menu2, menu3, menu4, menu5, menu6 } = menuImages;

export const menu = [
  {
    id: 1, img: menu1, title: "Greek Salad", tag: "Seasonal", price: "$25.50", 
    info: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
  },
  {
    id: 2, img: menu2, title: "Lasagne", tag: "", price: "$40.00", 
    info: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
  },
  {
    id: 3, img: menu3, title: "Butternut Pumpkin", tag: "", price: "$10.00", 
    info: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
  },
  {
    id: 4, img: menu4, title: "Tokusen Wagyu", tag: "New", price: "$39.00", 
    info: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
  },
  {
    id: 6, img: menu6, title: "Opu Fish", tag: "", price: "$49.00", 
    info: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
  },
  {
    id: 6, img: menu5, title: "Olivas Rellenas", tag: "", price: "$25.00", 
    info: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper"
  },
]


// ---------------------------------------------------------------------------------------------------
import { featureImg } from "./imgData.js";
const { feature1, feature2, feature3, feature4 } = featureImg

export const feature = [
  {
    id: 100, img: feature1, title: "Hygienic Food",
    info: "Lorem Ipsum is simply dummy printing and typesetting."
  },
  {
    id: 200, img: feature2, title: "Fresh Environment",
    info: "Lorem Ipsum is simply dummy printing and typesetting."
  },
  {
    id: 300, img: feature3, title: "Skilled Chefs",
    info: "Lorem Ipsum is simply dummy printing and typesetting."
  },
  {
    id: 400, img: feature4, title: "Event & Party",
    info: "Lorem Ipsum is simply dummy printing and typesetting."
  },
]
// -----------------------------------------------------------------------------------------------