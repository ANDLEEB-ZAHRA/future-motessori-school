import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Layers,
  Maximize2,
  Sparkles,
  X,
  ZoomIn,
} from "lucide-react";

import { site } from "@/data/site";
import { images, type SchoolImage } from "@/data/images";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: `Photo Gallery — ${site.name}, Gujrat`,
      },
      {
        name: "description",
        content:
          "Official photographic showcase of The Future Montessori School, Wania Campus, Gujrat. Explore campus life, educational trips, martial arts, celebrations, and student activities.",
      },
      {
        property: "og:title",
        content: `Gallery — ${site.name}`,
      },
      {
        property: "og:description",
        content:
          "Authentic school photographs from The Future Montessori School, Wania Campus, Gujrat.",
      },
      {
        property: "og:url",
        content: "/gallery",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/gallery",
      },
    ],
  }),

  component: GalleryPage,
});

type Album = {
  slug: string;
  name: string;
  description: string;
  photos: SchoolImage[];
};

const albums: Album[] = [
  {
    slug: "all",
    name: "All Photographs",
    description:
      "Complete authentic photographic record of life at Wania Campus.",
    photos: Object.values(images).filter(
      (img): img is SchoolImage =>
        typeof img === "object" &&
        img !== null &&
        "src" in img &&
        img.src !== images.logo.src,
    ),
  },

  {
    slug: "campus",
    name: "Campus & Classrooms",
    description:
      "Learning environments, outdoor reading sessions, and student gatherings.",
    photos: [
      images.studentsOutdoorReading,
      images.campusOutdoorGathering,
      images.campusSubjectsPoster,
      images.studentSnackTime,
    ],
  },

  {
    slug: "trips",
    name: "Edutainment Trips",
    description:
      "Experiential excursions, rope bridges, train rides, and outdoor adventures.",
    photos: [
      images.studentsParkOuting,
      images.edutainmentTripTrain,
      images.tripRopeBridge01,
      images.tripRopeBridge02,
      images.tripRopeBridge03,
      images.tripRockWall,
      images.edutainmentTripRide,
    ],
  },

  {
    slug: "sports",
    name: "Martial Arts & Sports",
    description:
      "Belt ceremonies, team practice, self-defense, and fitness training.",
    photos: [
      images.martialArtsTeam01,
      images.martialArtsTeam02,
      images.martialArtsBeltCeremony,
    ],
  },

  {
    slug: "events",
    name: "Events & Celebrations",
    description:
      "Annual celebrations, gift pack distributions, and academic milestones.",
    photos: [
      images.giftPacksPrizes,
      images.admissionPoster01,
      images.admissionPoster02,
      images.admissionOpenBanner,
    ],
  },
];

