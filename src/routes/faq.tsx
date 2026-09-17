import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, HelpCircle, Phone, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "Frequently asked questions about The Future Montessori School: admissions, programs, scholarships, timings and more.",
      },
      { property: "og:title", content: `FAQ — ${site.name}` },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What class levels does the school offer?",
    answer:
      "The Future Montessori School offers three comprehensive levels: Montessori (Early Years: Playgroup, Nursery, Prep), Primary (Class 1 to 5), and Middle classes (Class 6 to 8) at Wania Campus, Sabowal Road, Gujrat.",
  },
  {
    question: "How do I apply for admission?",
    answer:
      "You can submit an admission inquiry on the Admissions page of this website, call the school office directly on 0315-6220941 / 0533-604611, email thefuturemontessori@gmail.com, or visit Wania Campus in person during school hours.",
  },
  {
    question: "Are scholarships and fee concessions available?",
    answer:
      "Yes. The school offers merit and need-based scholarships in five verified categories: test qualifying, orphan students, children of martyrs (shuhada), Hafiz-e-Quran students, and teachers' children. Contact the school to confirm current terms.",
  },
  {
    question: "What is the Montessori method in practice?",
    answer:
      "The Montessori method is a child-centred approach to education developed by Dr. Maria Montessori. It emphasizes hands-on, conceptual learning in a prepared environment, allowing children to progress at their natural pace under trained guidance.",
  },
  {
    question: "What subjects and spiritual education are taught?",
    answer:
      "Subjects include English, Urdu, Mathematics, General Science & Knowledge, Quranic Education (Nazra & Ahadees), Phonics, Creative Writing, conceptual worksheets, and Islamic moral studies — confirmed from the school's verified curriculum.",
  },
  {
    question: "Are extracurricular activities and sports offered?",
    answer:
      "Yes — the school offers martial arts (with formal belt ceremonies), annual edutainment excursions, talent shows (Futurian Stars), splash days, colour days, indoor recreation, and library reading periods.",
  },
  {
    question: "How are parents kept informed of student progress?",
    answer:
      "The school holds regular Parent-Teacher Meetings (PTMs) and parent training workshops. Parents can also follow real-time announcements, circulars, and event photo albums on the school's official Facebook page.",
  },
  {
    question: "Does the school provide free books or learning aid?",
    answer:
      "Yes — free books and materials are provided for deserving and scholarship-eligible students, as stated in the school's official admission materials. Speak to our admissions desk for criteria.",
  },
  {
    question: "Is there a student library?",
    answer:
      "Yes — the school features a free student library with curated reading materials in English and Urdu to encourage early literacy.",
  },
  {
    question: "Where is the campus located and what are the visiting hours?",
    answer:
      "The school is located at Wania Campus, Sabowal Road, Islam Nagar, Gujrat, Pakistan. Admissions staff are available during morning and afternoon school hours.",
  },
];

const faqHeroSlides = [
  images.campusSubjectsPoster,
  images.campusOutdoorGathering,
  images.admissionPoster02,
];

function AccordionItem({ faq, open, onToggle }: { faq: FAQ; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/80 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:text-primary"
        aria-expanded={open}
      >
        <span className="font-display text-lg sm:text-xl font-bold text-foreground pr-4">
          {faq.question}
        </span>
        <span className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
          open ? "bg-primary text-primary-foreground rotate-180" : "bg-secondary text-muted-foreground"
        )}>
          <ChevronDown className="size-4" />
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden text-base text-muted-foreground transition-all duration-300 leading-relaxed",
          open ? "mb-6 max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="pr-4">{faq.answer}</p>
      </div>
    </div>
  );
}

function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const phone = site.phones[0] ?? "0315-6220941";

  return (
    <>
      <PageHero
        eyebrow="Help & FAQ"
        badgeText="Frequently Asked Questions"
        title="Everything you need to know about joining our school"
        description="Clear answers regarding admissions, curriculums, scholarships, campus facilities, and day-to-day student life at The Future Montessori School, Gujrat."
        images={faqHeroSlides}
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
              <Link to="/contact">Contact School Desk</Link>
            </Button>
          </>
        }
      />

      <section className="section-y container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="surface-card p-8 rounded-3xl border border-border">
              <span className="badge-pill">Assistance</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
                Still have a question?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our admissions and academic advisory team will gladly assist you with any specific queries.
              </p>
              
              <div className="mt-8 space-y-3">
                <Button asChild className="w-full rounded-full shadow-crimson font-semibold">
                  <a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="inline-flex items-center justify-center gap-2">
                    <Phone className="size-4" />
                    <span>Call {phone}</span>
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full rounded-full font-semibold">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                    <Mail className="size-4" />
                    <span>Send a Message</span>
                  </Link>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
                <p>📍 {site.address.full}</p>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8 surface-card p-6 sm:p-10 rounded-3xl border border-border">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
