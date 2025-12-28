import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    alert("Profile updated (demo)");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">Edit Profile</h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-3">
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-4">
                    <input
                      className="form-control"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="Education"
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      className="form-control"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Occupation"
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  </div>
                </div>

                <button className="btn btn-primary w-100 mt-3">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
