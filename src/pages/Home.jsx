import React from "react";
import Feature1 from "../components/feature1/Feature1";
import Services from "../components/services/Services";
import HeroSection from "./../components/heroSection/HeroSection";
import Feature2 from "./../components/feature2/Feature2";
import CtaSection from "../components/cta/CtaSection";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Service Section */}
      <Services />
      {/* Feature1 Section */}
      <Feature1 />
      {/* Feature2 Section */}
      <Feature2 />
      {/*CtaSection Section */}
      <CtaSection />
    </>
  );
};

export default Home;
