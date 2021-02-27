import ProjectContext from "../../contexts/ProjectContext";
import { useContext } from "react";
import projData from "./projData";
import "./projects.css";

export default function Project() {
  const { title, img, description, github, deployed } = useContext(
    ProjectContext
  );
  //get from Context?
  //loop over array
  return (
    <div className="col">
      <div className="card h-100 m-4">
        <div className="card-body softgrey">
          <h6 className="card-title text-center">{title}</h6>
          <p className="card-text">
            {img}
            {description}
          </p>
          <div>
            <a href="#" className="card-link" target="_blank">
              {github}
            </a>
            <a href="#" className="card-link" target="_blank">
              {deployed}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
