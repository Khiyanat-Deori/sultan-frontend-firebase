import axios from "axios";
import useAuth from "../../hooks/useAuth.js";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../BaseUrl.js";
import { ThreeDots } from "react-loader-spinner"; 

const LOGIN_URL = `${BASE_URL}/api/admin/login`;

const login = async ({ email, password }) => {
  const response = await axios.post(
    LOGIN_URL,
    JSON.stringify({ email, password }),
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  return response.data;
};

const LoginPage = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setError] = useState("");
  const navigate = useNavigate();

  const { mutate, isLoading, error } = useMutation(login, {
    onSuccess: (data) => {
      const accessToken = data?.accessToken;
      setAuth({ accessToken });
      setEmail("");
      setPassword("");
      navigate("/adminDashboard");
    },
    onError: (error) => {
      if (!error.response) {
        setError("No Server Response");
      } else if (error.response?.status === 400) {
        setError("Missing Email or Password");
      } else if (error.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Login Failed");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <>
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
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Center the spinner
              />
              ) : (
                "Submit"
              )}
            </button>
          </form>
          {error && <p>{errorMsg}</p>}
        </div>
      </div>
    </>
  );
};

export default LoginPage;

