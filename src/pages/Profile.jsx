import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "Rahul Sharma",
    gender: "Male",
    dob: "1998-05-12",
    height: "5'8",
    religion: "Hindu",
    caste: "Brahmin",
    motherTongue: "Hindi",
    maritalStatus: "Never Married",
    education: "B.Tech",
    occupation: "Software Engineer",
    income: "5–10 LPA",
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India",
    photo: null,
  });

  const fields = Object.values(profile);
  const filledFields = fields.filter((v) => v !== "" && v !== null).length;
  const completion = Math.round((filledFields / fields.length) * 100);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* PROFILE CARD */}
          <div className="card shadow-lg border-0 rounded-4 mb-4">
            <div className="card-body p-4 text-center">
              <img
                src="https://via.placeholder.com/120"
                alt="Profile"
                className="rounded-circle mb-3"
              />

              <h4>{profile.fullName}</h4>
              <p className="text-muted">
                {profile.age || "25"} yrs • {profile.height} • {profile.city}
              </p>

              {/* PROGRESS BAR */}
              <div className="mt-3">
                <small className="text-muted">
                  Profile Completion: {completion}%
                </small>
                <div className="progress mt-1" style={{ height: "8px" }}>
                  <div
                    className={`progress-bar ${
                      completion < 60
                        ? "bg-danger"
                        : completion < 90
                        ? "bg-warning"
                        : "bg-success"
                    }`}
                    style={{ width: `${completion}%` }}
                  />
                </div>
              </div>

           <button
  className="btn btn-outline-primary mt-3"
  onClick={() => window.location.href = "/edit-profile"}
>
  Edit Profile
</button>

            </div>
          </div>

          {/* BIO DATA SECTIONS */}
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h5 className="mb-3">Basic Details</h5>
              <ProfileRow label="Gender" value={profile.gender} />
              <ProfileRow label="Date of Birth" value={profile.dob} />
              <ProfileRow label="Height" value={profile.height} />

              <hr />

              <h5 className="mb-3">Social Details</h5>
              <ProfileRow label="Religion" value={profile.religion} />
              <ProfileRow label="Caste" value={profile.caste} />
              <ProfileRow label="Mother Tongue" value={profile.motherTongue} />
              <ProfileRow label="Marital Status" value={profile.maritalStatus} />

              <hr />

              <h5 className="mb-3">Professional Details</h5>
              <ProfileRow label="Education" value={profile.education} />
              <ProfileRow label="Occupation" value={profile.occupation} />
              <ProfileRow label="Income" value={profile.income} />

              <hr />

              <h5 className="mb-3">Location</h5>
              <ProfileRow
                label="Location"
                value={`${profile.city}, ${profile.state}, ${profile.country}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileRow = ({ label, value }) => {
  return (
    <div className="d-flex justify-content-between mb-2">
      <span className="text-muted">{label}</span>
      <span className="fw-semibold">{value || "—"}</span>
    </div>
  );
};

export default Profile;
