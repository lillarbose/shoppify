import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Hero from "../Component/Hero/Hero"

const cards = [
  {
    type: "sneakers",
    title: "Trendy Shoes",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/306870/01/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-A3ROCAT-Sneakers",
    description: "Explore our latest collection of stylish shoes."
  },
  {
    type: "cloths",
    title: "Fashion Clothes",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    description: "Upgrade your wardrobe with new arrivals."
  },
  {
    type: "accesories",
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description: "Complete your look with our accessories."
  },
  {
    type: "sneakers",
    title: "Sneakers - Nike Air Max",
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2b7f2d9b-6b2e-4b1c-8e2a-2e1b6b6c6e3e/air-max-90-shoes.png",
    description: "Nike Air Max 90 - Classic comfort and style."
  },
  {
    type: "sneakers",
    title: "Sneakers - Adidas Ultraboost",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/6e0b1e2e9c2a4e1e8e8eacb800e2e8e8_9366/Ultraboost_21_Shoes_White_FY0377_01_standard.jpg",
    description: "Adidas Ultraboost - Responsive running sneakers."
  },
  {
    type: "sneakers",
    title: "Sneakers - Converse Chuck Taylor",
    image: "https://www.converse.in/media/catalog/product/1/6/168508c_1.jpg",
    description: "Converse Chuck Taylor All Star - Timeless design."
  },
  {
    type: "sneakers",
    title: "Sneakers - Puma RS-X",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/391174/01/sv01/fnd/IND/fmt/png/RS-X-Efekt-Energy-Unisex-Sneakers",
    description: "Puma RS-X - Bold and comfortable."
  },
  {
    type: "sneakers",
    title: "Sneakers - New Balance 574",
    image: "https://nb.scene7.com/is/image/NB/m5740sg_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    description: "New Balance 574 - Everyday classic."
  },
  {
    type: "cloths",
    title: "Men's Denim Jacket",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-blue-MODEL.jpg",
    description: "Classic blue denim jacket for men."
  },
  {
    type: "cloths",
    title: "Women's Summer Dress",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-pink-MODEL.jpg",
    description: "Lightweight and stylish summer dress."
  },
  {
    type: "cloths",
    title: "Unisex Hoodie",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    description: "Cozy hoodie for all seasons."
  },
  {
    type: "cloths",
    title: "Formal Trousers",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-black-MODEL.jpg",
    description: "Perfect fit for office and events."
  },
  {
    type: "accesories",
    title: "Leather Belt",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-brown-MODEL.jpg",
    description: "Premium quality leather belt."
  },
  {
    type: "accesories",
    title: "Classic Watch",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
    description: "Elegant watch for every occasion."
  },
  {
    type: "accesories",
    title: "Smart Fitness Band",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smart-band-tag/8/8/2/-original-imagz2z8zq7yqz8g.jpeg?q=70",
    description: "Track your health and stay connected with our smart bands."
  },
  {
    type: "accesories",
    title: "Gold Plated Ring",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-gold-MODEL.jpg",
    description: "Premium gold plated ring for a touch of luxury."
  },
  {
    type: "accesories",
    title: "Silver Designer Ring",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Trendy silver ring for modern style."
  },
  {
    type: "accesories",
    title: "Leather Strap Watch",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "Classic leather strap watch for timeless elegance."
  },
  {
    type: "accesories",
    title: "Minimalist Band",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Minimalist band for everyday comfort and style."
  },
  // Sneakers category - add more types
  {
    type: "sneakers",
    title: "Nike Air Force 1",
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2b7f2d9b-6b2e-4b1c-8e2a-2e1b6b6c6e3e/air-force-1-07-shoes.png",
    description: "Iconic Nike Air Force 1 for classic street style."
  },
  {
    type: "sneakers",
    title: "Adidas Stan Smith",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8e0b1e2e9c2a4e1e8e8eacb800e2e8e8_9366/Stan_Smith_Shoes_White_FX5500_01_standard.jpg",
    description: "Timeless Adidas Stan Smith for everyday comfort."
  },
  {
    type: "sneakers",
    title: "Puma Suede Classic",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/352634/75/sv01/fnd/IND/fmt/png/Suede-Classic-XXI-Unisex-Sneakers",
    description: "Puma Suede Classic - Retro vibes, modern comfort."
  },
  {
    type: "sneakers",
    title: "Reebok Club C 85",
    image: "https://assets.reebok.com/images/w_600,f_auto,q_auto/8e0b1e2e9c2a4e1e8e8eacb800e2e8e8_9366/Club_C_85_Shoes_White_AR0456_01_standard.jpg",
    description: "Reebok Club C 85 - Clean, tennis-inspired style."
  },
  {
    type: "sneakers",
    title: "Vans Old Skool",
    image: "https://images.vans.com/is/image/VansBrand/VN000D3HY28-HERO?wid=800&hei=800&fmt=png-alpha",
    description: "Vans Old Skool - The original skate shoe."
  },
  {
    type: "sneakers",
    title: "New Balance 327",
    image: "https://nb.scene7.com/is/image/NB/ms327cp_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    description: "New Balance 327 - Modern take on retro running."
  },
]

