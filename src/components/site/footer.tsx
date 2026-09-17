import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { site, footerLinks } from "@/data/site";
import { images } from "@/data/images";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-ink mt-20 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full border-2 border-gold/60 bg-cream p-1 shadow-xs">
              <img
                src={images.logo.src}
                alt={images.logo.alt}
                width={56}
                height={56}
                className="h-full w-full rounded-full object-contain"
              />
            </div>
            <div>
              <span className="block font-display text-lg font-bold text-white">{site.name}</span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">
                {site.motto}
              </span>
            </div>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-ink-muted leading-relaxed">
            Nurturing young minds through {site.values.join(" • ")}. Premier Montessori, Primary and Middle school at {site.address.campus}, {site.address.city}, Pakistan.
          </p>
          <div className="pt-2">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-xs font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-black shadow-xs"
            >
              <Facebook className="size-3.5" />
              <span>Official Facebook Page</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 sm:col-span-1">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Quick links</h2>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-ink-muted">
            {footerLinks.quick.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-white hover:underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Learning Programs Column */}
        <div className="lg:col-span-2 sm:col-span-1">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Academic Levels</h2>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-ink-muted">
            {footerLinks.programs.map((l) => (
              <li key={`${l.label}-${l.to}`}>
                <Link to={l.to} className="transition-colors hover:text-white hover:underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Location Column */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Visit & Contact</h2>
          <ul className="space-y-3 text-xs sm:text-sm text-ink-muted">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white transition-colors"
              >
                {site.address.full}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={`tel:${p.replace(/[^0-9]/g, "")}`} className="hover:text-white transition-colors font-medium">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
          </ul>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] text-ink-muted">
            <span className="font-bold text-white">Admissions Open: </span>
            <span>Montessori to Middle classes. Scholarship tracks available.</span>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved. Gujrat, Pakistan.
          </p>
          <div className="flex flex-wrap gap-6 text-xs">
            <Link to="/admissions" className="hover:text-white transition-colors">
              Admissions
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About TFMS
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

