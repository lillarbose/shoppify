import React, { useState } from "react"

const products = [
  // Nike
  {
    brand: "Nike",
    type: "Sneakers",
    name: "Nike Air Max 90",
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2b7f2d9b-6b2e-4b1c-8e2a-2e1b6b6c6e3e/air-max-90-shoes.png",
    price: 4999,
    desc: "Classic comfort and style from Nike."
  },
  {
    brand: "Nike",
    type: "Sneakers",
    name: "Nike Air Force 1",
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2b7f2d9b-6b2e-4b1c-8e2a-2e1b6b6c6e3e/air-force-1-07-shoes.png",
    price: 5299,
    desc: "Iconic Nike Air Force 1 for street style."
  },
  // Adidas
  {
    brand: "Adidas",
    type: "Sneakers",
    name: "Adidas Ultraboost",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/6e0b1e2e9c2a4e1e8e8eacb800e2e8e8_9366/Ultraboost_21_Shoes_White_FY0377_01_standard.jpg",
    price: 7999,
    desc: "Responsive running sneakers from Adidas."
  },
  {
    brand: "Adidas",
    type: "Sneakers",
    name: "Adidas Stan Smith",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8e0b1e2e9c2a4e1e8e8eacb800e2e8e8_9366/Stan_Smith_Shoes_White_FX5500_01_standard.jpg",
    price: 5999,
    desc: "Timeless Adidas Stan Smith for everyday comfort."
  },
  // Puma
  {
    brand: "Puma",
    type: "Sneakers",
    name: "Puma RS-X",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/391174/01/sv01/fnd/IND/fmt/png/RS-X-Efekt-Energy-Unisex-Sneakers",
    price: 6499,
    desc: "Bold and comfortable Puma RS-X."
  },
  {
    brand: "Puma",
    type: "Sneakers",
    name: "Puma Suede Classic",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/352634/75/sv01/fnd/IND/fmt/png/Suede-Classic-XXI-Unisex-Sneakers",
    price: 4299,
    desc: "Retro vibes, modern comfort."
  },
  // Converse
  {
    brand: "Converse",
    type: "Sneakers",
    name: "Converse Chuck Taylor",
    image: "https://www.converse.in/media/catalog/product/1/6/168508c_1.jpg",
    price: 2999,
    desc: "Timeless Converse Chuck Taylor All Star."
  },
  // Reebok
  {
    brand: "Reebok",
    type: "Sneakers",
    name: "Reebok Club C 85",
    image: "https://assets.reebok.com/images/w_600,f_auto,q_auto/8e0b1e2e9c2a4e1e8e8eacb800e2e8e8_9366/Club_C_85_Shoes_White_AR0456_01_standard.jpg",
    price: 3899,
    desc: "Clean, tennis-inspired style."
  },
  // Vans
  {
    brand: "Vans",
    type: "Sneakers",
    name: "Vans Old Skool",
    image: "https://images.vans.com/is/image/VansBrand/VN000D3HY28-HERO?wid=800&hei=800&fmt=png-alpha",
    price: 3499,
    desc: "The original skate shoe."
  },
  // New Balance
  {
    brand: "New Balance",
    type: "Sneakers",
    name: "New Balance 574",
    image: "https://nb.scene7.com/is/image/NB/m5740sg_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    price: 5699,
    desc: "Everyday classic from New Balance."
  },
  {
    brand: "New Balance",
    type: "Sneakers",
    name: "New Balance 327",
    image: "https://nb.scene7.com/is/image/NB/ms327cp_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    price: 5999,
    desc: "Modern take on retro running."
  },
  // Accessories - Watches and Rings
  {
    brand: "Fossil",
    type: "Accessories",
    name: "Fossil Chronograph Watch",
    image: "https://m.media-amazon.com/images/I/71QbR3p6pGL._AC_UL480_FMwebp_QL65_.jpg",
    price: 8999,
    desc: "Premium Fossil chronograph watch for men."
  },
  {
    brand: "Titan",
    type: "Accessories",
    name: "Titan Women's Rose Gold Watch",
    image: "https://m.media-amazon.com/images/I/61Q5p1+t5lL._AC_UL480_FMwebp_QL65_.jpg",
    price: 6499,
    desc: "Elegant rose gold watch for women by Titan."
  },
  {
    brand: "Casio",
    type: "Accessories",
    name: "Casio G-Shock",
    image: "https://m.media-amazon.com/images/I/71vQbQwQpGL._AC_UL480_FMwebp_QL65_.jpg",
    price: 7999,
    desc: "Rugged and stylish Casio G-Shock digital watch."
  },
  {
    brand: "Mi",
    type: "Accessories",
    name: "Mi Smart Band 6",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smart-band-tag/8/8/2/-original-imagz2z8zq7yqz8g.jpeg?q=70",
    price: 2499,
    desc: "Track your fitness with Mi Smart Band 6."
  },
  {
    brand: "CaratLane",
    type: "Accessories",
    name: "Gold Plated Ring",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-gold-MODEL.jpg",
    price: 2999,
    desc: "Premium gold plated ring for a touch of luxury."
  },
  {
    brand: "Tanishq",
    type: "Accessories",
    name: "Silver Designer Ring",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: 2199,
    desc: "Trendy silver ring for modern style."
  },
  // Cloths
  {
    brand: "Levi's",
    type: "Cloths",
    name: "Men's Denim Jacket",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-blue-MODEL.jpg",
    price: 2999,
    desc: "Classic blue denim jacket for men."
  },
  {
    brand: "H&M",
    type: "Cloths",
    name: "Women's Summer Dress",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-pink-MODEL.jpg",
    price: 1899,
    desc: "Lightweight and stylish summer dress."
  },
  {
    brand: "Uniqlo",
    type: "Cloths",
    name: "Unisex Hoodie",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    price: 1599,
    desc: "Cozy hoodie for all seasons."
  },
  {
    brand: "Van Heusen",
    type: "Cloths",
    name: "Formal Trousers",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-black-MODEL.jpg",
    price: 2099,
    desc: "Perfect fit for office and events."
  },
  {
    brand: "Old Navy",
    type: "Cloths",
    name: "Casual Shirt",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 1299,
    desc: "Comfortable and stylish shirt for everyday wear."
  },
  // More collections: Blazers and Outfits for Men
  {
    brand: "Raymond",
    type: "Blazers",
    name: "Raymond Classic Black Blazer",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-black-MODEL.jpg",
    price: 4999,
    desc: "Classic black blazer for formal occasions."
  },
  {
    brand: "Van Heusen",
    type: "Blazers",
    name: "Van Heusen Navy Blue Blazer",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-navy-MODEL.jpg",
    price: 5499,
    desc: "Premium navy blue blazer for men."
  },
  {
    brand: "Manyavar",
    type: "Outfits",
    name: "Manyavar Ethnic Outfit",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-cream-MODEL.jpg",
    price: 3999,
    desc: "Traditional ethnic outfit for festive occasions."
  },
  {
    brand: "Peter England",
    type: "Outfits",
    name: "Peter England Formal Suit",
    image: "https://assets.ajio.com/medias/sys_master/root/20230624/8Q6E/6496e7e3eebac147fcf9e3c2/-473Wx593H-465563282-grey-MODEL.jpg",
    price: 6999,
    desc: "Elegant formal suit for business and events."
  },
  {
    brand: "Allen Solly",
    type: "Outfits",
    name: "Allen Solly Casual Outfit",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 2499,
    desc: "Trendy casual outfit for men."
  },
]

