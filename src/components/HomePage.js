import React from "react";
import FormPage from "./Form";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage-Top">
        <p>
          Vous rencontrez des difficultées? <a href=""> Obtenez de l'aide</a>
        </p>
      </div>
      <div className="HomePage-Form">
        <h1>Presque fini !</h1>
        <p>
          Une fois que des Teach'rs auront répondu à votre annonce, vous aurez
          besoin d'un compte pour y répondre.{" "}
          <strong>Prenons de l'avance !</strong>
        </p>
        <FormPage />
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
