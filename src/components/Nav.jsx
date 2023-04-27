import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from "../assets/images/svg/logo.svg"
import step from "../assets/images/svg/step.svg";
import home from "../assets/images/svg/home.svg";
import greenarrow from "../assets/images/svg/greenarrow.svg";
import cross from "../assets/images/svg/cross.png";
import search from "../assets/images/svg/search.jpeg";
import trnsbtn from "../assets/images/svg/trnsbtn.png";


const Nav = () => {
  const [first, setfirst] = useState(true)
  const [second, setsecond] = useState(true)
  return (
    <nav className="mt-3 mx-sm-3 bg_wit py-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>

            <div
              className={
                second
                  ? "l_m100  d-flex align-items-center service"
                  : "l_0  d-flex align-items-center service"
              }
            >
              <div className="position-absolute top_13 left_16 d-md-none d-block">
                {" "}
                <img
                  onClick={() => {
                    setsecond(true);
                  }}
                  className="w_30 wid_25"
                  src={cross}
                  alt="cross"
                />
              </div>
              <div className="d-flex ms-sm-5 ps-sm-3 align-items-sm-center crsr_pointer">
                <div>
                  <img src={step} alt="step" />
                </div>
                <p className="ff_segoe fw_600 fs_xl clr_black mb-0  ms-2 before_line">
                  Financial Services
                </p>
              </div>
              <div className="d-flex ms-sm-5 ps-sm-3 align-items-sm-center mt-md-0 mt-5 crsr_pointer">
                <div>
                  <img src={home} alt="step" />
                </div>
                <p className="ff_segoe fw_600 fs_xl clr_black mb-0  ms-2 before_line">
                  Real Estate
                </p>
              </div>
            </div>
            <div className="d-md-none d-block ps-sm-5 ps-3 max_96 mh_49 ">
              {/* <button className="ff_segoe fw_600 fs_xl clr_white py-1 px-2 bg_lightgreen hover_clr">
                Services
              </button> */}
              <img
                onClick={() => {
                  setsecond(false);
                }}
                className="w_15"
                src={search}
                alt="search"
              />
            </div>
          </div>
          <div
            className={
              first
                ? "bottom_100 d-flex align-items-center mobile_ul"
                : "bottom_0 d-flex align-items-center mobile_ul"
            }
          >
            <a
              className="ff_segoe fw_600 fs_xl clr_green me-lg-5 me-0"
              href="#"
            >
              Sign up
            </a>
            <div className="d-flex green_border radius_8 px-4 py-2 mt-lg-0 mt-4">
              <a className="ff_segoe fw_600 fs_xl clr_green " href="#">
                Log in
              </a>
              <a className="ps-3" href="#">
                <img src={greenarrow} alt="greenarrow" />
              </a>
            </div>
            <div
              className="position-absolute top_10 end_10 d-lg-none d-block"
              onClick={() => {
                setfirst(true);
              }}
            >
              <img className="w_30 wid_15" src={cross} alt="cross" />
            </div>
          </div>
          <div
            onClick={() => {
              setfirst(false);
            }}
            className="d-lg-none d-block"
          >
            <div className="navicons"></div>
            <div className="navicons"></div>
            <div className="navicons"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Nav