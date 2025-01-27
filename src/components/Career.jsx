import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Career.css";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
  Form,
} from "react-bootstrap";

const Career = () => {
  const cardsData = [
    { title: "Backend Developer", users: 2, team: 5, location: "Ahmedabad" },
    { title: "Flutter Developer", users: 2, team: 5, location: "Ahmedabad" },
    { title: "Content Writer", users: 2, team: 5, location: "Ahmedabad" },
    { title: "PHP Developer", users: 2, team: 5, location: "Ahmedabad" },
    { title: "Backend Developer", users: 2, team: 5, location: "Ahmedabad" },
    { title: "Flutter Developer", users: 2, team: 5, location: "Ahmedabad" },
    { title: "Content Writer", users: 2, team: 5, location: "Ahmedabad" },
    { title: "PHP Developer", users: 2, team: 5, location: "Ahmedabad" },
  ];
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
            <h1>CAREER</h1>
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

        {/* ANOTHER PART */}
        <Container>
          <Row className="a-part">
            <h1>How Is It Like To Be In Murait Technologies?</h1>
          </Row>
          <Row className="aa-part">
            <Col sm={7} className="a-part-text">
              <p>• 5 day a week</p>
              <p>• Flexible Timings & Work From Home Facility</p>
              <p>• Trainee Session and Monthly Events</p>
              <p>• Inhouse Cafeteria</p>
              <p>• Highest Payroll in the Region</p>
              <p>• Cultural Celebration, Picnics, Sport Events</p>
            </Col>
            <Col sm={5}>
              <img src="images/image.png" alt="" />
            </Col>
          </Row>
        </Container>

        {/* ANOTHER PAGE */}

        <section>
          <Row className="box-part">
            <img src="images/Linear.png" alt="" />
          </Row>
          <div className="for-bgcolor">
            <Row className="box-text">
              <h1>Who Are We Looking For?</h1>
            </Row>
          </div>
          <section className="features-section py-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 in-section">
                {/* Problem Solvers */}
                <div className="col">
                  <div
                    className="feature-card p-4 h-90"
                    style={{
                      boxShadow: "2px 3.5px 2px #333333",
                      border: "2px solid black",
                      borderRadius: "20px",
                      width: "90%",
                    }}
                  >
                    <h5 className="fw-bold mt-3">Problem Solvers at Heart</h5>
                    <p>
                      Do you enjoy untangling complex challenges? If solving
                      problems excites you, we’re looking for minds like yours
                      to craft innovative solutions that make a difference for
                      our clients.
                    </p>
                  </div>
                </div>

                {/* Team Players */}
                <div className="col">
                  <div
                    className="feature-card p-4 h-90"
                    style={{
                      boxShadow: "2px 3.5px 2px #333333",
                      border: "2px solid black",
                      borderRadius: "20px",
                      width: "90%",
                    }}
                  >
                    <h5 className="fw-bold mt-3">
                      Team Players Who Thrive Together
                    </h5>
                    <p>
                      Join a culture of collaboration where ideas flow freely,
                      and every team member is valued. Together, we’ll create,
                      learn, and evolve—supporting one another to achieve
                      greatness.
                    </p>
                  </div>
                </div>

                {/* Empathy-Driven Professionals */}
                <div className="col">
                  <div
                    className="feature-card p-4 h-90"
                    style={{
                      boxShadow: "2px 3.5px 2px #333333",
                      border: "2px solid black",
                      borderRadius: "20px",
                      width: "90%",
                    }}
                  >
                    <h5 className="fw-bold mt-3">
                      Empathy-Driven Professionals
                    </h5>
                    <p>
                      Our culture is built on integrity, kindness, and respect.
                      We value inclusivity and equal opportunities, fostering an
                      environment where every individual is empowered to
                      contribute and thrive.
                    </p>
                  </div>
                </div>

                {/* Tech Enthusiasts */}
                <div className="col">
                  <div
                    className="feature-card p-4 h-90"
                    style={{
                      boxShadow: "2px 3.5px 2px #333333",
                      border: "2px solid black",
                      borderRadius: "20px",
                      width: "90%",
                    }}
                  >
                    <h5 className="fw-bold mt-3">Tech Enthusiasts</h5>
                    <p>
                      If technology is your passion, you’ll feel right at home
                      here. Work with like-minded innovators, explore
                      cutting-edge tools, and develop transformative solutions
                      that push the boundaries of what’s possible.
                    </p>
                  </div>
                </div>

                {/* Impact Makers */}
                <div className="col">
                  <div
                    className="feature-card p-4 h-90"
                    style={{
                      boxShadow: "2px 3.5px 2px #333333",
                      border: "2px solid black",
                      borderRadius: "20px",
                      width: "90%",
                    }}
                  >
                    <h5 className="fw-bold mt-3">Impact Makers</h5>
                    <p>
                      Are you driven to make a difference? Be part of our
                      mission to leverage technology as a force for
                      good—building solutions that are meaningful, inclusive,
                      and accessible to all Are you driven to make a difference.
                    </p>
                  </div>
                </div>

                {/* Lifelong Learners */}
                <div className="col">
                  <div
                    className="feature-card p-4 h-90"
                    style={{
                      boxShadow: "2px 3.5px 2px #333333",
                      border: "2px solid black",
                      borderRadius: "20px",
                      width: "90%",
                    }}
                  >
                    <h5 className="fw-bold mt-3">Lifelong Learners</h5>
                    <p>
                      We celebrate curiosity and personal growth. Here, you’ll
                      gain hands-on industry experience, learn from experts, and
                      constantly refine your skills in a supportive and
                      enriching environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Row className="box-part-1">
            <img src="images/Linear1.png" alt="" />
          </Row>
        </section>

        {/* OPENING PAGE */}
        <Container className="opening">
          <Row className="opening-text">
            <h1>Our Openings</h1>
          </Row>
        </Container>

        <Container fluid className="navigation-container my-4">
          <Row className="justify-content-center">
            <Col xs="auto">
              <div className="navigation-wrapper">
                <div className="button-group">
                  <div className="button active">All Positions</div>
                  <div className="button">Development</div>
                  <div className="button">UI & UX Design</div>
                  <div className="button">Web Design</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-4 card-container ">
          <Row>
            {cardsData.map((card, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-5">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title className="text-center mb-3">
                      {card.title}
                    </Card.Title>
                    <div className="d-flex gap-3 align-items-center mb-2  font-ss">
                      <img
                        style={{ width: 20 }}
                        src="images/Frame.png"
                        alt=""
                      />{" "}
                      <span>{card.users}</span>
                    </div>
                    <div className="d-flex gap-3 align-items-center mb-2 font-ss">
                      <img
                        style={{ width: 20 }}
                        src="images/Frame (1).png"
                        alt=""
                      />{" "}
                      <span>{card.team}</span>
                    </div>
                    <div className="d-flex gap-3 align-items-center font-ss">
                      <img
                        style={{ width: 20 }}
                        src="images/Frame (2).png"
                        alt=""
                      />{" "}
                      <span>{card.location}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* -----------LOG IN PAGE -------------*/}
        <Container
          fluid
          className="p-4"
          style={{
            fontFamily: "'Rajdhani', serif",
            // backgroundColor: "#f8f9fa",
            minHeight: "100vh",
          }}
        >
          <Row className=" justify-content-center">
            {/* Form Section */}
            <Col lg={5} md={8} sm={12} className="mb-4 mt-4">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "30px",
                  border: "2px solid black",
                  boxShadow: "5px 3.5px 2px black",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    color: "#333",
                    fontSize: "40px",
                    textAlign: "center",
                    fontWeight: "700",
                    lineHeight: "70px",
                  }}
                >
                  Ready To Partner With Us?
                </h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label style={{ fontWeight: "600" }}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      required
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={{ fontWeight: "600" }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      required
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label style={{ fontWeight: "600" }}>
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    />
                    <div
                      style={{
                        backgroundImage: "url('/images/bgimgg.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: "20px",
                        color: "#fff",
                        borderRadius: "10px",
                        padding: "30px",
                        textAlign: "center",
                        width: "70%",
                        height: "50%",
                        zIndex: "-1",
                        position: "absolute",
                        right: "10px",
                      }}
                    >
                      <div className="content">
                        <h4
                          style={{
                            fontWeight: "700",
                            fontSize: "30px",
                            marginBottom: "10px",
                            textAlign: "centerx",
                          }}
                        >
                          Partner With Murait:
                        </h4>
                        <h4
                          style={{
                            fontWeight: "700",
                            fontSize: "30px",
                            marginBottom: "10px",
                            textAlign: "center",
                          }}
                        >
                          Your Success, Our Commitment
                        </h4>

                        <ul
                          style={{
                            listStyle: "none",
                            lineHeight: "2",
                            fontSize: "1rem",
                            fontWeight: "500",
                            listStyleType: "disc",
                            display: "inline-block",
                            textAlign: "left",
                          }}
                        >
                          <li>Week Risk-Free Trial</li>
                          <li>Strict NDA</li>
                          <li>Daily Progress Reports</li>
                          <li>Weekly Stakeholder Demos</li>
                          <li>Expert Oversight</li>
                          <li>On-Time, Every Time</li>
                        </ul>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formAppLink">
                    <Form.Label style={{ fontWeight: "600" }}>
                      App/Website Link
                    </Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="Your Link"
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label style={{ fontWeight: "600" }}>
                      Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your Message"
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="formFile"
                    style={{
                      border: "2px dashed #1287af",
                      borderRadius: "10px",
                      padding: "15px",
                      textAlign: "center",
                      background: "#f9f9f9",
                    }}
                  >
                    <Form.Label
                      className="d-block"
                      style={{
                        fontWeight: "500",
                        color: "#555",
                      }}
                    >
                      Drag & Drop Files Here or{" "}
                      <span
                        style={{
                          color: "#008cba",
                          cursor: "pointer",
                          fontWeight: "500",
                        }}
                      >
                        Browse Files
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      style={{ display: "none" }}
                      aria-label="Upload File"
                    />
                  </Form.Group>

                  <div className="btn-on">
                    <Button
                      variant="link"
                      className="apply-now-button d-inline-flex"
                    >
                      Apply Now
                      <span className="ms-1 arrow-icon">↗</span>
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>

            {/* Info Section */}
            <Col lg={6} md={8} sm={12}>
              <div
                style={{
                  height: "260px",
                  backgroundImage: "url('/images/handshake.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Career;
