import React, { useEffect, useRef } from "react";
import { projects } from "../../../data/projectCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

const ProjectDesplay = () => {
  const comp = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!comp.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(comp.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: comp.current,
        start: "top 30%",
      },
    });

    tl.fromTo(
      q(".text1, .text2, .projectCard"),
      {
        y: -100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.inOut",
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <section
      id="Work"
      ref={comp}
      className="project w-full min-h-screen bg-secondary
      px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 2xl:px-60
      py-12 sm:py-16"
    >
      {/* Header */}
      <div className="max-w-5xl">
        <h1
          className="text1 font-roboto font-bold tracking-tighter text-zinc-900
          text-2xl sm:text-3xl md:text-4xl lg:text-6xl
          leading-tight"
        >
          Selected Projects & Case Studies Bringing Ideas to Life Through Code &
          Design
        </h1>

        <p
          className="text2 font-inter tracking-tighter text-zinc-700 font-semibold
          w-full sm:w-3/4 md:w-2/3 lg:w-1/2
          leading-snug mt-4 sm:mt-6
          text-sm sm:text-base md:text-lg"
        >
          Crafting Engaging Interfaces with Precision and Performance
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-8 sm:mt-12 relative z-10 w-full">
        <Carousel>
          <CarouselContent className="flex items-stretch">
            {projects.map((val, ind) => (
              <CarouselItem
                key={ind}
                className="basis-full sm:basis-1/2 lg:basis-1/3 px-2 sm:px-3"
              >
                <ProjectCard val={val} ind={ind} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Buttons responsive */}
          <div className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectDesplay;