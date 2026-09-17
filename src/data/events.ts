import { images, type SchoolImage } from "./images";

export type SchoolEvent = {
  slug: string;
  title: string;
  /** ISO date. */
  date: string;
  category: "Trip" | "Meeting" | "Show" | "Sports" | "Celebration";
  summary: string;
  image: SchoolImage;
  /** Marked true for entries that are known from the school's Facebook page. */
  verified: boolean;
};

/**
 * Dated events come from the school's Facebook page.
 * Undated activities are shown without a specific date rather than an invented one.
 */
export const events: SchoolEvent[] = [
  {
    slug: "edutainment-trip-2021",
    title: "Edutainment Trip",
    date: "2021-12-21",
    category: "Trip",
    summary:
      "Students and teachers spent a joyful day outdoors — rope bridges, park rides and a train ride full of laughter and learning.",
    image: images.tripRopeBridge03,
    verified: true,
  },
  {
    slug: "parent-teacher-meeting-2021",
    title: "Parent Teacher Meeting",
    date: "2021-08-02",
    category: "Meeting",
    summary:
      "Parents met class teachers to review progress, discuss learning goals and strengthen the home–school partnership.",
    image: images.campusOutdoorGathering,
    verified: true,
  },
  {
    slug: "futurian-stars-talent-show",
    title: "Talent Show — Futurian Stars",
    date: "",
    category: "Show",
    summary:
      "Our students take the stage to sing, recite, perform and present in front of proud families.",
    image: images.admissionPoster01,
    verified: true,
  },
  {
    slug: "martial-arts-belt-ceremony",
    title: "Martial Arts Belt Ceremony",
    date: "",
    category: "Sports",
    summary:
      "Students received their belts from the coach in recognition of discipline, effort and progress.",
    image: images.martialArtsBeltCeremony,
    verified: true,
  },
];

export const formatEventDate = (iso: string) =>
  iso
    ? new Date(iso + "T00:00:00").toLocaleDateString("en-PK", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Date to be announced";
