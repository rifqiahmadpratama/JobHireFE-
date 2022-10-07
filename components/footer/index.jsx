import Head from "next/head";
import React, { useEffect, Fragment } from "react";
import Image from "next/image";
import ImageFooter from "../../assets/images/peworld.png";

const Footer = () => {
  return (
    <div
      className="footer-global shadow-sm mt-5"
      style={{ background: "#5E50A1" }}
    >
      <footer className="container border-top">
        <div className="col-12  mt-5">
          <Image src={ImageFooter} alt="Footer Logo" />
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectrtur
          </p>
          <p style={{ color: "white" }}>
            adipiscing elit. In euismod ipsum et dui
          </p>
          <p style={{ color: "white" }}>rhoncus auctor</p>
        </div>
        <hr style={{ color: "white" }} />
        <p style={{ color: "white" }}>2020 Pewworld. All right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
