import React, { useState } from "react";
import { Backend } from "../services/backend";
import { TOKEN_STORAGE_KEY } from "../utils/request";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("entreprise1@fake.ch");
  const [password, setPassword] = useState("passwordTest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  const login = async () => {
    try {
      let loginData = await Backend.login(email, password);

      // Save the token to localStorage & redirect to the home page
      localStorage.setItem(TOKEN_STORAGE_KEY, loginData.token);
      setIsLoggedIn(true);

      // Redirect to the home page
      history.push("/chat");
    } catch (e) {
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
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="E-mail"
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <br />
        <input
          required
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
