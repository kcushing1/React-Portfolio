import React from "react";
import { Link } from "react-router-dom";
import Card from "../../utils/Card";
import Blurb from "./Blurb";
import "./blurb.css";

export default function Facts() {
  //function for btn onclick, go to new page
  return (
    <Card>
      <div className="row text-center">
        <div className="col">
          <img
            id="main-img"
            className="rounded-circle"
            src="./images/imgB.jpg"
            alt="Kasey"
          />
          <Blurb
            text={
              "I used to want to become a Forensic Pathologist and conduct autopsies."
            }
          />
          <Blurb
            text={
              " I have completed two years in AmeriCorps National Service. My first year was in a middle school math class with City Year Boston. My second was as the Family Empowerment Coordinator with Sussex County Habitat for Humanity in Delaware."
            }
          />
          <Blurb text={"I have hiked all 48 NH 4000-footers."} />
        </div>
      </div>
      <div className="row text-center mb-4">
        <div className="col">
          <button className="btn" type="button">
            <Link to="/" className="text-light">
              Return to Main Page
            </Link>
          </button>
        </div>
      </div>
    </Card>
  );
}
