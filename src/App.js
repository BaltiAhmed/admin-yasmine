import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavLogin from "./components/nav-login";
import { Authcontext } from "./context/auth-context";
import { UserAuth } from "./hooks/Auth-houks";
import Login from "./pages/login";
import NavBar from "./components/nav-bar";
import Home from "./pages/home";
import ListeUtilisateur from "./pages/utilisateur/liste-utilisateur";
import ListProjetUtilisateur from "./pages/projet/list-projet-utilisateur";
import ListEquipement from "./pages/equipement/list-equipement";
import ListeMarketing from "./pages/marketing/list-marketing";
import ListProduction from "./pages/production/list-production";
import ListProjet from "./pages/projet/list-projet";

function App() {
  const { user, token, login, logout } = UserAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/utilisateur"  component={ListeUtilisateur} />
        <Route path="/list-projet-utilisateur/:id"  component={ListProjetUtilisateur} />
        <Route path="/list-equipement/:id"  component={ListEquipement} />
        <Route path="/list-marketing/:id"  component={ListeMarketing} />
        <Route path="/list-production/:id"  component={ListProduction} />
        <Route path="/list-projet"  component={ListProjet} />
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
