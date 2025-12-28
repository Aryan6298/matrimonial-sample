import React, { useState } from "react";

const membersData = [
  { id: 1, name: "Priya Verma", age: 24, city: "Indore", occupation: "MBA" },
  { id: 2, name: "Anjali Sharma", age: 26, city: "Bhopal", occupation: "Software Engineer" },
  { id: 3, name: "Neha Singh", age: 25, city: "Delhi", occupation: "Accountant" },
  { id: 4, name: "Riya Jain", age: 23, city: "Mumbai", occupation: "BBA" },
  { id: 5, name: "Pooja Patel", age: 28, city: "Ahmedabad", occupation: "HR Manager" },
  { id: 6, name: "Kritika Mehra", age: 27, city: "Delhi", occupation: "Designer" },
  { id: 7, name: "Sneha Joshi", age: 22, city: "Pune", occupation: "Student" },
  { id: 8, name: "Aarti Mishra", age: 29, city: "Bhopal", occupation: "Teacher" },
  { id: 9, name: "Shreya Kapoor", age: 26, city: "Mumbai", occupation: "Marketing Executive" },
  { id: 10, name: "Nidhi Agarwal", age: 31, city: "Jaipur", occupation: "Entrepreneur" },

  { id: 11, name: "Kajal Gupta", age: 24, city: "Indore", occupation: "MBA" },
  { id: 12, name: "Isha Malhotra", age: 27, city: "Chandigarh", occupation: "Lawyer" },
  { id: 13, name: "Rashmi Yadav", age: 29, city: "Lucknow", occupation: "Government Officer" },
  { id: 14, name: "Monika Arora", age: 25, city: "Delhi", occupation: "Content Writer" },
  { id: 15, name: "Payal Shah", age: 30, city: "Surat", occupation: "CA" },

  { id: 16, name: "Sakshi Verma", age: 23, city: "Indore", occupation: "Student" },
  { id: 17, name: "Tanya Choudhary", age: 28, city: "Noida", occupation: "Business Analyst" },
  { id: 18, name: "Meenal Jain", age: 26, city: "Udaipur", occupation: "Interior Designer" },
  { id: 19, name: "Ayesha Khan", age: 24, city: "Bhopal", occupation: "Journalist" },
  { id: 20, name: "Ritu Saxena", age: 32, city: "Gwalior", occupation: "Doctor" },

  { id: 21, name: "Simran Kaur", age: 27, city: "Amritsar", occupation: "Banker" },
  { id: 22, name: "Anushka Rai", age: 25, city: "Varanasi", occupation: "Research Scholar" },
  { id: 23, name: "Bhavna Patel", age: 29, city: "Vadodara", occupation: "Architect" },
  { id: 24, name: "Kirti Malviya", age: 31, city: "Indore", occupation: "Entrepreneur" },
  { id: 25, name: "Sonam Rawat", age: 24, city: "Dehradun", occupation: "Nutritionist" },

  { id: 26, name: "Rupal Soni", age: 28, city: "Ujjain", occupation: "HR Manager" },
  { id: 27, name: "Pallavi Dixit", age: 26, city: "Kanpur", occupation: "Lecturer" },
  { id: 28, name: "Naina Bansal", age: 23, city: "Meerut", occupation: "Student" },
  { id: 29, name: "Shruti Kulkarni", age: 30, city: "Nagpur", occupation: "UX Researcher" },
  { id: 30, name: "Divya Shetty", age: 27, city: "Bengaluru", occupation: "Product Manager" },
];

const getInitials = (name) => {
  const parts = name.split(" ");
  return (
    parts[0][0] +
    (parts.length > 1 ? parts[1][0] : "")
  ).toUpperCase();
};

const Members = () => {
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const filteredMembers = membersData.filter((m) => {
    const cityMatch = !city || m.city === city;
    const occupationMatch = !occupation || m.occupation === occupation;

    let ageMatch = true;
    if (ageGroup === "18-24") ageMatch = m.age >= 18 && m.age <= 24;
    if (ageGroup === "25-30") ageMatch = m.age >= 25 && m.age <= 30;
    if (ageGroup === "31+") ageMatch = m.age >= 31;

    return cityMatch && occupationMatch && ageMatch;
  });

  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
          .members-header {
            background: linear-gradient(
              rgba(0,0,0,0.65),
              rgba(0,0,0,0.65)
            );
            padding: 50px 20px;
            border-radius: 16px;
            margin-bottom: 40px;
          }

          .members-title {
            color: #fff;
            font-weight: 700;
            letter-spacing: 1px;
          }

          .avatar-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ffd194, #ff9a9e);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            font-weight: 700;
            color: #000;
            margin: 0 auto 12px;
          }
        `}
      </style>

      <div className="container my-5">
        {/* HEADER */}
        <div className="members-header text-center">
          <h2 className="members-title mb-0">Surf Profiles</h2>
        </div>

        {/* FILTERS */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <select className="form-select" onChange={(e) => setCity(e.target.value)}>
              <option value="">Filter by City</option>
              {[...new Set(membersData.map((m) => m.city))].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <select className="form-select" onChange={(e) => setOccupation(e.target.value)}>
              <option value="">Filter by Occupation</option>
              {[...new Set(membersData.map((m) => m.occupation))].map((o) => (
                <option key={o}>{o}</option>
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

        {/* MEMBERS */}
        <div className="row g-4">
          {filteredMembers.map((member) => (
            <div className="col-md-3 col-sm-6" key={member.id}>
              <div className="card shadow-sm rounded-4 h-100 text-center p-3">
                <div className="avatar-circle">
                  {getInitials(member.name)}
                </div>

                <h6 className="fw-bold">{member.name}</h6>
                <p className="text-muted mb-1">
                  {member.age} yrs • {member.city}
                </p>
                <p className="mb-2">{member.occupation}</p>

                <button className="btn btn-outline-primary btn-sm">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <p className="text-center text-muted mt-4">
            No profiles match your filters.
          </p>
        )}
      </div>
    </>
  );
};

export default Members;
