import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

export function Admin() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("english_announcements");
    if (saved) {
      setAnnouncements(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        variant: "destructive",
      });
      return;
    }

    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toISOString(),
    };

    const updated = [newAnnouncement, ...announcements];
    setAnnouncements(updated);
    localStorage.setItem("english_announcements", JSON.stringify(updated));
    setTitle("");
    setContent("");

    toast({
      title: "Success",
      description: "Announcement posted successfully.",
    });
  };

  const handleDelete = (id: string) => {
    const updated = announcements.filter((a) => a.id !== id);
    setAnnouncements(updated);
    localStorage.setItem("english_announcements", JSON.stringify(updated));
    toast({
      title: "Deleted",
      description: "Announcement has been removed.",
    });
  };

  return (
    <div className="py-14 md:py-24 bg-accent/5 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-8 text-center">Admin Dashboard</h1>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border mb-10">
          <h2 className="text-2xl font-bold mb-4">Post New Announcement</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Announcement Title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's the news?"
                rows={5}
              />
            </div>
            <Button onClick={handleSave}>Post Announcement</Button>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border">
          <h2 className="text-2xl font-bold mb-4">Manage Announcements</h2>
          <div className="space-y-4">
            {announcements.length === 0 ? (
              <p className="text-muted-foreground">No announcements found.</p>
            ) : (
              announcements.map((announcement) => (
                <div key={announcement.id} className="p-4 border rounded-xl flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{announcement.title}</h3>
                    <p className="text-sm text-muted-foreground">{new Date(announcement.date).toLocaleDateString()}</p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(announcement.id)}>
                    Delete
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
