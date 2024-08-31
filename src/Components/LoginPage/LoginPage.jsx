import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ThreeDots } from "react-loader-spinner";
import { auth } from "../firebase"; // Import auth from firebase.js

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/adminDashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        setError("Invalid email or password");
      } else {
        setError("Login Failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login_container">
      <button className="login_back_btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
      <div className="login-form">
        <h2 className="login-form_title">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="login-form_input"
            type="email"
            placeholder="Email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-form_input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="login-submit-btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <ThreeDots 
                height="15" 
                width="50" 
                color="#ffffff" 
                ariaLabel="loading" 
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
