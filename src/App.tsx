import React from 'react';
import { AppProvider } from './AppContext';
import { Splash } from './Splash';
import { Menu } from './Menu';
import { Cart } from './Cart';

/* eslint-disable react/jsx-no-constructed-context-values */
function App() {
  return (
    <AppProvider>
      <div className="max-w-screen-xl items-center justify-center flex-row space-y-8">
        <Splash />
        <Menu />
      </div>
      <Cart />
    </AppProvider>
  );
}

export default App;
