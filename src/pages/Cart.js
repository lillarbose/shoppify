import React, { useState } from "react"

const initialCart = [
  {
    title: "Sneakers - Nike Air Max",
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2b7f2d9b-6b2e-4b1c-8e2a-2e1b6b6c6e3e/air-max-90-shoes.png",
    price: 4999,
    qty: 1
  },
  {
    title: "Men's Denim Jacket",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-blue-MODEL.jpg",
    price: 1999,
    qty: 2
  }
]

const Cart = () => {
  const [cart, setCart] = useState(initialCart)
  const [showPayment, setShowPayment] = useState(false)

  const handleQtyChange = (idx, delta) => {
    setCart(cart =>
      cart.map((item, i) =>
        i === idx
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    )
  }

  const handleRemove = idx => {
    setCart(cart => cart.filter((_, i) => i !== idx))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="cart-page" style={{maxWidth: 900, margin: "2.5rem auto", padding: "2rem", background: "#fff", borderRadius: 18, boxShadow: "0 4px 24px #ff512f11"}}>
      <h2 style={{fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem", color: "#ff512f"}}>Your Cart</h2>
      {cart.length === 0 ? (
        <div style={{fontSize: "1.2rem", color: "#888", textAlign: "center", margin: "2rem 0"}}>Your cart is empty.</div>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div key={idx} style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid #eee",
              paddingBottom: "1.2rem"
            }}>
              <img src={item.image} alt={item.title} style={{width: 90, height: 90, objectFit: "cover", borderRadius: 12, boxShadow: "0 2px 12px #ff512f22"}} />
              <div style={{flex: 1}}>
                <div style={{fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.4rem"}}>{item.title}</div>
                <div style={{color: "#ff512f", fontWeight: 700, fontSize: "1.1rem"}}>₹{item.price}</div>
                <div style={{marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.7rem"}}>
                  <button onClick={() => handleQtyChange(idx, -1)} style={{padding: "0.3em 0.8em", borderRadius: 8, border: "none", background: "#eee", fontWeight: 700, fontSize: "1.1rem", cursor: "pointer"}}>-</button>
                  <span style={{fontWeight: 600, fontSize: "1.1rem"}}>{item.qty}</span>
                  <button onClick={() => handleQtyChange(idx, 1)} style={{padding: "0.3em 0.8em", borderRadius: 8, border: "none", background: "#eee", fontWeight: 700, fontSize: "1.1rem", cursor: "pointer"}}>+</button>
                </div>
              </div>
              <button onClick={() => handleRemove(idx)} style={{background: "#ff512f", color: "#fff", border: "none", borderRadius: 8, padding: "0.5em 1em", fontWeight: 700, cursor: "pointer"}}>Remove</button>
            </div>
          ))}
          <div style={{textAlign: "right", fontWeight: 700, fontSize: "1.2rem", marginTop: "2rem", color: "#222"}}>
            Total: <span style={{color: "#ff512f"}}>₹{total}</span>
          </div>
          <div style={{textAlign: "right", marginTop: "1.5rem"}}>
            <button
              style={{
                background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "0.9em 2.5em",
                fontSize: "1.1rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 14px 0 rgba(221,36,118,0.15)",
                transition: "background 0.2s"
              }}
              onClick={() => setShowPayment(true)}
            >
              Proceed to Payment
            </button>
          </div>
          {showPayment && (
            <div style={{
              marginTop: "2.5rem",
              background: "#f7f7fa",
              borderRadius: "14px",
              padding: "2rem 1.5rem",
              boxShadow: "0 2px 12px #ff512f22",
              maxWidth: 420,
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center"
            }}>
              <h3 style={{color: "#ff512f", fontWeight: 700, marginBottom: "1.2rem"}}>Payment Method</h3>
              <div style={{marginBottom: "1.2rem"}}>
                <label style={{marginRight: "1.2rem"}}>
                  <input type="radio" name="payment" defaultChecked /> Credit/Debit Card
                </label>
                <label style={{marginRight: "1.2rem"}}>
                  <input type="radio" name="payment" /> UPI
                </label>
                <label>
                  <input type="radio" name="payment" /> Cash on Delivery
                </label>
              </div>
              <button
                style={{
                  background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "0.8em 2em",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginTop: "1rem"
                }}
                onClick={() => alert("Payment Successful!")}
              >
                Pay Now
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Cart
