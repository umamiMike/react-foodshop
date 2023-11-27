import { useQuery } from '@apollo/client'
import React from 'react'
import { SHOP_INFO } from './graphql/queries'

export function Splash() {
  const { loading, error, data } = useQuery(SHOP_INFO)

  if (loading) return <div> Loading... </div>
    if (error) return <div/>

  const si = data.shopInfo

  return (
    <div className="sticky top-0 flex flex-col items-center bg-gray-100 md:flex-row topnav shadow-sm">
        <h2 className="block">{si.shopName}</h2>
        <div className="md:ml-4">{si.shopDescription}</div>
    </div>
  )
}
