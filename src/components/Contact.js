import React from "react";
import LinkedIn from "./Links/LinkedIn";
import Github from "./Links/Github";

export default function Contact() {
  return (
    <div className="row pb-6">
      <div className="col ">
        <div className="row justify-content-center">
          <h5 className="col text-center">
            <LinkedIn />
          </h5>
          <h5 className="col text-center">
            <Github />
          </h5>
        </div>
        <div className="row justify-content-center">
          <div className="row ">
            <div className="col ">
              <div className="row">
                <p className="col text-center">
                  <a className="text-light" href="#" target="_blank">
                    Resume
                  </a>
                </p>
              </div>
              <div className="row text-center">
                <p className="col text-light">kasey.cushing@gmail.com</p>
              </div>
              <div className="row text-center">
                <p className="col text-light">(603) 686 - 9739</p>
              </div>
              <div className="row text-center">
                <p className="col text-light">she/her/hers</p>
              </div>
              <div className="row text-center">
                <p className="col text-light">Stratham, NH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
