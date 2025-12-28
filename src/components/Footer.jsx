import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            position: relative;
            background: url("/assets/footer-bg.png") center/cover no-repeat;
            color: #fff;
          }

          .footer-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.65);
            z-index: 0;
          }

          .footer-content {
            position: relative;
            z-index: 1;
            padding: 45px 0 20px; /* ⬅ reduced height */
          }

          .footer-logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1D2BAA;
            background: rgba(255,255,255,0.9);
            padding: 6px 16px;
            border-radius: 12px;
            display: inline-block;
            margin-bottom: 10px;
          }

          .footer p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #e0e0e0;
            margin-bottom: 8px;
          }

          .footer h5 {
            font-weight: 700;
            color: #39b54a;
            margin-bottom: 12px;
          }

          .footer a {
            color: #e0e0e0;
            text-decoration: none;
          }

          .footer a:hover {
            color: #39b54a;
          }

          /* SOCIAL ICONS */
          .social-icons {
            display: flex;
            gap: 12px;
            margin-top: 10px;
          }

          .social-icons a {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: #fff;
            transition: transform 0.3s ease;
          }

          .social-icons a:hover {
            transform: scale(1.15);
          }

          .facebook {
            background: #1877F2; /* Original Facebook */
          }

          .instagram {
            background: radial-gradient(
              circle at 30% 107%,
              #fdf497 0%,
              #fdf497 5%,
              #fd5949 45%,
              #d6249f 60%,
              #285AEB 90%
            );
          }

          .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.2);
            margin-top: 18px;
            padding-top: 12px;
            font-size: 0.85rem;
            color: #ccc;
            text-align: center;
          }

          @media (max-width: 768px) {
            .footer-content {
              padding: 35px 20px 15px;
            }
          }
        `}
      </style>

      <footer className="footer mt-5">
        <div className="footer-overlay"></div>

        <div className="container footer-content">
          <div className="row g-4 align-items-start">
            
            {/* ABOUT */}
            <div className="col-md-5">
              <div className="footer-logo">Matrimony</div>
              <p>
                Matrimony is a trusted matchmaking platform designed to help
                individuals and families find meaningful, compatible, and
                lifelong relationships. We focus on verified profiles, privacy,
                and values that truly matter.
              </p>
              <p>
                Our goal is to make the journey of finding a life partner simple,
                secure, and joyful.
              </p>
            </div>

            {/* CONTACT */}
            <div className="col-md-3">
              <h5>Contact</h5>
              <p>📞 +91 88895 83332</p>
              <p>✉ support@matrimony.com</p>

              <div className="social-icons">
                <a
                  href="#"
                  className="facebook"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="#"
                  className="instagram"
                  aria-label="Instagram"
                >
                  i
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="col-md-4">
              <h5>Address</h5>
              <p>
                📍 E-2/21, Arera Colony<br />
                Bhopal, Madhya Pradesh – 462016
              </p>

              <div className="ratio ratio-16x9 rounded overflow-hidden mt-2">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Arera%20Colony%20Bhopal&output=embed"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Matrimony. All rights reserved |{" "}
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
