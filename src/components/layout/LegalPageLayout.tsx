import { Link } from "react-router-dom";
import { Logo } from "@/components/coin-detective/primitives";
import type { LegalSection } from "@/content/privacyPolicy";

export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
  notice,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  notice?: { label: string; text: string };
}) {
  return (
    <main className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl flex h-[72px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <Logo size={42} />
            <span className="font-display text-xl sm:text-2xl font-semibold text-gradient-gold tracking-tight leading-none">
              Coin Detective
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 text-[15px] font-medium">
            <Link to="/privacy-policy" className="hidden sm:inline text-muted-foreground hover:text-gold transition-colors px-3 py-2 rounded-lg hover:bg-gold/10">
              Privacy Policy
            </Link>
            <Link to="/terms-of-services" className="hidden sm:inline text-muted-foreground hover:text-gold transition-colors px-3 py-2 rounded-lg hover:bg-gold/10">
              Terms of Service
            </Link>
            <Link
              to="/"
              className="rounded-xl border border-border/80 px-4 py-2 text-muted-foreground hover:border-gold/40 hover:text-gold hover:bg-gold/5 transition"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      <section className="section-gold-shade">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Legal</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gradient-gold tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          <div className="mt-6 h-px w-16 bg-gold/60" />
          <p className="mt-8 text-[15px] sm:text-base text-muted-foreground leading-relaxed">{intro}</p>

          {notice ? (
            <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2">{notice.label}</p>
              <p className="text-[15px] text-foreground leading-relaxed font-medium">{notice.text}</p>
            </div>
          ) : null}

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={`${section.id}-p-${i}`} className="text-[15px] text-muted-foreground leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="mt-3 space-y-2.5 list-disc pl-5 text-[15px] text-muted-foreground leading-relaxed">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
                {section.numbered?.length ? (
                  <ol className="mt-3 space-y-2.5 list-decimal pl-5 text-[15px] text-muted-foreground leading-relaxed">
                    {section.numbered.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ol>
                ) : null}
                {section.paragraphsAfter?.map((p, i) => (
                  <p key={`${section.id}-pa-${i}`} className="text-[15px] text-muted-foreground leading-relaxed mt-3">
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/80 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo size={32} />
            <span className="font-display text-lg font-semibold text-gradient-gold">Coin Detective</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[15px] font-medium text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms-of-services" className="hover:text-gold">
              Terms of Service
            </Link>
            <a href="mailto:support@coindetective.app" className="hover:text-gold">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coin Detective. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
