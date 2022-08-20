import React from "react";
import "./index.css";
import { File, Phone } from "react-bootstrap-icons";
function Main3() {
  return (
    <>
      <div className="main3 w-100">
        <center>
          <h1 className="fs-1 text fw-bold text-light">
            It's everything
            <br />
            you'll ever need
          </h1>
        </center>
        <div className="row  m-3 ">
          <div className="row mainbox">
            <div className="  col-1 box1 text-dark fs-4 ms-5 rounded-start">
              <div>
                <File className="iconn " />
              </div>
            </div>
            <div className="col-2 box1 text-dark ms-0 fs-4 rounded-end">
              <p>
                <b>50+ Unique Designs Blocks</b>
              </p>
            </div>

            <div className="col-1 box2 text-dark fs-4 ms-5 rounded-start">
              <Phone className="icon" />
            </div>
            <div className="col-2 box2 text-dark ms-0 fs-4 rounded-end">
              <p>
                <b>Multiple Layouts</b>
              </p>
            </div>
            <div className="col-1 box3 text-dark fs-4 ms-5 rounded-start">
              <Phone className="icon" />
            </div>
            <div className="col-2 box3 text-dark ms-0 fs-4 rounded-end">
              <p>
                <b>Mobile First Design</b>
              </p>
            </div>
          </div>
        </div>

        <div className="row  m-3 ">
          <div className="row mainbox1">
            <div className="  col-1 box1 text-dark fs-4 ms-5 rounded-start">
              <div>
                <Phone className="iconn " />
              </div>
            </div>
            <div className="col-2 box1 text-dark ms-0 fs-4 rounded-end">
              <p>
                <b>Fully Responsive</b>
              </p>
            </div>

            <div className="col-1 box2 text-dark fs-4 ms-5 rounded-start">
              <Phone className="icon" />
            </div>
            <div className="col-2 box2 text-dark ms-0 fs-4 rounded-end">
              <p>
                <b>Bootstrap4 Framework</b>
              </p>
            </div>
          </div>
        </div>
        <div className="row  m-3 ">
          <div className="row mainbox2">
            <div className="  col-1 box1 text-dark fs-4 ms-5 rounded-start">
              <div>
                <Phone className="iconn " />
              </div>
            </div>
            <div className="col-2 box1 text-dark ms-0 fs-4 rounded-end">
              <p>
                <b>Humanly Support</b>
              </p>
            </div>

            <div className="col-1 box2 text-dark fs-4 ms-5 rounded-start">
              <Phone className="icon" />
            </div>
            <div className="col-2 box2 text-dark ms-0 fs-4 rounded-end">
              <p>
                <b>Lifetime Updates</b>
              </p>
            </div>
            <div className="col-1 box3 text-dark fs-4 ms-5 rounded-start">
              <Phone className="icon" />
            </div>
            <div className="col-2 box3 text-dark ms-0 fs-4 rounded-end">
              <p>
                <b>Rich Documentation</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main3;
