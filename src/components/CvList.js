import { getNodeText } from "@testing-library/react";
import React, { useState } from "react";
import { Backend } from "../services/backend";
import { Offer } from "./Offer";
import { Cv } from "./Cv";

export const CvList = () => { 

  const [postulants, setPostulants] = useState([]);
  const [selectedPostulant, setSelectedPostulant] = useState(null);
  const [selectedCv, setSelectedCv] = useState(null);

  
  // Get postulants
  React.useEffect(() => {
    Backend.getPostulants().then((p) => {
      setPostulants(p)
      // console.log(p);
    });
  }, []);

  

  return (
    <>
      <div className="uk-container uk-container-large uk-margin-top">
        <h1>CV des postulants</h1>

        <div className="uk-grid">
          <div className="uk-width-1-4">
            <ul className="uk-list uk-list-large uk-list-divider">
              {postulants
                ? postulants.map((p,i) =>  {
                  if(p.nom !=''){
                    return (
                      <li key={'postulant-cv-'+i}>
                        <a
                          href="#"
                          onClick={() => {
                            setSelectedPostulant(p)
                            // console.log(selectedPostulant);
                          }}
                        >
                          {p.nom} {p.prenom}
                          
                        </a>
                      </li>
                    );
                  }
                })
                : null}
            </ul>
          </div>
          <div className="uk-width-3-4">
            {selectedPostulant  ? (
              <Cv cv={selectedPostulant} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
