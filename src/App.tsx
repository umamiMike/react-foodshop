import React from 'react';
import { AppProvider } from './AppContext';
import { Splash } from './Splash';
import { Menu } from './components/menu/Menu';
import { Cart } from './components/cart/Cart';
import { OrderModal } from './components/OrderModal'

function App() {
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
