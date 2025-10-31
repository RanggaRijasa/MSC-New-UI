import PageHeader from "../components/PageHeader.jsx";
import { leaderboardData } from "../data.js";

export default function Profile() {
  const user = {
    name: "Rangga Rijasa",
    joined: "8 Apr 2024",
    coach: "Coach Lingga",
    phone: "085241997304"
  };

  return (
    <div className="section">
      <PageHeader title="Profil" subtitle="Data akun dan progress kamu." />

      <div style={{ display: "grid", gridTemplateColumns: "0.35fr 1fr", gap: "1.5rem" }}>
        <div
          style={{
            background: "radial-gradient(circle, rgba(0,0,0,0.6), #0b0b0d)",
            border: "1px solid rgba(255,255,255,0.02)",
            borderRadius: "1.1rem",
            padding: "1.2rem"
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "1.1rem",
              background: "linear-gradient(160deg, #ffc62a, #ff3646)",
              display: "grid",
              placeItems: "center",
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "0.8rem"
            }}
          >
            R
          </div>
          <h3 style={{ margin: "0 0 0.5rem" }}>{user.name}</h3>
          <p style={{ fontSize: "0.7rem", opacity: 0.6 }}>
            Tanggal bergabung: {user.joined}
          </p>
          <p style={{ fontSize: "0.7rem", opacity: 0.6 }}>
            Coach: <strong>{user.coach}</strong>
          </p>
          <p style={{ fontSize: "0.7rem", opacity: 0.6 }}>HP: {user.phone}</p>

          <button className="btn-primary" style={{ marginTop: "0.8rem", width: "100%" }}>
            Edit Profil
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{
              background: "radial-gradient(circle, rgba(255,198,42,0.03), #0b0b0d)",
              border: "1px solid rgba(255,198,42,0.08)",
              borderRadius: "1.1rem",
              padding: "1rem"
            }}
          >
            <h3 style={{ marginTop: 0 }}>Program Saya</h3>
            <p style={{ fontSize: "0.7rem", opacity: 0.7 }}>MSC 10 Day — November 2025</p>
            <p style={{ fontSize: "0.7rem", opacity: 0.7 }}>
              Status: <span style={{ color: "#ffc62a" }}>Berjalan</span>
            </p>
            <p style={{ fontSize: "0.7rem", opacity: 0.7 }}>
              Hari ke: <strong>4/10</strong>
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: "0.6rem" }}>Leaderboard saat ini</h3>
            <div style={{ maxWidth: "460px" }}>
              {leaderboardData.map((item, idx) => (
                <div key={idx} className="lb-row">
                  <div className="lb-rank">#{idx + 1}</div>
                  <div className="lb-name">{item.name}</div>
                  <div className="lb-score">{item.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
