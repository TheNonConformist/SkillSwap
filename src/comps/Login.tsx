// src/Login.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

type LoginProps = {
  setLoggedInUser: (username: string) => void;
};

const Login: React.FC<LoginProps> = ({ setLoggedInUser }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Welcome back to SkillSwap, ${form.username}!`);
        setLoggedInUser(form.username);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      alert("Cannot connect to server. Make sure backend is running!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h1>Login to SkillSwap</h1>
      <p style={{ marginBottom: "1em" }}>
        Use your SkillSwap account to manage your workshops and bookings.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Username / SRN
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            placeholder="Enter your SRN or username"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ marginTop: "1em", fontSize: "0.9em" }}>
        Don&apos;t have a SkillSwap account?{" "}
        <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
