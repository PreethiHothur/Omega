import React from "react";
import img5 from "../images/img5.png";

function Main5() {
  return (
    <>
      <div className="position-relative w-100">
        <img src={img5} className="w-100" />
        <div className="position-absolute top-50 start-0 translate-middle-y ms-5 ps-4 ">
          <p className="fs-1 text fw-bold text-light">
            2k+ people are <br />
            using this headset
          </p>
          &nbsp;
          <p className="fs-4 text-light">
            Create custom landing pages with Omega that converts
            <br /> more visitors than any website. With lots of unique <br />
            blocks, you can easily build a page without coding.
          </p>
          &nbsp;
          <button className=" mt-3 p-3 bg-warning border border-none rounded fs-3 w-50">
            <b>Try it now</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default Main5;
