import type { ReactNode } from "react";
import vaultBg from "@/assets/vault-bg.jpg";
import logo from "@/assets/logo.png";

export function VaultBackground({ opacity = 0.35 }: { opacity?: number }) {
  return (
    <>
      <img
        src={vaultBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      />
      <div className="absolute inset-0 bg-gradient-vault" />
    </>
  );
}

export function Logo({ size = 56 }: { size?: number }) {
  return (
    <img
      src={logo}
      alt="Coin Detective"
      width={size}
      height={size}
      className="drop-shadow-[0_4px_18px_rgba(212,175,55,0.5)]"
    />
  );
}

export function GoldButton({
  children,
  className = "",
  variant = "solid",
}: {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "ghost";
}) {
  if (variant === "ghost") {
    return (
      <button
        className={`w-full h-12 rounded-xl border border-gold/60 text-gold font-medium text-sm tracking-wide hover:bg-gold/10 transition ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`w-full h-12 rounded-xl bg-gradient-gold text-gold-foreground font-semibold text-sm tracking-wide shadow-gold hover:brightness-110 transition ${className}`}
    >
      {children}
    </button>
  );
}

export function Input({ placeholder, type = "text" }: { placeholder: string; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-12 rounded-xl bg-input border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition"
    />
  );
}

export function RarityBadge({ rarity }: { rarity: "RARE" | "COMMON" }) {
  if (rarity === "RARE") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rare/15 border border-rare/40 text-rare text-[10px] font-bold tracking-wider">
        RARE 🔥
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-common/15 border border-common/30 text-muted-foreground text-[10px] font-bold tracking-wider">
      COMMON
    </span>
  );
}

export function BottomNav({ active = "home" }: { active?: "home" | "history" | "profile" }) {
  const Item = ({ id, label, icon }: { id: string; label: string; icon: ReactNode }) => {
    const isActive = active === id;
    return (
      <div className="flex flex-col items-center gap-1 flex-1">
        <div className={isActive ? "text-gold" : "text-muted-foreground"}>{icon}</div>
        <span className={`text-[10px] ${isActive ? "text-gold" : "text-muted-foreground"}`}>{label}</span>
      </div>
    );
  };
  return (
    <div className="absolute bottom-0 inset-x-0 h-20 bg-surface/95 backdrop-blur-xl border-t border-border flex items-center px-4 pb-3 z-40">
      <Item id="home" label="Home" icon={<HomeIcon />} />
      <Item id="" label="" icon={<span className="w-12 h-12" />} />
      <Item id="history" label="History" icon={<HistoryIcon />} />
      <Item id="profile" label="Profile" icon={<ProfileIcon />} />
      {/* center scan button */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-6">
        <button className="w-16 h-16 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center border-4 border-background">
          <CameraIcon className="text-gold-foreground" />
        </button>
      </div>
    </div>
  );
}

export function HomeIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2v-9z"/></svg>;
}
export function HistoryIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
}
export function ProfileIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>;
}
export function CameraIcon({ className = "" }: { className?: string }) {
  return <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h3l2-3h8l2 3h3v13H3V7z"/><circle cx="12" cy="13" r="4"/></svg>;
}
export function BellIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 004 0"/></svg>;
}
export function FlashIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
}
export function GalleryIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>;
}
export function LockIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>;
}
export function CrownIcon({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M2 8l4 4 6-8 6 8 4-4-2 12H4L2 8z"/></svg>;
}
