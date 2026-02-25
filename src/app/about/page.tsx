import { Metadata } from "next";
import { CheckCircle2, Users, Award, Shield, Clock, Target, Home, Briefcase } from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "About Rannco Construction | Trusted Contractors in Southern Illinois",
  description:
    "Meet Rannco Construction - Southern Illinois' most trusted construction contractor with 20+ years experience. Licensed, insured & locally owned. Residential & commercial construction serving Benton, Marion, Carbondale & surrounding areas.",
  keywords: [
    "about Rannco Construction",
    "construction company Benton IL",
    "trusted contractor Southern Illinois",
    "licensed general contractor Marion",
    "family owned contractor Carbondale",
    "home builder Southern Illinois",
  ],
  openGraph: {
    title: "About Rannco Construction | 20+ Years Experience",
    description:
      "Southern Illinois' most trusted construction contractor. 20+ years experience. Licensed, insured & locally owned. Residential & commercial construction.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We never cut corners. Every project we complete uses premium materials and follows best practices to ensure lasting results.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Your satisfaction is our priority. We communicate clearly, respect your property, and stand behind our work with solid warranties.",
  },
  {
    icon: Briefcase,
    title: "Project Expertise",
    description:
      "With 20+ years of construction experience, we bring deep knowledge to every project from residential builds to commercial construction.",
  },
  {
    icon: Target,
    title: "Honest Pricing",
    description:
      "No hidden fees or surprise charges. We provide detailed quotes upfront and stick to them, so you know exactly what to expect.",
  },
];

const expertise = [
  {
    icon: Clock,
    value: "20+",
    label: "Years Experience",
    description: "Building excellence across the region",
  },
  {
    icon: Home,
    value: "500+",
    label: "Homes & Buildings",
    description: "Residential and commercial projects",
  },
  {
    icon: Award,
    value: "500+",
    label: "Projects Completed",
    description: "Satisfied clients served",
  },
  {
    icon: Users,
    value: "100%",
    label: "Satisfaction Rate",
    description: "We stand behind our work",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Rannco Construction
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Southern Illinois&apos; Most Trusted Construction Company
            </h1>
            <p className="text-lg text-background/80">
              Over 20 years of construction excellence delivering quality
              residential and commercial projects across Southern Illinois.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertise.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-muted/30 rounded-xl border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Built on Experience, Driven by Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                What makes Rannco Construction unique is our commitment to
                quality and our deep understanding of the construction process
                from start to finish. With over 20 years of experience, we&apos;ve
                honed our craft across residential and commercial projects.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team combines hands-on construction expertise with modern
                project management practices to deliver projects on time, on
                budget, and to the highest standards of quality.
              </p>
              <p className="text-muted-foreground">
                As a locally owned business serving Benton, Marion, Carbondale, and
                surrounding communities, we&apos;re invested in our neighbors&apos; homes
                and businesses, committed to building lasting relationships based
                on trust and quality work.
              </p>
            </div>
            <div className="relative">
              <div
                className="aspect-square rounded-2xl overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/projects/IMG_6647.PNG')`,
                }}
              />
              <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-xl">
                <div className="text-3xl sm:text-4xl font-bold">20+</div>
                <div className="text-xs sm:text-sm opacity-90">Years Building Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values guide everything we do, from the smallest repair to
              the largest construction project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 p-6 rounded-xl bg-muted/30 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                The Rannco Difference
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                When you choose Rannco Construction, you&apos;re choosing a partner
                with the expertise, dedication, and integrity to bring your
                vision to life.
              </p>

              <ul className="space-y-4">
                {[
                  "Licensed, bonded, and fully insured",
                  "20+ years construction expertise",
                  "Residential and commercial specialists",
                  "Free estimates with no obligation",
                  "5-year workmanship warranty",
                  "Premium materials from trusted manufacturers",
                  "Clean, professional worksite management",
                  "On-time and on-budget project delivery",
                  "Dedicated project manager for every job",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-foreground text-background p-6 rounded-xl text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm opacity-80">Years Building</div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
                <Home className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Done</div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Satisfaction</div>
              </div>
              <div className="bg-foreground text-background p-6 rounded-xl text-center">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">5yr</div>
                <div className="text-sm opacity-80">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTA />
    </main>
  );
}
