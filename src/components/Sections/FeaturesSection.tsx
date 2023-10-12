"use client";

import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import { BackgroundShape } from "@components/BackgroundShape";
import { FeatureModal } from "@components/Modals/FeatureModal";
import { NavButton } from "@components/Buttons/NavButton";
import { Container, Row, Col } from "react-bootstrap";
import { CDN } from "@utils/constant";

interface IFeaturesSection {
  title: string;
  slice: number;
  item: boolean;
}

const FeaturesSection = ({ title, slice, item }: IFeaturesSection) => {
  const [show, setShow] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState({ image: "", title: "", description: "" });

  const handleClose = () => setShow(false);
  const handleShow = (
    e: MouseEvent<HTMLAnchorElement | MouseEvent>,
    image: string,
    title: string,
    description: string
  ) => {
    e.preventDefault();
    setSelectedFeature({ image, title, description });
    setShow(true);
  };

  let features = [
    {
      image: CDN + "/images/featured-projects/featured-project-1.svg",
      title: "Data Prospecting",
      description:
        "Generate leads from a multitude of databases filtering to find your target market. Using our databases and web scraping tools we are able to find the most accurate leads that will apply to your sales campaigns",
    },
    {
      image: CDN + "/images/featured-projects/featured-project-2.svg",
      title: "CRM",
      description:
        "With Salesforce the number 1 CRM tool we are able to set up a custom pipeline as well as integrate with data prospecting tools. Managing customer relationships will ensure that no leads fall through the cracks and that you are always prepared for any sales situation.",
    },
    {
      image: CDN + "/images/featured-projects/featured-project-3.svg",
      title: "Direct Outreach",
      description:
        "Our team of trained sales professionals will reach out to provided leads with language of your choice. All interested leads will be booked into your calendar and we will follow up with them before the meeting ensuring the best conversion rate.",
    },
    {
      image: CDN + "/images/featured-projects/featured-project-4.svg",
      title: "Digital Agency",
      subTitle: "Web Design",
      description:
        "This project is a showcase of our web design expertise for a digital agency. We've collaborated with the agency to create visually appealing websites that not only represent their brand but also engage visitors effectively. Our designs are tailored to their unique needs.",
    },
    {
      image: CDN + "/images/featured-projects/featured-project-5.svg",
      title: "Agency Web Application",
      subTitle: "Web Design",
      description:
        "Our Agency Web Application project involves the development of a web-based application for a creative agency. The application serves as a hub for managing projects, client interactions, and team collaboration. It's designed to streamline agency operations and enhance their online presence.",
    },
    {
      image: CDN + "/images/featured-projects/featured-project-6.svg",
      title: "Digital Agency (Web Development)",
      subTitle: "Web Development",
      description:
        "In this project, we've taken on web development tasks for a digital agency. Our focus is on creating functional and responsive websites that align with the agency's goals. From front-end development to back-end coding, we provide comprehensive web development solutions.",
    },
  ];

  if (slice) {
    features = features.slice(0, slice);
  }

  if (item) {
    features.map((feature, index) => {
      index++;
      feature.title = "Oops! Under maintenance.";
      feature.description =
        "This part of the site is under maintenance for technical reasons. Try again later!";
      feature.image = CDN + `/images/featured-projects/featured/project-featured-${index}.svg`;
      return feature;
    });
  }

  return (
    <React.Fragment>
      <section className="featured-projects section-padding">
        <BackgroundShape direction={"left"} className={"shape-home-banner"} />
        <Container>
          <h2 className={!item ? "text-center" : ""}>{title}</h2>
          {!item ? (
            <p className="section-subheading text-center">
             Our B2B lead generation and outreach allow companies to get in touch with their target clientele faster and cheaper than the competition. 
            </p>
          ) : (
            ""
          )}
          <div className="featured-project-showcase text-center">
            <Row>
              {features.map(({ image, title, subTitle, description }, index) => {
                return (
                  <Col
                    md={6}
                    lg={4}
                    className={`grid-item ${item ? "featured-item" : ""}`}
                    key={index}
                  >
                    <Link
                      href={`#featured-${index}`}
                      className="featured-content-block content-block"
                      onClick={e => handleShow(e, image, title, description)}
                    >
                      <div className="img-container">
                        <Image
                          src={image}
                          alt={`featured-${index}`}
                          className="img-fluid"
                          height="0"
                          width="0"
                        />
                      </div>
                      <h5>
                        <span className="content-block__sub-title">{subTitle}</span>
                        {title}
                      </h5>
                    </Link>
                  </Col>
                );
              })}
              {!item && !isNaN(slice) ? (
                <NavButton to={"/portfolio"} label={"Learn More"} />
              ) : (
                " "
              )}
            </Row>
          </div>
        </Container>
      </section>
      {
        <FeatureModal
          show={show}
          handleClose={handleClose}
          image={selectedFeature.image}
          alt={`Modal for ${selectedFeature.title}`}
          title={selectedFeature.title}
          description={selectedFeature.description}
          removeBtn={item || isNaN(slice)}
        />
      }
    </React.Fragment>
  );
};

export { FeaturesSection };
