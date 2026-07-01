"use client";

import { MousePointerClick, Mail, ClipboardCheck, Gift, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: MousePointerClick,
    title: "Click apply now",
    description: "Start your journey to big savings",
  },
  {
    icon: Mail,
    title: "Enter your email & basic info",
    description: "Quick 30-second signup process",
  },
  {
    icon: ClipboardCheck,
    title: "Complete the survey",
    description: "Share your preferences",
  },
  {
    icon: Gift,
    title: "Complete 5+ deals",
    description: "Simple tasks like app downloads & trials",
  },
  {
    icon: Trophy,
    title: "Receive your $500 reward",
    description: "Delivered straight to your inbox",
  },
];

export function Steps() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="how-it-works" ref={sectionRef} className="pt-2 pb-6 sm:pt-4 sm:pb-10 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`text-center mb-8 sm:mb-10 transition-all duration-700 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mt-3 text-balance">
            Five Simple Steps to Rewards
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group bg-card border border-border/60 rounded-2xl p-4 hover:border-[#1a5336]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#1a5336]/5 hover:-translate-y-1 touch-card ${
                  sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: sectionVisible ? `${150 + index * 80}ms` : "0ms",
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "500ms, 500ms, 300ms, 300ms",
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Step number */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 bg-[#1a5336] text-white rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ${
                      sectionVisible ? "scale-100" : "scale-0"
                    }`}
                    style={{
                      transitionDelay: sectionVisible ? `${300 + index * 80}ms` : "0ms",
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="touch-icon w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#1a5336]/10 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-foreground/70 group-hover:text-[#1a5336] transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-1.5">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
