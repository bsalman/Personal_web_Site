import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { footerInfoPost } from "../service/api";

export default function Footer() {
  const [footerInfo, setFooterInfo] = useState([]);
  useEffect(() => {
    footerInfoPost().then((data) => {
      if (data && data != 2) {
        setFooterInfo(data);
        console.log(data);
      }
    });
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row d-flex justify-content-around flex-md-row">
          <div className="col-md-4">
            <div className="contact-footer-info">
              <ul>
                <li>
                  <span className="icon icon-map-pin no-text">
                    Address:
                    {footerInfo.street}
                    {footerInfo.housNumber}
                    <b />
                    {footerInfo.zip}
                    {footerInfo.city}
                  </span>
                </li>
                <li>
                  <span className="icon icon-call no-text">
                    phone:{footerInfo.phone}
                  </span>
                </li>
                <li>
                  <span className="icon icon-at no-text">
                    Email: {footerInfo.email}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Date-protection .bg-success">
              <ul>
                <li>
                  <Link
                    to={footerInfo.data_protection_file_url}
                    target="_blank">
                    Data Protection
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="social-media .bg-secondary">
              <ul className="social-media-list">
                <li>
                  <Link to={footerInfo.xing_url} target="_blank">
                    <span className="icon icon-Xing no-text"></span>
                  </Link>
                </li>
                <li>
                  <Link to={footerInfo.github_url} target="_blank">
                    <span className="icon icon-Github no-text"></span>
                  </Link>
                </li>
                <li>
                  <Link to={footerInfo.linkedin_url} target="_blank">
                    <span className="icon icon-LinkedIn no-text"></span>
                  </Link>
                </li>
                <li>
                  <Link to={`../${footerInfo.cv_file_url}`} target="_blank">
                    <span className="icon icon-file-download no-text"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
