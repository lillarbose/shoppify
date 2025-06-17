import React, { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please enter both email and password.")
      return
    }
    // Simulate login
    setError("")
    alert("Logged in successfully!")
  }

  return (
    <div className="login-container" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fff 60%, #ffe0f0 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className="login-box" style={{
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 8px 32px #ff512f22",
        padding: "2.5rem 2rem",
        minWidth: "340px",
        maxWidth: "95vw"
      }}>
        <h2 style={{
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "1.5rem",
          textAlign: "center",
          background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>Sign-In</h2>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "1.2rem"}}>
          <label style={{fontWeight: 600, color: "#444"}}>Email or mobile phone number</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              padding: "0.9em 1em",
              borderRadius: "10px",
              border: "1.5px solid #eee",
              fontSize: "1rem",
              outline: "none"
            }}
            autoFocus
            required
          />
          <label style={{fontWeight: 600, color: "#444"}}>Password</label>
          <div style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                padding: "0.9em 1em",
                borderRadius: "10px",
                border: "1.5px solid #eee",
                fontSize: "1rem",
                flex: 1
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              style={{
                background: "none",
                border: "none",
                color: "#ff512f",
                fontWeight: 600,
                cursor: "pointer"
              }}
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error && <div style={{color: "#ff512f", fontWeight: 600, marginTop: "-0.7rem"}}>{error}</div>}
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "0.9em 1em",
              fontSize: "1.1rem",
              fontWeight: 700,
              marginTop: "0.7rem",
              cursor: "pointer",
              transition: "background 0.2s"
            }}
          >Sign-In</button>
        </form>
        <div style={{marginTop: "1.5rem", fontSize: "0.98rem", color: "#555", textAlign: "center"}}>
          By continuing, you agree to Lizz's <a href="#" style={{color: "#ff512f", textDecoration: "underline"}}>Conditions of Use</a> and <a href="#" style={{color: "#ff512f", textDecoration: "underline"}}>Privacy Notice</a>.
        </div>
        <div style={{marginTop: "2rem", textAlign: "center"}}>
          <span style={{color: "#888"}}>New to Lizz?</span>
          <br />
          <button
            style={{
              marginTop: "0.7rem",
              background: "#fff",
              color: "#ff512f",
              border: "1.5px solid #ff512f",
              borderRadius: "10px",
              padding: "0.7em 1.2em",
              fontWeight: 700,
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s"
            }}
            onClick={() => alert("Redirect to registration page")}
          >Create your Lizz account</button>
        </div>
      </div>
    </div>
  )
}

export default Login