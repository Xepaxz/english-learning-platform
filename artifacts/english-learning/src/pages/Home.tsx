import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import teacherPhoto from "@assets/1_1776518924551.jpg";

const testimonials = [
  { quote: "From the very first class, I felt that you are a truly professional teacher. Although my English foundation isn't very strong, you are always patient and guide me in ways I can understand.", author: "Yi-Ting" },
  { quote: "I feel very lucky to be your student. Every day I met you made me happy. Your kindness made me enjoy life here even more.", author: "Claire" },
  { quote: "Over the past four months studying with you, I have felt genuinely happy and thankful for everything you have shared with me.", author: "David" },
  { quote: "You are so kind, gentle and patient with me. Learning with you has made me truly happy.", author: "Daisy (Vietnam)" },
  { quote: "I feel very fortunate that fate allowed me to meet you. Thank you for your patience and guidance.", author: "Mandy (Taiwan)" },
  { quote: "Being your student has been a great honor to me. You have been more of a mentor than a teacher.", author: "Yoonhee Kim" },
  { quote: "Thank you for being such a kind and patient teacher. I have learned so much from your classes.", author: "Student" },
  { quote: "I've learned so much from you — not only about English, but also about confidence and communication.", author: "Nghi" }
];

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

      {/* Testimonials Section */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-serif mb-6">Heartfelt Words from Students</h2>
            <p className="text-lg text-muted-foreground">
              These handwritten letters are the emotional heart of this platform. It's not just about grammar; it's about changing lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <p className="text-foreground/80 leading-relaxed mb-6 font-serif italic text-lg">
                  "{t.quote}"
                </p>
                <div className="font-semibold text-primary">
                  — {t.author}
                </div>
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
