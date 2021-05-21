import { Link } from "react-router-dom";
import { TOKEN_STORAGE_KEY } from "../utils/request";

export const NavigationBar = () => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    window.location = "/";
  };
  return (
    <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          {localStorage.getItem(TOKEN_STORAGE_KEY) && (
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
            </>
          )}
        </ul>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            {!localStorage.getItem(TOKEN_STORAGE_KEY) ? (
              <Link className="App-link" to={`/`}>
                Login (Example)
              </Link>
            ) : (
              <a className="App-link" onClick={logout} href="/">
                Logout
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
