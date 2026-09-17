import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Facebook, Clock, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/forms";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { images } from "@/data/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us — ${site.name}, Gujrat` },
      {
        name: "description",
        content: `Contact The Future Montessori School at Wania Campus, Sabowal Road, Gujrat. Phone: ${site.phones[0]}. Email: ${site.email}`,
      },
      { property: "og:title", content: `Contact — ${site.name}` },
      {
        property: "og:description",
        content: `Reach The Future Montessori School by phone, email or in person at Wania Campus, Sabowal Road, Gujrat.`,
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactHeroSlides = [
  images.campusOutdoorGathering,
  images.campusSubjectsPoster,
  images.studentsParkOuting,
];

function ContactPage() {
  const phone = site.phones[0] ?? "0315-6220941";

  const contactDetails = [
    {
      icon: Phone,
      label: "Direct Phone & WhatsApp",
      items: site.phones,
      render: (v: string) => (
        <a key={v} href={`tel:${v.replace(/[^0-9]/g, "")}`} className="block hover:text-primary transition-colors">
          {v}
        </a>
      ),
    },
    {
      icon: Mail,
      label: "Official Email",
      items: [site.email],
      render: (v: string) => (
        <a key={v} href={`mailto:${v}`} className="block hover:text-primary transition-colors break-all">
          {v}
        </a>
      ),
    },
    {
      icon: MapPin,
      label: "Campus Address",
      items: [site.address.full],
      render: (v: string) => (
        <a key={v} href={site.mapsUrl} target="_blank" rel="noreferrer" className="block hover:text-primary transition-colors">
          {v}
        </a>
      ),
    },
    {
      icon: Facebook,
      label: "Social Updates",
      items: ["facebook.com/thefuturemontessorischool"],
      render: (_v: string) => (
        <a key="fb" href={site.facebook} target="_blank" rel="noreferrer" className="block hover:text-primary transition-colors">
          The Future Montessori School Official
        </a>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact & Campus Desk"
        badgeText="Wania Campus, Gujrat"
        title="We'd love to welcome you and your family"
        description="Reach the school leadership and admissions team by phone, WhatsApp, email, or visit us in person at Wania Campus, Sabowal Road, Gujrat."
        images={contactHeroSlides}
        actions={
          <>
            <Button asChild size="lg" className="rounded-full shadow-crimson px-8 font-semibold">
              <a href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <MessageCircle className="size-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-accent hover:border-primary/40 px-7 font-semibold"
            >
              <Link to="/admissions">Admissions Inquiry</Link>
            </Button>
          </>
        }
      />

      <section className="section-y container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Get in touch"
              title="Reach our campus team"
              description="All contact details are verified and monitored regularly during active school hours."
            />
            <div className="mt-8 space-y-4">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-5 rounded-3xl bg-card border border-border">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <div className="mt-1 space-y-0.5 text-sm font-semibold text-foreground">
                      {c.items.map((v) => c.render(v))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map card */}
            <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-secondary/40">
              <div className="flex items-center gap-3 px-6 py-4">
                <MapPin className="size-4 text-primary" />
                <span className="text-sm font-semibold">{site.address.campus}, {site.address.street}, {site.address.city}</span>
              </div>
              <div className="border-t border-border px-6 py-4 bg-card/60">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Quick links to admission */}
      <section className="surface-cream py-16 sm:py-20">
        <div className="container-x text-center">
          <span className="badge-pill mx-auto">Admissions Pathway</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-foreground">
            Looking for admissions for the current term?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
            Admissions are currently open for Montessori, Primary, and Middle classes. Send an inquiry or call our campus directly.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-crimson px-8 font-semibold">
              <Link to="/admissions" className="inline-flex items-center gap-2">
                <span>Start an inquiry</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 font-semibold">
              <a href={`tel:${phone.replace(/[^0-9]/g, "")}`}>
                Call {phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
