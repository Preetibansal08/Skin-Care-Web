import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GirlImg from "../assets/girl.png";
import PlumImg from "../assets/plum-img.png";

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const productRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundTextRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 2.8 });

    timeline
      .fromTo(
        subtitleRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        productRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        backgroundTextRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 0.1, duration: 2, ease: "power3.out" },
        "-=1.5"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#EFF5E1] overflow-hidden flex flex-col items-center justify-center px-4 text-center mt-[80px]"
    >
      <div
        ref={backgroundTextRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 pointer-events-none opacity-0 z-0"
      >
        <h1 className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-bold text-[#2D3B36] font-inter leading-none tracking-tighter select-none">
          SKINCARE
        </h1>
      </div>

      <div
        ref={productRef}
        className="absolute top-12 right-12 z-20 opacity-0 transition-transform duration-300 hover:scale-105 md:block hidden"
      >
        <img
          src={PlumImg}
          alt="Premium skincare product"
          className="w-28 h-32 object-cover rounded-xl"
        />
      </div>

      <div
        ref={subtitleRef}
        className="absolute top-12 left-8 md:left-16 max-w-md text-left opacity-0 z-10"
      >
        <p className="text-[#2D3B36] font-inter text-lg leading-relaxed">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transform your
          skincare routine with premium products that restore, protect, and
          enhance your natural glow every day.
        </p>
      </div>

      <h1
        ref={titleRef}
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#2D3B36] font-inter leading-tight tracking-tight opacity-0 mt-4 sm:mt-0"
      >
        GLOW <br />
        NATUR- <br />
        ALLY
      </h1>

      <div className="hidden md:block mt-4 mb-10"></div>
      <div
        ref={buttonRef}
        className="absolute bottom-[290px] left-20 md:left-16 z-10 opacity-0 md:opacity-100 md:block hidden"
      >
        <button className="bg-[#2D3B36] text-[#FEFFF4] px-8 py-4 rounded-full font-inter font-medium hover:bg-[#35433E] transition-all duration-300 transform hover:scale-105">
          Shop Now
        </button>
      </div>

      <div
        ref={imageRef}
        className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl opacity-0 transition-transform duration-300 hover:scale-105"
      >
        <img
          src={GirlImg}
          alt="Woman with avocado face mask"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-[#FEFFF4] px-4 py-2 rounded-full flex items-center gap-3 shadow-md w-[360px] h-[70px]">
          <div className="w-[60px] h-[60px] rounded-full border border-dashed border-[#2D3B36] flex items-center justify-center shrink-0">
            <div className="w-[52px] h-[52px] bg-[#2D3B36] rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={PlumImg}
                alt="Product Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <p className="text-[#2D3B36] font-inter text-sm font-medium leading-snug whitespace-nowrap">
            While giving you an invigorating <br /> cleansing experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
