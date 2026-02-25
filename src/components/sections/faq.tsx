"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, RotateCw } from "lucide-react";

type Category = "all" | "general" | "services" | "financial";

interface FAQItem {
  question: string;
  answer: string;
  category: Category[];
}

const faqs: FAQItem[] = [
  {
    question: "How long does a typical construction project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A kitchen remodel may take 4-8 weeks, while a custom home build can take 6-12 months. We provide a detailed timeline during your consultation and keep you updated throughout the process.",
    category: ["general", "services"],
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Rannco Construction is fully licensed, bonded, and insured. We carry comprehensive general liability insurance and workers' compensation coverage to protect both our team and your property. We're happy to provide proof of insurance upon request.",
    category: ["general"],
  },
  {
    question: "How do you handle unexpected issues during construction?",
    answer:
      "Unexpected issues can arise in any construction project. When they do, we communicate with you immediately, present options, and provide transparent cost estimates before proceeding. We never make changes without your approval.",
    category: ["general", "services"],
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer completely free consultations and project estimates. Our experienced team will assess your needs, discuss your vision, and provide you with an honest evaluation and detailed quote with no obligation.",
    category: ["general", "services"],
  },
  {
    question: "What types of projects do you handle?",
    answer:
      "We handle a wide range of construction projects including custom home builds, commercial construction, kitchen and bathroom remodels, home additions, concrete and foundation work, and full-scale renovations. No project is too big or too small.",
    category: ["services"],
  },
  {
    question: "Should I renovate my existing home or build new?",
    answer:
      "This depends on several factors including the condition of your current home, your budget, and your goals. Generally, renovation is more cost-effective if the structure is sound. During our free consultation, we'll help you evaluate both options and determine the best path forward.",
    category: ["services"],
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we understand that construction is a significant investment. We offer flexible financing options to help make your project more affordable. Contact us to discuss available financing plans and find an option that works for your budget.",
    category: ["financial"],
  },
  {
    question: "What warranties do you offer?",
    answer:
      "We offer a 5-year workmanship warranty on all our construction projects, in addition to manufacturer warranties on materials. We stand behind our work and are committed to your long-term satisfaction.",
    category: ["general", "financial"],
  },
];

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "General", value: "general" },
  { label: "Services", value: "services" },
  { label: "Financial", value: "financial" },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  isLast,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={`${!isLast ? "border-b border-border/50" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 pr-4">
          <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
          <span className="font-medium text-foreground text-left">{faq.question}</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pl-14 text-muted-foreground leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category.includes(activeCategory));

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <RotateCw className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to common questions about our construction services, process, and more.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-gray-200 rounded-full px-4 py-2 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setOpenIndex(null);
                }}
                className={`px-8 sm:px-10 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-primary text-white shadow-lg"
                    : "text-gray-600 hover:text-foreground hover:bg-white/70"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={`${activeCategory}-${index}`}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggleQuestion(index)}
                isLast={index === filteredFaqs.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
