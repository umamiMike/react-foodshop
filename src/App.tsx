import React from 'react';
import { useQuery } from '@apollo/client';
import { AppProvider } from './AppContext';
import { Splash } from './Splash';
import { Menu } from './Menu';
import { Cart } from './Cart';
import { OrderModal } from './components/OrderModal'
import { ALL_ITEMS, ALL_ORDERS, SHOP_INFO } from './queries'

  const orderData = () => { 
    const { data } = useQuery(ALL_ORDERS) 
    return data
  }
  const shopInfo = () => { 
    const { data } = useQuery(SHOP_INFO) 
    return data
  }
/* eslint-disable react/jsx-no-constructed-context-values */
function App() {
  const {data} = useQuery(ALL_ITEMS)
  console.log(data)
   const shinfo = shopInfo()
  console.log(shinfo)


  return (
    <AppProvider>
      <div className="flex-row items-center justify-center max-w-screen-xl space-y-8">
        <Splash />
        <Menu />
      </div>
      <Cart />
        <OrderModal/>
    </AppProvider>
  );
}

export default App;
