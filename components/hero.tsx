"use client";

import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Hero() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden pt-4 pb-4 sm:pt-6 sm:pb-6 px-4"
    >
      {/* Subtle background shapes with gentle floating animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-muted/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1
          className={`text-2xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-semibold text-foreground leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-5 max-w-[320px] sm:max-w-2xl md:max-w-3xl mx-auto transition-all duration-700 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The{" "}
          <span className="text-[#1a5336] font-semibold">Barnes &amp; Noble</span>{" "}
          Method That&apos;s Changing Everything
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base sm:text-xl text-muted-foreground max-w-[300px] sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed text-pretty font-light transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Discover how people are saving on books, e-readers, gifts, and everyday reads.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://trksy.org/aff_c?offer_id=4347&aff_id=26188"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-button group inline-flex items-center gap-3 bg-[#1a5336] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#123a26] transition-all duration-300 hover:shadow-xl hover:shadow-[#1a5336]/20 hover:-translate-y-0.5"
          >
            APPLY NOW
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Trust indicator with avatars */}
        <div
          className={`mt-4 sm:mt-5 flex flex-col items-center gap-2 transition-all duration-700 ease-out delay-[400ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Stacked Avatars */}
          <div className="flex items-center -space-x-2">
            <img
              src="/images/avatar-1.png"
              alt="Reader"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-background shadow-sm object-cover"
            />
            <img
              src="/images/avatar-2.png"
              alt="Reader"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-background shadow-sm object-cover"
            />
            <img
              src="/images/avatar-3.png"
              alt="Reader"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-background shadow-sm object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground/70 font-medium">
            <span className="sm:hidden">Join 12,000+ readers who&apos;ve<br />already claimed their rewards.</span>
            <span className="hidden sm:inline">Join 12,000+ readers who&apos;ve already claimed their rewards.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
