import React from "react";
import Hero from "./hero";
import About from "../pages/about.jsx";
import Services from "../pages/services.jsx";
import Counter from "./counter.jsx";
import Portfolio from "../pages/portfolio.jsx";
import Testimonials from "../pages/testimonials.jsx";
import Blog from "../pages/blog.jsx";
import Contact from "../pages/contact.jsx";
import Footer from "../common/footer.jsx";


const Home=()=>{
    return(
        <>
        <Hero/>
        <About></About>
        <Services/>
        <Counter></Counter>
        <Portfolio/>
        <Testimonials/>
        <Blog/>
        <Contact/>
        
        </>
    )
}

export default Home