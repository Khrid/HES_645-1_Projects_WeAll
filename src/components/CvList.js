import React, { useState } from "react";
import { Backend } from "../services/backend";
import { Offer } from "./Offer";

export const CvList = () => { 

  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [enterprise, setEnterprise] = useState();
  // Get postulants
  React.useEffect(() => {
    // Backend.getOffers().then((o) => {

    // });
  }, []);
  // Get one CV
  React.useEffect(() => {
    // Backend.getEnterprise(selectedOffer?.id_entreprise).then((e) => {
    // });
  }, [selectedOffer]);

  return (
    <>
      <div className="uk-container uk-container-large uk-margin-top">
        <h1>CV</h1>

        <div className="uk-grid">
          <div className="uk-width-1-4">
            <ul class="uk-list uk-list-large uk-list-divider">
              {offers
                ? offers.map((o) => {
                    return (
                      <li>
                        <a
                          href="#"
                          onClick={() => {
                            setSelectedOffer(o);
                          }}
                        >
                          {o.id_offre} - {o.nom}
                        </a>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="uk-width-3-4">
            {selectedOffer && enterprise ? (
              <Offer offer={selectedOffer} enterprise={enterprise} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};