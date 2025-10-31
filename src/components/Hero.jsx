import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-bg" aria-hidden />
      <div>
        <div className="badge">
          <span className="badge-dot" /> batch baru dibuka
          <span style={{ opacity: 0.4 }}>•</span> 10 day intensive
        </div>
        <h1 className="hero-title">
          MSC BODY <span>TRANSFORMATION</span>
        </h1>
        <p className="hero-sub">
          Program transformasi praktis buat kamu yang mau turun berat badan, tambah otot,
          dan tetap disiplin karena leaderboard-nya kelihatan 😎
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => (window.location = "/challenges")}>
            Mulai Challenge <FaArrowRight style={{ marginLeft: 6 }} />
          </button>
          <button
            className="btn-outline"
            onClick={() => (window.location = "/faq")}
            style={{ gap: 4, display: "inline-flex", alignItems: "center" }}
          >
            Lihat FAQ
            <span aria-hidden>→</span>
          </button>
        </div>

        <div className="metric-boxes">
          <div className="metric-card">
            <div className="metric-val">120+</div>
            <div className="metric-label">Peserta Aktif</div>
          </div>
          <div className="metric-card">
            <div className="metric-val">3.8 kg</div>
            <div className="metric-label">Rata-rata turun / 10 hari</div>
          </div>
          <div className="metric-card">
            <div className="metric-val">5 Coach</div>
            <div className="metric-label">Siap pantau kamu</div>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <p className="right-title">Kenapa pilih MSC?</p>
        <div className="point-list">
          <div className="point-item">
            <div className="point-icon">1</div>
            <div>
              <strong>Transformasi nyata</strong>
              <p style={{ margin: 0, fontSize: "0.78rem", opacity: 0.65 }}>
                Coaching harian + cek progress.
              </p>
            </div>
          </div>
          <div className="point-item">
            <div className="point-icon">2</div>
            <div>
              <strong>Sistem poin</strong>
              <p style={{ margin: 0, fontSize: "0.78rem", opacity: 0.65 }}>
                Langkah & penurunan BB auto tercatat.
              </p>
            </div>
          </div>
          <div className="point-item">
            <div className="point-icon">3</div>
            <div>
              <strong>Komunitas suportif</strong>
              <p style={{ margin: 0, fontSize: "0.78rem", opacity: 0.65 }}>
                Grup aktif, cocok buat pemula.
              </p>
            </div>
          </div>
          <div className="point-item">
            <div className="point-icon">4</div>
            <div>
              <strong>Nutrition ready</strong>
              <p style={{ margin: 0, fontSize: "0.78rem", opacity: 0.65 }}>
                Menu gampang + support Herbalife.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
