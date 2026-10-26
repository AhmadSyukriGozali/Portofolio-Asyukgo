"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/Icons";
import { projects } from "@/data/projects";

export default function Projects() {
  // Loop & autoplay hanya masuk akal kalau kartunya cukup banyak.
  const canLoop = projects.length > 2;

  return (
    <section id="projects" className="section projects desk:pt-36 desk:pb-16">
      <Reveal className="wrap mx-auto desk:max-w-[1380px]">
        <h2 className="section-title ml-6 text-left xs:ml-0 xs:text-center">
          Proyek yang <span>Saya Buat</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView="auto"
          spaceBetween={24}
          loop={canLoop}
          grabCursor
          speed={600}
          centeredSlides={projects.length === 1}
          pagination={{ clickable: projects.length > 1 }}
          autoplay={canLoop ? { delay: 3000, disableOnInteraction: false } : false}
          className="p-8 desk:pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id} className="h-auto w-auto!">
              <article className="relative w-[280px] overflow-hidden rounded-[3rem] bg-card p-6 xs:w-[350px] desk:w-[440px] desk:rounded-[4rem] desk:p-10">
                <div className="group relative mb-6">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1600}
                    height={900}
                    sizes="(min-width: 1150px) 360px, 300px"
                    className="h-auto w-full rounded-3xl object-cover object-top desk:rounded-[2rem]"
                  />

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka demo ${project.title}`}
                    className="absolute right-3 top-3 grid h-12 w-12 place-items-center rounded-full border-[3px] border-first bg-bg text-title opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 desk:right-6 desk:top-6"
                  >
                    <ArrowUpRightIcon className="h-6 w-6" />
                  </a>
                </div>

                <h3 className="fs-h1 mb-2 text-first">
                  {String(index + 1).padStart(2, "0")}
                </h3>

                <h4 className="fs-small desk:fs-normal mb-2 font-second">
                  {project.category}
                </h4>

                <h2 className="fs-h2 mb-4">{project.title}</h2>

                <p className="fs-small desk:fs-normal mb-3 text-first">
                  {project.tagline}
                </p>

                <p className="fs-small desk:fs-normal mb-4">
                  {project.description}
                </p>

                <p className="fs-small desk:fs-normal">
                  <span className="font-semibold text-title">Tech stack: </span>
                  {project.techStack.join(", ")}
                </p>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fs-small mt-5 inline-flex items-center gap-x-2 font-second font-semibold text-title transition-colors duration-[400ms] hover:text-first"
                >
                  Lihat di GitHub
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
}
