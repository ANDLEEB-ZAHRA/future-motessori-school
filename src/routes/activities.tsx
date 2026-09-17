import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { activities } from "@/data/activities";
import { CTABand, PageHero, SectionHeading } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: `Activities — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "Student activities at The Future Montessori School: edutainment trips, martial arts, talent shows, splash days, parent-teacher meetings and more.",
      },
      {
        property: "og:title",
        content: `Activities — ${site.name}`,
      },
      {
        property: "og:description",
        content:
          "School activities for Montessori, Primary and Middle students at TFMS, Gujrat.",
      },
      {
        property: "og:url",
        content: "/activities",
      },
    ],
    links: [{ rel: "canonical", href: "/activities" }],
  }),
  component: ActivitiesPage,
});

const categories = [
  "All",
  "Trips",
  "Sports",
  "Arts & Creativity",
  "Celebrations",
  "Learning",
] as const;

const categoryMap: Record<string, string[]> = {
  "educational-trips": ["Trips"],
  "martial-arts": ["Sports"],
  "talent-show": ["Arts & Creativity"],
  "classroom-learning": ["Learning"],
  "parent-teacher-meetings": ["Learning"],
  celebrations: ["Celebrations"],
  prizes: ["Celebrations"],
  creative: ["Arts & Creativity"],
};

const activityHeroSlides = [
  images.edutainmentTripTrain,
  images.tripRopeBridge02,
  images.tripRockWall,
  images.martialArtsBeltCeremony,
];

function ActivitiesPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? activities
      : activities.filter((a) =>
        (categoryMap[a.slug] ?? []).includes(active),
      );

  return (
    <>
      <PageHero
        eyebrow="Student Co-Curriculars"
        badgeText="Active Learning Beyond Books"
        title="Activities that inspire confidence, character and joy"
        description="At The Future Montessori School, learning doesn't stop at the classroom door. Our students explore, perform, compete, and celebrate throughout the academic year."
        images={activityHeroSlides}
        actions={
          <>
            <Button asChild size="lg" className="rounded-full shadow-crimson px-7 font-semibold">
              <Link to="/gallery" className="inline-flex items-center gap-2">
                <span>View Full Photo Gallery</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-accent hover:border-primary/40 px-7 font-semibold"
            >
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </>
        }
      />

      <section className="section-y container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="Explore our activities"
            description="Every activity is designed to build confidence, leadership, and curiosity alongside academic growth."
          />

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200",
                  active === category
                    ? "bg-primary text-primary-foreground shadow-crimson"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((activity) => {
            const Icon = activity.icon;
            const tags = categoryMap[activity.slug] ?? [];

            return (
              <article
                key={activity.slug}
                className="surface-card surface-card-hover group overflow-hidden rounded-3xl border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden bg-secondary/30">
                    <img
                      src={activity.image.src}
                      alt={activity.image.alt}
                      loading="lazy"
                      className="h-56 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                      <Icon className="size-5" />
                    </span>

                    <h2 className="mt-4 font-display text-xl font-bold text-foreground">
                      {activity.title}
                    </h2>

                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {tags.length > 0 && (
                  <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary border border-border/70 px-3 py-0.5 text-xs font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Highlights strip */}
      <section className="surface-cream py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Activity Spotlight"
            title="Moments of achievement and discovery"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-3xl shadow-soft border border-border group bg-secondary/20">
              <img
                src={images.tripRopeBridge01.src}
                alt={images.tripRopeBridge01.alt}
                loading="lazy"
                className="h-64 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4 bg-card border-t border-border">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Edutainment Trips</p>
                <p className="text-sm font-medium text-foreground mt-0.5">Rope bridge adventure and nature discovery</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-soft border border-border group bg-secondary/20">
              <img
                src={images.martialArtsTeam01.src}
                alt={images.martialArtsTeam01.alt}
                loading="lazy"
                className="h-64 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4 bg-card border-t border-border">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Martial Arts Training</p>
                <p className="text-sm font-medium text-foreground mt-0.5">Discipline and sportsmanship in action</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-soft border border-border group bg-secondary/20 sm:col-span-2 lg:col-span-1">
              <img
                src={images.admissionPoster01.src}
                alt={images.admissionPoster01.alt}
                loading="lazy"
                className="h-64 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4 bg-card border-t border-border">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">School Celebrations</p>
                <p className="text-sm font-medium text-foreground mt-0.5">Recognizing talent and student milestones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-12">
        <CTABand
          title="Want your child to experience all this?"
          text="Admissions are open for Montessori, Primary and Middle classes. Come and see what we offer."
        />
      </div>
    </>
  );
}