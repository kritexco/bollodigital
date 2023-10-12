import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";

import { CDN } from "@utils/constant";

const SEOPage = () => {
  
  return (
    <React.Fragment key={"DOI"}>
      <InnerMain style={"body-style-1"}>
        <h1>Direct Outreach</h1>
      
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/seo.svg"}>
        <p>
        Our Food App Design project is all about creating stunning mobile app designs for applications related to food and dining. We aim to provide an appetizing visual experience that makes it easy for users to order food, discover new recipes, and explore restaurants in their area.
        </p>
      </DescriptionService>
    </React.Fragment>
  );
};

export default SEOPage;
