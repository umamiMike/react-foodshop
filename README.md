## React foodshop

This is a toy implementation of a doordash-like interface

You are presented with a list of items to purchase
If you select an item, you can add a number of toppings to the item

Currently, the inital data, modeling the store information, items, and toppings, can be found in the [baseState.tsx](./src/baseState.tsx)

### Demonstrates

[react useContext](https://react.dev/reference/react/useContext)
in concert with [react useReducer](https://react.dev/reference/react/useReducer)
to drive various parts of the UI based on the state of the application

I have implemented a basic functioning [apollo graphql client](https://new.apollographql.com/)

### Next Steps

- ADD: ability to purchase multiple items
- ADD: admin interface where you can
  - add items
  - add toppings to those items
- ADD: meaningful  feedback for having hit the place order button
