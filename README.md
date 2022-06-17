## Parcourir les branches pour les différents Niveaux!

Test technique
Développeur Application Web - Juin 2022
Préambule
Vous avez été présélectionné(e) pour le poste de développeur Application Web au sein de Teach’r. Pour témoigner votre niveau en développement, nous vous invitons à réaliser le projet suivant.
Vous avez 5 jours (120 heures) à compter de la date de réception de ce test pour rendre votre projet.
Sujet
Au sein de notre entreprise, vous aurez pour mission de développer une application web, adossée sur l’API Teach’r déjà existante. Cela nécessite de savoir implémenter un front-end, et prendre en main une API. Ce test sera basé sur le framework React, comme l’exige la stack de Teach’r.

Le sujet se décompose en plusieurs niveaux. Vous êtes libre d’atteindre le niveau qui vous convient, mais nous vous conseillons de lire entièrement le sujet avant de commencer afin de répondre directement aux consignes du niveau choisi.

Nous attirons également votre attention sur le point suivant : si vous avez été en mesure de réaliser le Niveau 1 mais pas les autres, c’est déjà très bien, envoyez-le nous en étant fier.e d’avoir déjà accompli ceci !

Ce projet devra être accessible depuis un repository Git public en utilisant les plateformes Github1 ou GitLab2. Vous en profiterez pour montrer vos connaissances de Git (évitez donc un projet avec un seul commit !)

Niveau 1
Application React

Vous avez pour objectif de créer une application web utilisant le framework React. La première page de cette application correspondra à la maquette ci-dessous :
![Niveau1](https://user-images.githubusercontent.com/38428191/174302329-fceb1070-4177-4d9e-baf2-069393c203cf.jpg)


Précisions :
Les trois tuiles peuvent défiler horizontalement.
Vous pouvez remplacer les illustrations sur la maquette par n’importe quelle image que vous trouverez sur Internet.
Le champ “matière” en haut de la page définit ce qui est inscrit dans la phrase “Les Teach’rs de [matière] qui pourraient vous correspondre”. Cela a notamment pour but de tester votre connaissance du fonctionnement du “state” propre à React.
Bonus très apprécié : votre page doit être responsive.

Niveau 2
Factoriser son code

Au lieu d’utiliser de fausses données entrées “en dure” dans votre code, nous vous invitons à montrer votre maîtrise de React en utilisant un objet contenant vos données, pour factoriser votre code à l’aide des composants.
Vous aurez donc un composant TeacherCard correspondant à une tuile d’information de professeur sur la maquette 1, et vous bouclerez sur votre objet pour obtenir plusieurs TeacherCard sur le rendu final.

Niveau 3
Requêtes à une API

Au lieu d’utiliser de fausses données entrées “en dure” dans votre code, ou un objet contenant vos données, nous vous invitons à montrer votre maîtrise des API en utilisant l’API de data.gouv.fr : https://doc.data.gouv.fr/api/reference/#/users/list_users . C’est une API publique, vous pourrez donc librement effectuer des requêtes sur l’endpoint /users afin d’obtenir une liste d'utilisateurs fictifs à utiliser dans vos maquettes.

Niveau 4
Formulaire

Pour les plus motivés, vous pouvez montrer votre maîtrise des formulaires en réalisant la maquette ci-dessous :
![Niveau4](https://user-images.githubusercontent.com/38428191/174302344-b041385b-81a6-4ae8-8dbb-f3ecf75ea0b6.jpg)


Bonus : Vous pouvez implémenter une vérification pour vous assurer de la cohérence de ce qui est entré dans les champs (exemple : l’adresse mail est bien une adresse mail, le numéro de téléphone est bien un numéro de téléphone, etc. )

Bon courage !
L’équipe Teach’r
