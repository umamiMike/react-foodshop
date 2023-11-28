import type { Cart, MenuItemProps, ShopProps } from "./types"


export const menuItems: MenuItemProps[] = [
  {
    image: 'images/burrito.png',
    name: 'Ground Beef Burrito',
    description: 'Everything you want after a long day',
    amt: 5.99,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'extra cheese', amt: 0.99 },
      { name: 'guac', amt: 3.99 },
    ],
  },
  {
    image: 'images/burrito.png',
    name: 'Chicken Burrito',
    description: 'Spicy or mild, melt-in-your-mouth good ',
    amt: 6.99,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'extra cheese', amt: 0.99 },
      { name: 'guac', amt: 3.99 },
    ],
  },
  {
    name: 'Taco',
    image: 'images/taco.png',
    description: 'shredded beef or chicken with cheese and salsa',
    amt: 2.0,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'rice and beans', amt: 2.99 },
      { name: 'chilis', amt: 2.95 },
      { name: 'grilled onions', amt: 0.95 },
      { name: 'grilled red onions', amt: 0.95 },
      { name: 'extra dope cheese', amt: 0.95 },
      { name: 'grilled onions', amt: 0.95 },
    ],
  },
  {
    image: '',
    name: 'an item to sell',
    description: 'a description of the item',
    amt: 5.99,
    toppings: [
      { name: 'topping 1', amt: 1.99 },
      { name: 'topping 2', amt: 0.99 },
      { name: 'topping 3', amt: 3.99 },
    ],
  },
  {
    image: 'images/extreme-burrito.png',
    name: 'Burrito Extreme',
    description:
      'The word extreme was invented for this Burrito, Loaded with all the goods',
    amt: 3.50,
    toppings: [
      { name: 'sour cream', amt: 1.99 },
      { name: 'rice and beans', amt: 2.99 },
      { name: 'chilis', amt: 2.95 },
      { name: 'grilled onions', amt: 0.95 },
      { name: 'grilled red onions', amt: 0.95 },
      { name: 'extra dope cheese', amt: 0.95 },
      { name: 'grilled onions', amt: 0.95 },
    ],
  },
];


export const shopInfo: ShopProps = {
  shop_name: 'none',
  shop_description: 'A description of the shop',
  shop_splash_img: '',
  selected: { price: 0, name: '', toppings: [] },
  cart: { price: 0, name: '', toppings: [] },
  menuItems,
};


export const cart: Cart = {
  selected: { price: 0, name: '', toppings: [] },
  cart: { price: 0, name: '', toppings: [] },
};
