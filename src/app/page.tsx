import FeaturedCourses from "@/components/featuredcourses";
import Footer from "@/components/footer";
import HeroSection from "@/components/herosection";
import Instructor from "@/components/instructors";
import MusicSchoolTestimonialCard from "@/components/testimonialcards";
import UpComing from "@/components/upcoming";
import WhyChooseUs from "@/components/whychooseus";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <h1 className="text-5xl text-center"></h1>
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <MusicSchoolTestimonialCard/>
        <UpComing/>
        <Instructor/>
        <Footer/>
      </main>
    </>
  );
}
