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
            Votre demande
          </li>
          <li className="blue">
            <span className="number icon">2</span> Nos propositions
          </li>
          <li className="blue">
            <span className="number icon">3</span> Paiement
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
