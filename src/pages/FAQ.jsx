import PageHeader from "../components/PageHeader.jsx";
import { faqData } from "../data.js";
import FaqItem from "../components/FaqItem.jsx";

export default function FAQ() {
  return (
    <div className="section">
      <PageHeader
        title="FAQ"
        subtitle="Pertanyaan yang paling sering ditanyain soal challenge, sistem poin, dan produk."
      />
      <div
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.5), #0b0b0d)",
          border: "1px solid rgba(255,255,255,0.01)",
          borderRadius: "1.2rem",
          padding: "1.1rem 1.2rem 0.4rem"
        }}
      >
        {faqData.map((item, idx) => (
          <FaqItem key={idx} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  );
}
