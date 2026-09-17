import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items =
    active === "All"
      ? galleryItems
      : galleryItems.filter((i) => (i.categories as string[]).includes(active));

  const current = index === null ? undefined : items[index];

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setActive(c);
              setIndex(null);
            }}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            className="img-zoom group block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft"
          >
            <img
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              style={{ aspectRatio: item.image.aspectRatio }}
              className="w-full object-cover"
            />
            <span className="block px-4 py-3 text-sm text-muted-foreground">{item.caption}</span>
          </button>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground"
          >
            <X />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
            }}
            className="absolute left-3 flex size-11 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i + 1) % items.length));
            }}
            className="absolute right-3 flex size-11 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground"
          >
            <ChevronRight />
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.image.src}
              alt={current.image.alt}
              className="mx-auto max-h-[78vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-ink-muted">
              {current.caption} — {index! + 1} / {items.length}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
