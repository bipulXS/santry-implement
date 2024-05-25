import { useState } from "react";

export default function Sentry() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        margin: 7,
        backgroundColor: "#fff",
        width: "200px",
        padding: 7,
      }}
    >
      <div>
        <button
          onClick={() => {
            throw new Error("Sentry Frontend Error");
          }}
        >
          Break Application
        </button>
      </div>
      <div style={{ display: "flex", gap: 7, alignItems: "baseline" }}>
        <button
          onClick={() => {
            setCount((prevState) => prevState + 1);
          }}
        >
          Increase
        </button>
        <span style={{ color: "#000" }}>{count}</span>
      </div>
    </div>
  );
}
