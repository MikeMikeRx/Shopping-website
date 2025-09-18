import { useOutletContext } from "react-router-dom"

const Cart = () => {
  const { cart, removeFromCart } = useOutletContext()

  if (cart.length === 0) return <p>Shopping Basket is empty</p>

  return (
    <section className="cart">
      <h2>Shopping Basket</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name} (x{item.quantity})</p>
          <p>{item.price * item.quantity}$</p>
          <button onClick={()=>removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>
        Total: $
        {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </h3>
    </section>
  )
}

export default Cart