import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import MatchProfile from "./pages/MatchProfile";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import EditProfile from "./pages/EditProfile";
import DemoProfile from "./pages/DemoProfile";
import Members from "./pages/Members";

const AppWrapper = () => {
  const location = useLocation();

  // ✅ FIX for HashRouter (pathname is always "/")
  const currentPath = location.hash.replace("#", "") || "/";

  // Pages WITHOUT blur
  const noBlurRoutes = ["/", "/login"];
  const shouldBlur = !noBlurRoutes.includes(currentPath);

  return (
    <div className="app-root">
      {/* BACKGROUND IMAGE */}
      <div className="app-bg-image"></div>

      {/* BLUR OVERLAY */}
      {shouldBlur && <div className="app-bg-blur"></div>}

      {/* APP CONTENT */}
      <div className="app-content">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/demo-profile" element={<DemoProfile />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppWrapper;
