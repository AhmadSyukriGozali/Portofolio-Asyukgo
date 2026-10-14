import Image from "next/image";
import Reveal from "@/components/Reveal";
import { StarIcon } from "@/components/Icons";
import { testimonials, type Testimonial } from "@/data/testimonials";

function Card({ item }: { item: Testimonial }) {
  return (
    <article className="relative mx-4 w-[250px] overflow-hidden rounded-[3rem] bg-card px-4 pb-8 pt-6 text-center xs:w-[320px] xs:pb-10 desk:w-[370px] desk:rounded-[4rem] desk:px-8 desk:py-12">
      <div className="blob inset-x-0 bottom-[-12.5rem] mx-auto" />

      <div className="relative z-[1]">
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={60}
            height={60}
            className="mx-auto mb-2 h-[60px] w-[60px] rounded-full object-cover"
          />
        )}

        <h3 className="fs-h2 mb-6 desk:fs-h3">{item.name}</h3>

        <div className="mb-2 flex items-center justify-center gap-x-2">
          {item.rating !== undefined && (
            <>
              <div className="flex gap-x-1 text-title">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon
                    key={index}
                    className={`h-4 w-4 ${index < item.rating! ? "" : "opacity-25"}`}
                  />
                ))}
              </div>
              <span className="fs-h3 desk:fs-normal font-second text-title">
                {item.rating.toFixed(1)}
              </span>
            </>
          )}
        </div>

        <h4 className="fs-small mb-2 font-sans font-normal text-first">
          {item.role}
        </h4>

        <p className="fs-small desk:fs-normal text-title">{item.text}</p>
      </div>
    </article>
  );
}

// Section hanya muncul kalau ada testimoni asli di data/testimonials.ts.
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  // Gandakan isi agar marquee berputar mulus.
  const track = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section">
      <Reveal className="relative overflow-hidden">
        <div className="wrap">
          <h2 className="section-title ml-6 text-left xs:ml-0 xs:text-center">
            Kata <span>Mereka</span>
          </h2>
        </div>

        <div className="relative grid gap-y-6 desk:gap-y-12">
          <div className="pointer-events-none absolute left-0 top-0 z-[1] hidden h-full w-1/5 bg-[linear-gradient(90deg,hsl(0_0%_0%)_0%,hsl(0_0%_0%/0)_100%)] desk:block" />
          <div className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-1/5 bg-[linear-gradient(90deg,hsl(0_0%_0%/0)_0%,hsl(0_0%_0%)_100%)] desk:block" />

          <div className="marquee-track">
            {track.map((item, index) => (
              <Card key={`a-${index}`} item={item} />
            ))}
          </div>

          <div className="marquee-track marquee-reverse">
            {track.map((item, index) => (
              <Card key={`b-${index}`} item={item} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
