"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Clock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    icon: HelpCircle,
    question: "What are deals?",
    answer:
      "Simple tasks like app downloads, surveys, or trial subscriptions. Each deal is straightforward and designed to be completed quickly.",
  },
  {
    icon: Clock,
    question: "How long do they take?",
    answer:
      "Typically 10-20 minutes per deal. Most users complete all required deals within a few hours spread across a day or two.",
  },
  {
    icon: CheckCircle,
    question: "How many do I need?",
    answer:
      "Complete 5+ deals to receive your reward. The more deals you complete, the faster you can receive your discount code.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-10 sm:py-14 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div
          className={`text-center mb-6 sm:mb-8 transition-all duration-700 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mt-3 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-card border border-border/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#1a5336]/30 touch-card ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${150 + index * 100}ms` : "0ms",
                transitionProperty: "opacity, transform, border-color",
                transitionDuration: "500ms, 500ms, 300ms",
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="touch-expand w-full flex items-center gap-4 p-5 text-left cursor-pointer group rounded-2xl"
              >
                <div className="touch-icon flex-shrink-0 w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-[#1a5336]/10 transition-colors duration-200">
                  <faq.icon className="w-6 h-6 text-foreground/70 group-hover:text-[#1a5336] transition-colors duration-200" strokeWidth={1.5} />
                </div>
                <span className="flex-1 font-semibold text-foreground text-lg">
                  {faq.question}
                </span>
                <div className="touch-icon flex-shrink-0 w-10 h-10 bg-muted rounded-full flex items-center justify-center group-hover:bg-[#1a5336]/10 transition-colors duration-200">
                  <ChevronDown
                    className={`w-5 h-5 text-foreground/70 group-hover:text-[#1a5336] transition-all duration-300 ease-out ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 pt-0 pl-[4.5rem]">
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
