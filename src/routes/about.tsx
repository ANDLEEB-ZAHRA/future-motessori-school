import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Flag,
  Heart,
  Sparkles,
} from "lucide-react";

import { site } from "@/data/site";
import { images } from "@/data/images";
import { offerings } from "@/data/programs";
import { Button } from "@/components/ui/button";
import {
  CTABand,
  PageHero,
  SectionHeading,
  TickList,
} from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "Learn about The Future Montessori School at Wania Campus, Sabowal Road, Gujrat — our mission, values of Innovation, Creativity and Leadership, and our caring approach to learning.",
      },
      {
        property: "og:title",
        content: `About Us — ${site.name}`,
      },
      {
        property: "og:description",
        content:
          "Our story, mission and the values behind The Future Montessori School in Gujrat.",
      },
      {
        property: "og:url",
        content: "/about",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/about",
      },
    ],
  }),

  component: AboutPage,
});

const aboutHeroSlides = [
  images.campusOutdoorGathering,
  images.studentsOutdoorReading,
  images.martialArtsTeam01,
  images.studentsParkOuting,
];

function AboutPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="About Us"
        badgeText="Established with Purpose in Gujrat"
        title="A school where children grow with knowledge and character"
        description={`${site.name} is a Montessori, Primary and Middle school at ${site.address.campus}, ${site.address.street}, ${site.address.city}. Our crest carries three guiding words: ${site.values.join(", ")}.`}
        images={aboutHeroSlides}
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
              <Link to="/montessori">
                The Montessori Method
              </Link>
            </Button>
          </>
        }
      />

      {/* =========================================================
          STORY & CAMPUS HIGHLIGHTS
      ========================================================= */}
      <section className="section-y container-x grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Who we are"
            title="Small enough to know every child, ambitious enough to stretch them"
          />

          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <p>
              Our school was founded on a core belief: children thrive when
              they feel safe, valued, and intellectually engaged. From the
              formative Montessori years through Primary and Middle classes,
              education here is hands-on, conceptual, and enriched with
              purpose.
            </p>

            <p>
              Alongside core curricula in English, Urdu, mathematics, and
              sciences, we emphasize ethical grounding — Quranic education,
              moral training, courtesy, and civic responsibility. Parents are
              true partners through regular parent-teacher conferences and
              development workshops.
            </p>

            <p>
              Campus life offers a well-stocked library, safe outdoor play
              areas, indoor recreation, annual sports and martial arts
              training, creative talent showcases, and memorable edutainment
              excursions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="p-3 rounded-2xl bg-secondary/50 border border-border">
              <span className="block font-display text-2xl font-bold text-primary">
                Playgroup
              </span>

              <span className="text-xs text-muted-foreground">
                To Class 8 (Middle)
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-secondary/50 border border-border">
              <span className="block font-display text-2xl font-bold text-primary">
                100%
              </span>

              <span className="text-xs text-muted-foreground">
                Activity-Based Learning
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-secondary/50 border border-border">
              <span className="block font-display text-2xl font-bold text-primary">
                Sabowal Rd
              </span>

              <span className="text-xs text-muted-foreground">
                Wania Campus, Gujrat
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            IMAGE COMPOSITION
        ========================================================= */}
        <div className="lg:col-span-5 grid gap-4">
          <div className="group overflow-hidden rounded-3xl surface-card shadow-lift border border-border">
            <img
              src={images.studentsOutdoorReading.src}
              alt={images.studentsOutdoorReading.alt}
              width={images.studentsOutdoorReading.width}
              height={images.studentsOutdoorReading.height}
              loading="lazy"
              decoding="async"
              className="w-full h-72 sm:h-80 object-cover object-[center_35%] transition-transform duration-500 will-change-transform group-hover:scale-103"
            />

            <div className="p-4 bg-card border-t border-border/60">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                Independent Learning
              </p>

              <p className="text-sm font-medium text-foreground mt-0.5">
                Students reading on the campus green
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl surface-card shadow-lift border border-border">
            <img
              src={images.campusOutdoorGathering.src}
              alt={images.campusOutdoorGathering.alt}
              width={images.campusOutdoorGathering.width}
              height={images.campusOutdoorGathering.height}
              loading="lazy"
              decoding="async"
              className="w-full h-64 object-cover object-[center_40%] transition-transform duration-500 will-change-transform group-hover:scale-103"
            />

            <div className="p-4 bg-card border-t border-border/60">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                School Community
              </p>

              <p className="text-sm font-medium text-foreground mt-0.5">
                Campus outdoor gathering & parent-student engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION, VISION & VALUES
      ========================================================= */}
      <section className="surface-cream py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our Foundation"
            title="Mission, vision and values"
            description="Our compass for cultivating responsible leaders and lifelong learners in Gujrat."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Flag,
                title: "Our Mission",
                text: "To provide every student with an inspiring, conceptual education coupled with the moral strength to make a positive impact in society.",
              },
              {
                icon: Compass,
                title: "Our Vision",
                text: "To nurture curious, articulate, and confident young individuals who lead with knowledge, creativity, and empathy in a changing world.",
              },
              {
                icon: Heart,
                title: "Our Values",
                text: `${site.values.join(
                  " • "
                )} — the three principles on our crest, brought to life through every daily lesson and interaction.`,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="surface-card surface-card-hover p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <c.icon className="size-6" />
                  </span>

                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                    {c.title}
                  </h3>

                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {c.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5" />

                  <span>
                    The Future Montessori Standard
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE OFFER
      ========================================================= */}
      <section className="section-y container-x">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="Our Commitments"
            title="What we promise every family"
            description="A well-rounded academic and developmental environment built on genuine care."
          />

          <div className="mt-10">
            <TickList
              items={offerings}
              columns={3}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS LIFE
      ========================================================= */}
      <section className="bg-secondary/40 border-y border-border py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="badge-pill">
                Holistic Growth
              </span>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
                Beyond textbooks: sports, martial arts and discovery trips
              </h2>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                We believe character is built both in the classroom and on
                the field. Our regular martial arts belt ceremonies, sports
                competitions, library reading sessions, and educational
                excursions give students the confidence to step forward.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-full shadow-crimson px-6 font-semibold"
                >
                  <Link to="/student-life">
                    Explore Student Life
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 font-semibold"
                >
                  <Link to="/gallery">
                    View Photo Gallery
                  </Link>
                </Button>
              </div>
            </div>

            {/* =====================================================
                OPTIMIZED IMAGES
            ===================================================== */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
                <img
                  src={images.martialArtsTeam01.src}
                  alt={images.martialArtsTeam01.alt}
                  width={images.martialArtsTeam01.width}
                  height={images.martialArtsTeam01.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-56 object-cover object-center"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
                <img
                  src={images.edutainmentTripRide.src}
                  alt={images.edutainmentTripRide.alt}
                  width={images.edutainmentTripRide.width}
                  height={images.edutainmentTripRide.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-56 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <div className="py-12">
        <CTABand />
      </div>
    </>
  );
}