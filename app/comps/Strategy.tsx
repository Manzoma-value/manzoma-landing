/* eslint-disable react-hooks/static-components */
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

const pillars = [
  {
    num: "01",
    ar: "تكوين النموذج المعرفي",
    en: "Knowledge Model Formation",
    desc: "بناء الإطار الفكري والمنهجي الحاكم للقرار",
    accent: COLORS.petroleum,
    dir: "top" as const,
  },
  {
    num: "02",
    ar: "بناء القوة الداخلية",
    en: "Internal Capacity Building",
    desc: "تعزيز القدرات المؤسسية والقيادية",
    accent: COLORS.gold,
    dir: "right" as const,
  },
  {
    num: "03",
    ar: "استخراج الموارد الاقتصادية",
    en: "Economic Resource Extraction",
    desc: "تحويل المعرفة إلى موارد قابلة للتفعيل",
    accent: COLORS.crimson,
    dir: "bottom" as const,
  },
  {
    num: "04",
    ar: "بناء المجالس والحوكمة",
    en: "Governance & Councils",
    desc: "تأسيس بنية حوكمة تضبط القرار",
    accent: COLORS.rose,
    dir: "left" as const,
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

function PillarCard({
  pillar,
  hovered,
  onEnter,
  onLeave,
}: {
  pillar: (typeof pillars)[0];
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: 200,
        background: hovered ? COLORS.white : COLORS.offwhite,
        border: `1.5px solid ${hovered ? pillar.accent : COLORS.border}`,
        borderRadius: 16,
        padding: "18px 18px 14px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered
          ? `0 16px 40px ${pillar.accent}22`
          : "0 4px 20px rgba(1,90,98,0.05)",
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          height: 3,
          background: hovered ? pillar.accent : COLORS.border,
          transition: "background 0.3s ease",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 26,
            fontWeight: 900,
            lineHeight: 1,
            color: hovered ? pillar.accent : COLORS.border,
            letterSpacing: -1,
            transition: "color 0.3s ease",
          }}
        >
          {pillar.num}
        </span>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: hovered ? pillar.accent : COLORS.border,
            transition: "background 0.3s ease",
          }}
        />
      </div>
      <h4
        style={{
          fontFamily: "'Beiruti', sans-serif",
          fontSize: 15,
          fontWeight: 800,
          color: hovered ? pillar.accent : COLORS.ink,
          margin: "0 0 5px",
          lineHeight: 1.35,
          transition: "color 0.3s ease",
        }}
      >
        {pillar.ar}
      </h4>
      <p
        style={{
          fontFamily: "'Beiruti', sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: COLORS.inkMuted,
          margin: "0 0 6px",
          lineHeight: 1.6,
        }}
      >
        {pillar.desc}
      </p>
      <p
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 7,
          fontWeight: 700,
          color: hovered ? pillar.accent : COLORS.border,
          letterSpacing: "2px",
          textTransform: "uppercase",
          margin: 0,
          transition: "color 0.3s ease",
        }}
      >
        {pillar.en}
      </p>
    </div>
  );
}

