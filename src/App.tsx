import React from 'react';
import { AppProvider } from './AppContext';
import { Splash } from './Splash';
import { Menu } from './Menu';
import { Cart } from './Cart';
import { OrderModal } from './components/OrderModal'

/* eslint-disable react/jsx-no-constructed-context-values */
function App() {
  return (
    <AppProvider>
      <div className="flex-row items-center justify-center max-w-screen-xl space-y-8">
        <Splash />
        <Menu />
        <OrderModal/>

      </div>
      <Cart />
    </AppProvider>
  );
}

export default App;
