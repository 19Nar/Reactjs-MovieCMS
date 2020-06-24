import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import MovieDescriptionPage from "./views/MovieDescriptionPage/MovieDescriptionPage";
import Search from "./views/Search/Sections/Search";
import Soundtracks from "./views/Soundtracks/Soundtracks";
import Bestsellers from "./views/Soundtracks/Bestsellers"


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar  />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDescriptionPage, null)} />
          <Route exact path="/search" component={Auth(Search, null)} />
          <Route exact path="/soundtracks" component={Auth(Soundtracks, null)} />
          <Route exact path="/bestsellers" component={Auth(Bestsellers, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
