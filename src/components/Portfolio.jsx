import React from "react";
import "./Portfolio.css";
import { Col, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div>
      <Container fluid className="Home-page">
        <Row>
          <Col sm={5}>
            <img
              style={{
                height: "600px",
                marginLeft: "-10px",
                marginTop: "-80px",
              }}
              src="images/Vector.png"
              alt=""
            />
          </Col>
          <Col className="hero-font" sm={2} style={{ marginTop: "200px" }}>
            <h1>PORTFOLIO</h1>
            <img src="/images/homecareer.png" alt="" />
          </Col>
          <Col sm={5} className="hero-second">
            <img
              style={{
                height: "600px",
                marginRight: "10px",
                marginTop: "-80px",
              }}
              src="images/Vector1.png"
              alt=""
            />
          </Col>
        </Row>

        {/* ----------------------------------BUTTONS------------------------------------ */}
        <div className="text-center my-4">
          <div className="d-flex flex-wrap justify-content-center btn-page">
            <div className="button active m-2">Show All</div>
            <div className="m-2 button">Website</div>
            <div className="m-2 button">Digital Art</div>
            <div className="m-2 button">Branding</div>
            <div className="m-2 button">Commercial</div>
            <div className="m-2 button">UI/UX Design</div>
            <div className="m-2 button">ECommerce</div>
          </div>
        </div>
      </Container>

      {/* ---------------------------------------HERO-SECTION---------------------------------------- */}

      <Container className="mt-5">
        <Row className="hero-row ">
          <Col className="hero-section-1">
            <img src="images/nexon.png" alt="" />
            <div className="hero-btn">
            <h5>Nexon</h5>
            <div className="main-btn"><p>Website</p></div>
            </div>
          </Col>
          <Col className="hero-section-2">
            <img src="images/design.png" alt="" />
          </Col>
          Learning by Examples
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
