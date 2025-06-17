import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png' 

const Navbar = () => {
  const navigate = useNavigate()
  const [cartCount, setCartCount] = useState(0)
  const [cartAnim, setCartAnim] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Listen for cart updates
  useEffect(() => {
    const onStorage = () => {
      const items = localStorage.getItem("cartItems")
      let parsed = items ? JSON.parse(items) : []
      setCartCount(parsed.reduce((sum, item) => sum + (item.qty || 1), 0))
      setCartAnim(true)
      setTimeout(() => setCartAnim(false), 500)
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  // Responsive menu toggle
  const handleMenuToggle = () => setMenuOpen(open => !open)
  const handleNavClick = (to) => {
    setMenuOpen(false)
    navigate(to)
  }

  return (
    <nav className="navbar animated-navbar" style={{ position: "relative" }}>
      <div className="navbar-content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img
          src={logo}
          alt="Logo"
          className="nav-logo"
          onClick={() => navigate('/')}
          style={{ cursor: "pointer", width: "50px", height: "auto" }}
        />
        {/* Hamburger for mobile */}
        <button
          className="navbar-hamburger"
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
            marginLeft: "1rem"
          }}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <div
          className="nav-menu"
          style={{
            display: menuOpen ? "block" : "",
            position: menuOpen ? "absolute" : "static",
            top: menuOpen ? "60px" : "auto",
            left: 0,
            width: menuOpen ? "100vw" : "auto",
            background: menuOpen ? "#fff" : "none",
            zIndex: menuOpen ? 1000 : "auto",
            boxShadow: menuOpen ? "0 2px 12px #ff512f22" : "none"
          }}
        >
          <ul
            className="nav-list"
            style={{
              display: menuOpen ? "block" : "flex",
              flexDirection: menuOpen ? "column" : "row",
              alignItems: menuOpen ? "flex-start" : "center",
              margin: 0,
              padding: menuOpen ? "1rem" : 0
            }}
          >
            <li className="nav-item-animate" onClick={() => handleNavClick("/")}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            </li>
            <li className="nav-item-animate" onClick={() => handleNavClick("/products")}>
              <Link to="/products" style={{ color: "inherit", textDecoration: "none" }}>Products</Link>
            </li>
            <li className="nav-item-animate" onClick={() => handleNavClick("/about")}>
              <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link>
            </li>
            <li className="nav-item-animate" onClick={() => handleNavClick("/contact")}>
              <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav-login-cart" style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <button
            className="nav-login-btn"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className={`nav-cart-btn${cartAnim ? " cart-bounce" : ""}`}
            onClick={() => navigate('/cart')}
            aria-label="Go to cart"
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              outline: "none",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span role="img" aria-label="cart" style={{ fontSize: "1.5rem" }}>🛒</span>
            <span
              className="cart-count-badge"
              style={{
                background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                color: "#fff",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1rem",
                marginLeft: "0.3rem",
                transition: "transform 0.3s"
              }}
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>
      <style>
        {`
        @media (max-width: 800px) {
          .nav-menu {
            display: none;
          }
          .navbar-hamburger {
            display: block !important;
          }
          .nav-menu[style*="display: block"] {
            display: block !important;
          }
          .nav-list {
            flex-direction: column !important;
            width: 100vw;
          }
          .nav-item-animate {
            margin: 1rem 0 !important;
          }
        }
        .cart-bounce {
          animation: cart-bounce-anim 0.5s;
        }
        @keyframes cart-bounce-anim {
          0% { transform: scale(1);}
          30% { transform: scale(1.25);}
          60% { transform: scale(0.95);}
          100% { transform: scale(1);}
        }
        `}
      </style>
    </nav>
  )
}

export default Navbar