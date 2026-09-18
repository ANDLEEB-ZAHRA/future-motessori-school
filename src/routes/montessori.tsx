import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { Button } from "@/components/ui/button";
import { CTABand, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/montessori")({
  head: () => ({
    meta: [
      { title: `Montessori Education — ${site.name}` },
      {
        name: "description",
        content:
          "How the Montessori method works at The Future Montessori School, Gujrat: a prepared environment, hands-on materials, freedom within limits and learning at each child's own pace.",
      },
      {
        property: "og:title",
        content: `Montessori Education — ${site.name}`,
      },
      {
        property: "og:description",
        content:
          "A prepared environment, hands-on materials and learning at the child's own pace.",
      },
      { property: "og:url", content: "/montessori" },
    ],
    links: [{ rel: "canonical", href: "/montessori" }],
  }),
  component: MontessoriPage,
});

const principles = [
  {
    title: "The prepared environment",
    text: "Classrooms are calm, orderly, and accessible — learning materials sit on low shelves so a child can choose and return work independently.",
  },
  {
    title: "Learning through the hands",
    text: "Concrete materials precede abstract symbols. Children trace, count, balance, and sort physically before writing abstract formulas.",
  },
  {
    title: "Freedom within clear limits",
    text: "Children choose their work and how long to focus on it, within kind and consistent boundaries established with the teacher.",
  },
  {
    title: "The teacher as guide",
    text: "Montessori guides observe each child closely, introducing new challenges and materials precisely when the child demonstrates readiness.",
  },
  {
    title: "Deep respect for the child",
    text: "Every child is recognized as capable and unique. Courtesy, patience, empathy, and self-care are modeled as diligently as phonics.",
  },
  {
    title: "Concentration and joyful work",
    text: "Uninterrupted work cycles enable children to build deep concentration, finishing tasks with intrinsic satisfaction and joy.",
  },
];

const day = [
  {
    time: "Arrival & Assembly",
    text: "Warm morning greetings, national anthem, morning assembly, and calm transition.",
  },
  {
    time: "Montessori Work Cycle",
    text: "Practical life, sensorial, language, phonics, and math activities chosen by the child.",
  },
  {
    time: "Circle Time & Discussion",
    text: "Stories, rhymes, Islamic studies, Quranic Nazra recitation, and interactive discussion.",
  },
  {
    time: "Snack & Social Time",
    text: "Healthy snack time, courtesy practice, and outdoor/indoor games.",
  },
  {
    time: "Creative Expression",
    text: "Drawing, clay art, music, physical movement, or martial arts practice.",
  },
  {
    time: "Reflection & Close",
    text: "Class tidy-up, shared gratitude, daily review, and cheerful dismissal.",
  },
];

const montessoriHeroSlides = [
  images.studentSnackTime,
  images.studentsOutdoorReading,
  images.campusOutdoorGathering,
];

function MontessoriPage() {
  return (
    <>
      <PageHero
        eyebrow="Montessori Philosophy"
        badgeText="Child-Centred Foundation"
        title="Montessori education: cultivating natural curiosity into lifelong mastery"
        description="Montessori is not a decoration or a fleeting trend — it is a time-tested, scientific approach to teaching that follows the child. Here is how that vision comes to life daily at Wania Campus."
        images={montessoriHeroSlides}
        actions={
          <>
            <Button
              asChild
              size="lg"
              className="rounded-full shadow-crimson px-7 font-semibold"
            >
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2"
              >
                <span>Enroll in Montessori</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-accent hover:border-primary/40 px-7 font-semibold"
            >
              <Link to="/academics">View All Academics</Link>
            </Button>
          </>
        }
      />

      <section className="section-y container-x">
        <SectionHeading
          eyebrow="Core Principles"
          title="Six foundational ideas that shape every daily lesson"
          description="Adapted from Dr. Maria Montessori's discoveries to our comprehensive curriculum in English, Urdu, mathematics, general knowledge, and moral education."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="surface-card surface-card-hover p-8 rounded-3xl border border-border flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl font-bold text-primary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                  {p.title}
                </h3>

                <p className="mt-2.5 text-base text-muted-foreground leading-relaxed">
                  {p.text}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border/60 text-xs font-semibold text-primary">
                Montessori Principle
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-cream py-16 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Daily Flow"
              title="A predictable rhythm, not a rigid factory schedule"
              description="A balanced day structured around periods of deep focus, social learning, creative exploration, and physical play."
            />

            <ol className="mt-8 space-y-4">
              {day.map((d, index) => (
                <li
                  key={d.time}
                  className="flex gap-4 p-4 rounded-2xl bg-card border border-border"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {index + 1}
                  </span>

                  <div>
                    <p className="font-semibold text-foreground text-base">
                      {d.time}
                    </p>

                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                      {d.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-crimson px-7 font-semibold"
              >
                <Link
                  to="/academics"
                  className="inline-flex items-center gap-2"
                >
                  <span>Explore Academic Programs</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {/* Admission Poster — full card image with zoom/crop */}
            <div className="overflow-hidden rounded-3xl shadow-lift border border-border group bg-secondary/20 aspect-[4/3]">
              <img
                src={images.admissionPoster01.src}
                alt={images.admissionPoster01.alt}
                width={images.admissionPoster01.width}
                height={images.admissionPoster01.height}
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Student Snack Image — lazy-loaded, and object-top so the child's face
                stays in frame instead of being cropped out by the fixed h-56 box */}
            <div className="overflow-hidden rounded-3xl shadow-lift border border-border group bg-secondary/20">
              <img
                src={images.studentSnackTime.src}
                alt={images.studentSnackTime.alt}
                width={images.studentSnackTime.width}
                height={images.studentSnackTime.height}
                loading="lazy"
                decoding="async"
                style={{
                  aspectRatio: images.studentSnackTime.aspectRatio,
                }}
                className="block w-full h-56 object-cover object-top transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <CTABand
          title="Come and see a Montessori classroom in action"
          text="Visit Wania Campus and witness the calm, engaged environment where our youngest students thrive."
        />
      </div>
    </>
  );
}

