import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import correct social media icons from react-icons
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const backgroundTextRef = useRef(null);

  useEffect(() => {
    if (backgroundTextRef.current) {
      // Create a continuous horizontal movement animation
      gsap.to(backgroundTextRef.current, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <footer className="relative bg-[#35433E] text-white overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h1
          ref={backgroundTextRef}
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-center leading-none tracking-tight whitespace-nowrap"
        >
          SKINCARE SKINCARE SKINCARE
        </h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Call to action */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Join The Skincare
              <br />
              Community Now.
            </h2>
          </div>

          {/* Right side - Contact info */}
          <div className="space-y-4 lg:text-right">
            <p className="text-[#E7E8E0] text-lg font-light">Get in Touch</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light">
              contact.skincare.com
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 pt-8 border-t border-[#E7E8E0]/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Social media links */}
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-[#E7E8E0] hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
              >
                {/* Use the correct icon component */}
                <FaFacebookF className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-light">Facebook</span>
              </a>
              <a
                href="#"
                className="text-[#E7E8E0] hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
              >
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-light">Instagram</span>
              </a>
              <a
                href="#"
                className="text-[#E7E8E0] hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
              >
                <FaYoutube className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-light">YouTube</span>
              </a>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap items-center space-x-6 md:space-x-8">
              <a
                href="#"
                className="text-[#E7E8E0] hover:text-white transition-colors duration-300 text-sm font-light"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#E7E8E0] hover:text-white transition-colors duration-300 text-sm font-light"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#E7E8E0] hover:text-white transition-colors duration-300 text-sm font-light"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
