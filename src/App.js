import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavLogin from "./components/nav-login";
import { Authcontext } from "./context/auth-context";
import { UserAuth } from "./hooks/Auth-houks";
import Login from "./pages/login";
import NavBar from "./components/nav-bar";
import Home from "./pages/home";
import ListeUtilisateur from "./pages/utilisateur/liste-utilisateur";

function App() {
  const { user, token, login, logout } = UserAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/utilisateur"  component={ListeUtilisateur} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Login} />
      </React.Fragment>
    );
  }
  return (
    <div>
      <Authcontext.Provider
        value={{ user: user, token: token, login: login, logout: logout }}
      >
        <BrowserRouter>
          {!token && <NavLogin /> }
          {!token && routes}
          {token && <NavBar centent={routes}/>}
          
        </BrowserRouter>
      </Authcontext.Provider>
    </div>
  );
}

export default App;
