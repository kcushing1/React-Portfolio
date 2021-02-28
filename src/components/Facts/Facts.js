import React from "react";
import Card from "../../utils/Card";

//links to githib and linked in
//two images that change on hover
//fun facts section
//include used to want to be a forensic pathologist
//incl 2 years of americorps
//incl hiked all nh 4000-footers
//incl button for Main page

export default function Facts() {
  //function for btn onclick, go to new page
  return (
    <Card>
      <div className="row text-center">
        <div className="col">
          <p>image goes here, changes on hover</p>
          <p>facts go here</p>
          <p>
            I used to want to become a Forensic Pathologist and conduct
            autopsies
          </p>
          <p>
            I have completed two years in AmeriCorps National Service. My first
            year was in a middle school math class with City Year Boston. My
            second was as the Family Empowerment Coordinator with Sussex County
            Habitat for Humanity in Delaware.
          </p>
          <p>I have hiked all 48 NH 4000-footers.</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <button className="btn" type="button">
            Return to Main Page
          </button>
        </div>
      </div>
    </Card>
  );
}