const categories = [
  "All",
  "Sneakers",
  "Cloths",
  "Accessories",
  "Blazers",
  "Outfits"
]

// Only sneaker brands for Sneakers category
const sneakerBrands = [
  "Nike",
  "Adidas",
  "Puma",
  "Converse",
  "Reebok",
  "Vans",
  "New Balance"
]

// ...other brands for other categories...
const brands = [
  ...sneakerBrands,
  "Fossil",
  "Titan",
  "Casio",
  "Mi",
  "CaratLane",
  "Tanishq",
  "Levi's",
  "H&M",
  "Uniqlo",
  "Van Heusen",
  "Old Navy",
  "Raymond",
  "Manyavar",
  "Peter England",
  "Allen Solly"
]

const Products = () => {
  const [selected, setSelected] = useState("All")
  // Fix: Only use local state for cart, never auto-load from localStorage
  const [cartItems, setCartItems] = useState([])

  // Determine if selected is a category or a brand
  const isCategory = categories.includes(selected)

  // Filter products
  const filteredProducts =
    selected === "All"
      ? products
      : isCategory
        ? products.filter(p => p.type === selected)
        : products.filter(p => p.brand === selected)

  // Show brands logic: only show sneaker brands if Sneakers selected, else only on All
  let showBrands = false
  let brandsToShow = []
  if (selected === "All") {
    showBrands = true
    brandsToShow = brands
  } else if (selected === "Sneakers") {
    showBrands = true
    brandsToShow = sneakerBrands
  }

  // Show cart count at the top right (or wherever you want)
  const cartCount = cartItems.length

  const handleAddToCart = (prod) => {
    setCartItems(prev => {
      const idx = prev.findIndex(item => item.name === prod.name)
      let updated
      if (idx > -1) {
        updated = prev.map((item, i) =>
          i === idx ? { ...item, qty: item.qty + 1 } : item
        )
      } else {
        updated = [...prev, { ...prod, qty: 1 }]
      }
      // Only update localStorage for count and items when user adds/removes
      localStorage.setItem("cartItems", JSON.stringify(updated))
      localStorage.setItem("cartCount", updated.length.toString())
      window.dispatchEvent(new Event("storage"))
      return updated
    })
  }

  const handleRemoveFromCart = (prod) => {
    setCartItems(prev => {
      const idx = prev.findIndex(item => item.name === prod.name)
      if (idx === -1) return prev
      let updated
      if (prev[idx].qty > 1) {
        updated = prev.map((item, i) =>
          i === idx ? { ...item, qty: item.qty - 1 } : item
        )
      } else {
        updated = prev.filter((_, i) => i !== idx)
      }
      localStorage.setItem("cartItems", JSON.stringify(updated))
      localStorage.setItem("cartCount", updated.length.toString())
      window.dispatchEvent(new Event("storage"))
      return updated
    })
  }

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "2.5rem auto",
        padding: "2rem",
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe0f0 0%, #23233b 100%)"
      }}
    >
      {/* Cart count badge */}
      <div style={{
        position: "fixed",
        top: "32px",
        right: "32px",
        zIndex: 100,
        background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
        color: "#fff",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "1.25rem",
        boxShadow: "0 2px 12px #ff512f33"
      }}>
        🛒 {cartCount}
      </div>
      <h2 style={{
        fontSize: "2.2rem",
        fontWeight: 800,
        marginBottom: "2rem",
        background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}>Sneakers, Cloths, Blazers & Outfits</h2>
      <div style={{display: "flex", gap: "1.2rem", marginBottom: "1.5rem", flexWrap: "wrap"}}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            style={{
              background: selected === cat ? "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)" : "#fff",
              color: selected === cat ? "#fff" : "#ff512f",
              border: "1.5px solid #ff512f",
              borderRadius: "14px",
              padding: "0.7em 1.7em",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s"
            }}
          >
            {cat}
          </button>
        ))}
        {/* Show brands only for All or Sneakers category */}
        {showBrands && brandsToShow.map(b => (
          <button
            key={b}
            onClick={() => setSelected(b)}
            style={{
              background: selected === b ? "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)" : "#fff",
              color: selected === b ? "#fff" : "#ff512f",
              border: "1.5px solid #ff512f",
              borderRadius: "14px",
              padding: "0.7em 1.7em",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s"
            }}
          >
            {b}
          </button>
        ))}
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2.5rem",
        justifyContent: "center"
      }}>
        {filteredProducts.map((prod, idx) => {
          const cartItem = cartItems.find(item => item.name === prod.name)
          return (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 4px 24px rgba(221,36,118,0.10)",
                padding: "1.5rem 1rem",
                minWidth: "260px",
                maxWidth: "320px",
                flex: "1 1 260px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img src={prod.image} alt={prod.name} style={{width: "100%", height: "140px", objectFit: "contain", borderRadius: "12px", marginBottom: "1rem"}} />
              <h3 style={{fontSize: "1.18rem", fontWeight: 700, marginBottom: "0.5rem", color: "#ff512f"}}>{prod.name}</h3>
              <div style={{fontSize: "1.05rem", color: "#444", marginBottom: "0.5rem"}}>{prod.brand} &middot; {prod.type}</div>
              <div style={{fontSize: "1.02rem", color: "#555", marginBottom: "0.7rem", textAlign: "center"}}>{prod.desc}</div>
              <div style={{fontWeight: 700, color: "#ff512f", fontSize: "1.1rem", marginBottom: "0.7rem"}}>₹{prod.price}</div>
              <div style={{display: "flex", alignItems: "center", gap: "0.7rem"}}>
                <button
                  style={{
                    background: "#eee",
                    color: "#ff512f",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.5em 1em",
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: cartItem && cartItem.qty > 0 ? "pointer" : "not-allowed",
                    opacity: cartItem && cartItem.qty > 0 ? 1 : 0.5
                  }}
                  onClick={() => handleRemoveFromCart(prod)}
                  disabled={!cartItem || cartItem.qty === 0}
                >-</button>
                <span style={{fontWeight: 700, fontSize: "1.1rem", minWidth: 24, textAlign: "center"}}>
                  {cartItem ? cartItem.qty : 0}
                </span>
                <button
                  style={{
                    background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.5em 1em",
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: "pointer"
                  }}
                  onClick={() => handleAddToCart(prod)}
                >Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
      {/* List out the items in the cart */}
      <div style={{
        marginTop: "3rem",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 2px 12px #ff512f22",
        padding: "1.5rem 1rem",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <h3 style={{color: "#ff512f", fontWeight: 700, marginBottom: "1rem"}}>Cart Items</h3>
        {cartItems.length === 0 ? (
          <div style={{color: "#888", fontSize: "1.1rem"}}>No items in cart.</div>
        ) : (
          <ul style={{listStyle: "none", padding: 0, margin: 0}}>
            {cartItems.map((item, i) => (
              <li key={i} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #eee",
                padding: "0.7rem 0"
              }}>
                <span>
                  <b>{item.name}</b> <span style={{color: "#888"}}>({item.brand})</span>
                </span>
                <span style={{fontWeight: 600, color: "#ff512f"}}>Qty: {item.qty}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Products