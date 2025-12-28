import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    height: "",
    religion: "",
    caste: "",
    motherTongue: "",
    maritalStatus: "",
    education: "",
    occupation: "",
    income: "",
    city: "",
    state: "",
    country: "India",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    alert("Profile created (demo)");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">Create Your Profile</h3>

              <form onSubmit={handleSubmit}>
                {/* BASIC DETAILS */}
                <h5 className="mb-3">Basic Details</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Full Name"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-3">
                    <select
                      name="gender"
                      className="form-select"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <input
                      type="date"
                      name="dob"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-3">
                    <input
                      type="text"
                      name="height"
                      className="form-control"
                      placeholder="Height (e.g. 5'7)"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* SOCIAL DETAILS */}
                <h5 className="mb-3">Social Details</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="religion"
                      className="form-control"
                      placeholder="Religion"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="text"
                      name="caste"
                      className="form-control"
                      placeholder="Caste (optional)"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="text"
                      name="motherTongue"
                      className="form-control"
                      placeholder="Mother Tongue"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <select
                      name="maritalStatus"
                      className="form-select"
                      onChange={handleChange}
                    >
                      <option value="">Marital Status</option>
                      <option>Never Married</option>
                      <option>Divorced</option>
                      <option>Widowed</option>
                    </select>
                  </div>
                </div>

                {/* PROFESSIONAL DETAILS */}
                <h5 className="mb-3">Professional Details</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="education"
                      className="form-control"
                      placeholder="Highest Education"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="text"
                      name="occupation"
                      className="form-control"
                      placeholder="Occupation"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <select
                      name="income"
                      className="form-select"
                      onChange={handleChange}
                    >
                      <option value="">Annual Income</option>
                      <option>Below 3 LPA</option>
                      <option>3–5 LPA</option>
                      <option>5–10 LPA</option>
                      <option>10+ LPA</option>
                    </select>
                  </div>
                </div>

                {/* LOCATION */}
                <h5 className="mb-3">Location</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="City"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="text"
                      name="state"
                      className="form-control"
                      placeholder="State"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="text"
                      name="country"
                      className="form-control"
                      value="India"
                      disabled
                    />
                  </div>
                </div>

                {/* PHOTO */}
                <h5 className="mb-3">Profile Photo</h5>
                <div className="mb-4">
                  <input
                    type="file"
                    name="photo"
                    className="form-control"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-primary w-100 py-2">
                  Create Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
