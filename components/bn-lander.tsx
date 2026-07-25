"use client";

import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
//  QUICK SETUP — edit these two values
// ─────────────────────────────────────────────────────────────
const AFFILIATE_LINK = "https://trksy.org/aff_c?offer_id=4347&aff_id=26188"; // ← your affiliate/offer URL (every CTA uses it)

const GREEN = "#1E5E3E";
const GREEN_DEEP = "#0E3A25";
const GREEN_BRIGHT = "#2E7D53";
const INK = "#111213";

// ── Scroll-reveal hook ────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    // Content is visible by default in CSS. We only "arm" (hide) elements that are
    // safely below the fold, then fade them in — so a JS hiccup can never blank the page.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      // threshold 0 + bottom inset keeps tall cards reliable (a tall element may
      // never show 15% of itself inside the viewport).
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    );

    const arm = () => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.reveal-armed)").forEach((el) => {
        if (el.getBoundingClientRect().top > vh * 0.9) {
          el.classList.add("reveal-armed");
          obs.observe(el);
        }
      });
    };
    arm();

    return () => obs.disconnect();
  }, []);
}

const STEPS = [
  {
    t: "Click apply now",
    d: "Start your application — it takes seconds.",
    icon: "M9 9l10.5 3.5-4.5 2-2 4.5L9 9z M4 4l1.5 1.5 M4 9h2 M9 4v2",
  },
  { t: "Enter your email", d: "Quick 30-second signup process.", icon: "M3 7l9 6 9-6 M3.5 5.5h17v13h-17z" },
  {
    t: "Complete the survey",
    d: "Share your shopping preferences.",
    icon: "M5 6a2 2 0 012-2h10a2 2 0 012 2v13a2 2 0 01-2 2H7a2 2 0 01-2-2V6z M9 10h6 M9 14h6",
  },
  {
    t: "Complete 5+ deals",
    d: "Simple tasks like app downloads & trials.",
    icon: "M3 10h18v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z M12 10v11 M3 14h18 M12 10c-2.5 0-4-1.2-4-2.8C8 5.5 10 5 12 7c2-2 4-1.5 4 .2 0 1.6-1.5 2.8-4 2.8z",
  },
  {
    t: "Get your discount",
    d: "Delivered straight to your inbox.",
    icon: "M8 21h8 M12 17v4 M7 4h10v5a5 5 0 01-10 0V4z M7 6H4v1a4 4 0 004 4 M17 6h3v1a4 4 0 01-4 4",
  },
];

const CATEGORIES = [
  {
    t: "Books & Bestsellers",
    d: "Hardcover bestsellers, box sets, and signed editions.",
    icon: "M4 5a2 2 0 012-2h5v18H6a2 2 0 01-2-2V5z M20 5a2 2 0 00-2-2h-5v18h5a2 2 0 002-2V5z",
  },
  {
    t: "Games & Puzzles",
    d: "Board games, puzzles, and building brick sets.",
    icon: "M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8z M8 10v4 M6 12h4 M15 10h.01 M17 13h.01",
  },
  {
    t: "Journals & Stationery",
    d: "Leather journals, fountain pens, and planners.",
    icon: "M6 4h9l3 3v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z M9 9h6 M9 13h6 M9 17h4",
  },
  {
    t: "Music & Collectibles",
    d: "Vinyl records, collector's editions, and figures.",
    icon: "M12 3a9 9 0 100 18 9 9 0 000-18z M12 10a2 2 0 100 4 2 2 0 000-4z",
  },
];

const FAQS = [
  {
    q: "What are deals?",
    a: "Simple tasks like app downloads, surveys, or trial subscriptions. Each deal is straightforward and designed to be completed quickly.",
  },
  {
    q: "How many do I need?",
    a: "Complete 5+ deals to receive your reward. The more deals you complete, the faster you can receive your discount code.",
  },
  {
    q: "How long do they take?",
    a: "Typically 10-20 minutes per deal. Most users complete all required deals within a few hours spread across a day or two.",
  },
];

function Icon({ d, className = "w-6 h-6", color = GREEN }: { d: string; className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {d.split(" M").map((p, i) => (
        <path key={i} d={(i === 0 ? "" : "M") + p} />
      ))}
    </svg>
  );
}

