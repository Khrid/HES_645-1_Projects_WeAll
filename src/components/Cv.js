import React, { useState } from "react";
import "./Offer.css";
import { Backend } from "../services/backend";
import { getDateFormattedFromIsoDateOffer } from "../utils/helper";
import { useIsLoggedInContext } from "../services/login-context";
import { useHistory } from "react-router-dom";

export const Cv = (props) => {
  const { cv } = props;
  const { state } = useIsLoggedInContext();
  const { userId } = state;
  const history = useHistory();
  const [experience, setExperience] = useState();
  const [formation, setFormation] = useState();
  const [langue, setLangue] = useState([]);
  const [sejour, setSejour] = useState([]);
  const [softSkill, setSoftSkill] = useState([]);

  //const [competence, setCompetence] = useState([]);
  //const [candidat, setCandidat] = useState();


  React.useEffect(() => {
    
    Backend.getFormation(cv.id_postulant).then((e) => {
        setFormation(e);
        //console.log(e)
    });
    

    Backend.getLangues(cv?.id_postulant).then((e) => {
        setLangue(e);
        //console.log(e)
    });

    
    Backend.getSejours(cv?.id_postulant).then((e) => {
        setSejour(e);
        //console.log(e)
    });

    
    Backend.getSoftSkill(cv.id_postulant).then((e) => {
        setSoftSkill(e);
        //console.log(e)
    });

    Backend.getExperience(cv.id_postulant).then((e) => {
        setExperience(e);
        //console.log(e)
    });
    
    }, [cv]);

    const civilite = () => {
      if(cv.sexe ==='Homme'){
        return 'Monsieur'
      }
      else{
        return 'Madame'
      }

    };
    const createConversation = () => {
      Backend.createConversation(userId, cv.id_user).then(data => {
        history.push('/chat')
      });
    }


  return (
    <>
      <div className="uk-card uk-card-default uk-animation-fade">
        <div className="uk-card-body">
          <button className="uk-card-badge uk-button" onClick={() => {createConversation()}}>Contact</button>
          <div className="uk-grid">
            <div className="uk-width-1-3">
            <img src={cv.url_photo} />
            </div>
            <div className="uk-width-2-3 uk-margin-small">
              <h4>{civilite()}</h4>
              
              <h2>{cv.nom} {cv.prenom} </h2>
              <input
                className="uk-input uk-margin-small"
                value={"Date de naissance : "+getDateFormattedFromIsoDateOffer(cv.date_de_naissance)}
                disabled
              />
              
              <input
                className="uk-input uk-margin-small"
                value={"Localité : "+ cv.npa +" "+ cv.localite}
                disabled
              />
              <input
                className="uk-input uk-margin-small"
                value={"Numéro de téléphone : "+ cv.telephone}
                disabled
              />
            </div>
          </div>
          
          <br/>

          <div className="uk-section uk-section-muted uk-padding-small uk-list-divider">
            <h4>Conditions cadres : </h4>        
            <div className="uk-list">
            <input
                className="uk-input uk-margin-small"
                value={"Disponibilité : "+ cv.disponibilite}
                disabled
              />
              <input
                className="uk-input uk-margin-small"
                value={"Salaire min : "+ cv.salaire_min+" CHF"}
                disabled
              />
               <input
                className="uk-input uk-margin-small"
                value={"Salaire max : "+ cv.salaire_max+" CHF"}
                disabled
              />  
            </div>       
          </div>

          <br/>


          <div className="uk-section uk-section-muted uk-padding-small uk-list-divider">
            <h4>Formations : </h4>        
            <div className="uk-list">
              {formation
                ? formation.map((f, i) => {
                    return (
                      <div key={'formation-' + i}>
                        {f.degree} {f.institut}
                        <br/>
                        Date de début : {getDateFormattedFromIsoDateOffer(f.date_debut)}  - Date de fin : {getDateFormattedFromIsoDateOffer(f.date_fin)}           
                      </div>
                    );
                  })
                : null}
              </div>       
          </div>

          <br/>

          <div className="uk-section uk-section-muted uk-padding-small uk-list-divider">
            <h4>Expériences : </h4>        
            <div className="uk-list">
              {experience
                ? experience.map((e, i) => {
                    return (
                      <div key={'experience-' + i}>
                        Poste : {e.poste}
                        <br/>
                        Entreprise : {e.entreprise}  - Localité : {e.npa} {e.localite}  
                        <br/>
                        Secteur : {e.id_secteur}           
                        <br/>
                        Date de début : {getDateFormattedFromIsoDateOffer(e.date_debut)}  - Date de fin : {getDateFormattedFromIsoDateOffer(e.date_fin)} 
                      </div>   
                    );
                  })
                : null}
              </div>       
          </div>

          <br/>


          <div className="uk-section uk-section-muted uk-padding-small uk-list-divider">
            <h4>SoftSkills : </h4>        
            <div className="uk-list">
              {softSkill
                ? softSkill.map((s, i) => {
                    return (
                      <div key={'softskill-' + i}>
                        {s.softskill}
                        <br/>
                      </div>   
                    );
                  })
                : null}
              </div>       
          </div>

          <br/>


          <div className="uk-section uk-section-muted uk-padding-small uk-list-divider">
            <h4>Langues : </h4>        
            <div className="uk-list">
              {langue
                ? langue.map((l, i) => {
                    return (
                      <div key={'langue-' + i}>
                        {l.langue} {l.niveau}                       
                      </div>
                    );
                  })
                : null}
              </div>       
          </div>

          <br/>

          <div className="uk-section uk-section-muted uk-padding-small uk-list-divider">
            <h4>Séjours linguistiques : </h4>        
            <div className="uk-list">
              {sejour
                ? sejour.map((s, i) => {
                    return (
                      <div key={'sejour-' + i}>
                        {s.pays} - {s.type}            
                      </div>
                    );
                  })
                : null}
              </div>       
          </div>

          <br/>

          

        </div>
      </div>
    </>
  );
};
