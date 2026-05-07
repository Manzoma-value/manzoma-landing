"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = {
  petroleum: "#015A62",
  gold: "#C7A856",
  crimson: "#972B28",
  rose: "#B18083",
  white: "#FFFFFF",
  offwhite: "#F8F6F1",
  border: "#E8E4DC",
  ink: "#0D1F21",
  inkSoft: "#2E4547",
  inkMuted: "#6B7C7D",
};

const reasons = [
  {
    num: "01",
    tag: "المنهجية",
    ar: "نبدأ من النموذج لنشكل الواقع",
    en: "Model-First Approach",
    desc: "لا ننطلق من التشغيل، بل من بناء النموذج الفكري الذي يسبق كل قرار ويحكم كل خطوة. المنظومة تبني الإطار قبل أن تبني الجدران.",
    accent: COLORS.petroleum,
  },
  {
    num: "02",
    tag: "القرار",
    ar: "نعمل على القرار قبل التشغيل",
    en: "Decision Before Execution",
    desc: "نُرسي منطق القرار قبل أن تبدأ العجلة التشغيلية، لأن القرار الخاطئ لا يُصحَّح بالتنفيذ الجيد — بل يُكلّف أضعافاً.",
    accent: COLORS.gold,
  },
  {
    num: "03",
    tag: "التعليم",
    ar: "نرى التعليم كمنصة إنتاج قيمة",
    en: "Education as Value Platform",
    desc: "التعليم في منظومتنا ليس خدمة تُقدَّم، بل منصة إنتاج اقتصادي حقيقي قابل للقياس والتوسع والاستثمار المؤسسي.",
    accent: COLORS.crimson,
  },
  {
    num: "04",
    tag: "الأصول",
    ar: "نحول المعرفة إلى أصل اقتصادي",
    en: "Knowledge as Economic Asset",
    desc: "المعرفة عندنا ليست مفهوماً نظرياً — بل أصل ملموس قابل للتبادل والنمو، يُدار كما تُدار الأصول الاستراتيجية الكبرى.",
    accent: COLORS.rose,
  },
];

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Why() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const handleSetActive = (i: number) => {
    setActive(i);
    setAnimKey((k) => k + 1);
  };

  const vis = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  const visX = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(24px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section
      id="why"
      dir="rtl"
      ref={ref}
      style={{
        background: COLORS.offwhite,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <div
        className="why-header"
        style={{
          background: COLORS.white,
          borderBottom: `1px solid ${COLORS.border}`,
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            height: 3,
            background: `linear-gradient(to left, ${COLORS.rose}, ${COLORS.crimson}, ${COLORS.gold}, ${COLORS.petroleum})`,
          }}
        />

        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 0,
              ...vis(60),
            }}
          >
            <span
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 11,
                fontWeight: 800,
                color: COLORS.border,
                letterSpacing: "2px",
              }}
            >
              02
            </span>
            <div style={{ width: 40, height: 1, background: COLORS.border }} />
            <span
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: COLORS.petroleum,
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              WHY MANZOMA
            </span>
          </div>

          <div className="why-header-grid">
            <div style={vis(150)}>
              <h2
                className="why-h2"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontWeight: 800,
                  color: COLORS.ink,
                  lineHeight: 1.1,
                  letterSpacing: -2,
                  marginBottom: 0,
                }}
              >
                لماذا
                <br />
                <span
                  style={{
                    fontWeight: 800,
                    color: COLORS.petroleum,
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 6,
                  }}
                >
                  منظومة؟
                  <span
                    style={{
                      position: "absolute",
                      bottom: 4,
                      right: 0,
                      left: 0,
                      height: 3,
                      background: COLORS.gold,
                      borderRadius: 2,
                      transformOrigin: "right",
                      transform: inView ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 1s ease 0.9s",
                    }}
                  />
                </span>
              </h2>
            </div>
            <div style={{ paddingBottom: 8, ...vis(280) }}>
              <div
                style={{
                  borderRight: `4px solid ${COLORS.petroleum}`,
                  paddingRight: 20,
                  marginBottom: 18,
                }}
              >
                <p
                  className="why-tagline"
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontWeight: 800,
                    color: COLORS.petroleum,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  نبدأ من النموذج
                  <br />
                  <span style={{ color: COLORS.gold }}>لنشكّل الواقع</span>
                </p>
              </div>
              <p
                className="why-body"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontWeight: 500,
                  color: COLORS.inkSoft,
                  margin: 0,
                  lineHeight: 1.95,
                }}
              >
                منظومة لا تبدأ من التشغيل — بل من البنية المعرفية التي تحكم كل
                قرار، وتُوجّه كل استثمار، وتضبط كل توسّع.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP — full interactive section
      ══════════════════════════════════════════ */}
      <div className="why-desktop">
        <div className="why-main">
          {/* Tab cards */}
          <div className="why-tabs" style={{ ...vis(320) }}>
            {reasons.map((r, i) => (
              <button
                key={i}
                onClick={() => handleSetActive(i)}
                className="why-tab-btn"
                style={{
                  background: active === i ? r.accent : COLORS.white,
                  border: `1.5px solid ${active === i ? r.accent : COLORS.border}`,
                  borderRadius: 20,
                  cursor: "pointer",
                  textAlign: "right",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow:
                    active === i
                      ? `0 20px 48px ${r.accent}30`
                      : "0 4px 16px rgba(1,90,98,0.04)",
                  transform:
                    active === i ? "translateY(-3px)" : "translateY(0)",
                }}
                onMouseEnter={(e) => {
                  if (active !== i) {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      r.accent;
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 12px 32px ${r.accent}18`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== i) {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      COLORS.border;
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 16px rgba(1,90,98,0.04)";
                  }
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 3,
                    background: r.accent,
                    opacity: active === i ? 0.6 : 0.25,
                    transition: "opacity 0.3s ease",
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: -12,
                    left: 8,
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 80,
                    fontWeight: 900,
                    color:
                      active === i ? "rgba(255,255,255,0.12)" : `${r.accent}10`,
                    lineHeight: 1,
                    letterSpacing: -4,
                    userSelect: "none",
                    pointerEvents: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {r.num}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background:
                      active === i ? "rgba(255,255,255,0.2)" : `${r.accent}10`,
                    border: `1px solid ${active === i ? "rgba(255,255,255,0.3)" : `${r.accent}25`}`,
                    marginBottom: 16,
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 11,
                      fontWeight: 800,
                      color: active === i ? COLORS.white : r.accent,
                      letterSpacing: "0.5px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {r.num}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: "clamp(17px,2vw,20px)",
                    fontWeight: 900,
                    color: active === i ? COLORS.white : COLORS.ink,
                    margin: "0 0 5px",
                    lineHeight: 1.25,
                    transition: "color 0.3s ease",
                  }}
                >
                  {r.tag}
                </p>
                <p
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 9,
                    fontWeight: 700,
                    color:
                      active === i ? "rgba(255,255,255,0.5)" : COLORS.inkMuted,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    margin: "0 0 14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  {r.en}
                </p>
                <div
                  style={{
                    width: active === i ? 32 : 0,
                    height: 2,
                    background:
                      active === i ? "rgba(255,255,255,0.6)" : r.accent,
                    borderRadius: 2,
                    transition: "width 0.35s ease",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            style={{
              background: COLORS.white,
              borderRadius: 24,
              border: `1px solid ${COLORS.border}`,
              overflow: "hidden",
              boxShadow: `0 32px 80px rgba(1,90,98,0.07)`,
              ...vis(420),
            }}
          >
            <div
              style={{
                height: 4,
                background: reasons[active].accent,
                transition: "background 0.4s ease",
              }}
            />
            <div className="why-panel">
              {/* LEFT */}
              <div
                className="why-panel-left"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderLeft: `1px solid ${COLORS.border}`,
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: -20,
                    left: -8,
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 220,
                    fontWeight: 900,
                    color: `${reasons[active].accent}06`,
                    lineHeight: 1,
                    letterSpacing: -10,
                    userSelect: "none",
                    pointerEvents: "none",
                    transition: "color 0.4s ease",
                  }}
                >
                  {reasons[active].num}
                </div>
                <div
                  key={animKey}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    animation: "fadeSlideUp 0.4s ease forwards",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Beiruti', sans-serif",
                      fontSize: "clamp(22px,2.8vw,40px)",
                      fontWeight: 700,
                      color: COLORS.ink,
                      lineHeight: 1.4,
                      margin: "0 0 18px",
                      letterSpacing: -0.5,
                    }}
                  >
                    {reasons[active].ar}
                  </h3>
                  <div
                    style={{
                      width: 44,
                      height: 3,
                      borderRadius: 2,
                      background: reasons[active].accent,
                      marginBottom: 18,
                      transition: "background 0.4s ease",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Beiruti', sans-serif",
                      fontSize: "clamp(15px,1.6vw,17px)",
                      fontWeight: 500,
                      color: COLORS.inkSoft,
                      lineHeight: 2.1,
                      margin: 0,
                      maxWidth: 440,
                    }}
                  >
                    {reasons[active].desc}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 36,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div style={{ display: "flex", gap: 6 }}>
                    {reasons.map((r, i) => (
                      <button
                        key={i}
                        onClick={() => handleSetActive(i)}
                        style={{
                          width: active === i ? 32 : 8,
                          height: 8,
                          borderRadius: 999,
                          background:
                            active === i
                              ? reasons[active].accent
                              : COLORS.border,
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          transition: "all 0.35s ease",
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[
                      {
                        onClick: () =>
                          handleSetActive(
                            (active - 1 + reasons.length) % reasons.length,
                          ),
                        dir: "prev",
                      },
                      {
                        onClick: () =>
                          handleSetActive((active + 1) % reasons.length),
                        dir: "next",
                      },
                    ].map(({ onClick, dir }) => (
                      <button
                        key={dir}
                        onClick={onClick}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: COLORS.offwhite,
                          border: `1px solid ${COLORS.border}`,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            COLORS.petroleum;
                          (e.currentTarget as HTMLElement).style.borderColor =
                            COLORS.petroleum;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            COLORS.offwhite;
                          (e.currentTarget as HTMLElement).style.borderColor =
                            COLORS.border;
                        }}
                      >
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderTop: `2px solid ${COLORS.inkMuted}`,
                            [dir === "prev" ? "borderRight" : "borderLeft"]:
                              `2px solid ${COLORS.inkMuted}`,
                            transform:
                              dir === "prev"
                                ? "rotate(45deg)"
                                : "rotate(-45deg)",
                            [dir === "prev" ? "marginRight" : "marginLeft"]: 2,
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT list */}
              <div style={{ background: COLORS.offwhite }}>
                {reasons.map((r, i) => (
                  <div key={i} style={visX(400 + i * 90)}>
                    <button
                      onClick={() => handleSetActive(i)}
                      className="why-list-btn"
                      style={{
                        width: "100%",
                        border: "none",
                        textAlign: "right",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        background: active === i ? COLORS.white : "transparent",
                        borderBottom:
                          i < reasons.length - 1
                            ? `1px solid ${COLORS.border}`
                            : "none",
                        borderRight: `4px solid ${active === i ? r.accent : "transparent"}`,
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (active !== i)
                          (e.currentTarget as HTMLElement).style.background =
                            `${COLORS.white}80`;
                      }}
                      onMouseLeave={(e) => {
                        if (active !== i)
                          (e.currentTarget as HTMLElement).style.background =
                            "transparent";
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          flexShrink: 0,
                          background: active === i ? r.accent : COLORS.white,
                          border: `1.5px solid ${active === i ? r.accent : COLORS.border}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow:
                            active === i
                              ? `0 8px 24px ${r.accent}30`
                              : "0 2px 8px rgba(0,0,0,0.04)",
                          transition: "all 0.25s ease",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 13,
                            fontWeight: 900,
                            color: active === i ? COLORS.white : r.accent,
                            transition: "color 0.25s ease",
                          }}
                        >
                          {r.num}
                        </span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontFamily: "'Beiruti', sans-serif",
                            fontSize: "clamp(14px,1.8vw,17px)",
                            fontWeight: 700,
                            color: active === i ? r.accent : COLORS.ink,
                            margin: "0 0 3px",
                            lineHeight: 1.4,
                            transition: "color 0.25s ease",
                          }}
                        >
                          {r.ar}
                        </p>
                        <p
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 9,
                            fontWeight: 700,
                            color:
                              active === i ? `${r.accent}90` : COLORS.inkMuted,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            margin: 0,
                            transition: "color 0.25s ease",
                          }}
                        >
                          {r.en}
                        </p>
                      </div>
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            active === i ? `${r.accent}12` : "transparent",
                          border: `1px solid ${active === i ? `${r.accent}30` : "transparent"}`,
                          transition: "all 0.25s ease",
                        }}
                      >
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderTop: `2px solid ${active === i ? r.accent : COLORS.border}`,
                            borderLeft: `2px solid ${active === i ? r.accent : COLORS.border}`,
                            transform: "rotate(-45deg)",
                            transition: "border-color 0.25s ease",
                          }}
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE ONLY — 3 full-screen blocks
          Block 1: Header (above, shared)
          Block 2: 4 tap cards filling screen
          Block 3: Active detail filling screen
      ══════════════════════════════════════════ */}
      <div className="why-mobile" style={{ display: "none" }}>
        {/* MOBILE BLOCK 2 — 4 reason cards, each = 25% of screen height */}
        <div
          style={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            background: COLORS.offwhite,
          }}
        >
          {reasons.map((r, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => handleSetActive(i)}
                style={{
                  flex: 1,
                  border: "none",
                  borderBottom:
                    i < reasons.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                  background: isActive ? r.accent : COLORS.white,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "0 24px",
                  position: "relative",
                  textAlign: "right",
                  transition: "background 0.3s ease",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(24px)",
                }}
              >
                {/* Accent right bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: 4,
                    background: r.accent,
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                />

                {/* Watermark number */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: -8,
                    left: 8,
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 72,
                    fontWeight: 900,
                    color: isActive ? "rgba(255,255,255,0.1)" : `${r.accent}08`,
                    lineHeight: 1,
                    letterSpacing: -3,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {r.num}
                </div>

                {/* Number badge */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 13,
                    flexShrink: 0,
                    background: isActive
                      ? "rgba(255,255,255,0.2)"
                      : `${r.accent}10`,
                    border: `1.5px solid ${isActive ? "rgba(255,255,255,0.35)" : `${r.accent}30`}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 13,
                      fontWeight: 900,
                      color: isActive ? COLORS.white : r.accent,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {r.num}
                  </span>
                </div>

                {/* Text */}
                <div style={{ flex: 1, zIndex: 1 }}>
                  <p
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 9,
                      fontWeight: 700,
                      color: isActive
                        ? "rgba(255,255,255,0.55)"
                        : COLORS.inkMuted,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      margin: "0 0 4px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {r.en}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Beiruti', sans-serif",
                      fontSize: 19,
                      fontWeight: 800,
                      color: isActive ? COLORS.white : COLORS.ink,
                      margin: 0,
                      lineHeight: 1.3,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {r.tag}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Beiruti', sans-serif",
                      fontSize: 13,
                      fontWeight: 400,
                      color: isActive
                        ? "rgba(255,255,255,0.7)"
                        : COLORS.inkMuted,
                      margin: "4px 0 0",
                      lineHeight: 1.4,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {r.ar}
                  </p>
                </div>

                {/* Chevron */}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isActive
                      ? "rgba(255,255,255,0.15)"
                      : `${r.accent}10`,
                    transition: "all 0.3s ease",
                    zIndex: 1,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M7 5H3M3 5L5 3M3 5L5 7"
                      stroke={isActive ? COLORS.white : r.accent}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* MOBILE BLOCK 3 — active reason detail, fills screen */}
        <div
          style={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            background: COLORS.white,
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          {/* Accent top bar */}
          <div
            style={{
              height: 4,
              background: reasons[active].accent,
              transition: "background 0.4s ease",
              flexShrink: 0,
            }}
          />

          {/* Content — fills remaining height */}
          <div
            key={animKey}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 28px",
              position: "relative",
              overflow: "hidden",
              animation: "fadeSlideUp 0.4s ease forwards",
            }}
          >
            {/* Watermark */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: -20,
                left: -8,
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 180,
                fontWeight: 900,
                color: `${reasons[active].accent}06`,
                lineHeight: 1,
                letterSpacing: -8,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {reasons[active].num}
            </div>

            {/* EN label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: `${reasons[active].accent}0E`,
                border: `1px solid ${reasons[active].accent}30`,
                borderRadius: 999,
                padding: "6px 14px",
                marginBottom: 24,
                alignSelf: "flex-start",
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: reasons[active].accent,
                }}
              />
              <span
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  color: reasons[active].accent,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                {reasons[active].en}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Beiruti', sans-serif",
                fontSize: "clamp(22px, 6vw, 32px)",
                fontWeight: 700,
                color: COLORS.ink,
                lineHeight: 1.4,
                margin: "0 0 16px",
                letterSpacing: -0.5,
                position: "relative",
                zIndex: 1,
              }}
            >
              {reasons[active].ar}
            </h3>
            <div
              style={{
                width: 40,
                height: 3,
                borderRadius: 2,
                background: reasons[active].accent,
                marginBottom: 20,
                transition: "background 0.4s ease",
              }}
            />
            <p
              style={{
                fontFamily: "'Beiruti', sans-serif",
                fontSize: "clamp(15px, 4vw, 17px)",
                fontWeight: 400,
                color: COLORS.inkSoft,
                lineHeight: 2,
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              {reasons[active].desc}
            </p>
          </div>

          {/* Navigation — always at bottom */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 28px",
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {/* Dots */}
            <div style={{ display: "flex", gap: 6 }}>
              {reasons.map((r, i) => (
                <button
                  key={i}
                  onClick={() => handleSetActive(i)}
                  style={{
                    width: active === i ? 28 : 8,
                    height: 8,
                    borderRadius: 999,
                    background:
                      active === i ? reasons[active].accent : COLORS.border,
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.35s ease",
                  }}
                />
              ))}
            </div>
            {/* Arrows */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                {
                  onClick: () =>
                    handleSetActive(
                      (active - 1 + reasons.length) % reasons.length,
                    ),
                  dir: "prev",
                },
                {
                  onClick: () => handleSetActive((active + 1) % reasons.length),
                  dir: "next",
                },
              ].map(({ onClick, dir }) => (
                <button
                  key={dir}
                  onClick={onClick}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: COLORS.offwhite,
                    border: `1px solid ${COLORS.border}`,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onTouchStart={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      COLORS.petroleum;
                    (e.currentTarget as HTMLElement).style.borderColor =
                      COLORS.petroleum;
                  }}
                  onTouchEnd={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      COLORS.offwhite;
                    (e.currentTarget as HTMLElement).style.borderColor =
                      COLORS.border;
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderTop: `2px solid ${COLORS.inkMuted}`,
                      [dir === "prev" ? "borderRight" : "borderLeft"]:
                        `2px solid ${COLORS.inkMuted}`,
                      transform:
                        dir === "prev" ? "rotate(45deg)" : "rotate(-45deg)",
                      [dir === "prev" ? "marginRight" : "marginLeft"]: 2,
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── DESKTOP: show desktop, hide mobile ── */
        .why-desktop { display: block; }
        .why-mobile  { display: none !important; }

        /* ── HEADER ── */
        .why-header      { padding: 80px 24px 72px; }
        .why-header-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 64px; align-items: end;
        }
        .why-h2      { font-size: clamp(44px, 5.5vw, 80px); margin-top: -20px; }
        .why-tagline { font-size: 36px; }
        .why-body    { font-size: 20px; }

        /* ── DESKTOP MAIN ── */
        .why-main { max-width: 1280px; margin: 0 auto; padding: 64px 24px 104px; }
        .why-tabs {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 12px; margin-bottom: 16px;
        }
        .why-tab-btn   { padding: 28px 28px 24px; }
        .why-panel     { display: grid; grid-template-columns: 1fr 1fr; min-height: 380px; }
        .why-panel-left{ padding: 56px 52px; }
        .why-list-btn  { padding: 26px 28px; }

        @media (max-width: 1024px) {
          .why-tabs       { grid-template-columns: repeat(2, 1fr) !important; }
          .why-panel      { grid-template-columns: 1fr !important; min-height: auto !important; }
          .why-panel-left { border-left: none !important; border-bottom: 1px solid ${COLORS.border} !important; }
        }

        /* ── MOBILE: flip to mobile layout ── */
        @media (max-width: 640px) {
          .why-desktop { display: none !important; }
          .why-mobile  { display: block !important; }

          /* Header fills full screen */
          .why-header {
            height: 100svh;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          .why-header > div:last-child {
            padding: 0 24px !important;
          }
          .why-header-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            margin-top: 20px !important;
          }
          .why-h2      { font-size: clamp(42px, 11vw, 60px) !important; margin-top: 0 !important; }
          .why-tagline { font-size: clamp(22px, 6vw, 28px) !important; }
          .why-body    { font-size: clamp(15px, 4vw, 17px) !important; }
        }

        @media (max-width: 420px) {
          .why-h2 { font-size: 38px !important; }
        }
      `}</style>
    </section>
  );
}
