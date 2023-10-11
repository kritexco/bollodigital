import React from "react";

import { InnerMain } from "@components/InnerMain";
// import { NavButton } from "@components/Buttons/NavButton";
import { TestimonialSection } from "@components/Sections/TestimonialSection";
// import { FeaturesSection } from "@components/Sections/FeaturesSection";

const StudiesPage = () => {
  return (
    <React.Fragment key={"studies"}>
      <InnerMain style={"body-bg-style-3"}>
        <h1>Testimonials</h1>
        {/* <NavButton to={"/"} label={"Back to Home"} /> */}
      </InnerMain>
      <TestimonialSection />
      {/* <FeaturesSection title="Featured Projects" slice={3} item={true} /> */}
    </React.Fragment>
  );
};

export default StudiesPage;
