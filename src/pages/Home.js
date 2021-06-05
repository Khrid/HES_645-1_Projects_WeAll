import { useIsLoggedInContext } from "../services/login-context";

const Home = () => {
  const { state, dispatch } = useIsLoggedInContext();
  const { isLoggedIn } = state;

  return (
    <>
      <div></div>
      <div></div>
    </>
  );
};

export default Home;
