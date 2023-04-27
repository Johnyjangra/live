import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footlogo from "../assets/images/svg/footerbg.svg"
const Info = () => {
  return (
    <section className="blue_bg m-sm-3 py-5 mt-5">
      <Container className="py-lg-4">
        <Row className="">
          <Col xl={7}>
            <Row>
              <Col md={6}>
                <div>
                  <div>
                    <div>
                      <input
                        className="bg_lytblur outline_none clr_white w-100 py-2 ps-2"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        className="bg_lytblur outline_none clr_white w-100 py-2 ps-2"
                        type="mail"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <Row className="pt-2">
                    <Col sm={7} xs={6} className="w_xsm_100">
                      <button className="ff_segoe fw_600 fs_xl clr_green bg_trnsprnt green_bordr py-2 ps-3 before_greendot  w-100 rdc_5">
                        Financial Services
                      </button>
                    </Col>
                    <Col sm={5} xs={6} className="w_xsm_100 mt_xsm_3">
                      <button className="ff_segoe fw_600 fs_xl clr_white bg_trnsprnt white_brdr befor_whitedot ps-4 py-2 pe -3 ms -2 r w-100 rdc_5">
                        Real Estate
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} className="mt-md-0 mt-5">
                <div>
                  <textarea
                    cols="30"
                    rows="3"
                    placeholder="Message"
                    className="bg_lytblur border-0 pt-3 ps-2 w-100 outline_none clr_white"
                  ></textarea>
                  <div>
                    <button className="bg_green w-100 py-2 br_green rdc_5">
                      Submit
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={5} className="position-relative">
            <div className="blur_box position-absolute right_0"></div>
            <div className="ps-5 ms-3 text-xl-start text-center mt-xl-0 mt-4">
              <h1 className="ff_segoe fw_600 fs_3xl clr_white">Contact us</h1>
              <p className="ff_segoe fw_400 fs_xl clr_lytwhite max_258">
                Our Predictive Analytics utilize a combination of event-driven
                data, historical data.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="max_1290 mt-5"></div>
      <footer className="pt-5">
        <Container className="pt-2">
          <Row>
            <Col lg={4} md={5}>
              <div className="text-md-start text-center">
                <div>
                  <img className="crsr_pointer" src={footlogo} alt="footlogo" />
                </div>
                <div className="pt-2">
                  <a
                    className="ff_segoe fw_600 fs_xl clr_white link_hover"
                    href="#"
                  >
                    info@catalyzeai.com
                  </a>
                </div>
                <div>
                  <a
                    className="ff_segoe fw_600 fs_xl clr_white link_hover"
                    href="#"
                  >
                    (941) 867-1761
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={7} className="mt-md-0 mt-5">
              <Row>
                <Col md={4} sm={4} xs={6}>
                  <div>
                    <ul>
                      <p className="ff_segoe fw_600 fs_xl clr_white">
                        Financial Services
                      </p>
                      <li className="pt-2">
                        <a
                          className="ff_segoe fw_400 fs_xl clr_white link_hover"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          className="ff_segoe fw_400 fs_xl clr_white link_hover"
                          href="#"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={4} sm={4} xs={6}>
                  <div>
                    <ul>
                      <p className="ff_segoe fw_600 fs_xl clr_white">
                        Real Estate
                      </p>
                      <li className="pt-2">
                        <a
                          className="ff_segoe fw_400 fs_xl clr_white link_hover"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="pt-2">
                        <a
                          className="ff_segoe fw_400 fs_xl clr_white link_hover"
                          href="#"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={4} sm={4} className="mt-sm-0 mt-5">
                  <div>
                    <ul>
                      <p className="ff_segoe fw_600 fs_xl clr_white">
                        LinkedIn
                      </p>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="pt-4 mt-2">
            <Col lg={5}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <a
                    className="ff_segoe fw_400 fs_lg clr_lytwhite white_hover"
                    href="#"
                  >
                    All rights reserved.©20022 Catalyze AI
                  </a>
                </div>
                <div className="ps-xl-0 ps-5">
                  <a
                    className="ff_segoe fw_400 fs_lg clr_lytwhite  text-decoration-underline white_hover"
                    href="#"
                  >
                    Do not sell my data
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={7} className="mt-lg-0 mt-4">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <a
                    className="ff_segoe fw_400 fs_lg clr_lytwhite text-decoration-underline white_hover"
                    href="#"
                  >
                    Terms & Conditions
                  </a>
                </div>
                <div className="ps-5">
                  <a
                    className="ff_segoe fw_400 fs_lg clr_lytwhite  text-decoration-underline white_hover"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  );
}

export default Info