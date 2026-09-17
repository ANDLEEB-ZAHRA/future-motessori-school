/**
 * The Future Montessori School
 * ---------------------------------------
 * Optimized Image Registry
 *
 * Performance improvements:
 * - Explicit image width/height
 * - Stable aspect ratios
 * - Async image decoding
 * - Reusable image props helper
 * - No unnecessary image transformations
 * - Existing image paths preserved
 *
 * IMPORTANT:
 * This file optimizes how images are rendered.
 * For maximum loading speed, the actual JPG files should
 * eventually be converted/compressed to WebP or AVIF.
 */

export type SchoolImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: string;
};

const img = (
  src: string,
  alt: string,
  width: number,
  height: number,
): SchoolImage => ({
  src,
  alt,
  width,
  height,
  aspectRatio: `${width} / ${height}`,
});

/**
 * All authentic school photographs.
 *
 * Keep the original image paths so all existing components
 * continue working without any changes.
 */
export const images = {
  /* =====================================================
   * LOGO
   * ===================================================== */

  logo: img(
    "/images/logo/school-logo.jpg",
    "The Future Montessori School official crest",
    636,
    636,
  ),

  /* =====================================================
   * CAMPUS
   * ===================================================== */

  campusSubjectsPoster: img(
    "/images/campus/campus-subjects-poster.jpg",
    "Admission Open charter and core educational values at Wania Campus, Gujrat",
    768,
    1024,
  ),

  campusOutdoorGathering: img(
    "/images/campus/campus-outdoor-gathering.jpg",
    "Students and teachers gathered outdoors in the school park during daytime activities",
    1024,
    768,
  ),

  /* =====================================================
   * STUDENTS
   * ===================================================== */

  studentSnackTime: img(
    "/images/students/student-snack-time.jpg",
    "A young student enjoying a snack during an outdoor school gathering",
    1086,
    1448,
  ),

  studentsParkOuting: img(
    "/images/students/students-park-outing.jpg",
    "A cheerful group of students in a park on a school outing",
    1024,
    768,
  ),

  /* =====================================================
   * CLASSROOMS
   * ===================================================== */

  studentsOutdoorReading: img(
    "/images/classrooms/students-outdoor-reading.jpg",
    "Student practicing Islamic calligraphy and creative art on the school lawn",
    768,
    1024,
  ),

  /* =====================================================
   * TRIPS
   * ===================================================== */

  edutainmentTripTrain: img(
    "/images/trips/edutainment-trip-train.jpg",
    "Students boarding a colourful park train on the school edutainment trip",
    1024,
    1536,
  ),

  tripRopeBridge01: img(
    "/images/trips/trip-rope-bridge-01.jpg",
    "Students in green uniforms crossing a rope bridge on a school trip",
    1869,
    842,
  ),

  tripRopeBridge02: img(
    "/images/trips/trip-rope-bridge-02.jpg",
    "Young students sitting on a rope bridge during a school outing",
    1870,
    841,
  ),

  tripRopeBridge03: img(
    "/images/trips/trip-rope-bridge-03.jpg",
    "Students and teachers lined up on a park bridge during a trip",
    1870,
    841,
  ),

  tripRockWall: img(
    "/images/trips/trip-rock-wall.jpg",
    "Students sitting together on a stone wall during a school trip",
    1870,
    841,
  ),

  edutainmentTripRide: img(
    "/images/trips/edutainment-trip-ride.jpg",
    "Students enjoying an amusement ride on the school edutainment trip",
    1870,
    841,
  ),

  /* =====================================================
   * EVENTS
   * ===================================================== */

  giftPacksPrizes: img(
    "/images/events/gift-packs-prizes.jpg",
    "Teacher's Day celebration cake and student handmade greeting card",
    576,
    1024,
  ),

  admissionPoster01: img(
    "/images/events/admission-poster-01.jpg",
    "Admission Open display highlighting religious values, conceptual education, and academic excellence",
    768,
    1024,
  ),

  admissionPoster02: img(
    "/images/events/admission-poster-02.jpg",
    "School poster listing learning targets and scholarship categories",
    1491,
    1055,
  ),

  admissionOpenBanner: img(
    "/images/events/admission-open-banner.jpg",
    "School Admission Open 2025-2026 charter board",
    768,
    1024,
  ),

  /* =====================================================
   * SPORTS
   * ===================================================== */

  martialArtsBeltCeremony: img(
    "/images/sports/martial-arts-belt-ceremony.jpg",
    "A coach tying a belt on a student during a martial arts ceremony",
    1024,
    1536,
  ),

  martialArtsTeam01: img(
    "/images/sports/martial-arts-team-01.jpg",
    "Martial arts students posing with their coach in front of the school",
    1774,
    887,
  ),

  martialArtsTeam02: img(
    "/images/sports/martial-arts-team-02.jpg",
    "Students and coaches in martial arts uniforms at the school",
    1774,
    887,
  ),

  /* =====================================================
   * STAFF
   * ===================================================== */

  /**
   * staff-meeting.webp is not currently available.
   * Existing campus image is kept as the fallback.
   */
  staffMeeting: img(
    "/images/campus/campus-outdoor-gathering.jpg",
    "School staff and students gathered outdoors at the campus",
    1674,
    939,
  ),

  /* =====================================================
   * PARENTS
   * ===================================================== */

  motherTeacherMeeting: img(
    "/images/Parents/parent1.jpeg",
    "Mother Teacher Meeting at The Future Montessori School",
    1600,
    1200,
  ),

  parentsCounseling: img(
    "/images/Parents/parent3.jpeg",
    "Parents Counseling session at The Future Montessori School",
    1600,
    1200,
  ),

  parentsCounselingGroup: img(
    "/images/Parents/parent2.jpeg",
    "Parents gathered for a counseling session at The Future Montessori School",
    1600,
    1200,
  ),
} as const;

/**
 * Image key type.
 */
export type ImageKey = keyof typeof images;

/**
 * -------------------------------------------------------
 * PERFORMANCE IMAGE PROPS
 * -------------------------------------------------------
 *
 * Use this helper when you want consistent optimized
 * image rendering.
 *
 * Example:
 *
 * <img
 *   {...imageProps(images.studentSnackTime)}
 *   loading="lazy"
 * />
 */
export function imageProps(image: SchoolImage) {
  return {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    decoding: "async" as const,
    style: {
      aspectRatio: image.aspectRatio,
    },
  };
}

/**
 * -------------------------------------------------------
 * HERO IMAGE PROPS
 * -------------------------------------------------------
 *
 * Use ONLY for images that are immediately visible when
 * the page opens.
 *
 * This prevents the main hero image from waiting for the
 * browser's lazy-loading threshold.
 */
export function heroImageProps(image: SchoolImage) {
  return {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    loading: "eager" as const,
    decoding: "async" as const,
    fetchPriority: "high" as const,
    style: {
      aspectRatio: image.aspectRatio,
    },
  };
}

/**
 * -------------------------------------------------------
 * LAZY IMAGE PROPS
 * -------------------------------------------------------
 *
 * Use for images lower down the page.
 *
 * This keeps the first page load fast because the browser
 * does not download every image immediately.
 */
export function lazyImageProps(image: SchoolImage) {
  return {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    loading: "lazy" as const,
    decoding: "async" as const,
    fetchPriority: "low" as const,
    style: {
      aspectRatio: image.aspectRatio,
    },
  };
}