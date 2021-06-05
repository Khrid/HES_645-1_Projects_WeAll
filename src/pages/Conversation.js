import React, { createRef } from "react";
import { Message } from "../components/Message";
import { Spinner } from "../components/Spinner";
import { Backend } from "../services/backend";
import { useIsLoggedInContext } from "../services/login-context";
import "./Conversation.css";

export const Conversation = () => {
  const { state } = useIsLoggedInContext();
  const { isLoggedIn } = state;
  const [chats, setChats] = React.useState([]);
  const [selectedChat, setSelectedChat] = React.useState();
  const [selectedUserId, setSelectedUserId] = React.useState();
  const [messageToSend, setMessageToSend] = React.useState("");
  const scrollElement = createRef();

  React.useEffect(async () => {
    await Backend.myChat().then((data) => {
      setChats(data);
      console.log(data);
    });
  }, []);

  React.useEffect(async () => {
    scrollToBottom();
  }, [selectedUserId]);

  const scrollToBottom = () => {
    scrollElement.current.scrollTop = scrollElement.current.scrollHeight;
  };

  const selectConversation = (id) => {
    setSelectedUserId(id);
    setSelectedChat(chats[id]);
  };

  const sendMessage = () => {};

  return (
    <>
      <div className="uk-container uk-container-large uk-margin-top">
        <h1>Chat</h1>
        <div className="uk-flex">
          <div className="uk-position-relative uk-display-block uk-width-auto">
            {isLoggedIn ? (
              Object.keys(chats).map((conv) => {
                return (
                  <div key={`chatavalaible-${conv}`}>
                    <a onClick={(e) => selectConversation(conv)}>
                      {conv}
                      {chats[conv].name} - {chats[conv].lenght} messages
                    </a>
                  </div>
                );
              })
            ) : (
              <p>Error - You are not logged in</p>
            )}
          </div>
          <div className="uk-padding uk-padding-remove-top uk-width-expand">
            <div className="uk-card uk-card-default uk-border-rounded">
              <div
                className="uk-card-body uk-padding-small chat-container"
                ref={scrollElement}
              >
                {isLoggedIn && selectedChat ? (
                  selectedChat.msg?.map((m, index) => {
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
