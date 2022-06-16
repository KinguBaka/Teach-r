import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBar-title">
        <img src="./img/title.png" alt="Teach'r" />
      </div>
      <div className="SideBar-texte">
        <ol>
          <li className="grey">
            <FontAwesomeIcon className="check-icon icon" icon={faCircleCheck} />{" "}
            Quelle matière ?
          </li>
          <li className="grey">
            <FontAwesomeIcon className="check-icon icon" icon={faCircleCheck} />{" "}
            Quelle classe ?
          </li>
          <li className="grey">
            <FontAwesomeIcon className="check-icon icon" icon={faCircleCheck} />{" "}
            Domicile ou distance ?
          </li>
          <li className="grey">
            <FontAwesomeIcon className="check-icon icon" icon={faCircleCheck} />{" "}
            Quel type de cours ?
          </li>
          <li className="grey">
            <FontAwesomeIcon className="check-icon icon" icon={faCircleCheck} />{" "}
            À qui s'adresse le cours ?
          </li>
          <li className="blue">
            <span className="number icon">6</span> Presque finit !
          </li>
        </ol>
      </div>
      <div className="SideBar-img">
        <img src="./img/book.png" alt="icone livre" />
      </div>
    </div>
  );
}

export default SideBar;
