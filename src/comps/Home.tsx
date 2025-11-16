// src/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const sampleWorkshops = [
    {
      id: 1,
      title: "Intro to Git & GitHub",
      host: "Aditi Sharma",
      tags: ["Git", "Tools"],
      date: "Today · 5:00 PM",
      location: "CSE Lab 3",
      spotsLeft: 5,
    },
    {
      id: 2,
      title: "Basics of UI/UX in Figma",
      host: "Rahul Mehta",
      tags: ["Design", "Figma"],
      date: "Tomorrow · 4:30 PM",
      location: "Design Studio",
      spotsLeft: 2,
    },
    {
      id: 3,
      title: "DSA Interview Prep Sprint",
      host: "Sneha Rao",
      tags: ["DSA", "CP"],
      date: "Saturday · 10:00 AM",
      location: "Library Seminar Hall",
      spotsLeft: 10,
    },
  ];

  return (
    <div>
      <section className="card" style={{ maxWidth: "900px" }}>
        <h1>SkillSwap – Campus Peer Workshops</h1>
        <p style={{ marginBottom: "0.8em" }}>
          Discover and host short, peer‑led workshops on campus – from DSA and
          web dev to design, music, and more.
        </p>
        <p>
          Log in to create your own workshop or book a seat in sessions hosted
          by other students.
        </p>
        <div style={{ marginTop: "1.5em", display: "flex", gap: "1em" }}>
          <Link to="/login">
            <button>Login & Explore</button>
          </Link>
          <Link to="/register">
            <button style={{ background: "#fff", color: "#4c51bf" }}>
              Create SkillSwap Account
            </button>
          </Link>
        </div>
      </section>

      <section className="card" style={{ maxWidth: "900px" }}>
        <h2>Featured Workshops</h2>
        <p style={{ marginBottom: "1em" }}>
          These are sample workshops to show how the SkillSwap interface will
          look during your demo.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1em",
          }}
        >
          {sampleWorkshops.map((ws) => (
            <div
              key={ws.id}
              className="card"
              style={{
                maxWidth: "100%",
                boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                padding: "1.5em",
              }}
            >
              <h3>{ws.title}</h3>
              <p style={{ fontSize: "0.95em", color: "#555" }}>
                Hosted by {ws.host}
              </p>
              <p style={{ marginTop: "0.4em" }}>{ws.date}</p>
              <p style={{ fontSize: "0.9em" }}>{ws.location}</p>
              <p style={{ marginTop: "0.6em", fontSize: "0.9em" }}>
                Tags: {ws.tags.join(", ")}
              </p>
              <p style={{ marginTop: "0.4em", fontWeight: 600 }}>
                Spots left: {ws.spotsLeft}
              </p>
              <button style={{ marginTop: "0.8em" }}>View details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
