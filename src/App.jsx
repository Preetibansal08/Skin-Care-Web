import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DescriptionSection from "./components/DescriptionSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductShowcase from "./components/ProductShowcase";
import CtaSection from "./components/CtaSection";
import SecondProductShowcase from "./components/SecondProductShowcase";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Prevent scrolling during loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <div className="App">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div
        className={`main-content ${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000`}
      >
        <Header />
        <div className="h-[2px] sm:h-20 md:h-[40px] bg-[#EFF5E1]"></div>
        <HeroSection />

        <DescriptionSection />
        <FeaturesSection />
        <ProductShowcase />
        <CtaSection />
        <SecondProductShowcase />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
