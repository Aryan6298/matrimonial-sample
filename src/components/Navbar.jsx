import React, { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/matrimonial-logo.jpg";
import person from "../assets/avatar-logo.jpg";
import { Collapse, Dropdown } from "bootstrap";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const collapseRef = useRef(null);
  const dropdownRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user")) || null;
  const isLoggedIn = user?.isLoggedIn === true;
  const isDemoUser = isLoggedIn && user?.id === "demo001";

  // ✅ FIXED ACTIVE LOGIC (Home no longer stays active)
  const isActive = (path) => {
    const currentPath = location.hash.replace("#", "") || "/";

    // Home should match ONLY exact "/"
    if (path === "/") {
      return currentPath === "/";
    }

    // Other routes can match nested paths
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  useEffect(() => {
    if (dropdownRef.current) {
      new Dropdown(dropdownRef.current);
    }
  }, []);

  const toggleNavbar = () => {
    const el = collapseRef.current;
    if (!el) return;

    let bsCollapse = Collapse.getInstance(el);
    if (!bsCollapse) {
      bsCollapse = new Collapse(el, { toggle: false });
    }
    bsCollapse.toggle();
  };

  const closeNavbar = () => {
    const el = collapseRef.current;
    if (!el) return;

    const bsCollapse = Collapse.getInstance(el);
    if (bsCollapse) bsCollapse.hide();
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
          padding: 6px 18px;
          border-radius: 25px;
        }

        .btn-login:hover {
          background: #fff;
          color: #000;
        }

        .btn-register {
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
          <Link to="/" className="navbar-brand brand-wrapper" onClick={closeNavbar}>
            <img src={logo} alt="Logo" className="brand-logo" />
            <span className="brand-text">Matrimony</span>
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" ref={collapseRef}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 mt-3 mt-lg-0">

              <li className="nav-item">
                <Link
                  to="/"
                  onClick={closeNavbar}
                  className={`nav-link nav-link-custom ${isActive("/") ? "active" : ""}`}
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

                  <li className="nav-item dropdown">
                    <button
                      ref={dropdownRef}
                      className="btn bg-transparent border-0 d-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      <img src={person} alt="Profile" className="avatar-navbar" />
                      {isDemoUser && (
                        <span className="badge bg-warning text-dark ms-2">DEMO</span>
                      )}
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end shadow">
                      <li className="dropdown-item-text fw-semibold">{user?.name}</li>
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
