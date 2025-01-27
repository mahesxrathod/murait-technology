import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="container mt-5">
        <div className="row text-center text-md-start">
          {/* Logo and Description */}
          <div className="col-md-3 mb-4">
            <div className=" d-inline-flex align-items-center justify-content-center">
              <img
                style={{ width: "80px", alignItems: "center" }}
                src="/images/Group.png"
                alt=""
              />
            </div>
            <p className="text-  mt-4">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
              Nisi Ut Aliquip Ex Ea Commodo Consequat.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-5">
            <h5 className="text-header">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <img src="/images/undoicon.png" alt="" />
                <a href="#">Web Design/Development</a>
              </li>
              <li>
                <img src="/images/undoicon.png" alt="" />
                <a href="#">App Development</a>
              </li>
              <li>
                <img src="/images/undoicon.png" alt="" />
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <img src="/images/undoicon.png" alt="" />
                <a href="#">Flutter Download</a>
              </li>
              <li>
                <img src="/images/undoicon.png" alt="" />
                <a href="#">React Js Developer</a>
              </li>
              <li>
                <img src="/images/undoicon.png" alt="" />
                <a href="#">Android Developer</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-5">
            <h5 className="text-header">Follow Us</h5>
            <ul className="list-unstyled-s">
              <li>
                <img
                  style={{ width: "20px", marginRight: "12px" }}
                  className="icon "
                  src="/images/insta.png"
                  alt=""
                />
                <a href="#">Instagram</a>
              </li>
              <li>
                <img
                  style={{ width: "20px", marginRight: "12px" }}
                  className="icon"
                  src="/images/db.png"
                  alt=""
                />
                <a href="#">Dribble</a>
              </li>
              <li>
                <img
                  style={{ width: "13px", marginRight: "12px" }}
                  className="icon"
                  src="/images/fb.png"
                  alt=""
                />
                <a href="#">Facebook</a>
              </li>
              <li>
                <img
                  style={{ width: "20px", marginRight: "12px" }}
                  className="icon"
                  src="/images/tt.png"
                  alt=""
                />
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-md-3 mb-4">
            <h5 className="text-header">Address</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <img src="/images/location.png" alt="" />
                2/20, Astern Road, USA
              </li>
              <li className="mb-2">
                <img src="/images/email.png" alt="" />
                example@example.com
              </li>
              <li>
                <img src="/images/call.png" alt="" />
                +880 320 432 242
              </li>
            </ul>
          </div>
          <div className="bg-img-footer"  style={{
                      backgroundImage: "url('/images/footerbg.png')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      color: "#fff",
                      textAlign: "center",
                      width: "70%",
                      height: "50%",
                      zIndex: "-1",
                      position: "absolute",
                      right: "10px",}}></div>
        </div>
      </div>
      <div>
        <hr className="footer-hr" />
      </div>
      {/* Footer Bottom */}
      <div className="container">
        <small className="text-copyright">
          © Murait Technologies 2024 | All Rights Reserved
        </small>
        <div className="text-other">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      
    </footer>
    
  );
};

export default Footer;


