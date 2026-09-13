import { useInView } from "@/hooks/use-in-view";

export function Shop() {
  const { ref: headerRef, inView: headerIn } = useInView();

  return (
    <div className="py-14 md:py-24 bg-accent/10 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-all duration-700 ease-out ${headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 md:mb-6">Digital Resources</h1>
          <p className="text-base md:text-xl text-muted-foreground">
            Coming Soon! Our digital resources are currently being updated.
          </p>
        </div>
      </div>
    </div>
  );
}
