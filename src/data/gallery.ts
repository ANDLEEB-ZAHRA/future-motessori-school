import { images, type SchoolImage } from "./images";

export const galleryCategories = [
  "All",
  "Campus",
  "Classrooms",
  "Students",
  "Activities",
  "Events",
  "Trips",
  "Sports",
  "Teachers",
  "Celebrations",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  image: SchoolImage;
  categories: Exclude<GalleryCategory, "All">[];
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", image: images.studentsParkOuting, categories: ["Students", "Trips"], caption: "Park outing with the whole class" },
  { id: "g2", image: images.studentsOutdoorReading, categories: ["Students", "Classrooms", "Activities"], caption: "Reading together on the lawn" },
  { id: "g3", image: images.tripRopeBridge01, categories: ["Trips", "Students"], caption: "Crossing the rope bridge" },
  { id: "g4", image: images.tripRopeBridge02, categories: ["Trips", "Students"], caption: "A rest on the bridge" },
  { id: "g5", image: images.tripRopeBridge03, categories: ["Trips", "Teachers"], caption: "Teachers and students on the park bridge" },
  { id: "g6", image: images.tripRockWall, categories: ["Trips", "Students"], caption: "Sitting on the stone wall" },
  { id: "g7", image: images.edutainmentTripRide, categories: ["Trips", "Activities"], caption: "Edutainment trip ride" },
  { id: "g8", image: images.edutainmentTripTrain, categories: ["Trips"], caption: "All aboard the park train" },
  { id: "g9", image: images.martialArtsTeam01, categories: ["Sports", "Campus"], caption: "Martial arts team with coach" },
  { id: "g10", image: images.martialArtsTeam02, categories: ["Sports", "Campus", "Teachers"], caption: "Martial arts students and coaches" },
  { id: "g11", image: images.martialArtsBeltCeremony, categories: ["Sports", "Events"], caption: "Belt ceremony" },
  { id: "g12", image: images.campusOutdoorGathering, categories: ["Campus", "Events"], caption: "Outdoor gathering in the school garden" },
  { id: "g13", image: images.studentSnackTime, categories: ["Celebrations", "Students"], caption: "Snack time at a school celebration" },
  { id: "g14", image: images.giftPacksPrizes, categories: ["Celebrations", "Events"], caption: "Prizes and gift packs for students" },
  { id: "g15", image: images.staffMeeting, categories: ["Teachers", "Campus"], caption: "Staff planning meeting" },
  { id: "g16", image: images.admissionPoster01, categories: ["Events", "Activities"], caption: "Learning and performances at school" },
];
