import { ArrowRight } from "lucide-react";

export function RoofingBanner() {
  return (
    <section className="py-10 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <h2 className="text-xl md:text-2xl font-bold">
            Need Roofing Repair or Replacement?
          </h2>
          <a
            href="https://ranncoroof.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md font-semibold text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
          >
            Visit Rannco Roofing
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
