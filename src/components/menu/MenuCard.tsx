import React, {type Dispatch } from 'react'
import type { MenuItemProps } from '../../types'
import type { Action } from "../../reducers/reducer";

export function MenuCard(item: MenuItemProps, dispatch: Dispatch<Action>) {
  return (
    <div
      key={item.name}
      className="flex flex-col items-center justify-between w-4/5 p-4 m-2 mx-2 border rounded-lg shadow-md place-self-center md:flex-row md:max-w-xl dark:border-gray-300"
    >
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault()
          dispatch({ type: 'START_ORDER', payload: item })
        }}
        className="flex flex-col items-center bg-white"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500">
          {item.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {item.description}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        ${item.amt}
      </p>
    </div>
  )
}
