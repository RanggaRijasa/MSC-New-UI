import PageHeader from "../components/PageHeader.jsx";

export default function About() {
  return (
    <div className="section">
      <PageHeader
        title="Tentang Kami"
        subtitle="MSC Body Transformation adalah bagian dari Mega Slim Challenge (MSC), program transformasi menyeluruh berbasis Power, Muscle, dan Nutrition."
      />

      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr 0.6fr" }}>
        <div>
          <p style={{ opacity: 0.65, lineHeight: 1.6 }}>
            Tidak cuma nurunin berat badan, MSC bantu kamu membangun tubuh yang kuat, sehat,
            dan penuh energi. Program kita dipantau langsung coach, ada laporan, dan ada
            leaderboard biar kompetitif tapi tetap seru.
          </p>
          <p style={{ opacity: 0.65, lineHeight: 1.6 }}>
            Kita biasa pakai kombinasi: edukasi nutrisi, workout sederhana yang bisa dikerjakan
            di rumah, dan tugas harian. Peserta juga dipersilakan menggunakan produk
            pendukung seperti Herbalife untuk hasil yang lebih stabil.
          </p>
          <ul style={{ opacity: 0.75, lineHeight: 1.7 }}>
            <li>Program 10 hari / 21 hari</li>
            <li>Tracking poin (steps + turun BB)</li>
            <li>Grup WA / Telegram aktif</li>
            <li>Coach lokal: Coach Lingga & team</li>
          </ul>
        </div>

        <div
          style={{
            background: "radial-gradient(circle, rgba(255,198,42,0.02), #0d0d10)",
            border: "1px solid rgba(255,198,42,0.06)",
            borderRadius: "1.2rem",
            padding: "1rem"
          }}
        >
          <p style={{ fontSize: "0.7rem", opacity: 0.55 }}>Profil Coach</p>
          <img
            src="https://images.unsplash.com/photo-1605296867720-8c77e3d3c38e?q=80&w=800&auto=format&fit=crop"
            alt="coach"
            style={{
              borderRadius: "1rem",
              height: "210px",
              width: "100%",
              objectFit: "cover",
              marginBottom: "0.7rem"
            }}
          />
          <h3 style={{ margin: 0 }}>Coach Lingga</h3>
          <p style={{ fontSize: "0.7rem", opacity: 0.6 }}>
            Konsultan & coach MSC. Fokus ke body transformation & duplikasi bisnis Herbalife.
          </p>
          <p style={{ fontSize: "0.7rem", opacity: 0.6, marginTop: "0.6rem" }}>
            WA: 085240818888
          </p>
        </div>
      </div>
    </div>
  );
}