function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  /*
   * Find the selected album safely.
   * If something unexpected happens, fall back to the first album.
   */
  const currentAlbum = albums.find(
    (album) => album.slug === activeAlbum,
  ) ?? albums[0];

  /*
   * Because albums is a fixed non-empty array, this is safe.
   * The fallback also keeps TypeScript happy if strict checking is enabled.
   */
  const currentPhotos: SchoolImage[] = currentAlbum?.photos ?? [];

  /*
   * Important:
   * Do not directly use currentPhotos[0].
   * With noUncheckedIndexedAccess enabled, TypeScript considers it possibly undefined.
   */
  const featuredPhoto = currentPhotos[0];

  /*
   * Same safety principle for the lightbox image.
   */
  const activeLightboxPhoto =
    lightboxIndex !== null
      ? currentPhotos[lightboxIndex]
      : undefined;

  /*
   * Close lightbox.
   */
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  /*
   * Next photo.
   */
  const showNextPhoto = useCallback(() => {
    if (currentPhotos.length === 0) {
      return;
    }

    setLightboxIndex((previous) => {
      if (previous === null) {
        return 0;
      }

      return (previous + 1) % currentPhotos.length;
    });
  }, [currentPhotos.length]);

  /*
   * Previous photo.
   */
  const showPreviousPhoto = useCallback(() => {
    if (currentPhotos.length === 0) {
      return;
    }

    setLightboxIndex((previous) => {
      if (previous === null) {
        return 0;
      }

      return (
        (previous - 1 + currentPhotos.length) %
        currentPhotos.length
      );
    });
  }, [currentPhotos.length]);

  /*
   * Keyboard controls:
   * Escape = close
   * Arrow Left = previous
   * Arrow Right = next
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) {
        return;
      }

      if (event.key === "Escape") {
        closeLightbox();
        return;
      }

      if (event.key === "ArrowRight") {
        showNextPhoto();
        return;
      }

      if (event.key === "ArrowLeft") {
        showPreviousPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    lightboxIndex,
    closeLightbox,
    showNextPhoto,
    showPreviousPhoto,
  ]);

  /*
   * Disable page scrolling while fullscreen gallery is open.
   */
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  /*
   * Change album.
   */
  const changeAlbum = (slug: string) => {
    setActiveAlbum(slug);
    setLightboxIndex(null);
  };

  return (
    <>
      {/* =========================================================
          PAGE HERO
      ========================================================== */}

      <PageHero
        eyebrow="School Photo Archives"
        badgeText="Authentic Campus Life"
        title="Visual moments of joy, discovery and growth"
        description="Every authentic photograph reflects moments of joyful discovery, student friendships, martial arts discipline, and character building at Wania Campus, Gujrat."
        images={[
          images.campusOutdoorGathering,
          images.studentsParkOuting,
          images.martialArtsTeam02,
          images.tripRopeBridge01,
        ]}
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
              <a href={site.facebook} target="_blank" rel="noreferrer">
                Facebook Albums
              </a>
            </Button>
          </>
        }
      />

      {/* =========================================================
          MAIN GALLERY
      ========================================================== */}

      <section className="section-y container-x">
        {/* Album Header */}

        <div className="flex flex-col gap-6 border-b border-border/70 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <Camera className="size-4" />
              <span>Browse Albums</span>
            </div>

            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Explore our school moments
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {currentAlbum?.description}
            </p>
          </div>

          {/* Album Tabs */}

          <div className="flex max-w-full flex-wrap gap-2">
            {albums.map((album) => {
              const isActive = activeAlbum === album.slug;

              return (
                <button
                  key={album.slug}
                  type="button"
                  onClick={() => changeAlbum(album.slug)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-lg"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:bg-accent hover:text-foreground",
                  )}
                >
                  <span>{album.name}</span>

                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {album.photos.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            FEATURED IMAGE
        ======================================================== */}

        {featuredPhoto && (
          <div className="group relative mt-8 overflow-hidden rounded-3xl border border-border/50 bg-black shadow-xl">
            <div className="relative aspect-[21/9] min-h-[280px] w-full overflow-hidden sm:min-h-[360px] lg:min-h-[430px]">
              <img
                src={featuredPhoto.src}
                alt={featuredPhoto.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              {/* Dark gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Featured content */}

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl text-white">
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-xs">
                      <Sparkles className="size-3.5" />
                      Featured Moment
                    </span>

                    <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
                      {featuredPhoto.alt}
                    </h3>

                    <p className="mt-2 text-xs text-white/70 sm:text-sm">
                      The Future Montessori School • Wania Campus, Gujrat
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxIndex(0)}
                    className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:self-auto"
                  >
                    <Maximize2 className="size-4" />
                    Full View
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =======================================================
            PHOTO GRID
        ======================================================== */}

        {currentPhotos.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {currentPhotos.map((photo, index) => (
              <button
                key={`${photo.src}-${index}`}
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View photo: ${photo.alt}`}
                className="group overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {/* Image */}

                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  {/* Hover overlay */}

                  <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex justify-end">
                      <span className="flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                        <ZoomIn className="size-4" />
                      </span>
                    </div>

                    <div>
                      <span className="mb-1 inline-block rounded-full bg-primary px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                        {currentAlbum?.name}
                      </span>

                      <p className="line-clamp-2 text-xs font-medium text-white">
                        {photo.alt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Caption */}

                <div className="flex items-center justify-between gap-3 border-t border-border/50 px-4 py-3">
                  <p className="truncate text-xs font-semibold text-foreground">
                    {photo.alt}
                  </p>

                  <span className="shrink-0 text-[10px] font-bold text-muted-foreground">
                    {index + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* Empty state */

          <div className="mt-8 rounded-3xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center">
            <Layers className="mx-auto size-10 text-muted-foreground" />

            <h3 className="mt-4 font-display text-xl font-bold">
              No photographs available
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              There are currently no photographs in this album.
            </p>
          </div>
        )}
      </section>

      {/* =========================================================
          FULL SCREEN LIGHTBOX
      ========================================================== */}

      {lightboxIndex !== null && activeLightboxPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen photo viewer"
          onClick={closeLightbox}
        >
          {/* Top Controls */}

          <div
            className="absolute inset-x-3 top-3 z-[110] flex items-center justify-between sm:inset-x-6 sm:top-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                Photo {lightboxIndex + 1} of {currentPhotos.length}
              </span>

              <span className="hidden rounded-full bg-white/10 px-3 py-2 text-xs text-white/70 backdrop-blur-md sm:inline-flex">
                ← → Navigate
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close photo viewer"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Previous */}

          {currentPhotos.length > 1 && (
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousPhoto();
              }}
              className="absolute left-3 top-1/2 z-[110] flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:left-6 sm:size-12"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          {/* Next */}

          {currentPhotos.length > 1 && (
            <button
              type="button"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                showNextPhoto();
              }}
              className="absolute right-3 top-1/2 z-[110] flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:right-6 sm:size-12"
            >
              <ChevronRight className="size-6" />
            </button>
          )}

          {/* Main Image */}

          <div
            className="relative flex max-h-[88vh] max-w-[92vw] items-center justify-center overflow-hidden rounded-2xl shadow-2xl sm:max-w-[88vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeLightboxPhoto.src}
              alt={activeLightboxPhoto.alt}
              className="max-h-[82vh] max-w-[92vw] rounded-2xl object-contain sm:max-w-[86vw]"
            />

            {/* Caption */}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pb-4 pt-12 text-center text-white sm:px-6 sm:pb-6">
              <p className="mx-auto max-w-3xl text-sm font-semibold sm:text-base">
                {activeLightboxPhoto.alt}
              </p>

              <p className="mt-1 text-xs text-white/65">
                The Future Montessori School • Wania Campus, Gujrat
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          FACEBOOK / ADMISSIONS CTA
      ========================================================== */}

      <section className="surface-cream">
        <div className="section-y container-x text-center">
          <SectionHeading
            align="center"
            eyebrow="Connect & Explore"
            title="Follow our daily campus moments"
            description="Our faculty and management regularly share photo highlights, student activities, celebrations, talent presentations, and school announcements."
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 font-semibold shadow-lg"
            >
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2"
              >
                <span>Visit Official Facebook Page</span>
                <ArrowRight className="size-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card px-7 font-semibold"
            >
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}