// src/Register.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register: React.FC = () => {
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
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("SkillSwap account created successfully! You can now login.");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed!");
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
      <h1>Create SkillSwap Account</h1>
      <p style={{ marginBottom: "1em" }}>
        Register once to host workshops, book seats, and track your learning.
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
            placeholder="Choose a username or use SRN"
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
            placeholder="Create a strong password"
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>

      <p style={{ marginTop: "1em", fontSize: "0.9em" }}>
        Already have a SkillSwap account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
