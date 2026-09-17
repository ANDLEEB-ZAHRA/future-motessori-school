import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { site, nav } from "@/data/site";
import { images } from "@/data/images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  to: string;
  children?: readonly { label: string; to: string; description: string }[];
};

const items = nav as readonly NavItem[];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    let tick = false;
    const checkScroll = () => {
      const isScrolled = window.scrollY > 12;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top Notification & Contact Bar */}
      <div className="hidden bg-ink text-ink-foreground lg:block border-b border-white/10">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-2 rounded-full bg-gold animate-pulse" />
            <span className="font-medium text-white/90">{site.announcement}</span>
          </div>

          <div className="flex items-center gap-6 text-ink-muted">
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <MapPin className="size-3.5 text-gold" />
              <span>{site.address.campus}, {site.address.city}</span>
            </span>
            <a
              className="flex items-center gap-1.5 hover:text-gold transition-colors font-medium"
              href={`tel:${site.phones[0].replace(/[^0-9]/g, "")}`}
            >
              <Phone className="size-3.5 text-gold" />
              <span>{site.phones[0]}</span>
            </a>
            <a
              className="hover:text-gold transition-colors"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border/80 bg-background/95 shadow-soft backdrop-blur-md py-2.5"
            : "border-transparent bg-background/90 backdrop-blur-xs py-3.5",
        )}
      >
        <div className="container-x flex items-center justify-between gap-4">
          {/* Logo & School Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform hover:scale-[1.01]"
            onClick={() => setOpen(false)}
          >
            <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-gold/60 bg-cream p-0.5 shadow-xs transition-transform group-hover:rotate-3">
              <img
                src={images.logo.src}
                alt={images.logo.alt}
                width={48}
                height={48}
                className="h-full w-full object-contain rounded-full"
              />
            </div>
            <div className="leading-tight">
              <span className="block font-display text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {site.name}
              </span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {site.motto} • {site.address.city}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
            {items.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className="nav-link inline-flex items-center gap-1 text-sm font-medium text-foreground/90 hover:text-primary transition-colors py-1"
                >
                  <span>{item.label}</span>
                  {item.children ? (
                    <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                  ) : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-1/2 top-full z-50 w-76 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="surface-card overflow-hidden rounded-2xl p-2.5 shadow-lift border border-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-accent group/child"
                        >
                          <span className="block text-sm font-semibold text-foreground group-hover/child:text-primary transition-colors">
                            {child.label}
                          </span>
                          <span className="block text-xs text-muted-foreground mt-0.5 leading-normal">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex rounded-full shadow-crimson px-5 font-semibold text-xs transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link to="/admissions" className="inline-flex items-center gap-1.5">
                <span>Apply Now</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="lg:hidden rounded-full border-border bg-card"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-ink/60 backdrop-blur-xs transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-background p-6 shadow-lift transition-transform duration-300 flex flex-col justify-between",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div>
            {/* Drawer Header */}
            <div className="mb-6 flex items-center justify-between border-b border-border/80 pb-4">
              <div className="flex items-center gap-2.5">
                <img
                  src={images.logo.src}
                  alt={images.logo.alt}
                  width={36}
                  height={36}
                  className="size-9 rounded-full object-contain bg-cream p-0.5 border border-gold/40"
                />
                <span className="font-display text-base font-bold">{site.shortName} Gujrat</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </Button>
            </div>

            {/* Navigation List */}
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.label} className="border-b border-border/50 py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block flex-1 py-2 font-semibold text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <button
                        type="button"
                        aria-label={`Show ${item.label} links`}
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        className="p-2 text-muted-foreground hover:text-foreground"
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-200",
                            expanded === item.label && "rotate-180",
                          )}
                        />
                      </button>
                    ) : null}
                  </div>

                  {item.children && expanded === item.label ? (
                    <ul className="mb-2 ml-3 space-y-1 border-l-2 border-primary/30 pl-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {/* Drawer Footer Actions */}
          <div className="mt-8 pt-6 border-t border-border/80 space-y-3">
            <Button asChild className="w-full rounded-full shadow-crimson font-semibold">
              <Link to="/admissions" onClick={() => setOpen(false)}>
                Apply for Admission
              </Link>
            </Button>
            
            <a
              href={`tel:${site.phones[0].replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-full border border-input py-2.5 text-xs font-semibold text-foreground hover:bg-accent transition-colors"
            >
              <Phone className="size-3.5 text-primary" /> Call {site.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

