"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const C = {
  petroleum: "#124f45",
  gold: "#C7A856",
  crimson: "#972B28",
  rose: "#B18083",
  white: "#FFFFFF",
  offwhite: "#F8F6F1",
  border: "#E8E4DC",
  ink: "#0D1F21",
  inkSoft: "#2E4547",
  inkMuted: "#7A8C8D",
};

const accents = [C.petroleum, C.gold, C.crimson, C.rose, C.petroleum, C.gold];

// جمعية انسان removed
const partners = [
  {
    id: 1,
    name: "جامعة الملك سعود",
    logo: "/ksu.png",
    url: "https://ksu.edu.sa/en",
    desc: "شريك استراتيجي في التطوير",
  },
  {
    id: 2,
    name: "شركة راز للاستشارات التطويرية",
    logo: "/raz.png",
    url: "https://x.com/raz_cd",
    desc: "شريك في الابتكار المعرفي",
  },
  {
    id: 3,
    name: "شركة القيمة الغارقة",
    logo: "/sunk.png",
    url: "https://x.com/raz_cd",
    desc: "شريك في النمو المستدام",
  },
  {
    id: 4,
    name: "جمعية واعي",
    logo: "/wa3i.png",
    url: "https://wa3i.sa/",
    desc: "شريك في هاكاثون الوعي المعرفي",
  },
  {
    id: 5,
    name: "الندوة العالمية للشباب الإسلامي",
    logo: "/wamy.png",
    url: "https://o.wamy.org/",
    desc: "شريك رعاية",
  },
];

