"use client";

import { Button } from "@/components/ui/button";
import { CircleCheckBig, ChevronDown } from "lucide-react";
import { ContactDialog } from "@/components/forms/contact-dialog";

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        {/* Gradient overlay - from orange to black */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div
            className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium mb-3 sm:mb-4 "
          >
            Southern Illinois Trusted Construction Experts
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 ">
            Building Your Vision With Quality Construction Solutions
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl ">
            Rannco Construction delivers expert residential and commercial
            construction, renovations, and design-build services in Benton,
            Marion, Carbondale, and throughout Southern Illinois.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 ">
            <ContactDialog source="get_started">
              <Button
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
            </ContactDialog>
            <ContactDialog source="consultation">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
              >
                Request Consultation
              </Button>
            </ContactDialog>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-white/90 ">
            <div className="flex items-center gap-2">
              <CircleCheckBig className="h-[18px] w-[18px] text-white" />
              <span className="text-sm sm:text-base">Licensed & Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className="h-[18px] w-[18px] text-white" />
              <span className="text-sm sm:text-base">Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className="h-[18px] w-[18px] text-white" />
              <span className="text-sm sm:text-base">5-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2"
      >
        <span className="text-sm">Scroll down</span>
        <ChevronDown className="h-5 w-5" />
      </button>
    </section>
  );
}
