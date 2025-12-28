import React from "react";

const GalleryMarquee = ({ images = [] }) => {
  return (
    <>
      <style>
        {`
          .gallery-marquee-wrapper {
            width: 100%;
            overflow: hidden;
            padding: 40px 0;
          }

          .gallery-marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeScroll 30s linear infinite;
          }

          .gallery-item {
            flex: 0 0 auto;
            width: 300px;
            height: 220px;
            margin: 0 12px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 12px 30px rgba(0,0,0,0.15);
            transition: transform 0.4s ease;
            background: #fff;
          }

          .gallery-item:hover {
            transform: scale(1.05);
          }

          .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @keyframes marqueeScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Fade edges for premium look */
          .gallery-fade-left,
          .gallery-fade-right {
            position: absolute;
            top: 0;
            width: 80px;
            height: 100%;
            z-index: 2;
            pointer-events: none;
          }

          .gallery-fade-left {
            left: 0;
            background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
          }

          .gallery-fade-right {
            right: 0;
            background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
          }

          @media (max-width: 768px) {
            .gallery-item {
              width: 160px;
              height: 220px;
            }
          }
        `}
      </style>

      <div className="position-relative gallery-marquee-wrapper">
        <div className="gallery-fade-left"></div>
        <div style={{color:'white', fontSize:'5rem', textAlign:"center"}}>GALLERY</div>
        <div className="gallery-fade-right"></div>

        <div className="gallery-marquee-track">
          {/* duplicate images for infinite scroll */}
          {[...images, ...images].map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryMarquee;
