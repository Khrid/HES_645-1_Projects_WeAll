import React, { useState } from "react";
import { Backend } from "../services/backend";
import { Offer } from "../components/Offer";
export const OfferList = () => {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [enterprise, setEnterprise] = useState();
  React.useEffect(() => {
    Backend.getOffers().then((o) => {
      setOffers(o);
      console.log(o);
    });
  }, []);
  React.useEffect(() => {
    Backend.getEnterprise(selectedOffer?.id_entreprise).then((e) => {
      setEnterprise(e[0]);
      console.log(enterprise);
    });
  }, [selectedOffer]);

  return (
    <>
      <div className="uk-container uk-container-large uk-margin-top">
        <h1>Offers</h1>

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
