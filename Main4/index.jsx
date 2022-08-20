import React from "react";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";

function Main4() {
  return (
    <>
      <div className="w-100">
        <center>
          <h1 className="fs-1 text fw-bold">Enjoy Your Music</h1>
          &nbsp;
          <p className="fs-4 text-dark">
            Create custom landing pages with Omega that converts more visitors
            <br />
            than any website. With lots of unique blocks, you can easily build a
            <br />
            page without coding.
          </p>
        </center>
      </div>
      <div className="row">
        <center>
          <div className="col ms-5">
            <img src={img7} />

            <img src={img6} />
          </div>
        </center>
      </div>
    </>
  );
}

export default Main4;
