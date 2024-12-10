"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicschoolcontent = [
  {
    title: "Interactive Music Classes",
    description:
      "Join our live, interactive classes led by experienced instructors. Whether you're a beginner or advanced musician, our lessons are tailored to your needs.",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Receive instant feedback from expert instructors to improve your skills quickly and efficiently. Learn the right techniques every step of the way.",
  },
  {
    title: "Comprehensive Course Materials",
    description:
      "Access a variety of learning materials, including sheet music, video tutorials, and practice exercises, to support your music education.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Build confidence and stage presence by participating in live performances and recitals. Showcase your talent and celebrate your progress.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Learn at your own pace with flexible lesson schedules. Fit music classes into your lifestyle and keep your passion alive.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <div>
        <StickyScroll  content={musicschoolcontent}/>
      </div>
    </>
  );
}
