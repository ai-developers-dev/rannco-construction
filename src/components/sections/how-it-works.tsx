"use client";

import {
  ClipboardCheck,
  FileSearch,
  PenTool,
  FileCheck,
  Wrench,
  Home,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: "Initial Consultation",
    description:
      "We meet with you to discuss your vision, requirements, and budget to understand exactly what you need for your construction project.",
  },
  {
    number: 2,
    icon: FileSearch,
    title: "Site Assessment",
    description:
      "Our team conducts a thorough evaluation of your property, taking measurements and assessing conditions to inform the project plan.",
  },
  {
    number: 3,
    icon: PenTool,
    title: "Design & Planning",
    description:
      "We develop detailed plans, select materials, and create a comprehensive project timeline and budget for your approval.",
  },
  {
    number: 4,
    icon: FileCheck,
    title: "Permits & Approvals",
    description:
      "We handle all necessary permits and regulatory approvals, ensuring your project meets all local building codes and requirements.",
  },
  {
    number: 5,
    icon: Wrench,
    title: "Construction Phase",
    description:
      "Our skilled crew executes the build with precision, keeping you updated on progress and maintaining a clean, safe worksite.",
  },
  {
    number: 6,
    icon: Home,
    title: "Final Walkthrough",
    description:
      "We conduct a detailed walkthrough to ensure every detail meets your expectations and our high standards of quality.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 text-primary"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
              <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
              <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.6" />
              <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our proven construction process ensures your project is completed on time,
            on budget, and to the highest standards.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[23px] sm:left-[27px] top-[50px] bottom-[50px] w-0.5 bg-primary/20" />

            {/* Steps */}
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-start gap-4 sm:gap-6">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 sm:pt-2">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <step.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
