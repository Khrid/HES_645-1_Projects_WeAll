import React, { useState } from "react";
import { Backend } from "../services/backend";
import { TOKEN_STORAGE_KEY, USER_ID_STORAGE_KEY, IS_ENTERPRISE_STORAGE_KEY } from "../utils/request";
import { useHistory } from "react-router-dom";
import { useIsLoggedInContext } from "../services/login-context";

export default function Login() {
  const { state, dispatch } = useIsLoggedInContext();
  const { isLoggedIn, error } = state;
  // const { setIsLoggedIn, isLoggedIn } = props;
  const [email, setEmail] = useState("entreprise1@fake.ch");
  const [password, setPassword] = useState("passwordTest");
  const history = useHistory();

  React.useEffect(() => {
    if(isLoggedIn) {
      history.push("/chat");
    }
  }, [])
  
  const login = async () => {
    try {
      let loginData = await Backend.login(email, password);

      // Save the token to localStorage & redirect to the chat page
      localStorage.setItem(TOKEN_STORAGE_KEY, loginData.token);
      localStorage.setItem(USER_ID_STORAGE_KEY, loginData.userId);
      localStorage.setItem(IS_ENTERPRISE_STORAGE_KEY, loginData.isEnterprise);
      dispatch({ type: "SET_LOGIN", isEntreprise: loginData.isEnterprise, userId: loginData.userId, isLoggedIn: true  });

      // Redirect to the chat page
      history.push("/chat");
    } catch (e) {
      dispatch({
        type: "IS_LOGGED_ERROR",
        error: "Error with API on login",
      });
      console.error(e);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();
    login();
  };

  return (
    <div>
      <div
        className="uk-section uk-flex uk-flex-middle uk-animation-fade"
        data-uk-height-viewport="expand:true;"
      >
        <div className="uk-width-1-1">
          <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                  <h3 className="uk-card-title uk-text-center">Login</h3>
                  <form>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: mail"
                        ></span>
                        <input
                          className="uk-input uk-form-large"
                          required
                          placeholder="E-mail"
                          type="email"
                          onChange={handleEmailChange}
                          value={email}
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: lock"
                        ></span>
                        <input
                          className="uk-input uk-form-large"
                          type="password"
                          required
                          placeholder="Password"
                          onChange={handlePasswordChange}
                          value={password}
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <button
                        onClick={handleSubmit}
                        className="uk-button uk-button-primary uk-button-large uk-width-1-1"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {error ? <span className="uk-alert-danger">{error}</span> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
