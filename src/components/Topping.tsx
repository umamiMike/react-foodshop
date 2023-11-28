import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { type ToppingProp } from '../types'


type ToppingType = {
  topping: ToppingProp
  key: string
};


export function Topping(toppin: ToppingType) {
  const { topping } = toppin
  const { name, amt } = topping
  const { state, dispatch } = useContext(AppContext)
  const { toppings } = state.selected

  // test for existance of  THIS topping
  const exists = toppings.filter((t) => t.name === name).length !== 0
  const handleChange = () => {
    if (!exists) {
      dispatch({
        type: 'ADD_TOPPING',
        payload: { amt, name },
      })
    } else {
      dispatch({
        type: 'REMOVE_TOPPING',
        payload: { amt,  name },
      })
    }
  }

  return (
    <div  key={name} className="mx-4 topping-row grid grid-cols-3 border-b-[1px] border-solid border-gray-400">
      <div>
        <input type="checkbox" checked={exists} onChange={handleChange} />
      </div>
      <div>{name}</div>
      <div className="justify-self-end">${amt}</div>
    </div>
  )
}
