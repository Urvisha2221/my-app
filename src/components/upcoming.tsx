'use client';
import React,{useState} from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const musicalFeatureWebinars = [
  {
    title: "Mastering Guitar Techniques",
    description:
      "Join our live webinar to learn advanced guitar techniques, tips for improvisation, and how to master various styles.",
    slug: "mastering-guitar-techniques",
    isFeatured: true,
  },
  {
    title: "Vocal Training Essentials",
    description:
      "Discover the secrets to improving your vocal range, tone, and confidence in this interactive webinar with a professional vocal coach.",
    slug: "vocal-training-essentials",
    isFeatured: true,
  },
  {
    title: "Music Production 101",
    description:
      "Learn the basics of music production, from setting up your studio to creating your first track in this beginner-friendly session.",
    slug: "music-production-101",
    isFeatured: false,
  },
  {
    title: "Drumming Techniques for Beginners",
    description:
      "Get hands-on tips on improving your rhythm, mastering drum rolls, and playing along to your favorite tracks.",
    slug: "drumming-techniques-for-beginners",
    isFeatured: true,
  },
  {
    title: "Introduction to Music Theory",
    description:
      "Understand the fundamentals of music theory and how to apply it to your instrument in this comprehensive webinar.",
    slug: "introduction-to-music-theory",
    isFeatured: false,
  },
  {
    title: "Vocal Training Essentials",
    description:
      "Discover the secrets to improving your vocal range, tone, and confidence in this interactive webinar with a professional vocal coach.",
    slug: "vocal-training-essentials",
    isFeatured: true,
  },
];

export default function UpComing() {
  return (
    <>
      <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className=" text-teal-600 text-2xl font-semibold tracking-wide uppercase">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>
          <div className="mt-10">
            <HoverEffect
              items={musicalFeatureWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: `/webinars/${webinar.slug}`, 
              }))}
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/courses"
              className="px-4 text-2xl p-2 rounded border-separate border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              View All Webinars
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
