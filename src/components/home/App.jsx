import Header from "../common/header.jsx";
import React from "react";
import Home from "./home.jsx";
import About from "../pages/about.jsx";
import Services from "../pages/services.jsx";
import Portfolio from "../pages/portfolio.jsx";
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom";
import Testimonials from "../pages/testimonials.jsx";
import Blog from "../pages/blog.jsx";
import Contact from "../pages/contact.jsx";
import Footer from "../common/footer.jsx";


export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path='/services' component={Services}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/testimonials" component={Testimonials}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
        <Footer/>
      </Router>

    </>
  )
}
export default App;

