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
          <label htmlFor="">Prénom</label>
          <input type="text" placeholder="Ex. John" />
        </div>
        <div className="labelInput">
          <label htmlFor="">Nom</label>
          <input type="text" placeholder="Ex. DUPONT" />
        </div>
        <div className="labelInput">
          <label htmlFor="">E-mail</label>
          <input type="text" placeholder="mail@mail.com" />
        </div>
        <div className="labelInput">
          <label htmlFor="">No. Téléphone portable</label>
          <input type="text" placeholder="Ex. 06 XX XX XX XX" />
        </div>
        <div className="labelInput">
          <label htmlFor="">Mot de passe</label>
          <input className="mdp1" type="password" placeholder="xxxxxxxx" />
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
          <label htmlFor="">Confirmation mot de passe</label>
          <input className="mdp2" type="password" placeholder="xxxxxxxx" />
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
