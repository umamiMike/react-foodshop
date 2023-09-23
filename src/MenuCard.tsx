import React from 'react'
import type { MenuItem } from './baseState'

export function MenuCard(item: MenuItem, dispatch: any) {
  return (
    <div key={ item.name} className="flex flex-col justify-between p-4 leading-normal border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-300">
      <a
        href="/"
        onClick={(e) => {
          console.log(item)
          e.preventDefault()
          dispatch({ type: 'START_ORDER', payload: item })
        }}
        className="flex flex-col items-center bg-white"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">
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
