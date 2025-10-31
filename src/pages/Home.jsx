import Hero from "../components/Hero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Leaderboard from "../components/Leaderboard.jsx";
import Champions from "../components/Champions.jsx";
import ContactStrip from "../components/ContactStrip.jsx";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section section-grid" id="mengapa">
        <div>
          <SectionTitle
            eyebrow="Alasan bergabung"
            title="Mengapa kamu harus pilih MSC?"
          />
          <p style={{ opacity: 0.6, fontSize: "0.8rem" }}>
            Semua challenge kita dirancang supaya orang yang gampang “kendor” jadi tetap
            jalan, karena ada leaderboard & ada coach yang cek progress.
          </p>
          <ul style={{ marginTop: "1rem", lineHeight: 1.6, opacity: 0.7 }}>
            <li>Program efektif: kombinasi workout + nutrisi + accountability</li>
            <li>Coaching langsung coach berpengalaman</li>
            <li>Challenge rutin (10 hari / 21 hari / bulanan)</li>
            <li>Komunitas suportif yang aktif</li>
          </ul>
        </div>
        <div>
          <Leaderboard />
        </div>
      </section>

      <section className="section" id="champions">
        <SectionTitle eyebrow="Konsisten itu keren" title="MSC Champions" />
        <Champions />
      </section>

      <section className="section">
        <ContactStrip />
      </section>
    </>
  );
}
