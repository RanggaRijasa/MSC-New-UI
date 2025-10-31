export default function SectionTitle({ eyebrow, title, right }) {
  return (
    <div
      style={{
        marginBottom: "1.25rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem"
      }}
    >
      <div>
        {eyebrow ? (
          <p
            style={{
              textTransform: "uppercase",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              opacity: 0.5,
              marginBottom: "0.25rem"
            }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2 style={{ fontSize: "1.5rem", margin: 0, textTransform: "uppercase" }}>
          {title}
        </h2>
      </div>
      {right ? <div>{right}</div> : null}
    </div>
  );
}
