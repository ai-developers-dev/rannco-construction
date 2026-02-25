import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Home,
  Building2,
  ClipboardList,
  PenTool,
  HardHat,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Construction Services in Benton, Marion & Carbondale IL",
  description:
    "Professional construction services in Southern Illinois: residential & commercial construction, renovations, design-build, and project management. Serving Benton, Marion, Carbondale, Herrin & surrounding areas. Free estimates!",
  keywords: [
    "residential construction Benton IL",
    "commercial construction Marion IL",
    "home renovation Carbondale",
    "design build Southern Illinois",
    "general contractor Herrin IL",
    "kitchen remodel West Frankfort",
    "concrete foundation Du Quoin IL",
    "construction services Southern Illinois",
  ],
  openGraph: {
    title: "Professional Construction Services | Rannco Construction",
    description:
      "Complete construction services in Southern Illinois. Residential & commercial construction, renovations, design-build & project management. Free estimates!",
  },
};

const services = [
  {
    id: "residential",
    badge: "Custom Homes",
    title: "Residential Construction",
    description:
      "Custom home building, additions, and residential construction projects tailored to your vision and lifestyle.",
    icon: Home,
    features: [
      "Custom home builds",
      "Home additions & expansions",
      "Garage construction",
      "Outdoor living spaces",
      "Energy-efficient design",
      "Quality craftsmanship guaranteed",
    ],
    popular: true,
  },
  {
    id: "commercial",
    badge: "Business Spaces",
    title: "Commercial Construction",
    description:
      "Office buildings, retail spaces, and commercial facilities built to meet your business needs and timelines.",
    icon: Building2,
    features: [
      "Office build-outs",
      "Retail space construction",
      "Warehouse & industrial",
      "Restaurant fit-outs",
      "ADA compliance",
      "Tenant improvements",
    ],
    popular: false,
  },
  {
    id: "renovations",
    badge: "Remodeling",
    title: "Renovations & Remodeling",
    description:
      "Transform your existing space with kitchen, bathroom, and whole-house renovations that add value and comfort.",
    icon: Wrench,
    features: [
      "Kitchen remodels",
      "Bathroom renovations",
      "Whole-house updates",
      "Basement finishing",
      "Room conversions",
      "Structural modifications",
    ],
    popular: false,
  },
  {
    id: "management",
    badge: "Oversight",
    title: "Project Management",
    description:
      "Professional project management services to keep your construction project on time, on budget, and stress-free.",
    icon: ClipboardList,
    features: [
      "Timeline management",
      "Budget tracking",
      "Subcontractor coordination",
      "Quality assurance",
      "Regular progress reports",
      "Permit management",
    ],
    popular: false,
  },
  {
    id: "design-build",
    badge: "End-to-End",
    title: "Design-Build",
    description:
      "Streamlined design and construction under one roof for a seamless experience from concept to completion.",
    icon: PenTool,
    features: [
      "Architectural design",
      "3D visualization",
      "Material selection",
      "Single point of contact",
      "Faster project delivery",
      "Cost-effective solutions",
    ],
    popular: false,
  },
  {
    id: "concrete",
    badge: "Foundations",
    title: "Concrete & Foundation",
    description:
      "Expert concrete work and foundation services that provide a solid base for any construction project.",
    icon: HardHat,
    features: [
      "Foundation construction",
      "Concrete driveways",
      "Patios & walkways",
      "Retaining walls",
      "Foundation repair",
      "Stamped concrete",
    ],
    popular: false,
  },
];

const materials = [
  {
    name: "Concrete & Masonry",
    description: "Durable foundation and structural materials",
    lifespan: "50+ years",
  },
  {
    name: "Steel Framing",
    description: "Strong commercial and industrial framing",
    lifespan: "50+ years",
  },
  {
    name: "Wood Framing",
    description: "Traditional residential construction standard",
    lifespan: "30-50 years",
  },
  {
    name: "Composite Materials",
    description: "Modern, versatile building solutions",
    lifespan: "25-40 years",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Construction Solutions for Every Project
            </h1>
            <p className="text-lg text-background/80 mb-8">
              From custom home builds to commercial construction and renovations,
              our expert team delivers quality workmanship and exceptional service
              on every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:chood@rannco.com"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Email for Quote
              </a>
              <a
                href="tel:+16185941178"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent text-white border border-white hover:bg-white hover:text-foreground h-11 px-8"
              >
                <Phone className="h-5 w-5" />
                (618) 594-1178
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="border-border/50 hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-4 text-primary border-primary/30">
                    {service.badge}
                  </Badge>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:chood@rannco.com"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Quality Materials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Building Materials
            </h2>
            <p className="text-muted-foreground text-lg">
              We use premium materials from trusted manufacturers to ensure
              your project stands the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material) => (
              <Card key={material.name} className="border-border/50 text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{material.name}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">
                    {material.lifespan}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Expected Lifespan
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              We&apos;ve streamlined our process to make your construction project as
              smooth and stress-free as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description:
                  "We assess your needs and discuss your vision, providing expert recommendations and a clear plan.",
              },
              {
                step: "2",
                title: "Detailed Quote",
                description:
                  "You receive a comprehensive, written estimate with no hidden fees or surprises.",
              },
              {
                step: "3",
                title: "Quality Construction",
                description:
                  "Our expert crew completes your project efficiently while respecting your property and timeline.",
              },
              {
                step: "4",
                title: "Final Walkthrough",
                description:
                  "We review the completed work with you and ensure your complete satisfaction.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Proudly Serving Southern Illinois
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We provide construction services throughout Southern Illinois, including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Benton",
                "Marion",
                "Carbondale",
                "Herrin",
                "Murphysboro",
                "Carterville",
                "Johnston City",
                "West Frankfort",
                "Du Quoin",
                "Anna",
                "Vienna",
                "Harrisburg",
              ].map((city) => (
                <Badge
                  key={city}
                  className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {city}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              Don&apos;t see your city? Contact us—we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
