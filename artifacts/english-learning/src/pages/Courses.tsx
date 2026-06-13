import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useInView } from "@/hooks/use-in-view";
import { useCurrency } from "@/hooks/useCurrency";

const mainCourses = [
  {
    category: "ESL Programs",
    description: "Build your English foundation with our core ESL levels.",
    color: "bg-blue-50 border-blue-100",
    items: [
      { name: "A1 - Beginner", desc: "Everyday communication like greetings, introductions, and simple questions." },
      { name: "A2 - Elementary", desc: "Practice speaking clearly, asking questions, and talking about daily life." },
      { name: "B1 - Intermediate", desc: "Express opinions, share experiences, and have longer conversations." },
      { name: "B2 - Upper-Intermediate", desc: "Explain ideas in detail and understand complex conversations." },
      { name: "C1 - Advanced", desc: "Use English fluently for complex ideas and nuanced conversations." },
    ]
  },
  {
    category: "IELTS Preparation",
    description: "Achieve your target score with targeted strategies and practice.",
    color: "bg-indigo-50 border-indigo-100",
    items: [
      { name: "Speaking", desc: "Speak clearly, express ideas, and answer questions on everyday topics." },
      { name: "Writing Task 1 Acad", desc: "Describe, summarize, or explain charts, graphs, and processes." },
      { name: "Writing Task 2", desc: "Organize your ideas clearly and support them with examples in a formal essay." },
      { name: "Writing Task 1 General", desc: "Write letters for specific situations with the right tone and organization." },
    ]
  },
  {
    category: "Test Preparation",
    description: "Get ready for academic and professional environments.",
    color: "bg-sky-50 border-sky-100",
    items: [
      { name: "TOEFL", desc: "Improve skills for studying abroad: reading, listening, speaking, and writing." },
      { name: "TOEIC", desc: "Focus on workplace and professional communication, listening, and reading." },
      { name: "CELPIP", desc: "Practice test strategies to respond clearly and confidently for living in an English environment." },
    ]
  }
];

const addonLessons = [
  { name: "Pronunciation", desc: "Identify errors and produce correct sounds with a focus on consonants." },
  { name: "Job Interview Prep", desc: "Simulations for specific jobs, including tips and sample answers." },
  { name: "Business Grammar", desc: "Specific rules for appropriate business settings (writing and speaking)." },
  { name: "Daily News", desc: "Discuss current events to build vocabulary (science, business, etc)." },
  { name: "Book Reading", desc: "Read at your own pace. Books chosen by your interest or the teacher." },
  { name: "Small Talk", desc: "Engage in fun, casual conversations to improve response time." },
];

function AnimatedSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

export function Courses() {
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: ctaRef, inView: ctaIn } = useInView();
  const { formatPrice, loading } = useCurrency();

  return (
    <div className="py-14 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-4xl mx-auto mb-16 md:mb-24 transition-all duration-700 ease-out ${headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-semibold tracking-wide mb-4">
            Curriculum
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 md:mb-8 text-foreground">Learning Programs</h1>
          
          <div className="p-6 md:p-8 bg-secondary/30 rounded-3xl inline-block text-left md:text-center shadow-sm">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              All main courses are designed to be a <strong>20-day program (60 min/lesson)</strong>.<br className="hidden md:block" />
              Minimum lessons per week: <strong>2</strong>. Books and other educational materials are provided.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              *Academic courses will have a mock test before the end of the program to determine improvement.
            </p>
          </div>
        </div>

        {/* Main Courses Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Main Courses</h2>
          <div className={`inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary/10 text-primary font-bold text-xl md:text-2xl transition-opacity duration-500 ${loading ? 'opacity-50' : 'opacity-100'}`}>
            {formatPrice(10000)}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {mainCourses.map((course, index) => (
            <AnimatedSection
              key={index}
              delay={index * 120}
              className={`rounded-2xl md:rounded-3xl p-6 md:p-8 border flex flex-col ${course.color} hover:-translate-y-1 hover:shadow-lg duration-300`}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">{course.category}</h3>
              <p className="text-foreground/70 mb-6 flex-grow leading-relaxed text-sm md:text-base">{course.description}</p>
              <div className="space-y-4">
                {course.items.map((item, i) => (
                  <div key={i} className="bg-white/60 p-4 rounded-xl border border-white/50 shadow-sm">
                    <h4 className="font-bold text-foreground mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-24 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Add-on Lessons</h2>
          <p className="text-muted-foreground mb-4">Optional electives • 30 minutes per session</p>
          <div className={`inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary/80 text-secondary-foreground font-bold text-xl md:text-2xl transition-opacity duration-500 ${loading ? 'opacity-50' : 'opacity-100'}`}>
            {formatPrice(5000)}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {addonLessons.map((addon, index) => (
            <AnimatedSection
              key={index}
              delay={index * 80}
              className="bg-background rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground font-bold">
                  +
                </div>
                <h4 className="font-bold text-lg">{addon.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{addon.desc}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Payment Information */}
        <div className="mt-24 max-w-3xl mx-auto">
          <AnimatedSection className="bg-accent/5 p-8 md:p-10 rounded-3xl border border-border shadow-sm">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Payment Information</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-4 bg-white rounded-xl border border-border/50">
                <div>
                  <span className="font-bold block text-lg mb-1">Western Union</span>
                  <span className="text-muted-foreground">Florence Q Lozano<br/>33 Kalapati St. Dizon, Baguio City</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-4 bg-white rounded-xl border border-border/50">
                <div>
                  <span className="font-bold block text-lg mb-1">GCash</span>
                  <span className="text-muted-foreground">Florence Q Lozano</span>
                </div>
                <span className="font-mono bg-secondary/30 px-3 py-1 rounded-md font-semibold">+63-9398076358</span>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-4 bg-white rounded-xl border border-border/50">
                <div>
                  <span className="font-bold block text-lg mb-1">Bank of the Philippine Islands (BPI)</span>
                  <span className="text-muted-foreground">Florence Quisaba Lozano<br/>BPI Session Baguio</span>
                </div>
                <span className="font-mono bg-secondary/30 px-3 py-1 rounded-md font-semibold">0579-4412-08</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-destructive/10 text-destructive-foreground rounded-xl text-center font-medium">
              Note: Absence must be communicated at least 2 hours before class time.
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg" className="rounded-full px-10 h-14" asChild>
                <Link href="/contact">Ready to Enroll? Contact Teacher Polen</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
}
