"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

function useCountUp(end: number, duration: number = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Marion, IL",
    rating: 5,
    text: "Rannco Construction did an incredible job on our home addition. The team was professional, communicated every step, and finished ahead of schedule. Couldn't be happier with the results!",
  },
  {
    name: "Mike Thompson",
    location: "Carbondale, IL",
    rating: 5,
    text: "We hired Rannco for a complete kitchen and bathroom remodel. The quality of their work is outstanding, and they kept the project on budget. They truly care about their customers.",
  },
  {
    name: "Jennifer Davis",
    location: "Benton, IL",
    rating: 5,
    text: "From the initial consultation to the final walkthrough, Rannco Construction was top-notch. They built our dream home exactly as we envisioned. Best construction company in Southern Illinois!",
  },
  {
    name: "Robert Williams",
    location: "Herrin, IL",
    rating: 5,
    text: "The crew was incredibly respectful of our property and cleaned up everything when they were done. Our commercial renovation looks fantastic and was completed ahead of schedule.",
  },
];

export function Testimonials() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectsCount = useCountUp(500, 2000, isVisible);
  const yearsCount = useCountUp(20, 2000, isVisible);
  const satisfactionCount = useCountUp(100, 2000, isVisible);
  const ratingCount = useCountUp(50, 2000, isVisible); // 50 for 5.0

  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what homeowners and
            businesses across Southern Illinois have to say about their experience with Rannco Construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-4 flex-shrink-0" />
                  <div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-primary fill-primary"
                        />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div
          ref={statsRef}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              {projectsCount}+
            </div>
            <div className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-2">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              {yearsCount}+
            </div>
            <div className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-2">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              {satisfactionCount}%
            </div>
            <div className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-2">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              {(ratingCount / 10).toFixed(1)}
            </div>
            <div className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-2">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
