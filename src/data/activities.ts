import { images, type SchoolImage } from "./images";
import type { LucideIcon } from "lucide-react";
import {
  Bus,
  Sparkles,
  Swords,
  Users,
  BookOpen,
  PartyPopper,
  Gift,
  Palette,
} from "lucide-react";

export type Activity = {
  slug: string;
  title: string;
  description: string;
  image: SchoolImage;
  icon: LucideIcon;
};

/** Only activities evidenced by the school's own media and posts. */
export const activities: Activity[] = [
  {
    slug: "educational-trips",
    title: "Edutainment Trips",
    description:
      "Learning beyond the classroom — park outings, rope bridges and rides that build confidence and friendships.",
    image: images.tripRopeBridge01,
    icon: Bus,
  },
  {
    slug: "martial-arts",
    title: "Martial Arts & Sports",
    description:
      "Discipline, focus and fitness through martial arts training and belt ceremonies at the school.",
    image: images.martialArtsTeam01,
    icon: Swords,
  },
  {
    slug: "talent-show",
    title: "Talent Show — Futurian Stars",
    description:
      "A stage for every child to perform, present and shine in front of classmates and parents.",
    image: images.admissionPoster01,
    icon: Sparkles,
  },
  {
    slug: "classroom-learning",
    title: "Activity-Based Learning",
    description:
      "Worksheets, concept building, phonics and reading — hands-on and joyful, indoors and out on the lawn.",
    image: images.studentsOutdoorReading,
    icon: BookOpen,
  },
  {
    slug: "parent-teacher-meetings",
    title: "Parent-Teacher Meetings",
    description:
      "Regular PTMs and parent training workshops keep families actively involved in each child's progress.",
    image: images.campusOutdoorGathering,
    icon: Users,
  },
  {
    slug: "celebrations",
    title: "Celebrations & Splash Day",
    description:
      "Colour days, splash days and seasonal celebrations that make school a place children love.",
    image: images.studentSnackTime,
    icon: PartyPopper,
  },
  {
    slug: "prizes",
    title: "Prizes & Appreciation",
    description:
      "Gift packs and prizes recognise effort, good character and achievement throughout the year.",
    image: images.giftPacksPrizes,
    icon: Gift,
  },
  {
    slug: "creative",
    title: "Arts & Creativity",
    description:
      "Creative writing, drawing and performance activities that let imagination lead the way.",
    image: images.edutainmentTripRide,
    icon: Palette,
  },
];
