import React from "react";
import { useNavigate } from "react-router-dom";
import Counters from "../components/Counters";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";
import GalleryMarquee from "../components/GalleryMarquee.jsx";

import img1 from "../assets/coup01.webp";
import img2 from "../assets/coup02.webp";
import img3 from "../assets/coup03.jpg";
import img4 from"../assets/coup04.jpg"; 
import img5 from "../assets/coup05.jpg";
import img6 from "../assets/coup06.jpg";
import img7 from "../assets/coup07.jpg";
import img8 from "../assets/coup08.jpg";
import img9 from "../assets/bg-img.jpg";
import img10 from "../assets/sample.avif";

const galleryImages = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10
];




const Home = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <style>
        {`
          /* HERO SECTION */
          .hero-section {
            min-height: 110vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
          }

          .hero-box {
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            padding: 30px 40px;
            border-radius: 24px;
            animation: fadeUp 1.2s ease-out;
          }

          .hero-text {
            font-size: 3.2rem;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.3;
          }

          .hero-text span.highlight {
            color: #ffb703;
          }

          .hero-subtext {
            margin-top: 18px;
            font-size: 1.25rem;
            font-weight: 400;
            color: #f1f1f1;
            letter-spacing: 0.5px;
            animation: fadeUp 1.6s ease-out;
          }

          .heart {
            display: inline-block;
            animation: pulse 1.5s infinite;
          }

          /* ABOUT US SECTION */
          .about-section {
            margin-top: -80px; /* 👈 pulls section upward */
            padding-bottom: 80px;
          }

          .about-box {
            background: rgba(255, 255, 255, 0.72);
            border-radius: 24px;
            padding: 50px 60px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            text-align: center;
          }

          .about-title {
            font-size: 2.4rem;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .about-text {
            font-size: 1.1rem;
            line-height: 1.9;
            color: #444;
            margin-bottom: 30px;
          }

          /* ANIMATIONS */
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.25);
            }
            100% {
              transform: scale(1);
            }
          }

          /* RESPONSIVE */
          @media (max-width: 768px) {
            .hero-box {
              padding: 40px 30px;
            }

            .hero-text {
              font-size: 2rem;
            }

            .hero-subtext {
              font-size: 1rem;
            }

            .about-box {
              padding: 35px 25px;
            }

            .about-title {
              font-size: 1.8rem;
            }

            .about-section {
              margin-top: -40px;
            }
          }
        `}
      </style>


      {/* HERO */}
      <section className="hero-section container">
        <div className="hero-box">
          <h1 className="hero-text">
            Turn your <span className="highlight">dream</span> into reality
            <span className="heart"> ❤️</span>
          </h1>

          <p className="hero-subtext">
            Find your life partner with ease
          </p>
            {/* JOIN US BUTTON */}
              <button
                className="btn btn-light px-5 py-2" style={{ background: 'linear-gradient(90deg, #ffd194, #ff9a9e)'}} 
                onClick={() => navigate("/register")}
              >
                Join Us
              </button>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about-section container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="about-box">
              <h2 className="about-title">About Us</h2>

              <p className="about-text">
                We are a trusted matrimonial platform dedicated to helping
                individuals and families find meaningful and lifelong
                relationships. Our mission is to bring together people who share
                similar values, traditions, and aspirations, making the journey
                of finding a life partner simple, secure, and transparent.
                <br /><br />
                With carefully verified profiles and a user-friendly experience,
                we focus on quality connections rather than just numbers.
              </p>

            
            </div>
          </div>
        </div>
      </section>
      {/* COUNTERS SECTION */}
      <Counters />

   <Testimonials />
   <GalleryMarquee images={galleryImages} />
   <Footer />

    </>
  );
};

export default Home;
