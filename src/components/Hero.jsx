import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import man from "../assets/images/svg/man.svg"
import dots from "../assets/images/svg/dots.svg";
import line1 from "../assets/images/svg/line1.svg";
import line2 from "../assets/images/svg/line2.svg";
import line3 from "../assets/images/svg/line3.svg";
import downarrow from "../assets/images/svg/downarrow.svg";
import roundshadow1 from "../assets/images/img/roundshadow1.png";
import round2 from "../assets/images/img/round2.png";
import grayshadow from "../assets/images/img/grayshadow.png";
import bigshadow from "../assets/images/img/bigshadow.png";
import rightarrow from "../assets/images/svg/rightarrow.svg";
import whitearrow from "../assets/images/svg/whitearrow.svg";
import Nav from './Nav';

const Hero = () => {
  return (
    <section className="position-relative px-sm-3 overflow-hidden pb-5">
      <Nav />
      <div className="position-absolute z_m1 top_m15 l_0">
        <img src={roundshadow1} alt="roundshadow1" />
      </div>
      <div className="position-absolute z_m1 top_m15 ">
        <img src={round2} alt="round2" />
      </div>
      <div className="position-absolute z_m1  l_0">
        <img src={bigshadow} alt="bigshadow" />
      </div>
      <div className="position-absolute z_m1  l_100">
        <img src={grayshadow} alt="grayshadow" />
      </div>
      <Container className="pt-5">
        <Row className="pt-4">
          <Col lg={6} className="pt-5">
            <div>
              <div className="d-flex justify-content-between">
                <div className="bg_size position-relative top_150 animation">
                  <div className="d-flex ">
                    <h1 className="ff_segoe fw_600 fs_lg clr_black mx_83">
                      Jordan Wentworth
                    </h1>
                    <div>
                      <button className="ff_segoe fw_600 fs_md op_black btn_bg py-1 px-2 ms-2">
                        New
                      </button>
                    </div>
                  </div>
                  <p className="ff_segoe fw_600 fs_lg clr_green">$1,293,200</p>
                  <p className="ff_segoe fw_400 fs_md clr_lightbrown max_57">
                    Boston, MA Inheritance
                  </p>
                  <div className="d-flex">
                    <div className="box"></div>
                    <p className="ms-2">Contacted</p>
                  </div>
                </div>
                {/* ========= */}
                <div className="round_animation">
                  <div className="w_130 h_30 bg_wit d-flex flex-row align-items-center justify-content-center brfore_arrow">
                    <div className="d-flex ">
                      <div className="w_40"></div>
                      <div className="gray_box ms-3"></div>
                    </div>
                  </div>
                  <div className="w_130 h_30 bg_wit d-flex flex-row align-items-center justify-content-center mt-4 after_arrow">
                    <div className="d-flex ">
                      <div className="w_60"></div>
                      <div className="black_box ms-3"></div>
                    </div>
                  </div>
                </div>
                {/* ======= */}
                <div className="bg_size h_ 145 w_129 watch_animation">
                  <p className="ff_segoe fw_400 fs_sm clr_black befor_watch text-end">
                    2 days ago
                  </p>
                  <p className="ff_segoe fw_400 fs_md clr_black">
                    Mihail Lacusta
                  </p>
                  <p className="ff_segoe fw_600 fs_md clr_green">$1,329,0139</p>
                  <p className="ff_segoe fw_400 fs_sm clr_lightbrown max_57">
                    Business Sale
                  </p>
                  <div className="d-flex">
                    <div className="box2"></div>
                    <p className="ms-2 fs_sm">Contacted</p>
                  </div>
                </div>
              </div>
              <div className="w_80 bg_wit position-relative top_146 small_animat">
                <h1 className="ff_segoe fw_600 fs_sm clr_black mb-0 py-2 ps-2 dot_before">
                  Active leads
                </h1>
              </div>
              <div className="w_228 p-2 bg_size ms-auto big_animation position-relative right_50">
                <div className="d-flex align-items-center justify-content-between border_bottm pb-2">
                  <div className=" d-flex align-items-center">
                    <div>
                      <img src={man} alt="man" />
                    </div>
                    <div className="ps-3">
                      <p className="mb-0">Ciera Thomas</p>
                      <p className="mb-0 ff_segoe fw_400 fs_md clr_black">
                        Edit
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={dots} alt="dots" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0">.1</p>
                  <img className="" src={line1} alt="line1" />
                  <div className="">
                    <img src={downarrow} alt="downarrow" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0">.2</p>
                  <img className="" src={line2} alt="line1" />
                  <div className="">
                    <img src={downarrow} alt="downarrow" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <p className="mb-0">.3</p>
                  <img className="" src={line3} alt="line1" />
                  <div className="">
                    <img src={downarrow} alt="downarrow" />
                  </div>
                </div>
              </div>
              <div className="bg_top_rdc w_97 ms-auto">
                <div className="br_btm pt-2 ps-2">
                  <p className="ff_segoe fw_400 fs_sm clr_black mb-0 ">
                    5500 72nd Ave N
                  </p>
                  <p className="ff_segoe fw_600 fs_sm clr_green pt-1 mb-0">
                    $150,000
                  </p>
                  <p className="ff_segoe fw_400 fs_xsm clr_lightblack mx_38 pt-1">
                    Pinellas Park, FL inheritance
                  </p>
                </div>
                <div className="bg_light text-center">
                  <img src={rightarrow} alt="rightarrow" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="pt-lg-0 pt-5">
            <div>
              <h1 className="ff_segoe fw_600 fs_4xl clr_black text-lg-start text-center">
                Grow your business with Event-Driven Predictive Analytics
              </h1>
              <p className="ff_segoe fw_400 fs_xl clr_lightblack pt-3 pb-3 text-lg-start text-center">
                It is a long established fact that a reader will be distracted
                by the using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it the look at you.
              </p>
              <Row className="pt-lg-5 pt-4">
                <Col sm={6}>
                  <div className="bg_green ps-5 py-33 rdc_5 h-100 crsr_pointer scale_hovr">
                    <p className="ff_segoe fw_600  fs_xl clr_lytwhite">
                      boost your
                    </p>
                    <h1 className="ff_segoe fw_600 fs_2xl clr_white mx_98">
                      Financial Services
                    </h1>
                    <div className="d-flex justify-content-between pt_30">
                      <a
                        className="ff_segoe fw_600 fs_xl clr_white link_hover"
                        href="#"
                      >
                        Learn more
                      </a>
                      <div className="pe-5">
                        <a href="#" className=" crsr_pointer">
                          <img src={whitearrow} alt="whitearrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className='mt-sm-0 mt-4'>
                  <div className="bg_darkblue ps-5 py-33 rdc_5 h-100 crsr_pointer scale_hovr">
                    <p className="ff_segoe fw_600  fs_xl clr_lytwhite">
                      boost your
                    </p>
                    <h1 className="ff_segoe fw_600 fs_2xl clr_white mx _98 mb-0">
                      Real Estate
                    </h1>
                    <div className="d-flex justify-content-between pt-5">
                      <a
                        className="ff_segoe fw_600 fs_xl clr_white link_hover"
                        href="#"
                      >
                        Learn more
                      </a>
                      <div className="pe-5">
                        <a href="#" className=" crsr_pointer">
                          <img src={whitearrow} alt="whitearrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero