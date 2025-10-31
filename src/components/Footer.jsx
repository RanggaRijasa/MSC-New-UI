import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="brand" style={{ marginBottom: "0.6rem" }}>
            <div className="brand-icon">M</div>
            <div>
              <div style={{ fontSize: "0.9rem" }}>MSC BODY</div>
              <div style={{ fontSize: "0.6rem", opacity: 0.6 }}>
                POWER • MUSCLE • NUTRITION
              </div>
            </div>
          </div>
          <p style={{ maxWidth: "270px", opacity: 0.6, fontSize: "0.7rem" }}>
            FV34+H4RM, Tikala Baru, Tikala, Kota Manado, Sulawesi Utara
          </p>
        </div>
        <div>
          <p className="footer-col-title">Kontak</p>
          <p style={{ fontSize: "0.7rem" }}>Coach Lingga : 085240818888</p>
          <p style={{ fontSize: "0.7rem" }}>Coach Darmi : 085240909999</p>
        </div>
        <div>
          <p className="footer-col-title">Media Sosial</p>
          <div style={{ display: "flex", gap: "0.5rem", fontSize: "1.1rem" }}>
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2025 By MSC BodyTransformation</div>
    </footer>
  );
}
