import { Metadata } from "next";
import { CTA } from "@/components/sections/cta";
import { ProjectCategories } from "./project-categories";

export const metadata: Metadata = {
  title: "Construction Projects in Harrisburg & Southern Illinois",
  description:
    "View our portfolio of completed construction projects in Harrisburg, Marion, Carbondale & throughout Southern Illinois. 500+ successful residential & commercial builds. See our quality craftsmanship!",
  keywords: [
    "construction projects Harrisburg IL",
    "home building photos Southern Illinois",
    "construction portfolio Harrisburg",
    "completed projects Southern Illinois",
    "residential construction Harrisburg IL",
  ],
  openGraph: {
    title: "Our Construction Projects | Rannco Construction",
    description:
      "Browse our portfolio of 500+ completed construction projects in Harrisburg & Southern Illinois. Quality craftsmanship you can trust.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-background/80">
              Browse our portfolio of completed construction projects across Southern Illinois.
              Each project reflects our commitment to quality craftsmanship and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Check Out Our Work</h2>
              <p className="text-muted-foreground text-lg">
                Select a category to view our completed projects
              </p>
            </div>
            <ProjectCategories />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
