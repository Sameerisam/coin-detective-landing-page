import type { ReactNode } from "react";

/**
 * Android phone frame — Pixel-style.
 * Viewport: 360 × 800 (Material spec mobile)
 */
export function PhoneFrame({
  label,
  children,
  scale = 1,
}: {
  label: string;
  children: ReactNode;
  scale?: number;
}) {
  const width = 360 * scale;
  const height = 800 * scale;

  return (
    <div className="flex flex-col items-center gap-3" style={{ width }}>
      {label ? (
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-sans">
          {label}
        </div>
      ) : null}
      <div
        className="relative overflow-hidden border border-border bg-background shadow-2xl"
        style={{
          width,
          height,
          borderRadius: 36 * scale,
        }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: 360,
            height: 800,
            transform: `scale(${scale})`,
            borderRadius: 36,
          }}
        >
          {/* Android status bar */}
          <div className="absolute top-0 inset-x-0 h-6 z-50 flex items-center justify-between px-4 text-[11px] font-medium text-foreground/90">
            <span className="tracking-tight">9:41</span>
            <div className="flex items-center gap-1 text-foreground/90">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 22h20V2L2 22z" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 18a2 2 0 100 4 2 2 0 000-4zM2 8.5C5 5.5 8.5 4 12 4s7 1.5 10 4.5l-2 2C17.5 8 14.8 7 12 7s-5.5 1-8 3.5l-2-2zm4 4C7.5 11 9.7 10 12 10s4.5 1 6 2.5l-2 2C15 13.5 13.5 13 12 13s-3 .5-4 1.5l-2-2z" />
              </svg>
              <svg width="16" height="10" viewBox="0 0 24 14" fill="none">
                <rect x="0.5" y="0.5" width="20" height="13" rx="2" stroke="currentColor" />
                <rect x="2" y="2" width="16" height="10" rx="1" fill="currentColor" />
                <rect x="21" y="4.5" width="2" height="5" rx="0.5" fill="currentColor" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">{children}</div>
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[4px] w-[108px] rounded-full bg-foreground/70 z-50" />
        </div>
      </div>
    </div>
  );
}
