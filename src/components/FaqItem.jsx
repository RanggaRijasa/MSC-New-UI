import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.035)",
        padding: "0.65rem 0"
      }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          background: "transparent",
          border: "none",
          color: "inherit",
          width: "100%",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          padding: "0.1rem 0"
        }}
      >
        <span style={{ fontWeight: 600 }}>{q}</span>
        <FaChevronDown
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: ".2s" }}
        />
      </button>
      {open ? (
        <p style={{ fontSize: "0.78rem", opacity: 0.6, marginTop: "0.45rem" }}>{a}</p>
      ) : null}
    </div>
  );
}
