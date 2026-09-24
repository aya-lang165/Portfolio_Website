import React from "react"
import { testimonials } from "../data/dummydata";
import { FormatQuote } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderModule from "react-slick";

const Slider = SliderModule.default ?? SliderModule;


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <section className="testimonials">
            <div>
                <div className="opp">
                    <Slider {...settings} className="slick">
                        {testimonials.map((val, k) => (
                            <div id={k} className="k1">
                                <i className="cad">
                                    <FormatQuote />
                                </i>
                                <div className="paragraphe">
                                    <p>{val.text}</p>
                                </div>
                                <div className="manga">
                                    <img src={val.image} className="imgTest"></img>
                                </div>
                                <h1>{val.name}</h1>
                                <h2>{val.post}</h2>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    )
}
export default Testimonials;