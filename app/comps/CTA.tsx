"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = {
  petroleum: "#124f45",
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

const elements = [
  {
    num: "1",
    ar: "المعرفة",
    desc: "أساس الإدراك",
    en: "Knowledge",
    accent: COLORS.rose,
  },
  {
    num: "2",
    ar: "الحافز المالي",
    desc: "شرارة الانطلاق",
    en: "Financial Drive",
    accent: COLORS.gold,
  },
  {
    num: "3",
    ar: "الإقتصاد",
    desc: "لغة القيمة",
    en: "Economy",
    accent: COLORS.petroleum,
  },
  {
    num: "4",
    ar: "الديموغرافيا",
    desc: "فهم الإنسان",
    en: "Demographics",
    accent: COLORS.crimson,
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

export default function CTA() {
  const { ref, inView } = useInView();
  const [hoveredEl, setHoveredEl] = useState<number | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  const vis = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section
      id="contact"
      dir="rtl"
      ref={ref}
      style={{
        background: COLORS.white,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(${COLORS.petroleum}04 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.petroleum}04 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative rings */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -180,
          left: -180,
          width: 520,
          height: 520,
          borderRadius: "50%",
          border: `1px solid ${COLORS.petroleum}06`,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: `1px solid ${COLORS.petroleum}04`,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: `1px solid ${COLORS.gold}08`,
          pointerEvents: "none",
        }}
      />

      {/* ══════════════════════════════════════════
          HEADER — Screen 1 on mobile (100svh)
      ══════════════════════════════════════════ */}
      <div
        className="cta-header"
        style={{
          borderBottom: `1px solid ${COLORS.border}`,
          padding: "80px 24px 72px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* 4-color top line */}
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

        {/* Watermark */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: -10,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: "clamp(140px,18vw,240px)",
            fontWeight: 800,
            color: `${COLORS.petroleum}04`,
            lineHeight: 1,
            letterSpacing: -8,
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            marginTop: -40,
          }}
        >
          07
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 36,
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
              07
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
              GET IN TOUCH
            </span>
          </div>

          <div
            className="cta-header-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
              gap: 72,
              alignItems: "end",
            }}
          >
            {/* Heading */}
            <div style={vis(150)}>
              <h2
                className="cta-header-title"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: "clamp(44px, 5vw, 72px)",
                  fontWeight: 800,
                  color: COLORS.ink,
                  lineHeight: 1.15,
                  letterSpacing: -2,
                  margin: 0,
                }}
              >
                تواصل مع
                <br />
                <span
                  style={{
                    color: COLORS.petroleum,
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 6,
                  }}
                >
                  منظومة
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

            {/* Statement */}
            <div style={{ paddingBottom: 8, ...vis(280) }}>
              <div
                style={{
                  borderRight: `4px solid ${COLORS.petroleum}`,
                  paddingRight: 24,
                  marginBottom: 22,
                }}
              >
                <p
                  className="cta-header-lead"
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: COLORS.petroleum,
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  منظومة ليست مشروعًا تشغيليًا،
                  <br />
                  <span
                    style={{
                      color: COLORS.gold,
                      fontSize: 30,
                      fontWeight: 800,
                    }}
                  >
                    بل بنية معرفية تُبنى ليُبنى عليها.
                  </span>
                </p>
              </div>
              <p
                className="cta-header-desc"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: COLORS.inkSoft,
                  margin: 0,
                  lineHeight: 1.95,
                }}
              >
                إذا كنت تبحث عن شريك معرفي يبدأ من النموذج لا من التشغيل —
                فمنظومة هي المكان الصحيح.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP — 4 elements strip + CTA card
      ══════════════════════════════════════════ */}
      <div className="cta-desktop-sections">
        {/* 4 Elements Strip */}
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "72px 24px 0",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
              ...vis(360),
            }}
          >
            <div style={{ width: 28, height: 1, background: COLORS.gold }} />
            <span
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: COLORS.inkMuted,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              نظرة أعمق على مرتكزاتنا
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 1,
              background: COLORS.border,
              borderRadius: 24,
              overflow: "hidden",
              border: `1px solid ${COLORS.border}`,
              boxShadow: `0 20px 60px ${COLORS.petroleum}07`,
              ...vis(420),
            }}
            className="elements-grid"
          >
            {elements.map((el, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredEl(i)}
                onMouseLeave={() => setHoveredEl(null)}
                style={{
                  background: hoveredEl === i ? el.accent : COLORS.white,
                  padding: "36px 32px",
                  position: "relative",
                  cursor: "default",
                  transition: "background 0.3s ease",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 4,
                    background: el.accent,
                    opacity: hoveredEl === i ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 52,
                    fontWeight: 900,
                    lineHeight: 1,
                    color:
                      hoveredEl === i
                        ? `rgba(255,255,255,0.15)`
                        : `${el.accent}18`,
                    margin: "0 0 20px",
                    letterSpacing: -2,
                    transition: "color 0.3s ease",
                  }}
                >
                  {el.num}
                </p>
                <h3
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 22,
                    fontWeight: 900,
                    color: hoveredEl === i ? COLORS.white : el.accent,
                    margin: "0 0 6px",
                    lineHeight: 1.2,
                    transition: "color 0.3s ease",
                  }}
                >
                  {el.ar}
                </h3>
                <p
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color:
                      hoveredEl === i
                        ? "rgba(255,255,255,0.75)"
                        : COLORS.inkMuted,
                    margin: "0 0 16px",
                    transition: "color 0.3s ease",
                  }}
                >
                  {el.desc}
                </p>
                <div
                  style={{
                    width: hoveredEl === i ? 40 : 24,
                    height: 2,
                    background:
                      hoveredEl === i ? "rgba(255,255,255,0.4)" : COLORS.gold,
                    borderRadius: 2,
                    marginBottom: 12,
                    transition: "all 0.3s ease",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 9,
                    fontWeight: 700,
                    color:
                      hoveredEl === i
                        ? "rgba(255,255,255,0.45)"
                        : COLORS.inkMuted,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    margin: 0,
                    transition: "color 0.3s ease",
                  }}
                >
                  {el.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Card */}
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "24px 24px 96px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              background: COLORS.petroleum,
              borderRadius: 28,
              overflow: "hidden",
              position: "relative",
              boxShadow: `0 40px 100px ${COLORS.petroleum}22`,
              ...vis(600),
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                height: 3,
                background: COLORS.gold,
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: -80,
                left: -80,
                width: 280,
                height: 280,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.07)",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                border: `1px solid ${COLORS.gold}15`,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                padding: "64px 64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 40,
              }}
              className="cta-inner"
            >
              <div style={{ maxWidth: 560 }}>
                <h3
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: "clamp(24px, 3vw, 40px)",
                    fontWeight: 900,
                    color: COLORS.white,
                    lineHeight: 1.4,
                    margin: "0 0 8px",
                    letterSpacing: -0.5,
                  }}
                >
                  منظومة ليست مشروعًا تشغيليًا،
                </h3>
                <h3
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: "clamp(24px, 3vw, 40px)",
                    fontWeight: 900,
                    color: COLORS.gold,
                    lineHeight: 1.4,
                    margin: "0 0 24px",
                    letterSpacing: -0.5,
                  }}
                >
                  بل بنية معرفية تُبنى ليُبنى عليها.
                </h3>
                <div
                  style={{
                    width: 48,
                    height: 2,
                    background: `rgba(255,255,255,0.15)`,
                    borderRadius: 2,
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  minWidth: 220,
                }}
              >
                <a
                  href="mailto:info@manzoma.sa"
                  onMouseEnter={() => setHoveredBtn(0)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    color: COLORS.ink,
                    textDecoration: "none",
                    background: hoveredBtn === 0 ? COLORS.gold : COLORS.white,
                    padding: "15px 36px",
                    borderRadius: 999,
                    boxShadow:
                      hoveredBtn === 0
                        ? `0 12px 40px ${COLORS.gold}40`
                        : `0 8px 32px rgba(0,0,0,0.2)`,
                    transform:
                      hoveredBtn === 0 ? "translateY(-2px)" : "translateY(0)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span>تواصل معنا</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M12 7H2M2 7L7 2M2 7L7 12"
                      stroke={COLORS.ink}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#about"
                  onMouseEnter={() => setHoveredBtn(1)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color:
                      hoveredBtn === 1
                        ? COLORS.white
                        : "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    background: "transparent",
                    border: `1px solid ${hoveredBtn === 1 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}`,
                    padding: "14px 36px",
                    borderRadius: 999,
                    transition: "all 0.25s ease",
                  }}
                >
                  تعرّف على منظومة
                </a>
                <p
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 9,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    margin: "4px 0 0",
                    textAlign: "center",
                  }}
                >
                  info@manzoma.sa
                </p>
              </div>
            </div>

            {/* Bottom strip */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                padding: "16px 64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
                position: "relative",
                zIndex: 1,
              }}
            >
              <p
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                manzoma.sa
              </p>
              <div style={{ display: "flex", gap: 20 }}>
                {elements.map((el, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: el.accent,
                        opacity: 0.7,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Beiruti', sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {el.ar}
                    </span>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                © 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE — Screen 2: 4 elements (each a full-width row)
                   Screen 3: CTA card
      ══════════════════════════════════════════ */}
      <div className="cta-mobile-sections" style={{ display: "none" }}>
        {/* MOBILE SCREEN 2 — 4 element rows filling 100svh */}
        <div
          style={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            background: COLORS.white,
          }}
        >
          {/* Label bar */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "20px 24px",
              borderBottom: `1px solid ${COLORS.border}`,
              opacity: inView ? 1 : 0,
              transition: "opacity 0.6s ease 300ms",
            }}
          >
            <div style={{ width: 20, height: 1, background: COLORS.gold }} />
            <span
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 8,
                fontWeight: 700,
                color: COLORS.inkMuted,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              مرتكزاتنا
            </span>
          </div>

          {/* 4 rows — flex: 1 each */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {elements.map((el, i) => {
              const isActive = mobileActive === i;
              return (
                <button
                  key={i}
                  onClick={() => setMobileActive(isActive ? null : i)}
                  style={{
                    flex: 1,
                    border: "none",
                    borderBottom:
                      i < elements.length - 1
                        ? `1px solid ${COLORS.border}`
                        : "none",
                    background: isActive ? el.accent : COLORS.white,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "0 24px",
                    position: "relative",
                    textAlign: "right",
                    transition: "background 0.3s ease",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(20px)",
                  }}
                >
                  {/* Right accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      width: 4,
                      background: el.accent,
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
                      fontSize: 56,
                      fontWeight: 900,
                      color: isActive
                        ? "rgba(255,255,255,0.08)"
                        : `${el.accent}07`,
                      lineHeight: 1,
                      letterSpacing: -3,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {el.num}
                  </div>

                  {/* Number badge */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      flexShrink: 0,
                      background: isActive
                        ? "rgba(255,255,255,0.2)"
                        : `${el.accent}12`,
                      border: `1.5px solid ${isActive ? "rgba(255,255,255,0.3)" : `${el.accent}25`}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 14,
                        fontWeight: 900,
                        color: isActive ? COLORS.white : el.accent,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {el.num}
                    </span>
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, zIndex: 1 }}>
                    <p
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 8,
                        fontWeight: 700,
                        color: isActive
                          ? "rgba(255,255,255,0.5)"
                          : COLORS.inkMuted,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        margin: "0 0 3px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {el.en}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Beiruti', sans-serif",
                        fontSize: 20,
                        fontWeight: 900,
                        color: isActive ? COLORS.white : el.accent,
                        margin: "0 0 2px",
                        lineHeight: 1.2,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {el.ar}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Beiruti', sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: isActive
                          ? "rgba(255,255,255,0.65)"
                          : COLORS.inkMuted,
                        margin: 0,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {el.desc}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div
                    style={{
                      width: isActive ? 32 : 20,
                      height: 2,
                      background: isActive
                        ? "rgba(255,255,255,0.4)"
                        : COLORS.gold,
                      borderRadius: 2,
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                      zIndex: 1,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE SCREEN 3 — CTA card = 100svh */}
        <div
          style={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            background: COLORS.petroleum,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gold top line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              height: 3,
              background: COLORS.gold,
              zIndex: 2,
            }}
          />

          {/* Dot texture */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Decorative rings */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: -80,
              left: -80,
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 220,
              height: 220,
              borderRadius: "50%",
              border: `1px solid ${COLORS.gold}12`,
              pointerEvents: "none",
            }}
          />

          {/* Main content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "52px 28px 32px",
              position: "relative",
              zIndex: 1,
              gap: 0,
            }}
          >
            {/* Section label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 28,
              }}
            >
              <div
                style={{ width: 20, height: 1, background: `${COLORS.gold}60` }}
              />
              <span
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 8,
                  fontWeight: 700,
                  color: `${COLORS.gold}80`,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                GET IN TOUCH
              </span>
            </div>

            {/* Headline */}
            <h3
              style={{
                fontFamily: "'Beiruti', sans-serif",
                fontSize: 30,
                fontWeight: 900,
                color: COLORS.white,
                lineHeight: 1.35,
                margin: "0 0 6px",
                letterSpacing: -0.5,
              }}
            >
              منظومة ليست مشروعًا تشغيليًا،
            </h3>
            <h3
              style={{
                fontFamily: "'Beiruti', sans-serif",
                fontSize: 30,
                fontWeight: 900,
                color: COLORS.gold,
                lineHeight: 1.35,
                margin: "0 0 28px",
                letterSpacing: -0.5,
              }}
            >
              بل بنية معرفية تُبنى ليُبنى عليها.
            </h3>

            {/* Divider */}
            <div
              style={{
                width: 40,
                height: 2,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 2,
                marginBottom: 28,
              }}
            />

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:info@manzoma.sa"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 17,
                  fontWeight: 800,
                  color: COLORS.ink,
                  textDecoration: "none",
                  background: COLORS.white,
                  padding: "16px 28px",
                  borderRadius: 999,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.25)`,
                }}
              >
                <span>تواصل معنا</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M12 7H2M2 7L7 2M2 7L7 12"
                    stroke={COLORS.ink}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#about"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "15px 28px",
                  borderRadius: 999,
                }}
              >
                تعرّف على منظومة
              </a>
              <p
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 9,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: "4px 0 0",
                  textAlign: "center",
                }}
              >
                info@manzoma.sa
              </p>
            </div>
          </div>

          {/* Bottom strip — elements list */}
          <div
            style={{
              flexShrink: 0,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
            }}
          >
            {elements.map((el, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: el.accent,
                    opacity: 0.8,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {el.ar}
                </span>
              </div>
            ))}
            <p
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 8,
                fontWeight: 700,
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "2px",
                margin: 0,
              }}
            >
              © 2024
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* ══ DESKTOP ══ */
        .cta-desktop-sections  { display: block !important; }
        .cta-mobile-sections   { display: none  !important; }
        .elements-grid         { grid-template-columns: repeat(4,1fr) !important; }

        /* ══ MOBILE ══ */
        @media (max-width: 1024px) {
          /* Header = full screen */
          .cta-header {
            height: 100svh !important;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          .cta-header > div:last-child {
            padding: 0 24px !important;
          }

          .cta-desktop-sections { display: none  !important; }
          .cta-mobile-sections  { display: block !important; }
        }

        @media (max-width: 768px) {
          .cta-header-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            margin-top: 20px !important;
          }
          .cta-header-title { font-size: 42px !important; letter-spacing: -1px !important; }
          .cta-header-lead  { font-size: 21px !important; }
          .cta-header-lead span { font-size: 22px !important; }
          .cta-header-desc  { font-size: 15px !important; }
        }

        @media (max-width: 420px) {
          .cta-header-title { font-size: 36px !important; }
          .cta-header-lead  { font-size: 18px !important; }
          .cta-header-lead span { font-size: 19px !important; }
        }
      `}</style>
    </section>
  );
}
