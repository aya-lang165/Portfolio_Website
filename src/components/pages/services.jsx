import React from "react";
import { services } from "../data/dummydata";
import Heading from "./heading";


const Services = () => {
    return (
        <section className="services">
            <div>
                <div className="containers">
                    <h2 className="h2">Services</h2>
                    <div className="box">
                        {services.map((val, id) => (
                            <div className="container" data-aos="flip-left" key={id}>
                                <i>{val.icon}</i>
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Services