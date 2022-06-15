import React from "react";

function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBar-title">
        <img src="./img/title.png" alt="Teach'r" />
      </div>
      <div className="SideBar-texte">
        <ol>
          <li className="grey">Votre demande</li>
          <li className="blue">Nos porpositions</li>
          <li className="blue">Paiement</li>
        </ol>
      </div>
      <div className="SideBar-img">
        <img src="./img/book.png" alt="icone livre" />
      </div>
    </div>
  );
}

export default SideBar;
