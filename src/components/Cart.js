import { useOutletContext } from "react-router-dom"

const Cart = () => {
  const { cart, removeFromCart } = useOutletContext()

  if (cart.length === 0) return <p>Shopping Basket is empty</p>

  return (
    <div>Card</div>
  )
}

export default Cart