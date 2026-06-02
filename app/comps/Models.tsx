"use client";

import { useEffect, useRef, useState } from "react";
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
  inkMuted: "#6B7C7D",
};

type Product = {
  title: string;
  desc: string;
  tag: string;
  partner?: string;
  href: string;
  image?: string;
};

type Model = {
  num: string;
  type: string;
  typeEn: string;
  title: string;
  desc: string;
  icon: string;
  accent: string;
  products: Product[];
};

const models: Model[] = [
  {
    num: "01",
    type: "نموذج معرفي",
    typeEn: "Knowledge Model",
    title: "بناء الأصول غير الملموسة",
    desc: "تحويل المعرفة إلى أصول قابلة للتبادل والنمو. نحوّل ما هو ضمني في المنظمات إلى بنية معرفية منظمة يمكن قياسها ومضاعفتها.",
    icon: "◈",
    accent: C.petroleum,
    products: [
      {
        title: "هاكاثون الوعي المعرفي",
        desc: "مبادرة معرفية بالشراكة مع جامعة الملك سعود — تجسيداً لتحويل المعرفة إلى قيمة مؤسسية مؤثرة.",
        tag: "منجز",
        partner: "جامعة الملك سعود",
        href: "https://hackathonwa3i.online/",
        image: "/hakathon.png",
      },
    ],
  },
  {
    num: "02",
    type: "نموذج تكويني",
    typeEn: "Formative Model",
    title: "بناء نموذج الوعي الإنساني",
    desc: "نُعيد تشكيل منطق الفرد وأنماط تفكيره نحو وعي أعمق يُمكّنه من الإسهام الحقيقي في النجاح والتنمية المستدامة.",
    icon: "◎",
    accent: C.gold,
    products: [],
  },
  {
    num: "03",
    type: "نموذج سياسات",
    typeEn: "Policy Model",
    title: "صناعة السياسات",
    desc: "صياغة الغايات العليا للسياسات التعليمية. نبني إطاراً فكرياً يُمكّن صانعي القرار من رسم سياسات ذات أثر حقيقي.",
    icon: "⬡",
    accent: C.crimson,
    products: [],
  },
  {
    num: "04",
    type: "مختبر ابتكار",
    typeEn: "Innovation Lab",
    title: "مختبر منظومة للابتكار",
    desc: "تحويل المعرفة إلى نماذج تطبيقية مؤثرة. مساحة تجريبية لتطوير الحلول المعرفية واختبارها قبل التوسع.",
    icon: "◭",
    accent: C.rose,
    products: [],
  },
  {
    num: "05",
    type: "أداة تغذية",
    typeEn: "Feedback Tool",
    title: "الفاصلة المنقوطة",
    desc: "أدوات تغذية راجعة لضبط القرار المؤسسي. نُصمّم دورات تقييم ذكية تُحوّل الملاحظة إلى قرار استراتيجي.",
    icon: "⊕",
    accent: C.petroleum,
    products: [],
  },
  {
    num: "06",
    type: "نموذج قياس",
    typeEn: "Measurement Model",
    title: "قياس التوجه",
    desc: "إعادة تشكيل المنطق لدى عناصر المنظومة التعليمية. نبني أدوات قياس دقيقة تكشف الفجوات وتُرشد التدخل.",
    icon: "◉",
    accent: C.gold,
    products: [],
  },
  {
    num: "07",
    type: "نموذج أداء",
    typeEn: "Performance Model",
    title: "الأداء الوظيفي",
    desc: "ضبط القدرات البشرية داخل المؤسسات. نُطوّر نماذج الأداء التي تربط الكفاءة بالغاية المؤسسية.",
    icon: "▲",
    accent: C.crimson,
    products: [],
  },
  {
    num: "08",
    type: "نموذج عقاري",
    typeEn: "Real Estate Model",
    title: "التطوير العقاري في التعليم",
    desc: "إعادة تعريف العلاقة بين التعليم والمكان. نُصمّم بيئات تعلم تُجسّد قيم المنظومة وتُعزّز الأثر المعرفي.",
    icon: "⬢",
    accent: C.rose,
    products: [],
  },
];

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Models() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function switchModel(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 200);
  }

  const m = models[active];

  const vis = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section
      id="models"
      dir="rtl"
      ref={ref}
      style={{ background: C.offwhite, position: "relative", overflow: "hidden" }}
    >
      {/* Background dot pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `radial-gradient(${C.petroleum}06 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* ─── HEADER ─── */}
      <div
        className="models-header"
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
                color: C.border,
                letterSpacing: "2px",
              }}
            >
              04
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
              KNOWLEDGE PRODUCTS
            </span>
          </div>

          {/* Title + description grid */}
          <div
            className="mhg"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 72,
              alignItems: "start",
            }}
          >
            <div style={vis(150)}>
              <h2
                className="mht"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: "clamp(48px, 5.5vw, 80px)",
                  fontWeight: 800,
                  color: C.ink,
                  lineHeight: 1.1,
                  letterSpacing: -2,
                  margin: 0,
                }}
              >
                نماذج ومنتجات
                <br />
                <span
                  style={{
                    color: C.petroleum,
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 6,
                  }}
                >
                  معرفية
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

            <div style={{ paddingBottom: 2, ...vis(280) }}>
              <div
                style={{
                  borderRight: `4px solid ${C.petroleum}`,
                  paddingRight: 24,
                  marginBottom: 20,
                }}
              >
                <p
                  className="mhl"
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 28,
                    fontWeight: 900,
                    color: C.petroleum,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  ثمانية نماذج معرفية
                  <br />
                  <span style={{ color: C.gold }}>مصممة لإحداث أثر حقيقي</span>
                </p>
              </div>
              <p
                className="mhd"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: C.inkSoft,
                  lineHeight: 1.9,
                  margin: "0 0 24px",
                }}
              >
                كل نموذج يمثل منتجًا معرفيًا متكاملًا — مصممًا لبناء قدرات
                مؤسسية مستدامة وتحويل المعرفة إلى قيمة اقتصادية قابلة للتطبيق.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
                {[
                  { val: "8", label: "نماذج معرفية" },
                  { val: "100%", label: "تخصص معرفي" },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 32 }}
                  >
                    {i > 0 && (
                      <div
                        style={{ width: 1, height: 40, background: C.border }}
                      />
                    )}
                    <div style={{ textAlign: "center" }}>
                      <p
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 36,
                          fontWeight: 900,
                          color: C.petroleum,
                          margin: "0 0 4px",
                          lineHeight: 1,
                          letterSpacing: -1,
                        }}
                      >
                        {s.val}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Beiruti', sans-serif",
                          fontSize: 12,
                          fontWeight: 500,
                          color: C.inkMuted,
                          margin: 0,
                        }}
                      >
                        {s.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── EXPLORER ─── */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 24px 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
            ...vis(260),
          }}
        >
          <div style={{ width: 28, height: 1, background: C.border }} />
          <span
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              color: C.inkMuted,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            KNOWLEDGE EXPLORER
          </span>
        </div>

        {/* ── Spotlight card ── */}
        <div
          style={{
            opacity: inView ? (fading ? 0 : 1) : 0,
            transform: inView
              ? fading
                ? "translateY(10px)"
                : "translateY(0)"
              : "translateY(20px)",
            transition: fading
              ? "opacity 0.2s ease, transform 0.2s ease"
              : "opacity 0.75s ease 300ms, transform 0.75s ease 300ms",
          }}
        >
          <div
            className="spotlight-card"
            style={{
              background: C.white,
              borderRadius: 28,
              border: `1.5px solid ${C.border}`,
              overflow: "hidden",
              boxShadow: `0 32px 80px ${C.petroleum}09`,
              display: "grid",
              gridTemplateColumns: "1fr 360px",
            }}
          >
            {/* ── Content column (RIGHT in RTL) ── */}
            <div
              style={{
                padding: "52px 52px",
                borderLeft: `1px solid ${C.border}`,
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  height: 4,
                  background: m.accent,
                  transition: "background 0.4s ease",
                }}
              />

              {/* Type badges */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: m.accent,
                    flexShrink: 0,
                    transition: "background 0.4s ease",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: m.accent,
                    transition: "color 0.4s ease",
                  }}
                >
                  {m.type}
                </span>
                <span
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 9,
                    fontWeight: 600,
                    color: C.inkMuted,
                    letterSpacing: "1.5px",
                    opacity: 0.6,
                  }}
                >
                  {m.typeEn}
                </span>
              </div>

              {/* Title */}
              <h3
                className="spotlight-title"
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: "clamp(28px, 3vw, 46px)",
                  fontWeight: 900,
                  color: C.ink,
                  margin: "0 0 16px",
                  lineHeight: 1.2,
                  letterSpacing: -0.5,
                }}
              >
                {m.title}
              </h3>

              {/* Accent divider */}
              <div
                style={{
                  width: 48,
                  height: 3,
                  background: m.accent,
                  borderRadius: 2,
                  marginBottom: 20,
                  transition: "background 0.4s ease",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Beiruti', sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: C.inkSoft,
                  lineHeight: 1.9,
                  margin: "0 0 40px",
                  flex: 1,
                }}
              >
                {m.desc}
              </p>

              {/* Products */}
              {m.products.length > 0 ? (
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 1,
                        background: m.accent,
                        transition: "background 0.4s ease",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 9,
                        fontWeight: 700,
                        color: m.accent,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        transition: "color 0.4s ease",
                      }}
                    >
                      PRODUCTS
                    </span>
                    <span
                      style={{
                        fontFamily: "'Beiruti', sans-serif",
                        fontSize: 13,
                        fontWeight: 700,
                        color: C.inkMuted,
                      }}
                    >
                      المنتجات
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 12 }}
                  >
                    {m.products.map((p, pi) => (
                      <a
                        key={pi}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        <div
                          className="product-row"
                          style={{
                            background: C.offwhite,
                            border: `1.5px solid ${C.border}`,
                            borderRadius: 16,
                            padding: "18px 22px",
                            display: "flex",
                            alignItems: "center",
                            gap: 18,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = m.accent;
                            el.style.background = C.white;
                            el.style.boxShadow = `0 8px 28px ${m.accent}20`;
                            el.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = C.border;
                            el.style.background = C.offwhite;
                            el.style.boxShadow = "none";
                            el.style.transform = "translateY(0)";
                          }}
                        >
                          {p.image && (
                            <div
                              style={{
                                width: 64,
                                height: 64,
                                borderRadius: 12,
                                overflow: "hidden",
                                flexShrink: 0,
                                position: "relative",
                                background: C.ink,
                              }}
                            >
                              <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                sizes="64px"
                                style={{ objectFit: "cover", opacity: 0.8 }}
                              />
                            </div>
                          )}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 5,
                                flexWrap: "wrap",
                              }}
                            >
                              <h4
                                style={{
                                  fontFamily: "'Beiruti', sans-serif",
                                  fontSize: 17,
                                  fontWeight: 800,
                                  color: C.ink,
                                  margin: 0,
                                }}
                              >
                                {p.title}
                              </h4>
                              <span
                                style={{
                                  fontFamily: "'Beiruti', sans-serif",
                                  fontSize: 11,
                                  fontWeight: 700,
                                  color: m.accent,
                                  background: `${m.accent}14`,
                                  padding: "2px 10px",
                                  borderRadius: 999,
                                  transition: "background 0.4s ease, color 0.4s ease",
                                }}
                              >
                                {p.tag}
                              </span>
                            </div>
                            {p.partner && (
                              <p
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 9,
                                  fontWeight: 700,
                                  color: C.inkMuted,
                                  margin: "0 0 4px",
                                  letterSpacing: "1.5px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {p.partner}
                              </p>
                            )}
                            <p
                              style={{
                                fontFamily: "'Beiruti', sans-serif",
                                fontSize: 13,
                                fontWeight: 500,
                                color: C.inkSoft,
                                margin: 0,
                                lineHeight: 1.65,
                              }}
                            >
                              {p.desc}
                            </p>
                          </div>
                          <div style={{ flexShrink: 0, opacity: 0.5 }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M13 8H3M3 8L8 3M3 8L8 13"
                                stroke={m.accent}
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: C.offwhite,
                    border: `1px dashed ${C.border}`,
                    borderRadius: 12,
                    padding: "12px 20px",
                  }}
                >
                  <span style={{ fontSize: 14, color: C.border }}>◌</span>
                  <span
                    style={{
                      fontFamily: "'Beiruti', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.inkMuted,
                    }}
                  >
                    منتجات هذا النموذج قريباً
                  </span>
                </div>
              )}
            </div>

            {/* ── Accent visual column (LEFT in RTL) ── */}
            <div
              className="spotlight-visual"
              style={{
                background: m.accent,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "52px 40px",
                minHeight: 420,
                transition: "background 0.4s ease",
              }}
            >
              {/* Dot grid overlay */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />

              {/* Giant background number */}
              <p
                aria-hidden
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 180,
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.06)",
                  margin: 0,
                  lineHeight: 1,
                  position: "absolute",
                  bottom: -24,
                  left: "50%",
                  transform: "translateX(-50%)",
                  letterSpacing: -10,
                  whiteSpace: "nowrap",
                  userSelect: "none",
                }}
              >
                {m.num}
              </p>

              {/* Icon box */}
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 26,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 28,
                  backdropFilter: "blur(4px)",
                  zIndex: 1,
                }}
              >
                <span
                  style={{ fontSize: 44, color: "rgba(255,255,255,0.85)" }}
                >
                  {m.icon}
                </span>
              </div>

              {/* Type label */}
              <div style={{ textAlign: "center", zIndex: 1 }}>
                <p
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.9)",
                    margin: "0 0 6px",
                    lineHeight: 1.4,
                  }}
                >
                  {m.type}
                </p>
                <p
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 9,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  {m.typeEn}
                </p>
              </div>

              {/* Products badge */}
              {m.products.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 999,
                    padding: "6px 14px",
                    backdropFilter: "blur(8px)",
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: 9,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.85)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.products.length} PRODUCT
                    {m.products.length > 1 ? "S" : ""}
                  </span>
                </div>
              )}

              {/* Corner decoration */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -40,
                  left: -40,
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.08)",
                  zIndex: 0,
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -70,
                  left: -70,
                  width: 260,
                  height: 260,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.05)",
                  zIndex: 0,
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Model selector strip ── */}
        <div style={{ marginTop: 12, ...vis(500) }}>
          <div
            className="selector-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap: 1,
              background: C.border,
              borderRadius: 20,
              overflow: "hidden",
              border: `1px solid ${C.border}`,
            }}
          >
            {models.map((mod, i) => (
              <button
                key={i}
                onClick={() => switchModel(i)}
                style={{
                  background: active === i ? mod.accent : C.white,
                  border: "none",
                  padding: "18px 14px",
                  cursor: "pointer",
                  textAlign: "right",
                  transition: "background 0.25s ease",
                  position: "relative",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (active !== i)
                    (e.currentTarget as HTMLElement).style.background =
                      C.offwhite;
                }}
                onMouseLeave={(e) => {
                  if (active !== i)
                    (e.currentTarget as HTMLElement).style.background = C.white;
                }}
              >
                {/* Active shimmer line */}
                {active === i && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      left: 0,
                      height: 2,
                      background: "rgba(255,255,255,0.35)",
                    }}
                  />
                )}

                <p
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: 15,
                    fontWeight: 900,
                    color:
                      active === i ? "rgba(255,255,255,0.9)" : C.inkMuted,
                    margin: "0 0 3px",
                    letterSpacing: -0.5,
                    transition: "color 0.25s ease",
                  }}
                >
                  {mod.num}
                </p>
                <p
                  className="selector-type"
                  style={{
                    fontFamily: "'Beiruti', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    color:
                      active === i
                        ? "rgba(255,255,255,0.65)"
                        : C.inkMuted,
                    margin: 0,
                    lineHeight: 1.3,
                    transition: "color 0.25s ease",
                  }}
                >
                  {mod.type}
                </p>

                {/* Products dot indicator */}
                {mod.products.length > 0 && (
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background:
                        active === i
                          ? "rgba(255,255,255,0.55)"
                          : mod.accent,
                      marginTop: 6,
                      transition: "background 0.25s ease",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "20px 24px 0",
          ...vis(600),
        }}
      >
        <div
          className="models-cta"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: "28px 36px",
            boxShadow: `0 12px 40px ${C.petroleum}06`,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 9,
                fontWeight: 700,
                color: C.inkMuted,
                letterSpacing: "3px",
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}
            >
              KNOWLEDGE PORTFOLIO
            </p>
            <p
              style={{
                fontFamily: "'Beiruti', sans-serif",
                fontSize: 18,
                fontWeight: 800,
                color: C.ink,
                margin: 0,
              }}
            >
              منظومة كاملة من النماذج المعرفية المتكاملة
            </p>
          </div>
          <a
            href="#contact"
            style={{
              fontFamily: "'Beiruti', sans-serif",
              fontSize: 15,
              fontWeight: 800,
              color: C.white,
              textDecoration: "none",
              background: C.petroleum,
              padding: "14px 32px",
              borderRadius: 999,
              boxShadow: `0 8px 28px ${C.petroleum}30`,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#01707A";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = C.petroleum;
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            تواصل معنا لمعرفة المزيد
          </a>
        </div>
      </div>

      <div style={{ height: 80 }} className="models-bottom-pad" />

      <style>{`
        /* ── DESKTOP ── */
        .models-header     { padding: 80px 24px 72px !important; }
        .spotlight-card    { grid-template-columns: 1fr 360px !important; }
        .spotlight-visual  { min-height: 420px !important; }
        .selector-grid     { grid-template-columns: repeat(8, 1fr) !important; }
        .models-bottom-pad { height: 80px !important; }

        /* ── TABLET ── */
        @media (max-width: 1100px) {
          .spotlight-card   { grid-template-columns: 1fr 280px !important; }
        }

        @media (max-width: 900px) {
          .spotlight-card   { grid-template-columns: 1fr !important; }
          .spotlight-visual { min-height: 220px !important; }
          .selector-grid    { grid-template-columns: repeat(4, 1fr) !important; }
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .models-header { padding: 56px 24px 48px !important; }
          .mhg  { grid-template-columns: 1fr !important; gap: 28px !important; }
          .mht  { font-size: 40px !important; letter-spacing: -1px !important; }
          .mhl  { font-size: 22px !important; }
          .mhd  { font-size: 15px !important; }

          .spotlight-card  { border-radius: 20px !important; }
          .selector-grid   { grid-template-columns: repeat(4, 1fr) !important; border-radius: 16px !important; }

          .models-cta { flex-direction: column !important; align-items: flex-start !important; padding: 24px 20px !important; }
          .models-cta a { width: 100% !important; text-align: center !important; }
          .models-bottom-pad { height: 48px !important; }
        }

        @media (max-width: 420px) {
          .mht { font-size: 34px !important; }
          .spotlight-title { font-size: 26px !important; }
          .selector-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }

        /* Hover state for product rows */
        .product-row { will-change: transform, box-shadow; }
      `}</style>
    </section>
  );
}
