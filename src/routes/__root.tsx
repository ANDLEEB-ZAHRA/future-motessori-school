import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { BackToTop } from "@/components/site/ui";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl font-semibold text-primary">404</p>

        <h1 className="mt-4 text-2xl font-semibold">
          This page could not be found
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          The page may have moved. Try the home page, or get in touch with the
          school office.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-input px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },

        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, viewport-fit=cover",
        },

        {
          title: `${site.name} — ${site.motto} | Gujrat, Pakistan`,
        },

        {
          name: "description",
          content: `${site.name}, ${site.address.full}. Premier Montessori, Primary and Middle education fostering Innovation, Creativity, and Leadership.`,
        },

        {
          name: "author",
          content: site.name,
        },

        {
          property: "og:site_name",
          content: site.name,
        },

        {
          property: "og:title",
          content: `${site.name} — ${site.motto}`,
        },

        {
          property: "og:description",
          content: `${site.name} at ${site.address.campus}, ${site.address.city}. Activity-based learning, well-qualified faculty, and character development.`,
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:image",
          content: "/images/logo/school-logo.jpg",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content: `${site.name} — ${site.motto}`,
        },

        {
          name: "twitter:description",
          content: `${site.name}, Gujrat. Montessori, Primary & Middle classes. Grow with Knowledge.`,
        },

        {
          name: "twitter:image",
          content: "/images/logo/school-logo.jpg",
        },

        {
          name: "theme-color",
          content: "#0d6537",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },

        {
          rel: "icon",
          href: "/images/logo/school-logo.jpg",
          type: "image/jpeg",
        },

        {
          rel: "apple-touch-icon",
          href: "/images/logo/school-logo.jpg",
        },

        /*
         * Google Fonts:
         * Preconnect lets the browser establish the connection early.
         */
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap",
        },

        /*
         * Improve perceived loading of the school's main logo.
         */
        {
          rel: "preload",
          as: "image",
          href: "/images/logo/school-logo.jpg",
          type: "image/jpeg",
        },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: site.name,
            slogan: site.motto,
            email: site.email,
            telephone: site.phones,
            image: "/images/logo/school-logo.jpg",
            sameAs: [site.facebook],
            address: {
              "@type": "PostalAddress",
              streetAddress: `${site.address.campus}, ${site.address.street}`,
              addressLocality: site.address.city,
              addressCountry: "PK",
            },
          }),
        },
      ],
    }),

    shellComponent: RootShell,

    component: RootComponent,

    notFoundComponent: NotFoundComponent,

    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Outlet />
      </main>

      <SiteFooter />

      <BackToTop />

      <Toaster />
    </QueryClientProvider>
  );
}