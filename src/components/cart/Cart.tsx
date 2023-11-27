import React, { useContext } from 'react'
import { useMutation } from '@apollo/client'
import { AppContext } from '../../AppContext'
import { CREATE_ORDER } from '../../graphql/mutations'

export function Cart() {
  const { state, dispatch } = useContext(AppContext)
  const { cart } = state

  const price = cart.price ? `$${cart.price.toFixed(2)}` : ''
  const visible = cart.price > 0 ? 'bottom-0' : ' -bottom-1/4'

  const toppingConstruct = cart.toppings
    .map((t) => t)
    .join(', ')
    .replace(/,*([^,]+)$/, ` and ${cart.toppings[cart.toppings.length - 1]}`)

  const toppingsMessage =
    cart.toppings.length === 0 ? '' : `with ${toppingConstruct}`

  const toppings = () => {
    if (cart.toppings) {
      const message = `You are ordering a ${cart.name}
       ${toppingsMessage} for   ${price}`
      return message
    }
    return ' '
  }

  const [createOrder, {data, loading,  error}] = useMutation(CREATE_ORDER)


  return (
    <div
      className={`fixed bottom-0 flex-row w-screen p-4 overflow-hidden bg-gray-200 border-gray-400  ${visible} h-1/8 border-t-[1px] ease-in-out gap-2 transition-all duration-200`}
    >
      <div className="border-b-[1px] border-gray-400 border-solid ">
        <h3 className="font-bold">Cart</h3>
      </div>
      <div className="font-bold" />
      <p className="text-gray-500">{toppings()}</p>
      <button
        type="button"
        className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full"
          onClick={() => {
            createOrder({variables: {price: cart.price.toString()}}) }}
      >
        place your order
      </button>
    </div>
  )
}
