import { Link } from "react-router-dom";
import { useIsLoggedInContext } from "../services/login-context";
import { resetLogin } from "../utils/helper";

export const NavigationBar = (props) => {
  const { state, dispatch } = useIsLoggedInContext();
  const { isLoggedIn } = state;

  const logout = (e) => {
    e.preventDefault();
    dispatch({ type: "IS_LOGGED_OFF" });
    resetLogin();
  };

  return (
    <div className="uk-background-muted">
      <nav
        className="uk-navbar-container navbar uk-container uk-container-large"
        uk-navbar="mode: click"
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            {isLoggedIn ? (
              <>
                <li className="uk-active">
                  <Link className="App-link" to={`/companies`}>
                    Companies
                  </Link>
                </li>

                <li>
                  <Link className="App-link" to={`/chat`}>
                    Chat
                  </Link>
                </li>
                <li>
                  <a className="App-link" onClick={logout} href="/">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link className="App-link" to={`/`}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
