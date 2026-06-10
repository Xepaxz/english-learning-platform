import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useInView } from "@/hooks/use-in-view";
import teacherPhoto from "@assets/1_1776518924551.jpg";
import photo1 from "@assets/1_1776518771398.jpg";
import photo2 from "@assets/2_1776518771398.jpg";
import photo3 from "@assets/3_1776518771398.jpg";
import photo4 from "@assets/4_1776518771398.jpg";
import photo5 from "@assets/5_1776518771398.jpg";
import photo6 from "@assets/6_1776518771398.jpg";
import photo7 from "@assets/7_1776518771398.jpg";
import photo8 from "@assets/8_1776518771398.jpg";
import photo9 from "@assets/9_1776518771398.jpg";
import photo10 from "@assets/10_1776518771398.jpg";

const galleryPhotos = [
  { src: photo1, alt: "Teacher Polen with a student" },
  { src: photo2, alt: "Teacher Polen at graduation ceremony" },
  { src: photo3, alt: "Teacher Polen with a graduate student" },
  { src: photo4, alt: "Teacher Polen teaching in class" },
  { src: photo5, alt: "Teacher Polen with a student outdoors" },
  { src: photo6, alt: "Teacher Polen with students selfie" },
  { src: photo7, alt: "Teacher Polen with a student in class" },
  { src: photo8, alt: "Teacher Polen selfie with a student" },
  { src: photo9, alt: "Teacher Polen with a student studying" },
  { src: photo10, alt: "Teacher Polen with students at cafe" },
];

export function About() {
  const { ref: photoRef, inView: photoIn } = useInView();
  const { ref: textRef, inView: textIn } = useInView();
  const { ref: galleryHeaderRef, inView: galleryHeaderIn } = useInView();
  const { ref: galleryRef, inView: galleryIn } = useInView();

  return (
    <div className="py-14 md:py-24 bg-background min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">

          {/* Photo */}
          <div
            ref={photoRef as React.RefObject<HTMLDivElement>}
            className={`relative transition-all duration-700 ease-out ${photoIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="absolute inset-0 bg-secondary rounded-[2rem] transform -translate-x-3 -translate-y-3 md:-translate-x-4 md:-translate-y-4 -z-10"></div>
            <img
              src={teacherPhoto}
              alt="Teacher Polen"
              className="rounded-[1.5rem] md:rounded-[2rem] shadow-xl w-full max-h-72 sm:max-h-96 md:max-h-none object-cover object-top"
            />
          </div>

          {/* Text */}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ease-out delay-150 ${textIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-5 md:mb-6 text-foreground">
              Hello, I'm Teacher Polen.
            </h1>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed font-sans">
              <p>
                My journey as an English teacher began with a simple belief: learning a new language shouldn't feel like a chore. It should feel like discovering a new part of yourself.
              </p>
              <p>
                Over the years, I've had the absolute joy of working with international students from Vietnam, Japan, Korea, Taiwan, and the Philippines. Every student brings a unique story, a distinct culture, and their own set of dreams to the classroom.
              </p>
              <p>
                To me, you are not just a student, and this is not just a classroom. This is a safe space where you can make mistakes without fear, where your confidence is nurtured, and where your voice matters. My teaching philosophy is built on patience, warmth, and genuine human connection.
              </p>

              <div className="p-5 md:p-6 bg-accent/30 rounded-2xl border border-accent mt-6 md:mt-8 italic font-serif text-foreground/90 text-sm md:text-base">
                "I don't just want to teach you grammar rules. I want to give you the confidence to tell your own story to the world."
              </div>

              <div className="pt-6 md:pt-8">
                <Button size="lg" className="rounded-full w-full sm:w-auto" asChild>
                  <Link href="/contact">Say Hello</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Student Photo Gallery */}
        <div className="mt-20 md:mt-32 max-w-6xl mx-auto">
          <div
            ref={galleryHeaderRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-10 md:mb-14 transition-all duration-700 ease-out ${galleryHeaderIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground mb-3 md:mb-4">
              Moments with My Students
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto">
              Real connections, real memories. These are the people who make teaching the greatest gift.
            </p>
          </div>

          <div
            ref={galleryRef as React.RefObject<HTMLDivElement>}
            className={`columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4 transition-all duration-700 ease-out ${galleryIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
