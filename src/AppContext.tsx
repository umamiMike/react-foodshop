import React, { useReducer, createContext, useMemo, type Dispatch } from 'react';
import { shopReducer } from './reducers/reducer';
import type { ShopProps } from './types';
import { menuItems, shopInfo, cart } from './baseState';
import type { Action } from "./reducers/reducer";

const appState = {
  ...shopInfo,
  ...cart,
  ...menuItems,
};

export const AppContext = createContext<{ state: ShopProps ; dispatch: Dispatch<Action>}>({
  state: appState,
  dispatch: () => null,
});

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, appState);
  const contextValue = useMemo(() => ({ state, dispatch } ), [state, dispatch]);
  return (
    <AppContext.Provider value={ contextValue}>
      {children}
    </AppContext.Provider>
  );
};
