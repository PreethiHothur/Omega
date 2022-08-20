import React from "react";
import { Card } from "react-bootstrap";
import img2 from "../images/img2.jpg";

function New() {
  return (
    <>
      <div className="w-100">
        <center>
          <h1 className="fs-1 m-4">
            <b>What users say</b>
          </h1>
          <p className="fs-4 text-secondary">
            Create custom landing pages with omega that converts
            <br /> more visitors than any website
          </p>
        </center>
        <div className="row p-5">
          <div className="col">
            <Card>
              <p>
                OMG! cannot belive that I have got a brand <br />
                new landing page after getting Omega. It was <br />
                super easy to edit and publish.
              </p>
              <div className="row">
                <div className="col ms-1">
                  <img src={img2} className="rounded-circle w-75" />
                </div>
                <div className="col-10">
                  <h5 className="row w-50">50+ Unique Design Block</h5>
                  <span className="row">with Carefully Coded</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col">
            <Card>
              <p>
                OMG! cannot belive that I have got a brand <br />
                new landing page after getting Omega. It was <br />
                super easy to edit and publish.
              </p>
              <div className="row">
                <div className="col ms-1">
                  <img src={img2} className="rounded-circle w-75" />
                </div>
                <div className="col-10">
                  <h5 className="row w-50">50+ Unique Design Block</h5>
                  <span className="row">with Carefully Coded</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col">
            <Card>
              <p>
                OMG! cannot belive that I have got a brand <br />
                new landing page after getting Omega. It was <br />
                super easy to edit and publish.
              </p>
              <div className="row">
                <div className="col ms-1">
                  <img src={img2} className="rounded-circle w-75" />
                </div>
                <div className="col-10">
                  <h5 className="row w-50">50+ Unique Design Block</h5>
                  <span className="row">with Carefully Coded</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
