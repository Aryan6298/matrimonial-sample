import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { demoUser } from "../data/demoUser";

const Login = () => {
  const navigate = useNavigate(); // ✅ REQUIRED

  const [step, setStep] = useState(1); // 1 = mobile, 2 = otp
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    console.log("Sending OTP to:", mobile);
    setStep(2);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Enter valid 6-digit OTP");
      return;
    }

    console.log("Verifying OTP:", otp);

    // TEMP success login
    const user = {
      id: "user001",
      name: "User",
      mobile,
      isLoggedIn: true,
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  const handleDemoLogin = () => {
    localStorage.setItem("user", JSON.stringify(demoUser));
    navigate("/matches"); // or "/"
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow p-4 rounded-4">
            <h3 className="text-center mb-3">Login</h3>
            <p className="text-center text-muted">
              Login using mobile number & OTP
            </p>

            {step === 1 && (
              <form onSubmit={handleSendOtp}>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter 10-digit mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <button className="btn btn-primary w-100">
                  Send OTP
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleVerifyOtp}>
                <div className="mb-3">
                  <label className="form-label">Enter OTP</label>
                  <input
                    type="text"
                    className="form-control text-center fs-5 letter-spacing"
                    placeholder="••••••"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <button className="btn btn-success w-100 mb-2">
                  Verify OTP
                </button>

                <button
                  type="button"
                  className="btn btn-link w-100"
                  onClick={() => setStep(1)}
                >
                  Change Mobile Number
                </button>
              </form>
            )}

            {/* DEMO LOGIN */}
            <button
              className="btn btn-outline-secondary w-100 mt-3"
              onClick={handleDemoLogin}
            >
              Login as Demo User
            </button>
          </div>
        </div>
      </div>

      {/* internal styling */}
      <style>
        {`
          .letter-spacing {
            letter-spacing: 6px;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
