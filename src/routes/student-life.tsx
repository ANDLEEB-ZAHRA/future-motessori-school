import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Heart, BookOpen, Shield, Phone, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { offerings, learningTargets } from "@/data/programs";
import { CTABand, PageHero, SectionHeading, TickList } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: `Student Life — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "A day at The Future Montessori School: caring teachers, activity-based learning, sports, edutainment trips, splash days, parent-teacher meetings and more.",
      },
      { property: "og:title", content: `Student Life — ${site.name}` },
      {
        property: "og:description",
        content: "Student life at TFMS Wania Campus, Gujrat — more than just academics.",
      },
      { property: "og:url", content: "/student-life" },
    ],
    links: [{ rel: "canonical", href: "/student-life" }],
  }),
  component: StudentLifePage,
});

const pillars = [
  {
    icon: BookOpen,
    title: "Learning every day",
    text: "Activity-based and conceptual learning makes school an exciting place to grow. Montessori methods, phonics, worksheets, and hands-on exploration blend seamlessly.",
  },
  {
    icon: Heart,
    title: "A caring community",
    text: "Qualified and experienced teachers know each child by name. The school prioritises a friendly, safe, and nurturing environment above all.",
  },
  {
    icon: Users,
    title: "Family involvement",
    text: "Regular parent-teacher meetings and parent training workshops ensure families are always active partners in the learning journey.",
  },
  {
    icon: Shield,
    title: "Character & moral values",
    text: "Ahadees, Quranic education, ethical training, and courtesy give children a strong sense of purpose and identity alongside academic progress.",
  },
];

const studentLifeHeroSlides = [
  images.studentsParkOuting,
  images.martialArtsTeam01,
  images.edutainmentTripRide,
  images.tripRopeBridge01,
];

function StudentLifePage() {
  const phone = site.phones[0] ?? "0315-6220941";

  return (
    <>
      <PageHero
        eyebrow="Student Life & Culture"
        badgeText="Vibrant Campus Community"
        title="More than a classroom: a place of joy, friendship and growth"
        description="At The Future Montessori School, every child belongs to a warm, active community. School life is full of discovery, creativity, friendships, and celebrations that shape lasting memories."
        images={studentLifeHeroSlides}
        actions={
          <>
            <Button asChild size="lg" className="rounded-full shadow-crimson px-7 font-semibold">
              <Link to="/activities" className="inline-flex items-center gap-2">
                <span>View Activities & Sports</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-accent hover:border-primary/40 px-7 font-semibold"
            >
              <Link to="/gallery">Photo Gallery</Link>
            </Button>
          </>
        }
      />

      {/* Pillars */}
      <section className="section-y container-x">
        <SectionHeading
          eyebrow="Our approach"
          title="What makes life at TFMS special"
          description="Four pillars that define the daily student experience at Wania Campus."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="surface-card surface-card-hover p-7 rounded-3xl border border-border flex flex-col justify-between">
              <div>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-border/60 text-xs font-semibold text-primary">
                Daily Student Experience
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What we offer */}
      <section className="surface-cream py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Campus offerings"
                title="Everything your child needs to thrive"
                description="Verified from the school's own curriculum posters — authentic facilities and opportunities available for all students."
              />
              <div className="mt-8">
                <TickList columns={2} items={offerings} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-soft border border-border group bg-secondary/20">
                <img
                  src={images.studentsOutdoorReading.src}
                  alt={images.studentsOutdoorReading.alt}
                  width={images.studentsOutdoorReading.width}
                  height={images.studentsOutdoorReading.height}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: images.studentsOutdoorReading.aspectRatio }}
                  className="h-48 w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft border border-border group bg-secondary/20">
                <img
                  src={images.studentSnackTime.src}
                  alt={images.studentSnackTime.alt}
                  width={images.studentSnackTime.width}
                  height={images.studentSnackTime.height}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: images.studentSnackTime.aspectRatio }}
                  className="h-48 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft border border-border col-span-2 group bg-secondary/20">
                <img
                  src={images.campusOutdoorGathering.src}
                  alt={images.campusOutdoorGathering.alt}
                  width={images.campusOutdoorGathering.width}
                  height={images.campusOutdoorGathering.height}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: images.campusOutdoorGathering.aspectRatio }}
                  className="h-52 w-full object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning targets & trips */}
      <section className="section-y container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-last lg:order-first grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-soft border border-border col-span-2 group bg-secondary/20">
              <img
                src={images.tripRopeBridge02.src}
                alt={images.tripRopeBridge02.alt}
                width={images.tripRopeBridge02.width}
                height={images.tripRopeBridge02.height}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: images.tripRopeBridge02.aspectRatio }}
                className="h-52 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-soft border border-border group bg-secondary/20">
              <img
                src={images.edutainmentTripTrain.src}
                alt={images.edutainmentTripTrain.alt}
                width={images.edutainmentTripTrain.width}
                height={images.edutainmentTripTrain.height}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: images.edutainmentTripTrain.aspectRatio }}
                className="h-48 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-soft border border-border group bg-secondary/20">
              <img
                src={images.edutainmentTripRide.src}
                alt={images.edutainmentTripRide.alt}
                width={images.edutainmentTripRide.width}
                height={images.edutainmentTripRide.height}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: images.edutainmentTripRide.aspectRatio }}
                className="h-48 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Main learning targets"
              title="Skills every TFMS student builds"
              description="The school's curriculum is structured around these core learning objectives."
            />
            <div className="mt-8">
              <TickList columns={1} items={learningTargets} />
            </div>
          </div>
        </div>
      </section>

      {/* Activities teaser */}
      <section className="surface-cream py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 overflow-hidden rounded-3xl shadow-soft border border-border group bg-secondary/20">
              <img
                src={images.martialArtsTeam01.src}
                alt={images.martialArtsTeam01.alt}
                width={images.martialArtsTeam01.width}
                height={images.martialArtsTeam01.height}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: images.martialArtsTeam01.aspectRatio }}
                className="h-80 w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="badge-pill">Beyond the classroom</span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Activities, trips & martial arts
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                From martial arts belt ceremonies to edutainment trips, talent shows, splash days, and sports competitions — school life at TFMS creates well-rounded individuals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full shadow-crimson px-6 font-semibold">
                  <Link to="/activities" className="inline-flex items-center gap-2">
                    <span>View Activities</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6 font-semibold">
                  <Link to="/events">See Events</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit section */}
      <section className="section-y container-x">
        <SectionHeading
          align="center"
          eyebrow="Come and see"
          title="Visit the school and feel the difference"
          description="The best way to experience student life at TFMS is to visit in person. Call to arrange a friendly campus tour."
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full shadow-crimson px-8 font-semibold">
            <Link to="/admissions" className="inline-flex items-center gap-2">
              <span>Start an Inquiry</span>
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7 font-semibold">
            <a href={`tel:${phone.replace(/[^0-9]/g, "")}`}>
              <Phone className="mr-2 size-4" />
              Call {phone}
            </a>
          </Button>
        </div>
      </section>

      <div className="pb-12">
        <CTABand
          title="Give your child an extraordinary school life"
          text="Open admissions for Montessori, Primary and Middle. Scholarships available."
        />
      </div>
    </>
  );
}
