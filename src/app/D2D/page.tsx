import React from "react";

import { InnerMain } from "@components/InnerMain";
import { ServicesSection } from "@components/Sections/ServicesSection";
// import { NavButton } from "@components/Buttons/NavButton";
// import { FeaturesSection } from "@components/Sections/FeaturesSection";

const StudiesPage = () => {
  return (
    <React.Fragment key={"D2C"}>
      <InnerMain style={"body-bg-style-3"}>
        <h1>Direct To Consumer Services</h1>
         <p>Take your brand to the next level! </p> 
         <p>At BOLO Digital, we specialize in direct-to-consumer marketing that drives results.</p>
         <p>Our focus is simple: to help you connect with your target audience, harness the potential of social media, and boost your sales like never before.</p> 
      </InnerMain>
      {/* <FeaturesSection title="Featured Projects" slice={3} item={true} /> */}
      <ServicesSection />
    </React.Fragment>
  );
};

export default StudiesPage;
