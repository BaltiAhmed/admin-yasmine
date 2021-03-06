import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavLogin from "./components/nav-login";
import { Authcontext } from "./context/auth-context";
import { UserAuth } from "./hooks/Auth-houks";
import { FinanciereAuth } from "./hooks/Auth-houks-financiere";
import Login from "./pages/login";
import NavBar from "./components/nav-bar";
import Home from "./pages/home";
import ListeUtilisateur from "./pages/utilisateur/liste-utilisateur";
import ListProjetUtilisateur from "./pages/projet/list-projet-utilisateur";
import ListEquipement from "./pages/equipement/list-equipement";
import ListeMarketing from "./pages/marketing/list-marketing";
import ListProduction from "./pages/production/list-production";
import ListProjet from "./pages/projet/list-projet";
import ListFormation from "./pages/formation/list";
import AjoutFormation from "./pages/formation/ajout";
import UpdateFormation from "./pages/formation/update";
import image from "./images/image.jpg";
import ListeFinanciere from "./pages/financiere/list";
import Chat from "./pages/chat/chat";
import ListClient from "./pages/chat/list";

function App() {
  const { user, token, login, logout } = UserAuth();
  const { financiere, tokenFinanciere, loginFinanciere, logoutFinanciere } =
    FinanciereAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/utilisateur" component={ListeUtilisateur} />
        <Route
          path="/list-projet-utilisateur/:id"
          component={ListProjetUtilisateur}
        />
        <Route path="/list-equipement/:id" component={ListEquipement} />
        <Route path="/list-marketing/:id" component={ListeMarketing} />
        <Route path="/list-production/:id" component={ListProduction} />
        <Route path="/list-projet" component={ListProjet} />
        <Route path="/list-formation" component={ListFormation} />
        <Route path="/ajout-formation" component={AjoutFormation} />
        <Route path="/update-formation/:id" component={UpdateFormation} />
        <Route path="/financiere" component={ListeFinanciere} />
        <Route path="/chat/:id"  component={Chat} />
        <Route path="/list-client"  component={ListClient} />
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
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        /* backgroundRepeat: "no-repeat", */
        position: "absolute",
        /* height: "100vh", */
        width: "100%",
        backgroundPosition: "center",
      }}
    >
      <Authcontext.Provider
        value={{
          user: user,
          token: token,
          login: login,
          logout: logout,
          financiere: financiere,
          tokenFinanciere: tokenFinanciere,
          loginFinanciere: loginFinanciere,
          logoutFinanciere: logoutFinanciere,
        }}
      >
        <BrowserRouter>
          {!token && <NavLogin />}
          {!token && routes}
          {token && <NavBar centent={routes} />}
        </BrowserRouter>
      </Authcontext.Provider>
    </div>
  );
}

export default App;
