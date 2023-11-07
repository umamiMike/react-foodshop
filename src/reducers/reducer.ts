import type { Shop } from '../baseState'

export type Action = {
  type:
    | 'START_ORDER'
    | 'ADD_TOPPING'
    | 'REMOVE_TOPPING'
    | 'CANCEL_ORDER'
    | 'ADD_TO_CART'
    | 'PLACE_ORDER'

  payload: any
}

const emptyCart = { name: '', price: 0, toppings: [] }

export const shopReducer = (state: Shop, action: Action) => {
  switch (action.type) {
    case 'START_ORDER':
      const n: Shop = {
        ...state,
        selected: {
          ...action.payload,
          toppings: [],
          price: action.payload.amt,
        },
      }
      return n
    case 'ADD_TOPPING':
      return {
        ...state,
        selected: {
          ...state.selected,
          price: state.selected.price + action.payload.value,
          toppings: state.selected.toppings.concat([action.payload.name]),
        },
      }
    case 'REMOVE_TOPPING':
      return {
        ...state,
        selected: {
          ...state.selected,
          price: state.selected.price - action.payload.value,
          toppings: state.selected.toppings.filter(
            (t) => t !== action.payload.name
          ),
        },
      }
    case 'ADD_TO_CART':
      return { ...state, cart: state.selected, selected: { ...emptyCart } }
    case 'CANCEL_ORDER':
      const con: Shop = { ...state, selected: emptyCart, cart: emptyCart }
      return con
    case 'PLACE_ORDER':
      console.log("i am fookin placing my order")
      console.log(state.cart)
      return {...state}
    default:
      return state
  }
}
