# Guide technique
Ce guide a pour but d'expliquer le raisonnement technique de notre projet, et permettre à une personne externe de reprendre le projet et d'y contribuer.

## Technologie
L'application est écrite en [React](https://fr.reactjs.org/), et utilise les libraires externes suivantes (selon [```package.json```](package.json)): 
 - ```react-dom```
 - ```react-router-dom```
 - ```react-scripts```

## Structure
La grande majorité du code se trouve dans le répertoire ```src```. Il est composé des répertoires suivants :
 - [```components```](src/components)
 - [```pages```](src/pages)
 - [```services```](src/services)
 - [```utils```](src/utils)

### components
Ce dossier contient les Components React de notre application
#### [```Cv.js```](src/components/Cv.js)
Composant permettant d'afficher le CV d'une postulant.

#### [```CvList.js```](src/components/CvList.js)
Composant permettant d'afficher une liste de CV de postulants.

#### [```Message.js```](src/components/Message.js)
Composant permettant d'afficher les messages d'une conversation.

#### [```Offer.js```](src/components/Offer.js) (+ [```Offer.css```](src/components/Offer.css))
Composant permettant d'afficher une offre reçue de la part d'une entreprise.

#### [```OfferList.js```](src/components/OfferList.js)
Composant permettant d'afficher une liste d'offres reçues.

#### [```Spinner.js```](src/components/Spinner.js)
Composant permettant d'afficher un spinner de chargement.

### pages
Ce dossier contient les éléments qui seront inclus et affichés à l'écran.
#### [```Conversation.js```](src/pages/Conversation.js) (+ [```Conversation.css```](src/pages/Conversation.css))
Permet d'afficher la ou les conversation(s).
#### [```Login.js```](src/pages/Login.js)
Permet à un postulant ou une entreprise de se connecter.
#### [```NavigationBar.js```](src/pages/NavigationBar.js)
Gère la barre de navigation du site
#### [```Offers.js```](src/pages/Offers.js)
Permet d'afficher les offres.


### services
Ce dossier contient les éléments qui seront inclus et affichés à l'écran.
#### [```backend.js```](src/services/backend.js)
Ce fichier gère l'interaction avec le backend WeAll. Les différents endpoints sont gérés avec la constante ```ENDPOINTS```, et qui seront appelés via la constante ```Backend```. Il est ainsi possible de faire ```Backend.getExperience``` pour faire appel à l'API et récupérer l'expérience d'un postulant.

#### [```login-context.js```](src/services/login-context.js)
Ce fichier gère le ```Context``` du login.


### utils
Ce dossier contient les éléments qui seront inclus et affichés à l'écran.
#### [```helper.js```](src/utils/helper.js)
Met à dispotion diverses fonctions utilitaires.
- ```tokenIsStored``` : renvoie l'état de stockage du token
- ```userIdIsStored``` : renvoie l'état de stockage du user id
- ```resetLogin``` : déconnecte l'utilisateur en vidant le token et le user ID du localStorage
- ```getDateFormattedFromIsoDate``` : transforme une date ISO en date formatée
- ```getDateFormattedFromIsoDateOffer``` : transforme une date d'offre en date formatée

#### [```request.js```](src/utils/request.js)
Met à disposition la fonction ```request``` qui permet de faire des appels REST. Elle est à utiliser de paire avec les endpoints exposés au travers du Backend.
