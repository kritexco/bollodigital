import React from "react";


import { BackgroundShape } from "@components/BackgroundShape";
import { NavButton } from "@components/Buttons/NavButton";
import { ServicesSection } from "@components/Sections/ServicesSection";
import { TestimonialSection } from "@components/Sections/TestimonialSection";
import { AboutSection } from "@components/Sections/AboutSection";
import { FeaturesSection } from "@components/Sections/FeaturesSection";
import { CaseStudySection } from "@components/Sections/CaseStudySection";

const HomePage = () => {
  return (
    <React.Fragment key={"home"}>
      <main className="banner small-agency-home-header-bg">
        <div className="container">
          <BackgroundShape direction={"left"} className={"shape-home-banner"} />
          <div className="banner-content">
            <h1>
            Take your Business
              <br />to the next level
            </h1>
            <p className="section-subheading">
              Empowering entrepreneurs to turn their dreams
              <br /> into profitable businesses. Start your journey today.
            </p>
            <NavButton to="/portfolio" label={"B2B Services"} />
            <NavButton to="/D2D" label={"D2C Services"} />
          </div>
        </div>
      </main>
      <ServicesSection />
      <AboutSection isInner={false} />
      <FeaturesSection title="Business to Business Services" slice={3} item={false} />
      <CaseStudySection />
      <TestimonialSection />
      <section className="clients">
        <div className="container">
          <div className="row justify-content-center clients-wrapper">
            
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
