// src/Dashboard.tsx
import React, { useState } from "react";

type DashboardProps = {
  user: string;
};

type Workshop = {
  id: number;
  title: string;
  dateTime: string;
  location: string;
  capacity: number;
  booked: number;
};

type Booking = {
  id: number;
  workshopTitle: string;
  host: string;
  status: "booked" | "attended" | "cancelled";
  dateTime: string;
};

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [myWorkshops] = useState<Workshop[]>([
    {
      id: 1,
      title: "Intro to React Hooks",
      dateTime: "Mon · 5:00 PM",
      location: "Lab 2",
      capacity: 20,
      booked: 12,
    },
    {
      id: 2,
      title: "Competitive Programming 101",
      dateTime: "Wed · 7:00 PM",
      location: "Online · GMeet",
      capacity: 50,
      booked: 45,
    },
  ]);

  const [myBookings] = useState<Booking[]>([
    {
      id: 1,
      workshopTitle: "UI/UX for Beginners",
      host: "Ananya",
      status: "booked",
      dateTime: "Tomorrow · 4:30 PM",
    },
    {
      id: 2,
      workshopTitle: "Git & GitHub Deep Dive",
      host: "Karan",
      status: "attended",
      dateTime: "Last week",
    },
  ]);

  return (
    <div>
      <section className="card" style={{ maxWidth: "900px" }}>
        <h1>SkillSwap Dashboard</h1>
        <p style={{ marginBottom: "0.5em" }}>
          Logged in as <strong>{user || "SkillSwap user"}</strong>
        </p>
        <p>
          From here you can see the workshops you are hosting and the ones
          you&apos;ve booked as a participant.
        </p>
      </section>

      <section className="card" style={{ maxWidth: "900px" }}>
        <h2>My Hosted Workshops</h2>
        {myWorkshops.length === 0 ? (
          <p>You are not hosting any workshops yet.</p>
        ) : (
          <table style={{ width: "100%", marginTop: "0.8em" }}>
            <thead>
              <tr>
                <th align="left">Title</th>
                <th align="left">Date & Time</th>
                <th align="left">Location</th>
                <th align="left">Seats</th>
              </tr>
            </thead>
            <tbody>
              {myWorkshops.map((ws) => (
                <tr key={ws.id}>
                  <td>{ws.title}</td>
                  <td>{ws.dateTime}</td>
                  <td>{ws.location}</td>
                  <td>
                    {ws.booked}/{ws.capacity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button style={{ marginTop: "1em" }}>
          + Create a new workshop (demo)
        </button>
      </section>

      <section className="card" style={{ maxWidth: "900px" }}>
        <h2>My Bookings</h2>
        {myBookings.length === 0 ? (
          <p>You have not booked any workshops yet.</p>
        ) : (
          <table style={{ width: "100%", marginTop: "0.8em" }}>
            <thead>
              <tr>
                <th align="left">Workshop</th>
                <th align="left">Host</th>
                <th align="left">When</th>
                <th align="left">Status</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.map((b) => (
                <tr key={b.id}>
                  <td>{b.workshopTitle}</td>
                  <td>{b.host}</td>
                  <td>{b.dateTime}</td>
                  <td
                    style={{
                      textTransform: "capitalize",
                      color:
                        b.status === "booked"
                          ? "#2b6cb0"
                          : b.status === "attended"
                          ? "green"
                          : "crimson",
                    }}
                  >
                    {b.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
