import React from "react";

function Footer() {
  return (
    <div className="m-3 p-3">
      <div className="row">
        <div className="col fs-4 ms-0">
          <b>Omega</b>
        </div>
        <div className="col">
          <ul className="row list-unstyled">
            <li className="col">Support</li>
            <li className="col">Privacy policy</li>
            <li className="col">Terms and Conditions</li>
          </ul>
        </div>
        <div className="col">© 2020 UXTheme, All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
