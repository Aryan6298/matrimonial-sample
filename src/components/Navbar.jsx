import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/matrimonial-logo.jpg";
import person from "../assets/avatar-logo.jpg";
import { Collapse } from "bootstrap";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const collapseRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user")) || null;
  const isLoggedIn = user?.isLoggedIn === true;
  const isDemoUser = isLoggedIn && user?.id === "demo001";

  const isActive = (path) => location.pathname === path;

  const toggleNavbar = () => {
    const collapseEl = collapseRef.current;
    if (!collapseEl) return;

    let bsCollapse = Collapse.getInstance(collapseEl);
    if (!bsCollapse) {
      bsCollapse = new Collapse(collapseEl, { toggle: false });
    }

    bsCollapse.toggle();
  };

  const closeNavbar = () => {
    const collapseEl = collapseRef.current;
    if (!collapseEl) return;

    const bsCollapse = Collapse.getInstance(collapseEl);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    closeNavbar();
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .custom-navbar {
            position: sticky;
            top: 0;
            z-index: 1000;
            backdrop-filter: blur(12px);
            background: rgba(106, 17, 203, 0.85);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }

          .brand-wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .brand-logo {
            height: 38px;
            border-radius: 50%;
          }

          .brand-text {
            font-weight: 700;
            font-size: 1.3rem;
            color: #fff;
          }

          .nav-link-custom {
            position: relative;
            color: #fff !important;
            font-weight: 500;
            margin-left: 18px;
            padding-bottom: 6px;
          }

          .nav-link-custom::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0%;
            height: 2px;
            background: linear-gradient(90deg, #ffd194, #ff9a9e);
            transition: width 0.4s ease;
          }

          .nav-link-custom:hover::after,
          .nav-link-custom.active::after {
            width: 100%;
          }

          .btn-login {
            color: #fff;
            border: 1px solid rgba(255,255,255,0.6);
            margin-left: 18px;
            padding: 6px 18px;
            border-radius: 25px;
          }

          .btn-login:hover {
            background: rgba(237, 237, 237, 1);
            color: #000;
          }

          .btn-register {
            margin-left: 12px;
            padding: 6px 20px;
            border-radius: 25px;
            background: linear-gradient(90deg, #ffd194, #ff9a9e);
            border: none;
            font-weight: 600;
          }

          .btn-register:hover {
            transform: scale(1.05);
          }

          .avatar-navbar {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 2px solid #fff;
            object-fit: cover;
          }

          .demo-badge {
            background: #ffc107;
            color: #000;
            font-size: 0.65rem;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 6px;
            margin-left: 6px;
          }

          .navbar-toggler {
            border-color: rgba(255,255,255,0.6);
          }

          .navbar-toggler-icon {
            filter: invert(1);
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand brand-wrapper" onClick={closeNavbar}>
            <img src={logo} alt="Logo" className="brand-logo" />
            <span className="brand-text">Matrimony</span>
          </Link>

          {/* ✅ FIXED TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ COLLAPSE WITH REF */}
          <div
            className="collapse navbar-collapse"
            ref={collapseRef}
          >
            <ul className="navbar-nav ms-auto align-items-lg-center mt-3 mt-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={closeNavbar}
                  className={`nav-link nav-link-custom ${
                    isActive("/") ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link to="/login" onClick={closeNavbar} className="btn btn-login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" onClick={closeNavbar} className="btn btn-register">
                      Register Free
                    </Link>
                  </li>
                </>
              )}

              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link
                      to="/members"
                      onClick={closeNavbar}
                      className={`nav-link nav-link-custom ${
                        isActive("/members") ? "active" : ""
                      }`}
                    >
                      Surf Profiles
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/matches"
                      onClick={closeNavbar}
                      className={`nav-link nav-link-custom ${
                        isActive("/matches") ? "active" : ""
                      }`}
                    >
                      Matches
                    </Link>
                  </li>

                  <li className="nav-item dropdown ms-lg-3 mt-3 mt-lg-0">
                    <Link
                      to={isDemoUser ? "/demo-profile" : "/profile"}
                      onClick={closeNavbar}
                      className="btn p-0 border-0 bg-transparent d-flex align-items-center text-decoration-none"
                    >
                      <img src={person} alt="Profile" className="avatar-navbar" />
                      {isDemoUser && <span className="demo-badge">DEMO</span>}
                    </Link>

                    <ul className="dropdown-menu dropdown-menu-end shadow">
                      <li className="dropdown-item-text fw-semibold">
                        {user.name}
                        {isDemoUser && (
                          <span className="demo-badge ms-2">Demo</span>
                        )}
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
