import { useOutletContext } from "react-router-dom"

const Cart = () => {
  const { cart, removeFromCart } = useOutletContext()

  if (cart.length === 0) return <p>Shopping Basket is empty</p>

  return (
    <section className="cart">
      
    </section>
  )
}

export default Cart