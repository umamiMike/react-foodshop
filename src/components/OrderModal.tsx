import React, { useContext } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { guid } from '../utils';
import { AppContext } from '../AppContext';
import { Topping } from './Topping';
import type { MenuItem, ToppingType } from '../baseState';
import { OrderImage } from '../FakeImage';

export function OrderModal() {
  const ctx = useContext(AppContext);
  const { state, dispatch } = ctx;

  const selected = state.menuItems.find(
    (el: MenuItem) => el.name === state.selected.name,
  );
  // eslint-disable-next-line max-len
  const Toppings = selected?.toppings.map((t: ToppingType) => (
    <Topping key={guid()} topping={t} />
  ));

  const splashname = `${selected?.name} %0A splash image %0A `;

  return (
    <div key="555" className="overlay">
      <div className="flex-row  bg-gray-100 shadow-md overflow-hidden  ">
        <div className="">
          <button
            className="p-1 w-5 h-5 uppercase "
            type="button"
            onClick={() => dispatch({ type: 'CANCEL_ORDER' })}
          >
            <IoIosCloseCircleOutline size="20px" />
          </button>
        </div>
        { OrderImage({
          name: splashname, image: selected?.image, styles: 'w-20 p-4-rounded-lg',
        })}
        <div className="grid  gap-2 w-full">
          { Toppings }
        </div>
        <button
          type="button"
          className="bg-orange-300 rounded-full px-4 font-bold m-2"
          onClick={() => {
            dispatch({ type: 'ADD_TO_CART' });
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
