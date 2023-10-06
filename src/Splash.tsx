import { useQuery } from '@apollo/client'
import React, { useContext } from 'react'
import { ALL_ITEMS, ALL_ORDERS, SHOP_INFO } from './graphql/queries'
import { AppContext } from './AppContext'

export function Splash() {
  const { loading, error, data } = useQuery(SHOP_INFO)

  if (loading) return <div> Loading... </div>
    if (error) return <div/>

  const si = data.shopInfo

  return (
    <div className="sticky top-0 flex-row bg-gray-100 shadow-sm">
      <div className="flex items-center space-x-4">
        <h2 className="">{si.shopName}</h2>
        <div className="font-bold">{si.shopDescription}</div>
      </div>
    </div>
  )
}
