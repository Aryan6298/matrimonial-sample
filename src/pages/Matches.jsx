import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img01 from "../assets/test-img01.jpg";
import img02 from "../assets/test-img02.jpg";
import img03 from "../assets/test-img03.jpg";

const matchesData = [
  {
    id: 1,
    name: "Priya Verma",
    age: 24,
    height: "5'4",
    city: "Indore",
    education: "MBA",
    image: img01,
    interested: false,
    shortlisted: false,
  },
  {
    id: 2,
    name: "Anjali Sharma",
    age: 26,
    height: "5'6",
    city: "Bhopal",
    education: "MCA",
    image: img02,
    interested: false,
    shortlisted: false,
  },
  {
    id: 3,
    name: "Neha Singh",
    age: 25,
    height: "5'5",
    city: "Delhi",
    education: "B.Com",
    image: img03,
    interested: false,
    shortlisted: false,
  },
  { id: 4, name: "Riya Jain", age: 23, height: "5'3", city: "Mumbai", education: "BBA" },
  { id: 5, name: "Pooja Patel", age: 28, height: "5'5", city: "Ahmedabad", education: "HR Manager" },
  { id: 6, name: "Kritika Mehra", age: 27, height: "5'6", city: "Delhi", education: "Designer" },
  { id: 7, name: "Sneha Joshi", age: 22, height: "5'2", city: "Pune", education: "Student" },
  { id: 8, name: "Aarti Mishra", age: 29, height: "5'4", city: "Bhopal", education: "Teacher" },
  { id: 9, name: "Shreya Kapoor", age: 26, height: "5'6", city: "Mumbai", education: "Marketing Executive" },
  { id: 10, name: "Nidhi Agarwal", age: 31, height: "5'5", city: "Jaipur", education: "Entrepreneur" },
];

const getInitials = (name) => {
  const parts = name.split(" ");
  return (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
};

const Matches = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState(matchesData);

  const [city, setCity] = useState("");
  const [education, setEducation] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const toggleInterest = (id) => {
    setMatches((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, interested: !m.interested } : m
      )
    );
  };

  const toggleShortlist = (id) => {
    setMatches((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, shortlisted: !m.shortlisted } : m
      )
    );
  };

  const filteredMatches = matches.filter((m) => {
    const cityMatch = !city || m.city === city;
    const educationMatch = !education || m.education === education;

    let ageMatch = true;
    if (ageGroup === "18-24") ageMatch = m.age >= 18 && m.age <= 24;
    if (ageGroup === "25-30") ageMatch = m.age >= 25 && m.age <= 30;
    if (ageGroup === "31+") ageMatch = m.age >= 31;

    return cityMatch && educationMatch && ageMatch;
  });

  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
          .matches-header {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
            padding: 30px 20px;
            border-radius: 16px;
            margin-bottom: 30px;
          }

          .matches-title {
            color: #fff;
            font-weight: 700;
            letter-spacing: 1px;
          }

          .avatar-circle,
          .avatar-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 15px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .avatar-circle {
            background: linear-gradient(135deg, #ffd194, #ff9a9e);
            font-size: 1.8rem;
            font-weight: 700;
            color: #000;
          }

          .avatar-img {
            object-fit: cover;
          }
        `}
      </style>

      {/* 🔥 IMPORTANT: pt-4 instead of my-5 */}
      <div className="container pt-4">
        {/* HEADER */}
        <div className="matches-header text-center">
          <h3 className="matches-title ">Your Matches</h3>
        </div>

        {/* FILTERS */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <select className="form-select" onChange={(e) => setCity(e.target.value)}>
              <option value="">Filter by City</option>
              {[...new Set(matchesData.map((m) => m.city))].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <select className="form-select" onChange={(e) => setEducation(e.target.value)}>
              <option value="">Filter by Occupation</option>
              {[...new Set(matchesData.map((m) => m.education))].map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <select className="form-select" onChange={(e) => setAgeGroup(e.target.value)}>
              <option value="">Filter by Age</option>
              <option value="18-24">18 – 24</option>
              <option value="25-30">25 – 30</option>
              <option value="31+">31+</option>
            </select>
          </div>
        </div>

        {/* MATCH CARDS */}
        <div className="row g-4">
          {filteredMatches.map((match) => (
            <div className="col-md-4" key={match.id}>
              <div
                className="card shadow-sm rounded-4 h-100 text-center p-3"
                style={{ backgroundColor: "#F2A99D" }}
              >
                {match.image ? (
                  <img src={match.image} alt={match.name} className="avatar-img" />
                ) : (
                  <div className="avatar-circle">
                    {getInitials(match.name)}
                  </div>
                )}

                <h5>{match.name}</h5>
                <p className="text-muted">
                  {match.age} yrs • {match.height}
                </p>
                <p className="mb-1">{match.education}</p>
                <p className="text-muted">{match.city}</p>

                <div className="d-flex justify-content-center gap-2 mt-3">
                  <button
                    className={`btn btn-sm ${
                      match.interested ? "btn-success" : "btn-outline-success"
                    }`}
                    onClick={() => toggleInterest(match.id)}
                  >
                    {match.interested ? "Interest Sent" : "Send Interest"}
                  </button>

                  <button
                    className={`btn btn-sm ${
                      match.shortlisted ? "btn-dark" : "btn-outline-dark"
                    }`}
                    onClick={() => toggleShortlist(match.id)}
                  >
                    {match.shortlisted ? "Short listed" : "Short list"}
                  </button>
                </div>

                <button
                  className="btn btn-link btn-sm mt-2"
                  onClick={() => navigate(`/match/${match.id}`)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <p className="text-center text-muted mt-4">
            No matches found for selected filters.
          </p>
        )}
      </div>
    </>
  );
};

export default Matches;
