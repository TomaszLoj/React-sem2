import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";

import AboutPage from "pages/About/AboutPage";
import CartPageContainer from "./container/CartPageContainer/CartPageContainer";
import HomePageContainer from "./container/HomePageContainer/HomePageContainer";
import CatalogPageContainer from "./container/CatalogPageContainer/CatalogPageContainer";
import ApiContainer from "./container/ApiContainer/ApiContainer";

const App = () => (
  <Provider store={store}>
   
    <Router>
      <>
        <ApiContainer />

        <Nav />
        <Container>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/catalog" component={CatalogPageContainer} />
          <Route path="/about" component={AboutPage} />
          <Route path="/cart" component={CartPageContainer} />
        </Container>
        <Footer />
      </>
    </Router>
  </Provider>
);

export default App;
