import { useIsLoggedInContext } from "../services/login-context";

export const Home = () => {
  const { state, dispatch } = useIsLoggedInContext();
  const { isLoggedIn } = state;

  return (
    <div className="uk-position-center">
      <button
        onClick={() => {
          dispatch({ type: "IS_LOGGED_IN" });
        }}
      >
        set logged in {isLoggedIn ? <p>logged in</p> : <p>not logged in</p>}
      </button>
    </div>
  );
};
