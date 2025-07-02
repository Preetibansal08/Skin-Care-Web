import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 2.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 bg-[#EFF5E1] backdrop-blur-sm w-full"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="flex items-center justify-between h-20 w-full flex-wrap">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#2D3B36] font-inter tracking-wider">
              SKINCARE
            </h1>
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 font-inter"
            >
              All Products
            </a>
            <a
              href="#"
              className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 font-inter"
            >
              Serum
            </a>
            <a
              href="#"
              className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 font-inter"
            >
              Sunscreen
            </a>
            <a
              href="#"
              className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 font-inter"
            >
              Bundle
            </a>
          </nav>

          {/* Social Media & Cart Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 md:hidden">
              {/* Cart Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <span className="text-[#2D3B36] font-inter text-sm hidden md:inline-block">
              Cart (1)
            </span>

            {/* Heart Icon */}
            <button className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* User Icon */}
            <button className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
