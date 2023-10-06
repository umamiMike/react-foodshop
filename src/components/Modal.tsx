import React, { useContext } from 'react'

import { IoIosCloseCircleOutline } from 'react-icons/io'
import { AppContext } from '../AppContext'

export function OrderModal() {
  const ctx = useContext(AppContext)
  const { state, dispatch } = ctx

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
        <button
          type="button"
          className="w-1/3 font-bold bg-orange-300 rounded-full"
          onClick={() => {
           console.log("put some sort of dispatch here")
          }}
          >
          some button name
        </button>
      </div>
    </div>
  )
}
