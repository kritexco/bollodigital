"use client";

import React from "react";
import Link from "next/link";

import { styles } from "@utils/styles";
import { Container, Row, Col } from "react-bootstrap";

const TestimonialSection = () => {
  const services = [
    {
      description:
        "BOLO digital changed my life through my company, BOLO created a custom plan for my needs and financial situation to ensure my happiness and well being, everyone i spoke to at BOLO digital was very professional and intelligent, this helped grow my small business",
      Author: " - Jackson Blackwood",
      style: styles("cd"),
    },
    {
      description:
        "“I was a instagram model and photographer looking to grow my social medias in looks to pursuing this as a full time job, but with all the modern day competition it was hard to grow, BOLO digital managed, promoted and professionalized all of my social medias resulting in massive gain, i still get to do what i love most, while letting the professionals at bolo handle the weeds in the grass” ",
      Author: " - Amelia Sterling",
      style: styles("ab"),
    },
    {
      description:
        "“i run a small play to earn project and was looking to expand, I connected with BOLO digital and got them to run my twitter and discord over a 3 month period, this resulted in my discord becoming more active than ever, paired with my twitter interactions skyrocketing, very pleased with my investment” ",
      Author: "- Isabella Montague",
      style: styles("ef"),
    },
    {
      description:
        "“after teaming up with BOLO i have more time to spend on the personal side of my business, eradicating all of the high-labor work in my small business such as trying to promote on social media to responding to messages sponged up all of my time, and took my life, bolo covered all of this for me while simultaneously augmenting my network traffic” ",
      Author: " - Olivia Hawthorne",
      style: styles("cd"),
    },
    {
      description:
        "“About a year ago is started a small tech company out of my bedroom of which i was looking for some smart clients around to team up with and/or hire, however i had no clue on where or how to find any, this is where BOLO  came in to help me, BOLO connected me to the clients i needed through a customized CRM that i still use to this day, exceptionally happy with what i received and for what price i payed” ",
      Author: " - Benjamin Wainwright",
      style: styles("ab"),
    },
  ];

  return (
    <React.Fragment key={"Testimonial"}>
      <section className="services z-3">
        <h1 className="text-center padding:50px">Testimonial Services</h1>
        <Container>
          <Row className="justify-content-center">
            {services.map(({ description, Author, style }, index) => {
              return (
                <Col md={6} lg={4} key={index} className="mb-5" data-aos="fade-up">
                  <Link href="#" className="service-box text-center content-block">
                    <div className={`box-bg ${style.box}`}></div>
                    <span
                      className={`icon-container ${style.light}`}
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {/* <i className={`${icon} ${style.icon}`}></i> */}
                    </span>
                    {/* <h5 className="text-center">{title}</h5> */}
                    <p className="color-p-desc">{description}</p>
                    <p className="color-p-desc">{Author}</p>
                    </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export { TestimonialSection };
