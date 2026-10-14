export type Testimonial = {
  name: string;
  role: string;
  text: string;
  /** Nilai 1-5 (opsional). */
  rating?: number;
  /** Path foto di /public (opsional). */
  image?: string;
};

// Isi dengan testimoni ASLI dari orang yang pernah bekerja denganmu.
// Selama daftar ini kosong, section "Testimoni" tidak ditampilkan.
export const testimonials: Testimonial[] = [];
