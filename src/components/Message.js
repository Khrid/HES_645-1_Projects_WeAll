import { getDateFormattedFromIsoDate } from "../utils/helper";

export const Message = (props) => {
  const { message, selectedUserId } = props;
  const isMe = () => {
    return selectedUserId != message.idUser1;
  };
  return (
    <div
      className={`${
        isMe() ? "me uk-text-right uk-flex-right" : "guest"
      } uk-grid uk-grid-small uk-flex-bottom`}
    >
      <div
        className={`${isMe() ? "uk-flex-first" : "uk-flex-last"} uk-width-auto`}
      >
        <div
          className={`${
            isMe() ? "uk-card-primary" : "uk-card-default"
          } uk-card uk-card-body uk-card-small uk-border-rounded`}
        >
          <p className="uk-margin-remove">{message.message}</p>
          <p className="uk-margin-remove date-string">
            {getDateFormattedFromIsoDate(message.date)}
          </p>
          
          {/* <div className="uk-card-body uk-margin-remove uk-padding-remove">
            {message.msg}
          </div>
          <div className="uk-card-footer uk-margin-remove uk-padding-remove">
            {message.date}
          </div> */}
        </div>
      </div>
      <div className="uk-width-auto">
        <span className="uk-icon-button" uk-icon="icon: user; ratio: 1"></span>
        {/* <img
          className="uk-border-circle"
          width="32"
          height="32"
          src="https://getuikit.com/docs/images/avatar.jpg"
        /> */}
      </div>
    </div>
  );
};
