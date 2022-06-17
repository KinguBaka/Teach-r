import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "trop petit")
    .max(20, "trop long!")
    .required("Ce champ est obligatoire"),
  lastName: Yup.string()
    .min(2, "trop petit")
    .max(10, "trop long!")
    .required("Ce champ est obligatoire"),
  email: Yup.string()
    .email("email invalide")
    .required("l'email est obligatoire"),
  tel: Yup.string()
    .matches(phoneRegExp, "Le numéro de téléphone n'est pas valide")
    .required("le numéro de téléphone est obligatoire"),
  password1: Yup.string()
    .required("Mot de passe est obligatoire")
    .min(6, "Mot de passe doit être plus grand que 8 caractères")
    .max(15, "Mot de passe doit être plus petit que 50 caractères"),
  password2: Yup.string()
    .required("Confirmation de mot de passe est obligatoire")
    .oneOf(
      [Yup.ref("password1"), null],
      "Le mot de passe de confirmation ne correspond pas"
    ),
});

export default validationSchema;
