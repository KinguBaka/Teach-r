import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validationSchema from "../utils/validation";
import { Formik, Field, Form, ErrorMessage } from "formik";

function FormPage() {
  const [eyes, setEyes] = useState(true);
  const [eyes2, setEyes2] = useState(true);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    password1: "",
    password2: "",
  };

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

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="FormPage">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="form">
          <div className="labelInput">
            <label htmlFor="firstName">Prénom</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ex. John"
            />
            <p className="text-danger">
              <ErrorMessage name="firstName" />
            </p>
          </div>
          <div className="labelInput">
            <label htmlFor="lastName">Nom</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ex. DUPONT"
            />
            <p className="text-danger">
              <ErrorMessage name="lastName" />
            </p>
          </div>
          <div className="labelInput">
            <label htmlFor="email">E-mail</label>
            <Field id="email" name="email" placeholder="mail@mail.com" />
            <p className="text-danger">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="labelInput">
            <label htmlFor="tel">No. Téléphone portable</label>
            <Field
              type="tel"
              id="tel"
              name="tel"
              placeholder="Ex. 06 XX XX XX XX"
            />
            <p className="text-danger">
              <ErrorMessage name="tel" />
            </p>
          </div>
          <div className="labelInput">
            <label htmlFor="password1">Mot de passe</label>
            <Field
              className="mdp1"
              id="password1"
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
            <p className="text-danger">
              <ErrorMessage name="password1" />
            </p>
          </div>
          <div className="labelInput">
            <label htmlFor="password2">Confirmation mot de passe</label>
            <Field
              className="mdp2"
              id="password2"
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
            <p className="text-danger">
              <ErrorMessage name="password2" />
            </p>
          </div>

          <div className="form-Button">
            <a href="" className="Btn-gris">
              PRÉCEDENT
            </a>
            <input type="submit" value="SUIVANT" className="Btn-blanc" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default FormPage;
