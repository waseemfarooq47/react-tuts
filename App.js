import React from "react";
import { createRoot } from "react-dom/client";
import Logo from "./src/images/logo.png";

const Header = () => {
  return (
    <div className="Header-cover">
      <div className="logo">
        <img src={Logo} alt="no-img"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const App = () => (
  <div className="container">
    <Header />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
