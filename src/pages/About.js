


const About = () => {
 

  return (
    <>
      <div className="about-container" style={{
          maxWidth: "900px",
          margin: "3rem auto",
          padding: "3rem 2.5rem",
          background: "linear-gradient(135deg, #fff 60%, #ffe0f0 100%)",
          borderRadius: "28px",
          boxShadow: "0 12px 48px 0 rgba(221,36,118,0.13), 0 2px 12px 0 rgba(0,0,0,0.06)"
      }}>
          <h1 style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              marginBottom: "1.2rem",
              background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
          }}>About Us</h1>
          <p style={{
              fontSize: "1.25rem",
              color: "#444",
              marginBottom: "2rem",
              fontWeight: 500
          }}>
              Welcome to <b>Lizz</b> – your destination for premium fashion. We bring you the latest trends in shoes, clothing, and accessories, curated for style and comfort. Our mission is to deliver high-quality, stylish, and comfortable products that fit your lifestyle and help you express your unique personality.
          </p>
          <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem",
              margin: "2.5rem 0 2rem 0",
              justifyContent: "center"
          }}>
              <div style={{
                  background: "#fff",
                  borderRadius: "18px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                  padding: "2rem 1.5rem",
                  minWidth: "260px",
                  maxWidth: "340px",
                  flex: "1 1 260px"
              }}>
                  <h2 style={{fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", color: "#ff512f"}}>Why Shop With Us?</h2>
                  <ul style={{fontSize: "1.08rem", color: "#555", marginBottom: "0", paddingLeft: "1.2rem", lineHeight: 2}}>
                      <li>Wide range of trendy and classic products</li>
                      <li>High-quality materials and craftsmanship</li>
                      <li>Fast and reliable shipping</li>
                      <li>Easy returns and excellent customer support</li>
                      <li>Secure payment options and privacy protection</li>
                      <li>Exclusive member discounts and early access to sales</li>
                      <li>Eco-friendly packaging and sustainable practices</li>
                      <li>Detailed product descriptions and size guides</li>
                      <li>Gift cards and special offers for loyal customers</li>
                      <li>24/7 customer support via chat, email, and phone</li>
                  </ul>
              </div>
              <div style={{
                  background: "#fff",
                  borderRadius: "18px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                  padding: "2rem 1.5rem",
                  minWidth: "260px",
                  maxWidth: "340px",
                  flex: "1 1 260px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
              }}>
                  <h2 style={{fontSize: "1.4rem", fontWeight: "700", marginBottom: "1.2rem", color: "#ff512f"}}>Our Story</h2>
                  <p style={{fontSize: "1.08rem", color: "#555", marginBottom: "1.2rem", textAlign: "center"}}>
                      Founded in 2023, Lizz started as a small boutique with a vision to make premium fashion accessible to everyone. Today, we are a growing online platform trusted by thousands of customers across the country. Our team is passionate about curating the best products and delivering a seamless shopping experience.
                  </p>
                  <h2 style={{fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.7rem", color: "#ff512f"}}>Our Values</h2>
                  <ul style={{fontSize: "1.05rem", color: "#555", marginBottom: "0", paddingLeft: "1.2rem", lineHeight: 2}}>
                      <li>Customer Satisfaction First</li>
                      <li>Integrity and Transparency</li>
                      <li>Innovation in Fashion</li>
                      <li>Community and Social Responsibility</li>
                  </ul>
              </div>
          </div>
          <div style={{
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
        </div>
        <div style={{
              margin: "2.5rem auto 2rem auto",
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              padding: "2rem 1.5rem",
              color: "#222",
              textAlign: "center",
              maxWidth: "700px",
              fontWeight: 500,
              fontSize: "1.08rem"
          }}>
              <h2 style={{color: "#ff512f", fontWeight: 700, marginBottom: "1.2rem"}}>Meet Our Team</h2>
              <p>
                  Our dedicated team of stylists, designers, and customer support professionals work tirelessly to bring you the best shopping experience. We believe in continuous learning and improvement, and we value your feedback to help us grow.
              </p>
              <ul style={{marginTop: "1.2rem", listStyle: "disc inside", textAlign: "left"}}>
                  <li>Expert stylists for personalized recommendations</li>
                  <li>Responsive customer care for all your queries</li>
                  <li>Creative designers for unique and trendy collections</li>
                  <li>Efficient logistics and delivery partners</li>
              </ul>
          </div>
          <div style={{
              margin: "2.5rem auto 2rem auto",
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              padding: "2rem 1.5rem",
              color: "#222",
              textAlign: "center",
              maxWidth: "700px",
              fontWeight: 500,
              fontSize: "1.08rem"
          }}>
              <h2 style={{color: "#ff512f", fontWeight: 700, marginBottom: "1.2rem"}}>Contact & Support</h2>
              <p>
                  Have questions or need help? Reach out to us anytime at <a href="mailto:support@lizz.com" style={{color: "#ff512f", textDecoration: "underline"}}>support@lizz.com</a> or call <a href="tel:+911234567890" style={{color: "#ff512f", textDecoration: "underline"}}>+91 12345 67890</a>.
              </p>
              <p>
                  Follow us on social media for updates, style tips, and exclusive deals!
              </p>
          </div>
          <div style={{
              margin: "2.5rem auto 2rem auto",
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              padding: "2rem 1.5rem",
              color: "#222",
              textAlign: "center",
              maxWidth: "700px",
              fontWeight: 500,
              fontSize: "1.08rem"
          }}>
              <h2 style={{color: "#ff512f", fontWeight: 700, marginBottom: "1.2rem"}}>Our Promise</h2>
              <p>
                  At Lizz, we are committed to providing you with a seamless, enjoyable, and secure shopping experience. Thank you for choosing us as your fashion partner!
              </p>
          </div>
          <div className="about-socials" style={{display: "flex", gap: "1.5rem", marginTop: "2.5rem", justifyContent: "center"}}>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="about-social-link instagram" aria-label="Instagram">
              <svg width="32" height="32" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="448" height="512" rx="80" fill="#E1306C"/>
                <path d="M224 144c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 132c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52zm146.4-136c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S371.1 1.7 335.8 0C300.4-1.7 267.2-1.7 231.8 0c-35.3 1.7-66.7 9.9-92.9 36.2S1.7 76.9 0 112.2C-1.7 147.6-1.7 180.8 0 216.2c1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.4 1.7 68.6 1.7 104 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.4 1.7-68.6 0-104zm-48.6 218.7c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.4 9s-103 .7-132.4-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.4s-.7-103 9-132.4c7.8-19.6 22.9-34.7 42.5-42.5C76.9 1.7 146.7 4.4 180 4.4s103-.7 132.4 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.4s.7 103-9 132.4z" fill="#fff"/>
            </svg>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="about-social-link" aria-label="WhatsApp">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#25D366"/><path d="M16 7.2a8.8 8.8 0 0 0-7.7 13.1l-1 3.7 3.8-1A8.8 8.8 0 1 0 16 7.2Zm4.9 12.1c-.2.6-1.1 1.1-1.5 1.2-.4.1-.9.2-1.5-.1-.3-.1-.7-.2-1.2-.5a10.7 10.7 0 0 1-3.2-3.2c-.2-.3-.4-.7-.5-1.2-.2-.6-.1-1.1-.1-1.5.1-.4.6-1.3 1.2-1.5.2-.1.4-.1.6 0l.8.8c.1.1.2.3.1.5-.1.3-.2.6-.3.7-.1.1-.1.2 0 .4.2.4.7 1.1 1.3 1.7.6.6 1.3 1.1 1.7 1.3.2.1.3.1.4 0 .1-.1.4-.2.7-.3.2-.1.4 0 .5.1l.8.8c.1.2.1.4 0 .6Z" fill="#fff"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="about-social-link" aria-label="LinkedIn">
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#0077B5"/><path d="M12.3 13.6h2.2v1.1c.3-.5 1.1-1.2 2.3-1.2 2.5 0 3 1.6 3 3.7v4.2h-2.2v-3.7c0-.9-.1-2-1.3-2s-1.5 1-1.5 2v3.7h-2.2v-7.8Zm-3.2 0h2.2v7.8H9.1v-7.8ZM10.2 9.9a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" fill="#fff"/></svg>
            </a>
          </div>
          <p style={{
              fontSize: "1.15rem",
              color: "#444",
              marginTop: "2.5rem",
              textAlign: "center",
              fontWeight: 600
          }}>
              Thank you for choosing <span style={{color: "#ff512f"}}>Lizz</span>. We hope you enjoy your premium shopping experience!
          </p>
      </div>
    </>
  )
}
export default About