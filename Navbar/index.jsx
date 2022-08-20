import React from "react";
import "./index.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  text-light row">
        <div class="container-fluid col-4 ms-5">
          <a class="navbar-brand text-light" href="#">
            <b>Navbar</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse col-4" id="navbarNav">
          <ul class="navbar-nav ms-5">
            <li class="nav-item ms-5">Demos</li>
            <li class="nav-item ms-5">Pages</li>
            <li class="nav-item ms-5">Support</li>
          </ul>
        </div>
        <div className="col-4">
          Cart
          <button className="nav-btn border rounded-circle m-2 bg-warning">
            3
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
