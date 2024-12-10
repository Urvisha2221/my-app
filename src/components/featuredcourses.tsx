// "use client";
// import React from "react";
// import CoursesData from "../data/music.json";
// import Link from "next/link";
// import { BackgroundGradient } from "./ui/background-gradient";

// interface course {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   price: number;
//   instructor: string;
//   image: string,
//   isFeatured: boolean;
// }

// export default function FeaturedCourses() {
//   const featuredcourses = CoursesData.Courses.filter(
//     (course: course) => course.isFeatured
//   );
//   return (
//     <>
//       <div className="py-12 bg-gray-900">
//         <div>
//           <div className="text-center">
//             <h2 className="text-base text-teal-600 text-2xl font-semibold tracking-wide uppercase">
//               FEATURED COURSES
//             </h2>
//             <p className="mt-2 text-3xl leanding-8 font-extrabold tracking-tight text-white sm:text-4xl">
//               Learn With the Best
//             </p>
//           </div>
//         </div>
//         <div className="mt-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//             {featuredcourses.map((course: course) => (
//               <div key={course.id} className="flex justify-center">
//                 <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
//                   <div className="p-4 sm:p-6 flex-col items-center text-center flex-grow">
                   
//                     <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark: text-neutral-200">{course.title}</p>
//                     <p className=" text-md  text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p><br/>
//                     <Link className=" text-1xl" href={`/courses/${course.slug}`}>Lern More</Link>
//                   </div>
//                 </BackgroundGradient>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-20 text-center ">
//           <Link
//             href={"/courses"}
//             className="px-4 text-2xl p-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transaction duration-200"
//           >
//             View All Courses
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import React from "react";
import CoursesData from "../data/music.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  image: string;
  isFeatured: boolean;
}

export default function FeaturedCourses() {
  const featuredCourses = CoursesData.Courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <>
      <div className="py-12 bg-gray-900">
        <div>
          <div className="text-center">
            <h2 className=" text-teal-600 text-2xl font-semibold tracking-wide uppercase">
              FEATURED COURSES
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn With the Best
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-1000 object-cover"
                  />
                  <div className="p-4 sm:p-6 flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <br />
                    <Link
                      className="text-1xl text-teal-500 hover:underline"
                      href={`/courses/${course.slug}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 text-2xl p-2 rounded border-separate border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </>
  );
}
