export default function ContactStrip() {
  return (
    <div className="contact-strip">
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Butuh coach langsung?</p>
        <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.85 }}>
          Coach Lingga: 0852-4081-8888 • Coach Darmi: 0852-4090-9999
        </p>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <a href="https://wa.me/6285240818888" className="btn-primary">
          Chat Coach
        </a>
        <a href="/challenges" className="btn-outline">
          Lihat Batch
        </a>
      </div>
    </div>
  );
}
