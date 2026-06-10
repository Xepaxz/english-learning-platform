import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useInView } from "@/hooks/use-in-view";
import teacherPhoto from "@assets/1_1776518924551.jpg";
import note1 from "@assets/1_1776518094051.jpg";
import note2 from "@assets/2_1776518094051.jpg";
import note3 from "@assets/3_1776518094051.jpg";
import note4 from "@assets/4_1776518094051.jpg";
import note5 from "@assets/5_1776518094051.jpg";
import note7 from "@assets/7_1776518094051.jpg";
import note8 from "@assets/8_1776518094051.jpg";
import note9 from "@assets/9_1776518094051.jpg";
import note10 from "@assets/10_1776518094051.jpg";
import note11 from "@assets/11_1776518094051.jpg";
import note12 from "@assets/12_1776518094051.jpg";
import note13 from "@assets/13_1776518094051.jpg";
import note14 from "@assets/14_1776518094051.jpg";
import moment1 from "@assets/1_1776518771398.jpg";
import moment2 from "@assets/2_1776518771398.jpg";
import moment3 from "@assets/3_1776518771398.jpg";
import moment4 from "@assets/4_1776518771398.jpg";
import moment5 from "@assets/5_1776518771398.jpg";
import moment6 from "@assets/6_1776518771398.jpg";
import moment7 from "@assets/7_1776518771398.jpg";
import moment8 from "@assets/8_1776518771398.jpg";
import moment9 from "@assets/9_1776518771398.jpg";
import moment10 from "@assets/10_1776518771398.jpg";

const studentNotes = [note1, note2, note3, note4, note5, note7, note8, note9, note10, note11, note12, note13, note14];
const studentMoments = [moment1, moment2, moment3, moment4, moment5, moment6, moment7, moment8, moment9, moment10];

const englishTerms = [
  "Conversational English", "Grammar Mastery", "IELTS Preparation", "Pronunciation",
  "Business English", "Academic Writing", "Vocabulary Building", "Listening Skills",
  "Speaking Fluency", "Reading Comprehension", "English for Life", "Confident Communication",
];

const countryFlags = [
  { flag: "🇻🇳", name: "Vietnam" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇰🇷", name: "Korea" },
  { flag: "🇹🇼", name: "Taiwan" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇺🇸", name: "English" },
];

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light leading-none z-10"
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl object-contain animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${className} transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </section>
  );
}

export function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}

      {/* Hero Section */}
      <section className="relative pt-14 pb-16 md:pt-24 md:pb-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-2xl animate-slide-up">
            <span className="inline-block py-1 px-3 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-semibold tracking-wide mb-4 md:mb-6">
              Welcome to your new classroom
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-balance text-foreground">
              Learn English with a <span className="text-primary italic font-serif">Real Teacher</span> Experience.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 text-balance">
              Helping international students build real confidence in English — through patience, warmth, and genuine human connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="lg" className="text-base md:text-lg rounded-full px-6 md:px-8 h-12 md:h-14" asChild>
                <Link href="/courses">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg rounded-full px-6 md:px-8 h-12 md:h-14" asChild>
                <Link href="/shop">Browse Curriculum</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center animate-slide-up mt-4 lg:mt-0" style={{ animationDelay: "150ms" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary/40 rounded-[2rem] transform translate-x-3 translate-y-3 -z-10"></div>
            <img
              src={teacherPhoto}
              alt="Teacher Polen"
              className="rounded-[1.5rem] md:rounded-[2rem] shadow-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] object-top"
            />
          </div>
        </div>
      </section>

      {/* Rotating Country Flags Strip */}
      <section className="py-6 md:py-8 bg-primary overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...countryFlags, ...countryFlags, ...countryFlags, ...countryFlags].map((item, i) => (
              <div key={i} className="inline-flex items-center gap-2 md:gap-3 mx-6 md:mx-10">
                <span className="text-3xl md:text-4xl drop-shadow-sm">{item.flag}</span>
                <span className="text-primary-foreground font-semibold text-base md:text-lg tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling English Terms Strip */}
      <section className="py-4 md:py-6 bg-secondary/60 overflow-hidden border-y border-border">
        <div className="relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...englishTerms, ...englishTerms, ...englishTerms].map((term, i) => (
              <div key={i} className="inline-flex items-center mx-5 md:mx-8 gap-3 md:gap-4">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/50 flex-shrink-0"></span>
                <span className="text-foreground/70 font-semibold text-xs md:text-base uppercase tracking-widest">{term}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments with Students Section */}
      <AnimatedSection className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide mb-3 md:mb-4">
              📸 Behind the Scenes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-6">Moments with My Students</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Every lesson is a memory. Here are some of the joyful, meaningful moments shared in our classroom and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
            {studentMoments.map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(src, `Moment with students #${i + 1}`)}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl aspect-square shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
                aria-label={`View moment ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Moment with students #${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-2xl md:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">🔍</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Student Notes Gallery Section */}
      <AnimatedSection className="py-14 md:py-24 bg-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-6">Heartfelt Words from Students</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Real handwritten letters — because the most meaningful feedback doesn't come from star ratings, it comes from the heart.
            </p>
          </div>

          <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {studentNotes.map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(src, `Handwritten note from a student #${i + 1}`)}
                className="group break-inside-avoid rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full text-left transition-all duration-300 border border-border/30 relative"
                aria-label={`View student note ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Handwritten note from a student #${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-2xl md:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">🔍</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 md:py-32 relative overflow-hidden bg-primary/5">
        <div className="container relative mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4 md:mb-6">Ready to start your journey?</h2>
          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10">
            Join our community of international students and discover the joy of learning English with confidence.
          </p>
          <Button size="lg" className="text-base md:text-lg rounded-full px-8 md:px-10 h-13 md:h-16 w-full sm:w-auto" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
