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
      <section className="card card-primary" style={{ maxWidth: "900px" }}>
        <h1>SkillSwap – Campus Peer Workshops</h1>
        <p className="mb-2">
          Discover and host short, peer‑led workshops on campus – from DSA and
          web dev to design, music, and more.
        </p>
        <p>
          Log in to create your own workshop or book a seat in sessions hosted
          by other students.
        </p>
        <div className="flex mt-3" style={{ gap: "1rem" }}>
          <Link to="/login">
            <button className="btn btn-primary">Login & Explore</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-secondary">
              Create SkillSwap Account
            </button>
          </Link>
        </div>
      </section>

      <section className="card card-accent" style={{ maxWidth: "900px" }}>
        <h2>Featured Workshops</h2>
        <p className="mb-2">
          These are sample workshops to show how the SkillSwap interface will
          look during your demo.
        </p>

        <div className="grid grid-3">
          {sampleWorkshops.map((ws) => (
            <div
              key={ws.id}
              className="card fade-in"
              style={{
                maxWidth: "100%",
                padding: "1.5rem",
              }}
            >
              <h3>{ws.title}</h3>
              <p className="text-muted">Hosted by {ws.host}</p>
              <p className="mt-1">{ws.date}</p>
              <p className="text-muted">{ws.location}</p>
              <div className="mt-2">
                {ws.tags.map((tag, index) => (
                  <span key={index} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-success" style={{ fontWeight: 600 }}>
                Spots left: {ws.spotsLeft}
              </p>
              <button className="btn btn-primary mt-2">View details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
