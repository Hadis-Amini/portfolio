import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ExperienceCard = ({ data }) => {
  useEffect(() => {
    Aos.init({
      duration: 4000,
      offset: 70,
      mirror: true,
      anchorPlacement: "top-center",
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false,
    );
  }, []);
  return (
    <Col lg="6">
      <Card
        data-aos={"animationLeft"}
        data-aos-easing="linear"
        data-aos-duration="1000"
        style={{ flex: 1 }}
        className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
      >
        <CardBody className="">
          <div
            className="icon icon-shape bg-gradient-white shadow rounded-circle text-info mb-3"
            style={{ width: "100px", height: "100px" }}
          >
            <i
              className={`ni ni-${data.icon} text-info`}
              style={{ fontSize: "32px" }}
            />
          </div>

          <CardTitle tag="h4" className="mb-2">
            {data.company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {data.role}
          </CardSubtitle>
          <CardSubtitle>{data.date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {data.desc}
            <ul>
              {data.descBullets
                ? data.descBullets.map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