function getPos(i: number, total: number, r: number) {
  const angle = (i * 360) / total - 90;
  const rad = (angle * Math.PI) / 180;
  return { x: 50 + r * Math.cos(rad), y: 50 + r * Math.sin(rad) };
}

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Partners() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState<number | null>(null);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setBurst(true), 600);
    return () => clearTimeout(t);
  }, [inView]);

  const vis = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section
      id="partners"
      dir="rtl"
      ref={ref}
      style={{
        background: C.offwhite,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `linear-gradient(${C.petroleum}04 1px, transparent 1px), linear-gradient(90deg, ${C.petroleum}04 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <div
        className="partners-header"
        style={{
          background: C.white,
          borderBottom: `1px solid ${C.border}`,
          padding: "80px 24px 72px",
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
            background: `linear-gradient(to left, ${C.rose}, ${C.crimson}, ${C.gold}, ${C.petroleum})`,
          }}
        />
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
            color: `${C.petroleum}04`,
            lineHeight: 1,
            letterSpacing: -8,
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          05
        </div>

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
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
                color: C.border,
                letterSpacing: "2px",
              }}
            >
              05
            </span>
            <div style={{ width: 40, height: 1, background: C.border }} />
            <span
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                color: C.petroleum,
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              OUR PARTNERS
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div style={vis(150)}>
              <h2
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: "clamp(44px,5.5vw,80px)",
                  fontWeight: 900,
                  color: C.ink,
                  lineHeight: 1.1,
                  letterSpacing: -2,
                  margin: 0,
                }}
              >
                شركاء{" "}
                <span
                  style={{
                    color: C.petroleum,
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 10,
                  }}
                >
                  النجاح
                  <span
                    style={{
                      position: "absolute",
                      bottom: 2,
                      right: 0,
                      left: 0,
                      height: 3,
                      background: C.gold,
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
                  borderRight: `3px solid ${C.petroleum}`,
                  paddingRight: 24,
                  marginBottom: 22,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 22,
                    fontWeight: 900,
                    color: C.petroleum,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  شراكات حقيقية
                  <br />
                  <span style={{ color: C.gold }}>تُنتج قيمة مستدامة</span>
                </p>
              </div>
              <p
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  color: C.inkSoft,
                  margin: 0,
                  lineHeight: 1.95,
                }}
              >
                نبني علاقاتنا على أساس التكامل المعرفي — كل شراكة تُجسّد تقاطعاً
                حقيقياً بين رؤيتنا ورؤية شركائنا في خلق الأثر.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP — Constellation fits in viewport
      ══════════════════════════════════════════ */}
      <div
        className="partners-desktop"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 860,
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "85%",
            ...vis(300),
          }}
        >
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              overflow: "visible",
            }}
          >
            <defs>
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="50%"
              cy="50%"
              r="43%"
              fill="none"
              stroke={C.border}
              strokeWidth="1"
              strokeDasharray="4 8"
              style={{
                opacity: burst ? 1 : 0,
                transition: "opacity 0.8s ease 200ms",
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="22%"
              fill="none"
              stroke={`${C.petroleum}10`}
              strokeWidth="1"
              style={{
                opacity: burst ? 1 : 0,
                transition: "opacity 0.8s ease 400ms",
              }}
            />
            {partners.map((_, i) => {
              const pos = getPos(i, partners.length, 43);
              const isActive = active === i;
              return (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${pos.x}%`}
                  y2={`${pos.y}%`}
                  stroke={isActive ? C.gold : C.petroleum}
                  strokeWidth={isActive ? 1.5 : 1}
                  strokeOpacity={isActive ? 0.55 : 0.1}
                  strokeDasharray={isActive ? "0" : "5 5"}
                  filter={isActive ? "url(#lineGlow)" : undefined}
                  style={{
                    opacity: burst ? 1 : 0,
                    transition: `opacity 0.6s ease ${300 + i * 80}ms, stroke 0.4s ease, stroke-opacity 0.4s ease`,
                  }}
                />
              );
            })}
            {partners.map((_, i) => {
              const p1 = getPos(i, partners.length, 43);
              const p2 = getPos((i + 1) % partners.length, partners.length, 43);
              const isActive =
                active === i || active === (i + 1) % partners.length;
              return (
                <line
                  key={`ring-${i}`}
                  x1={`${p1.x}%`}
                  y1={`${p1.y}%`}
                  x2={`${p2.x}%`}
                  y2={`${p2.y}%`}
                  stroke={isActive ? C.gold : C.border}
                  strokeWidth="1"
                  strokeOpacity={isActive ? 0.5 : 0.7}
                  strokeDasharray="3 6"
                  style={{
                    opacity: burst ? 1 : 0,
                    transition: `opacity 0.6s ease ${600 + i * 60}ms, stroke 0.4s ease`,
                  }}
                />
              );
            })}
            <circle
              cx="50%"
              cy="50%"
              r="4"
              fill={C.gold}
              style={{
                opacity: inView ? 1 : 0,
                transition: "opacity 0.6s ease 500ms",
              }}
            />
            {active !== null &&
              (() => {
                const pos = getPos(active, partners.length, 43);
                return (
                  <circle r="3" fill={C.gold} opacity="0.8">
                    <animateMotion
                      dur="1.2s"
                      repeatCount="indefinite"
                      path={`M0,0 L${(pos.x - 50) * 6},${(pos.y - 50) * 6}`}
                    />
                  </circle>
                );
              })()}
          </svg>

          {/* Center — Manzoma */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              opacity: inView ? 1 : 0,
              transition: "opacity 0.7s ease 200ms",
            }}
          >
            <div
              style={{
                width: 170,
                height: 170,
                borderRadius: "50%",
                background: C.white,
                border: `1.5px solid ${C.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 0 12px ${C.offwhite}, 0 0 0 13px ${C.border}, 0 20px 56px rgba(1,90,98,0.14)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  borderRadius: "50%",
                  backgroundImage: `radial-gradient(${C.petroleum}06 1px, transparent 1px)`,
                  backgroundSize: "10px 10px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  height: 3,
                  background: C.gold,
                }}
              />
              <div
                style={{
                  width: 135,
                  overflow: "hidden",
                  marginTop: "-8%",
                  marginBottom: "-8%",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/logo2.png"
                  alt="منظومة"
                  width={270}
                  height={122}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Partner nodes */}
          {partners.map((p, i) => {
            const pos = getPos(i, partners.length, 43);
            const isActive = active === i;
            const acc = accents[i];
            const burstDelay = 700 + i * 80;
            return (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  position: "absolute",
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  zIndex: 15,
                  textDecoration: "none",
                  transform: burst
                    ? `translate(-50%, -50%) scale(${isActive ? 1.08 : 1})`
                    : `translate(calc(-50% + ${(50 - pos.x) * 3.5}px), calc(-50% + ${(50 - pos.y) * 3.5}px)) scale(0.3)`,
                  opacity: burst ? 1 : 0,
                  transition: [
                    `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${burstDelay}ms`,
                    `opacity 0.5s ease ${burstDelay - 100}ms`,
                  ].join(", "),
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: isActive ? 120 : 88,
                    height: isActive ? 120 : 88,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${acc}22 0%, transparent 70%)`,
                    transition: "all 0.4s ease",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 18,
                    background: C.white,
                    border: `1.5px solid ${isActive ? acc : C.border}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    boxShadow: isActive
                      ? `0 16px 48px ${acc}30, 0 0 0 4px ${acc}15`
                      : `0 4px 20px rgba(1,90,98,0.07)`,
                    transition: "all 0.35s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      left: 0,
                      height: 3,
                      background: acc,
                      opacity: isActive ? 1 : 0.3,
                      transition: "opacity 0.35s ease",
                    }}
                  />
                  {isActive && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          top: 5,
                          right: 5,
                          width: 9,
                          height: 9,
                          borderTop: `2px solid ${C.gold}`,
                          borderRight: `2px solid ${C.gold}`,
                          borderRadius: "0 4px 0 0",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 5,
                          left: 5,
                          width: 9,
                          height: 9,
                          borderBottom: `2px solid ${C.gold}`,
                          borderLeft: `2px solid ${C.gold}`,
                          borderRadius: "0 0 4px 0",
                        }}
                      />
                    </>
                  )}
                  <div
                    style={{
                      width: 110,
                      height: 110,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      filter: isActive ? "none" : "grayscale(20%)",
                      transition: "filter 0.35s ease",
                    }}
                  >
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={38}
                      height={38}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
                {/* Tooltip */}
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: isActive ? 1 : 0,
                    pointerEvents: "none",
                    transition: "opacity 0.3s ease",
                    zIndex: 30,
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      background: C.petroleum,
                      borderRadius: 10,
                      padding: "8px 14px",
                      boxShadow: `0 12px 40px ${C.petroleum}30`,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: -6,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderBottom: `6px solid ${C.petroleum}`,
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 2,
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: C.gold,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Beiruti', sans-serif",
                          fontSize: 12,
                          fontWeight: 800,
                          color: C.gold,
                        }}
                      >
                        {p.name}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Beiruti', sans-serif",
                        fontSize: 10,
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.7)",
                        margin: 0,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM STRIP — desktop only
      ══════════════════════════════════════════ */}
      <div
        className="partners-strip-wrapper"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px 64px",
          ...vis(800),
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${partners.length}, 1fr)`,
            gap: 1,
            background: C.border,
            borderRadius: 20,
            overflow: "hidden",
            border: `1px solid ${C.border}`,
            boxShadow: `0 8px 40px rgba(1,90,98,0.06)`,
          }}
          className="partners-strip"
        >
          {partners.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                textDecoration: "none",
                background: active === i ? accents[i] : C.white,
                padding: "20px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                position: "relative",
                transition: "background 0.3s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  height: 3,
                  background: accents[i],
                  opacity: active === i ? 1 : 0.3,
                  transition: "opacity 0.3s ease",
                }}
              />
              <div
                style={{
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: active === i ? "none" : "grayscale(20%)",
                  transition: "filter 0.3s ease",
                }}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: active === i ? C.white : C.ink,
                  margin: 0,
                  textAlign: "center",
                  transition: "color 0.3s ease",
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE — header fills screen 1,
          then partner cards fill screen 2
      ══════════════════════════════════════════ */}
      <div className="partners-mobile" style={{ display: "none" }}>
        {/* MOBILE SCREEN 2 — Manzoma badge + 5 partner cards = 100svh */}
        <div
          style={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            background: C.offwhite,
            overflow: "hidden",
          }}
        >
          {/* Manzoma badge — fixed 22% */}
          <div
            style={{
              height: "22%",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: `1px solid ${C.border}`,
              background: C.white,
              opacity: inView ? 1 : 0,
              transition: "opacity 0.7s ease 200ms",
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: C.white,
                border: `1.5px solid ${C.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 0 8px ${C.offwhite}, 0 0 0 9px ${C.border}, 0 12px 36px rgba(1,90,98,0.1)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  height: 3,
                  background: C.gold,
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  borderRadius: "50%",
                  backgroundImage: `radial-gradient(${C.petroleum}06 1px, transparent 1px)`,
                  backgroundSize: "8px 8px",
                }}
              />
              <div
                style={{
                  width: 72,
                  overflow: "hidden",
                  marginTop: "-8%",
                  marginBottom: "-8%",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/logo2.png"
                  alt="منظومة"
                  width={144}
                  height={65}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
            {/* Connector */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: 1,
                  height: 14,
                  background: `linear-gradient(to bottom, ${C.gold}, ${C.border})`,
                }}
              />
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: C.gold,
                  marginTop: -2,
                }}
              />
            </div>
          </div>

          {/* 5 partner rows — fill remaining 78% equally */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {partners.map((p, i) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "0 24px",
                  background: C.white,
                  borderBottom:
                    i < partners.length - 1 ? `1px solid ${C.border}` : "none",
                  position: "relative",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(24px)",
                  transition: `opacity 0.7s ease ${350 + i * 80}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${350 + i * 80}ms`,
                }}
                onTouchStart={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    `${accents[i]}08`;
                }}
                onTouchEnd={(e) => {
                  (e.currentTarget as HTMLElement).style.background = C.white;
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
                    background: accents[i],
                    borderRadius: "0 0 0 0",
                  }}
                />

                {/* Logo box */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    flexShrink: 0,
                    background: `${accents[i]}08`,
                    border: `1.5px solid ${accents[i]}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={38}
                    height={38}
                    style={{
                      objectFit: "contain",
                      width: "72%",
                      height: "72%",
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 8,
                      fontWeight: 700,
                      color: accents[i],
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      margin: "0 0 3px",
                    }}
                  >
                    STRATEGIC PARTNER
                  </p>
                  <p
                    style={{
                      fontFamily: "'Beiruti', sans-serif",
                      fontSize: 16,
                      fontWeight: 800,
                      color: C.ink,
                      margin: "0 0 2px",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Beiruti', sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      color: C.inkMuted,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9,
                    flexShrink: 0,
                    background: `${accents[i]}10`,
                    border: `1.5px solid ${accents[i]}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M9 6H3M3 6L6 3M3 6L6 9"
                      stroke={accents[i]}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── DESKTOP ── */
        .partners-desktop      { display: block; }
        .partners-mobile       { display: none !important; }
        .partners-strip-wrapper{ display: block; }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .partners-desktop       { display: none  !important; }
          .partners-mobile        { display: block !important; }
          .partners-strip-wrapper { display: none  !important; }

          /* Header fills full screen */
          .partners-header {
            height: 100svh;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          .partners-header > div:nth-child(3) {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
