import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageCircle,
  User,
  BookOpen,
  Sparkles,
  Award,
} from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { programs, scholarships } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { AdmissionInquiryForm } from "@/components/site/forms";
import {
  CTABand,
  SectionHeading,
  TickList,
} from "@/components/site/ui";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: `Admissions — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "Apply to The Future Montessori School, Wania Campus, Sabowal Road, Gujrat. Open admissions for Montessori, Primary and Middle classes. Scholarships available.",
      },
      {
        property: "og:title",
        content: `Admissions — ${site.name}`,
      },
      {
        property: "og:description",
        content:
          "Start an admission inquiry for Montessori, Primary or Middle classes at TFMS, Gujrat.",
      },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

/* =========================================================
   ADMISSION PROCESS
========================================================= */

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Submit an Inquiry",
    text: "Complete the inquiry form below, call the school office, or visit Wania Campus during school hours.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Application Review",
    text: "The academic team reviews your child's information and confirms seat availability for the requested class.",
  },
  {
    icon: User,
    step: "03",
    title: "Meeting & Interaction",
    text: "A friendly, low-stress interaction at campus helps us understand your child's readiness and learning style.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Admission Confirmation",
    text: "The school confirms the admission decision, fee details, and any applicable merit/category scholarships.",
  },
  {
    icon: BookOpen,
    step: "05",
    title: "Enrolment & Welcome",
    text: "Complete registration paperwork, receive booklist/materials, and welcome your child to our school family.",
  },
];

/* =========================================================
   ALL 3 ORIGINAL HERO IMAGES
========================================================= */

const admissionHeroSlides = [
  images.admissionPoster01,
  images.admissionOpenBanner,
  images.admissionPoster02,
];

/* =========================================================
   CUSTOM ADMISSION HERO SLIDER

   - Changes automatically every 3 seconds
   - Image, dots and counter stay synchronized
========================================================= */

function AdmissionHeroSlider({
  primaryPhone,
}: {
  primaryPhone: string;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = admissionHeroSlides.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides);
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [totalSlides]);

  const currentImage = admissionHeroSlides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-x">
        <div className="grid min-h-[500px] items-center gap-10 py-8 lg:grid-cols-12 lg:gap-12 lg:py-10">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="lg:col-span-6">
            {/* Admission badge */}

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                ✨ Admissions Open
              </span>

              <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs font-medium text-foreground">
                Playgroup to Class 8 • Scholarships Available
              </span>
            </div>

            {/* Main heading */}

            <h1 className="max-w-2xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[58px] xl:text-[64px]">
              Begin your child's
              <br />
              journey to confidence
              <br />
              and excellence
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              The Future Montessori School welcomes new learners for
              Montessori, Primary, and Middle classes at Wania Campus,
              Sabowal Road, Gujrat. Merit and need-based scholarships are
              available.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 font-semibold shadow-crimson"
              >
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2"
                >
                  <span>Submit Inquiry Form</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-card/80 px-7 font-semibold text-foreground hover:border-primary/40 hover:bg-accent"
              >
                <a
                  href={`tel:${primaryPhone.replace(/[^0-9]/g, "")}`}
                >
                  Call Admissions ({primaryPhone})
                </a>
              </Button>
            </div>

            {/* =================================================
                SLIDER DOTS + COUNTER

                These are connected directly to activeSlide,
                so they always change with the image.
            ================================================= */}

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-2">
                {admissionHeroSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show admission slide ${index + 1}`}
                    aria-current={activeSlide === index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index
                      ? "w-9 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>

              <span className="ml-2 text-xs font-medium tracking-[0.18em] text-muted-foreground">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(totalSlides).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT HERO IMAGE
          ================================================= */}

          <div className="lg:col-span-6">
            <div className="relative">
              {/* Back decorative border */}

              <div className="absolute -bottom-3 -right-3 left-3 top-3 rounded-[2rem] border border-primary/15 bg-primary/5" />

              {/* Main image container */}

              <div className="relative h-[400px] overflow-hidden rounded-[2rem] border border-border bg-secondary/20 shadow-lift sm:h-[450px] lg:h-[470px]">
                {admissionHeroSlides.map((slide, index) => {
                  const isActive = index === activeSlide;
                  const isAdmissionOpen =
                    slide === images.admissionOpenBanner;

                  return (
                    <img
                      key={slide.src}
                      src={slide.src}
                      alt={slide.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 h-full w-full transition-all duration-700 ease-in-out ${isActive
                        ? "z-10 opacity-100"
                        : "z-0 opacity-0"
                        } ${isAdmissionOpen
                          ? "object-cover"
                          : "object-cover"
                        }`}
                      style={
                        isAdmissionOpen
                          ? {
                            objectPosition: "12% center",
                            transform: isActive
                              ? "scale(1.10)"
                              : "scale(1.10)",
                            transformOrigin: "left center",
                          }
                          : {
                            objectPosition: "center center",
                            transform: "scale(1)",
                          }
                      }
                    />
                  );
                })}

                {/* Small bottom overlay */}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN ADMISSIONS PAGE
========================================================= */

function AdmissionsPage() {
  const primaryPhone = site.phones[0] ?? "0315-6220941";
  const secondaryPhone = site.phones[1] ?? "0533-604611";

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <AdmissionHeroSlider primaryPhone={primaryPhone} />

      {/* =====================================================
          ADMISSION OPEN BANNER & PROGRAMS
      ===================================================== */}

      <section className="section-y container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Currently enrolling"
              title="Admissions open across all three levels"
              description="We are accepting applications for Playgroup, Nursery, Prep, Primary, and Middle classes. Visit the campus or send an inquiry below to secure your child's placement."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {programs.map((p) => (
                <div
                  key={p.slug}
                  className="surface-card surface-card-hover rounded-2xl border border-border p-5 text-center"
                >
                  <span className="badge-pill">{p.level}</span>

                  <p className="mt-3 font-display text-xl font-bold text-foreground">
                    {p.name}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.summary.substring(0, 65)}…
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-4 text-sm text-foreground">
              <Sparkles className="size-5 shrink-0 text-gold" />

              <p>
                Age criteria & grade ranges vary. Call our admissions desk
                on{" "}
                <a
                  href={`tel:${primaryPhone.replace(/[^0-9]/g, "")}`}
                  className="font-semibold text-primary underline underline-offset-2"
                >
                  {primaryPhone}
                </a>{" "}
                for personalized guidance.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-border bg-secondary/20 shadow-lift lg:col-span-5">
            <img
              src={images.admissionOpenBanner.src}
              alt={images.admissionOpenBanner.alt}
              className="w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="surface-cream py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Admissions Pathway"
            title="A simple, welcoming 5-step process"
            description="From your first inquiry to the very first day in class."
          />

          <div className="relative mt-14">
            <div className="absolute left-1/2 top-8 hidden h-0.5 w-[calc(100%-6rem)] -translate-x-1/2 bg-border lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-crimson">
                    <s.icon className="size-7" />

                    <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full border-2 border-primary bg-card text-[10px] font-bold text-primary shadow-xs">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-base font-bold text-foreground">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SCHOLARSHIPS
      ===================================================== */}

      <section className="section-y container-x">
        <SectionHeading
          eyebrow="Financial support"
          title="Scholarship categories & fee concessions"
          description="The Future Montessori School proudly supports deserving students across five verified scholarship categories."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {scholarships.map((s, i) => (
            <div
              key={s.title}
              className="surface-card surface-card-hover flex flex-col justify-between rounded-3xl border border-border p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-primary/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <Award className="size-5 text-gold" />
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>

              <div className="mt-5 border-t border-border/60 pt-3 text-xs font-semibold text-primary">
                Verified Category
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          DOCUMENTS CHECKLIST
      ===================================================== */}

      <section className="surface-cream py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What to prepare"
            title="Required documents for registration"
            description="When visiting Wania Campus to finalize enrolment, please carry the following documents:"
          />

          <div className="mt-8">
            <TickList
              columns={2}
              items={[
                "Child's B-Form (NADRA) or certified birth certificate",
                "CNIC copy of Father / Mother / Legal Guardian",
                "Previous school leaving certificate or transfer certificate (if applicable)",
                "4 recent passport-size photographs of the child with blue/white background",
                "Previous academic report cards or progress records (for Primary & Middle)",
              ]}
            />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Questions regarding documentation? Call our office on{" "}
            <a
              href={`tel:${primaryPhone.replace(/[^0-9]/g, "")}`}
              className="font-semibold text-primary underline underline-offset-2"
            >
              {primaryPhone}
            </a>{" "}
            or message us directly.
          </p>
        </div>
      </section>

      {/* =====================================================
          INQUIRY FORM
      ===================================================== */}

      <section
        id="inquiry"
        className="section-y container-x scroll-mt-24"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Start today"
              title="Submit your online admission inquiry"
              description="Fill out the short form and our admissions counselor will get in touch promptly. You may also reach us via phone or visit the campus in person."
            />

            <div className="mt-8 space-y-5">
              {/* Phone */}

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MessageCircle className="size-5" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Direct Phone / WhatsApp
                  </p>

                  <div className="mt-1 flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <a
                      href={`tel:${primaryPhone.replace(/[^0-9]/g, "")}`}
                      className="transition-colors hover:text-primary"
                    >
                      {primaryPhone}
                    </a>

                    <span>•</span>

                    <a
                      href={`tel:${secondaryPhone.replace(/[^0-9]/g, "")}`}
                      className="transition-colors hover:text-primary"
                    >
                      {secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FileText className="size-5" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Official Email
                  </p>

                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              {/* Campus */}

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <User className="size-5" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Visit Wania Campus
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {site.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AdmissionInquiryForm />
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="pb-12">
        <CTABand
          title="Ready to secure your child's place?"
          text="Complete the inquiry above, call us on 0315-6220941, or visit Wania Campus on Sabowal Road, Gujrat."
        />
      </div>
    </>
  );
}