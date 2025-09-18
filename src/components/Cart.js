import { useOutletContext } from "react-router-dom"

const Cart = () => {
  const { cart, removeFromCart } = useOutletContext()
  
  return (
    <div>Card</div>
  )
}

export default Cart