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
    <div className="card card-primary" style={{ maxWidth: "500px" }}>
      <h1>Login to SkillSwap</h1>
      <p className="mb-2">
        Use your SkillSwap account to manage your workshops and bookings.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
        </div>

        <div className="form-group">
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
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`btn btn-primary ${loading ? "loading" : ""}`}
          style={{ width: "100%" }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-2 text-muted text-center">
        Don&apos;t have a SkillSwap account?{" "}
        <Link
          to="/register"
          style={{ color: "var(--primary-green)", fontWeight: "600" }}
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
