import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { PhoneShot } from "@/components/coin-detective/PhoneShot";
import { Logo } from "@/components/coin-detective/primitives";

import shotHome from "@/assets/screenshots/home.webp";
import shotCamera from "@/assets/screenshots/camera.webp";
import shotAlerts from "@/assets/screenshots/alerts.webp";
import shotHistory from "@/assets/screenshots/history.webp";
import shotResult from "@/assets/screenshots/result.webp";
import shotProfile from "@/assets/screenshots/profile.webp";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.mitprogrammer.coindetective";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#screens", label: "Screenshots" },
  { href: "#pricing", label: "Pricing" },
  { href: "#support", label: "Support" },
];

function DownloadButton({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const sizeClass = size === "lg" ? "h-11 px-8 text-base" : "h-10 px-6 text-sm";

  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold text-gold-foreground font-semibold tracking-wide shadow-gold hover:brightness-110 transition ${sizeClass} ${className}`}
    >
      Download Now
    </a>
  );
}

function PlayBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 h-14 px-6 rounded-xl bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:brightness-110 transition ${className}`}
    >
      <svg width="22" height="24" viewBox="0 0 24 26" fill="currentColor">
        <path d="M3 1.5v23l12-11.5L3 1.5zM17.5 10L14 13.5l3.5 3.5 4.5-2.5c1.5-.8 1.5-2.2 0-3L17.5 10z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-widest opacity-80">Get it on</span>
        <span className="block text-base">Google Play</span>
      </span>
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  shade = "default",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  shade?: "default" | "alt";
}) {
  return (
    <section
      id={id}
      className={`section-gold-shade ${shade === "alt" ? "section-gold-shade-alt" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-14">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold mb-4">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-gold font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "scan":
      return (
        <svg {...common}>
          <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "value":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M9.5 9.5c.5-1 1.5-1.5 2.5-1.5s2 .6 2 1.75c0 2.25-4.5 1.25-4.5 3.75 0 1.1 1 1.75 2.25 1.75s1.9-.4 2.4-1.25" />
        </svg>
      );
    case "history":
      return (
        <svg {...common}>
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
          <path d="M8 7h8M8 11h6" />
        </svg>
      );
    case "collection":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "fast":
      return (
        <svg {...common}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case "secure":
      return (
        <svg {...common}>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 018 0v4" />
        </svg>
      );
    default:
      return null;
  }
}

const features = [
  {
    icon: "scan",
    title: "AI Coin Identification",
    desc: "Advanced computer vision recognizes coins from around the world in seconds — just point your camera and tap.",
  },
  {
    icon: "value",
    title: "Instant Value Estimates",
    desc: "Get market-informed valuations pulled from auction and dealer data so you know what your finds are worth.",
  },
  {
    icon: "history",
    title: "Coin History & Details",
    desc: "Mint year, composition, provenance, and cultural context for every identification — learn as you collect.",
  },
  {
    icon: "collection",
    title: "Collection Manager",
    desc: "Organize, sort, and track your entire collection from your pocket with a clean vault-inspired interface.",
  },
  {
    icon: "fast",
    title: "Fast & Accurate",
    desc: "Results in under two seconds with high identification accuracy trained on millions of verified samples.",
  },
  {
    icon: "secure",
    title: "Private & Secure",
    desc: "Your collection stays yours. Encrypted sync and a privacy-first approach — we never sell your data.",
  },
];

const performancePoints = [
  "Camera scan in one tap",
  "AI match against a global coin database",
  "Confidence score with every result",
  "Save finds straight to your collection",
];

const stats = [
  { value: "<2s", label: "Avg scan time" },
  { value: "180+", label: "Countries covered" },
  { value: "98%", label: "ID accuracy*" },
  { value: "4M+", label: "Training samples" },
];

const testimonials = [
  {
    quote:
      "Coin Detective flagged a rare penny in my change that I would have spent. Fast, accurate, and easy to use.",
    name: "Marcus T.",
    role: "Collector",
    initial: "M",
  },
  {
    quote:
      "I inherited a box of coins and catalogued everything in an afternoon. The history details are genuinely useful.",
    name: "Elena R.",
    role: "Casual Collector",
    initial: "E",
  },
  {
    quote:
      "I use it as a first-pass tool before deeper research. Clean UI and reliable market estimates.",
    name: "David K.",
    role: "Dealer",
    initial: "D",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "Perfect for trying Coin Detective and casual collecting.",
    cta: "Download Now",
    highlight: false,
    features: [
      "3 scans per day",
      "Basic coin identification",
      "Basic info",
      "Ads shown",
    ],
  },
  {
    name: "Basic",
    price: "$4.99",
    period: "/ month",
    desc: "More scans and a cleaner experience for regular collectors.",
    cta: "Download Now",
    highlight: false,
    features: [
      "20 scans per day",
      "Rarity rating",
      "No ads",
      "Email support",
    ],
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/ month",
    desc: "Full access for serious collectors who want every detail.",
    cta: "Download Now",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Unlimited scans",
      "Full history",
      "Market value",
      "Export reports",
    ],
  },
];

const faqs = [
  {
    q: "How do I scan a coin?",
    a: "Tap the gold camera button on the bottom bar, center your coin in the ring, then capture or choose a photo from your gallery.",
  },
  {
    q: "Where are my past scans?",
    a: "Open the History tab or Profile → Scan History to browse, filter by rare/common, and view saved coins.",
  },
  {
    q: "What do rarity and value mean?",
    a: "Rarity and market values are AI estimates for learning only—not professional appraisals. Condition and markets can change real value.",
  },
  {
    q: "How do daily scan limits work?",
    a: "Free includes 3 scans per day with ads. Basic includes 20 scans per day with no ads. Premium unlocks unlimited scans plus full history, market value, and export reports. Upgrade from Profile in the app.",
  },
  {
    q: "How do I update my account?",
    a: "Profile → Edit Profile to change your name or password. Email is shown for reference and cannot be changed in the app.",
  },
];

const screenshotPrimary = [
  { label: "Home", src: shotHome, alt: "Coin Detective home screen" },
  { label: "Camera", src: shotCamera, alt: "Coin Detective AI camera scanner" },
  { label: "Alerts", src: shotAlerts, alt: "Coin Detective alerts inbox" },
];

const screenshotSecondary = [
  { label: "History", src: shotHistory, alt: "Coin Detective collection history" },
  { label: "Result", src: shotResult, alt: "Coin Detective scan result" },
  { label: "Profile", src: shotProfile, alt: "Coin Detective profile" },
];

const trustChips = ["Free to start", "3 free scans/day", "Upgrade in-app"];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      {/* Header — fixed, stays in place while scrolling */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(212,175,55,0.06)]">
        <div className="mx-auto max-w-7xl flex h-[72px] items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <Logo size={42} />
            <span className="font-display text-xl sm:text-2xl font-semibold text-gradient-gold tracking-tight leading-none">
              Coin Detective
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden md:block">
              <DownloadButton />
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-border/80 text-foreground hover:border-gold/40 hover:text-gold hover:bg-gold/5 transition"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-muted-foreground hover:bg-gold/10 hover:text-gold transition"
                >
                  {l.label}
                </a>
              ))}
              <div className="px-1 pt-2 pb-2">
                <DownloadButton className="w-full" size="lg" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Offset for fixed header height */}
      <div className="h-[72px]" aria-hidden />

      {/* Hero — WebGuard: min-height calc(100vh - header), p-4, centered */}
      <section className="relative hero-section section-gold-shade overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-vault pointer-events-none" />
        <div className="hero-container relative z-10 mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-3 gap-8 place-items-center pt-6 md:pt-0 w-full">
            <div className="lg:col-span-2 min-w-0 w-full max-w-2xl justify-self-center lg:justify-self-start text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-gold mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Trusted by collectors worldwide
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl text-foreground">
                Identify, Value, and Collect{" "}
                <span className="text-gradient-gold">Coins with AI</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Protect your collecting time with instant AI identification, market value
                estimates, and rich historical details. Scan any coin from your Android phone.
              </p>
              <div className="mt-8 flex flex-col items-center lg:items-start gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <DownloadButton size="lg" />
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-muted-foreground flex-wrap">
                {trustChips.map((chip) => (
                  <span key={chip} className="flex items-center gap-1.5">
                    <svg
                      className="text-gold shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex items-end justify-center lg:justify-end place-self-center lg:place-self-end min-w-0 w-full pr-0 sm:pr-1 lg:pr-2 pb-6 lg:pb-8">
              <div className="absolute inset-0 -inset-x-10 -inset-y-10 bg-gold/10 rounded-full blur-3xl -z-10 pointer-events-none" />
              {/* Mobile: centered single phone */}
              <div className="sm:hidden flex justify-center w-full">
                <img
                  src={shotHome}
                  alt="Coin Detective app"
                  draggable={false}
                  className="h-[min(62vh,520px)] w-auto rounded-[2rem] border border-border/40 shadow-2xl shadow-black/50 bg-black object-contain select-none pointer-events-none"
                />
              </div>
              {/* Desktop: half scan peek / half covered */}
              <div className="hero-phone-stack hidden sm:block mr-0">
                <img
                  src={shotCamera}
                  alt="Coin Detective camera scanner"
                  draggable={false}
                  className="hero-phone-back rounded-[2rem] shadow-2xl shadow-black/40 border border-border/20 bg-black object-contain select-none pointer-events-none opacity-95"
                />
                <img
                  src={shotHome}
                  alt="Coin Detective home"
                  draggable={false}
                  className="hero-phone-front rounded-[2rem] md:rounded-[2.25rem] shadow-2xl shadow-black/50 border border-border/40 bg-black object-contain select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <Section
        id="features"
        eyebrow="Core Features"
        title="Why Choose Coin Detective"
        subtitle="Industry-ready tools that help you identify, value, and manage your collection with confidence."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 sm:p-7 rounded-2xl bg-surface/90 border border-gold/15 hover:border-gold/40 hover:shadow-gold/20 transition"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold border border-gold/20">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="text-lg font-semibold text-gold mb-2">{f.title}</h3>
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Screenshots — required */}
      <Section
        id="screens"
        shade="alt"
        eyebrow="App Screenshots"
        title="See Coin Detective in Action"
        subtitle="Home, Camera, Alerts, History, Result, and Profile — same app layout with sample scan data."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 justify-items-center">
          {screenshotPrimary.map((m) => (
            <PhoneShot key={m.label} label={m.label} src={m.src} alt={m.alt} />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 justify-items-center">
          {screenshotSecondary.map((m) => (
            <PhoneShot key={m.label} label={m.label} src={m.src} alt={m.alt} />
          ))}
        </div>
      </Section>

      {/* Performance */}
      <section className="section-gold-shade section-gold-shade-alt border-y border-border/80 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold mb-4">
              Performance
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-gold font-semibold tracking-tight">
              Built for Speed and Clarity
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Coin Detective is engineered for collectors who want answers fast — without
              sacrificing detail or confidence.
            </p>
            <ul className="mt-8 space-y-3">
              {performancePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-foreground/90">
                  <svg
                    className="text-gold mt-0.5 shrink-0"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-background p-6 sm:p-8 text-center"
              >
                <div className="font-display text-3xl sm:text-4xl text-gradient-gold font-semibold">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 text-center text-xs text-muted-foreground">
          *Accuracy varies by coin condition and rarity. Estimates are informational only.
        </p>
      </section>

      {/* Testimonials */}
      <Section
        shade="alt"
        eyebrow="What Collectors Say"
        title="What Our Users Say"
        subtitle="Real feedback from people who identify and catalog coins every day."
      >
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 sm:p-8 rounded-2xl bg-surface border border-border">
              <p className="text-[15px] sm:text-base text-foreground leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold text-gold-foreground flex items-center justify-center font-semibold text-sm">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing — matches mobile Free / Basic / Premium */}
      <Section
        id="pricing"
        eyebrow="Get Started"
        title="Simple Pricing for Every Collector"
        subtitle="Start free with 3 scans per day. Upgrade in the app to Basic or Premium for higher limits and more features."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-7 sm:p-8 rounded-2xl border ${
                p.highlight
                  ? "border-gold shadow-gold bg-surface-2"
                  : "border-border bg-surface"
              }`}
            >
              {(p.badge || p.highlight) && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-gold text-gold-foreground text-[10px] uppercase tracking-widest font-bold">
                  {p.badge ?? "Most popular"}
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex items-baseline gap-1 flex-wrap">
                <span className="font-display text-4xl sm:text-5xl text-gradient-gold font-semibold">
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className={`block text-center mt-6 h-12 leading-12 rounded-xl font-semibold text-sm transition ${
                  p.highlight
                    ? "bg-gradient-gold text-gold-foreground shadow-gold hover:brightness-110"
                    : "border border-gold/50 text-gold hover:bg-gold/10"
                }`}
              >
                {p.cta}
              </a>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <svg
                      className="text-gold mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Download for device — WebGuard style, Android only */}
      <Section
        id="download"
        shade="alt"
        eyebrow="Get Started"
        title="Download for Android"
        subtitle="Available on Google Play. Install in seconds and start scanning."
      >
        <div className="max-w-md mx-auto rounded-2xl border border-border bg-surface p-8 text-center">
          <div className="font-semibold text-lg text-foreground">Android</div>
          <p className="mt-2 text-sm text-muted-foreground">Google Play · Free to download</p>
          <div className="mt-6 flex justify-center">
            <PlayBadge />
          </div>
          <div className="mt-4">
            <DownloadButton className="w-full" />
          </div>
        </div>
      </Section>

      {/* Support / FAQ */}
      <Section
        id="support"
        shade="alt"
        eyebrow="Support"
        title="Questions, Answered"
        subtitle="Quick answers for scanning, history, alerts, plans, and your account."
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={f.q} className="rounded-2xl bg-surface border border-border overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left hover:bg-surface-2 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4 text-[15px] sm:text-base">
                    {f.q}
                  </span>
                  <span
                    className={`text-gold text-2xl shrink-0 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div
                      className={`px-5 sm:px-6 text-sm text-muted-foreground leading-relaxed transition-opacity duration-300 ease-out ${
                        isOpen ? "pb-5 opacity-100" : "pb-0 opacity-0"
                      }`}
                    >
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>


      {/* Footer — centered on mobile, multi-column on lg */}
      <footer className="section-gold-shade border-t border-border/80 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left justify-items-center sm:justify-items-start">
          <div className="lg:col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2.5 justify-center sm:justify-start">
              <Logo size={42} />
              <span className="font-display text-xl sm:text-2xl font-semibold text-gradient-gold tracking-tight leading-none">
                Coin Detective
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
              Secure, fast, and private coin identification for everyone. Snap a photo and
              build your collection with AI.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-[15px] font-semibold text-foreground mb-4">Quick Links</div>
            <ul className="space-y-2.5 text-[15px] font-medium text-muted-foreground">
              <li>
                <a href="#" className="hover:text-gold">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gold">
                  Features
                </a>
              </li>
              <li>
                <a href="#screens" className="hover:text-gold">
                  Screenshots
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gold">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-[15px] font-semibold text-foreground mb-4">Support</div>
            <ul className="space-y-2.5 text-[15px] font-medium text-muted-foreground">
              <li>
                <a href="#support" className="hover:text-gold">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:support@coindetective.app" className="hover:text-gold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-[15px] font-semibold text-foreground mb-4">Legal</div>
            <ul className="space-y-2.5 text-[15px] font-medium text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-services" className="hover:text-gold">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coin Detective. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
