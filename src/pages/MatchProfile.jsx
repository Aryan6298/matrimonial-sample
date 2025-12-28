import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import img01 from "../assets/test-img01.jpg";
import img02 from "../assets/test-img02.jpg";
import img03 from "../assets/test-img03.jpg";

const MOCK_MATCHES = [
  {
    id: 1,
    name: "Priya Verma",
    age: 24,
    height: "5'4",
    city: "Indore",
    state: "Madhya Pradesh",
    education: "MBA",
    occupation: "Marketing Manager",
    religion: "Hindu",
    motherTongue: "Hindi",
    about:
      "I am a positive and family-oriented person who believes in mutual respect and understanding.",
    image: img01,
  },
  {
    id: 2,
    name: "Anjali Sharma",
    age: 26,
    height: "5'6",
    city: "Bhopal",
    state: "Madhya Pradesh",
    education: "MCA",
    occupation: "Software Developer",
    religion: "Hindu",
    motherTongue: "Hindi",
    about:
      "I enjoy learning new technologies and value honesty and commitment in relationships.",
    image: img02,
  },
  {
    id: 3,
    name: "Neha Singh",
    age: 25,
    height: "5'5",
    city: "Delhi",
    state: "Delhi",
    education: "B.Com",
    occupation: "Accountant",
    religion: "Hindu",
    motherTongue: "Hindi",
    about:
      "Simple, caring and ambitious. Looking for a supportive and understanding life partner.",
    image: img03,
  },
];

const MatchProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = MOCK_MATCHES.find(
    (m) => m.id === Number(id)
  );

  if (!profile) {
    return (
      <div className="container my-5 text-center text-white">
        <h4>Profile not found</h4>
        <button className="btn btn-light mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div
            className="card shadow-lg rounded-4"
            style={{ backgroundColor: "#F2A99D" }}
          >
            <div className="card-body p-4">
              {/* HEADER */}
              <div className="text-center mb-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="rounded-circle mb-3"
                  style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "cover",
                  }}
                />
                <h4>{profile.name}</h4>
                <p className="text-dark">
                  {profile.age} yrs • {profile.height} • {profile.city}
                </p>
              </div>

              <hr />

              {/* ABOUT */}
              <h6>About</h6>
              <p className="text-dark">{profile.about}</p>

              <hr />

              {/* DETAILS */}
              <div className="row">
                <Detail label="Education" value={profile.education} />
                <Detail label="Occupation" value={profile.occupation} />
                <Detail label="Religion" value={profile.religion} />
                <Detail label="Mother Tongue" value={profile.motherTongue} />
                <Detail
                  label="Location"
                  value={`${profile.city}, ${profile.state}`}
                />
              </div>

              {/* ACTIONS */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-success btn-sm">
                  Send Interest
                </button>
                <button className="btn btn-outline-dark btn-sm">
                  Shortlist
                </button>
                <button
                  className="btn btn-link btn-sm"
                  onClick={() => navigate(-1)}
                >
                  Back to Matches
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div className="col-md-6 mb-2">
    <strong>{label}: </strong>
    <span>{value}</span>
  </div>
);

export default MatchProfile;
