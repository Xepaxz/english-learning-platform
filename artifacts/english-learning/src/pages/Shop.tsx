import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Headphones, BookMarked } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const products = [
  {
    title: "Essential English Grammar PDF",
    price: "$12",
    description: "50-page comprehensive grammar guide covering all the essential rules",
    icon: <FileText className="w-8 h-8 text-primary mb-4" />,
  },
  {
    title: "Speaking Confidence Lesson Plan",
    price: "$18",
    description: "10 structured lesson plans designed to boost speaking confidence",
    icon: <BookOpen className="w-8 h-8 text-primary mb-4" />,
  },
  {
    title: "Everyday English Digital Book",
    price: "$25",
    description: "Real conversational English used in daily life situations",
    icon: <BookMarked className="w-8 h-8 text-primary mb-4" />,
  },
  {
    title: "IELTS Preparation Bundle",
    price: "$45",
    description: "Complete bundle for IELTS preparation with practice exercises",
    icon: <FileText className="w-8 h-8 text-primary mb-4" />,
  },
  {
    title: "Writing Masterclass PDF",
    price: "$15",
    description: "Academic and professional writing techniques from A to Z",
    icon: <FileText className="w-8 h-8 text-primary mb-4" />,
  },
  {
    title: "Pronunciation Guide",
    price: "$10",
    description: "Audio-guided pronunciation workbook for non-native speakers",
    icon: <Headphones className="w-8 h-8 text-primary mb-4" />,
  },
];

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
    >
      {children}
    </div>
  );
}

export function Shop() {
  const { ref: headerRef, inView: headerIn } = useInView();

  return (
    <div className="py-24 bg-accent/10 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Digital Resources</h1>
          <p className="text-xl text-muted-foreground">
            Study at your own pace with our carefully crafted digital materials and guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <AnimatedCard key={index} delay={index * 80}>
              <Card className="rounded-3xl border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardHeader>
                  {product.icon}
                  <CardTitle className="font-serif text-xl">{product.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary mt-2">{product.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
