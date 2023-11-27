import type { ShopProps, MenuItemProps, ToppingProp } from '../types'

export type Action = {
  type:
  | 'START_ORDER'
  | 'ADD_TOPPING'
  | 'REMOVE_TOPPING'
  | 'CANCEL_ORDER'
  | 'ADD_TO_CART'
  | 'PLACE_ORDER'

  payload?: MenuItemProps | ToppingProp
}

const emptyCart = { name: '', price: 0, toppings: [] }

export const shopReducer = (state: ShopProps, action: Action) => {
  switch (action.type) {
    case 'START_ORDER':
      const n: any = {
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
          price: state.selected.price + action.payload.amt,
          toppings: state.selected.toppings.concat([action.payload]),
        },
      }
    case 'REMOVE_TOPPING':
      return {
        ...state,
        selected: {
          ...state.selected,
          price: state.selected.price - action.payload.amt,
          toppings: state.selected.toppings.filter(
            (t) => t.name !== action.payload.name
          ),
        },
      }
    case 'ADD_TO_CART':
      return { ...state, cart: state.selected, selected: { ...emptyCart } }
    case 'CANCEL_ORDER':
      const con: ShopProps = { ...state, selected: emptyCart, cart: emptyCart }
      return con
    case 'PLACE_ORDER':
      return { ...state }
    default:
      return state
  }
}
