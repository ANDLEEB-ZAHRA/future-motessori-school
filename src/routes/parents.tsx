import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Heart, MessageCircle, Phone, Users, BookOpen } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { CTABand, PageHero, SectionHeading, TickList } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/parents")({
  head: () => ({
    meta: [
      { title: `Parents Corner — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "Guidance and resources for parents at The Future Montessori School: Mother Teacher Meetings, Parents Counseling, parent training workshops, Montessori at home tips, and how to stay in touch.",
      },
      { property: "og:title", content: `Parents Corner — ${site.name}` },
      { property: "og:url", content: "/parents" },
    ],
    links: [{ rel: "canonical", href: "/parents" }],
  }),
  component: ParentsPage,
});

const homeSupport = [
  "Read together every evening — 15 minutes of shared reading builds foundational vocabulary",
  "Ask open questions about their school day — what excited them, what new concept did they discover?",
  "Praise continuous effort and curiosity rather than just marks to build a resilient growth mindset",
  "Establish a consistent evening and morning routine for calm, productive school days",
  "Attend all term Mother Teacher Meetings (MTMs) to partner closely with teachers",
  "Follow the official school Facebook updates and circulars for key announcements",
  "Encourage active reading through the school's free student library",
  "Reach out to the school team early whenever you have questions or concerns",
];

const involvement = [
  {
    icon: Calendar,
    title: "Mother Teacher Meeting",
    text: "Held every term — a focused sit-down where all academic matters, classwork, and learning targets are discussed in detail with your child's class teacher.",
  },
  {
    icon: Users,
    title: "Parent Training Workshops",
    text: "Specialized workshops designed to help parents practice Montessori methods and positive reinforcement techniques at home.",
  },
  {
    icon: MessageCircle,
    title: "Parents Counseling",
    text: "A dedicated space where parents' opinions and suggestions for their child's betterment are heard — and acted upon wherever applicable.",
  },
  {
    icon: Heart,
    title: "Community Partnership",
    text: "We value parental feedback and collaborative events that enrich the school atmosphere and support every child's character.",
  },
];

const mtmDiscussionPoints = [
  "Subject-wise academic progress and classwork review for the term",
  "Learning targets and how your child is progressing toward them",
  "Reading, writing and numeracy milestones",
  "Personalized strategies to reinforce classroom learning at home",
];

const parentsHeroSlides = [
  images.campusOutdoorGathering,
  images.motherTeacherMeeting,
  images.parentsCounseling,
  images.studentsOutdoorReading,
];

function ParentsPage() {
  const phone = site.phones[0] ?? "0315-6220941";

  return (
    <>
      <PageHero
        eyebrow="Parents Corner"
        badgeText="Home & School Partnership"
        title="True partners in nurturing your child's highest potential"
        description="At The Future Montessori School, the greatest outcomes happen when family and school work in close harmony. Here are resources, guidance, and communication channels for our parents."
        images={parentsHeroSlides}
        actions={
          <>
            <Button asChild size="lg" className="rounded-full shadow-crimson px-7 font-semibold">
              <Link to="/contact" className="inline-flex items-center gap-2">
                <span>Connect With School</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-accent hover:border-primary/40 px-7 font-semibold"
            >
              <Link to="/montessori">Montessori Method at Home</Link>
            </Button>
          </>
        }
      />

      {/* How parents are involved */}
      <section className="section-y container-x">
        <SectionHeading
          eyebrow="Collaborative growth"
          title="How we work together with families"
          description="Active engagement through regular meetings, counseling, workshops, and open communication."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {involvement.map((item) => (
            <div key={item.title} className="surface-card surface-card-hover p-7 rounded-3xl border border-border flex flex-col justify-between">
              <div>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-border/60 text-xs font-semibold text-primary">
                School Partnership
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mother Teacher Meeting */}
      <section className="surface-cream py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Academic Partnership"
                title="Mother Teacher Meeting"
                description="A dedicated, focused meeting held every term where all academic matters are discussed in detail with your child's class teacher."
              />
              <div className="mt-8">
                <TickList columns={1} items={mtmDiscussionPoints} />
              </div>
            </div>
            <div className="lg:col-span-5 overflow-hidden rounded-3xl shadow-lift border border-border group bg-secondary/20">
              <img
                src={images.parentsCounselingGroup.src}
                alt={images.parentsCounselingGroup.alt}
                loading="lazy"
                className="w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parents Counseling */}
      <section className="section-y container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 overflow-hidden rounded-3xl shadow-lift border border-border group bg-secondary/20">
            <img
              src={images.parentsCounseling.src}
              alt={images.parentsCounseling.alt}
              loading="lazy"
              className="w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-103"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="badge-pill">Child Wellbeing</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Parents Counseling
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                We believe every parent's voice matters. Our Parents Counseling sessions create a
                safe, open space where mothers and fathers can share their observations, concerns,
                and suggestions for their child's betterment.
              </p>
              <p>
                Wherever a suggestion is practical and applicable, our team works closely with
                parents to put it into action — because the best outcomes for a child come from
                genuine collaboration between home and school.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
                <img
                  src={images.parentsCounselingGroup.src}
                  alt={images.parentsCounselingGroup.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
                <img
                  src={images.motherTeacherMeeting.src}
                  alt={images.motherTeacherMeeting.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home support */}
      <section className="surface-cream py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Everyday support"
                title="Practical ways to help your child thrive at home"
                description="Consistent small habits make a profound difference to children's confidence and emotional resilience."
              />
              <div className="mt-8">
                <TickList columns={1} items={homeSupport} />
              </div>
            </div>
            <div className="lg:col-span-5 overflow-hidden rounded-3xl shadow-lift border border-border group bg-secondary/20">
              <img
                src={images.studentsParkOuting.src}
                alt={images.studentsParkOuting.alt}
                loading="lazy"
                className="w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Montessori at home */}
      <section className="section-y container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 overflow-hidden rounded-3xl shadow-lift border border-border group bg-secondary/20">
            <img
              src={images.studentsOutdoorReading.src}
              alt={images.studentsOutdoorReading.alt}
              loading="lazy"
              className="w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-103"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="badge-pill">Montessori Philosophy</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Bringing the Montessori spirit into your home
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                The Montessori approach is a holistic philosophy for life. Its principles of independence, respect, and order can be naturally applied within the home environment.
              </p>
              <p>
                Encouraging children with everyday responsibilities — such as organizing their bookshelf, dressing themselves, and helping set meals — develops fine motor skills, self-discipline, and deep confidence.
              </p>
              <p>
                Our regular parent workshops provide actionable tips tailored for each age stage from Toddler to Middle school.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full shadow-crimson px-7 font-semibold">
                <Link to="/montessori" className="inline-flex items-center gap-2">
                  <span>Explore the Montessori Method</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="surface-cream py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Open Door Policy"
            title="We are here to support you"
            description="Our admin and teaching faculty are always available to assist parents with questions or feedback."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <a
              href={`tel:${phone.replace(/[^0-9]/g, "")}`}
              className="surface-card surface-card-hover flex flex-col items-center gap-3 p-8 text-center rounded-3xl border border-border"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="size-7" />
              </span>
              <span className="font-display text-lg font-bold text-foreground">Direct Call</span>
              <span className="text-sm font-semibold text-primary">{phone}</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="surface-card surface-card-hover flex flex-col items-center gap-3 p-8 text-center rounded-3xl border border-border"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MessageCircle className="size-7" />
              </span>
              <span className="font-display text-lg font-bold text-foreground">Official Email</span>
              <span className="text-sm text-muted-foreground break-all">{site.email}</span>
            </a>
            <Link
              to="/contact"
              className="surface-card surface-card-hover flex flex-col items-center gap-3 p-8 text-center rounded-3xl border border-border"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <BookOpen className="size-7" />
              </span>
              <span className="font-display text-lg font-bold text-foreground">Campus Desk</span>
              <span className="text-sm text-muted-foreground">Send an online inquiry</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="py-12">
        <CTABand
          title="Looking for a school that values family partnership?"
          text="Admissions are open for Montessori, Primary and Middle classes at Wania Campus, Gujrat."
        />
      </div>
    </>
  );
}