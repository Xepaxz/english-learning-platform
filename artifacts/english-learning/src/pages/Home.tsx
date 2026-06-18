import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe, BadgeDollarSign, CalendarClock, BookOpen, Calendar, Video, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
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
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇹🇭", name: "Thailand" },
  { flag: "🇮🇩", name: "Indonesia" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇨🇳", name: "China" },
  { flag: "🇭🇰", name: "Hong Kong" },
  { flag: "🇮🇳", name: "India" },
  { flag: "🇧🇷", name: "Brazil" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇦🇺", name: "Australia" },
];

import { createPortal } from "react-dom";

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

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] p-4 sm:p-12 bg-black/85 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl font-light leading-none z-10 transition-colors"
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        className="object-contain animate-scale-in drop-shadow-2xl"
      />
    </div>,
    document.body
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
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="flex flex-col min-h-screen">
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}

      {/* Hero Section */}
      <section className="relative pt-14 pb-16 md:pt-24 md:pb-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-2xl animate-slide-up">
            <span className="inline-block py-1 px-3 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-semibold tracking-wide mb-4 md:mb-6">
              {t("home.hero.badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-balance text-foreground">
              {t("home.hero.title1")} <span className="text-primary italic font-serif">{t("home.hero.titleHighlight")}</span> {t("home.hero.title2")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 text-balance">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="lg" className="text-base md:text-lg rounded-full px-6 md:px-8 h-12 md:h-14" asChild>
                <Link href="/courses">{t("home.hero.cta1")}</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg rounded-full px-6 md:px-8 h-12 md:h-14" asChild>
                <Link href="/shop">{t("home.hero.cta2")}</Link>
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

      {/* Rotating Test Providers Logo Strip */}
      <section className="py-10 md:py-14 bg-white overflow-hidden border-b border-border/30">
        <div className="container mx-auto px-4 text-center mb-8">
          <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground/60 uppercase">{t("home.logos.title")}</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-logos items-center" style={{ width: 'max-content' }}>
            {[1, 2, 3, 4].map((setIndex) => (
              <div key={setIndex} className="flex items-center flex-shrink-0">

                {/* IELTS */}
                <div className="flex-shrink-0 mx-10 md:mx-16 opacity-35 hover:opacity-80 transition-opacity duration-300">
                  <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
                    <rect width="12" height="50" rx="2" fill="#CC0000"/>
                    <text x="22" y="36" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="32" fill="#1a1a1a">IELTS</text>
                  </svg>
                </div>

                {/* PTE */}
                <div className="flex-shrink-0 mx-10 md:mx-16 opacity-35 hover:opacity-80 transition-opacity duration-300">
                  <svg width="160" height="50" viewBox="0 0 160 50" fill="none">
                    <circle cx="24" cy="25" r="22" fill="#005F9E"/>
                    <text x="24" y="31" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="white">PTE</text>
                    <text x="54" y="20" fontFamily="Arial" fontWeight="700" fontSize="16" fill="#005F9E">Pearson</text>
                    <text x="54" y="36" fontFamily="Arial" fontWeight="400" fontSize="11" fill="#005F9E" letterSpacing="1">TEST OF ENGLISH</text>
                  </svg>
                </div>

                {/* OET */}
                <div className="flex-shrink-0 mx-10 md:mx-16 opacity-35 hover:opacity-80 transition-opacity duration-300">
                  <svg width="120" height="50" viewBox="0 0 120 50" fill="none">
                    <rect x="0" y="8" width="10" height="34" rx="2" fill="#E87722"/>
                    <rect x="14" y="8" width="10" height="34" rx="2" fill="#E87722"/>
                    <text x="30" y="36" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="32" fill="#1a1a1a">OET</text>
                  </svg>
                </div>

                {/* TOEFL */}
                <div className="flex-shrink-0 mx-10 md:mx-16 opacity-35 hover:opacity-80 transition-opacity duration-300">
                  <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
                    <text x="0" y="16" fontFamily="Arial" fontWeight="700" fontSize="13" fill="#003087" letterSpacing="0.5">ETS</text>
                    <rect x="0" y="22" width="130" height="2.5" fill="#003087"/>
                    <text x="0" y="46" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="26" fill="#003087" letterSpacing="1">TOEFL</text>
                  </svg>
                </div>

                {/* CELPIP */}
                <div className="flex-shrink-0 mx-10 md:mx-16 opacity-35 hover:opacity-80 transition-opacity duration-300">
                  <svg width="160" height="50" viewBox="0 0 160 50" fill="none">
                    <rect x="0" y="14" width="8" height="24" rx="1" fill="#D9261C"/>
                    <rect x="0" y="12" width="22" height="8" rx="1" fill="#D9261C"/>
                    <text x="28" y="36" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="26" fill="#1a1a1a" letterSpacing="0.5">CELPIP</text>
                  </svg>
                </div>

                {/* TOEIC */}
                <div className="flex-shrink-0 mx-10 md:mx-16 opacity-35 hover:opacity-80 transition-opacity duration-300">
                  <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
                    <text x="0" y="16" fontFamily="Arial" fontWeight="700" fontSize="13" fill="#003087" letterSpacing="0.5">ETS</text>
                    <rect x="0" y="22" width="120" height="2.5" fill="#003087"/>
                    <text x="0" y="46" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="26" fill="#003087" letterSpacing="1">TOEIC</text>
                  </svg>
                </div>

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

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide mb-3 md:mb-4">
              {t("home.why.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4 md:mb-6">{t("home.why.title")}</h2>
            <p className="text-base md:text-lg text-muted-foreground">{t("home.why.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Users, title: "home.why.card1.title", desc: "home.why.card1.desc" },
              { icon: Target, title: "home.why.card2.title", desc: "home.why.card2.desc" },
              { icon: Award, title: "home.why.card3.title", desc: "home.why.card3.desc" },
              { icon: Globe, title: "home.why.card4.title", desc: "home.why.card4.desc" },
              { icon: BadgeDollarSign, title: "home.why.card5.title", desc: "home.why.card5.desc" },
              { icon: CalendarClock, title: "home.why.card6.title", desc: "home.why.card6.desc" },
            ].map((feature, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3">{t(feature.title)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(feature.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/80 font-medium tracking-wide">{t("home.stats.years")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-primary-foreground/80 font-medium tracking-wide">{t("home.stats.countries")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80 font-medium tracking-wide">{t("home.stats.students")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-2">4.9 <Star className="fill-current" size={28} /></div>
              <div className="text-primary-foreground/80 font-medium tracking-wide">{t("home.stats.rating")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <AnimatedSection className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-semibold tracking-wide mb-3 md:mb-4">
              {t("home.how.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4 md:mb-6">{t("home.how.title")}</h2>
            <p className="text-base md:text-lg text-muted-foreground">{t("home.how.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border/60 z-0"></div>
            {[
              { icon: BookOpen, title: "home.how.step1.title", desc: "home.how.step1.desc" },
              { icon: Calendar, title: "home.how.step2.title", desc: "home.how.step2.desc" },
              { icon: Video, title: "home.how.step3.title", desc: "home.how.step3.desc" },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background border-4 border-accent shadow-xl flex items-center justify-center text-primary mb-6 md:mb-8">
                  <step.icon size={36} className="md:w-10 md:h-10" />
                </div>
                <div className="text-sm font-bold text-accent-foreground/60 tracking-widest uppercase mb-2">STEP 0{i + 1}</div>
                <h3 className="text-xl md:text-2xl font-bold font-serif mb-3 md:mb-4">{t(step.title)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(step.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Moments with Students Section */}
      <AnimatedSection className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide mb-3 md:mb-4">
              {t("home.moments.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-6">{t("home.moments.title")}</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {t("home.moments.subtitle")}
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
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-6">{t("home.notes.title")}</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {t("home.notes.subtitle")}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4 md:mb-6">{t("home.cta.title")}</h2>
          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10">
            {t("home.cta.subtitle")}
          </p>
          <Button size="lg" className="text-base md:text-lg rounded-full px-8 md:px-10 h-13 md:h-16 w-full sm:w-auto" asChild>
            <Link href="/contact">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