const filterTypes = [
  { label: "All", value: "all" },
  { label: "Sneakers", value: "sneakers" },
  { label: "Cloths", value: "cloths" },
  { label: "Accessories", value: "accesories" }
]

// Add offerPopups for Home page
const offerPopups = [
  {
    brand: "Nike",
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2b7f2d9b-6b2e-4b1c-8e2a-2e1b6b6c6e3e/air-max-90-shoes.png",
    offer: "Flat 25% OFF on Nike Air Max Collection!",
    code: "NIKE25"
  },
  {
    brand: "Adidas",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/6e0b1e2e9c2a4e1e8e8eacb800e2e8e8_9366/Ultraboost_21_Shoes_White_FY0377_01_standard.jpg",
    offer: "Buy 1 Get 1 50% OFF on Adidas Ultraboost!",
    code: "ADIBOOST"
  },
  {
    brand: "Puma",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/391174/01/sv01/fnd/IND/fmt/png/RS-X-Efekt-Energy-Unisex-Sneakers",
    offer: "Extra ₹700 OFF on Puma RS-X Sneakers!",
    code: "PUMARSX"
  },
  {
    brand: "Converse",
    image: "https://www.converse.in/media/catalog/product/1/6/168508c_1.jpg",
    offer: "Get Converse Chuck Taylor at ₹999 only!",
    code: "CONVERSE999"
  }
]

