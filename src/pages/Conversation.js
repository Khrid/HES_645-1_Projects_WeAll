import React, { createRef } from "react";
import { Message } from "../components/Message";
import { Spinner } from "../components/Spinner";
import { Backend } from "../services/backend";
import { useIsLoggedInContext } from "../services/login-context";
import "./Conversation.css";

export const Conversation = () => {
  const { state } = useIsLoggedInContext();
  const { isLoggedIn, userId } = state;
  const [conversations, setConversations] = React.useState([]);
  const [specificConversation, setSpecificConversation] = React.useState([]);
  const [chats, setChats] = React.useState([]);
  const [selectedChat, setSelectedChat] = React.useState();
  const [selectedUserId, setSelectedUserId] = React.useState();
  const [messageToSend, setMessageToSend] = React.useState("");
  const scrollElement = createRef();

  React.useEffect(async () => {
    await Backend.getConversation().then((data) => {
      setConversations(data.filter(d => d.id_user1 == userId || d.id_user2 == userId));
      console.log(data);
    });
  }, []);

  
  React.useEffect(() => {
    scrollToBottom();
  }, [selectedUserId]);

  

  const scrollToBottom = () => {
    if (scrollElement.current)
      scrollElement.current.scrollTop = scrollElement.current.scrollHeight;
  };

  const selectConversation = (id) => {
    setSelectedUserId(id);
    setSelectedChat(chats[id]);
  };

  const getUsers=(conv) => {
  
    Backend.getSpecificConversation(conv.id_user1,conv.id_user2).then((data) => {
      setSpecificConversation(data);
      console.log(conv.id_user2)
      console.log(conv.id_user1)
    });
    
  };


  const sendMessage = () => {
    // setChats([...selectedChat, {}]);
  };


  return (
    <>
      <div className="uk-container uk-container-large uk-margin-top">
        <h1>Chat</h1>
        <div className="uk-flex">
          <div className="uk-position-relative uk-display-block uk-width-auto">
            {isLoggedIn ? (
              <ul class="uk-list uk-list-large uk-list-divider">
                {conversations ? conversations.map(c => 
                <div key={`chatavalaible-${c.id_user1}-${c.id_user2}`}>
                
                <a onClick={(e) => getUsers(c)}>
                  
                  {c.nom_entreprise}
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
              {isLoggedIn ? (
                <div
                  className="uk-card-body uk-padding-small uk-animation-fade chat-container"
                  ref={scrollElement}
                >
                  {specificConversation ? (
                    specificConversation.map((m, index) => {
                      return (
                        <Message
                          key={`message-${index}`}
                          message={m}
                          selectedUserId={selectedUserId}
                        />
                      );
                    })
                  ) : (
                    <Spinner />
                  )}
                </div>
              ) : null}

              {isLoggedIn && selectedChat ? (
                <div className="uk-card-footer uk-padding-remove">
                  <div className="uk-grid uk-grid-small uk-flex-middle">
                    {/* <div className="uk-width-auto">
                      <a
                        href="#"
                        className="uk-icon-link uk-margin-small-left"
                        uk-icon="icon: happy"
                      ></a>
                    </div> */}
                    <div className="uk-width-expand">
                      <div className="uk-padding-small">
                        <textarea
                          className="uk-textarea uk-padding-remove uk-border-remove msg-text"
                          rows="1"
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