function CTAButton({
  children,
  dark = false,
  large = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  large?: boolean;
}) {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn group inline-flex items-center gap-2 rounded-full font-semibold ${
        large ? "px-9 py-4 text-lg" : "px-7 py-3.5 text-base"
      }`}
      style={dark ? { backgroundColor: GREEN, color: "#FFFFFF" } : { backgroundColor: "#FFFFFF", color: INK }}
    >
      {children}
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

export default function BNRewardLander() {
  const [lineProgress, setLineProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState(0);
  useReveal();

  // Draw the timeline as the section scrolls into view
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLineProgress(100);
      return;
    }
    const onScroll = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const passed = Math.min(Math.max(vh * 0.75 - rect.top, 0), rect.height);
      setLineProgress((passed / rect.height) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden" style={{ color: INK }}>
      <style>{`
          [data-reveal] { transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
          [data-reveal].reveal-armed { opacity: 0; transform: translateY(28px); }
          [data-reveal].reveal-armed.revealed { opacity: 1; transform: none; }

        .cta-btn { transition: transform .15s ease, box-shadow .2s ease; }
        .cta-btn:hover { transform: scale(1.04); box-shadow: 0 12px 32px rgba(0,0,0,0.22); }
        .cta-btn:active { transform: scale(0.98); }

        .orb { position: absolute; border-radius: 9999px; filter: blur(70px); opacity: .5; animation: orbDrift 12s ease-in-out infinite; }
        @keyframes orbDrift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.15); }
        }

        .drifter { position: absolute; opacity: .18; animation: drift 9s ease-in-out infinite; }
        @keyframes drift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(8deg); }
        }

        .step-card { transition: transform .25s cubic-bezier(.16,1,.3,1), box-shadow .25s ease; }
        .step-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(30,94,62,0.14); }
        .step-card:hover .step-icon { transform: rotate(-6deg) scale(1.1); }
        .step-icon { transition: transform .25s cubic-bezier(.34,1.56,.64,1); }

        .cat-card { transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease; }
        .cat-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 24px 48px rgba(17,18,19,0.12); }
        .cat-card:hover .cat-icon { transform: translateY(-4px) rotate(4deg) scale(1.08); }
        .cat-icon { transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
          .cat-card[data-reveal] { transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1); }
          .cat-card[data-reveal].reveal-armed { opacity: 0; transform: translateY(40px) scale(.94) rotate(-1.2deg); }
          .cat-card[data-reveal].reveal-armed.revealed { opacity: 1; transform: none; }
        .card-shine { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(115deg, transparent 35%, rgba(30,94,62,0.05) 47%, rgba(255,255,255,0.55) 52%, transparent 65%); background-size: 260% 100%; animation: cardShine 7s ease-in-out infinite; }
        @keyframes cardShine { 0%, 55% { background-position: 135% 0; } 85%, 100% { background-position: -60% 0; } }
        .icon-bob { animation: iconBob 4.5s ease-in-out infinite; }
        @keyframes iconBob { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-5px) rotate(-5deg); } }
        .cat-spark { position: absolute; top: 16px; right: 18px; color: #1E5E3E; animation: sparkTwinkle 3.4s ease-in-out infinite; }
        @keyframes sparkTwinkle { 0%, 100% { transform: scale(.75) rotate(0deg); opacity: .15; } 50% { transform: scale(1.2) rotate(25deg); opacity: .45; } }

        .faq-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s cubic-bezier(.16,1,.3,1); }
        .faq-body.open { grid-template-rows: 1fr; }
        .faq-inner { overflow: hidden; }

        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
        @keyframes pulseDot { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,.6); } 50% { box-shadow: 0 0 0 7px rgba(74,222,128,0); } }

        .t-node { background-color: #1E5E3E; border-color: #1E5E3E; color: #fff; box-shadow: 0 8px 22px rgba(30,94,62,.35); }
        .t-card { transition: transform .25s cubic-bezier(.16,1,.3,1), border-color .25s ease, box-shadow .25s ease; }
        .t-card:hover { transform: translateY(-6px); border-color: rgba(30,94,62,.35); box-shadow: 0 18px 44px rgba(30,94,62,.12); }
        .t-line-progress { background: linear-gradient(180deg, #2E7D53, #1E5E3E); }

        .spark { position: absolute; bottom: -12px; border-radius: 9999px; background: rgba(255,255,255,.75); animation: sparkRise linear infinite; }
        @keyframes sparkRise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          12% { opacity: .8; }
          100% { transform: translateY(-560px) scale(.3); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, .orb, .drifter { animation: none !important; transition: none !important; }
          [data-reveal] { opacity: 1; transform: none; }
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(170deg, ${GREEN_BRIGHT} 0%, ${GREEN} 45%, ${GREEN_DEEP} 100%)` }}
      >
        {/* ambient glow orbs */}
        <div className="orb w-96 h-96 -top-24 -left-24" style={{ backgroundColor: "#4E9B72" }} />
        <div className="orb w-80 h-80 top-1/3 -right-20" style={{ backgroundColor: "#0E3A25", animationDelay: "-6s" }} />
        {/* drifting icons */}
        <div className="drifter left-[8%] top-[30%]">
          <Icon d="M12 3l2.2 4.9L19 9l-4 3.4 1.3 5.1L12 14.8 7.7 17.5 9 12.4 5 9l4.8-1.1z" color="#fff" className="w-8 h-8" />
        </div>
        <div className="drifter right-[10%] top-[18%]" style={{ animationDelay: "-3s" }}>
          <Icon
            d="M3 10h18v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z M12 10v11 M3 14h18"
            color="#fff"
            className="w-9 h-9"
          />
        </div>
        <div className="drifter left-[16%] bottom-[12%]" style={{ animationDelay: "-5s" }}>
          <Icon d="M6 7h12l1 14H5L6 7z M9 7a3 3 0 016 0" color="#fff" className="w-8 h-8" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 pt-12 pb-20 md:pt-20 md:pb-24 text-center">
          <div className="text-white" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              Applications Open
            </span>
            <h1 className="mt-6 font-black tracking-tight leading-[1.08] sm:leading-[1.03] text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              The{" "}
              <span style={{ color: "#FFD84D" }}>Barnes &amp; Noble Discounts</span>{" "}
              They Don&apos;t Advertise
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed text-pretty">
              Discover how readers are unlocking hidden discount codes on books, e-readers, gifts, and everyday reads.
            </p>
            <div className="mt-9 flex items-center justify-center gap-x-5 gap-y-10 sm:gap-y-5 flex-wrap">
              <CTAButton large>Apply Now</CTAButton>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["/avatars/reader-1.png", "/avatars/reader-2.png", "/avatars/reader-3.png"].map((src, i) => (
                    <img
                      key={i}
                      src={src || "/placeholder.svg"}
                      alt="Reader who claimed a discount"
                      className="w-9 h-9 rounded-full border-2 border-white/60 object-cover"
                    />
                  ))}
                </div>
                <span className="text-white/80 text-sm leading-tight max-w-[180px]">
                  Join 12,000+ readers who&apos;ve already claimed their discounts
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE STEPS — THE PATH TO YOUR DISCOUNTS ─────── */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center" data-reveal>
            <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: GREEN }}>
              How it works
            </div>
            <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
              Five Simple Steps to Claiming Your Discounts
            </h2>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative mt-10">
            {/* base line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gray-200" />
            {/* progress line */}
            <div
              className="t-line-progress absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-[3px] rounded-full"
              style={{ height: `${lineProgress}%` }}
            />

            {STEPS.map((step, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div
                  key={i}
                  data-reveal
                  className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[1fr_3.5rem_1fr] gap-x-4 md:gap-x-8 items-center pb-6 md:pb-8 last:pb-0"
                >
                  {/* ghost step number — fills the side opposite the card */}
                  <div
                    className={`hidden md:flex items-center ${
                      leftSide ? "md:order-3 justify-start" : "md:order-1 justify-end"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="font-black text-6xl lg:text-7xl leading-none select-none" style={{ color: "#E9F1EB" }}>
                      0{i + 1}
                    </span>
                  </div>

                  {/* node */}
                  <div className="order-1 md:order-2 flex justify-center self-start md:self-center pt-1 md:pt-0">
                    <div className="t-node w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm z-10">
                      {i + 1}
                    </div>
                  </div>

                  {/* card */}
                  <div
                    className={`t-card order-2 rounded-2xl p-5 bg-white border border-gray-200 shadow-sm ${
                      leftSide ? "md:order-1" : "md:order-3"
                    }`}
                  >
                    <div className={`flex items-start gap-4 ${leftSide ? "md:flex-row-reverse md:text-right" : ""}`}>
                      <div
                        className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "#E4EFE7" }}
                      >
                        <Icon d={step.icon} color={GREEN} className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg leading-snug">{step.t}</h3>
                        <p className="mt-1 text-gray-500 leading-relaxed text-sm">{step.d}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center" data-reveal>
            <CTAButton dark large>
              Apply Now
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── WHAT YOUR GIFT CARD COVERS ──────────────────── */}
      <section style={{ backgroundColor: "#F7F7F8" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
          <div data-reveal>
            <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: GREEN }}>
              Unlock rewards
            </div>
            <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
              What You Can Do With Your Discount Code
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-5 text-left">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.t}
                data-reveal
                style={{ transitionDelay: `${i * 0.12}s` }}
                className="cat-card relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm p-7 flex items-start gap-5"
              >
                {/* rolling light sweep */}
                <div className="card-shine" style={{ animationDelay: `${i * 1.8}s` }} aria-hidden="true" />
                {/* twinkling corner sparkle */}
                <span className="cat-spark" style={{ animationDelay: `${i * 0.8}s` }} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
                  </svg>
                </span>
                <div
                  className="cat-icon w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "#E4EFE7" }}
                >
                  <div className="icon-bob" style={{ animationDelay: `${i * 0.6}s` }}>
                    <Icon d={c.icon} className="w-7 h-7" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-bold text-2xl">{c.t}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
          <div data-reveal>
            <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: GREEN }}>
              Questions &amp; answers
            </div>
            <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4 text-left" data-reveal>
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-white border border-gray-200 shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-bold text-lg">{f.q}</span>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: openFaq === i ? GREEN : "#F2F3F5" }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke={openFaq === i ? "#fff" : INK}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-body ${openFaq === i ? "open" : ""}`}>
                  <div className="faq-inner">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINALE — YOUR CARD IS WAITING ───────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(170deg, ${GREEN_BRIGHT} 0%, ${GREEN} 50%, ${GREEN_DEEP} 100%)` }}
      >
        {/* rising sparkles */}
        {[
          { l: "6%", s: 5, d: 7, delay: 0 },
          { l: "16%", s: 4, d: 9, delay: 2.2 },
          { l: "28%", s: 6, d: 8, delay: 1.1 },
          { l: "42%", s: 4, d: 10, delay: 3.4 },
          { l: "58%", s: 5, d: 7.5, delay: 0.6 },
          { l: "70%", s: 4, d: 9.5, delay: 2.8 },
          { l: "82%", s: 6, d: 8.5, delay: 1.8 },
          { l: "92%", s: 4, d: 7, delay: 4 },
        ].map((sp, i) => (
          <span
            key={i}
            className="spark"
            style={{ left: sp.l, width: sp.s, height: sp.s, animationDuration: `${sp.d}s`, animationDelay: `${sp.delay}s` }}
          />
        ))}
        <div className="orb w-96 h-96 -top-24 -left-24" style={{ backgroundColor: "#5FAF82", opacity: 0.35 }} />
        <div className="orb w-80 h-80 -bottom-24 -right-16" style={{ backgroundColor: "#0E3A25", animationDelay: "-5s" }} />

        <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-24 text-center text-white">
          <div data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              Applications Open
            </span>
            <h2 className="mt-6 font-black tracking-tight text-4xl md:text-6xl leading-[1.05] text-balance">
              Ready to Start Saving?
            </h2>
            <p className="mt-4 text-white/85 text-lg max-w-xl mx-auto leading-relaxed text-pretty">
              Join thousands of readers who have already claimed their summer discount code. Your next great read is just
              a few clicks away.
            </p>
          </div>

          <div className="mt-9 md:mt-10" data-reveal style={{ transitionDelay: ".15s" }}>
            <CTAButton large>Apply Now</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
