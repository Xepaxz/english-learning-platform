import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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

const studentNotes = [note1, note2, note3, note4, note5, note7, note8, note9, note10, note11, note12, note13, note14];

const englishTerms = [
  "Conversational English",
  "Grammar Mastery",
  "IELTS Preparation",
  "Pronunciation",
  "Business English",
  "Academic Writing",
  "Vocabulary Building",
  "Listening Skills",
  "Speaking Fluency",
  "Reading Comprehension",
  "English for Life",
  "Confident Communication",
];

const countryFlags = [
  { flag: "🇻🇳", name: "Vietnam" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇰🇷", name: "Korea" },
  { flag: "🇹🇼", name: "Taiwan" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇺🇸", name: "English" },
];

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 rounded-full bg-accent text-accent-foreground text-sm font-semibold tracking-wide mb-6">
              Welcome to your new classroom
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance text-foreground">
              Learn English with a <span className="text-primary italic font-serif">Real Teacher</span> Experience.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Helping international students build real confidence in English — through patience, warmth, and genuine human connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg rounded-full px-8 h-14" asChild>
                <Link href="/courses">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg rounded-full px-8 h-14" asChild>
                <Link href="/shop">Browse Curriculum</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary/40 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10"></div>
            <img
              src={teacherPhoto}
              alt="Teacher Polen"
              className="rounded-[2rem] shadow-2xl object-cover w-full max-w-md aspect-[3/4] object-top"
            />
          </div>
        </div>
      </section>

      {/* Rotating Country Flags Strip */}
      <section className="py-8 bg-primary overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...countryFlags, ...countryFlags, ...countryFlags, ...countryFlags].map((item, i) => (
              <div key={i} className="inline-flex items-center gap-3 mx-10">
                <span className="text-4xl drop-shadow-sm">
                  {item.flag}
                </span>
                <span className="text-primary-foreground font-semibold text-lg tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling English Terms Strip */}
      <section className="py-6 bg-secondary/60 overflow-hidden border-y border-border">
        <div className="relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...englishTerms, ...englishTerms, ...englishTerms].map((term, i) => (
              <div key={i} className="inline-flex items-center mx-8 gap-4">
                <span className="w-2 h-2 rounded-full bg-primary/50 flex-shrink-0"></span>
                <span className="text-foreground/70 font-semibold text-base uppercase tracking-widest">{term}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Notes Gallery Section */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-serif mb-6">Heartfelt Words from Students</h2>
            <p className="text-lg text-muted-foreground">
              Real handwritten letters — because the most meaningful feedback doesn't come from star ratings, it comes from the heart.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {studentNotes.map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/30"
              >
                <img
                  src={src}
                  alt={`Handwritten note from a student #${i + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-primary/5">
        <div className="container relative mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Ready to start your journey?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join our community of international students and discover the joy of learning English with confidence.
          </p>
          <Button size="lg" className="text-lg rounded-full px-10 h-16" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
