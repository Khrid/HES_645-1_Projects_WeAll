import { Link, NavLink } from "react-router-dom";
import { useIsLoggedInContext } from "../services/login-context";
import { resetLogin } from "../utils/helper";

const routes = [
  { to: "/chat", name: "Chat" },
  { to: "/offers", name: "Offers" },
];

export const NavigationBar = () => {
  const { state, dispatch } = useIsLoggedInContext();
  const { isLoggedIn, isEntreprise, userId } = state;

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
                {routes.map((r, i) => (
                  <li className="" key={'routes-nav' + i}>
                    <NavLink
                      activeClassName="link-active"
                      className="App-link"
                      to={r.to}
                    >
                      {r.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink className="App-link" onClick={logout} to={"/"}>
                    Logout
                  </NavLink>
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
