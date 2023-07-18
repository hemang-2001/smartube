import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

// If you use CSS/SCSS vs. styled components
import "../scss/main.scss";

function Layout() {

  return (
    <div>
      <Nav />

      {/* An <Outlet> renders whatever child route is currently active in App.js */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
