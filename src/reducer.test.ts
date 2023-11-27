// sum.test.js
import { expect, test } from 'vitest'
import { shopReducer, type Action } from './reducers/reducer'
import { shopInfo } from './baseState'
import { MenuItemProps } from './types'

test('starting an order', () => {
  const initialState = shopInfo;
  const item: MenuItemProps = {
    name: 'taco',
    amt: 1,
    description: 'this is a taco',
    toppings: [{ name: 'guac', amt: 1 }],
    image: 'foo'
  }
  /*
  const action = {
    type: 'START_ORDER',
    payload: {
      selected: { price: 100, name: 'thingy', toppings: [{name: 'guac', amt: 1}] },
    }
  } as Action;
  */
  const action = { type: 'START_ORDER', payload: item } as Action
  const newState = shopReducer(initialState, action);
  expect(newState.selected.price).toEqual(1);
})