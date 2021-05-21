import React from "react";
import { Backend } from "../services/backend";

export default function Conversation() {
  const [chats, setChats] = React.useState([]);
  const [selectedChat, setSelectedChat] = React.useState();

  React.useEffect(async () => {
    await Backend.myChat().then((data) => {
      setChats(data);
      console.log(data);
    });
  }, []);
  const selectConv = (conv) => {
    setSelectedChat(conv);
    console.log(conv);
  };
  return (
    <div className="uk-container uk-container-large">
      <h1>Chat</h1>
      <div className="uk-flex">
        <div className="uk-position-relative uk-display-block uk-padding uk-width-auto">
          {Object.keys(chats).map((conv) => {
            return (
              <div key={conv}>
                <a onClick={(e) => selectConv(chats[conv])}>
                  {chats[conv].name} - {chats[conv].lenght} messages
                </a>
              </div>
            );
          })}
        </div>
        <div className="uk-padding uk-width-expand">
          {selectedChat?.msg?.map((m) => {
            return (
              <>
                <div className="uk-card uk-card-default uk-card-small uk-margin uk-padding-remove">
                  <div className="uk-card-body uk-padding-small">
                    <b>User {m.idUser1} :</b>
                    <p className="uk-padding-remove uk-margin-remove">
                      {m.msg}
                    </p>
                    <p className="uk-padding-remove uk-margin-remove">
                      {m.date}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
