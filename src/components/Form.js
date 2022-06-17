import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function FormPage() {
  const [eyes, setEyes] = useState(true);
  const [eyes2, setEyes2] = useState(true);

  function afficherMdp() {
    let input = document.querySelector(".mdp1");

    if (input.type === "password") {
      input.type = "text";
      setEyes(false);
    } else {
      input.type = "password";
      setEyes(true);
    }
  }

  function afficherMdp2() {
    let input = document.querySelector(".mdp2");

    if (input.type === "password") {
      input.type = "text";
      setEyes2(false);
    } else {
      input.type = "password";
      setEyes2(true);
    }
  }

  return (
    <div className="FormPage">
      <div className="form">
        <div className="labelInput">
          <label htmlFor="firstName">Prénom</label>
          <input type="text" name="firstName" placeholder="Ex. John" />
        </div>
        <div className="labelInput">
          <label htmlFor="lastName">Nom</label>
          <input type="text" name="lastName" placeholder="Ex. DUPONT" />
        </div>
        <div className="labelInput">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" placeholder="mail@mail.com" />
        </div>
        <div className="labelInput">
          <label htmlFor="tel">No. Téléphone portable</label>
          <input type="tel" name="tel" placeholder="Ex. 06 XX XX XX XX" />
        </div>
        <div className="labelInput">
          <label htmlFor="password1">Mot de passe</label>
          <input
            className="mdp1"
            name="password1"
            type="password"
            placeholder="xxxxxxxx"
          />
          <div className="cnt-icon">
            {eyes ? (
              <FontAwesomeIcon
                className="icon"
                icon={faEye}
                onClick={afficherMdp}
              />
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={faEyeSlash}
                onClick={afficherMdp}
              />
            )}
          </div>
        </div>
        <div className="labelInput">
          <label htmlFor="password2">Confirmation mot de passe</label>
          <input
            className="mdp2"
            name="password2"
            type="password"
            placeholder="xxxxxxxx"
          />
          <div className="cnt-icon">
            {eyes2 ? (
              <FontAwesomeIcon
                className="icon"
                icon={faEye}
                onClick={afficherMdp2}
              />
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={faEyeSlash}
                onClick={afficherMdp2}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
