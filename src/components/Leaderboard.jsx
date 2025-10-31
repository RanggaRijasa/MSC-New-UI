import { leaderboardData } from "../data.js";

export default function Leaderboard({ compact = false }) {
  return (
    <div className="lb-shell">
      <div className="lb-header">
        <div>
          <p
            style={{
              fontSize: "0.65rem",
              textTransform: "uppercase",
              opacity: 0.45,
              marginBottom: "0.2rem"
            }}
          >
            Live leaderboard
          </p>
          <p className="lb-title">Top 5</p>
        </div>
        <button className="btn-outline" style={{ fontSize: "0.65rem", padding: "0.3rem 0.7rem" }}>
          Cek Semua
        </button>
      </div>
      <div className="lb-body">
        {leaderboardData.map((item, idx) => (
          <div key={idx} className="lb-row">
            <div className="lb-rank">#{idx + 1}</div>
            <div className="lb-name">{item.name}</div>
            <div className="lb-score">{item.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
