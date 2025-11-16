// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./comps/Home";
import About from "./comps/About";
import Help from "./comps/Help";
import Register from "./comps/Register";
import Login from "./comps/Login";
import Dashboard from "./comps/Dashboard";


const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string>("");

  return (
    <Router>
      <nav>
        <span style={{ fontWeight: 700, fontSize: "1.3em", marginRight: "2em" }}>
          SkillSwap
        </span>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/help">Help</Link>
        <span style={{ marginLeft: "auto", fontSize: "0.95em" }}>
          {loggedInUser
            ? `Logged in as ${loggedInUser}`
            : "Not logged in"}
        </span>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<Dashboard user={loggedInUser} />}
          />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
