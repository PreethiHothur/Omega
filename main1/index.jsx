import React from "react";
import "./index.css";
function Main1() {
  return (
    <div className="p-5 headphones bg-primary w-100">
      <div className="row p-5 col-md-auto col-lg-auto m-5">
        <div className="col-3  m-5">
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Wireless-Headphone-Background-PNG-Image.png"
            className="headphoneimg"
          />
        </div>
        <div className="col-6  text-light ms-5 mt-5">
          <h1 className="h1main">
            Enjoy every single
            <br /> beat on headphone
          </h1>
          <p className="fw-normal fs-5 text">
            For iPhone iPad,and Android users, be sure your products
            <br />
            frimware is up to date through the Bose connect app
          </p>
          <div className="offer-button text-white w-50 p-2 ">
            <span className="fs-1">
              <b>$299</b>
            </span>
            &nbsp;
            <button className="bg-success text-white border-0 p-1 m-2">
              save 30% today
            </button>
            <br />
            Original Price $399
          </div>
          <button className="border-0 pe-3">
            <div className="row">
              <div className="col fs-6 text-center mt-3">1</div>
              <div className="col">
                <div className="row fs-5">+</div>
                <div className="row fs-5">-</div>
              </div>
            </div>
          </button>
          <button className="addtocart col m-2 p-3 w-25 rounded border border-none color-#f0c931 ">
            <b>Add to Cart</b>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Main1;
