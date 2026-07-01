"use client";

import { ArrowRight, Gift, Sparkles, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTA() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="apply" ref={sectionRef} className="pt-10 pb-14 sm:pt-14 sm:pb-18 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative bg-[#1a5336] rounded-3xl p-7 sm:p-10 text-center overflow-hidden transition-all duration-700 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          
          {/* Floating icons with animation */}
          <div className="absolute top-8 left-8 opacity-20 animate-float" style={{ animationDelay: "0s" }}>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center rotate-12">
              <Gift className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div className="absolute top-12 right-12 opacity-20 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center -rotate-6">
              <Sparkles className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div className="absolute bottom-12 left-16 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center rotate-6">
              <BookOpen className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="relative z-10">
            <div
              className={`inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-5 transition-all duration-500 ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: sectionVisible ? "200ms" : "0ms" }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/95 font-medium">Applications Open</span>
            </div>
            
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 max-w-2xl mx-auto text-balance transition-all duration-600 ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: sectionVisible ? "300ms" : "0ms" }}
            >
              Ready to Start Saving?
            </h2>
            
            <p
              className={`text-white/90 text-base sm:text-lg mb-7 max-w-xl mx-auto leading-relaxed font-normal transition-all duration-600 ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: sectionVisible ? "400ms" : "0ms" }}
            >
              Join thousands of readers who have already claimed their $500 reward. Your next great read is just a few clicks away.
            </p>
            
            <div
              className={`transition-all duration-600 ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: sectionVisible ? "500ms" : "0ms" }}
            >
              <a
                href="https://trksy.org/aff_c?offer_id=4347&aff_id=26188"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-button group inline-flex items-center gap-3 bg-white text-[#1a5336] px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/95 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                APPLY NOW
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            
            <p
              className={`mt-4 text-sm text-white/80 font-medium transition-all duration-500 ease-out ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: sectionVisible ? "600ms" : "0ms" }}
            >
              No credit card required - Takes less than 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
