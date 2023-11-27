import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import type { ToppingProp } from '../types'

type Props = {
  topping: ToppingProp
}

export function Topping({ topping }: Props) {
  const { name, amt } = topping
  const { state, dispatch } = useContext(AppContext)
  const { toppings } = state.selected

  // test for existence of  THIS topping
  const exists = toppings.filter((t) => t.name === name).length !== 0
  const handleChange = () => {
    const payload = { amt, name } as ToppingProp;
    if (!exists) {
      dispatch({
        type: 'ADD_TOPPING',
        payload,
      })
    } else {
      dispatch({
        type: 'REMOVE_TOPPING',
        payload,
      })
    }
  }

  return (
    <div className="mx-4 topping-row grid grid-cols-3 border-b-[1px] border-solid border-gray-400">
      <div>
        <input type="checkbox" checked={exists} onChange={handleChange} />
      </div>
      <div>{name}</div>
      <div className="justify-self-end">${amt}</div>
    </div>
  )
}
