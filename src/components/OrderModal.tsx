import React, { useContext } from 'react'

import { IoIosCloseCircleOutline } from 'react-icons/io'
import { guid } from '../utils'
import { AppContext } from '../AppContext'
import { Topping } from './Topping'
import type { MenuItem, ToppingType } from '../baseState'

export function OrderModal() {
  const ctx = useContext(AppContext)
  const { state, dispatch } = ctx
  console.log(state.selected.name)

  const selected = state.menuItems.find(
    (el: MenuItem) => el.name === state.selected.name
  )
  // eslint-disable-next-line max-len
  const Toppings = selected?.toppings.map((t: ToppingType) => (
    <Topping key={guid()} topping={t} />
  ))  
  if(state.selected.name === "") return (<div>foo</div>)
  return (
    <div key="555" className="overlay">
      <div className="flex-row overflow-hidden bg-gray-100 shadow-md">
        <div className="w-full grid gap-2">
          <button
            className="w-5 h-5 p-1 uppercase"
            type="button"
            onClick={() => dispatch({ type: 'CANCEL_ORDER' })}
          >
            <IoIosCloseCircleOutline size="20px" />
          </button>
          <h3>
        {state.selected.name}
          </h3>
        </div>

        <div className="w-full grid gap-2">{Toppings}</div>
        <button
          type="button"
          className="px-4 m-2 font-bold bg-orange-300 rounded-full"
          onClick={() => {
            dispatch({ type: 'ADD_TO_CART' })
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  )
}
