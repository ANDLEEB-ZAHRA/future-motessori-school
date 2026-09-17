import { images, type SchoolImage } from "./images";

export type Program = {
  slug: string;
  name: string;
  level: string;
  image: SchoolImage;
  summary: string;
  focus: string[];
  /** Verified from the school's own posters; leave blank when unknown. */
  subjects: string[];
};

/**
 * Age and grade ranges are intentionally omitted — they were not confirmed
 * by the school. Add them here once verified.
 */
export const programs: Program[] = [
  {
    slug: "montessori",
    name: "Montessori",
    level: "Early Years",
    image: images.studentsOutdoorReading,
    summary:
      "A calm, prepared environment where young children learn through hands-on activity, practical life skills and gentle guidance.",
    focus: ["Hands-on learning", "Practical life skills", "Phonics & early language", "Sensorial exploration"],
    subjects: ["Phonics", "Basic Urdu", "Basic mathematics", "Learning with fun & activities"],
  },
  {
    slug: "primary",
    name: "Primary",
    level: "Primary School",
    image: images.tripRopeBridge01,
    summary:
      "Building strong foundations in English, Urdu, mathematics and general knowledge alongside character building and creative expression.",
    focus: ["Reading & writing in English and Urdu", "Conceptual mathematics", "Creative writing", "Character building"],
    subjects: ["English", "Urdu", "Mathematics", "General knowledge", "Quranic education (Nazra)", "Worksheets & concepts"],
  },
  {
    slug: "middle",
    name: "Middle",
    level: "Middle School",
    image: images.studentsParkOuting,
    summary:
      "Preparing confident, responsible learners with deeper subject understanding, leadership opportunities and co-curricular activities.",
    focus: ["Subject depth", "Leadership & confidence", "Co-curricular activities", "Ethical & moral training"],
    subjects: ["English", "Urdu", "Mathematics", "General knowledge", "Religious education"],
  },
];

/** "What we offer" — copied from the school's own admission poster. */
export const offerings = [
  "Character building",
  "Ahadees and Quran learning",
  "Friendly, caring & educational environment",
  "Free student library",
  "Conceptual learning",
  "Activity based learning",
  "Visual / audio learning",
  "Free books for deserving students",
  "Well qualified & experienced staff",
  "Parent-teacher meetings (PTM)",
  "Parents training workshops",
  "Play ground",
  "Color / splash day",
  "Indoor games & recreational activities",
];

/** "Our main targets" — copied from the school's own admission poster. */
export const learningTargets = [
  "Quranic education (Nazra)",
  "Ethical & moral training",
  "Writing pattern (English / Urdu)",
  "Creative writing (English / Urdu)",
  "Basic mathematics skills",
  "Sentence making",
  "Phrase making",
  "Phonics",
  "Basic grammar",
  "Urdu reading and joining letters",
  "General knowledge",
];

/** Scholarship categories — from the school's admission poster. */
export const scholarships = [
  { title: "Test qualifying", text: "For students who qualify the school's admission test." },
  { title: "Orphan", text: "Support for children who have lost a parent." },
  { title: "Martyrs' children", text: "For the children of shuhada." },
  { title: "Hafiz-e-Quran", text: "For students who have memorised the Holy Quran." },
  { title: "Teacher's child", text: "For the children of teachers." },
];
