"use client";

import { useEffect, useState } from "react";

const C = {
  petroleum: "#124f45",
  gold:      "#C7A856",
  offwhite:  "#F8F6F1",
  border:    "#E8E4DC",
};

/*
  Loading screen — 2×2 dot grid mirrors the brand mark.

  Timeline:
    0 ms    → dots are scale(0), invisible  (SSR-safe initial state)
   60 ms    → mounted = true  → dots pop in with spring stagger
  1 600 ms  → exiting = true  → whole overlay fades out + progress completes
  2 200 ms  → gone = true     → component unmounts
*/
export default function Loading() {
  const [mounted,  setMounted]  = useState(false);
  const [exiting,  setExiting]  = useState(false);
  const [gone,     setGone]     = useState(false);

  useEffect(() => {
    const t0 = setTimeout(() => setMounted(true),  60);
    const t1 = setTimeout(() => setExiting(true), 1600);
    const t2 = setTimeout(() => setGone(true),    2200);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         10001,
        background:     C.offwhite,
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        gap:            28,
        opacity:    exiting ? 0 : 1,
        transition: exiting ? "opacity 0.55s cubic-bezier(0.4,0,0.2,1)" : "none",
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {/* ── 2×2 dot grid ── */}
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 10,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width:        20,
              height:       20,
              borderRadius: "50%",
              background:   C.petroleum,
              /* spring pop-in, staggered by 90 ms per dot */
              transform:  mounted ? "scale(1)" : "scale(0)",
              opacity:    mounted ? 1 : 0,
              transition: [
                `transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 90}ms`,
                `opacity   0.4s ease                           ${i * 90}ms`,
              ].join(", "),
              /* gentle breathing while waiting */
              animation:
                mounted && !exiting
                  ? `loadDot 1.6s ease-in-out ${i * 180}ms infinite`
                  : "none",
            }}
          />
        ))}
      </div>

      {/* ── brand wordmark ── */}
      <p
        style={{
          fontFamily:    "Helvetica, Arial, sans-serif",
          fontSize:      10,
          fontWeight:    700,
          color:         C.petroleum,
          letterSpacing: "5px",
          textTransform: "uppercase",
          margin:        0,
          opacity:   mounted ? 0.4 : 0,
          transform: mounted ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.5s ease 420ms, transform 0.5s ease 420ms",
        }}
      >
        MANZOMA
      </p>

      {/* ── bottom progress line ── */}
      <div
        style={{
          position:   "absolute",
          bottom:     0,
          left:       0,
          right:      0,
          height:     2,
          background: C.border,
          overflow:   "hidden",
        }}
      >
        <div
          style={{
            height:     "100%",
            background: `linear-gradient(to right, ${C.petroleum}, ${C.gold})`,
            width: mounted ? (exiting ? "100%" : "78%") : "0%",
            transition: mounted
              ? exiting
                ? "width 0.55s ease"
                : "width 1.6s cubic-bezier(0.22,1,0.36,1)"
              : "none",
          }}
        />
      </div>

      <style>{`
        @keyframes loadDot {
          0%, 100% { transform: scale(1);    opacity: 1;    }
          50%       { transform: scale(0.72); opacity: 0.55; }
        }
      `}</style>
    </div>
  );
}
