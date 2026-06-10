import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const { toast } = useToast();
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: infoRef, inView: infoIn } = useInView();
  const { ref: formRef, inView: formIn } = useInView();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 transition-all duration-700 ease-out ${headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Let's Connect</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about the courses? Send me a message and I'll be happy to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div
              ref={infoRef as React.RefObject<HTMLDivElement>}
              className={`lg:col-span-1 space-y-8 transition-all duration-700 ease-out ${infoIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="p-8 bg-accent/20 rounded-3xl border border-border/50">
                <h3 className="font-serif text-2xl font-bold mb-6">Contact Info</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@teacherpolen.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Available globally for online classes</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "I usually reply within 24 hours. Looking forward to hearing from you!"
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={formRef as React.RefObject<HTMLDivElement>}
              className={`lg:col-span-2 transition-all duration-700 delay-150 ease-out ${formIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="p-8 rounded-3xl border border-border/50 bg-white shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="rounded-xl bg-accent/10 border-border/50 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="rounded-xl bg-accent/10 border-border/50 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can I help you?"
                              className="min-h-[150px] rounded-xl bg-accent/10 border-border/50 focus-visible:ring-primary resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full md:w-auto rounded-full px-8">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
