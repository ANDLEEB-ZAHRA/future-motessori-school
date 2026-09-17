import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { programs, learningTargets, offerings } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { CTABand, PageHero, SectionHeading, TickList } from "@/components/site/ui";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: `Academics — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "Academics at The Future Montessori School: English, Urdu, mathematics, general knowledge, phonics, creative writing and Quranic education across Montessori, Primary and Middle classes.",
      },
      { property: "og:title", content: `Academics — ${site.name}` },
      {
        property: "og:description",
        content: "Our curriculum, subjects and learning targets across three class levels.",
      },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: AcademicsPage,
});

const academicHeroSlides = [
  images.campusSubjectsPoster,
  images.studentsOutdoorReading,
  images.admissionPoster02,
];

function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics & Curriculum"
        badgeText="Concept & Activity Based"
        title="A curriculum with strong foundations and joyful discovery"
        description="Reading, writing, and conceptual reasoning come first — supported by interactive worksheets, open discussions, and guided practice. Assessment is continuous and parents stay closely informed."
        images={academicHeroSlides}
        actions={
          <>
            <Button asChild size="lg" className="rounded-full shadow-crimson px-7 font-semibold">
              <Link to="/admissions" className="inline-flex items-center gap-2">
                <span>Admissions Inquiry</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-accent hover:border-primary/40 px-7 font-semibold"
            >
              <Link to="/programs">Compare Class Levels</Link>
            </Button>
          </>
        }
      />

      <section className="section-y container-x">
        <SectionHeading
          eyebrow="Class levels"
          title="What each developmental level focuses on"
          description="Subjects are taught with worksheets, concept building, and hands-on activities rather than rote memorization."
        />
        <div className="mt-12 space-y-8">
          {programs.map((p, i) => (
            <article
              key={p.slug}
              className={`surface-card surface-card-hover grid gap-8 overflow-hidden rounded-3xl border border-border lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden bg-secondary/30">
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: p.image.aspectRatio }}
                  className="h-full min-h-72 w-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-103"
                />
              </figure>
              <div className="p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="badge-pill">{p.level}</span>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">{p.name}</h2>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{p.summary}</p>
                  
                  <h3 className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Curriculum Subjects</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.subjects.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-secondary border border-border/80 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Key Focus Areas</h3>
                  <div className="mt-3">
                    <TickList items={p.focus} columns={1} />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Wania Campus, Gujrat</span>
                  <Button asChild variant="ghost" size="sm" className="font-semibold text-primary hover:text-primary">
                    <Link to="/admissions" className="inline-flex items-center gap-1.5">
                      <span>Enroll in {p.name}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-cream py-16 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our main targets" title="What every child works towards" />
            <div className="mt-8">
              <TickList items={learningTargets} columns={1} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="How we teach" title="Support around the learning" />
            <div className="mt-8">
              <TickList items={offerings} columns={1} />
            </div>
            <Button asChild size="lg" className="mt-8 rounded-full shadow-crimson px-7 font-semibold">
              <Link to="/programs" className="inline-flex items-center gap-2">
                <span>Explore Full Program Breakdown</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="py-12">
        <CTABand />
      </div>
    </>
  );
}
