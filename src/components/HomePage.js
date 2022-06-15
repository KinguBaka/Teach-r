import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage-Search">
        <h1>En quelle matiére avez-vous besoin d'aide ?</h1>
        <div className="SearchBar">
          <input type="text" placeholder="SVT, piano, anglais, math..." />{" "}
          <FontAwesomeIcon
            className="search-icon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </div>
        <h1>Les Teach'rs d'Anglais qui pourraient vous correspondre</h1>
      </div>
      <div className="HomePage-Card">Card ici</div>
      <div className="HomePage-Button">
        <a href="" className="Btn-gris">
          PRÉCEDENT
        </a>
        <button className="Btn-blanc">SUIVANT </button>
      </div>
    </div>
  );
}

export default HomePage;
