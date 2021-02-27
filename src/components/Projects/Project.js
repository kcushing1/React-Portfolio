import ProjectContext from "../../contexts/ProjectContext";
import { useContext } from "react";
import projData from "./projData";
import "./projects.css";

export default function Project({ title, img, description, github, deployed }) {
  //get from Context?
  //loop over array
  return (
    <div className="row m-4">
      <div className="col">
        <div className="row">
          <div className="col justify-content-center">
            <img alt="demo" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col text-center">
            <h4>{title}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>{description}</p>
          </div>
        </div>
        <div className="row m-4">
          <div className="col">
            <p>{github}</p>
          </div>
          <p>{deployed}</p>
        </div>
      </div>
    </div>
  );
}
