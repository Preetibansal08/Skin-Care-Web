import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      },
    });

    timeline
      .to(textRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power2.in",
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power3.inOut",
      });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-cream flex items-center justify-center"
    >
      <div ref={textRef} className="opacity-0">
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal font-inter tracking-wider">
          SKINCARE
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
