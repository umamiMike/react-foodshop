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

  if (state.selected.name === "") return (<div/>)

  return (
    <div key="555" className="overlay">
      <div className="flex flex-col w-1/3 p-2 bg-gray-200 shadow-md gap-2" >
        <div className="">
          <div className="flex justify-between flex-auto m-4">
            <div>
              <h3 className="text-2xl">
                {state.selected.name}
              </h3>
            </div>
          <button
            className="uppercase"
            type="button"
            onClick={() => dispatch({ type: 'CANCEL_ORDER' })}
          >
            <IoIosCloseCircleOutline size="18px"/>
          </button>
        </div>
        </div>
        <div className="w-full mb-4 grid gap-2">{Toppings}</div>
        <button
          type="button"
          className="w-1/3 font-bold bg-orange-300 rounded-full "
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
