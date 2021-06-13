import React from "react";
import "./Offer.css";
import { getDateFormattedFromIsoDateOffer } from "../utils/helper";
import { useIsLoggedInContext } from "../services/login-context";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";
export const Offer = (props) => {
  const { state } = useIsLoggedInContext();
  const { userId } = state;
  const { offer, enterprise } = props;
  const history = useHistory()

  const createConversation = () => {
    Backend.createConversation(userId, enterprise.id_user).then(data => {
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
              <img src={enterprise.image_url} />
            </div>
            <div className="uk-width-2-3 uk-margin-small">
              <h2>{enterprise.nom}</h2>
              <input
                className="uk-input uk-margin-small"
                value={enterprise.NPA + " " + enterprise.localite}
                disabled
              />
              <input
                className="uk-input uk-margin-small"
                value={enterprise.description}
                disabled
              />
              <input
                className="uk-input uk-margin-small"
                value={enterprise.type_entreprise}
                disabled
              />
              <input
                className="uk-input uk-margin-small"
                value={enterprise.secteur}
                disabled
              />
            </div>
            <div className="uk-width-1-1 uk-margin-small">
              <input
                className="uk-input uk-margin-small"
                value={enterprise.ethique}
                disabled
              />
              <input
                className="uk-input uk-margin-small"
                value={enterprise.label}
                disabled
              />
            </div>
          </div>
          <div className="uk-section uk-section-muted uk-padding-small">
            <h4>Offer</h4>
            <div className="uk-grid">
              <div className="uk-width-1-2 uk-margin-small uk-margin-small-top">
                <input className="uk-input" value={offer.nom} disabled />
              </div>
              <div className="uk-width-1-2 uk-margin-small">
                <input className="uk-input" value={offer.taux} disabled />
              </div>
              <div className="uk-width-1-1 uk-margin-small">
                <input
                  className="uk-input"
                  value={offer.NPA + " " + offer.ville}
                  disabled
                />
              </div>
              <div className="uk-width-1-2 uk-margin-small">
                <input className="uk-input" value={offer.contrat} disabled />
              </div>
              <div className="uk-width-1-2 uk-margin-small">
                <input className="uk-input" value={offer.duree} disabled />
              </div>
              <div className="uk-width-1-1 uk-margin-small">
                <textarea
                  className="uk-textarea"
                  value={"Details"}
                  disabled
                ></textarea>
              </div>
              <div className="uk-width-1-2 uk-margin-small uk-margin-small-top">
                <input
                  className="uk-input"
                  value={offer.salaire_max + " CHF"}
                  disabled
                />
              </div>
              <div className="uk-width-1-2 uk-margin-small">
                <input
                  className="uk-input"
                  value={getDateFormattedFromIsoDateOffer(offer.dispo)}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
