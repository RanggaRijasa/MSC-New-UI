import { eventsData } from "../data.js";
import PageHeader from "../components/PageHeader.jsx";

export default function Challenges() {
  return (
    <div className="section">
      <PageHeader
        title="MSC Event & Challenge"
        subtitle="Pilih batch yang lagi jalan atau yang akan dibuka. Setelah daftar, coach akan follow-up di WA."
      />
      <div
        style={{
          display: "grid",
          gap: "1.3rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))"
        }}
      >
        {eventsData.map((ev) => (
          <article
            key={ev.id}
            style={{
              background: "radial-gradient(circle, rgba(13,13,15,0.4), #0b0b0d)",
              border: "1px solid rgba(255,198,42,0.08)",
              borderRadius: "1.2rem",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ height: "160px", background: "#151515" }}>
              {/* pakai background gambar */}
            </div>
            <div style={{ padding: "1rem 1.1rem 1.1rem" }}>
              <p style={{ fontSize: "0.7rem", opacity: 0.5, marginBottom: "0.4rem" }}>
                {ev.batch}
              </p>
              <h2 style={{ margin: 0, fontSize: "1rem" }}>{ev.title}</h2>
              <p style={{ fontSize: "0.72rem", opacity: 0.5, marginTop: "0.4rem" }}>
                {ev.dateRange} • {ev.participants} peserta
              </p>
              <p style={{ marginTop: "0.4rem" }}>
                <span
                  style={{
                    background:
                      ev.status === "Anda Peserta"
                        ? "rgba(255,198,42,0.1)"
                        : "rgba(255,54,70,0.1)",
                    color: ev.status === "Anda Peserta" ? "#ffc62a" : "#ff3646",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "999px",
                    fontSize: "0.68rem"
                  }}
                >
                  {ev.status}
                </span>
              </p>
              <p style={{ fontWeight: 700, marginTop: "0.7rem" }}>
                Rp {ev.price.toLocaleString("id-ID")}
              </p>
              <button
                className="btn-primary"
                style={{ width: "100%", marginTop: "0.6rem" }}
                onClick={() => alert("Form pendaftaran bisa dimunculkan di sini")}
              >
                Lihat Detail
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
