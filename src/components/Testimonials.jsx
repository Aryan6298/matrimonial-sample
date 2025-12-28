import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "This platform helped us find the perfect match within months. The process was smooth, respectful, and truly trustworthy.",
    name: "Amit & Neha",
    role: "Married Couple",
    initials: "AN",
  },
  {
    quote:
      "We appreciated how profiles were verified and matches were meaningful. It felt safe and genuine from day one.",
    name: "Rohit Sharma",
    role: "Member",
    initials: "RS",
  },
  {
    quote:
      "The experience was simple and transparent. Our families connected easily, and everything progressed naturally.",
    name: "Priya Verma",
    role: "Member",
    initials: "PV",
  },
];

const Testimonials = () => {
  useEffect(() => {
    const initCarousel = async () => {
      try {
        const bootstrap = await import(
          "bootstrap/dist/js/bootstrap.bundle.min.js"
        );

        const carousel = document.getElementById("testimonialCarousel");
        if (carousel && bootstrap.Carousel) {
          new bootstrap.Carousel(carousel, {
            interval: 4000,
            ride: "carousel",
            wrap: true,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    initCarousel();
  }, []);

  return (
    <>
      <style>
        {`
          .testimonial-section {
            background: rgba(255,255,255,0.85);
            backdrop-filter: blur(8px);
            border-radius: 24px;
            padding: 50px 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .testimonial-initials {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: bold;
            color: #fff;
            background: #F2A99D;
            margin-bottom: 20px;
          }

          .testimonial-quote {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #444;
            text-align: center;
            position: relative;
          }

          .quote-icon {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 3.5rem;
            color: rgba(0,0,0,0.08);
            z-index: -1;
          }

          .testimonial-name {
            font-weight: 600;
            color: #000;
            margin-top: 15px;
          }

          .testimonial-role {
            font-size: 0.9rem;
            color: #666;
          }

          .carousel-control-prev,
          .carousel-control-next {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: invert(1);
          }

          .section-title {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 40px;
          }

          @media (max-width: 768px) {
            .testimonial-section {
              padding: 35px 25px;
            }

            .testimonial-quote {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <section className="container my-5">
        <div className="testimonial-section mx-auto" style={{ maxWidth: "900px" }}>
          <h2 className="section-title">Happy Stories</h2>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                >
                  <div className="d-flex flex-column align-items-center">
                    <div className="testimonial-initials">
                      {t.initials}
                    </div>

                    <div className="position-relative mb-4">
                      <FaQuoteLeft className="quote-icon" />
                      <p className="testimonial-quote px-md-4">
                        {t.quote}
                      </p>
                    </div>

                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
