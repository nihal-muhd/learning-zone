import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const VALID_EMAIL = "test@gmail.com";
const VALID_PASSWORD = "123";
const VALID_NAME = "Nihal";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const hanldeSubmit = (event) => {
    event.preventDefault();

    const validUser =
      VALID_EMAIL === formData.email && VALID_PASSWORD === formData.password;

    if (!validUser) return;

    localStorage.setItem("token", "fakeToken");
    localStorage.setItem(
      "user",
      JSON.stringify({ name: VALID_NAME, email: VALID_EMAIL }),
    );
    navigate("/dashboard", { replace: true });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome back</h1>
          <p>Please enter your email and pasword</p>
        </div>
        <form className="login-form" onSubmit={hanldeSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              className="form-input"
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
