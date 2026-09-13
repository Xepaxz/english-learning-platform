import { useState, useEffect } from "react";
import { useInView } from "@/hooks/use-in-view";

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

export function Announcements() {
  const { ref: headerRef, inView: headerIn } = useInView();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("english_announcements");
    if (saved) {
      setAnnouncements(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="py-14 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-all duration-700 ease-out ${headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 md:mb-6">Announcements</h1>
          <p className="text-base md:text-xl text-muted-foreground">
            Stay up to date with our latest news and updates.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {announcements.length === 0 ? (
            <div className="text-center p-10 bg-accent/10 rounded-2xl">
              <p className="text-muted-foreground">No announcements yet.</p>
            </div>
          ) : (
            announcements.map((announcement) => (
              <div key={announcement.id} className="p-6 md:p-8 bg-accent/5 rounded-2xl border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold font-serif">{announcement.title}</h2>
                  <span className="text-sm text-muted-foreground md:mt-0 mt-2">{new Date(announcement.date).toLocaleDateString()}</span>
                </div>
                <div className="text-foreground/80 whitespace-pre-wrap">{announcement.content}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
