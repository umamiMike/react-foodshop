import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export function Splash() {
  const { state } = useContext(AppContext);
  return (
    <div className="sticky top-0 flex-row bg-gray-100 shadow-sm ">
      <div className="flex items-center space-x-4">
        <h2 className="">{state.shop_name}</h2>
        <div className="font-bold">{state.shop_description}</div>
      </div>
    </div>
  );
}
