# Guide technique
Ce guide a pour but d'expliquer le raisonnement technique de notre projet, et permettre à une personne externe de reprendre le projet et d'y contribuer.

# Technologie
L'application est écrite en [React](https://fr.reactjs.org/), et utilise les libraires externes suivantes (selon [```package.json```](package.json)): 
 - ```react-dom```
 - ```react-router-dom```
 - ```react-scripts```

# Structure
La grande majorité du code se trouve dans le répertoire ```src```. Il est composé des répertoires suivants :
 - [```components```](src/components)
 - [```pages```](src/pages)
 - [```services```](src/services)
 - [```utils```](src/utils)

## components
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

## pages
Ce dossier contient les éléments qui seront inclus et affichés à l'écran.
#### [```Companies.js```](src/pages/Companies.js)
Permet d'afficher la liste des entreprises.
#### [```Conversation.js```](src/pages/Conversation.js) (+ [```Conversation.css```](src/pages/Conversation.css))
Permet d'afficher la ou les conversation(s).
#### [```Home.js```](src/pages/Home.js)
Page d'accueil du site.
#### [```Login.js```](src/pages/Login.js)
Permet à un postulant ou une entreprise de se connecter.
#### [```NavigationBar.js```](src/pages/NavigationBar.js)
Gère la barre de navigation du site
#### [```Offers.js```](src/pages/Offers.js)
Permet d'afficher les offres.
