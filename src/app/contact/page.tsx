import React from "react";

import { InnerMain } from "@components/InnerMain";
import { NavButton } from "@components/Buttons/NavButton";
// import { FeaturesSection } from "@components/Sections/FeaturesSection";

const StudiesPage = () => {
  return (
    <React.Fragment key={"contact"}>
      <InnerMain style={"body-bg-style-3"}>
        <h1>Contact Us</h1>
        <p>312 West 2nd Street #3013</p> 
        <p>Casper, WY 82601</p>
        <p>Email id - Contact@beonthelookout.co</p>
        <NavButton to={"/"} label={"Back to Home"} />
      </InnerMain>
      {/* <FeaturesSection title="Featured Projects" slice={3} item={true} /> */}
    </React.Fragment>
  );
};

export default StudiesPage;
