import React, { useState } from 'react'

const aiResponses = [
  "Thank you for your enquiry. We'll get back to you soon!",
  "Our team will reach out to you within 24 hours.",
  "For order status, please provide your order ID.",
  "You can also check our FAQ section for quick answers.",
  "We appreciate your feedback! Is there anything else we can help with?",
  "Our support team is available 9am-7pm, Mon-Sat.",
  "If you need urgent help, call us at +91 12345 67890.",
  "Can you please specify your issue in detail?",
  "We offer free shipping on orders above ₹999.",
  "You can track your order in the 'My Orders' section.",
  "For returns, please visit our Returns & Exchanges page.",
  "Would you like to know about our latest offers?",
  "Our products are 100% authentic and quality checked.",
  "If you have a suggestion, we'd love to hear it!",
  "Thank you for being a valued customer of Lizz."
]

export const Contact = () => {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi! How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [aiIndex, setAiIndex] = useState(0)

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: 'ai', text: aiResponses[aiIndex % aiResponses.length] }
      ])
      setAiIndex(i => i + 1)
    }, 1200)
    setInput('')
  }

  return (
    <div
      className="contact-container premium-contact solar-bg"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "transparent",
        position: "relative",
        zIndex: 1
      }}
    >
      {/* Solar system planets */}
      <div className="solar-system">
        <div className="planet sun"></div>
        <div className="planet earth"></div>
        <div className="planet mars"></div>
        <div className="planet jupiter"></div>
      </div>
      <h2 className="contact-title" style={{
        background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}>Contact Us</h2>
      <p style={{fontSize: "1.1rem", color: "#eee", textAlign: "center", margin: "2rem 0"}}>
        For any inquiries, feedback, or support, please email us at <a href="mailto:support@lizz.com" style={{color: "#ff512f", textDecoration: "underline"}}>support@lizz.com</a> or call us at <a href="tel:+911234567890" style={{color: "#ff512f", textDecoration: "underline"}}>+91 12345 67890</a>.
      </p>
      <div
        className="ai-chatbox"
        style={{
          margin: "0 auto",
          background: "linear-gradient(135deg, #23233b 60%, #ffdde9 100%)",
          borderRadius: "18px",
          boxShadow: "0 8px 32px #ff512f33",
          padding: "2rem 1.5rem 1.2rem 1.5rem",
          maxWidth: "420px",
          minHeight: "240px",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          alignItems: "center",
          justifyContent: "center",
          animation: "chatBoxFadeIn 0.8s cubic-bezier(0.68,-0.55,0.27,1.55), chatBoxPulse 2.5s 1.2s infinite alternate cubic-bezier(0.68,-0.55,0.27,1.55)",
          zIndex: 2
        }}
      >
        <div className="ai-chat-messages" style={{width: "100%"}}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`ai-chat-msg ai-chat-msg-${msg.from}`}
              style={{
                padding: "0.7em 1.1em",
                borderRadius: "16px",
                fontSize: "1.08rem",
                maxWidth: "80%",
                wordBreak: "break-word",
                marginBottom: "0.2rem",
                boxShadow: "0 2px 12px rgba(221,36,118,0.08)",
                background: msg.from === "ai"
                  ? "linear-gradient(90deg, #fff 60%, #ffe0f0 100%)"
                  : "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                color: msg.from === "ai" ? "#222" : "#fff",
                alignSelf: msg.from === "ai" ? "flex-start" : "flex-end",
                borderBottomLeftRadius: msg.from === "ai" ? "4px" : "16px",
                borderBottomRightRadius: msg.from === "user" ? "4px" : "16px",
                animation: msg.from === "ai"
                  ? "chatMsgPopLeft 0.5s, chatMsgGlow 1.2s 0.5s"
                  : "chatMsgPopRight 0.5s, chatMsgGlow 1.2s 0.5s"
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form className="ai-chat-form" onSubmit={handleSend} style={{display: "flex", gap: "0.5rem", width: "100%", justifyContent: "center"}}>
          <input
            className="ai-chat-input"
            type="text"
            placeholder="Type your enquiry..."
            value={input}
            onChange={e => setInput(e.target.value)}
            autoComplete="off"
            style={{
              flex: 1,
              padding: "0.7em 1em",
              borderRadius: "12px",
              border: "none",
              fontSize: "1rem",
              outline: "none",
              background: "#f7f7fa",
              transition: "box-shadow 0.2s",
              maxWidth: "260px"
            }}
          />
          <button
            className="ai-chat-send"
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              padding: "0.7em 1.3em",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s"
            }}
          >Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact