import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Login</h1>
      <form onSubmit={hanldeSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
