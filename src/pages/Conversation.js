import React, { createRef } from "react";
import { Message } from "../components/Message";
import { Backend } from "../services/backend";
import { useIsLoggedInContext } from "../services/login-context";
import "./Conversation.css";

export const Conversation = () => {
  const { state } = useIsLoggedInContext();
  const { isLoggedIn, userId, isEntreprise } = state;
  const [conversations, setConversations] = React.useState([]);
  const [specificConversation, setSpecificConversation] = React.useState(null);
  const [messageToSend, setMessageToSend] = React.useState("");
  const [user1, setUser1] = React.useState();
  const [user2, setUser2] = React.useState();
  const scrollElement = createRef();

  React.useEffect(async () => {
    updateConversations()
  }, []);

  React.useEffect(() => {
    updateSpecificConversation();
  }, [user1, user2])

  React.useEffect(() => {
    scrollToBottom();
  }, [specificConversation]);

  const scrollToBottom = () => {
    if (scrollElement.current)
      scrollElement.current.scrollTop = scrollElement.current.scrollHeight;
  };

  const updateSpecificConversation = () => {
    if(user1 && user2) {
      Backend.getSpecificConversation(user1, user2).then((data) => {
        setSpecificConversation(data);
      });
    }
  }
  const updateConversations = () => {
    Backend.getConversation().then((data) => {
      setConversations(data);
    });
  }
  const resetSpecificConversation = () => {
    setSpecificConversation(null);
    setUser1(null);
    setUser2(null);
  }

  const setConversationSelected = (conv) => {
    setUser1(conv.id_user1);
    setUser2(conv.id_user2);
  };

  const sendMessage = () => {
    if(messageToSend) {
      Backend.sendMessage(user1, user2, messageToSend).then((data) => {
        setMessageToSend("");
        updateSpecificConversation();
      });
    }
    
  };

  const getConversationForUser = () => {
    return conversations.filter(c => c.id_user1 == +userId || c.id_user2 == +userId);
  }

  const closeConversation = () => {
    Backend.closeConversation(user1, user2).then(data => {
      resetSpecificConversation();
      updateConversations();
    });

  }
  return (
    <>
      <div className="uk-container uk-container-large uk-margin-top">
        <h1>Chat - user {userId}</h1>
        <div className="uk-flex">
          <div className="uk-position-relative uk-display-block uk-width-auto">
            {isLoggedIn ? (
              <ul className="uk-list uk-list-large uk-list-divider">
                {conversations ? getConversationForUser().map((c, i) => 
                <div key={`chatavalaible-${i}`}>
                
                <a onClick={(e) => setConversationSelected(c)}>
                  {isEntreprise == true ? c.nom_postulant: ''}
                  {isEntreprise == false ? c.nom_entreprise: ''}
                </a>
              </div>
                ):null}
              </ul>
            ) : (
              <p>Error - You are not logged in</p>
            )}
          </div>
          <div className="uk-padding uk-padding-remove-top uk-width-expand">
            <div className="uk-card uk-card-default uk-border-rounded">
              {isLoggedIn && specificConversation ? 
                <div className="uk-card-header">
                    <span className="uk-card-title">User {user1} to user {user2}</span>
                    <button className="uk-button uk-button-danger" style={{float:'right'}} onClick={() => {closeConversation()}}>Close</button>
                </div>:
              null}
              {isLoggedIn ? (
                <div
                  className="uk-card-body uk-padding-small uk-animation-fade chat-container"
                  ref={scrollElement}
                >
                  
                  {specificConversation ? (specificConversation.map((m, index) => {
                      return (
                          m.message ? <Message
                            key={`message-${index}`}
                            message={m}
                            selectedUserId={userId}
                          />:null                   
                      );
                    })
                  ): (
                    <div className="">
                      <div className="uk-position-center">
                        <h1>SELECT A CONVERSATION</h1>
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

              {isLoggedIn && specificConversation ? (
                <div className="uk-card-footer uk-padding-remove">
                  <div className="uk-grid uk-grid-small uk-flex-middle">
                    <div className="uk-width-expand">
                      <div className="uk-padding-small">
                        <textarea
                          className="uk-textarea uk-padding-remove uk-border-remove msg-text"
                          rows="1"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              sendMessage()
                            }
                          }}
                          placeholder="Message"
                          value={messageToSend}
                          onChange={(e) => {
                            setMessageToSend(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="uk-width-auto">
                      <ul className="uk-iconnav uk-margin-small-right ">
                        {/* <li>
                          <a href="#" uk-icon="icon: image"></a>
                        </li>
                        <li>
                          <a href="#" uk-icon="icon: location"></a>
                        </li> */}
                        <li>
                          <button
                            className="uk-button uk-button-primary"
                            onClick={sendMessage}
                            disabled={messageToSend ? false:true}
                          >
                            Send
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
