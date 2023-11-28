import React, { useContext } from 'react'

import { IoIosCloseCircleOutline } from 'react-icons/io'
import { guid } from '../utils'
import { AppContext } from '../AppContext'
import { Topping } from './Topping'
import type { ToppingProp, MenuItemProps } from '../types'

export function OrderModal() {
  const ctx = useContext(AppContext)
  const { state, dispatch } = ctx

  const selected = state.menuItems.find(
    (el: MenuItemProps) => el.name === state.selected.name
  )

  // eslint-disable-next-line max-len
  const Toppings = selected?.toppings.map((t: ToppingProp) => (
    <Topping key={t.name + guid()} topping={ t } />
    ))

  if (state.selected.name === "") return (<div/>)

  return (
    <div key="555" className="overlay">
      <div className="flex flex-col p-2 bg-gray-200 shadow-md sm:w-5/6 md:w-1/3 gap-2" >
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
