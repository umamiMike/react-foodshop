// sum.test.js
import { expect, test } from 'vitest'
import { shopReducer, type Action } from './reducers/reducer'
import { shopInfo } from './initialState'
import { MenuItemProps, ToppingProp } from './types'

test('starting an order', () => {
  const initialState = shopInfo
  const item: MenuItemProps = {
    name: 'taco',
    amt: 1,
    description: 'this is a taco',
    toppings: [],
    image: 'foo',
  }

  const action = { type: 'START_ORDER', payload: item } as Action
  const newState = shopReducer(initialState, action)
  expect(newState.selected.price).toEqual(1)
  expect(newState.selected.toppings).toHaveLength(0)
})

test('add a topping', () => {
  const initialState = shopInfo
  const item: MenuItemProps = {
    name: 'taco',
    amt: 1,
    description: 'this is a taco',
    toppings: [],
    image: 'foo',
  }
  const action = { type: 'START_ORDER', payload: item } as Action
  const newState = shopReducer(initialState, action)
  const topping: ToppingProp = { name: 'good guac', amt: 3 }
  const addToppingAction = { type: 'ADD_TOPPING', payload: topping } as Action
  const addedToppingState = shopReducer(newState, addToppingAction)

  expect(addedToppingState.selected.toppings).toHaveLength(1)
})
