import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="HomePage">
      <div className="HomePage-Search">
        <h1>En quelle matiére avez-vous besoin d'aide ?</h1>
        <div className="SearchBar">
          <input
            type="text"
            placeholder="SVT, piano, anglais, math..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon
            className="search-icon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </div>
        <h1>Les Teach'rs d'{search} qui pourraient vous correspondre</h1>
      </div>
      <div className="HomePage-Card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
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
