import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Tag, ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { events, formatEventDate } from "@/data/events";
import { CTABand, PageHero, SectionHeading } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: `Events — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "School events at The Future Montessori School: edutainment trips, talent shows, martial arts ceremonies, parent-teacher meetings and celebrations.",
      },
      { property: "og:title", content: `Events — ${site.name}` },
      {
        property: "og:description",
        content: "School events and celebrations at TFMS Wania Campus, Gujrat.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const categoryColour: Record<string, string> = {
  Trip: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  Meeting: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800",
  Show: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
  Sports: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
  Celebration: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",
};

const eventHeroSlides = [
  images.giftPacksPrizes,
  images.martialArtsBeltCeremony,
  images.admissionPoster01,
  images.campusOutdoorGathering,
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="School Calendar & Events"
        badgeText="Celebrations & Milestones"
        title="Moments that matter: gatherings, ceremonies and celebrations"
        description="From edutainment trips to talent shows, prize distributions, and martial arts ceremonies — school life at The Future Montessori School is filled with moments that foster pride and joy."
        images={eventHeroSlides}
        actions={
          <>
            <Button asChild size="lg" className="rounded-full shadow-crimson px-7 font-semibold">
              <Link to="/gallery" className="inline-flex items-center gap-2">
                <span>View Event Photos</span>
                <ArrowRight className="size-4" />
              </Link>
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
        <SectionHeading
          eyebrow="Campus calendar"
          title="Highlights from school life & upcoming events"
          description="Verified events from school records and our active community gatherings."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.slug}
              className="surface-card surface-card-hover group overflow-hidden rounded-3xl border border-border flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden bg-secondary/30">
                  <img
                    src={event.image.src}
                    alt={event.image.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold",
                        categoryColour[event.category] ?? "bg-secondary text-secondary-foreground border-border",
                      )}
                    >
                      <Tag className="size-3" />
                      {event.category}
                    </span>
                    {event.date ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Calendar className="size-3.5 text-primary" />
                        {formatEventDate(event.date)}
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Scheduled for current term</span>
                    )}
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground">{event.title}</h2>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{event.summary}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 flex items-center justify-between border-t border-border/60 mt-4">
                <span className="text-xs font-semibold text-primary">Wania Campus, Gujrat</span>
                <span className="text-xs text-muted-foreground">TFMS Community</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Photo highlights */}
      <section className="surface-cream py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Captured moments"
            title="See our students in action"
            description="Memorable glimpses from trips, award ceremonies, and outdoor gatherings."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: images.tripRopeBridge03, label: "Outdoor Nature Excursion" },
              { img: images.studentsParkOuting, label: "Annual Park Picnic" },
              { img: images.martialArtsBeltCeremony, label: "Martial Arts Belt Promotion" },
              { img: images.giftPacksPrizes, label: "Prizes & Recognition Ceremony" },
              { img: images.edutainmentTripRide, label: "Edutainment Fun Rides" },
              { img: images.admissionPoster01, label: "Talent & Achievement Showcase" },
            ].map((item, i) => (
              <div key={i} className="group overflow-hidden rounded-3xl shadow-soft border border-border bg-card">
                <img
                  src={item.img.src}
                  alt={item.img.alt}
                  loading="lazy"
                  className="h-60 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-4 border-t border-border/60">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">Event Spotlight</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full shadow-crimson px-8 font-semibold">
              <Link to="/gallery" className="inline-flex items-center gap-2">
                <span>Explore Full High-Res Gallery</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="py-12">
        <CTABand
          title="Become part of our vibrant school story"
          text="Enrol your child and join a school community full of life, learning, and celebration."
        />
      </div>
    </>
  );
}
