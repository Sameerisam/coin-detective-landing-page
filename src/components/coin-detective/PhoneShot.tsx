/**
 * Static phone screenshot mockup (WebGuard-style).
 * Uses flat PNG images — no live UI, no scrollbars.
 */
export function PhoneShot({
  src,
  alt,
  label = "",
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {label ? (
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-sans">
          {label}
        </div>
      ) : null}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] h-auto rounded-[2rem] md:rounded-[2.25rem] border border-border/40 shadow-2xl shadow-black/50 object-contain object-top select-none pointer-events-none"
      />
    </div>
  );
}