const Home = () => {
  const [filter, setFilter] = useState("all")
  const [showPopup, setShowPopup] = useState(false)
  const [popupIdx, setPopupIdx] = useState(0)
  const filteredCards = filter === "all" ? cards : cards.filter(card => card.type === filter)
  const navigate = useNavigate()

  // Get cart count from localStorage or default to 0
  const getCartCount = () => {
    const count = localStorage.getItem("cartCount")
    return count ? parseInt(count, 10) : 0
  }

  const handleGoToProductPage = () => {
    navigate("/products")
  }

  const handleAddToCart = (card) => {
    // Increment cart count in localStorage
    const count = getCartCount() + 1
    localStorage.setItem("cartCount", count)
    // Notify other tabs/components
    window.dispatchEvent(new Event("storage"))
    navigate("/cart")
  }

 
  const closePopup = () => setShowPopup(false)

  return (
    <>
      <Hero />
      <div className="home-premium-hero-text">
        <h1 className="home-premium-title">Discover Premium Fashion</h1>
        <p className="home-premium-desc">
          Elevate your style with our exclusive collection of sneakers, clothing, and accessories. Shop the latest trends and timeless classics, all in one place.
        </p>
      </div>
      <div className="home-premium-filter-bar">
        {filterTypes.map(ft => (
          <button
            key={ft.value}
            className={`home-filter-btn${filter === ft.value ? " active" : ""}`}
            onClick={() => setFilter(ft.value)}
          >
            {ft.label}
          </button>
        ))}
      </div>
      <div className="home-cards-container premium-cards">
        {filteredCards.map((card, idx) => (
          <div
            className="home-card premium-card"
            key={idx}
            style={{ cursor: "pointer" }}
            tabIndex={0}
            aria-label={`Go to products page`}
            role="button"
          >
            <div className="premium-card-img-wrap" onClick={handleGoToProductPage}>
              <img src={card.image} alt={card.title} className="home-card-img" />
            </div>
            <h3 className="home-card-title">{card.title}</h3>
            <p className="home-card-desc">{card.description}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(card)}
              style={{
                marginTop: "1rem",
                background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "0.6em 1.6em",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 2px 12px #ff512f33",
                transition: "background 0.2s, transform 0.2s"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div
        className="home-offers"
        style={{
          margin: "2.5rem auto 2rem auto",
          background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(221,36,118,0.13)",
          padding: "2rem 1.5rem",
          color: "#fff",
          textAlign: "center",
          maxWidth: "700px",
          fontWeight: 600,
          fontSize: "1.18rem",
          letterSpacing: "0.5px"
        }}
      >
        <div style={{fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.7rem"}}>
          🎉 Special Offers & Discounts 🎉
        </div>
        <ul style={{listStyle: "none", padding: 0, margin: 0, fontSize: "1.1rem"}}>
          <li style={{marginBottom: "0.7rem"}}>Get <b>20% OFF</b> on your first order! Use code: <span style={{background:"#fff", color:"#ff512f", borderRadius:"8px", padding:"0.2em 0.7em", fontWeight:700}}>LIZZ20</span></li>
          <li style={{marginBottom: "0.7rem"}}>Buy 2 Get 1 <b>FREE</b> on select sneakers</li>
          <li style={{marginBottom: "0.7rem"}}>Flat <b>₹500 OFF</b> on orders above ₹2999</li>
          <li>Free shipping on all orders above <b>₹999</b></li>
        </ul>
        <div style={{marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1.2rem", justifyContent: "center"}}>
          {offerPopups.map((offer, idx) => (
            <div
              key={idx}
              className="offer-popup-card"
              style={{
                background: "#fff",
                color: "#ff512f",
                borderRadius: "16px",
                boxShadow: "0 2px 12px #ff512f22",
                padding: "1.2rem 1rem",
                minWidth: "210px",
                maxWidth: "230px",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontWeight: 600,
                fontSize: "1rem"
              }}
              onClick={() => { setPopupIdx(idx); setShowPopup(true); }}
              tabIndex={0}
              onKeyPress={e => { if (e.key === "Enter") { setPopupIdx(idx); setShowPopup(true); } }}
            >
              <img src={offer.image} alt={offer.brand} style={{width: "100%", height: "110px", objectFit: "contain", borderRadius: "10px", marginBottom: "0.7rem"}} />
              <div style={{fontWeight: 700, marginBottom: "0.3rem"}}>{offer.brand}</div>
              <div>{offer.offer}</div>
              <div style={{marginTop: "0.5rem", background: "#ff512f", color: "#fff", borderRadius: "8px", padding: "0.2em 0.7em", display: "inline-block", fontWeight: 700, fontSize: "0.98rem"}}>{offer.code}</div>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
        <div
          className="offer-popup-modal"
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={closePopup}
        >
          <div
            className="offer-popup-content"
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 8px 32px #ff512f33",
              padding: "2.2rem 2rem",
              minWidth: "320px",
              maxWidth: "95vw",
              textAlign: "center",
              position: "relative",
              animation: "popupIn 0.4s cubic-bezier(0.68,-0.55,0.27,1.55)"
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                color: "#ff512f",
                cursor: "pointer"
              }}
              aria-label="Close"
            >×</button>
            <img src={offerPopups[popupIdx].image} alt={offerPopups[popupIdx].brand} style={{width: "120px", height: "120px", objectFit: "contain", borderRadius: "12px", marginBottom: "1.2rem"}} />
            <div style={{fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem", color: "#ff512f"}}>{offerPopups[popupIdx].brand}</div>
            <div style={{fontSize: "1.1rem", marginBottom: "0.7rem"}}>{offerPopups[popupIdx].offer}</div>
            <div style={{margin: "0.7rem 0", background: "#ff512f", color: "#fff", borderRadius: "8px", padding: "0.3em 1em", display: "inline-block", fontWeight: 700, fontSize: "1.08rem"}}>{offerPopups[popupIdx].code}</div>
            <div style={{marginTop: "1.2rem", color: "#444", fontSize: "1rem"}}>Shop now and enjoy exclusive discounts on our premium sneaker brands!</div>
          </div>
        </div>
      )}
      {/* Add more sections/components below */}
      {/* <FeaturedProducts /> */}
      {/* <Footer /> */}
    </>
  )
}
export default Home