"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "./icons";

const slides = [
  { src: "/images/ad/pizza.svg", alt: "Pizza" },
  { src: "/images/ad/salad.svg", alt: "Salad" },
];

export function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-28 overflow-hidden rounded-2xl bg-linear-to-r from-sky-50 via-white to-orange-50 sm:h-32">
      <div className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-5">
        <h1 className="text-base font-bold leading-snug text-zinc-900 sm:text-lg">
          Delicious food,{" "}
          <span className="text-brand">delivered fast</span>
        </h1>
        <p className="mt-0.5 line-clamp-1 max-w-md text-xs text-zinc-500 sm:text-sm">
          Order from your favorite restaurants and get it delivered to your
          doorstep.
        </p>
        <button
          type="button"
          className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-hover sm:text-sm"
        >
          Order Now
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </button>
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute right-0 top-1/2 h-44 w-44 -translate-y-1/2 transition-opacity duration-500 sm:h-52 sm:w-52 lg:h-60 lg:w-60 ${
            index === activeSlide
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-contain object-right"
            sizes="240px"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              index === activeSlide
                ? "w-4 bg-brand"
                : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
