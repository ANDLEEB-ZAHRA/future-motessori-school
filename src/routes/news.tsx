import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Tag, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { news, formatNewsDate } from "@/data/news";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: `News & Announcements — ${site.name}, Gujrat` },
      {
        name: "description",
        content:
          "Latest news and announcements from The Future Montessori School: admissions, events, trips, parent-teacher meetings and more.",
      },
      { property: "og:title", content: `News — ${site.name}` },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const categoryColour: Record<string, string> = {
  Admissions: "bg-primary/10 text-primary border-primary/20",
  Events: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300",
  Trips: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300",
  Parents: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300",
  Announcements: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300",
};

const newsHeroSlides = [
  images.admissionOpenBanner,
  images.giftPacksPrizes,
  images.campusSubjectsPoster,
];

function NewsPage() {
  return (
    <>
      {/* hero ki tamam images ab left side se align hongi */}
      <div className="[&_img]:object-left [&_img]:object-cover">
        <PageHero
          eyebrow="News & Announcements"
          badgeText="Official School Updates"
          title="Stay connected with the latest news from campus"
          description="Official updates, term announcements, admission notifications, and event milestones from The Future Montessori School, Wania Campus, Gujrat."
          images={newsHeroSlides}
          actions={
            <>
              <Button asChild size="lg" className="rounded-full shadow-crimson px-7 font-semibold">
                <Link to="/admissions" className="inline-flex items-center gap-2">
                  <span>Admissions Notice</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-card/80 text-foreground hover:bg-accent hover:border-primary/40 px-7 font-semibold"
              >
                <a href={site.facebook} target="_blank" rel="noreferrer">
                  Facebook Updates
                </a>
              </Button>
            </>
          }
        />
      </div>

      <section className="section-y container-x">
        <SectionHeading
          eyebrow="Notice Board"
          title="Recent school updates & announcements"
          description="Keep track of key dates, registration deadlines, and campus activities."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {news.map((article, i) => (
            <article
              key={article.slug}
              className={cn(
                "surface-card surface-card-hover group overflow-hidden rounded-3xl border border-border flex flex-col justify-between",
                i === 0 && "sm:col-span-2",
              )}
            >
              {i === 0 ? (
                /* Featured article */
                <div className="grid gap-0 lg:grid-cols-12 lg:items-stretch">
                  <div className="lg:col-span-6 overflow-hidden bg-secondary/30 min-h-[300px] lg:min-h-[420px]">
                    <img
                      src={article.image.src}
                      alt={article.image.alt}
                      loading="eager"
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
                  <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold",
                          categoryColour[article.category] ?? "bg-secondary text-foreground",
                        )}
                      >
                        <Tag className="size-3" />
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Calendar className="size-3.5 text-primary" />
                        {formatNewsDate(article.date)}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">{article.title}</h2>
                    <p className="mt-3 text-base text-muted-foreground leading-relaxed">{article.summary}</p>
                    {article.body.map((para, pi) => (
                      <p key={pi} className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary">Featured Notice</span>
                      <Button asChild variant="ghost" size="sm" className="font-semibold text-primary hover:text-primary">
                        <Link to="/admissions" className="inline-flex items-center gap-1.5">
                          <span>Apply for Admission</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular card */
                <>
                  <div>
                    <div className="overflow-hidden bg-secondary/30">
                      <img
                        src={article.image.src}
                        alt={article.image.alt}
                        loading="lazy"
                        className="h-56 w-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold",
                            categoryColour[article.category] ?? "bg-secondary text-foreground",
                          )}
                        >
                          <Tag className="size-3" />
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                          <Calendar className="size-3.5 text-primary" />
                          {formatNewsDate(article.date)}
                        </span>
                      </div>
                      <h2 className="mt-4 font-display text-xl font-bold text-foreground">{article.title}</h2>
                      <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7 border-t border-border/60 mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Wania Campus</span>
                    <span className="text-primary font-semibold">Gujrat</span>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="surface-cream py-16 sm:py-20">
        <div className="container-x text-center">
          <SectionHeading
            align="center"
            eyebrow="Community Channel"
            title="More real-time updates on Facebook"
            description="Our school regularly shares photo albums, announcements, and classroom highlights on its official page."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-crimson px-8 font-semibold">
              <a href={site.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <span>Visit Facebook Page</span>
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 font-semibold">
              <Link to="/admissions">Admissions Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}