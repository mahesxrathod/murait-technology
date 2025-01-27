import React from "react";
import "./Portfolio.css";
import { Button, Col, Container, Row } from "react-bootstrap";

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
              <div className="main-btn">
                <p>Website</p>
              </div>
            </div>
            <div className="btn-on">
              <Button variant="link" className="apply-now-button d-inline-flex">
                View Work
                <span className="ms-2 arrow-icon">↗</span>
              </Button>{" "}
            </div>
          </Col>
          <Col className="hero-section-2">
            <img src="images/design.png" alt="" />
            <div className="hero-btn">
              <h5>Book — Design of the year</h5>
              <div className="main-btn">
                <p>Website</p>
              </div>
            </div>
            <div className="btn-on">
              <Button variant="link" className="apply-now-button d-inline-flex">
                View Work
                <span className="ms-2 arrow-icon">↗</span>
              </Button>{" "}
            </div>
          </Col>
        </Row>
        <Row className="hero-row">
          <Col className="hero-section-1">
            <img src="images/designn.png" alt="" />
            <div className="hero-btn">
              <h5>Book — Design of the year</h5>
              <div className="main-btn">
                <p>Website</p>
              </div>
            </div>
            <div className="btn-on">
              <Button variant="link" className="apply-now-button d-inline-flex">
                View Work
                <span className="ms-2 arrow-icon">↗</span>
              </Button>{" "}
            </div>
          </Col>
          <Col className="hero-section-2 mb-5" style={{ marginTop: "150px" }}>
            <img src="images/lorem.png" alt="" />
            <div className="hero-btn">
              <h5>Lorem Ipsum is simply dummy the</h5>
              <div className="main-btn">
                <p>Website</p>
              </div>
            </div>
            <div className="btn-on">
              <Button variant="link" className="apply-now-button d-inline-flex">
                View Work
                <span className="ms-2 arrow-icon">↗</span>
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
