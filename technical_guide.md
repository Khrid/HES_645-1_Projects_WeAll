# Guide technique
Ce guide a pour but d'expliquer le raisonnement technique de notre projet, et permettre à une personne externe de reprendre le projet et d'y contribuer.

# Technologie
L'application est écrite en [React](https://fr.reactjs.org/), et utilise les libraires externes suivantes (selon [```package.json```](package.json)): 
 - ```react-dom```
 - ```react-router-dom```
 - ```react-scripts```

# Organisation
La grande majorité du code se trouve dans le répertoire ```src```. Il est composé des répertoires suivants :
 - ```components```
 - ```pages```
 - ```services```
 - ```utils```

## components
Ce dossier contient les Components React de notre application
#### [```Cv.js```](components/Cv.js)
Composant permettant d'afficher le CV d'une postulant.

#### [```CvList.js```](components/CvList.js)
Composant permettant d'afficher une liste de CV de postulants.

#### [```Message.js```](components/Message.js)
Composant permettant d'afficher les messages d'une conversation.

#### [```Offer.js```](components/Offer.js) (+ [```Offer.css```](components/Offer.css))
Composant permettant d'afficher une offre reçue de la part d'une entreprise.

#### [```OfferList.js```](components/OfferList.js)
Composant permettant d'afficher une liste d'offres reçues.

#### [```Spinner.js```](components/Spinner.js)
Composant permettant d'afficher un spinner de chargement.
