import React from "react";
import "./index.css";
import img8 from "../images/img8.jpg";
import { File } from "react-bootstrap-icons";
function Main2() {
  return (
    <>
      <div className="w-100">
        <div className="row m-5 p-3 ">
          <div className="col">
            <h1 className="h1main2">
              Get noise free <br />
              sound everytime
            </h1>
            <span className="main2span">
              Create custom landing pages with Omega that converts more visitors
              <br />
              than any website. With lots of unique blocks, you can easily build
              <br />a page without coding.
            </span>
          </div>
          <div className="col">
            <img src={img8} />
          </div>
        </div>
        <div className="row  ">
          <div className="col-1   ">
            <File className=" icn fs-1 " />
          </div>
          <div className="col-8">
            <h5 className="row ">
              <b>50+ Unique Design Block</b>
            </h5>
            <span className="row">&nbsp;&nbsp;&nbsp;with Carefully Coded</span>
          </div>
        </div>
        &nbsp; &nbsp;
        <div className="row p-1 ">
          <div className="col-1   ">
            <File className=" icn fs-1 " />
          </div>
          <div className="col-8">
            <h5 className="row fs-5">
              <b>Mobile First Design</b>
            </h5>
            <span className="row">&nbsp;&nbsp;&nbsp;On Every devices</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main2;
