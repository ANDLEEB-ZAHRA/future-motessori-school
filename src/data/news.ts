import { images, type SchoolImage } from "./images";

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category: "Admissions" | "Events" | "Trips" | "Parents" | "Announcements";
  summary: string;
  body: string[];
  image: SchoolImage;
};

/**
 * Articles are based on the school's public Facebook posts and posters.
 * Undated items use the date the source was seen; edit freely.
 */
export const news: NewsArticle[] = [
  {
    slug: "admissions-open",
    title: "Admissions Open — Montessori, Primary & Middle",
    date: "2026-09-01",
    category: "Admissions",
    summary:
      "Enrol your child at Wania Campus, Sabowal Road, Gujrat. Scholarships are available for test-qualifying students, orphans, children of martyrs, Hafiz-e-Quran and teachers' children.",
    body: [
      "The Future Montessori School welcomes new students for Montessori, Primary and Middle classes at Wania Campus, Sabowal Road, Gujrat.",
      "The school offers scholarships in five categories: test qualifying, orphan, martyrs' children, Hafiz-e-Quran and teacher's child.",
      "To begin, submit an admission inquiry on our website, call the school, or visit the campus.",
    ],
    image: images.admissionOpenBanner,
  },
  {
    slug: "edutainment-trip",
    title: "Edutainment Trip — A Day of Learning Outdoors",
    date: "2021-12-21",
    category: "Trips",
    summary:
      "Students explored, played and learned together on the school's edutainment trip, crossing rope bridges and enjoying park rides.",
    body: [
      "On 21 December 2021 our students and teachers set off for an edutainment trip — a day designed to mix fun with learning outside the classroom.",
      "From rope bridges to the park train, the day was full of teamwork, courage and laughter.",
    ],
    image: images.tripRopeBridge01,
  },
  {
    slug: "parent-teacher-meeting",
    title: "Parent Teacher Meeting Held at Campus",
    date: "2021-08-02",
    category: "Parents",
    summary:
      "Parents and teachers came together to discuss each child's progress and how home and school can work hand in hand.",
    body: [
      "The school held a Parent Teacher Meeting on 2 August 2021. Parents met class teachers, reviewed work and discussed learning goals.",
      "Regular PTMs and parent training workshops are part of how the school keeps families actively involved in child development.",
    ],
    image: images.campusOutdoorGathering,
  },
  {
    slug: "futurian-stars",
    title: "Futurian Stars — Our Talent Show",
    date: "2021-11-15",
    category: "Events",
    summary:
      "Futurian Stars gives every child a stage. Performances, recitations and presentations celebrate the talents of our students.",
    body: [
      "Futurian Stars is the school's talent show, where students perform in front of classmates and families.",
      "Talent-based activities help children build confidence, stage presence and pride in their abilities.",
    ],
    image: images.admissionPoster01,
  },
];

export const formatNewsDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
