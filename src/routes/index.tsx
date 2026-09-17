import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";

import { site } from "@/data/site";
import { images } from "@/data/images";
import { programs, offerings } from "@/data/programs";
import { activities } from "@/data/activities";
import { news, formatNewsDate } from "@/data/news";
import { galleryItems } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import {
  CTABand,
  SectionHeading,
  Stat,
  TickList,
} from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${site.name} — ${site.motto} | Gujrat, Pakistan`,
      },
      {
        name: "description",
        content:
          "The Future Montessori School at Wania Campus, Sabowal Road, Gujrat. Premier Montessori, Primary and Middle education with activity-based learning, caring teachers, and scholarships.",
      },
      {
        property: "og:title",
        content: `${site.name} — ${site.motto}`,
      },
      {
        property: "og:description",
        content:
          "A caring Montessori, Primary and Middle school in Gujrat. Innovation, Creativity, Leadership.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: HomePage,
});

const pillars = [
  {
    icon: BookOpen,
    title: "Conceptual, activity-based learning",
    text: "Children learn by doing — worksheets, phonics, hands-on material, visual and audio learning designed for true understanding.",
    tag: "Practical Learning",
  },
  {
    icon: HeartHandshake,
    title: "Friendly, caring environment",
    text: "A safe, supportive campus where every child is known by name, valued individually, and encouraged every single day.",
    tag: "Child-Centric",
  },
  {
    icon: GraduationCap,
    title: "Well qualified staff",
    text: "Experienced, compassionate educators, regular parent-teacher meetings, and parent guidance workshops.",
    tag: "Expert Faculty",
  },
  {
    icon: Sparkles,
    title: "Character and confidence",
    text: "Ethical and moral grounding, Quranic Nazra education, martial arts, public speaking, and talent development.",
    tag: "Values & Ethics",
  },
];

const campusShowcaseImages = [
  {
    image: images.studentsOutdoorReading,
    title: "Outdoor Reading & Conceptual Learning",
    subtitle:
      "Students engaging with books and interactive worksheets in our open green spaces.",
  },
  {
    image: images.campusOutdoorGathering,
    title: "Vibrant Campus Gatherings",
    subtitle:
      "Parents, teachers, and students coming together for annual celebrations and awards.",
  },
  {
    image: images.martialArtsTeam01,
    title: "Martial Arts & Sports Training",
    subtitle:
      "Building physical fitness, discipline, and self-confidence under expert coaching.",
  },
  {
    image: images.edutainmentTripTrain,
    title: "Joyful Edutainment Trips",
    subtitle:
      "Memorable experiential learning journeys and educational excursions.",
  },
  {
    image: images.giftPacksPrizes,
    title: "Recognizing Student Achievements",
    subtitle:
      "Encouraging effort, creativity, and good character with meaningful awards.",
  },
];

/* Poster-style news images (e.g. Admissions banner) ko crop hone se bachane ke liye */
const posterCategories = ["Admissions", "Announcements"];

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance campus showcase slideshow
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide(
        (prev) => (prev + 1) % campusShowcaseImages.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      {/* =========================================================
          HERO SECTION — MODERN SPLIT LAYOUT
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-card/50 to-cream/40 pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle decorative background gradient glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">

            {/* LEFT COLUMN: Narrative & CTAs */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">

              {/* Category Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-xs backdrop-blur-xs">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <span>{site.levels}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.65rem] lg:leading-[1.12] text-balance">
                Building Confident Minds for a{" "}
                <span className="relative inline-block text-primary italic font-serif">
                  Brighter Future
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full text-gold/60"
                    height="8"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 0, 100 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Introduction Paragraph */}
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8 max-w-xl">
                Welcome to{" "}
                <strong className="font-semibold text-foreground">
                  {site.name}
                </strong>
                , Wania Campus, Gujrat. We provide a joyful, activity-based
                educational journey from Early Montessori through Middle
                school, grounded in{" "}
                <span className="font-medium text-foreground">
                  {site.values.join(", ")}
                </span>{" "}
                and our commitment to{" "}
                <em className="text-primary font-serif font-medium">
                  {site.motto}
                </em>
                .
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-7 shadow-crimson transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-sm font-semibold"
                >
                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-2"
                  >
                    Apply for Admission
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border bg-card/80 px-7 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent"
                >
                  <Link to="/about">Discover Our School</Link>
                </Button>
              </div>

              {/* Trust Stats & Highlights */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 border-t border-border/80 pt-6 mt-8">
                <div className="rounded-xl bg-card/60 p-3 sm:p-4 border border-border/60">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Campus
                  </p>
                  <p className="mt-1 font-display text-lg sm:text-xl font-bold text-foreground">
                    Wania
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    Gujrat, Pakistan
                  </p>
                </div>

                <div className="rounded-xl bg-card/60 p-3 sm:p-4 border border-border/60">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Levels
                  </p>
                  <p className="mt-1 font-display text-lg sm:text-xl font-bold text-foreground">
                    3 Stages
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    Montessori–Middle
                  </p>
                </div>

                <div className="rounded-xl bg-card/60 p-3 sm:p-4 border border-border/60">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Scholarships
                  </p>
                  <p className="mt-1 font-display text-lg sm:text-xl font-bold text-foreground">
                    5 Tracks
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    Merit & Need Based
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 3-Image Editorial Designer Composition */}
            <div className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0">

              <div className="relative mx-auto max-w-lg lg:max-w-none">

                {/* Main Large Featured Image (Park Outing) */}
                <div className="relative overflow-hidden rounded-3xl border-4 border-card bg-card shadow-lift transition-all duration-500 hover:shadow-2xl">
                  <img
                    src={images.studentsParkOuting.src}
                    alt={images.studentsParkOuting.alt}
                    width={images.studentsParkOuting.width}
                    height={images.studentsParkOuting.height}
                    className="h-72 w-full sm:h-84 md:h-96 object-cover object-center transition-transform duration-700 hover:scale-103"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>

                {/* Overlapping Image 1 (Outdoor Reading - Left Bottom Offset) */}
                <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-44 sm:w-56 overflow-hidden rounded-2xl border-4 border-card bg-card shadow-lift transition-all duration-500 hover:scale-105 hover:z-30">
                  <img
                    src={images.studentsOutdoorReading.src}
                    alt={images.studentsOutdoorReading.alt}
                    width={images.studentsOutdoorReading.width}
                    height={images.studentsOutdoorReading.height}
                    className="h-32 sm:h-40 w-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                  />

                  <div className="p-2 sm:p-2.5 bg-card">
                    <p className="text-[10px] sm:text-xs font-bold text-foreground">
                      Interactive Reading
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                      Hands-on Phonics
                    </p>
                  </div>
                </div>

                {/* Overlapping Image 2 (Martial Arts - Right Bottom Offset) */}
                <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-40 sm:w-52 overflow-hidden rounded-2xl border-4 border-card bg-card shadow-lift transition-all duration-500 hover:scale-105 hover:z-30">
                  <img
                    src={images.martialArtsTeam01.src}
                    alt={images.martialArtsTeam01.alt}
                    width={images.martialArtsTeam01.width}
                    height={images.martialArtsTeam01.height}
                    className="h-28 sm:h-36 w-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                  />

                  <div className="p-2 sm:p-2.5 bg-card">
                    <p className="text-[10px] sm:text-xs font-bold text-foreground">
                      Martial Arts Club
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                      Discipline & Health
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PILLARS / CORE VALUES SECTION
      ========================================================= */}
      <section className="section-y container-x">
        <SectionHeading
          eyebrow="Why families choose us"
          title="A school built around the child"
          description="Everything we do comes back to one purpose: nurturing children who genuinely love learning and grow into thoughtful, capable leaders."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, index) => (
            <div
              key={p.title}
              className="group surface-card surface-card-hover relative flex flex-col justify-between p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground shadow-xs">
                    <p.icon className="size-5.5" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80 bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                  {p.text}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <ShieldCheck className="size-3.5" />
                <span>Standard at Wania Campus</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROGRAMS SECTION
      ========================================================= */}
      <section className="surface-cream">
        <div className="section-y container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Academic Stages"
              title="Montessori, Primary and Middle"
              description="Three developmental stages under one caring roof, each tailored to your child's cognitive and social growth."
            />

            <Button
              asChild
              variant="outline"
              className="rounded-full border-border bg-card px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 font-semibold"
            >
              <Link
                to="/programs"
                className="inline-flex items-center gap-2"
              >
                All Class Programs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {programs.map((p, index) => (
              <article
                key={p.slug}
                className="group surface-card surface-card-hover flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={p.image.src}
                      alt={p.image.alt}
                      width={p.image.width}
                      height={p.image.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-card/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
                        {p.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {p.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border/60">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Key Focus Areas:
                      </p>

                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {p.focus.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2"
                          >
                            <span className="size-1.5 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/programs"
                    className="inline-flex w-full items-center justify-between rounded-xl bg-accent/60 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground group/link"
                  >
                    <span>Explore {p.name}</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS SHOWCASE & OFFERINGS
      ========================================================= */}
      <section className="section-y container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

          {/* Left Column: Offerings List */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="What We Offer"
              title="Everything a growing child needs"
              description="Authentic features from our Wania Campus admission charter — providing academic excellence and character grooming."
            />

            <div className="mt-6">
              <TickList items={offerings} columns={2} />
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="rounded-full shadow-crimson px-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link
                  to="/academics"
                  className="inline-flex items-center gap-2"
                >
                  <span>See Academic Framework</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link to="/admissions">Admissions Overview</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Campus Showcase Slideshow */}
          <div
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="surface-card overflow-hidden rounded-3xl p-3 sm:p-4 shadow-lift border border-border">

              {/* Slideshow Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink">

                {campusShowcaseImages.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      className="h-full w-full object-cover object-center"
                      loading={idx === activeSlide ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={idx === activeSlide ? "high" : "auto"}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block rounded-md bg-gold/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black mb-1">
                        Campus Spotlight {idx + 1}/
                        {campusShowcaseImages.length}
                      </span>

                      <h4 className="font-display text-lg font-bold sm:text-xl">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs text-white/80 line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Arrow Controls */}
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() =>
                    setActiveSlide(
                      (prev) =>
                        (prev - 1 + campusShowcaseImages.length) %
                        campusShowcaseImages.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-xs transition hover:bg-black/70"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() =>
                    setActiveSlide(
                      (prev) =>
                        (prev + 1) % campusShowcaseImages.length
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-xs transition hover:bg-black/70"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              {/* Thumbnails Navigation */}
              <div className="mt-3 flex items-center justify-between gap-2 px-1">
                <div className="flex gap-1.5">
                  {campusShowcaseImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === activeSlide
                        ? "w-7 bg-primary"
                        : "w-2 bg-border hover:bg-muted-foreground"
                        }`}
                    />
                  ))}
                </div>

                <p className="text-[11px] font-medium text-muted-foreground">
                  Hover to pause auto-cycle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STUDENT LIFE & ACTIVITIES SECTION
      ========================================================= */}
      <section className="surface-cream">
        <div className="section-y container-x">
          <SectionHeading
            align="center"
            eyebrow="Holistic Student Life"
            title="Learning does not stop at the classroom door"
            description="From martial arts and Quranic recitation to science exhibits and edutainment trips, our students grow in confidence every day."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.slice(0, 4).map((a, index) => (
              <Link
                key={a.slug}
                to="/activities"
                className="group surface-card surface-card-hover overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative overflow-hidden aspect-[16/11]">
                  <img
                    src={a.image.src}
                    alt={a.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground line-clamp-3">
                    {a.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Stats Ribbon */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Stat value="5 Types" label="Scholarship Categories" />
            </div>

            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Stat
                value="3 Levels"
                label="Montessori • Primary • Middle"
              />
            </div>

            <div className="transition-transform duration-300 hover:-translate-y-1">
              <Stat
                value="Regular MTM"
                label="Mother-Teacher Meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS MOMENTS GALLERY PREVIEW
      ========================================================= */}
      <section className="section-y container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Moments from our campus life"
            description="Authentic glimpses of classroom exploration, sports achievements, and joyful school outings."
          />

          <Button
            asChild
            variant="outline"
            className="rounded-full border-border bg-card px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 font-semibold"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2"
            >
              <span>
                View Full Gallery ({galleryItems.length} Photos)
              </span>
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryItems.slice(0, 8).map((g, index) => (
            <Link
              key={g.id}
              to="/gallery"
              className="group relative overflow-hidden rounded-2xl shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl aspect-[4/3]"
              style={{
                animationDelay: `${index * 70}ms`,
              }}
            >
              <img
                src={g.image.src}
                alt={g.image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-xs font-medium text-white line-clamp-1">
                  {g.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          LATEST NEWS & NOTICE BOARD
      ========================================================= */}
      <section className="surface-cream">
        <div className="section-y container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Notice Board"
              title="Latest news & school announcements"
              description="Stay informed with current events, academic notices, and student activities from TFMS."
            />

            <Button
              asChild
              variant="outline"
              className="rounded-full border-border bg-card px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 font-semibold"
            >
              <Link
                to="/news"
                className="inline-flex items-center gap-2"
              >
                <span>All School News</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {news.slice(0, 3).map((n, index) => {
              const isPoster = posterCategories.includes(n.category);

              return (
                <article
                  key={n.slug}
                  className="group surface-card surface-card-hover flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div>
                    <div
                      className={`relative overflow-hidden aspect-[16/10] ${isPoster ? "bg-secondary/30" : ""
                        }`}
                    >
                      <img
                        src={n.image.src}
                        alt={n.image.alt}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${isPoster
                          ? "object-contain object-center"
                          : "object-cover object-center"
                          }`}
                      />

                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-card/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-xs">
                          {n.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                        <Calendar className="size-3.5" />
                        <span>{formatNewsDate(n.date)}</span>
                      </p>

                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {n.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3">
                        {n.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to="/news"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider group-hover:underline"
                    >
                      <span>Read Details</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA ADMISSION BANNER
      ========================================================= */}
      <div className="section-y">
        <CTABand
          title="Admissions are open at Wania Campus"
          text="Give your child the foundation of character, creativity, and knowledge. Scholarships available for deserving students."
        />
      </div>
    </>
  );
}