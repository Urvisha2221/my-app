"use client";

import react from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining this music school was the best decision of my life. The instructors are not only talented but also deeply passionate about teaching. My skills have improved tremendously!",
    name: "John Doe",
    title: "Professional Guitarist",
  },
  {
    quote:
      "I love the friendly environment and personalized attention I receive here. The lessons are well-structured, and I've gained so much confidence in my playing.",
    name: "Jane Smith",
    title: "Aspiring Pianist",
  },
  {
    quote:
      "The vocal training here is unmatched. The techniques I've learned have improved my range and control significantly. I recommend this school to anyone serious about music.",
    name: "Samuel Lee",
    title: "Vocal Coach",
  },
  {
    quote:
      "This school is a gem for anyone interested in music production. The equipment and guidance provided are top-notch, and I've learned to create professional-level tracks.",
    name: "Emily Johnson",
    title: "Music Producer",
  },
  {
    quote:
      "The drum lessons are fantastic! The instructors are experienced and patient, and the facilities are amazing. I've seen a remarkable improvement in my rhythm and technique.",
    name: "Michael Brown",
    title: "Drummer",
  },
];

export default function MusicSchoolTestimonialCard() {
  return (
    <>
      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col item-center justify-center overflow-hidden">
        <h2 className="text-5xl font-bold text-center mb-8 z-10">Hear our Harmony:Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
}
