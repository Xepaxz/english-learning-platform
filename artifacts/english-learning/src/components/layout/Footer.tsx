import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-24">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link href="/" className="font-serif text-2xl font-semibold mb-4 inline-block">
            Teacher Polen
          </Link>
          <p className="text-muted/80 max-w-sm">
            Empowering international students to find their voice, build confidence, and master English with joy.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/courses" className="text-muted/80 hover:text-white transition-colors">Courses</Link></li>
            <li><Link href="/shop" className="text-muted/80 hover:text-white transition-colors">Shop</Link></li>
            <li><Link href="/about" className="text-muted/80 hover:text-white transition-colors">About Polen</Link></li>
            <li><Link href="/contact" className="text-muted/80 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-2 text-muted/80">
            <li>hello@teacherpolen.com</li>
            <li>Available for online classes globally</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted/60">
        &copy; {new Date().getFullYear()} Teacher Polen. All rights reserved.
      </div>
    </footer>
  );
}
