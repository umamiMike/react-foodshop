## React foodshop

This is the front-end client demo for the application
the Elixir graphQL API can be found at [umamiMike/fooshop-api](https://github.com/umamiMike/foodshop-api)
This is a toy implementation of a doordash-like interface

## Basic User Stories

- You are presented with a list of items to purchase
- If you select an item, you can add a number of toppings to the item
- clicking the add to order shows a cart component
  - with formatted text for price

Currently, the inital data, modeling the store information, items, and toppings, can be found in the [initialState.tsx](./src/initialState.tsx)
Except for the Shop name and info, which is based on a query from to the api.

## Features
- converted to Typescript
I have implemented a basic functioning [apollo graphql client](https://new.apollographql.com/)
- [react useContext](https://react.dev/reference/react/useContext) and  [react useReducer](https://react.dev/reference/react/useReducer) to drive various parts of the UI based on the state of the application
- uses TailwindCSS for styling

### Next Steps

- ADD: admin interface where you can
  - add items
  - add toppings to those items
- ADD: ability to purchase multiple items
