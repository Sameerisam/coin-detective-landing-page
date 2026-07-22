import { VaultBackground, Logo, GoldButton, Input, RarityBadge, BottomNav, CameraIcon, BellIcon, FlashIcon, GalleryIcon, LockIcon, CrownIcon } from "./primitives";
import coin1 from "@/assets/coin-1.jpg";
import coin2 from "@/assets/coin-2.jpg";
import coin3 from "@/assets/coin-3.jpg";

/* ---------- 1. SPLASH ---------- */
export function SplashScreen() {
  return (
    <div className="relative w-full h-full">
      <VaultBackground opacity={0.45} />
      <div className="relative h-full flex flex-col items-center justify-center px-8">
        <div className="rounded-full p-2 animate-pulse-glow">
          <Logo size={130} />
        </div>
        <h1 className="font-display text-5xl text-gradient-gold mt-8 font-semibold">Coin Detective</h1>
        <p className="text-muted-foreground text-sm tracking-[0.3em] mt-3 uppercase">Identify · Value · Collect</p>
        <div className="absolute bottom-24 inset-x-12">
          <div className="h-1 rounded-full bg-surface overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-gold rounded-full" />
          </div>
          <p className="text-center text-[11px] text-muted-foreground mt-3">Loading vault…</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- 2. DISCLAIMER ---------- */
export function DisclaimerScreen() {
  return (
    <div className="relative w-full h-full">
      <VaultBackground opacity={0.25} />
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="w-full bg-surface/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl">
          <div className="flex justify-center mb-4"><Logo size={56} /></div>
          <h2 className="font-display text-3xl text-foreground text-center font-semibold">Before You Begin</h2>
          <div className="w-12 h-px bg-gold mx-auto my-4" />
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            Coin Detective provides estimated coin values for informational purposes only. All valuations are AI-generated estimates and do not constitute professional numismatic appraisals.
          </p>
          <p className="text-xs text-muted-foreground/80 leading-relaxed text-center mt-3">
            Values may vary based on coin condition, market fluctuations, and other factors. By continuing, you agree to our Terms of Use.
          </p>
          <div className="mt-6 space-y-3">
            <GoldButton>I Agree & Continue</GoldButton>
            <GoldButton variant="ghost">View Full Terms</GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 3. ONBOARDING ---------- */
export function OnboardingScreen() {
  return (
    <div className="relative w-full h-full bg-background">
      <VaultBackground opacity={0.18} />
      <div className="relative h-full flex flex-col px-8 pt-16 pb-10">
        <div className="flex justify-end">
          <button className="text-xs text-muted-foreground tracking-wider uppercase">Skip</button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-44 h-44 rounded-full bg-gradient-to-br from-gold/25 to-amber/10 border border-gold/30 flex items-center justify-center mb-10 animate-pulse-glow">
            <div className="w-28 h-28 rounded-full bg-gradient-gold flex items-center justify-center">
              <CameraIcon className="text-gold-foreground" />
            </div>
          </div>
          <h2 className="font-display text-4xl font-semibold text-foreground leading-tight">Scan Any<br/>Coin Instantly</h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-[260px] leading-relaxed">
            Point your camera at a coin and our AI identifies it in seconds.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-6 h-1.5 rounded-full bg-gold" />
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
        </div>
        <GoldButton>Next →</GoldButton>
      </div>
    </div>
  );
}

/* ---------- 4. SIGN UP ---------- */
export function SignUpScreen() {
  return (
    <div className="relative w-full h-full">
      <VaultBackground opacity={0.15} />
      <div className="relative h-full flex flex-col px-7 pt-16 pb-8 overflow-y-auto">
        <div className="flex justify-center mb-4"><Logo size={64} /></div>
        <h2 className="font-display text-3xl text-foreground text-center font-semibold">Create Account</h2>
        <p className="text-sm text-muted-foreground text-center mt-1">Begin your numismatic journey</p>

        <div className="space-y-3 mt-8">
          <Input placeholder="Full Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
        </div>
        <div className="mt-5"><GoldButton>Sign Up</GoldButton></div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Already have an account? <span className="text-gold font-medium">Log In</span>
        </p>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">or continue with</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="h-11 rounded-xl border border-border bg-surface text-sm text-foreground"> Apple</button>
          <button className="h-11 rounded-xl border border-border bg-surface text-sm text-foreground">G  Google</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- 5. LOG IN ---------- */
export function LogInScreen() {
  return (
    <div className="relative w-full h-full">
      <VaultBackground opacity={0.15} />
      <div className="relative h-full flex flex-col px-7 pt-16 pb-8">
        <div className="flex justify-center mb-4"><Logo size={64} /></div>
        <h2 className="font-display text-3xl text-foreground text-center font-semibold">Welcome Back</h2>
        <p className="text-sm text-muted-foreground text-center mt-1">Log in to your collection</p>

        <div className="space-y-3 mt-10">
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Password" type="password" />
        </div>
        <div className="text-right mt-2">
          <a className="text-xs text-gold">Forgot Password?</a>
        </div>
        <div className="mt-5"><GoldButton>Log In</GoldButton></div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Don't have an account? <span className="text-gold font-medium">Sign Up</span>
        </p>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="h-11 rounded-xl border border-border bg-surface text-sm"> Apple</button>
          <button className="h-11 rounded-xl border border-border bg-surface text-sm">G  Google</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- 6. HOME ---------- */
export function HomeScreen() {
  const recent = [
    { img: coin1, name: "Byzantine Solidus", flag: "🇬🇷", rarity: "RARE" as const, value: "$1,240" },
    { img: coin2, name: "Morgan Dollar", flag: "🇺🇸", rarity: "COMMON" as const, value: "$48" },
    { img: coin3, name: "Roman Aureus", flag: "🇮🇹", rarity: "RARE" as const, value: "$3,800" },
  ];
  return (
    <div className="relative w-full h-full bg-background">
      <div className="absolute inset-x-0 top-0 h-72 overflow-hidden">
        <VaultBackground opacity={0.35} />
      </div>
      <div className="relative h-full overflow-y-auto pt-14 pb-24">
        <div className="px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size={34} />
            <span className="font-display text-lg text-foreground">Coin Detective</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-surface/80 border border-border flex items-center justify-center text-foreground"><BellIcon /></button>
            <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center text-[11px] font-bold text-gold-foreground">JM</div>
          </div>
        </div>

        {/* Hero card */}
        <div className="mx-5 mt-5 rounded-2xl p-5 border border-gold/30 relative overflow-hidden" style={{background: "linear-gradient(135deg, oklch(0.22 0.02 70 / 0.95), oklch(0.16 0.01 60 / 0.95))"}}>
          <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gold/15 blur-2xl" />
          <p className="text-xs uppercase tracking-[0.25em] text-gold/80">AI Scanner</p>
          <h3 className="font-display text-3xl text-foreground mt-1 font-semibold">Scan a Coin</h3>
          <p className="text-xs text-muted-foreground mt-1">Free plan: 2 of 3 scans used today</p>
          <div className="mt-2 h-1.5 rounded-full bg-surface-2 overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-gold" />
          </div>
          <button className="relative mt-4 w-full h-12 rounded-xl bg-gradient-gold text-gold-foreground font-semibold text-sm flex items-center justify-center gap-2 shadow-gold">
            <CameraIcon className="text-gold-foreground" /> Scan Now
          </button>
        </div>

        {/* Recent scans */}
        <div className="mt-7">
          <div className="px-5 flex items-center justify-between">
            <h4 className="font-display text-xl text-foreground">Recent Scans</h4>
            <a className="text-xs text-gold">See all</a>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
            {recent.map((c, i) => (
              <div key={i} className="shrink-0 w-44 rounded-2xl bg-surface border border-border p-3">
                <div className="aspect-square rounded-xl overflow-hidden bg-black">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex items-center gap-1 mt-2 text-[11px] text-muted-foreground">
                  <span>{c.flag}</span><span>•</span><span>1789</span>
                </div>
                <p className="text-sm font-medium text-foreground mt-0.5 truncate">{c.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <RarityBadge rarity={c.rarity} />
                  <span className="text-sm text-gold font-semibold">{c.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Did you know */}
        <div className="mx-5 mt-5 rounded-2xl p-4 border border-amber/30" style={{background: "linear-gradient(135deg, oklch(0.7 0.16 65 / 0.12), oklch(0.78 0.14 80 / 0.05))"}}>
          <div className="flex items-center gap-2">
            <span className="text-base">💡</span>
            <p className="text-[10px] uppercase tracking-widest text-amber font-semibold">Did You Know?</p>
          </div>
          <p className="text-sm text-foreground/90 mt-2 leading-relaxed">
            The 1933 Double Eagle is one of the most valuable coins ever sold — fetching <span className="text-gold font-semibold">$18.9M</span> at auction in 2021.
          </p>
        </div>

        {/* ad banner */}
        <div className="mx-5 mt-5 h-12 rounded-lg border border-dashed border-border flex items-center justify-center text-[10px] uppercase tracking-widest text-muted-foreground">
          Sponsored · Upgrade to remove ads
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}

/* ---------- 7. SCANNER ---------- */
export function ScannerScreen() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* simulated camera view */}
      <div className="absolute inset-0" style={{background: "radial-gradient(circle at 50% 45%, oklch(0.3 0.02 70) 0%, oklch(0.1 0 0) 70%)"}} />

      {/* top bar */}
      <div className="absolute top-14 inset-x-0 z-20 flex items-center justify-between px-5">
        <button className="w-10 h-10 rounded-full bg-black/50 border border-border flex items-center justify-center text-foreground">←</button>
        <span className="text-foreground font-medium">Scan Coin</span>
        <div className="w-10" />
      </div>

      {/* reticle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-64 h-64 rounded-full border-2 border-gold/60 animate-ring-pulse" />
          <div className="absolute inset-4 rounded-full border border-gold/30" />
          {/* corners */}
          {[
            "-top-2 -left-2 border-t-2 border-l-2",
            "-top-2 -right-2 border-t-2 border-r-2",
            "-bottom-2 -left-2 border-b-2 border-l-2",
            "-bottom-2 -right-2 border-b-2 border-r-2",
          ].map((c, i) => (
            <span key={i} className={`absolute w-6 h-6 border-gold ${c}`} />
          ))}
        </div>
      </div>
      <p className="absolute top-1/2 mt-44 inset-x-0 text-center text-sm text-foreground/90 tracking-wide">
        Place coin inside the ring
      </p>

      {/* dark vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{boxShadow: "inset 0 0 120px 40px rgba(0,0,0,0.8)"}} />

      {/* bottom control panel */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-black/70 backdrop-blur-xl border-t border-border z-30">
        <div className="h-full flex items-center justify-between px-10 pb-6">
          <button className="w-12 h-12 rounded-xl bg-surface/80 border border-border flex items-center justify-center text-foreground"><GalleryIcon /></button>
          <button className="relative w-20 h-20 rounded-full border-4 border-gold flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-gradient-gold shadow-gold" />
          </button>
          <button className="w-12 h-12 rounded-xl bg-surface/80 border border-border flex items-center justify-center text-gold"><FlashIcon /></button>
        </div>
        <p className="absolute bottom-3 inset-x-0 text-center text-[10px] text-muted-foreground tracking-widest uppercase">
          Haptic on capture · Hold steady
        </p>
      </div>
    </div>
  );
}

/* ---------- 8. RESULT ---------- */
export function ResultScreen() {
  return (
    <div className="relative w-full h-full bg-background">
      <div className="absolute inset-x-0 top-0 h-96">
        <VaultBackground opacity={0.3} />
      </div>
      <div className="relative h-full overflow-y-auto pt-14 pb-8">
        <div className="px-5 flex items-center justify-between">
          <button className="w-9 h-9 rounded-full bg-surface/80 border border-border flex items-center justify-center text-foreground">←</button>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Identification</span>
          <button className="w-9 h-9 rounded-full bg-surface/80 border border-border flex items-center justify-center text-foreground">⋯</button>
        </div>

        {/* coin photo */}
        <div className="mt-4 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold/30 blur-3xl scale-90" />
            <img src={coin3} alt="" className="relative w-52 h-52 rounded-full object-cover border-4 border-gold/40 shadow-gold" loading="lazy" />
          </div>
        </div>

        <div className="text-center mt-5 px-5">
          <h2 className="font-display text-3xl text-gradient-gold font-semibold">Roman Aureus</h2>
          <p className="text-xs text-muted-foreground mt-1 tracking-wider">🇮🇹 ITALY · 64 AD · MINT MARK · ROMA</p>
          <div className="mt-3 flex justify-center"><RarityBadge rarity="RARE" /></div>
        </div>

        {/* value card */}
        <div className="mx-5 mt-5 rounded-2xl border border-gold/40 p-5 text-center" style={{background: "linear-gradient(135deg, oklch(0.78 0.14 80 / 0.12), oklch(0.16 0.01 60 / 0.6))"}}>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Estimated Market Value</p>
          <p className="font-display text-4xl text-gradient-gold font-bold mt-2">$2,400 – $3,800</p>
          <p className="text-[10px] text-muted-foreground mt-2 italic">Estimated value — not a professional appraisal</p>
        </div>

        {/* history */}
        <div className="mx-5 mt-4 rounded-2xl bg-surface border border-border p-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-widest text-gold font-semibold">Historical Background</p>
            <span className="text-xs text-muted-foreground">+</span>
          </div>
          <p className="text-sm text-foreground/90 mt-2 leading-relaxed">
            Struck during the reign of Emperor Nero, the aureus was the principal gold coin of the Roman Empire. Each weighed roughly 7.3 grams of nearly pure gold…
          </p>
        </div>

        {/* actions */}
        <div className="mx-5 mt-4 grid grid-cols-3 gap-2">
          <button className="h-16 rounded-xl bg-surface border border-border flex flex-col items-center justify-center gap-1 text-xs text-foreground">
            <span>⭐</span>Save
          </button>
          <button className="h-16 rounded-xl bg-surface border border-border flex flex-col items-center justify-center gap-1 text-xs text-foreground">
            <span>↗</span>Share
          </button>
          <button className="h-16 rounded-xl bg-surface border border-border flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground">
            <LockIcon /> Export
          </button>
        </div>

        {/* upgrade banner */}
        <div className="mx-5 mt-4 rounded-2xl p-4 flex items-center gap-3 border border-gold/40" style={{background: "linear-gradient(90deg, oklch(0.7 0.16 65 / 0.18), oklch(0.78 0.14 80 / 0.08))"}}>
          <CrownIcon size={28} />
          <div className="flex-1">
            <p className="text-xs font-semibold text-foreground">Unlock full market data & history</p>
            <p className="text-[10px] text-muted-foreground">Upgrade to Premium</p>
          </div>
          <button className="h-9 px-4 rounded-lg bg-gradient-gold text-gold-foreground text-xs font-bold">Upgrade</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- 9. HISTORY ---------- */
export function HistoryScreen() {
  const items = [
    { img: coin1, name: "Byzantine Solidus", country: "🇬🇷 Greece", date: "Today", rarity: "RARE" as const, value: "$1,240" },
    { img: coin2, name: "Morgan Dollar", country: "🇺🇸 USA", date: "Yesterday", rarity: "COMMON" as const, value: "$48" },
    { img: coin3, name: "Roman Aureus", country: "🇮🇹 Italy", date: "May 28", rarity: "RARE" as const, value: "$3,800" },
    { img: coin1, name: "Spanish Doubloon", country: "🇪🇸 Spain", date: "May 24", rarity: "RARE" as const, value: "$5,100" },
    { img: coin2, name: "British Penny", country: "🇬🇧 UK", date: "May 21", rarity: "COMMON" as const, value: "$12" },
  ];
  return (
    <div className="relative w-full h-full bg-background">
      <div className="relative h-full overflow-y-auto pt-14 pb-24">
        <div className="px-5 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold">Archive</p>
            <h2 className="font-display text-3xl font-semibold text-foreground">My Collection</h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold">37 SCANS</span>
        </div>

        {/* tabs */}
        <div className="mt-5 px-5 flex gap-2">
          {[
            { label: "All", active: true },
            { label: "Rare", active: false },
            { label: "Common", active: false },
            { label: "Saved", active: false },
          ].map((t) => (
            <button key={t.label} className={`px-4 h-9 rounded-full text-xs font-medium ${t.active ? "bg-gradient-gold text-gold-foreground" : "bg-surface border border-border text-muted-foreground"}`}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-4 px-5 space-y-2.5">
          {items.map((it, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
              <img src={it.img} alt="" className="w-14 h-14 rounded-xl object-cover bg-black" loading="lazy" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{it.name}</p>
                <p className="text-[11px] text-muted-foreground">{it.country} · {it.date}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <RarityBadge rarity={it.rarity} />
                <span className="text-sm text-gold font-semibold">{it.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-5 mt-5 h-12 rounded-lg border border-dashed border-border flex items-center justify-center text-[10px] uppercase tracking-widest text-muted-foreground">
          Sponsored · Upgrade to remove ads
        </div>
      </div>
      <BottomNav active="history" />
    </div>
  );
}

/* ---------- 10. PROFILE ---------- */
export function ProfileScreen() {
  const menu = [
    { label: "Edit Profile", icon: "✏️" },
    { label: "Scan History", icon: "🪙" },
    { label: "Notifications", icon: "🔔" },
    { label: "Help & Support", icon: "💬" },
    { label: "Legal Disclaimer", icon: "📜" },
  ];
  return (
    <div className="relative w-full h-full bg-background">
      <div className="absolute inset-x-0 top-0 h-56"><VaultBackground opacity={0.3} /></div>
      <div className="relative h-full overflow-y-auto pt-14 pb-24">
        <div className="px-5 flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Profile</span>
          <button className="text-xs text-gold">Settings</button>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center text-2xl font-bold text-gold-foreground border-4 border-background shadow-gold">JM</div>
          <h2 className="font-display text-2xl text-foreground mt-3 font-semibold">James Mercer</h2>
          <p className="text-xs text-muted-foreground">james.mercer@detective.app</p>
        </div>

        {/* stats */}
        <div className="mx-5 mt-5 grid grid-cols-3 gap-2">
          {[
            { v: "37", l: "Total Scans" },
            { v: "12", l: "Rare Finds" },
            { v: "$14k", l: "Collection" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-surface border border-border p-3 text-center">
              <p className="font-display text-2xl text-gold font-semibold">{s.v}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>

        {/* plan */}
        <div className="mx-5 mt-4 rounded-2xl border border-gold/40 p-4 flex items-center gap-3" style={{background: "linear-gradient(90deg, oklch(0.78 0.14 80 / 0.15), oklch(0.16 0.01 60 / 0.6))"}}>
          <CrownIcon size={28} />
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-widest text-gold/80">Current Plan</p>
            <p className="text-sm font-semibold text-foreground">Free · 3 scans/day</p>
          </div>
          <button className="h-9 px-4 rounded-lg bg-gradient-gold text-gold-foreground text-xs font-bold">Upgrade</button>
        </div>

        {/* menu */}
        <div className="mx-5 mt-4 rounded-2xl bg-surface border border-border overflow-hidden">
          {menu.map((m, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 h-12 ${i < menu.length - 1 ? "border-b border-border" : ""}`}>
              <span className="text-base">{m.icon}</span>
              <span className="flex-1 text-sm text-foreground">{m.label}</span>
              <span className="text-muted-foreground">›</span>
            </div>
          ))}
        </div>

        <button className="mx-5 mt-4 w-[calc(100%-2.5rem)] h-12 rounded-xl border border-danger/40 text-danger text-sm font-semibold bg-danger/5">
          Log Out
        </button>
      </div>
      <BottomNav active="profile" />
    </div>
  );
}

/* ---------- 11. PAYWALL ---------- */
export function PaywallScreen() {
  const plans = [
    { name: "Free", price: "$0", desc: "3 scans/day, basic info, ads shown", tag: "Current Plan", highlight: false, faint: true },
    { name: "Basic", price: "$4.99", desc: "20 scans/day, rarity rating, no ads, email support", tag: null, highlight: false, faint: false },
    { name: "Premium", price: "$9.99", desc: "Unlimited scans, full history, market value, export reports", tag: "Most Popular", highlight: true, faint: false },
  ];
  return (
    <div className="relative w-full h-full bg-background">
      <div className="absolute inset-x-0 top-0 h-64"><VaultBackground opacity={0.3} /></div>
      <div className="relative h-full overflow-y-auto pt-14 pb-8 px-5">
        <div className="flex items-center justify-between">
          <button className="w-9 h-9 rounded-full bg-surface/80 border border-border flex items-center justify-center">✕</button>
          <a className="text-xs text-gold">Restore</a>
        </div>

        <div className="text-center mt-4">
          <div className="inline-flex w-14 h-14 rounded-full bg-gradient-gold items-center justify-center mb-3 shadow-gold text-gold-foreground">
            <CrownIcon size={28} />
          </div>
          <h2 className="font-display text-3xl text-gradient-gold font-semibold">Unlock Coin Detective</h2>
          <p className="text-xs text-muted-foreground mt-2 max-w-[260px] mx-auto">
            Identify unlimited coins, access full market data, and export pro-grade reports.
          </p>
        </div>

        <div className="space-y-3 mt-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-4 border ${
                p.highlight
                  ? "border-gold shadow-gold"
                  : p.faint
                  ? "border-border opacity-70"
                  : "border-gold/40"
              }`}
              style={p.highlight ? { background: "linear-gradient(135deg, oklch(0.78 0.14 80 / 0.2), oklch(0.7 0.16 65 / 0.1))" } : { background: "var(--surface)" }}
            >
              {p.tag && (
                <span className={`absolute -top-2 right-4 text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full ${
                  p.highlight ? "bg-gradient-gold text-gold-foreground" : "bg-surface-2 text-muted-foreground border border-border"
                }`}>
                  {p.tag.toUpperCase()}
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <p className={`font-display text-xl font-semibold ${p.highlight ? "text-gradient-gold" : "text-foreground"}`}>{p.name}</p>
                <p className="text-sm text-foreground"><span className={`font-display text-2xl font-bold ${p.highlight ? "text-gold" : ""}`}>{p.price}</span><span className="text-[10px] text-muted-foreground">/mo</span></p>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6"><GoldButton>Continue with Premium</GoldButton></div>
        <p className="text-center text-[10px] text-muted-foreground mt-3">
          Cancel anytime. Prices in USD. Terms apply.
        </p>
      </div>
    </div>
  );
}
