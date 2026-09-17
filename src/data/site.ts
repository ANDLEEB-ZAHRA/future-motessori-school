/**
 * Verified school information.
 * Sources: the school's Facebook page and its own admission posters.
 * Anything not confirmed is left out or marked as a placeholder.
 */
export const site = {
  name: "The Future Montessori School",
  shortName: "TFMS",
  tagline: "Building Confident Minds for a Brighter Future",
  levels: "Montessori • Primary • Middle",
  motto: "Grow with Knowledge",
  values: ["Innovation", "Creativity", "Leadership"],
  address: {
    campus: "Wania Campus",
    street: "Sabowal Road",
    area: "Islam Nagar",
    city: "Gujrat",
    country: "Pakistan",
    full: "Wania Campus, Sabowal Road, Islam Nagar, Gujrat, Pakistan",
  },
  email: "thefuturemontessori@gmail.com",
  phones: ["0315-6220941", "0533-604611"],
  facebook: "https://www.facebook.com/thefuturemontessorischool",
  /** Google Maps search link — no exact pin verified, so we link to a search. */
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sabowal+Road+Gujrat+Pakistan",
  /** Set to true and paste an exact embed URL once the pin is verified. */
  mapEmbedUrl: null as string | null,
  announcement: "Admissions are open for Montessori, Primary and Middle classes.",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about", description: "Our story, mission and values" },
      {
        label: "Montessori Education",
        to: "/montessori",
        description: "How the Montessori method works",
      },
      { label: "FAQ", to: "/faq", description: "Answers to common questions" },
    ],
  },
  {
    label: "Academics",
    to: "/academics",
    children: [
      { label: "Academics", to: "/academics", description: "Montessori, Primary and Middle" },
      { label: "Programs", to: "/programs", description: "Our class programs at a glance" },
    ],
  },
  { label: "Admissions", to: "/admissions" },
  {
    label: "Student Life",
    to: "/student-life",
    children: [
      { label: "Student Life", to: "/student-life", description: "A day at the school" },
      { label: "Activities", to: "/activities", description: "Sports, arts, trips and more" },
      { label: "Events", to: "/events", description: "Celebrations and school events" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  {
    label: "News",
    to: "/news",
    children: [
      { label: "News & Announcements", to: "/news", description: "Latest from the school" },
      { label: "Parents Corner", to: "/parents", description: "Guidance and notices for parents" },
    ],
  },
  { label: "Contact", to: "/contact" },
] as const;

export const footerLinks = {
  quick: [
    { label: "About Us", to: "/about" },
    { label: "Admissions", to: "/admissions" },
    { label: "Student Life", to: "/student-life" },
    { label: "Gallery", to: "/gallery" },
    { label: "News", to: "/news" },
    { label: "Parents Corner", to: "/parents" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ],
  programs: [
    { label: "Montessori", to: "/programs" },
    { label: "Primary", to: "/programs" },
    { label: "Middle", to: "/programs" },
    { label: "Academics", to: "/academics" },
    { label: "Activities", to: "/activities" },
    { label: "Events", to: "/events" },
  ],
} as const;
