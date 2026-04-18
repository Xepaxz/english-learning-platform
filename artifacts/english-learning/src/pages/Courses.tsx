import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const courses = [
  {
    title: "Beginner English",
    price: "$49",
    description: "Start your English journey with confidence. Build vocabulary, basic grammar, and essential speaking skills.",
    features: ["Basic grammar rules", "Everyday vocabulary", "Simple conversation practice", "Weekly assignments"],
    color: "bg-blue-50 border-blue-100",
  },
  {
    title: "Intermediate English",
    price: "$89",
    description: "Take your English to the next level. Improve fluency, writing, and professional communication.",
    features: ["Complex sentence structures", "Professional email writing", "Fluent speaking practice", "Listening comprehension"],
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    title: "Advanced English",
    price: "$129",
    description: "Master English with nuanced grammar, advanced writing, and native-level conversation skills.",
    features: ["Nuanced grammar rules", "Academic writing", "Native-level idioms", "Debate and presentation skills"],
    color: "bg-sky-50 border-sky-100",
  }
];

export function Courses() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Learning Programs</h1>
          <p className="text-xl text-muted-foreground">
            Whether you're just starting or looking to perfect your fluency, there's a program designed for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className={`rounded-3xl p-8 border flex flex-col ${course.color} transition-transform hover:-translate-y-1 duration-300`}>
              <h3 className="text-2xl font-serif font-bold mb-2">{course.title}</h3>
              <div className="text-4xl font-bold text-primary mb-6">{course.price}<span className="text-lg text-muted-foreground font-normal">/month</span></div>
              <p className="text-foreground/80 mb-8 flex-grow leading-relaxed">
                {course.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="w-full rounded-full">
                Enroll Now
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Not sure which level is right for you?</h3>
          <p className="text-muted-foreground mb-8">Schedule a free 15-minute consultation to assess your level.</p>
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link href="/contact">Contact Teacher Polen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