export default function Strategy() {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  const vis = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  const CenterNode = ({ size = 160 }: { size?: number }) => (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: COLORS.petroleum,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        boxShadow: `0 0 0 ${size * 0.07}px ${COLORS.petroleum}12, 0 0 0 ${size * 0.14}px ${COLORS.petroleum}07, 0 20px 56px ${COLORS.petroleum}40`,
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.7)",
        transition:
          "opacity 0.8s ease 500ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 500ms",
        flexShrink: 0,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 10,
          borderRadius: "50%",
          border: `1px solid ${COLORS.gold}25`,
        }}
      />
      <span
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 7,
          fontWeight: 700,
          color: `${COLORS.gold}80`,
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: 5,
          position: "relative",
          zIndex: 1,
        }}
      >
        CORE
      </span>
      <span
        style={{
          fontFamily: "'Beiruti', sans-serif",
          fontSize: size * 0.19,
          fontWeight: 900,
          color: COLORS.white,
          lineHeight: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        المعرفة
      </span>
      <span
        style={{
          fontFamily: "'Beiruti', sans-serif",
          fontSize: 9,
          fontWeight: 500,
          color: "rgba(255,255,255,0.5)",
          marginTop: 5,
          position: "relative",
          zIndex: 1,
        }}
      >
        المحور المركزي
      </span>
    </div>
  );

  return (
    <section
      id="strategy"
      dir="rtl"
      ref={ref}
      style={{
        background: COLORS.white,
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
          backgroundImage: `linear-gradient(${COLORS.petroleum}06 1px, transparent 1px), linear-gradient(90deg, ${COLORS.petroleum}06 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── HEADER ── */}
      <div
        className="strategy-header"
        style={{
          borderBottom: `1px solid ${COLORS.border}`,
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
            background: `linear-gradient(to left, ${COLORS.rose}, ${COLORS.crimson}, ${COLORS.gold}, ${COLORS.petroleum})`,
          }}
        />
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="strategy-header-breadcrumb"
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
              03
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
              OUR STRATEGY
            </span>
          </div>
          <div
            className="strategy-header-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
              gap: 72,
              alignItems: "end",
            }}
          >
            <div style={vis(150)}>
              <h2
                className="strategy-header-title"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: "clamp(48px,5.5vw,80px)",
                  fontWeight: 800,
                  color: COLORS.ink,
                  lineHeight: 1.1,
                  letterSpacing: -2,
                  marginTop: -20,
                }}
              >
                استراتيجية
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
            <div
              className="strategy-header-copy"
              style={{ paddingBottom: 8, ...vis(280) }}
            >
              <div
                style={{
                  borderRight: `4px solid ${COLORS.petroleum}`,
                  paddingRight: 24,
                  marginBottom: 22,
                }}
              >
                <p
                  className="strategy-header-lead"
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 36,
                    fontWeight: 800,
                    color: COLORS.petroleum,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  ابتكار القيمة من خلال
                  <br />
                  <span
                    className="strategy-header-lead-gold"
                    style={{
                      fontSize: 37,
                      fontWeight: 800,
                      color: COLORS.gold,
                    }}
                  >
                    استثمار المعرفة
                  </span>
                </p>
              </div>
              <p
                className="strategy-header-description"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: COLORS.inkSoft,
                  margin: 0,
                  lineHeight: 1.95,
                }}
              >
                تقوم استراتيجية منظومة على بناء سلاسل قيمة تعليمية واقتصادية،
                تنطلق من المعرفة كمحور مركزي يُغذّي أربعة أركان استراتيجية
                متكاملة.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP DIAMOND
      ══════════════════════════════════════════ */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "48px 24px 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="strategy-desktop"
          style={{
            position: "relative",
            height: "min(640px, 75vh)",
            ...vis(400),
          }}
        >
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <circle
              cx="50%"
              cy="50%"
              r="38%"
              fill="none"
              stroke={`${COLORS.petroleum}05`}
              strokeWidth="1"
            />
            <circle
              cx="50%"
              cy="50%"
              r="22%"
              fill="none"
              stroke={`${COLORS.gold}07`}
              strokeWidth="1"
            />
            {[
              { x2: "50%", y2: "6%", color: COLORS.petroleum, delay: 600 },
              { x2: "88%", y2: "50%", color: COLORS.gold, delay: 700 },
              { x2: "50%", y2: "94%", color: COLORS.crimson, delay: 800 },
              { x2: "12%", y2: "50%", color: COLORS.rose, delay: 900 },
            ].map((l, i) => (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={l.x2}
                y2={l.y2}
                stroke={l.color}
                strokeOpacity="0.5"
                strokeWidth="1.8"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.7s ease ${l.delay}ms`,
                }}
              />
            ))}
            {[
              ["50%", "6%", "88%", "50%"],
              ["88%", "50%", "50%", "94%"],
              ["50%", "94%", "12%", "50%"],
              ["12%", "50%", "50%", "6%"],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={`${COLORS.gold}35`}
                strokeWidth="1"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.7s ease ${1000 + i * 100}ms`,
                }}
              />
            ))}
            {[
              { cx: "50%", cy: "6%", fill: COLORS.petroleum },
              { cx: "88%", cy: "50%", fill: COLORS.gold },
              { cx: "50%", cy: "94%", fill: COLORS.crimson },
              { cx: "12%", cy: "50%", fill: COLORS.rose },
            ].map((d, i) => (
              <circle
                key={i}
                cx={d.cx}
                cy={d.cy}
                r="5"
                fill={d.fill}
                fillOpacity="0.6"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.6s ease ${650 + i * 150}ms`,
                }}
              />
            ))}
            <circle cx="50%" cy="50%" r="6" fill={COLORS.gold} />
          </svg>

          {/* Center */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -80,
              marginLeft: -80,
              zIndex: 20,
            }}
          >
            <CenterNode size={160} />
          </div>
          {/* TOP */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              marginLeft: -100,
              zIndex: 10,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(-16px)",
              transition: "opacity 0.7s ease 600ms, transform 0.7s ease 600ms",
            }}
          >
            <PillarCard
              pillar={pillars[0]}
              hovered={hovered === 0}
              onEnter={() => setHovered(0)}
              onLeave={() => setHovered(null)}
            />
          </div>
          {/* RIGHT */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              marginTop: -85,
              zIndex: 10,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(16px)",
              transition: "opacity 0.7s ease 750ms, transform 0.7s ease 750ms",
            }}
          >
            <PillarCard
              pillar={pillars[1]}
              hovered={hovered === 1}
              onEnter={() => setHovered(1)}
              onLeave={() => setHovered(null)}
            />
          </div>
          {/* BOTTOM */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              marginLeft: -100,
              zIndex: 10,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 900ms, transform 0.7s ease 900ms",
            }}
          >
            <PillarCard
              pillar={pillars[2]}
              hovered={hovered === 2}
              onEnter={() => setHovered(2)}
              onLeave={() => setHovered(null)}
            />
          </div>
          {/* LEFT */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              marginTop: -85,
              zIndex: 10,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-16px)",
              transition:
                "opacity 0.7s ease 1050ms, transform 0.7s ease 1050ms",
            }}
          >
            <PillarCard
              pillar={pillars[3]}
              hovered={hovered === 3}
              onEnter={() => setHovered(3)}
              onLeave={() => setHovered(null)}
            />
          </div>
        </div>

        {/* ── SUMMARY STRIP — desktop only ── */}
        <div
          className="strategy-strip"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 1,
            background: COLORS.border,
            borderRadius: "0 0 24px 24px",
            overflow: "hidden",
            border: `1px solid ${COLORS.border}`,
            marginTop: 16,
            ...vis(1200),
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? p.accent : COLORS.white,
                padding: "20px 24px",
                cursor: "default",
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
                  background: p.accent,
                  opacity: hovered === i ? 1 : 0.35,
                  transition: "opacity 0.3s ease",
                }}
              />
              <p
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 9,
                  fontWeight: 800,
                  color: hovered === i ? "rgba(255,255,255,0.5)" : COLORS.gold,
                  letterSpacing: "2px",
                  margin: "0 0 6px",
                  transition: "color 0.3s ease",
                }}
              >
                {p.num}
              </p>
              <h4
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 13,
                  fontWeight: 800,
                  color: hovered === i ? COLORS.white : COLORS.ink,
                  margin: "0 0 4px",
                  lineHeight: 1.35,
                  transition: "color 0.3s ease",
                }}
              >
                {p.ar}
              </h4>
              <p
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  color:
                    hovered === i ? "rgba(255,255,255,0.65)" : COLORS.inkMuted,
                  margin: 0,
                  lineHeight: 1.6,
                  transition: "color 0.3s ease",
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE — 2 full screens
          Screen 1: Center node + connectors + 4 pillar rows
          Screen 2: Vision quote
      ══════════════════════════════════════════ */}
      <div className="strategy-mobile" style={{ display: "none" }}>
        {/* MOBILE SCREEN 1 — core node + connectors + 4 pillar rows */}
        <div
          style={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            background: COLORS.white,
            overflow: "hidden",
          }}
        >
          {/* Core node area with connector lines */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              height: 168,
              borderBottom: `1px solid ${COLORS.border}`,
              position: "relative",
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.85)",
              transition: "opacity 0.7s ease 300ms, transform 0.7s ease 300ms",
            }}
          >
            {/* Connector lines from core to each edge */}
            {/* Left connector */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                width: "calc(50% - 52px)",
                height: 1,
                display: "flex",
                alignItems: "center",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.6s ease 900ms",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: `linear-gradient(to left, ${COLORS.petroleum}60, transparent)`,
                }}
              />
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: COLORS.petroleum,
                  flexShrink: 0,
                }}
              />
            </div>
            {/* Right connector */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                width: "calc(50% - 52px)",
                height: 1,
                display: "flex",
                alignItems: "center",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.6s ease 900ms",
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: COLORS.rose,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: `linear-gradient(to right, ${COLORS.rose}60, transparent)`,
                }}
              />
            </div>

            {/* Core node */}
            <CenterNode size={90} />

            {/* Bottom connector arrow pointing to pillars */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                opacity: inView ? 1 : 0,
                transition: "opacity 0.6s ease 1000ms",
              }}
            >
              <div
                style={{
                  width: 1,
                  height: 10,
                  background: `linear-gradient(to bottom, ${COLORS.gold}80, ${COLORS.gold})`,
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "4px solid transparent",
                  borderRight: "4px solid transparent",
                  borderTop: `5px solid ${COLORS.gold}`,
                }}
              />
            </div>
          </div>

          {/* 4 pillar rows — fill remaining height equally */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {pillars.map((p, i) => {
              const isActive = mobileActive === i;
              return (
                <button
                  key={i}
                  onClick={() => setMobileActive(isActive ? null : i)}
                  onTouchStart={() => setMobileActive(i)}
                  style={{
                    flex: 1,
                    border: "none",
                    borderBottom:
                      i < pillars.length - 1
                        ? `1px solid ${COLORS.border}`
                        : "none",
                    background: isActive ? p.accent : COLORS.white,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "0 20px",
                    position: "relative",
                    textAlign: "right",
                    transition: "background 0.3s ease",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(24px)",
                  }}
                >
                  {/* Connector dot on the right edge linking to core */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: 0,
                      transform: "translateY(-50%)",
                      display: "flex",
                      alignItems: "center",
                      gap: 0,
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        width: isActive ? 20 : 12,
                        height: 1,
                        background: isActive
                          ? "rgba(255,255,255,0.5)"
                          : `${p.accent}50`,
                        transition: "width 0.3s ease, background 0.3s ease",
                      }}
                    />
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: isActive
                          ? "rgba(255,255,255,0.7)"
                          : p.accent,
                        flexShrink: 0,
                        transition: "background 0.3s ease",
                      }}
                    />
                  </div>

                  {/* Accent right bar (replaces connector when inactive) */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      width: 4,
                      background: p.accent,
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
                      left: 6,
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 52,
                      fontWeight: 900,
                      color: isActive
                        ? "rgba(255,255,255,0.08)"
                        : `${p.accent}07`,
                      lineHeight: 1,
                      letterSpacing: -3,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {p.num}
                  </div>

                  {/* Number badge */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      flexShrink: 0,
                      background: isActive
                        ? "rgba(255,255,255,0.2)"
                        : `${p.accent}10`,
                      border: `1.5px solid ${isActive ? "rgba(255,255,255,0.3)" : `${p.accent}30`}`,
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
                        fontSize: 11,
                        fontWeight: 900,
                        color: isActive ? COLORS.white : p.accent,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {p.num}
                    </span>
                  </div>

                  {/* Text content */}
                  <div style={{ flex: 1, zIndex: 1 }}>
                    <p
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 7.5,
                        fontWeight: 700,
                        color: isActive
                          ? "rgba(255,255,255,0.55)"
                          : COLORS.inkMuted,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        margin: "0 0 3px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {p.en}
                    </p>
                    <h4
                      style={{
                        fontFamily: "'Beiruti', sans-serif",
                        fontSize: 17,
                        fontWeight: 800,
                        color: isActive ? COLORS.white : COLORS.ink,
                        margin: "0 0 2px",
                        lineHeight: 1.25,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {p.ar}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Beiruti', sans-serif",
                        fontSize: 12,
                        fontWeight: 400,
                        color: isActive
                          ? "rgba(255,255,255,0.7)"
                          : COLORS.inkMuted,
                        margin: 0,
                        lineHeight: 1.4,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE SCREEN 2 — Vision Quote = exactly 100svh */}
        <div
          className="vision-quote-mobile"
          style={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 28px",
            background: COLORS.white,
            position: "relative",
          }}
        >
          {/* Top gradient bar */}
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
          {/* Grid bg */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage: `linear-gradient(${COLORS.petroleum}06 1px, transparent 1px), linear-gradient(90deg, ${COLORS.petroleum}06 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 8,
                fontWeight: 700,
                color: COLORS.gold,
                letterSpacing: "4px",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              VISION DIRECTION
            </p>
            <div
              style={{
                borderRight: `4px solid ${COLORS.petroleum}`,
                paddingRight: 28,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 34,
                  fontWeight: 900,
                  color: COLORS.petroleum,
                  margin: "0 0 14px",
                  lineHeight: 1.2,
                  letterSpacing: -0.5,
                }}
              >
                التوجه نحو الرؤية
              </h3>
              <p
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 17,
                  fontWeight: 400,
                  color: COLORS.inkSoft,
                  margin: "0 0 28px",
                  lineHeight: 1.9,
                }}
              >
                التكاملية بين العناصر الأربعة تقودنا نحو تحقيق الرؤية
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{ width: 24, height: 1, background: COLORS.gold }}
                />
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: COLORS.gold,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── VISION QUOTE — desktop only ── */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "20px 24px 96px",
          ...vis(1400),
        }}
        className="vision-quote-desktop"
      >
        <div
          style={{
            borderRight: `4px solid ${COLORS.petroleum}`,
            paddingRight: 32,
          }}
        >
          <p
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              color: COLORS.gold,
              letterSpacing: "4px",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            VISION DIRECTION
          </p>
          <h3
            style={{
              fontFamily: "'Beiruti', sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 900,
              color: COLORS.petroleum,
              margin: "0 0 12px",
              lineHeight: 1.2,
              letterSpacing: -0.5,
            }}
          >
            التوجه نحو الرؤية
          </h3>
          <p
            style={{
              fontFamily: "'Beiruti', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              fontWeight: 400,
              color: COLORS.inkSoft,
              margin: "0 0 20px",
              lineHeight: 1.9,
            }}
          >
            التكاملية بين العناصر الأربعة تقودنا نحو تحقيق الرؤية
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 24, height: 1, background: COLORS.gold }} />
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: COLORS.gold,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        /* ── DESKTOP ── */
        .strategy-desktop    { display: block !important; }
        .strategy-mobile     { display: none   !important; }
        .strategy-strip      { display: grid   !important; }
        .vision-quote-desktop { display: block  !important; }
        .vision-quote-mobile  { display: flex   !important; }

        /* ── MOBILE ── */
        @media (max-width: 1024px) {
          .strategy-desktop     { display: none  !important; }
          .strategy-mobile      { display: block !important; }
          .strategy-strip       { display: none  !important; }
          .vision-quote-desktop { display: none  !important; }

          /* Header fills full screen on mobile */
          .strategy-header {
            height: 100svh;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          .strategy-header > div:last-child {
            padding: 0 24px !important;
          }
        }

        @media (max-width: 768px) {
          .strategy-header-breadcrumb {
            margin-bottom: 18px !important;
            gap: 10px !important;
          }
          .strategy-header-breadcrumb span:last-child {
            font-size: 9px !important;
            letter-spacing: 4px !important;
            white-space: nowrap !important;
          }
          .strategy-header-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            align-items: start !important;
            margin-top: 24px !important;
          }
          .strategy-header-title {
            font-size: 42px !important;
            line-height: 1.05 !important;
            margin-top: 0 !important;
            letter-spacing: -1px !important;
          }
          .strategy-header-copy { padding-bottom: 0 !important; }
          .strategy-header-copy > div {
            padding-right: 18px !important;
            margin-bottom: 16px !important;
          }
          .strategy-header-lead      { font-size: 26px !important; line-height: 1.45 !important; }
          .strategy-header-lead-gold { font-size: 27px !important; }
          .strategy-header-description { font-size: 16px !important; line-height: 1.9 !important; }
        }

        @media (max-width: 420px) {
          .strategy-header-title       { font-size: 36px !important; }
          .strategy-header-lead        { font-size: 22px !important; }
          .strategy-header-lead-gold   { font-size: 23px !important; }
          .strategy-header-description { font-size: 15px !important; }
        }
      `}</style>
    </section>
  );
}
