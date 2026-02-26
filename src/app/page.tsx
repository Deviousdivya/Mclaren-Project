"use client";
import * as React from "react";
import { useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, lerp: 0.1 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // REQUIREMENT 2: Initial Load Animation
      gsap.fromTo(".lane-text", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power3.out" }
      );

      gsap.set(".box", { opacity: 0, y: 30 });

      // REQUIREMENT 3 & 4: Scroll-Driven & Performance
      let mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000", 
          scrub: 1,      // Tied to scroll progress
          pin: true,     // Fixed position
          invalidateOnRefresh: true,
        },
      });

      mainTl.to(carRef.current, {
        x: () => window.innerWidth - 120, 
        ease: "none",
      }, 0)
      .to(containerRef.current, {
        "--progress": "100%",
        ease: "none",
      }, 0)
      .to(".lane-text", {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
      }, 0);

      mainTl.to(".box", { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.2 
      }, 0.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#bdbdbd]"
      /* Use standard CSS object for the variable to avoid TS errors */
      style={{ "--progress": "0%" } as any}
    >
      <div className="h-screen w-full flex items-center relative overflow-hidden">
        
        <div className="box box1"><span>58%</span><p>INCREASE IN PICK UP POINT USE</p></div>
        <div className="box box3"><span>27%</span><p>INCREASE IN PICK UP POINT USE</p></div>

        <div className="lane absolute w-full h-[200px] flex justify-center items-center z-[1]">
          <h1 className="lane-text">MCLAREN 720S</h1>
        </div>
        
        <div ref={carRef} className="car absolute left-0 z-[10] flex items-center h-[200px]">
          <Image
            src="/McLaren 720S 2022 top view.png"
            alt="car"
            width={420}
            height={800}
            priority
            className="object-contain" 
          />
        </div>

        <div className="box box2"><span>23%</span><p>DECREASED IN CUSTOMER PHONE CALLS</p></div>
        <div className="box box4"><span>40%</span><p>DECREASED IN CUSTOMER PHONE CALLS</p></div>
      </div>
    </main>
  );
}