import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowRight, Check, Sparkles } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import type { SchoolImage } from "@/data/images";
import { cn } from "@/lib/utils";

// ─── PageHero ────────────────────────────────────────────────────────────────
// Two-column split layout: text on the left, full-opacity image carousel on the right.
// Images auto-rotate every 5 seconds with a smooth cross-fade transition.
// Pauses on hover. Supports manual dot navigation.
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  images,
  actions,
  badgeText,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: SchoolImage;
  images?: readonly SchoolImage[] | SchoolImage[];
  actions?: ReactNode;
  badgeText?: string;
}) {
  const slideImages = images && images.length > 0 ? images : image ? [image] : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slideImages.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideImages.length, isPaused]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-background via-card/60 to-cream/50 pt-10 pb-14 lg:pt-16 lg:pb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">

          {/* ── LEFT: Text Content ── */}
          <div className="lg:col-span-6 space-y-5">

            {/* Badge row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
                <Sparkles className="size-3" />
                <span>{eyebrow}</span>
              </div>
              {badgeText && (
                <span className="inline-flex items-center rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-semibold text-foreground/80">
                  {badgeText}
                </span>
              )}
            </div>

            {/* Main heading */}
            <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[2.9rem] lg:leading-[1.1]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
              {description}
            </p>

            {/* CTA buttons */}
            {actions && (
              <div className="flex flex-wrap gap-3 pt-2">{actions}</div>
            )}

            {/* Carousel dot navigation */}
            {slideImages.length > 1 && (
              <div className="flex items-center gap-2 pt-1">
                {slideImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`View image ${idx + 1}`}
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    )}
                  />
                ))}
                <span className="ml-2 text-xs font-mono text-muted-foreground/50">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(slideImages.length).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>

          {/* ── RIGHT: Image Carousel ── */}
          {slideImages.length > 0 && (
            <div className="lg:col-span-6 relative">
              {/* Image frame */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-card bg-card shadow-lift">
                {/* Stack images and crossfade */}
                <div className="relative h-72 sm:h-[22rem] lg:h-[26rem]">
                  {slideImages.map((img, idx) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      decoding="async"
                      fetchPriority={idx === 0 ? "high" : "low"}
                      style={{ aspectRatio: img.aspectRatio }}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out",
                        idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      )}
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  ))}
                  {/* Subtle bottom gradient for caption legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent z-20 pointer-events-none" />
                  {/* Caption */}
                  {slideImages[currentIndex] && (
                    <div className="absolute bottom-3 left-4 right-4 z-30">
                      <p className="text-xs font-medium text-white/75 leading-snug line-clamp-2">
                        {slideImages[currentIndex].alt}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* Decorative offset element */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl bg-primary/10 border border-primary/15" />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

// ─── SectionHeading ───────────────────────────────────────────────────────────
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <div className={cn("inline-flex items-center gap-2 mb-3", align === "center" && "justify-center")}>
          <span className="badge-pill">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-balance font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-3.5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

// ─── TickList ─────────────────────────────────────────────────────────────────
export function TickList({
  items,
  columns = 2,
}: {
  items: readonly string[];
  columns?: 1 | 2 | 3;
}) {
  return (
    <ul
      className={cn(
        "grid gap-3.5",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/70 p-3 text-sm text-foreground shadow-xs transition-colors hover:border-primary/40 hover:bg-card"
        >
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="size-3.5 stroke-[2.5]" />
          </span>
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── CTABand ──────────────────────────────────────────────────────────────────
export function CTABand({
  title = "Admissions are open at Wania Campus",
  text = "Montessori, Primary and Middle classes. Scholarships available for deserving students.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x">
      <div className="surface-ink dot-grid relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center shadow-lift border border-white/10">
        {/* Glow accent */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-black mb-4">
            <Sparkles className="size-3.5" /> Enrolling Now
          </span>
          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            {text}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-crimson px-8 font-semibold">
              <Link to="/admissions" className="inline-flex items-center gap-2">
                <span>Start an Inquiry</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white px-7 font-semibold backdrop-blur-sm"
            >
              <a href={`tel:${site.phones[0].replace(/[^0-9]/g, "")}`}>
                Call {site.phones[0]}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stat ─────────────────────────────────────────────────────────────────────
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="surface-card p-6 text-center border border-border/80 shadow-soft transition-all duration-300 hover:shadow-md">
      <p className="font-display text-3xl sm:text-4xl font-bold text-primary">{value}</p>
      <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

// ─── Prose ────────────────────────────────────────────────────────────────────
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold">
      {children}
    </div>
  );
}

// ─── BackToTop ────────────────────────────────────────────────────────────────
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let tick = false;
    const checkScroll = () => {
      const isPast = window.scrollY > 500;
      setShow((prev) => (prev !== isPast ? isPast : prev));
      tick = false;
    };

    const onScroll = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(checkScroll);
      }
    };

    checkScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-crimson transition-all duration-300 hover:scale-110",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5 stroke-[2.5]" />
    </button>
  );
}
