import ProjectContext from "../../contexts/ProjectContext";
import { useContext } from "react";
import projData from "./projData";
import "./projects.css";

export default function Project({
  title,
  image,
  description,
  github,
  deployed,
}) {
  //get from Context?
  //loop over array
  return (
    <div className="row m-4 softgrey text-dark">
      <div className="col">
        <div className="row">
          <div className="col justify-content-center">
            <img alt="demo" src={image} />
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
          <div className="col text-center">
            <a href={github} target="_blank">
              Github
            </a>
          </div>
          <div className="col text-center">
            <a href={deployed} target="_blank">
              Deployed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
