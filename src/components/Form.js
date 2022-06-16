import React from "react";

function FormPage() {
  return (
    <div className="FormPage">
      <form action="">
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
          <input type="password" placeholder="xxxxxxxx" />
        </div>
        <div className="labelInput">
          <label htmlFor="">Confirmation mot de passe</label>
          <input type="password" placeholder="xxxxxxxx" />
        </div>
      </form>
    </div>
  );
}

export default FormPage;
