// src/Help.tsx
import React from "react";

const Help: React.FC = () => (
  <div className="card">
    <h1>Help & Demo Guide</h1>
    <p style={{ marginBottom: "0.8em" }}>
      This version of the project is a SkillSwap demo – a campus peer workshop
      portal built with React and a Node.js + MongoDB backend.
    </p>

    <h2>How to demo</h2>
    <ul style={{ marginLeft: "1.2em", marginTop: "0.5em" }}>
      <li>Register a SkillSwap account using the Register page.</li>
      <li>Login with those credentials and open the Dashboard.</li>
      <li>
        Explain the &quot;My Hosted Workshops&quot; and &quot;My Bookings&quot;
        sections and how they will be connected to backend APIs in Phase‑2.
      </li>
      <li>
        Go back to Home to show the explore/featured workshops layout and UI
        design.
      </li>
    </ul>

    <h2>Contact / Team</h2>
    <p style={{ marginTop: "0.5em" }}>
      For questions about this project, refer to the SkillSwap phase
      documentation and your team members listed in the report.
    </p>
  </div>
);

export default Help;
