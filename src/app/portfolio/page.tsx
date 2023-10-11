import React from "react";

import { InnerMain } from "@components/InnerMain";
import { FeaturesSection } from "@components/Sections/FeaturesSection";

const PortfolioPage = () => {
  return (
    <React.Fragment key={"portfolio"}>
      <InnerMain style={"body-bg-style-3"}>
        <h1>Business to Business Services</h1>
        <p>
        Our B2B lead generation and outreach allow companies to get in touch
          <br />
           with their target clientele faster and cheaper than the competition. 
        </p>
      </InnerMain>
      {/* <FeaturesSection title="Featured Projects" slice={3} item={true} /> */}
      <FeaturesSection title="B2B Services" slice={3} item={false} />
    </React.Fragment>
  );
};

export default PortfolioPage;
