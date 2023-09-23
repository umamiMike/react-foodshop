import React, { useContext } from 'react'
import { AppContext } from './AppContext'

export function Cart() {
  const { state } = useContext(AppContext)
  const { cart } = state
  const visible = cart.toppings.length > 0 ? 'bottom-0' : ' -bottom-1/4'
  const price = cart.price ? `$${cart.price.toFixed(2)}` : ''
  const toppingsMessage = () =>
    cart.toppings
      .map((t) => t.name)
      .join(', ')
      .replace(/,*([^,]+)$/, ` and ${cart.toppings[cart.toppings.length - 1]}`)
  const toppings = () => {
    if (cart.toppings) {
      const message = `You are ordering a ${cart.name}
        with  ${toppingsMessage()} for   ${price}`
      return message
    }
    return ' '
  }

  return (
    <div
      className={` ${visible}  p-4 h-1/8 fixed border-t-[1px] ease-in-out overflow-hidden border-gray-400  bottom-0 flex-row bg-gray-200 gap-2 transition-all duration-200 w-screen  `}
    >
      <div className="border-b-[1px] border-gray-400 border-solid ">Cart</div>
      <div className="font-bold" />
      <p>{toppings()}</p>
      <button
        type="button"
        className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full"
      >
        place your order
      </button>
    </div>
  )
}
