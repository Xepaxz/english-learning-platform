import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function About() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-secondary rounded-[2.5rem] transform -translate-x-4 -translate-y-4 -z-10"></div>
            <img 
              src="/teacher-avatar.png" 
              alt="Teacher Polen" 
              className="rounded-[2rem] shadow-xl w-full aspect-square object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-foreground">
              Hello, I'm Teacher Polen.
            </h1>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-sans">
              <p>
                My journey as an English teacher began with a simple belief: learning a new language shouldn't feel like a chore. It should feel like discovering a new part of yourself.
              </p>
              
              <p>
                Over the years, I've had the absolute joy of working with international students from Vietnam, Japan, Korea, Taiwan, and the Philippines. Every student brings a unique story, a distinct culture, and their own set of dreams to the classroom.
              </p>
              
              <p>
                To me, you are not just a student, and this is not just a classroom. This is a safe space where you can make mistakes without fear, where your confidence is nurtured, and where your voice matters. My teaching philosophy is built on patience, warmth, and genuine human connection.
              </p>
              
              <div className="p-6 bg-accent/30 rounded-2xl border border-accent mt-8 italic font-serif">
                "I don't just want to teach you grammar rules. I want to give you the confidence to tell your own story to the world."
              </div>
              
              <div className="pt-8">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Say Hello</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 max-w-6xl mx-auto">
           <div className="relative rounded-[3rem] overflow-hidden">
             <img 
               src="/students-group.png" 
               alt="Students studying together" 
               className="w-full aspect-[21/9] object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
               <h3 className="text-white text-2xl md:text-4xl font-serif font-bold max-w-2xl">
                 A global community of learners supporting each other.
               </h3>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
