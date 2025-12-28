import React from "react";
import { useNavigate } from "react-router-dom";

const DemoProfile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // Safety check: if not demo user, redirect
  if (!user || user.id !== "demo001") {
    navigate("/");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .demo-profile-wrapper {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .demo-card {
            max-width: 420px;
            width: 100%;
            background: #fff;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            text-align: center;
          }

          .demo-avatar {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: linear-gradient(135deg, #ffd194, #ff9a9e);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            font-weight: 700;
            color: #000;
            margin: 0 auto 15px;
          }

          .demo-badge {
            background: #ffc107;
            color: #000;
            font-size: 0.75rem;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 12px;
            display: inline-block;
            margin-bottom: 12px;
          }

          .demo-info {
            font-size: 0.95rem;
            color: #555;
            margin-bottom: 6px;
          }

          .logout-btn {
            margin-top: 20px;
            padding: 8px 26px;
            border-radius: 25px;
            font-weight: 600;
          }
        `}
      </style>

      <div className="container demo-profile-wrapper">
        <div className="demo-card">
          <div className="demo-avatar">
            {user.name.charAt(0)}
          </div>

          <span className="demo-badge">DEMO ACCOUNT</span>

          <h4 className="fw-bold mb-2">{user.name}</h4>

          <p className="demo-info">📞 {user.phone}</p>
          <p className="demo-info">📍 {user.city}</p>
          <p className="demo-info">🎓 {user.education}</p>

          <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}>
            This is a demo account created for testing and preview purposes.
            Some actions may be limited.
          </p>

          <button
            className="btn btn-danger logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default DemoProfile;
