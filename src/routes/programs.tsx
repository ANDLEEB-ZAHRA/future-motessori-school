import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { CTABand, PageHero, SectionHeading, TickList } from "@/components/site/ui";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: `Programs — Montessori, Primary & Middle | ${site.name}` },
      {
        name: "description",
        content:
          "Our three class programs at The Future Montessori School, Gujrat — Montessori early years, Primary and Middle — with subjects and focus areas for each.",
      },
      { property: "og:title", content: `Programs — ${site.name}` },
      {
        property: "og:description",
        content: "Montessori, Primary and Middle programs at Wania Campus, Sabowal Road, Gujrat.",
      },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const programHeroSlides = [
  images.studentsOutdoorReading,
  images.campusSubjectsPoster,
  images.martialArtsTeam01,
];

function ProgramsPage() {
  const phone = site.phones[0] ?? "0315-6220941";

  return (
    <>
      <PageHero
        eyebrow="Academic Levels"
        badgeText="Playgroup to Middle School"
        title="Three progressive levels, one continuous journey of excellence"
        description="Children transition naturally from the formative Montessori years into structured Primary and Middle schooling without losing their intrinsic love for inquiry and problem solving."
        images={programHeroSlides}
        actions={
          <>
            <Button asChild size="lg" className="rounded-full shadow-crimson px-7 font-semibold">
              <Link to="/admissions" className="inline-flex items-center gap-2">
                <span>Start Admissions Inquiry</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-accent hover:border-primary/40 px-7 font-semibold"
            >
              <Link to="/academics">Curriculum Overview</Link>
            </Button>
          </>
        }
      />

      <section className="section-y container-x">
        <SectionHeading
          eyebrow="Class breakdown"
          title="Choose the right educational stage for your child"
          description="Detailed subject offerings, skill focuses, and conceptual foundations for each level."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.slug} className="surface-card surface-card-hover overflow-hidden rounded-3xl border border-border flex flex-col justify-between">
              <div>
                <div className="overflow-hidden bg-secondary/30">
                  <img
                    src={p.image.src}
                    alt={p.image.alt}
                    width={p.image.width}
                    height={p.image.height}
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: p.image.aspectRatio }}
                    className="h-56 w-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="badge-pill">{p.level}</span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground">{p.name}</h2>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                  
                  <h3 className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Core Subjects
                  </h3>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {p.subjects.map((s) => (
                      <li key={s} className="rounded-full bg-secondary border border-border/80 px-3 py-1 text-xs font-medium text-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Developmental Focus
                  </h3>
                  <div className="mt-2.5">
                    <TickList items={p.focus} columns={1} />
                  </div>
                </div>
              </div>

              <div className="px-7 pb-7 pt-0 border-t border-border/60 mt-4">
                <Button asChild className="w-full mt-4 rounded-full shadow-crimson font-semibold">
                  <Link to="/admissions" className="inline-flex items-center justify-center gap-2">
                    <span>Inquire for {p.name}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-3xl bg-secondary/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">Not sure which class fits your child best?</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Call our academic advisory desk on <span className="text-primary font-bold">{phone}</span> for direct placement support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="sm" className="rounded-full shadow-crimson px-5 font-semibold">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="rounded-full px-5 font-semibold">
              <Link to="/faq">Read FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="pb-16">
        <CTABand />
      </div>
    </>
  );
}
