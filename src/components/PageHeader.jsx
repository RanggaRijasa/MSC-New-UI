export default function PageHeader({ title, subtitle }) {
  return (
    <div
      style={{
        background: "radial-gradient(circle, rgba(255,198,42,0.035), rgba(0,0,0,0))",
        borderBottom: "1px solid rgba(255,255,255,0.03)",
        marginBottom: "1.5rem",
        paddingBottom: "1rem"
      }}
    >
      <h1 style={{ textTransform: "uppercase", marginBottom: "0.3rem" }}>{title}</h1>
      {subtitle ? <p style={{ opacity: 0.6, maxWidth: "42rem" }}>{subtitle}</p> : null}
    </div>
  );
}
