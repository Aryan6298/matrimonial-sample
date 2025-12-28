import React, { useEffect, useRef, useState } from "react";

const countersData = [
  { icon: "👰", value: 10000, label: "Verified Profiles", suffix: "+" },
  { icon: "🤵", value: 5000, label: "Successful Matches", suffix: "+" },
  { icon: "❤️", value: 1200, label: "Happy Couples", suffix: "+" },
  { icon: "🌍", value: 100, label: "Cities Covered", suffix: "+" },
];

const Counters = () => {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState(countersData.map(() => 0));

  // Start counting when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Count animation
  useEffect(() => {
    if (!hasStarted) return;

    countersData.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const duration = 1500; // ms
      const stepTime = Math.max(Math.floor(duration / end), 10);

      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, stepTime);
    });
  }, [hasStarted]);

  return (
    <>
      <style>
        {`
          .counters-section {
            padding: 60px 0 80px;
          }

          .counter-card {
            background: rgba(255, 255, 255, 0.7); /* 👈 20% transparent */
            border-radius: 20px;
            padding: 30px 20px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.12);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
          }

          .counter-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 45px rgba(0,0,0,0.18);
          }

          .counter-icon {
            font-size: 2.2rem;
            margin-bottom: 10px;
          }

          .counter-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: #000;
          }

          .counter-label {
            font-size: 0.95rem;
            color: #555;
            margin-top: 4px;
          }

          @media (max-width: 768px) {
            .counter-card {
              padding: 25px 15px;
            }

            .counter-value {
              font-size: 1.5rem;
            }
          }
        `}
      </style>

      <section className="counters-section container" ref={sectionRef}>
        <div className="row text-center g-4">
          {countersData.map((c, i) => (
            <div className="col-md-3 col-6" key={i}>
              <div className="counter-card">
                <div className="counter-icon">{c.icon}</div>
                <div className="counter-value">
                  {counts[i].toLocaleString()}
                  {c.suffix}
                </div>
                <div className="counter-label">{c.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Counters;
